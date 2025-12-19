import { NextResponse } from 'next/server'
import { importInvoicesFromEmail, type EmailImportConfig } from '@/lib/email-service'
import { processOCR } from '@/lib/ocr-service'
import { checkDuplicate } from '@/lib/duplicate-detection'
import { prisma } from '@/lib/prisma'
import { saveFile } from '@/lib/file-storage'

// POST /api/emails/import - メールから請求書を自動取込
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // バリデーション
    if (!body.emailAddress) {
      return NextResponse.json(
        { error: 'メールアドレスが指定されていません' },
        { status: 400 }
      )
    }
    
    const config: EmailImportConfig = {
      emailAddress: body.emailAddress,
      folder: body.folder || 'INBOX',
      autoImport: body.autoImport || false,
      filterSender: body.filterSender || [],
      filterSubject: body.filterSubject || [],
    }
    
    // メールから請求書を取込
    const importResult = await importInvoicesFromEmail(config)
    
    if (!importResult.success) {
      return NextResponse.json(
        { 
          error: 'メール取込に失敗しました',
          details: importResult.errors 
        },
        { status: 500 }
      )
    }
    
    // 取込んだファイルを処理
    const processedInvoices = []
    const errors = []
    const duplicates = []
    
    for (const file of importResult.files) {
      try {
        // ファイルを保存
        const filePath = await saveFile(file)
        
        // OCR処理
        const ocrResult = await processOCR(file, {}, filePath)
        
        // 重複チェック
        const existingInvoices = await prisma.invoice.findMany({
          include: {
            items: true,
            taxBreakdowns: true,
          }
        })
        const duplicateCheck = await checkDuplicate(ocrResult, existingInvoices)
        
        if (duplicateCheck.isDuplicate) {
          duplicates.push({
            fileName: file.name,
            reason: '重複する請求書が見つかりました',
            matches: duplicateCheck.duplicates.slice(0, 3),
          })
          continue
        }
        
        // 請求書データを作成
        const invoice = await prisma.invoice.create({
          data: {
            invoiceNumber: ocrResult.invoiceNumber,
            issueDate: new Date(ocrResult.issueDate),
            dueDate: new Date(ocrResult.dueDate),
            transactionDate: ocrResult.transactionDate ? new Date(ocrResult.transactionDate) : null,
            transactionPeriodStart: ocrResult.transactionPeriodStart ? new Date(ocrResult.transactionPeriodStart) : null,
            transactionPeriodEnd: ocrResult.transactionPeriodEnd ? new Date(ocrResult.transactionPeriodEnd) : null,
            currency: ocrResult.currency,
            subject: ocrResult.subject,
            purchaseOrderNumber: ocrResult.purchaseOrderNumber,
            projectName: ocrResult.projectName,
            projectId: null,
            projectCode: undefined,
            
            supplier: ocrResult.supplier,
            supplierId: '', // TODO: 取引先マッチング
            supplierRegistrationNumber: ocrResult.supplierRegistrationNumber,
            supplierAddress: ocrResult.supplierAddress,
            supplierPhone: ocrResult.supplierPhone,
            supplierEmail: ocrResult.supplierEmail,
            supplierContactPerson: ocrResult.supplierContactPerson,
            
            billingTo: ocrResult.billingTo,
            billingToDepartment: ocrResult.billingToDepartment,
            billingToContactPerson: ocrResult.billingToContactPerson,
            
            subtotal: ocrResult.subtotal,
            taxAmount: ocrResult.taxAmount,
            amount: ocrResult.amount,
            taxExcludedAmount: ocrResult.taxExcludedAmount,
            taxExemptAmount: ocrResult.taxExemptAmount,
            nonTaxableAmount: ocrResult.nonTaxableAmount,
            
            paymentDueDate: ocrResult.paymentDueDate ? new Date(ocrResult.paymentDueDate) : null,
            paymentTerms: ocrResult.paymentTerms,
            bankName: ocrResult.bankName,
            bankBranchName: ocrResult.bankBranchName,
            bankAccountType: ocrResult.bankAccountType,
            bankAccountNumber: ocrResult.bankAccountNumber,
            bankAccountHolder: ocrResult.bankAccountHolder,
            transferFeePayer: ocrResult.transferFeePayer,
            
            normalizedSupplierName: ocrResult.supplier,
            matchingProjectName: ocrResult.projectName,
            matchingContactPerson: null,
            
            receiptMethod: 'メール',
            receiptDateTime: new Date(),
            registeredBy: 'システム自動登録',
            receivedFromEmail: config.emailAddress,
            fileHash: null,
            storagePath: filePath,
            ocrConfidenceScore: ocrResult.confidence,
            documentVersion: 1,
            
            filePath: filePath,
            fileName: file.name,
            fileSize: file.size,
            
            project: ocrResult.projectName || '未設定',
            status: '未処理',
            ocrConfidence: ocrResult.confidence ? Math.round(ocrResult.confidence * 100) : null,
            
            items: {
              create: ocrResult.items.map((item) => ({
                name: item.name,
                description: item.description,
                quantity: item.quantity,
                unit: item.unit,
                unitPrice: item.unitPrice,
                amount: item.amount,
                taxRate: item.taxRate,
                taxAmount: item.taxAmount,
                remarks: item.remarks,
              }))
            },
            taxBreakdowns: {
              create: ocrResult.taxBreakdowns?.map((breakdown) => ({
                taxRate: breakdown.taxRate,
                taxableAmount: breakdown.taxableAmount,
                taxAmount: breakdown.taxAmount,
              })) || []
            }
          },
          include: {
            items: true,
            taxBreakdowns: true,
          }
        })
        
        processedInvoices.push(invoice)
      } catch (error) {
        errors.push({
          fileName: file.name,
          error: error instanceof Error ? error.message : '不明なエラー',
        })
      }
    }
    
    return NextResponse.json({
      success: true,
      messagesProcessed: importResult.messagesProcessed,
      filesExtracted: importResult.filesExtracted,
      invoicesCreated: processedInvoices.length,
      duplicatesSkipped: duplicates.length,
      errors: errors.length,
      invoices: processedInvoices,
      duplicateDetails: duplicates,
      errorDetails: errors,
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'メール取込処理に失敗しました' },
      { status: 500 }
    )
  }
}