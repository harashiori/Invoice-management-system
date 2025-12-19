"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ArrowLeft,
  Download,
  FileText,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { invoiceApi, paymentApi } from "@/lib/api-client"
import type { Invoice } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

interface InvoiceDetailViewProps {
  invoiceId: string
}

export function InvoiceDetailView({ invoiceId }: InvoiceDetailViewProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [loading, setLoading] = useState(true)
  const [paymentDialog, setPaymentDialog] = useState(false)
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0])
  const [paymentMethod, setPaymentMethod] = useState<"銀行振込" | "クレジットカード" | "現金" | "その他">("銀行振込")
  const [pdfZoom, setPdfZoom] = useState(100)
  const [updatingStatus, setUpdatingStatus] = useState(false)

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const data = await invoiceApi.getById(invoiceId)
        setInvoice(data)
      } catch (error) {
        console.error('Failed to fetch invoice:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchInvoice()
  }, [invoiceId])

  const handlePaymentProcess = async () => {
    if (!invoice) return

    try {
      setLoading(true)
      
      // Find payment record for this invoice
      const payments = await paymentApi.getAll()
      const payment = payments.find(p => p.invoiceId === invoice.id)
      
      if (!payment) {
        // Create payment record if it doesn't exist
        await paymentApi.create({
          invoiceId: invoice.id,
          supplier: invoice.supplier,
          project: invoice.project,
          amount: invoice.amount,
          dueDate: invoice.dueDate,
          status: "支払済",
          paidAt: paymentDate,
          paymentMethod: paymentMethod,
          reconciliationStatus: "未消込",
          actualAmount: invoice.amount,
        })
      } else {
        // Update existing payment record
        await paymentApi.update(payment.id, {
          status: "支払済",
          paidAt: paymentDate,
          paymentMethod: paymentMethod,
          reconciliationStatus: "未消込",
          actualAmount: invoice.amount,
        })
      }

      // Update invoice status
      await invoiceApi.update(invoice.id, {
        status: "支払済",
      })

      setPaymentDialog(false)
      toast({
        title: "支払処理完了",
        description: "支払処理が正常に完了しました",
      })
      
      // Refresh invoice data
      const updatedInvoice = await invoiceApi.getById(invoiceId)
      setInvoice(updatedInvoice)
    } catch (error) {
      console.error('Failed to process payment:', error)
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : "支払処理中にエラーが発生しました",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadPdf = async () => {
    if (!invoice?.filePath) return

    try {
      const response = await fetch(`/api/files?path=${encodeURIComponent(invoice.filePath)}`)
      if (!response.ok) throw new Error('ダウンロード失敗')
      
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = invoice.fileName || `${invoice.invoiceNumber}_${invoice.supplier}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('PDF download error:', error)
      alert('PDFのダウンロードに失敗しました')
    }
  }

  const handleZoomIn = () => {
    setPdfZoom(prev => Math.min(prev + 10, 200))
  }

  const handleZoomOut = () => {
    setPdfZoom(prev => Math.max(prev - 10, 50))
  }

  // Handle status change
  const handleStatusChange = async (newStatus: string) => {
    if (!invoice) return

    try {
      setUpdatingStatus(true)
      
      // Update invoice status
      await invoiceApi.update(invoice.id, { status: newStatus as any })
      
      // If changed to "照合済" or "差異あり", create payment record
      if ((newStatus === "照合済" || newStatus === "差異あり")) {
        try {
          // Check if payment already exists
          const existingPayments = await paymentApi.getAll()
          const paymentExists = existingPayments.some(p => p.invoiceId === invoice.id)
          
          if (!paymentExists) {
            await paymentApi.create({
              invoiceId: invoice.id,
              supplier: invoice.supplier,
              project: invoice.project,
              amount: invoice.amount,
              dueDate: invoice.dueDate,
              status: newStatus,
            })
          }
        } catch (paymentError) {
          console.error('Failed to create payment record:', paymentError)
          // Continue even if payment creation fails
        }
      }
      
      // Update local state
      setInvoice(prev => prev ? { ...prev, status: newStatus as Invoice['status'] } : null)
      
      toast({
        title: "ステータスを更新しました",
        description: `請求書のステータスを「${newStatus}」に変更しました`,
      })
    } catch (error) {
      console.error('Failed to update status:', error)
      toast({
        title: "エラー",
        description: "ステータスの更新に失敗しました",
        variant: "destructive",
      })
    } finally {
      setUpdatingStatus(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-96">読み込み中...</div>
  }

  if (!invoice) {
    return <div className="flex items-center justify-center h-96">請求書が見つかりません</div>
  }

  const canProcess = invoice.status === "照合済" || invoice.status === "差異あり"
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/invoices">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">請求書詳細</h1>
            <p className="font-mono text-sm text-muted-foreground">{invoiceId}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setPaymentDialog(true)}
            disabled={!canProcess}
          >
            支払処理
          </Button>
        </div>
      </div>

      {/* 2カラムレイアウト: 左60% PDFプレビュー、右40% タブ情報 */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Left Column - PDF Preview (60%) */}
        <div className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  PDFプレビュー
                </CardTitle>
                {invoice.filePath && (
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={handleZoomOut}>
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">{pdfZoom}%</span>
                    <Button variant="ghost" size="icon" onClick={handleZoomIn}>
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6" />
                    <Button variant="outline" size="sm" onClick={handleDownloadPdf}>
                      <Download className="mr-2 h-4 w-4" />
                      ダウンロード
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {invoice.filePath ? (
                <div className="space-y-4">
                  <div 
                    className="overflow-hidden rounded-lg border bg-white"
                    style={{ height: '800px' }}
                  >
                    <iframe
                      src={`/api/files?path=${encodeURIComponent(invoice.filePath)}`}
                      style={{ 
                        width: `${pdfZoom}%`,
                        height: `${pdfZoom}%`,
                        border: 'none',
                        transformOrigin: 'top left',
                        transform: `scale(${1 / (pdfZoom / 100)})`
                      }}
                      title="PDF Preview"
                    />
                  </div>
                  {invoice.fileName && (
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        {invoice.fileName}
                        {invoice.fileSize && ` (${(invoice.fileSize / 1024).toFixed(1)} KB)`}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-[800px] items-center justify-center rounded-lg border-2 border-dashed bg-muted/20">
                  <div className="text-center">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm font-medium text-muted-foreground">PDFファイルがありません</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      この請求書にはPDFファイルが添付されていません
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Invoice Details Tabs (40%) */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader className="border-b">
              <div className="space-y-4">
                {/* Status Badge and Selector */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Label className="text-xs text-muted-foreground">ステータス</Label>
                    {invoice.ocrConfidenceScore && (
                      <span className="text-xs text-muted-foreground">
                        OCR信頼度: {invoice.ocrConfidenceScore}%
                      </span>
                    )}
                  </div>
                  <Select
                    value={invoice.status}
                    onValueChange={handleStatusChange}
                    disabled={updatingStatus}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="未処理">未処理</SelectItem>
                      <SelectItem value="照合済">照合済</SelectItem>
                      <SelectItem value="差異あり">差異あり</SelectItem>
                      <SelectItem value="支払済">支払済</SelectItem>
                      <SelectItem value="消込済">消込済</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount Summary */}
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs text-muted-foreground">請求金額(税込)</p>
                  <p className="text-xl font-bold">¥{invoice.amount.toLocaleString()}</p>
                  <div className="mt-2 flex justify-between text-xs">
                    <span className="text-muted-foreground">税抜: ¥{invoice.taxExcludedAmount.toLocaleString()}</span>
                    <span className="text-muted-foreground">税額: ¥{invoice.taxAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">基本</TabsTrigger>
                  <TabsTrigger value="supplier">請求元</TabsTrigger>
                  <TabsTrigger value="payment">支払</TabsTrigger>
                </TabsList>
                <TabsList className="mt-2 grid w-full grid-cols-3">
                  <TabsTrigger value="billing">請求先</TabsTrigger>
                  <TabsTrigger value="items">明細</TabsTrigger>
                  <TabsTrigger value="metadata">メタ</TabsTrigger>
                </TabsList>

                {/* ①基本情報 */}
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label className="text-xs text-muted-foreground">請求書番号</Label>
                      <p className="font-mono font-medium">{invoice.invoiceNumber || invoice.id}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">発行日</Label>
                      <p className="font-medium">{invoice.issueDate}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">支払期日</Label>
                      <p className="font-medium">{invoice.dueDate}</p>
                    </div>
                  </div>
                  
                  {/* 案件情報セクション */}
                  <Separator className="my-4" />
                  <div>
                    <Label className="text-sm font-semibold">案件情報</Label>
                    {invoice.projectId ? (
                      <div className="mt-3 rounded-lg border bg-muted/30 p-3 space-y-2">
                        <div className="grid gap-2">
                          {invoice.projectCode && (
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">案件コード:</span>
                              <span className="font-mono text-sm font-medium">{invoice.projectCode}</span>
                            </div>
                          )}
                          {invoice.projectName && (
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">案件名:</span>
                              <span className="text-sm font-medium">{invoice.projectName}</span>
                            </div>
                          )}
                        </div>
                        {invoice.projectId && (
                          <div className="pt-2">
                            <Button variant="outline" size="sm" asChild className="w-full">
                              <Link href={`/projects/${invoice.projectId}`}>
                                案件詳細を見る
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-3 rounded-lg border border-dashed bg-muted/10 p-3 text-center">
                        <p className="text-sm text-muted-foreground">案件未設定</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* ②請求元（取引先） */}
                <TabsContent value="supplier" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-1">
                    <div>
                      <Label className="text-xs text-muted-foreground">会社名</Label>
                      <p className="text-lg font-semibold">{invoice.supplier}</p>
                    </div>
                    {invoice.supplierRegistrationNumber && (
                      <div>
                        <Label className="text-xs text-muted-foreground">登録番号</Label>
                        <p className="font-mono text-sm">{invoice.supplierRegistrationNumber}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* ③請求先（当社） */}
                <TabsContent value="billing" className="space-y-4">
                  <div className="grid gap-4">
                    {invoice.billingTo && (
                      <div>
                        <Label className="text-xs text-muted-foreground">宛名</Label>
                        <p className="font-semibold">{invoice.billingTo}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* ⑤明細情報 */}
                <TabsContent value="items" className="space-y-4">
                  {invoice.items && invoice.items.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>品目</TableHead>
                          <TableHead className="text-right">金額</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoice.items.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <p className="font-medium text-sm">{item.name}</p>
                            </TableCell>
                            <TableCell className="text-right font-medium">
                              ¥{item.amount.toLocaleString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">
                      明細情報がありません
                    </div>
                  )}
                </TabsContent>

                {/* ⑥支払条件・振込先 */}
                <TabsContent value="payment" className="space-y-4">
                  <div className="grid gap-4">
                    {invoice.bankName && (
                      <div>
                        <Label className="text-xs text-muted-foreground">銀行名</Label>
                        <p className="font-medium">{invoice.bankName}</p>
                      </div>
                    )}
                    {invoice.bankAccountNumber && (
                      <div>
                        <Label className="text-xs text-muted-foreground">口座番号</Label>
                        <p className="font-mono font-medium">{invoice.bankAccountNumber}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* ⑧電帳法・監査用メタデータ */}
                <TabsContent value="metadata" className="space-y-4">
                  <div className="grid gap-4">
                    {invoice.storagePath && (
                      <div>
                        <Label className="text-xs text-muted-foreground">保存パス</Label>
                        <p className="font-mono text-xs">{invoice.storagePath}</p>
                      </div>
                    )}
                    <div>
                      <Label className="text-xs text-muted-foreground">作成日時</Label>
                      <p className="text-sm">{new Date(invoice.createdAt).toLocaleString('ja-JP')}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Payment Processing Dialog */}
      <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>支払処理</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">請求書番号:</span>
                <span className="font-medium">{invoice.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">取引先:</span>
                <span className="font-medium">{invoice.supplier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">支払金額:</span>
                <span className="text-lg font-bold">¥{invoice.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">支払期日:</span>
                <span className="font-medium">{invoice.dueDate}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>支払日</Label>
              <Input
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>支払方法</Label>
              <Select value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as any)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="銀行振込">銀行振込</SelectItem>
                  <SelectItem value="クレジットカード">クレジットカード</SelectItem>
                  <SelectItem value="現金">現金</SelectItem>
                  <SelectItem value="その他">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                支払処理を実行すると、請求書のステータスが「支払済」に更新されます。
              </AlertDescription>
            </Alert>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPaymentDialog(false)}>
              キャンセル
            </Button>
            <Button onClick={handlePaymentProcess} disabled={loading}>
              支払処理を実行
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
