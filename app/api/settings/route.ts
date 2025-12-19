import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/settings - Get all settings
export async function GET() {
  try {
    const settings = await prisma.settings.findUnique({
      where: { id: 'default' }
    })
    
    if (!settings) {
      return NextResponse.json(
        { error: 'Settings not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    )
  }
}

// PUT /api/settings - Update all settings
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const settings = await prisma.settings.update({
      where: { id: 'default' },
      data: body
    })
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    )
  }
}