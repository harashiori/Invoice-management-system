import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

// GET /api/payments - Get all payments
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    const where: any = {}
    if (status && status !== 'all') {
      where.status = status
    }
    
    const payments = await prisma.payment.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      include: {
        invoice: {
          include: {
            supplierRef: true,
            projectRef: true
          }
        }
      },
      orderBy: { dueDate: 'asc' }
    })
    
    // Format dates to y/m/d format
    const formattedPayments = payments.map(payment => ({
      ...payment,
      dueDate: formatDate(payment.dueDate),
      paidAt: payment.paidAt ? formatDate(payment.paidAt) : null,
      reconciliationDate: payment.reconciliationDate ? formatDate(payment.reconciliationDate) : null,
    }))
    
    return NextResponse.json(formattedPayments)
  } catch (error) {
    console.error('Error fetching payments:', error)
    return NextResponse.json(
      { error: '支払情報の取得に失敗しました' },
      { status: 500 }
    )
  }
}

// POST /api/payments - Create a new payment
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.invoiceId || !body.amount) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています' },
        { status: 400 }
      )
    }
    
    const payment = await prisma.payment.create({
      data: {
        invoiceId: body.invoiceId,
        supplier: body.supplier,
        project: body.project,
        amount: body.amount,
        dueDate: new Date(body.dueDate),
        status: body.status || '未処理',
        paidAt: body.paidAt ? new Date(body.paidAt) : null,
        paymentMethod: body.paymentMethod || null,
        bankTransactionId: body.bankTransactionId || null,
        reconciliationStatus: body.reconciliationStatus || null,
        reconciliationNote: body.reconciliationNote || null,
        reconciliationDate: body.reconciliationDate ? new Date(body.reconciliationDate) : null,
        actualAmount: body.actualAmount || null
      },
      include: {
        invoice: {
          include: {
            supplierRef: true,
            projectRef: true
          }
        }
      }
    })
    
    return NextResponse.json(payment, { status: 201 })
  } catch (error) {
    console.error('Error creating payment:', error)
    return NextResponse.json(
      { error: '支払情報の作成に失敗しました' },
      { status: 500 }
    )
  }
}