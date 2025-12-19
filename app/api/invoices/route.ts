import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

// GET /api/invoices - Get all invoices
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const supplierId = searchParams.get('supplierId')
    
    // Build where clause
    const where: any = {}
    
    if (status && status !== 'all') {
      where.status = status
    }
    
    if (supplierId) {
      where.supplierId = supplierId
    }
    
    const invoices = await prisma.invoice.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      include: {
        supplierRef: true,
        projectRef: true,
        items: true,
        taxBreakdowns: true,
        payments: true
      },
      orderBy: { createdAt: 'desc' }
    })
    
    // Format dates to y/m/d format
    const formattedInvoices = invoices.map(invoice => ({
      ...invoice,
      issueDate: formatDate(invoice.issueDate),
      dueDate: formatDate(invoice.dueDate),
      transactionDate: invoice.transactionDate ? formatDate(invoice.transactionDate) : null,
      transactionPeriodStart: invoice.transactionPeriodStart ? formatDate(invoice.transactionPeriodStart) : null,
      transactionPeriodEnd: invoice.transactionPeriodEnd ? formatDate(invoice.transactionPeriodEnd) : null,
      paymentDueDate: invoice.paymentDueDate ? formatDate(invoice.paymentDueDate) : null,
      receiptDateTime: invoice.receiptDateTime ? formatDate(invoice.receiptDateTime) : null,
    }))
    
    return NextResponse.json(formattedInvoices)
  } catch (error) {
    console.error('Error fetching invoices:', error)
    return NextResponse.json(
      { error: '請求書の取得に失敗しました' },
      { status: 500 }
    )
  }
}

// POST /api/invoices - Create a new invoice
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.supplier || !body.supplierId || !body.amount) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています' },
        { status: 400 }
      )
    }
    
    // Helper function to parse y/m/d format dates
    const parseDate = (dateStr: string): Date => {
      // Check if date is in y/m/d format (e.g., "2025/1/21")
      if (dateStr.includes('/') && !dateStr.includes('-')) {
        const [year, month, day] = dateStr.split('/').map(Number)
        return new Date(year, month - 1, day)
      }
      // Otherwise, use standard Date parsing
      return new Date(dateStr)
    }

    // Create invoice with related data
    const invoice = await prisma.invoice.create({
      data: {
        // Basic info
        invoiceNumber: body.invoiceNumber || null,
        issueDate: parseDate(body.issueDate),
        dueDate: parseDate(body.dueDate),
        transactionDate: body.transactionDate ? parseDate(body.transactionDate) : null,
        transactionPeriodStart: body.transactionPeriodStart ? parseDate(body.transactionPeriodStart) : null,
        transactionPeriodEnd: body.transactionPeriodEnd ? parseDate(body.transactionPeriodEnd) : null,
        currency: body.currency || 'JPY',
        subject: body.subject || null,
        purchaseOrderNumber: body.purchaseOrderNumber || null,
        projectName: body.projectName || null,
        projectId: body.projectId || null,
        projectCode: body.projectCode || null,
        
        // Supplier info
        supplier: body.supplier,
        supplierId: body.supplierId,
        supplierRegistrationNumber: body.supplierRegistrationNumber || null,
        supplierAddress: body.supplierAddress || null,
        supplierPhone: body.supplierPhone || null,
        supplierEmail: body.supplierEmail || null,
        supplierContactPerson: body.supplierContactPerson || null,
        
        // Billing info
        billingTo: body.billingTo || null,
        billingToDepartment: body.billingToDepartment || null,
        billingToContactPerson: body.billingToContactPerson || null,
        
        // Amount and tax
        subtotal: body.subtotal || null,
        taxAmount: body.taxAmount || 0,
        amount: body.amount,
        taxExcludedAmount: body.taxExcludedAmount || body.amount,
        taxExemptAmount: body.taxExemptAmount || null,
        nonTaxableAmount: body.nonTaxableAmount || null,
        
        // Payment terms
        paymentDueDate: body.paymentDueDate ? parseDate(body.paymentDueDate) : null,
        paymentTerms: body.paymentTerms || null,
        bankName: body.bankName || null,
        bankBranchName: body.bankBranchName || null,
        bankAccountType: body.bankAccountType || null,
        bankAccountNumber: body.bankAccountNumber || null,
        bankAccountHolder: body.bankAccountHolder || null,
        transferFeePayer: body.transferFeePayer || null,
        
        // Matching keys
        normalizedSupplierName: body.normalizedSupplierName || null,
        matchingProjectName: body.matchingProjectName || null,
        matchingContactPerson: body.matchingContactPerson || null,
        
        // Metadata
        receiptMethod: body.receiptMethod || null,
        receiptDateTime: body.receiptDateTime ? parseDate(body.receiptDateTime) : null,
        registeredBy: body.registeredBy || null,
        receivedFromEmail: body.receivedFromEmail || null,
        fileHash: body.fileHash || null,
        storagePath: body.storagePath || null,
        ocrConfidenceScore: body.ocrConfidenceScore || null,
        documentVersion: body.documentVersion || 1,
        
        // File info
        filePath: body.filePath || null,
        fileName: body.fileName || null,
        fileSize: body.fileSize || null,
        
        // Status
        project: body.project || body.projectName || '',
        status: body.status || '未処理',
        ocrConfidence: body.ocrConfidence || null,
        
        // Create related items if provided
        items: body.items ? {
          create: body.items.map((item: any) => ({
            name: item.name,
            description: item.description || null,
            quantity: item.quantity,
            unit: item.unit || null,
            unitPrice: item.unitPrice,
            amount: item.amount,
            taxRate: item.taxRate || null,
            taxAmount: item.taxAmount || null,
            remarks: item.remarks || null
          }))
        } : undefined,
        
        // Create tax breakdowns if provided
        taxBreakdowns: body.taxBreakdowns ? {
          create: body.taxBreakdowns.map((tax: any) => ({
            taxRate: tax.taxRate,
            taxableAmount: tax.taxableAmount,
            taxAmount: tax.taxAmount
          }))
        } : undefined
      },
      include: {
        supplierRef: true,
        projectRef: true,
        items: true,
        taxBreakdowns: true,
        payments: true
      }
    })
    
    return NextResponse.json(invoice, { status: 201 })
  } catch (error) {
    console.error('Error creating invoice:', error)
    return NextResponse.json(
      { error: '請求書の作成に失敗しました' },
      { status: 500 }
    )
  }
}