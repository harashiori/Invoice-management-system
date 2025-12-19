import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/suppliers - Get all suppliers
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    const suppliers = await prisma.supplier.findMany({
      where: status && status !== 'all' ? { status } : undefined,
      orderBy: { createdAt: 'desc' }
    })
    
    // Transform dates to ISO strings for frontend consistency
    const transformedSuppliers = suppliers.map(supplier => ({
      ...supplier,
      createdAt: supplier.createdAt.toISOString(),
      updatedAt: supplier.updatedAt.toISOString()
    }))
    
    return NextResponse.json(transformedSuppliers)
  } catch (error) {
    console.error('Error fetching suppliers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch suppliers' },
      { status: 500 }
    )
  }
}

// POST /api/suppliers - Create a new supplier
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.code || !body.registrationNumber || !body.address || !body.phone || !body.email || !body.contact) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const supplier = await prisma.supplier.create({
      data: {
        name: body.name,
        code: body.code,
        registrationNumber: body.registrationNumber,
        address: body.address,
        phone: body.phone,
        email: body.email,
        contact: body.contact,
        status: body.status || 'active'
      }
    })
    
    // Transform dates to ISO strings for frontend consistency
    const transformedSupplier = {
      ...supplier,
      createdAt: supplier.createdAt.toISOString(),
      updatedAt: supplier.updatedAt.toISOString()
    }
    
    return NextResponse.json(transformedSupplier, { status: 201 })
  } catch (error) {
    console.error('Error creating supplier:', error)
    return NextResponse.json(
      { error: 'Failed to create supplier' },
      { status: 500 }
    )
  }
}