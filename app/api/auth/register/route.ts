import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

// POST /api/auth/register - ユーザー新規登録
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // バリデーション
    if (!body.name || !body.email || !body.password || !body.role) {
      return NextResponse.json(
        { error: 'すべての必須フィールドを入力してください' },
        { status: 400 }
      )
    }
    
    // パスワードの長さチェック
    if (body.password.length < 8) {
      return NextResponse.json(
        { error: 'パスワードは8文字以上で入力してください' },
        { status: 400 }
      )
    }
    
    // メールアドレスの重複チェック
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'このメールアドレスは既に登録されています' },
        { status: 400 }
      )
    }
    
    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(body.password, 10)
    
    // ユーザー作成
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        role: body.role,
        status: body.role === '管理者' ? 'inactive' : 'active', // 管理者は承認待ち
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      }
    })
    
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      },
      message: body.role === '管理者' 
        ? '管理者アカウントは承認が必要です。承認後にログインできます。'
        : 'アカウント登録が完了しました。ログインしてください。',
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'アカウント登録に失敗しました' },
      { status: 500 }
    )
  }
}