"use client"

import type React from "react"

import { FileText, Home, Settings, Users, Calendar, Menu, X, BarChart3, FolderKanban, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { NotificationPanel } from "@/components/notifications/notification-panel"

const iconMap = {
  Home,
  FileText,
  Calendar,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout, availableNavigation } = useAuth()

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6">
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary" />
              <span className="text-lg font-semibold">請求書管理システム</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NotificationPanel userId={user.id} />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="hidden text-right md:block">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                  {user.name.charAt(0)}
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => logout()} title="ログアウト">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden w-64 border-r bg-card md:block">
          <nav className="flex flex-col gap-1 p-4">
            {availableNavigation.map((item) => {
              const isActive = pathname === item.href
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <IconComponent className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden">
            <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-card">
              <nav className="flex flex-col gap-1 p-4">
                {availableNavigation.map((item) => {
                  const isActive = pathname === item.href
                  const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      <IconComponent className="h-5 w-5" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          <div className="p-6 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
