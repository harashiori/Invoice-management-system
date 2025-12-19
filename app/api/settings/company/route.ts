import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT /api/settings/company - Update company settings
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const settings = await prisma.settings.update({
      where: { id: 'default' },
      data: {
        companyName: body.companyName,
        companyRegistration: body.companyRegistration,
        companyAddress: body.companyAddress,
        companyPhone: body.companyPhone,
        companyEmail: body.companyEmail,
        fiscalYearStart: body.fiscalYearStart,
      }
    })
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update company settings' },
      { status: 500 }
    )
  }
}