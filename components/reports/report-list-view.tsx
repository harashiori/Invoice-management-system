"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Calendar, Mail, Download, Trash2, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { MonthlyReport } from "@/lib/types"
import { ReportScheduleView } from "./report-schedule-view"
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

export function ReportListView() {
  const { toast } = useToast()
  const [reports, setReports] = useState<MonthlyReport[]>([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [showGenerateDialog, setShowGenerateDialog] = useState(false)
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [selectedReport, setSelectedReport] = useState<MonthlyReport | null>(null)
  const [generateForm, setGenerateForm] = useState({
    period: new Date().toISOString().substring(0, 7), // YYYY-MM
  })
  const [sendForm, setSendForm] = useState({
    recipients: "",
  })

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/reports")
      const data = await response.json()

      if (data.success) {
        setReports(data.reports)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to fetch reports:", error)
      toast({
        title: "エラー",
        description: "レポート一覧の取得に失敗しました",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateReport = async () => {
    try {
      setGenerating(true)
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          period: generateForm.period,
          generatePdf: true,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "レポートを生成しました",
        })
        setShowGenerateDialog(false)
        fetchReports()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to generate report:", error)
      toast({
        title: "エラー",
        description: "レポートの生成に失敗しました",
        variant: "destructive",
      })
    } finally {
      setGenerating(false)
    }
  }

  const handleSendReport = async () => {
    if (!selectedReport) return

    const recipients = sendForm.recipients
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email)

    if (recipients.length === 0) {
      toast({
        title: "エラー",
        description: "送信先メールアドレスを入力してください",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(`/api/reports/${selectedReport.id}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipients }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: `レポートを${recipients.length}件の宛先に送信しました`,
        })
        setShowSendDialog(false)
        setSendForm({ recipients: "" })
        setSelectedReport(null)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to send report:", error)
      toast({
        title: "エラー",
        description: "レポートの送信に失敗しました",
        variant: "destructive",
      })
    }
  }

  const handleDeleteReport = async (reportId: string) => {
    if (!confirm("このレポートを削除してもよろしいですか?")) return

    try {
      const response = await fetch(`/api/reports/${reportId}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "レポートを削除しました",
        })
        fetchReports()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Failed to delete report:", error)
      toast({
        title: "エラー",
        description: "レポートの削除に失敗しました",
        variant: "destructive",
      })
    }
  }

  const handleDownloadReport = async (report: MonthlyReport) => {
    if (!report.filePath) {
      toast({
        title: "エラー",
        description: "PDFファイルが生成されていません",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(`/api/files?path=${encodeURIComponent(report.filePath)}`)
      if (!response.ok) throw new Error('ダウンロード失敗')
      
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `report_${report.period}.pdf`
      a.click()
      URL.revokeObjectURL(url)
      
      toast({
        title: "ダウンロード完了",
        description: "レポートをダウンロードしました",
      })
    } catch (error) {
      console.error('Report download error:', error)
      toast({
        title: "エラー",
        description: "PDFのダウンロードに失敗しました",
        variant: "destructive",
      })
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

  const formatPeriod = (period: string) => {
    const [year, month] = period.split("-")
    return `${year}年${month}月`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">レポート管理</h1>
          <p className="text-muted-foreground">月次レポートの生成・送信</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList>
          <TabsTrigger value="reports">
            <FileText className="mr-2 h-4 w-4" />
            レポート一覧
          </TabsTrigger>
          <TabsTrigger value="schedules">
            <Calendar className="mr-2 h-4 w-4" />
            自動送信設定
          </TabsTrigger>
        </TabsList>

        {/* Reports List */}
        <TabsContent value="reports" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={() => setShowGenerateDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              レポート生成
            </Button>
          </div>

          {loading ? (
            <Card>
              <CardContent className="p-12 text-center text-muted-foreground">
                読み込み中...
              </CardContent>
            </Card>
          ) : reports.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center text-muted-foreground">
                レポートがありません
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {reports.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <h3 className="text-lg font-semibold">
                            {formatPeriod(report.period)} 月次レポート
                          </h3>
                          {report.filePath && (
                            <Badge variant="outline" className="bg-success/10 text-success">
                              PDF生成済
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">請求書件数:</span>
                            <span className="ml-2 font-semibold">
                              {report.totalInvoices.toLocaleString()}件
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">合計金額:</span>
                            <span className="ml-2 font-semibold">
                              ¥{report.totalAmount.toLocaleString()}
                            </span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-muted-foreground">生成日時:</span>
                            <span className="ml-2">{formatDate(report.generatedAt)}</span>
                          </div>
                        </div>

                        {/* Status Breakdown */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {report.statusBreakdown.map((item) => (
                            <Badge key={item.status} variant="secondary" className="text-xs">
                              {item.status}: {item.count}件
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        {report.filePath && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setSelectedReport(report)
                                setShowSendDialog(true)
                              }}
                            >
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadReport(report)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteReport(report.id)}
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
        </TabsContent>

        {/* Schedules */}
        <TabsContent value="schedules">
          <ReportScheduleView />
        </TabsContent>
      </Tabs>

      {/* Generate Report Dialog */}
      <Dialog open={showGenerateDialog} onOpenChange={setShowGenerateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>レポート生成</DialogTitle>
            <DialogDescription>
              月次レポートを生成します。対象月を選択してください。
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="period">対象月</Label>
              <Input
                id="period"
                type="month"
                value={generateForm.period}
                onChange={(e) =>
                  setGenerateForm({ ...generateForm, period: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowGenerateDialog(false)}
              disabled={generating}
            >
              キャンセル
            </Button>
            <Button onClick={handleGenerateReport} disabled={generating}>
              {generating ? "生成中..." : "生成"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Send Report Dialog */}
      <Dialog open={showSendDialog} onOpenChange={setShowSendDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>レポート送信</DialogTitle>
            <DialogDescription>
              {selectedReport && `${formatPeriod(selectedReport.period)}のレポートを送信します`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipients">送信先メールアドレス</Label>
              <Input
                id="recipients"
                type="text"
                placeholder="例: user1@example.com, user2@example.com"
                value={sendForm.recipients}
                onChange={(e) =>
                  setSendForm({ ...sendForm, recipients: e.target.value })
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
                setShowSendDialog(false)
                setSendForm({ recipients: "" })
                setSelectedReport(null)
              }}
            >
              キャンセル
            </Button>
            <Button onClick={handleSendReport}>送信</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}