/**
 * 認証サービス - ユーザー認証とロールベースアクセス制御
 */

import type { User } from './types'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export type UserRole = '管理者' | '経理担当者' | '営業担当者' | '閲覧者'

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
  status: 'active' | 'inactive'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthSession {
  user: AuthUser
  token: string
  expiresAt: string
}

export interface RolePermissions {
  // ページアクセス権限
  canAccessDashboard: boolean
  canAccessInvoices: boolean
  canAccessPayments: boolean
  canAccessProjects: boolean
  canAccessSuppliers: boolean
  canAccessReports: boolean
  canAccessSettings: boolean
  
  // 操作権限
  canCreateInvoice: boolean
  canEditInvoice: boolean
  canDeleteInvoice: boolean
  canApproveInvoice: boolean
  
  canCreatePayment: boolean
  canEditPayment: boolean
  canDeletePayment: boolean
  canProcessPayment: boolean
  
  canCreateProject: boolean
  canEditProject: boolean
  canDeleteProject: boolean
  
  canCreateSupplier: boolean
  canEditSupplier: boolean
  canDeleteSupplier: boolean
  
  canGenerateReport: boolean
  canScheduleReport: boolean
  
  canManageUsers: boolean
  canManageSettings: boolean
  canAccessAuditLog: boolean
}

/**
 * ロールごとの権限定義
 */
const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  '管理者': {
    // すべてのページにアクセス可能
    canAccessDashboard: true,
    canAccessInvoices: true,
    canAccessPayments: true,
    canAccessProjects: true,
    canAccessSuppliers: true,
    canAccessReports: true,
    canAccessSettings: true,
    
    // すべての操作が可能
    canCreateInvoice: true,
    canEditInvoice: true,
    canDeleteInvoice: true,
    canApproveInvoice: true,
    
    canCreatePayment: true,
    canEditPayment: true,
    canDeletePayment: true,
    canProcessPayment: true,
    
    canCreateProject: true,
    canEditProject: true,
    canDeleteProject: true,
    
    canCreateSupplier: true,
    canEditSupplier: true,
    canDeleteSupplier: true,
    
    canGenerateReport: true,
    canScheduleReport: true,
    
    canManageUsers: true,
    canManageSettings: true,
    canAccessAuditLog: true,
  },
  
  '経理担当者': {
    // 経理関連のページにアクセス可能
    canAccessDashboard: true,
    canAccessInvoices: true,
    canAccessPayments: true,
    canAccessProjects: true,
    canAccessSuppliers: true,
    canAccessReports: true,
    canAccessSettings: false,
    
    // 請求書・支払の操作が可能
    canCreateInvoice: true,
    canEditInvoice: true,
    canDeleteInvoice: false,
    canApproveInvoice: true,
    
    canCreatePayment: true,
    canEditPayment: true,
    canDeletePayment: false,
    canProcessPayment: true,
    
    canCreateProject: false,
    canEditProject: false,
    canDeleteProject: false,
    
    canCreateSupplier: true,
    canEditSupplier: true,
    canDeleteSupplier: false,
    
    canGenerateReport: true,
    canScheduleReport: false,
    
    canManageUsers: false,
    canManageSettings: false,
    canAccessAuditLog: true,
  },
  
  '営業担当者': {
    // 営業関連のページにアクセス可能
    canAccessDashboard: true,
    canAccessInvoices: true,
    canAccessPayments: true,
    canAccessProjects: true,
    canAccessSuppliers: true,
    canAccessReports: false,
    canAccessSettings: false,
    
    // 支払予定の登録と確認のみ
    canCreateInvoice: false,
    canEditInvoice: false,
    canDeleteInvoice: false,
    canApproveInvoice: false,
    
    canCreatePayment: true,
    canEditPayment: true,
    canDeletePayment: false,
    canProcessPayment: false,
    
    canCreateProject: true,
    canEditProject: true,
    canDeleteProject: false,
    
    canCreateSupplier: false,
    canEditSupplier: false,
    canDeleteSupplier: false,
    
    canGenerateReport: false,
    canScheduleReport: false,
    
    canManageUsers: false,
    canManageSettings: false,
    canAccessAuditLog: false,
  },
  
  '閲覧者': {
    // 閲覧のみ
    canAccessDashboard: true,
    canAccessInvoices: true,
    canAccessPayments: true,
    canAccessProjects: true,
    canAccessSuppliers: true,
    canAccessReports: true,
    canAccessSettings: false,
    
    // すべての操作不可
    canCreateInvoice: false,
    canEditInvoice: false,
    canDeleteInvoice: false,
    canApproveInvoice: false,
    
    canCreatePayment: false,
    canEditPayment: false,
    canDeletePayment: false,
    canProcessPayment: false,
    
    canCreateProject: false,
    canEditProject: false,
    canDeleteProject: false,
    
    canCreateSupplier: false,
    canEditSupplier: false,
    canDeleteSupplier: false,
    
    canGenerateReport: false,
    canScheduleReport: false,
    
    canManageUsers: false,
    canManageSettings: false,
    canAccessAuditLog: false,
  },
}

/**
 * ユーザーログイン
 */
export async function login(credentials: LoginCredentials): Promise<AuthSession> {
  // データベースからユーザーを取得
  const user = await prisma.user.findUnique({
    where: { email: credentials.email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      role: true,
      status: true,
    }
  })
  
  if (!user) {
    throw new Error('メールアドレスまたはパスワードが正しくありません')
  }
  
  // パスワード検証
  if (user.password) {
    const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
    if (!isPasswordValid) {
      throw new Error('メールアドレスまたはパスワードが正しくありません')
    }
  } else {
    // パスワードが設定されていない場合（旧データ）
    throw new Error('パスワードが設定されていません')
  }
  
  if (user.status !== 'active') {
    throw new Error('このアカウントは無効化されています')
  }
  
  // AuthUser型に変換（passwordを除外）
  const authUser: AuthUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role as UserRole,
    status: user.status as 'active' | 'inactive',
  }
  
  // トークン生成 (実際にはJWT等を使用)
  const token = `token-${user.id}-${Date.now()}`
  const expiresAt = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString() // 8時間
  
  return {
    user: authUser,
    token,
    expiresAt,
  }
}

/**
 * ログアウト
 */
export async function logout(token: string): Promise<void> {
  // TODO: トークンの無効化処理
  await new Promise(resolve => setTimeout(resolve, 100))
}

/**
 * セッション検証
 */
export async function validateSession(token: string): Promise<AuthUser | null> {
  // トークン形式の検証
  if (!token || !token.startsWith('token-')) {
    return null
  }
  
  // トークンからユーザーIDを抽出
  const parts = token.split('-')
  if (parts.length < 3) {
    return null
  }
  
  const userId = parts[1]
  
  // データベースからユーザーを取得
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
    }
  })
  
  if (!user || user.status !== 'active') {
    return null
  }
  
  // AuthUser型に変換
  const authUser: AuthUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role as UserRole,
    status: user.status as 'active' | 'inactive',
  }
  
  return authUser
}

/**
 * ロールの権限を取得
 */
export function getRolePermissions(role: UserRole): RolePermissions {
  return ROLE_PERMISSIONS[role]
}

/**
 * ユーザーが特定の操作を実行できるかチェック
 */
export function hasPermission(
  user: AuthUser,
  permission: keyof RolePermissions
): boolean {
  const permissions = getRolePermissions(user.role)
  return permissions[permission]
}

/**
 * ページアクセス権限をチェック
 */
export function canAccessPage(user: AuthUser, page: string): boolean {
  const permissions = getRolePermissions(user.role)
  
  // Extract base path for sub-pages
  const basePath = page.split('/').slice(0, 2).join('/')
  
  switch (basePath) {
    case '':
    case '/':
      return permissions.canAccessDashboard
    case '/invoices':
      return permissions.canAccessInvoices
    case '/payments':
      return permissions.canAccessPayments
    case '/projects':
      return permissions.canAccessProjects
    case '/suppliers':
      return permissions.canAccessSuppliers
    case '/reports':
      return permissions.canAccessReports
    case '/settings':
      return permissions.canAccessSettings
    default:
      return false
  }
}

/**
 * 利用可能なナビゲーション項目を取得
 */
export function getAvailableNavigation(user: AuthUser): Array<{
  name: string
  href: string
  icon: string
}> {
  const permissions = getRolePermissions(user.role)
  const navigation = []
  
  if (permissions.canAccessDashboard) {
    navigation.push({ name: 'ダッシュボード', href: '/', icon: 'Home' })
  }
  if (permissions.canAccessInvoices) {
    navigation.push({ name: '請求書一覧', href: '/invoices', icon: 'FileText' })
  }
  if (permissions.canAccessPayments) {
    navigation.push({ name: '支払管理', href: '/payments', icon: 'Calendar' })
  }
  if (permissions.canAccessProjects) {
    navigation.push({ name: '案件管理', href: '/projects', icon: 'FolderKanban' })
  }
  if (permissions.canAccessSuppliers) {
    navigation.push({ name: '取引先マスタ', href: '/suppliers', icon: 'Users' })
  }
  if (permissions.canAccessReports) {
    navigation.push({ name: 'レポート管理', href: '/reports', icon: 'BarChart3' })
  }
  if (permissions.canAccessSettings) {
    navigation.push({ name: '設定', href: '/settings', icon: 'Settings' })
  }
  
  return navigation
}