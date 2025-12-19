"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import type { AuthUser } from './auth-service'
import { getRolePermissions, canAccessPage, getAvailableNavigation } from './auth-service'

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  hasPermission: (permission: string) => boolean
  canAccess: (page: string) => boolean
  availableNavigation: Array<{ name: string; href: string; icon: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // ページロード時にセッションを復元
    const token = localStorage.getItem('auth-token')
    const userStr = localStorage.getItem('auth-user')

    if (token && userStr) {
      try {
        const userData = JSON.parse(userStr)
        setUser(userData)
      } catch (error) {
        console.error('Failed to parse user data:', error)
        localStorage.removeItem('auth-token')
        localStorage.removeItem('auth-user')
      }
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    // 認証不要ページのリスト
    const publicPages = ['/login', '/register']
    const isPublicPage = publicPages.includes(pathname)

    // 認証チェック
    if (!loading && !user && !isPublicPage) {
      router.push('/login')
    }

    // ページアクセス権限チェック
    if (!loading && user && !isPublicPage) {
      if (!canAccessPage(user, pathname)) {
        router.push('/')
      }
    }
  }, [user, loading, pathname, router])

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'ログインに失敗しました')
    }

    localStorage.setItem('auth-token', data.token)
    localStorage.setItem('auth-user', JSON.stringify(data.user))
    setUser(data.user)
    router.push('/')
  }

  const logout = async () => {
    const token = localStorage.getItem('auth-token')
    
    if (token) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
    }

    localStorage.removeItem('auth-token')
    localStorage.removeItem('auth-user')
    setUser(null)
    router.push('/login')
  }

  const hasPermission = (permission: string) => {
    if (!user) return false
    const permissions = getRolePermissions(user.role)
    return permissions[permission as keyof typeof permissions] || false
  }

  const canAccess = (page: string) => {
    if (!user) return false
    return canAccessPage(user, page)
  }

  const availableNavigation = user ? getAvailableNavigation(user) : []

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        hasPermission,
        canAccess,
        availableNavigation,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}