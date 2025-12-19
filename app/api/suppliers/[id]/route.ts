import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

// GET /api/suppliers/[id] - Get a specific supplier
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    const supplier = await prisma.supplier.findUnique({
      where: { id }
    })
    
    if (!supplier) {
      return NextResponse.json(
        { error: 'Supplier not found' },
        { status: 404 }
      )
    }
    
    // Transform dates to ISO strings for frontend consistency
    const transformedSupplier = {
      ...supplier,
      createdAt: supplier.createdAt.toISOString(),
      updatedAt: supplier.updatedAt.toISOString()
    }
    
    return NextResponse.json(transformedSupplier)
  } catch (error) {
    console.error('Error fetching supplier:', error)
    return NextResponse.json(
      { error: 'Failed to fetch supplier' },
      { status: 500 }
    )
  }
}

// PUT /api/suppliers/[id] - Update a supplier
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const supplier = await prisma.supplier.update({
      where: { id },
      data: {
        name: body.name,
        code: body.code,
        registrationNumber: body.registrationNumber,
        address: body.address,
        phone: body.phone,
        email: body.email,
        contact: body.contact,
        status: body.status
      }
    })
    
    // Transform dates to ISO strings for frontend consistency
    const transformedSupplier = {
      ...supplier,
      createdAt: supplier.createdAt.toISOString(),
      updatedAt: supplier.updatedAt.toISOString()
    }
    
    return NextResponse.json(transformedSupplier)
  } catch (error: any) {
    console.error('Error updating supplier:', error)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Supplier not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update supplier' },
      { status: 500 }
    )
  }
}

// DELETE /api/suppliers/[id] - Delete a supplier
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params
    
    // Check if supplier has any invoices
    const invoiceCount = await prisma.invoice.count({
      where: { supplierId: id }
    })
    
    if (invoiceCount > 0) {
      return NextResponse.json(
        { error: '請求書が紐付いている取引先は削除できません' },
        { status: 400 }
      )
    }
    
    // Check if supplier has any projects
    const projectCount = await prisma.project.count({
      where: { clientId: id }
    })
    
    if (projectCount > 0) {
      return NextResponse.json(
        { error: '案件が紐付いている取引先は削除できません' },
        { status: 400 }
      )
    }
    
    await prisma.supplier.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting supplier:', error)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '取引先が見つかりません' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: '取引先の削除に失敗しました' },
      { status: 500 }
    )
  }
}