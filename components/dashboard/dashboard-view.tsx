"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle, Clock, TrendingUp, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { invoiceApi, paymentApi } from "@/lib/api-client"
import type { Invoice, Payment } from "@/lib/types"

const summaryCards = [
  {
    title: "未処理請求書",
    key: "unprocessed",
    icon: FileText,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "差異発生",
    key: "discrepancy",
    icon: AlertTriangle,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "今月支払予定",
    key: "monthlyPayment",
    icon: Clock,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "滞留請求書",
    key: "overdue",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
]

export function DashboardView() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState(0) // 0 = current month, -1 = previous month, etc.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [invoicesData, paymentsData] = await Promise.all([
          invoiceApi.getAll(),
          paymentApi.getAll(),
        ])
        setInvoices(invoicesData)
        setPayments(paymentsData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Calculate month data based on selectedMonth
  const getMonthData = (monthOffset: number) => {
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + monthOffset)
    const year = targetDate.getFullYear()
    const month = targetDate.getMonth() + 1
    
    const monthInvoices = invoices.filter(inv => {
      const invDate = new Date(inv.issueDate)
      return invDate.getFullYear() === year && invDate.getMonth() + 1 === month
    })
    
    const totalAmount = monthInvoices.reduce((sum, inv) => sum + inv.amount, 0)
    
    return {
      month: `${year}年${month}月`,
      amount: totalAmount,
      count: monthInvoices.length,
    }
  }

  // Get data for previous month, current month, and next month
  const prevMonthData = getMonthData(selectedMonth - 1)
  const currentMonthData = getMonthData(selectedMonth)
  const nextMonthData = getMonthData(selectedMonth + 1)

  // Calculate summary statistics for current displayed month
  const currentMonthDate = new Date()
  currentMonthDate.setMonth(currentMonthDate.getMonth() + selectedMonth)
  const displayYear = currentMonthDate.getFullYear()
  const displayMonth = currentMonthDate.getMonth() + 1

  const currentMonthInvoices = invoices.filter(inv => {
    const invDate = new Date(inv.issueDate)
    return invDate.getFullYear() === displayYear && invDate.getMonth() + 1 === displayMonth
  })

  const stats = {
    unprocessed: currentMonthInvoices.filter(inv => inv.status === "未処理").length,
    discrepancy: currentMonthInvoices.filter(inv => inv.status === "差異あり").length,
    monthlyPayment: currentMonthInvoices.reduce((sum, inv) => sum + inv.amount, 0),
    overdue: currentMonthInvoices.filter(inv => {
      const dueDate = new Date(inv.dueDate)
      const today = new Date()
      return dueDate < today && inv.status !== "支払済" && inv.status !== "消込済"
    }).length,
  }

  // Get recent invoices (last 3)
  const recentInvoices = invoices.slice(0, 3)

  // Get upcoming payments with days left calculation
  const upcomingPayments = payments
    .filter(pay => pay.status !== "支払済")
    .map(pay => {
      const dueDate = new Date(pay.dueDate)
      const today = new Date()
      const daysLeft = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      return { ...pay, daysLeft }
    })
    .filter(pay => pay.daysLeft > 0 && pay.daysLeft <= 30)
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 3)

  const maxAmount = Math.max(prevMonthData.amount, currentMonthData.amount, nextMonthData.amount, 1)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "照合済":
        return "success"
      case "差異あり":
        return "warning"
      case "支払済":
      case "消込済":
        return "paid"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ダッシュボード</h1>
          <p className="text-muted-foreground">請求書管理システムの概要</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          {/* Current Month Display */}
          <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 border-2 border-primary/20">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-xl font-bold text-primary">
              {displayYear}年{displayMonth}月
            </span>
            {selectedMonth === 0 && (
              <Badge variant="default" className="ml-2 bg-primary">
                当月
              </Badge>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedMonth(selectedMonth - 1)}
            >
              ← 前月
            </Button>
            {selectedMonth !== 0 && (
              <Button
                variant="default"
                size="sm"
                onClick={() => setSelectedMonth(0)}
                className="bg-primary"
              >
                今月に戻る
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedMonth(selectedMonth + 1)}
              disabled={selectedMonth >= 0}
            >
              翌月 →
            </Button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => {
          const value = stats[card.key as keyof typeof stats]
          const displayValue = card.key === "monthlyPayment"
            ? `¥${value.toLocaleString()}`
            : String(value)
          const unit = card.key === "monthlyPayment" ? "" : "件"
          
          // Determine the link URL based on card type
          let linkUrl = "/invoices"
          if (card.key === "unprocessed") {
            linkUrl = "/invoices?status=未処理"
          } else if (card.key === "discrepancy") {
            linkUrl = "/invoices?status=差異あり"
          } else if (card.key === "monthlyPayment") {
            linkUrl = "/payments"
          } else if (card.key === "overdue") {
            linkUrl = "/invoices?overdue=true"
          }
          
          return (
            <Link key={card.title} href={linkUrl}>
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
                      <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-bold">{loading ? "..." : displayValue}</p>
                        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
                      </div>
                    </div>
                    <div className={`rounded-lg p-2.5 ${card.bgColor}`}>
                      <card.icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              月別請求金額
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Previous Month */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-muted-foreground">{prevMonthData.month} (先月)</span>
                  <div className="text-right">
                    <span className="text-muted-foreground">¥{prevMonthData.amount.toLocaleString()}</span>
                    <span className="ml-2 text-xs text-muted-foreground">({prevMonthData.count}件)</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-muted-foreground/30"
                    style={{ width: `${(prevMonthData.amount / maxAmount) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Month */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">{currentMonthData.month} (当月)</span>
                  <div className="text-right">
                    <span className="font-bold text-primary">¥{currentMonthData.amount.toLocaleString()}</span>
                    <span className="ml-2 text-xs text-muted-foreground">({currentMonthData.count}件)</span>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${(currentMonthData.amount / maxAmount) * 100}%` }}
                  />
                </div>
              </div>

              {/* Next Month */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-muted-foreground">{nextMonthData.month} (翌月)</span>
                  <div className="text-right">
                    <span className="text-muted-foreground">¥{nextMonthData.amount.toLocaleString()}</span>
                    <span className="ml-2 text-xs text-muted-foreground">({nextMonthData.count}件)</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${(nextMonthData.amount / maxAmount) * 100}%` }}
                  />
                </div>
              </div>

              {/* Month-to-Month Comparison */}
              <div className="mt-4 rounded-lg bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground mb-2">前月比</p>
                {prevMonthData.amount > 0 && (
                  <div className="flex items-center gap-2">
                    {currentMonthData.amount >= prevMonthData.amount ? (
                      <>
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-semibold text-success">
                          +{((currentMonthData.amount - prevMonthData.amount) / prevMonthData.amount * 100).toFixed(1)}%
                        </span>
                      </>
                    ) : (
                      <>
                        <TrendingUp className="h-4 w-4 rotate-180 text-destructive" />
                        <span className="text-sm font-semibold text-destructive">
                          {((currentMonthData.amount - prevMonthData.amount) / prevMonthData.amount * 100).toFixed(1)}%
                        </span>
                      </>
                    )}
                    <span className="text-xs text-muted-foreground">
                      (¥{(currentMonthData.amount - prevMonthData.amount).toLocaleString()})
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Payments */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                支払期日接近
              </CardTitle>
              <Link href="/payments">
                <Button variant="ghost" size="sm">
                  すべて表示
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loading ? (
                <p className="text-center text-sm text-muted-foreground">読み込み中...</p>
              ) : upcomingPayments.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground">支払予定はありません</p>
              ) : (
                upcomingPayments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <p className="font-medium">{payment.supplier}</p>
                      <p className="text-sm text-muted-foreground">期日: {payment.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">¥{payment.amount.toLocaleString()}</p>
                      <Badge variant={payment.daysLeft <= 3 ? "destructive" : "secondary"} className="text-xs">
                        残り{payment.daysLeft}日
                      </Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Invoices */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>最近の請求書</CardTitle>
            <Link href="/invoices">
              <Button variant="ghost" size="sm">
                すべて表示
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm text-muted-foreground">
                  <th className="pb-3 text-left font-medium">請求書番号</th>
                  <th className="pb-3 text-left font-medium">取引先</th>
                  <th className="pb-3 text-left font-medium">金額</th>
                  <th className="pb-3 text-left font-medium">支払期日</th>
                  <th className="pb-3 text-left font-medium">ステータス</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-sm text-muted-foreground">
                      読み込み中...
                    </td>
                  </tr>
                ) : recentInvoices.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-sm text-muted-foreground">
                      請求書がありません
                    </td>
                  </tr>
                ) : (
                  recentInvoices.map((invoice) => {
                    const statusColor = getStatusColor(invoice.status)
                    return (
                      <tr key={invoice.id} className="border-b last:border-0">
                        <td className="py-4">
                          <Link
                            href={`/invoices/${invoice.id}`}
                            className="font-mono text-sm font-medium text-primary hover:underline"
                          >
                            {invoice.id}
                          </Link>
                        </td>
                        <td className="py-4">{invoice.supplier}</td>
                        <td className="py-4 font-semibold">¥{invoice.amount.toLocaleString()}</td>
                        <td className="py-4 text-sm text-muted-foreground">{invoice.dueDate}</td>
                        <td className="py-4">
                          <Badge
                            variant={
                              statusColor === "success"
                                ? "default"
                                : statusColor === "warning"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              statusColor === "success"
                                ? "bg-success text-success-foreground"
                                : statusColor === "warning"
                                  ? "bg-warning text-warning-foreground"
                                  : statusColor === "paid"
                                    ? "bg-primary/10 text-primary"
                                    : ""
                            }
                          >
                            {invoice.status}
                          </Badge>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
