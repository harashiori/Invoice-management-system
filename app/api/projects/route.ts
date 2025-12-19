import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/projects - Get all projects
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const clientId = searchParams.get('clientId')
    const search = searchParams.get('search')
    
    // Build where clause
    const where: any = {}
    
    if (status && status !== 'all') {
      where.status = status
    }
    
    if (clientId) {
      where.clientId = clientId
    }
    
    if (search) {
      where.OR = [
        { code: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    const projects = await prisma.project.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      include: {
        client: true
      },
      orderBy: { createdAt: 'desc' }
    })
    
    // Transform to match frontend type expectations
    const transformedProjects = projects.map(project => ({
      ...project,
      clientName: project.client.name,
      startDate: project.startDate.toISOString().split('T')[0],
      endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString()
    }))
    
    return NextResponse.json(transformedProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: '案件の取得に失敗しました' },
      { status: 500 }
    )
  }
}

// POST /api/projects - Create a new project
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.code || !body.name || !body.clientId || !body.status || !body.startDate) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています' },
        { status: 400 }
      )
    }
    
    // Check if project code already exists
    const existingProject = await prisma.project.findUnique({
      where: { code: body.code }
    })
    
    if (existingProject) {
      return NextResponse.json(
        { error: '案件コードが既に存在します' },
        { status: 400 }
      )
    }
    
    const project = await prisma.project.create({
      data: {
        code: body.code,
        name: body.name,
        description: body.description || null,
        clientId: body.clientId,
        status: body.status,
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        budget: body.budget || null,
        actualAmount: 0,
        manager: body.manager || null,
        members: body.members || [],
        tags: body.tags || []
      },
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
    
    return NextResponse.json(transformedProject, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: '案件の作成に失敗しました' },
      { status: 500 }
    )
  }
}