import { NextResponse } from 'next/server'
import { processOCR, validateOCRResult } from '@/lib/ocr-service'
import { checkDuplicate } from '@/lib/duplicate-detection'
import { prisma } from '@/lib/prisma'
import { fileStorage } from '@/lib/file-storage'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/upload - ファイルアップロードとOCR処理
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'ファイルが指定されていません' },
        { status: 400 }
      )
    }

    // ファイルバリデーション
    const validationError = validateFile(file)
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      )
    }

    // ファイルを保存
    let savedFilePath: string | undefined
    try {
      savedFilePath = await fileStorage.saveFile(file, 'invoices')
    } catch (error) {
      console.error('File save error:', error)
      // ファイル保存に失敗してもOCR処理は続行
    }

    // OCR処理を実行（ファイルパスを渡す）
    let ocrResult
    try {
      ocrResult = await processOCR(file, {
        language: 'ja',
        confidenceThreshold: 0.70,
        extractItems: true,
      }, savedFilePath)
    } catch (error) {
      return NextResponse.json(
        { 
          error: 'OCR処理に失敗しました',
          details: error instanceof Error ? error.message : '不明なエラー'
        },
        { status: 500 }
      )
    }

    // OCR結果の検証
    const validation = validateOCRResult(ocrResult)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: 'OCR結果の検証に失敗しました',
          validationErrors: validation.errors,
          ocrResult,
        },
        { status: 422 }
      )
    }

    // 重複チェック
    const existingInvoices = await prisma.invoice.findMany({
      include: {
        items: true,
        taxBreakdowns: true,
      }
    })
    const duplicateCheck = await checkDuplicate(ocrResult, existingInvoices, {
      strictMode: false,
      checkInvoiceNumber: true,
      checkSupplierAndAmount: true,
      checkSupplierAndDate: true,
      amountTolerance: 100,
      dateTolerance: 3,
    })

    // レスポンスを返す
    return NextResponse.json({
      success: true,
      ocrResult,
      validation: {
        isValid: validation.isValid,
        errors: validation.errors,
        warnings: validation.warnings,
      },
      duplicateCheck: {
        isDuplicate: duplicateCheck.isDuplicate,
        duplicates: duplicateCheck.duplicates.map(d => ({
          invoiceId: d.invoice.id,
          matchType: d.matchType,
          matchScore: d.matchScore,
          matchReasons: d.matchReasons,
        })),
        warnings: duplicateCheck.warnings,
      },
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
        path: savedFilePath,
      },
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { 
        error: 'ファイルアップロード処理に失敗しました',
        details: error instanceof Error ? error.message : '不明なエラー'
      },
      { status: 500 }
    )
  }
}

/**
 * ファイルバリデーション
 */
function validateFile(file: File): string | null {
  // ファイルサイズチェック (10MB)
  const maxSize = 10 * 1024 * 1024
  if (file.size > maxSize) {
    return `ファイルサイズが大きすぎます (最大: ${maxSize / 1024 / 1024}MB)`
  }

  if (file.size === 0) {
    return 'ファイルが空です'
  }

  // ファイルタイプチェック
  const validTypes = [
    'application/pdf',
    'image/jpeg',
    'image/jpg',
    'image/png',
  ]

  if (!validTypes.includes(file.type)) {
    return `対応していないファイル形式です (対応形式: PDF, JPG, PNG)`
  }

  // ファイル名チェック
  if (!file.name || file.name.length > 255) {
    return 'ファイル名が無効です'
  }

  return null
}

/**
 * GET /api/upload - アップロード設定情報の取得
 */
export async function GET() {
  return NextResponse.json({
    maxFileSize: 10 * 1024 * 1024, // 10MB
    maxFilesPerUpload: 10,
    supportedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
    ocrLanguages: ['ja', 'en'],
    confidenceThreshold: 0.70,
  })
}