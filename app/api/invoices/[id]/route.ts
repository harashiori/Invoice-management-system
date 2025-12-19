import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

// GET /api/invoices/[id] - Get a specific invoice
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: {
        supplierRef: true,
        projectRef: true,
        items: true,
        taxBreakdowns: true,
        payments: true
      }
    })
    
    if (!invoice) {
      return NextResponse.json(
        { error: '請求書が見つかりません' },
        { status: 404 }
      )
    }
    
    // Format dates to y/m/d format
    const formattedInvoice = {
      ...invoice,
      issueDate: formatDate(invoice.issueDate),
      dueDate: formatDate(invoice.dueDate),
      transactionDate: invoice.transactionDate ? formatDate(invoice.transactionDate) : null,
      transactionPeriodStart: invoice.transactionPeriodStart ? formatDate(invoice.transactionPeriodStart) : null,
      transactionPeriodEnd: invoice.transactionPeriodEnd ? formatDate(invoice.transactionPeriodEnd) : null,
      paymentDueDate: invoice.paymentDueDate ? formatDate(invoice.paymentDueDate) : null,
      receiptDateTime: invoice.receiptDateTime ? formatDate(invoice.receiptDateTime) : null,
    }
    
    return NextResponse.json(formattedInvoice)
  } catch (error) {
    console.error('Error fetching invoice:', error)
    return NextResponse.json(
      { error: '請求書の取得に失敗しました' },
      { status: 500 }
    )
  }
}

// PUT /api/invoices/[id] - Update an invoice
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    const body = await request.json()
    
    // Check if invoice exists
    const existingInvoice = await prisma.invoice.findUnique({
      where: { id }
    })
    
    if (!existingInvoice) {
      return NextResponse.json(
        { error: '請求書が見つかりません' },
        { status: 404 }
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
    
    // Build update data
    const updateData: any = {}
    
    // Basic fields
    if (body.invoiceNumber !== undefined) updateData.invoiceNumber = body.invoiceNumber
    if (body.issueDate !== undefined) updateData.issueDate = parseDate(body.issueDate)
    if (body.dueDate !== undefined) updateData.dueDate = parseDate(body.dueDate)
    if (body.transactionDate !== undefined) updateData.transactionDate = body.transactionDate ? parseDate(body.transactionDate) : null
    if (body.transactionPeriodStart !== undefined) updateData.transactionPeriodStart = body.transactionPeriodStart ? parseDate(body.transactionPeriodStart) : null
    if (body.transactionPeriodEnd !== undefined) updateData.transactionPeriodEnd = body.transactionPeriodEnd ? parseDate(body.transactionPeriodEnd) : null
    if (body.currency !== undefined) updateData.currency = body.currency
    if (body.subject !== undefined) updateData.subject = body.subject
    if (body.purchaseOrderNumber !== undefined) updateData.purchaseOrderNumber = body.purchaseOrderNumber
    if (body.projectName !== undefined) updateData.projectName = body.projectName
    if (body.projectId !== undefined) updateData.projectId = body.projectId
    if (body.projectCode !== undefined) updateData.projectCode = body.projectCode
    
    // Supplier info
    if (body.supplier !== undefined) updateData.supplier = body.supplier
    if (body.supplierId !== undefined) updateData.supplierId = body.supplierId
    if (body.supplierRegistrationNumber !== undefined) updateData.supplierRegistrationNumber = body.supplierRegistrationNumber
    if (body.supplierAddress !== undefined) updateData.supplierAddress = body.supplierAddress
    if (body.supplierPhone !== undefined) updateData.supplierPhone = body.supplierPhone
    if (body.supplierEmail !== undefined) updateData.supplierEmail = body.supplierEmail
    if (body.supplierContactPerson !== undefined) updateData.supplierContactPerson = body.supplierContactPerson
    
    // Billing info
    if (body.billingTo !== undefined) updateData.billingTo = body.billingTo
    if (body.billingToDepartment !== undefined) updateData.billingToDepartment = body.billingToDepartment
    if (body.billingToContactPerson !== undefined) updateData.billingToContactPerson = body.billingToContactPerson
    
    // Amount and tax
    if (body.subtotal !== undefined) updateData.subtotal = body.subtotal
    if (body.taxAmount !== undefined) updateData.taxAmount = body.taxAmount
    if (body.amount !== undefined) updateData.amount = body.amount
    if (body.taxExcludedAmount !== undefined) updateData.taxExcludedAmount = body.taxExcludedAmount
    if (body.taxExemptAmount !== undefined) updateData.taxExemptAmount = body.taxExemptAmount
    if (body.nonTaxableAmount !== undefined) updateData.nonTaxableAmount = body.nonTaxableAmount
    
    // Payment terms
    if (body.paymentDueDate !== undefined) updateData.paymentDueDate = body.paymentDueDate ? parseDate(body.paymentDueDate) : null
    if (body.paymentTerms !== undefined) updateData.paymentTerms = body.paymentTerms
    if (body.bankName !== undefined) updateData.bankName = body.bankName
    if (body.bankBranchName !== undefined) updateData.bankBranchName = body.bankBranchName
    if (body.bankAccountType !== undefined) updateData.bankAccountType = body.bankAccountType
    if (body.bankAccountNumber !== undefined) updateData.bankAccountNumber = body.bankAccountNumber
    if (body.bankAccountHolder !== undefined) updateData.bankAccountHolder = body.bankAccountHolder
    if (body.transferFeePayer !== undefined) updateData.transferFeePayer = body.transferFeePayer
    
    // Matching keys
    if (body.normalizedSupplierName !== undefined) updateData.normalizedSupplierName = body.normalizedSupplierName
    if (body.matchingProjectName !== undefined) updateData.matchingProjectName = body.matchingProjectName
    if (body.matchingContactPerson !== undefined) updateData.matchingContactPerson = body.matchingContactPerson
    
    // Metadata
    if (body.receiptMethod !== undefined) updateData.receiptMethod = body.receiptMethod
    if (body.receiptDateTime !== undefined) updateData.receiptDateTime = body.receiptDateTime ? parseDate(body.receiptDateTime) : null
    if (body.registeredBy !== undefined) updateData.registeredBy = body.registeredBy
    if (body.receivedFromEmail !== undefined) updateData.receivedFromEmail = body.receivedFromEmail
    if (body.fileHash !== undefined) updateData.fileHash = body.fileHash
    if (body.storagePath !== undefined) updateData.storagePath = body.storagePath
    if (body.ocrConfidenceScore !== undefined) updateData.ocrConfidenceScore = body.ocrConfidenceScore
    if (body.documentVersion !== undefined) updateData.documentVersion = body.documentVersion
    
    // File info
    if (body.filePath !== undefined) updateData.filePath = body.filePath
    if (body.fileName !== undefined) updateData.fileName = body.fileName
    if (body.fileSize !== undefined) updateData.fileSize = body.fileSize
    
    // Status
    if (body.project !== undefined) updateData.project = body.project
    if (body.status !== undefined) updateData.status = body.status
    if (body.ocrConfidence !== undefined) updateData.ocrConfidence = body.ocrConfidence
    
    const invoice = await prisma.invoice.update({
      where: { id },
      data: updateData,
      include: {
        supplierRef: true,
        projectRef: true,
        items: true,
        taxBreakdowns: true,
        payments: true
      }
    })
    
    return NextResponse.json(invoice)
  } catch (error: any) {
    console.error('Error updating invoice:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '請求書が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: '請求書の更新に失敗しました' },
      { status: 500 }
    )
  }
}

// DELETE /api/invoices/[id] - Delete an invoice
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    
    await prisma.invoice.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting invoice:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '請求書が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: '請求書の削除に失敗しました' },
      { status: 500 }
    )
  }
}