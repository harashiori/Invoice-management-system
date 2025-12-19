"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { DashboardView } from "@/components/dashboard/dashboard-view"
import { useAuth } from "@/lib/auth-context"

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // セッションチェック
    const token = localStorage.getItem('auth-token')
    const userStr = localStorage.getItem('auth-user')

    if (!token || !userStr) {
      router.push('/login')
      return
    }
  }, [router, mounted])

  // 認証チェック中またはマウント前は何も表示しない
  if (!mounted || loading || !user) {
    return null
  }

  return (
    <AppLayout>
      <DashboardView />
    </AppLayout>
  )
}
