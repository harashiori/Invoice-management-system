import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/notifications/[id] - 特定の通知を取得
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const notification = await prisma.notification.findUnique({
      where: { id }
    })

    if (!notification) {
      return NextResponse.json(
        { error: '通知が見つかりません' },
        { status: 404 }
      )
    }

    return NextResponse.json({ notification })
  } catch (error) {
    console.error('通知取得エラー:', error)
    return NextResponse.json(
      { error: '通知の取得に失敗しました' },
      { status: 500 }
    )
  }
}

/**
 * PATCH /api/notifications/[id] - 通知を既読にする
 */
export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    
    try {
      const notification = await prisma.notification.update({
        where: { id },
        data: { read: true }
      })

      return NextResponse.json({ notification })
    } catch (error: any) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: '通知が見つかりません' },
          { status: 404 }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('通知既読エラー:', error)
    return NextResponse.json(
      { error: '通知の既読処理に失敗しました' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/notifications/[id] - 通知を削除
 */
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    
    try {
      await prisma.notification.delete({
        where: { id }
      })

      return NextResponse.json({ success: true })
    } catch (error: any) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: '通知が見つかりません' },
          { status: 404 }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('通知削除エラー:', error)
    return NextResponse.json(
      { error: '通知の削除に失敗しました' },
      { status: 500 }
    )
  }
}