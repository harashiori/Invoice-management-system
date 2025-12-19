import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/projects/[id] - Get project details with stats
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        client: true
      }
    })
    
    if (!project) {
      return NextResponse.json(
        { error: '案件が見つかりません' },
        { status: 404 }
      )
    }
    
    // Get invoices for this project
    const invoices = await prisma.invoice.findMany({
      where: { projectId: id }
    })
    
    // Calculate stats
    const stats = {
      invoiceCount: invoices.length,
      totalAmount: invoices.reduce((sum, inv) => sum + inv.amount, 0),
      paidAmount: invoices
        .filter(inv => inv.status === '支払済')
        .reduce((sum, inv) => sum + inv.amount, 0)
    }
    
    // Transform project to match frontend type expectations
    const transformedProject = {
      ...project,
      clientName: project.client.name,
      startDate: project.startDate.toISOString().split('T')[0],
      endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString()
    }
    
    return NextResponse.json(transformedProject)
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: '案件の取得に失敗しました' },
      { status: 500 }
    )
  }
}

// PUT /api/projects/[id] - Update a project
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id }
    })
    
    if (!existingProject) {
      return NextResponse.json(
        { error: '案件が見つかりません' },
        { status: 404 }
      )
    }
    
    // If code is being updated, check for duplicates
    if (body.code && body.code !== existingProject.code) {
      const duplicateCode = await prisma.project.findUnique({
        where: { code: body.code }
      })
      
      if (duplicateCode) {
        return NextResponse.json(
          { error: '案件コードが既に存在します' },
          { status: 400 }
        )
      }
    }
    
    // Build update data
    const updateData: any = {}
    
    if (body.code !== undefined) updateData.code = body.code
    if (body.name !== undefined) updateData.name = body.name
    if (body.description !== undefined) updateData.description = body.description
    if (body.clientId !== undefined) updateData.clientId = body.clientId
    if (body.status !== undefined) updateData.status = body.status
    if (body.startDate !== undefined) updateData.startDate = new Date(body.startDate)
    if (body.endDate !== undefined) updateData.endDate = body.endDate ? new Date(body.endDate) : null
    if (body.budget !== undefined) updateData.budget = body.budget
    if (body.actualAmount !== undefined) updateData.actualAmount = body.actualAmount
    if (body.manager !== undefined) updateData.manager = body.manager
    if (body.members !== undefined) updateData.members = body.members
    if (body.tags !== undefined) updateData.tags = body.tags
    
    const project = await prisma.project.update({
      where: { id },
      data: updateData,
      include: {
        client: true
      }
    })
    
    // Transform to match frontend type expectations
    const transformedProject = {
      ...project,
      clientName: project.client.name,
      startDate: project.startDate.toISOString().split('T')[0],
      endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString()
    }
    
    return NextResponse.json(transformedProject)
  } catch (error: any) {
    console.error('Error updating project:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '案件が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: '案件の更新に失敗しました' },
      { status: 500 }
    )
  }
}

// DELETE /api/projects/[id] - Delete a project
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // Check if project has any invoices
    const invoiceCount = await prisma.invoice.count({
      where: { projectId: id }
    })
    
    if (invoiceCount > 0) {
      return NextResponse.json(
        { error: '請求書が紐付いている案件は削除できません' },
        { status: 400 }
      )
    }
    
    await prisma.project.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting project:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: '案件が見つかりません' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: '案件の削除に失敗しました' },
      { status: 500 }
    )
  }
}