import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

// GET /api/payments/[id] - Get a specific payment
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    
    const payment = await prisma.payment.findUnique({
      where: { id },
      include: {
        invoice: {
          include: {
            supplierRef: true,
            projectRef: true
          }
        }
      }
    })
    
    if (!payment) {
      return NextResponse.json(
        { error: '支払情報が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(payment)
  } catch (error) {
    console.error('Error fetching payment:', error)
    return NextResponse.json(
      { error: '支払情報の取得に失敗しました' },
      { status: 500 }
    )
  }
}

// PUT /api/payments/[id] - Update a payment (e.g., mark as paid)
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const existingPayment = await prisma.payment.findUnique({
      where: { id }
    })
    
    if (!existingPayment) {
      return NextResponse.json(
        { error: '支払情報が見つかりません' },
        { status: 404 }
      )
    }
    
    const updateData: any = {}
    
    if (body.invoiceId !== undefined) updateData.invoiceId = body.invoiceId
    if (body.supplier !== undefined) updateData.supplier = body.supplier
    if (body.project !== undefined) updateData.project = body.project
    if (body.amount !== undefined) updateData.amount = body.amount
    if (body.dueDate !== undefined) updateData.dueDate = new Date(body.dueDate)
    if (body.status !== undefined) updateData.status = body.status
    if (body.paidAt !== undefined) updateData.paidAt = body.paidAt ? new Date(body.paidAt) : null
    if (body.paymentMethod !== undefined) updateData.paymentMethod = body.paymentMethod
    if (body.bankTransactionId !== undefined) updateData.bankTransactionId = body.bankTransactionId
    if (body.reconciliationStatus !== undefined) updateData.reconciliationStatus = body.reconciliationStatus
    if (body.reconciliationNote !== undefined) updateData.reconciliationNote = body.reconciliationNote
    if (body.reconciliationDate !== undefined) updateData.reconciliationDate = body.reconciliationDate ? new Date(body.reconciliationDate) : null
    if (body.actualAmount !== undefined) updateData.actualAmount = body.actualAmount
    
    const payment = await prisma.payment.update({
      where: { id },
      data: updateData,
      include: {
        invoice: {
          include: {
            supplierRef: true,
            projectRef: true
          }
        }
      }
    })
    
    return NextResponse.json(payment)
  } catch (error: any) {
    console.error('Error updating payment:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '支払情報が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: '支払情報の更新に失敗しました' },
      { status: 500 }
    )
  }
}

// DELETE /api/payments/[id] - Delete a payment
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    
    await prisma.payment.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting payment:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '支払情報が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: '支払情報の削除に失敗しました' },
      { status: 500 }
    )
  }
}