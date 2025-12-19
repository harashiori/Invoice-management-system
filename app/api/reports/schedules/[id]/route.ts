import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/reports/schedules/[id] - スケジュール詳細取得
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const schedule = await prisma.reportSchedule.findUnique({
      where: { id }
    })

    if (!schedule) {
      return NextResponse.json(
        { success: false, error: 'スケジュールが見つかりません' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      schedule
    })
  } catch (error) {
    console.error('[API] スケジュール取得エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'スケジュールの取得に失敗しました' 
      },
      { status: 500 }
    )
  }
}

/**
 * PUT /api/reports/schedules/[id] - スケジュール更新
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    const { name, frequency, dayOfMonth, recipients, enabled } = body

    const existingSchedule = await prisma.reportSchedule.findUnique({
      where: { id }
    })

    if (!existingSchedule) {
      return NextResponse.json(
        { success: false, error: 'スケジュールが見つかりません' },
        { status: 404 }
      )
    }

    // バリデーション
    if (name !== undefined && !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'スケジュール名を入力してください' },
        { status: 400 }
      )
    }

    if (frequency !== undefined && !['monthly', 'weekly', 'daily'].includes(frequency)) {
      return NextResponse.json(
        { success: false, error: '頻度を選択してください (monthly/weekly/daily)' },
        { status: 400 }
      )
    }

    if (frequency === 'monthly' && dayOfMonth !== undefined && (dayOfMonth < 1 || dayOfMonth > 31)) {
      return NextResponse.json(
        { success: false, error: '月次の場合は日付(1-31)を指定してください' },
        { status: 400 }
      )
    }

    if (recipients !== undefined && (!Array.isArray(recipients) || recipients.length === 0)) {
      return NextResponse.json(
        { success: false, error: '送信先メールアドレスを指定してください' },
        { status: 400 }
      )
    }

    // 更新データ準備
    const updates: any = {}
    if (name !== undefined) updates.name = name.trim()
    if (frequency !== undefined) updates.frequency = frequency
    if (dayOfMonth !== undefined) updates.dayOfMonth = dayOfMonth
    if (recipients !== undefined) updates.recipients = recipients
    if (enabled !== undefined) updates.enabled = enabled

    const updatedSchedule = await prisma.reportSchedule.update({
      where: { id },
      data: updates
    })

    console.log(`[API] スケジュール更新完了: ${id}`)

    return NextResponse.json({
      success: true,
      schedule: updatedSchedule,
      message: 'スケジュールを更新しました'
    })
  } catch (error) {
    console.error('[API] スケジュール更新エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'スケジュールの更新に失敗しました' 
      },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/reports/schedules/[id] - スケジュール削除
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    try {
      await prisma.reportSchedule.delete({
        where: { id }
      })

      console.log(`[API] スケジュール削除完了: ${id}`)

      return NextResponse.json({
        success: true,
        message: 'スケジュールを削除しました'
      })
    } catch (error: any) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { success: false, error: 'スケジュールが見つかりません' },
          { status: 404 }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('[API] スケジュール削除エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'スケジュールの削除に失敗しました' 
      },
      { status: 500 }
    )
  }
}