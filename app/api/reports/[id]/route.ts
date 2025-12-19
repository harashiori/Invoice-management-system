import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendReportEmail } from '@/lib/email-service'

/**
 * GET /api/reports/[id] - 特定レポート取得
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const report = await prisma.monthlyReport.findUnique({
      where: { id }
    })

    if (!report) {
      return NextResponse.json(
        { success: false, error: 'レポートが見つかりません' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      report
    })
  } catch (error) {
    console.error('[API] レポート取得エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'レポートの取得に失敗しました' 
      },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/reports/[id] - レポート削除
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    try {
      await prisma.monthlyReport.delete({
        where: { id }
      })

      return NextResponse.json({
        success: true,
        message: 'レポートを削除しました'
      })
    } catch (error: any) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { success: false, error: 'レポートが見つかりません' },
          { status: 404 }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('[API] レポート削除エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'レポートの削除に失敗しました' 
      },
      { status: 500 }
    )
  }
}

/**
 * POST /api/reports/[id]/send - レポートをメール送信
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { recipients } = body

    // バリデーション
    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json(
        { success: false, error: '送信先メールアドレスを指定してください' },
        { status: 400 }
      )
    }

    const report = await prisma.monthlyReport.findUnique({
      where: { id }
    })

    if (!report) {
      return NextResponse.json(
        { success: false, error: 'レポートが見つかりません' },
        { status: 404 }
      )
    }

    if (!report.filePath) {
      return NextResponse.json(
        { success: false, error: 'レポートPDFが生成されていません' },
        { status: 400 }
      )
    }

    // メール送信
    const emailSent = await sendReportEmail(recipients, report.filePath, report.period)

    if (!emailSent) {
      return NextResponse.json(
        { success: false, error: 'メール送信に失敗しました' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'レポートを送信しました',
      recipients
    })
  } catch (error) {
    console.error('[API] レポート送信エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'レポートの送信に失敗しました' 
      },
      { status: 500 }
    )
  }
}