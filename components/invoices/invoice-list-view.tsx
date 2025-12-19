"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Upload, Download, Filter, Calendar } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { invoiceApi, supplierApi, paymentApi } from "@/lib/api-client"
import type { Invoice, Supplier } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export function InvoiceListView() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set())
  const [updatingStatus, setUpdatingStatus] = useState<Set<string>>(new Set())
  
  // Search form state
  const [searchForm, setSearchForm] = useState({
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    supplier: "",
    invoiceNumber: "",
    status: "all",
    dueDateStart: "",
    dueDateEnd: "",
  })

  // Applied filters (what's actually being used to filter)
  const [appliedFilters, setAppliedFilters] = useState({ ...searchForm })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [invoicesData, suppliersData] = await Promise.all([
          invoiceApi.getAll(),
          supplierApi.getAll({ status: 'active' })
        ])
        setInvoices(invoicesData)
        setSuppliers(suppliersData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Apply URL params filter on mount
  useEffect(() => {
    const status = searchParams.get('status')
    const overdue = searchParams.get('overdue')
    
    if (status) {
      setSearchForm(prev => ({ ...prev, status }))
      setAppliedFilters(prev => ({ ...prev, status }))
    }
  }, [searchParams])

  // Handle search button click
  const handleSearch = () => {
    setAppliedFilters({ ...searchForm })
  }

  // Handle clear button click
  const handleClear = () => {
    const clearedForm = {
      startDate: "",
      endDate: "",
      minAmount: "",
      maxAmount: "",
      supplier: "",
      invoiceNumber: "",
      status: "all",
      dueDateStart: "",
      dueDateEnd: "",
    }
    setSearchForm(clearedForm)
    setAppliedFilters(clearedForm)
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const filteredInvoices = invoices.filter((invoice) => {
    // Invoice number filter
    if (appliedFilters.invoiceNumber && !invoice.id.toLowerCase().includes(appliedFilters.invoiceNumber.toLowerCase())) {
      return false
    }

    // Supplier name filter
    if (appliedFilters.supplier && !invoice.supplier.toLowerCase().includes(appliedFilters.supplier.toLowerCase())) {
      return false
    }

    // Status filter
    if (appliedFilters.status !== "all" && invoice.status !== appliedFilters.status) {
      return false
    }

    // Issue date range filter
    if (appliedFilters.startDate) {
      const invoiceDate = new Date(invoice.issueDate)
      const startDate = new Date(appliedFilters.startDate)
      if (invoiceDate < startDate) return false
    }
    if (appliedFilters.endDate) {
      const invoiceDate = new Date(invoice.issueDate)
      const endDate = new Date(appliedFilters.endDate)
      if (invoiceDate > endDate) return false
    }

    // Amount range filter
    if (appliedFilters.minAmount && invoice.amount < Number(appliedFilters.minAmount)) {
      return false
    }
    if (appliedFilters.maxAmount && invoice.amount > Number(appliedFilters.maxAmount)) {
      return false
    }

    // Due date range filter
    if (appliedFilters.dueDateStart) {
      const dueDate = new Date(invoice.dueDate)
      const dueDateStart = new Date(appliedFilters.dueDateStart)
      if (dueDate < dueDateStart) return false
    }
    if (appliedFilters.dueDateEnd) {
      const dueDate = new Date(invoice.dueDate)
      const dueDateEnd = new Date(appliedFilters.dueDateEnd)
      if (dueDate > dueDateEnd) return false
    }

    // Check for overdue filter from URL
    const overdueParam = searchParams.get('overdue')
    if (overdueParam === 'true') {
      const dueDate = new Date(invoice.dueDate)
      const today = new Date()
      const isOverdue = dueDate < today && invoice.status !== "支払済" && invoice.status !== "消込済"
      if (!isOverdue) return false
    }
    
    return true
  })

  const totalAmount = filteredInvoices.reduce((sum, inv) => sum + inv.amount, 0)

  // Calculate pagination
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedInvoices = filteredInvoices.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [appliedFilters])

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

  // Handle checkbox toggle
  const handleToggleInvoice = (invoiceId: string) => {
    setSelectedInvoices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(invoiceId)) {
        newSet.delete(invoiceId)
      } else {
        newSet.add(invoiceId)
      }
      return newSet
    })
  }

  // Handle select all toggle
  const handleToggleAll = () => {
    if (selectedInvoices.size === paginatedInvoices.length) {
      setSelectedInvoices(new Set())
    } else {
      setSelectedInvoices(new Set(paginatedInvoices.map(inv => inv.id)))
    }
  }

  // Export to CSV
  const handleExportCSV = () => {
    const invoicesToExport = invoices.filter(inv => selectedInvoices.has(inv.id))
    
    if (invoicesToExport.length === 0) {
      alert('エクスポートする請求書を選択してください')
      return
    }

    // Create CSV header
    const headers = [
      '請求書番号',
      '取引先名',
      '案件名',
      '請求金額',
      '税抜金額',
      '消費税',
      '発行日',
      '支払期日',
      'ステータス'
    ]

    // Create CSV rows
    const rows = invoicesToExport.map(invoice => [
      invoice.id,
      invoice.supplier,
      invoice.project,
      invoice.amount,
      invoice.taxExcludedAmount,
      invoice.taxAmount,
      invoice.issueDate,
      invoice.dueDate,
      invoice.status
    ])

    // Combine header and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    // Create blob and download
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `invoices_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle status change
  const handleStatusChange = async (invoiceId: string, newStatus: string) => {
    try {
      setUpdatingStatus(prev => new Set(prev).add(invoiceId))
      
      const invoice = invoices.find(inv => inv.id === invoiceId)
      if (!invoice) return
      
      // Update invoice status
      await invoiceApi.update(invoiceId, { status: newStatus as any })
      
      // If changed to "照合済" or "差異あり", create payment record
      if ((newStatus === "照合済" || newStatus === "差異あり")) {
        try {
          // Check if payment already exists
          const existingPayments = await paymentApi.getAll()
          const paymentExists = existingPayments.some(p => p.invoiceId === invoiceId)
          
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
      setInvoices(prev => prev.map(inv =>
        inv.id === invoiceId ? { ...inv, status: newStatus as Invoice['status'] } : inv
      ))
      
      toast({
        title: "ステータスを更新しました",
        description: `請求書 ${invoiceId} のステータスを「${newStatus}」に変更しました`,
      })
    } catch (error) {
      console.error('Failed to update status:', error)
      toast({
        title: "エラー",
        description: "ステータスの更新に失敗しました",
        variant: "destructive",
      })
    } finally {
      setUpdatingStatus(prev => {
        const newSet = new Set(prev)
        newSet.delete(invoiceId)
        return newSet
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">請求書一覧</h1>
          <p className="text-muted-foreground">電子帳簿保存法対応検索</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleExportCSV}
            disabled={selectedInvoices.size === 0}
          >
            <Download className="mr-2 h-4 w-4" />
            CSVエクスポート ({selectedInvoices.size}件)
          </Button>
          <Link href="/invoices/new">
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              請求書登録
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filters - 3要件検索 */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Filter className="h-4 w-4" />
              電帳法3要件検索
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {/* 取引年月日 */}
              <div className="space-y-2">
                <Label>取引年月日（発行日）</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type="date"
                      placeholder="開始日"
                      value={searchForm.startDate}
                      onChange={(e) => setSearchForm({...searchForm, startDate: e.target.value})}
                    />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                  <span className="flex items-center text-muted-foreground">〜</span>
                  <div className="relative flex-1">
                    <Input
                      type="date"
                      placeholder="終了日"
                      value={searchForm.endDate}
                      onChange={(e) => setSearchForm({...searchForm, endDate: e.target.value})}
                    />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 取引金額 */}
              <div className="space-y-2">
                <Label>取引金額</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="下限金額"
                    value={searchForm.minAmount}
                    onChange={(e) => setSearchForm({...searchForm, minAmount: e.target.value})}
                  />
                  <span className="flex items-center text-muted-foreground">〜</span>
                  <Input
                    type="number"
                    placeholder="上限金額"
                    value={searchForm.maxAmount}
                    onChange={(e) => setSearchForm({...searchForm, maxAmount: e.target.value})}
                  />
                </div>
              </div>

              {/* 取引先名 */}
              <div className="space-y-2">
                <Label>取引先名</Label>
                <Select
                  value={searchForm.supplier || "all"}
                  onValueChange={(value) => setSearchForm({...searchForm, supplier: value === "all" ? "" : value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="すべての取引先" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべての取引先</SelectItem>
                    {suppliers.map((supplier) => (
                      <SelectItem key={supplier.id} value={supplier.name}>
                        {supplier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 border-t pt-4 md:grid-cols-3">
              {/* 請求書番号 */}
              <div className="space-y-2">
                <Label>請求書番号</Label>
                <Input
                  placeholder="INV-2025-001"
                  value={searchForm.invoiceNumber}
                  onChange={(e) => setSearchForm({...searchForm, invoiceNumber: e.target.value})}
                />
              </div>

              {/* ステータス */}
              <div className="space-y-2">
                <Label>ステータス</Label>
                <Select
                  value={searchForm.status}
                  onValueChange={(value) => setSearchForm({...searchForm, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="すべて" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="未処理">未処理</SelectItem>
                    <SelectItem value="照合済">照合済</SelectItem>
                    <SelectItem value="差異あり">差異あり</SelectItem>
                    <SelectItem value="支払済">支払済</SelectItem>
                    <SelectItem value="消込済">消込済</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 支払期日 */}
              <div className="space-y-2">
                <Label>支払期日</Label>
                <div className="flex gap-2">
                  <Input
                    type="date"
                    placeholder="開始日"
                    className="flex-1"
                    value={searchForm.dueDateStart}
                    onChange={(e) => setSearchForm({...searchForm, dueDateStart: e.target.value})}
                  />
                  <span className="flex items-center text-muted-foreground">〜</span>
                  <Input
                    type="date"
                    placeholder="終了日"
                    className="flex-1"
                    value={searchForm.dueDateEnd}
                    onChange={(e) => setSearchForm({...searchForm, dueDateEnd: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                className="flex-1 md:flex-none"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                検索
              </Button>
              <Button
                variant="outline"
                onClick={handleClear}
              >
                クリア
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between rounded-lg bg-muted p-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">検索結果:</span>
          <span className="font-semibold">{filteredInvoices.length}件</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">合計金額:</span>
          <span className="text-lg font-bold">¥{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Invoice Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr className="text-sm text-muted-foreground">
                  <th className="px-4 py-4 text-left font-medium w-12">
                    <Checkbox
                      checked={paginatedInvoices.length > 0 && selectedInvoices.size === paginatedInvoices.length}
                      onCheckedChange={handleToggleAll}
                    />
                  </th>
                  <th className="px-6 py-4 text-left font-medium">請求書番号</th>
                  <th className="px-6 py-4 text-left font-medium">取引先名</th>
                  <th className="px-6 py-4 text-left font-medium">案件名</th>
                  <th className="px-6 py-4 text-right font-medium">請求金額</th>
                  <th className="px-6 py-4 text-left font-medium">発行日</th>
                  <th className="px-6 py-4 text-left font-medium">支払期日</th>
                  <th className="px-6 py-4 text-left font-medium w-48">ステータス</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-sm text-muted-foreground">
                      読み込み中...
                    </td>
                  </tr>
                ) : paginatedInvoices.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-sm text-muted-foreground">
                      請求書が見つかりません
                    </td>
                  </tr>
                ) : (
                  paginatedInvoices.map((invoice) => {
                    const statusColor = getStatusColor(invoice.status)
                    return (
                      <tr key={invoice.id} className="border-b transition-colors hover:bg-muted/50">
                        <td className="px-4 py-4">
                          <Checkbox
                            checked={selectedInvoices.has(invoice.id)}
                            onCheckedChange={() => handleToggleInvoice(invoice.id)}
                          />
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            href={`/invoices/${invoice.id}`}
                            className="font-mono text-sm font-medium text-primary hover:underline"
                          >
                            {invoice.id}
                          </Link>
                        </td>
                        <td className="px-6 py-4 font-medium">{invoice.supplier}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{invoice.project}</td>
                        <td className="px-6 py-4 text-right font-semibold">¥{invoice.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm">{invoice.issueDate}</td>
                        <td className="px-6 py-4 text-sm">{invoice.dueDate}</td>
                        <td className="px-6 py-4">
                          <Select
                            value={invoice.status}
                            onValueChange={(newStatus) => handleStatusChange(invoice.id, newStatus)}
                            disabled={updatingStatus.has(invoice.id)}
                          >
                            <SelectTrigger className="h-8 w-full">
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

      {/* Pagination */}
      {filteredInvoices.length > itemsPerPage && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            全{filteredInvoices.length}件中 {startIndex + 1}〜{Math.min(endIndex, filteredInvoices.length)}件を表示
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              前へ
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="min-w-[2.5rem]"
                    >
                      {page}
                    </Button>
                  )
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2">...</span>
                }
                return null
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              次へ
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
