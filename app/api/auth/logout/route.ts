import { NextResponse } from 'next/server'
import { logout } from '@/lib/auth-service'

// POST /api/auth/logout - ユーザーログアウト
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.token) {
      return NextResponse.json(
        { error: 'トークンが指定されていません' },
        { status: 400 }
      )
    }
    
    await logout(body.token)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'ログアウトに失敗しました' },
      { status: 500 }
    )
  }
}