import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { ReportSchedule } from '@/lib/types'

/**
 * GET /api/reports/schedules - スケジュール一覧取得
 */
export async function GET() {
  try {
    const schedules = await prisma.reportSchedule.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json({
      success: true,
      schedules,
      count: schedules.length
    })
  } catch (error) {
    console.error('[API] スケジュール一覧取得エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'スケジュール一覧の取得に失敗しました' 
      },
      { status: 500 }
    )
  }
}

/**
 * POST /api/reports/schedules - スケジュール作成
 * Body: { name: string, frequency: string, dayOfMonth?: number, recipients: string[], enabled: boolean }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, frequency, dayOfMonth, recipients, enabled } = body

    // バリデーション
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'スケジュール名を入力してください' },
        { status: 400 }
      )
    }

    if (!frequency || !['monthly', 'weekly', 'daily'].includes(frequency)) {
      return NextResponse.json(
        { success: false, error: '頻度を選択してください (monthly/weekly/daily)' },
        { status: 400 }
      )
    }

    if (frequency === 'monthly' && (!dayOfMonth || dayOfMonth < 1 || dayOfMonth > 31)) {
      return NextResponse.json(
        { success: false, error: '月次の場合は日付(1-31)を指定してください' },
        { status: 400 }
      )
    }

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json(
        { success: false, error: '送信先メールアドレスを指定してください' },
        { status: 400 }
      )
    }

    // スケジュール作成
    const schedule = await prisma.reportSchedule.create({
      data: {
        name: name.trim(),
        frequency,
        dayOfMonth: frequency === 'monthly' ? dayOfMonth : null,
        recipients,
        enabled: enabled ?? true,
        lastSentAt: null
      }
    })

    console.log(`[API] スケジュール作成完了: ${schedule.id}`)

    return NextResponse.json({
      success: true,
      schedule,
      message: 'スケジュールを作成しました'
    })
  } catch (error) {
    console.error('[API] スケジュール作成エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'スケジュールの作成に失敗しました' 
      },
      { status: 500 }
    )
  }
}