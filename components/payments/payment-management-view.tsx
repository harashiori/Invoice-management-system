"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Calendar, Download, DollarSign, AlertTriangle, CheckCircle2, FileText, RefreshCw, Clock } from "lucide-react"
import Link from "next/link"
import { paymentApi, invoiceApi } from "@/lib/api-client"
import type { Payment, Reconciliation, BankTransaction } from "@/lib/types"

interface PaymentWithDays extends Payment {
  daysLeft: number
}

export function PaymentManagementView() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPayments, setSelectedPayments] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState<"schedule" | "paid" | "reconciliation">("schedule")
  
  // Payment processing dialog
  const [paymentDialog, setPaymentDialog] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<PaymentWithDays | null>(null)
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0])
  const [paymentMethod, setPaymentMethod] = useState<"銀行振込" | "クレジットカード" | "現金" | "その他">("銀行振込")
  
  // Reconciliation dialog
  const [reconciliationDialog, setReconciliationDialog] = useState(false)
  const [reconciliationData, setReconciliationData] = useState({
    paymentId: "",
    expectedAmount: 0,
    actualAmount: 0,
    difference: 0,
    note: "",
    bankTransactionId: "",
  })

  // Auto-generate schedule flag
  const [autoScheduleEnabled, setAutoScheduleEnabled] = useState(true)
  
  // Payment schedule generation settings
  const [scheduleMonth, setScheduleMonth] = useState(new Date().toISOString().substring(0, 7))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await paymentApi.getAll()
        setPayments(data)
      } catch (error) {
        console.error('Failed to fetch payments:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Auto-generate payment schedule from invoices
  const generatePaymentSchedule = async () => {
    try {
      setLoading(true)
      const invoices = await invoiceApi.getAll()
      
      // Filter invoices that need payment (照合済 or 差異あり)
      const needsPayment = invoices.filter(inv =>
        inv.status === "照合済" || inv.status === "差異あり"
      )
      
      // Get existing payments to avoid duplicates
      const existingPayments = await paymentApi.getAll()
      const existingInvoiceIds = new Set(existingPayments.map(p => p.invoiceId))
      
      // Filter out invoices that already have payments
      const invoicesToCreate = needsPayment.filter(inv => !existingInvoiceIds.has(inv.id))
      
      if (invoicesToCreate.length > 0) {
        // Create payment records
        await Promise.all(invoicesToCreate.map(inv =>
          paymentApi.create({
            invoiceId: inv.id,
            supplier: inv.supplier,
            project: inv.project,
            amount: inv.amount,
            dueDate: inv.dueDate,
            status: inv.status,
          })
        ))
        
        alert(`${invoicesToCreate.length}件の支払予定を作成しました`)
      } else {
        alert('新規作成する支払予定はありません')
      }
      
      // Refresh data
      const data = await paymentApi.getAll()
      setPayments(data)
    } catch (error) {
      console.error('Failed to generate payment schedule:', error)
      alert('支払予定表の更新中にエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  // Calculate days left for each payment
  const paymentsWithDays: PaymentWithDays[] = payments.map(payment => {
    const dueDate = new Date(payment.dueDate)
    const today = new Date()
    const daysLeft = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return { ...payment, daysLeft }
  })

  // Filter by tab
  const scheduledPayments = paymentsWithDays.filter(p => p.status !== "支払済")
  const paidPayments = paymentsWithDays.filter(p => p.status === "支払済")
  
  const totalAmount = scheduledPayments.reduce((sum, payment) => sum + payment.amount, 0)
  const urgentPayments = scheduledPayments.filter(p => p.daysLeft > 0 && p.daysLeft <= 7).length

  // Handle checkbox selection
  const handleTogglePayment = (paymentId: string) => {
    setSelectedPayments(prev => {
      const newSet = new Set(prev)
      if (newSet.has(paymentId)) {
        newSet.delete(paymentId)
      } else {
        newSet.add(paymentId)
      }
      return newSet
    })
  }

  const handleToggleAll = () => {
    const currentList = activeTab === "schedule" ? scheduledPayments : paidPayments
    if (selectedPayments.size === currentList.length) {
      setSelectedPayments(new Set())
    } else {
      setSelectedPayments(new Set(currentList.map(p => p.id)))
    }
  }

  // Process single payment
  const handleProcessPayment = async (payment: PaymentWithDays) => {
    setSelectedPayment(payment)
    setPaymentDialog(true)
  }

  const handleConfirmPayment = async () => {
    if (!selectedPayment) return

    try {
      // Update payment status with payment method
      await paymentApi.update(selectedPayment.id, {
        status: "支払済",
        paidAt: paymentDate,
        paymentMethod: paymentMethod,
        reconciliationStatus: "未消込",
        actualAmount: selectedPayment.amount,
      })

      // Update invoice status
      await invoiceApi.update(selectedPayment.invoiceId, {
        status: "支払済",
      })

      // Refresh data
      const data = await paymentApi.getAll()
      setPayments(data)
      setPaymentDialog(false)
      setSelectedPayment(null)
      
      alert('支払処理が完了しました')
    } catch (error) {
      console.error('Failed to process payment:', error)
      alert('支払処理中にエラーが発生しました')
    }
  }

  // Bulk payment processing
  const handleBulkPayment = async () => {
    const selectedList = scheduledPayments.filter(p => selectedPayments.has(p.id))
    
    if (selectedList.length === 0) {
      alert('支払処理する請求書を選択してください')
      return
    }

    const confirmed = confirm(`${selectedList.length}件の請求書を一括支払処理しますか？`)
    if (!confirmed) return

    try {
      setLoading(true)
      
      // Process each payment with payment method
      const processingDate = new Date().toISOString().split('T')[0]
      for (const payment of selectedList) {
        await paymentApi.update(payment.id, {
          status: "支払済",
          paidAt: processingDate,
          paymentMethod: "銀行振込",
          reconciliationStatus: "未消込",
          actualAmount: payment.amount,
        })
        
        await invoiceApi.update(payment.invoiceId, {
          status: "支払済",
        })
      }

      // Refresh data
      const data = await paymentApi.getAll()
      setPayments(data)
      setSelectedPayments(new Set())
      
      alert(`${selectedList.length}件の支払処理が完了しました`)
    } catch (error) {
      console.error('Failed to process bulk payment:', error)
      alert('一括支払処理中にエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  // Reconciliation (消込) - Enhanced with bank transaction matching
  const handleReconciliation = (payment: PaymentWithDays) => {
    setReconciliationData({
      paymentId: payment.id,
      expectedAmount: payment.amount,
      actualAmount: payment.actualAmount || payment.amount,
      difference: 0,
      note: payment.reconciliationNote || "",
      bankTransactionId: payment.bankTransactionId || "",
    })
    setReconciliationDialog(true)
  }

  const handleConfirmReconciliation = async () => {
    try {
      const payment = payments.find(p => p.id === reconciliationData.paymentId)
      if (!payment) return

      // Update payment with reconciliation data
      await paymentApi.update(reconciliationData.paymentId, {
        status: "消込済",
        reconciliationStatus: reconciliationData.difference === 0 ? "消込済" : "差異あり",
        reconciliationDate: new Date().toISOString().split('T')[0],
        reconciliationNote: reconciliationData.note,
        actualAmount: reconciliationData.actualAmount,
        bankTransactionId: reconciliationData.bankTransactionId,
      })

      // Update invoice status
      await invoiceApi.update(payment.invoiceId, {
        status: "消込済",
      })

      // Refresh data
      const data = await paymentApi.getAll()
      setPayments(data)
      setReconciliationDialog(false)
      
      if (reconciliationData.difference === 0) {
        alert('消込処理が完了しました')
      } else {
        alert(`消込処理が完了しました（差異: ¥${Math.abs(reconciliationData.difference).toLocaleString()}）`)
      }
    } catch (error) {
      console.error('Failed to process reconciliation:', error)
      alert('消込処理中にエラーが発生しました')
    }
  }
  

  // CSV Export
  const handleExportCSV = () => {
    const paymentsToExport = payments.filter(p => selectedPayments.has(p.id))
    
    if (paymentsToExport.length === 0) {
      alert('エクスポートする支払いを選択してください')
      return
    }

    const headers = ['請求書番号', '取引先名', '案件名', '支払金額', '支払期日', 'ステータス', '支払日']
    const rows = paymentsToExport.map(p => [
      p.invoiceId,
      p.supplier,
      p.project,
      p.amount,
      p.dueDate,
      p.status,
      p.paidAt || ''
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `payments_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">支払管理</h1>
          <p className="text-muted-foreground">支払予定表と支払処理</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={handleExportCSV}
            disabled={selectedPayments.size === 0}
          >
            <Download className="mr-2 h-4 w-4" />
            CSVエクスポート ({selectedPayments.size}件)
          </Button>
          <Button
            variant="outline"
            onClick={generatePaymentSchedule}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            支払予定表を更新
          </Button>
          <Button
            onClick={handleBulkPayment}
            disabled={selectedPayments.size === 0}
          >
            <DollarSign className="mr-2 h-4 w-4" />
            一括支払処理 ({selectedPayments.size}件)
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">支払予定件数</p>
                <p className="text-3xl font-bold">{scheduledPayments.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">合計支払金額</p>
                <p className="text-2xl font-bold">¥{totalAmount.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">期日接近（7日以内）</p>
                <p className="text-3xl font-bold text-destructive">{urgentPayments}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Auto-schedule info */}
      {autoScheduleEnabled && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>支払予定表の自動作成</AlertTitle>
          <AlertDescription>
            「照合済」ステータスの請求書から自動的に支払予定を作成しています。
            「支払予定表を更新」ボタンで最新の請求書を反映できます。
          </AlertDescription>
        </Alert>
      )}

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="schedule">
            支払予定 ({scheduledPayments.length})
          </TabsTrigger>
          <TabsTrigger value="paid">
            支払済 ({paidPayments.length})
          </TabsTrigger>
          <TabsTrigger value="reconciliation">
            消込管理
          </TabsTrigger>
        </TabsList>

        {/* Scheduled Payments Tab */}
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>支払予定表</CardTitle>
            </CardHeader>
            <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr className="text-sm text-muted-foreground">
                  <th className="px-4 py-4 text-left w-12">
                    <Checkbox
                      checked={scheduledPayments.length > 0 && selectedPayments.size === scheduledPayments.length}
                      onCheckedChange={handleToggleAll}
                    />
                  </th>
                  <th className="px-4 py-4 text-left font-medium">請求書番号</th>
                  <th className="px-4 py-4 text-left font-medium">取引先名</th>
                  <th className="px-4 py-4 text-left font-medium">案件名</th>
                  <th className="px-4 py-4 text-right font-medium">支払金額</th>
                  <th className="px-4 py-4 text-left font-medium">支払期日</th>
                  <th className="px-4 py-4 text-center font-medium">残日数</th>
                  <th className="px-4 py-4 text-left font-medium">ステータス</th>
                  <th className="px-4 py-4 text-center font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-sm text-muted-foreground">
                      読み込み中...
                    </td>
                  </tr>
                ) : paymentsWithDays.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-sm text-muted-foreground">
                      支払予定はありません
                    </td>
                  </tr>
                ) : (
                  scheduledPayments
                    .sort((a, b) => a.daysLeft - b.daysLeft)
                    .map((payment) => (
                      <tr key={payment.id} className="border-b transition-colors hover:bg-muted/50">
                        <td className="px-4 py-4">
                          <Checkbox
                            checked={selectedPayments.has(payment.id)}
                            onCheckedChange={() => handleTogglePayment(payment.id)}
                          />
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            href={`/invoices/${payment.invoiceId}`}
                            className="font-mono text-sm font-medium text-primary hover:underline"
                          >
                            {payment.invoiceId}
                          </Link>
                        </td>
                        <td className="px-4 py-4 font-medium">{payment.supplier}</td>
                        <td className="px-4 py-4 text-sm text-muted-foreground">{payment.project}</td>
                        <td className="px-4 py-4 text-right font-semibold">¥{payment.amount.toLocaleString()}</td>
                        <td className="px-4 py-4 text-sm">{payment.dueDate}</td>
                        <td className="px-4 py-4">
                          <Badge
                            variant={
                              payment.daysLeft <= 3 ? "destructive" : payment.daysLeft <= 7 ? "secondary" : "outline"
                            }
                            className="justify-center"
                          >
                            残り{payment.daysLeft}日
                          </Badge>
                        </td>
                        <td className="px-4 py-4">
                          <Badge
                            variant={payment.status === "照合済" ? "default" : "secondary"}
                            className={
                              payment.status === "照合済"
                                ? "bg-success text-success-foreground"
                                : "bg-warning text-warning-foreground"
                            }
                          >
                            {payment.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-4 space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleProcessPayment(payment)}
                          >
                            支払処理
                          </Button>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paid Payments Tab */}
        <TabsContent value="paid" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>支払済一覧</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-sm text-muted-foreground">
                      <th className="px-4 py-4 text-left font-medium">請求書番号</th>
                      <th className="px-4 py-4 text-left font-medium">取引先名</th>
                      <th className="px-4 py-4 text-left font-medium">案件名</th>
                      <th className="px-4 py-4 text-right font-medium">支払金額</th>
                      <th className="px-4 py-4 text-left font-medium">支払期日</th>
                      <th className="px-4 py-4 text-left font-medium">支払日</th>
                      <th className="px-4 py-4 text-left font-medium">ステータス</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paidPayments.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-12 text-center text-sm text-muted-foreground">
                          支払済の記録はありません
                        </td>
                      </tr>
                    ) : (
                      paidPayments.map((payment) => (
                        <tr key={payment.id} className="border-b transition-colors hover:bg-muted/50">
                          <td className="px-4 py-4">
                            <Link
                              href={`/invoices/${payment.invoiceId}`}
                              className="font-mono text-sm font-medium text-primary hover:underline"
                            >
                              {payment.invoiceId}
                            </Link>
                          </td>
                          <td className="px-4 py-4 font-medium">{payment.supplier}</td>
                          <td className="px-4 py-4 text-sm text-muted-foreground">{payment.project}</td>
                          <td className="px-4 py-4 text-right font-semibold">¥{payment.amount.toLocaleString()}</td>
                          <td className="px-4 py-4 text-sm">{payment.dueDate}</td>
                          <td className="px-4 py-4 text-sm">{payment.paidAt || '-'}</td>
                          <td className="px-4 py-4">
                            <Badge variant="default" className="bg-success text-success-foreground">
                              {payment.status}
                            </Badge>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reconciliation Tab */}
        <TabsContent value="reconciliation" className="space-y-4">
          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle>消込管理について</AlertTitle>
            <AlertDescription>
              支払処理後、銀行口座の明細と照合して消込処理を行います。
              将来的には銀行APIと連携して自動消込に対応予定です。
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>消込対象一覧</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr className="text-sm text-muted-foreground">
                      <th className="px-4 py-4 text-left font-medium">請求書番号</th>
                      <th className="px-4 py-4 text-left font-medium">取引先名</th>
                      <th className="px-4 py-4 text-right font-medium">支払金額</th>
                      <th className="px-4 py-4 text-left font-medium">支払日</th>
                      <th className="px-4 py-4 text-left font-medium">ステータス</th>
                      <th className="px-4 py-4 text-center font-medium">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paidPayments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-12 text-center text-sm text-muted-foreground">
                          消込対象の支払いはありません
                        </td>
                      </tr>
                    ) : (
                      paidPayments.map((payment) => (
                        <tr key={payment.id} className="border-b transition-colors hover:bg-muted/50">
                          <td className="px-4 py-4">
                            <Link
                              href={`/invoices/${payment.invoiceId}`}
                              className="font-mono text-sm font-medium text-primary hover:underline"
                            >
                              {payment.invoiceId}
                            </Link>
                          </td>
                          <td className="px-4 py-4 font-medium">{payment.supplier}</td>
                          <td className="px-4 py-4 text-right font-semibold">¥{payment.amount.toLocaleString()}</td>
                          <td className="px-4 py-4 text-sm">{payment.paidAt || '-'}</td>
                          <td className="px-4 py-4">
                            <Badge variant="default" className="bg-success text-success-foreground">
                              {payment.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleReconciliation(payment)}
                            >
                              消込処理
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payment Processing Dialog */}
      <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>支払処理</DialogTitle>
          </DialogHeader>
          {selectedPayment && (
            <div className="space-y-4">
              <div className="rounded-lg border p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">請求書番号:</span>
                  <span className="font-medium">{selectedPayment.invoiceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">取引先:</span>
                  <span className="font-medium">{selectedPayment.supplier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">支払金額:</span>
                  <span className="text-lg font-bold">¥{selectedPayment.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">支払期日:</span>
                  <span className="font-medium">{selectedPayment.dueDate}</span>
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
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPaymentDialog(false)}>
              キャンセル
            </Button>
            <Button onClick={handleConfirmPayment}>
              支払処理を実行
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reconciliation Dialog */}
      <Dialog open={reconciliationDialog} onOpenChange={setReconciliationDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>消込処理</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border p-4 space-y-2 bg-muted/50">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">予定支払金額:</span>
                <span className="font-semibold">¥{reconciliationData.expectedAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>実際の支払金額</Label>
              <Input
                type="number"
                value={reconciliationData.actualAmount}
                onChange={(e) => {
                  const actual = Number(e.target.value)
                  setReconciliationData({
                    ...reconciliationData,
                    actualAmount: actual,
                    difference: actual - reconciliationData.expectedAmount
                  })
                }}
              />
            </div>

            {reconciliationData.difference !== 0 && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>金額差異あり</AlertTitle>
                <AlertDescription>
                  差異: {reconciliationData.difference > 0 ? '+' : ''}¥{reconciliationData.difference.toLocaleString()}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label>銀行取引ID（オプション）</Label>
              <Input
                placeholder="TXN-001"
                value={reconciliationData.bankTransactionId}
                onChange={(e) => setReconciliationData({
                  ...reconciliationData,
                  bankTransactionId: e.target.value
                })}
              />
            </div>

            <div className="space-y-2">
              <Label>備考</Label>
              <Input
                placeholder="差異がある場合は理由を記入"
                value={reconciliationData.note}
                onChange={(e) => setReconciliationData({
                  ...reconciliationData,
                  note: e.target.value
                })}
              />
            </div>

            <Alert>
              <FileText className="h-4 w-4" />
              <AlertDescription>
                消込処理を実行すると、請求書のステータスが「消込済」に更新されます。
              </AlertDescription>
            </Alert>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReconciliationDialog(false)}>
              キャンセル
            </Button>
            <Button onClick={handleConfirmReconciliation}>
              消込処理を実行
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  )
}
