import { NextResponse } from 'next/server'
import { validateSession } from '@/lib/auth-service'

// GET /api/auth/me - 現在のユーザー情報を取得
export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: '認証が必要です' },
        { status: 401 }
      )
    }
    
    const user = await validateSession(token)
    
    if (!user) {
      return NextResponse.json(
        { error: 'セッションが無効です' },
        { status: 401 }
      )
    }
    
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json(
      { error: 'セッションの検証に失敗しました' },
      { status: 500 }
    )
  }
}