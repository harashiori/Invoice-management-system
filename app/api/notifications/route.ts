import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { Notification } from '@/lib/types'

/**
 * GET /api/notifications - ユーザーの通知一覧を取得
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const unreadOnly = searchParams.get('unreadOnly') === 'true'

    if (!userId) {
      return NextResponse.json(
        { error: 'userIdパラメータが必要です' },
        { status: 400 }
      )
    }

    const notifications = await prisma.notification.findMany({
      where: {
        userId,
        ...(unreadOnly ? { read: false } : {})
      },
      orderBy: { createdAt: 'desc' }
    })

    const unreadCount = await prisma.notification.count({
      where: {
        userId,
        read: false
      }
    })

    return NextResponse.json({
      notifications,
      unreadCount,
    })
  } catch (error) {
    console.error('通知取得エラー:', error)
    return NextResponse.json(
      { error: '通知の取得に失敗しました' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/notifications - 新しい通知を作成
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, type, title, message, relatedId, relatedType, priority = 'medium' } = body

    // バリデーション
    if (!userId || !type || !title || !message) {
      return NextResponse.json(
        { error: 'userId, type, title, messageは必須です' },
        { status: 400 }
      )
    }

    const notification = await prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message,
        relatedId: relatedId || null,
        relatedType: relatedType || null,
        priority,
        read: false,
      }
    })

    return NextResponse.json({ notification }, { status: 201 })
  } catch (error) {
    console.error('通知作成エラー:', error)
    return NextResponse.json(
      { error: '通知の作成に失敗しました' },
      { status: 500 }
    )
  }
}

/**
 * PATCH /api/notifications - 全ての通知を既読にする
 */
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { userId } = body

    if (!userId) {
      return NextResponse.json(
        { error: 'userIdが必要です' },
        { status: 400 }
      )
    }

    const result = await prisma.notification.updateMany({
      where: {
        userId,
        read: false
      },
      data: {
        read: true
      }
    })

    const count = result.count

    return NextResponse.json({
      success: true,
      markedCount: count,
    })
  } catch (error) {
    console.error('通知一括既読エラー:', error)
    return NextResponse.json(
      { error: '通知の一括既読に失敗しました' },
      { status: 500 }
    )
  }
}