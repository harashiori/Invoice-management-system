"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Plus, Trash2, Edit } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { ReportSchedule } from "@/lib/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ReportScheduleView() {
  const { toast } = useToast()
  const [schedules, setSchedules] = useState<ReportSchedule[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [selectedSchedule, setSelectedSchedule] = useState<ReportSchedule | null>(null)
  const [scheduleForm, setScheduleForm] = useState({
    name: "",
    frequency: "monthly" as "monthly" | "weekly" | "daily",
    dayOfMonth: 1,
    recipients: "",
    enabled: true,
  })

  useEffect(() => {
    fetchSchedules()
  }, [])

  const fetchSchedules = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/reports/schedules")
      const data = await response.json()

      if (data.success) {
        setSchedules(data.schedules)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to fetch schedules:", error)
      toast({
        title: "エラー",
        description: "スケジュール一覧の取得に失敗しました",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCreateSchedule = async () => {
    const recipients = scheduleForm.recipients
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email)

    if (!scheduleForm.name.trim()) {
      toast({
        title: "エラー",
        description: "スケジュール名を入力してください",
        variant: "destructive",
      })
      return
    }

    if (recipients.length === 0) {
      toast({
        title: "エラー",
        description: "送信先メールアドレスを入力してください",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/reports/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: scheduleForm.name.trim(),
          frequency: scheduleForm.frequency,
          dayOfMonth: scheduleForm.frequency === "monthly" ? scheduleForm.dayOfMonth : undefined,
          recipients,
          enabled: scheduleForm.enabled,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "スケジュールを作成しました",
        })
        setShowCreateDialog(false)
        resetForm()
        fetchSchedules()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to create schedule:", error)
      toast({
        title: "エラー",
        description: "スケジュールの作成に失敗しました",
        variant: "destructive",
      })
    }
  }

  const handleUpdateSchedule = async () => {
    if (!selectedSchedule) return

    const recipients = scheduleForm.recipients
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email)

    if (!scheduleForm.name.trim()) {
      toast({
        title: "エラー",
        description: "スケジュール名を入力してください",
        variant: "destructive",
      })
      return
    }

    if (recipients.length === 0) {
      toast({
        title: "エラー",
        description: "送信先メールアドレスを入力してください",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(`/api/reports/schedules/${selectedSchedule.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: scheduleForm.name.trim(),
          frequency: scheduleForm.frequency,
          dayOfMonth: scheduleForm.frequency === "monthly" ? scheduleForm.dayOfMonth : undefined,
          recipients,
          enabled: scheduleForm.enabled,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "スケジュールを更新しました",
        })
        setShowEditDialog(false)
        setSelectedSchedule(null)
        resetForm()
        fetchSchedules()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to update schedule:", error)
      toast({
        title: "エラー",
        description: "スケジュールの更新に失敗しました",
        variant: "destructive",
      })
    }
  }

  const handleDeleteSchedule = async (scheduleId: string) => {
    if (!confirm("このスケジュールを削除してもよろしいですか?")) return

    try {
      const response = await fetch(`/api/reports/schedules/${scheduleId}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "スケジュールを削除しました",
        })
        fetchSchedules()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to delete schedule:", error)
      toast({
        title: "エラー",
        description: "スケジュールの削除に失敗しました",
        variant: "destructive",
      })
    }
  }

  const handleToggleEnabled = async (schedule: ReportSchedule) => {
    try {
      const response = await fetch(`/api/reports/schedules/${schedule.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enabled: !schedule.enabled,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: schedule.enabled ? "スケジュールを無効化しました" : "スケジュールを有効化しました",
        })
        fetchSchedules()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to toggle schedule:", error)
      toast({
        title: "エラー",
        description: "スケジュールの更新に失敗しました",
        variant: "destructive",
      })
    }
  }

  const openEditDialog = (schedule: ReportSchedule) => {
    setSelectedSchedule(schedule)
    setScheduleForm({
      name: schedule.name,
      frequency: schedule.frequency,
      dayOfMonth: schedule.dayOfMonth || 1,
      recipients: schedule.recipients.join(", "),
      enabled: schedule.enabled,
    })
    setShowEditDialog(true)
  }

  const resetForm = () => {
    setScheduleForm({
      name: "",
      frequency: "monthly",
      dayOfMonth: 1,
      recipients: "",
      enabled: true,
    })
  }

  const getFrequencyLabel = (frequency: string) => {
    switch (frequency) {
      case "monthly":
        return "月次"
      case "weekly":
        return "週次"
      case "daily":
        return "日次"
      default:
        return frequency
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => setShowCreateDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          スケジュール作成
        </Button>
      </div>

      {loading ? (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            読み込み中...
          </CardContent>
        </Card>
      ) : schedules.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            スケジュールがありません
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {schedules.map((schedule) => (
            <Card key={schedule.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{schedule.name}</h3>
                      <Badge variant={schedule.enabled ? "default" : "secondary"}>
                        {schedule.enabled ? "有効" : "無効"}
                      </Badge>
                      <Badge variant="outline">{getFrequencyLabel(schedule.frequency)}</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">送信頻度:</span>
                        <span className="ml-2">
                          {getFrequencyLabel(schedule.frequency)}
                          {schedule.frequency === "monthly" &&
                            schedule.dayOfMonth &&
                            ` (毎月${schedule.dayOfMonth}日)`}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">送信先:</span>
                        <span className="ml-2">{schedule.recipients.length}件</span>
                      </div>
                      {schedule.lastSentAt && (
                        <div className="col-span-2">
                          <span className="text-muted-foreground">最終送信:</span>
                          <span className="ml-2">{formatDate(schedule.lastSentAt)}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {schedule.recipients.map((email, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {email}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Switch
                      checked={schedule.enabled}
                      onCheckedChange={() => handleToggleEnabled(schedule)}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditDialog(schedule)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteSchedule(schedule.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create Schedule Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>スケジュール作成</DialogTitle>
            <DialogDescription>
              レポートの自動送信スケジュールを作成します
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">スケジュール名</Label>
              <Input
                id="name"
                placeholder="例: 月次レポート自動送信"
                value={scheduleForm.name}
                onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequency">送信頻度</Label>
              <Select
                value={scheduleForm.frequency}
                onValueChange={(value: "monthly" | "weekly" | "daily") =>
                  setScheduleForm({ ...scheduleForm, frequency: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">月次</SelectItem>
                  <SelectItem value="weekly">週次</SelectItem>
                  <SelectItem value="daily">日次</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {scheduleForm.frequency === "monthly" && (
              <div className="space-y-2">
                <Label htmlFor="dayOfMonth">送信日</Label>
                <Input
                  id="dayOfMonth"
                  type="number"
                  min={1}
                  max={31}
                  value={scheduleForm.dayOfMonth}
                  onChange={(e) =>
                    setScheduleForm({ ...scheduleForm, dayOfMonth: parseInt(e.target.value) })
                  }
                />
                <p className="text-xs text-muted-foreground">毎月何日に送信するか (1-31)</p>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="recipients">送信先メールアドレス</Label>
              <Input
                id="recipients"
                type="text"
                placeholder="例: user1@example.com, user2@example.com"
                value={scheduleForm.recipients}
                onChange={(e) =>
                  setScheduleForm({ ...scheduleForm, recipients: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground">
                複数のメールアドレスをカンマ区切りで入力してください
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowCreateDialog(false)
                resetForm()
              }}
            >
              キャンセル
            </Button>
            <Button onClick={handleCreateSchedule}>作成</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Schedule Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>スケジュール編集</DialogTitle>
            <DialogDescription>スケジュール設定を変更します</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">スケジュール名</Label>
              <Input
                id="edit-name"
                placeholder="例: 月次レポート自動送信"
                value={scheduleForm.name}
                onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-frequency">送信頻度</Label>
              <Select
                value={scheduleForm.frequency}
                onValueChange={(value: "monthly" | "weekly" | "daily") =>
                  setScheduleForm({ ...scheduleForm, frequency: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">月次</SelectItem>
                  <SelectItem value="weekly">週次</SelectItem>
                  <SelectItem value="daily">日次</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {scheduleForm.frequency === "monthly" && (
              <div className="space-y-2">
                <Label htmlFor="edit-dayOfMonth">送信日</Label>
                <Input
                  id="edit-dayOfMonth"
                  type="number"
                  min={1}
                  max={31}
                  value={scheduleForm.dayOfMonth}
                  onChange={(e) =>
                    setScheduleForm({ ...scheduleForm, dayOfMonth: parseInt(e.target.value) })
                  }
                />
                <p className="text-xs text-muted-foreground">毎月何日に送信するか (1-31)</p>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="edit-recipients">送信先メールアドレス</Label>
              <Input
                id="edit-recipients"
                type="text"
                placeholder="例: user1@example.com, user2@example.com"
                value={scheduleForm.recipients}
                onChange={(e) =>
                  setScheduleForm({ ...scheduleForm, recipients: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground">
                複数のメールアドレスをカンマ区切りで入力してください
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowEditDialog(false)
                setSelectedSchedule(null)
                resetForm()
              }}
            >
              キャンセル
            </Button>
            <Button onClick={handleUpdateSchedule}>更新</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}