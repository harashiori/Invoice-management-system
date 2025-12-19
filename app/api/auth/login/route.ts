import { NextResponse } from 'next/server'
import { login } from '@/lib/auth-service'

// POST /api/auth/login - ユーザーログイン
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // バリデーション
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'メールアドレスとパスワードを入力してください' },
        { status: 400 }
      )
    }
    
    // ログイン処理
    const session = await login({
      email: body.email,
      password: body.password,
    })
    
    return NextResponse.json(session, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'ログインに失敗しました' },
      { status: 401 }
    )
  }
}