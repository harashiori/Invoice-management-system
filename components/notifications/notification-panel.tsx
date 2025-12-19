"use client"

import { useEffect, useState } from "react"
import { Bell, Check, FileText, Calendar, FolderKanban, Users, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Notification } from "@/lib/types"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface NotificationPanelProps {
  userId: string
}

const getNotificationIcon = (type: Notification['type']) => {
  switch (type) {
    case 'invoice_received':
      return <FileText className="h-4 w-4" />
    case 'payment_due':
      return <Calendar className="h-4 w-4" />
    case 'payment_completed':
      return <Check className="h-4 w-4" />
    case 'approval_required':
      return <AlertCircle className="h-4 w-4" />
    case 'project_updated':
      return <FolderKanban className="h-4 w-4" />
    case 'system':
      return <Bell className="h-4 w-4" />
    default:
      return <Bell className="h-4 w-4" />
  }
}

const getPriorityColor = (priority: Notification['priority']) => {
  switch (priority) {
    case 'high':
      return 'text-red-500'
    case 'medium':
      return 'text-yellow-500'
    case 'low':
      return 'text-blue-500'
    default:
      return 'text-gray-500'
  }
}

const getRelatedLink = (notification: Notification): string | null => {
  if (!notification.relatedId || !notification.relatedType) return null
  
  switch (notification.relatedType) {
    case 'invoice':
      return `/invoices/${notification.relatedId}`
    case 'payment':
      return `/payments`
    case 'project':
      return `/projects`
    case 'supplier':
      return `/suppliers/${notification.relatedId}`
    default:
      return null
  }
}

export function NotificationPanel({ userId }: NotificationPanelProps) {
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`/api/notifications?userId=${userId}`)
      if (!response.ok) throw new Error('通知の取得に失敗しました')
      
      const data = await response.json()
      setNotifications(data.notifications)
      setUnreadCount(data.unreadCount)
    } catch (error) {
      console.error('通知取得エラー:', error)
    }
  }

  useEffect(() => {
    if (open) {
      fetchNotifications()
    }
  }, [open, userId])

  // 定期的に未読数を更新（30秒ごと）
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`/api/notifications?userId=${userId}`)
        .then(res => res.json())
        .then(data => setUnreadCount(data.unreadCount))
        .catch(console.error)
    }, 30000)

    return () => clearInterval(interval)
  }, [userId])

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'PATCH',
      })
      
      if (!response.ok) throw new Error('既読処理に失敗しました')
      
      // 通知リストを更新
      setNotifications(prev =>
        prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
      )
      setUnreadCount(prev => Math.max(0, prev - 1))
    } catch (error) {
      console.error('既読処理エラー:', error)
    }
  }

  const handleMarkAllAsRead = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/notifications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      })
      
      if (!response.ok) throw new Error('一括既読処理に失敗しました')
      
      // 通知リストを更新
      setNotifications(prev => prev.map(n => ({ ...n, read: true })))
      setUnreadCount(0)
    } catch (error) {
      console.error('一括既読処理エラー:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNotificationClick = (notification: Notification) => {
    // 既読にする
    if (!notification.read) {
      handleMarkAsRead(notification.id)
    }

    // 関連ページにリダイレクト
    const link = getRelatedLink(notification)
    if (link) {
      setOpen(false)
      router.push(link)
    }
  }

  const handleDelete = async (notificationId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    
    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) throw new Error('削除に失敗しました')
      
      // 通知リストから削除
      setNotifications(prev => prev.filter(n => n.id !== notificationId))
      
      // 未読の場合は未読数も減らす
      const notification = notifications.find(n => n.id === notificationId)
      if (notification && !notification.read) {
        setUnreadCount(prev => Math.max(0, prev - 1))
      }
    } catch (error) {
      console.error('削除エラー:', error)
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-[10px] flex items-center justify-center">
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>通知</SheetTitle>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMarkAllAsRead}
                disabled={loading}
              >
                すべて既読にする
              </Button>
            )}
          </div>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-100px)] mt-6">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Bell className="h-12 w-12 mb-4 opacity-50" />
              <p>通知はありません</p>
            </div>
          ) : (
            <div className="space-y-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 rounded-lg border cursor-pointer transition-colors hover:bg-accent/50 relative group",
                    !notification.read && "bg-accent/30 border-primary/20"
                  )}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn("mt-0.5", getPriorityColor(notification.priority))}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <Badge variant="default" className="h-5 px-1.5 text-[10px]">
                            NEW
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(notification.createdAt).toLocaleString('ja-JP')}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handleDelete(notification.id, e)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}