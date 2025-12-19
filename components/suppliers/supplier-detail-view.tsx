"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Edit, Building2, Mail, Phone, MapPin, Calendar, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"
import { supplierApi, invoiceApi } from "@/lib/api-client"
import type { Supplier, Invoice } from "@/lib/types"

export function SupplierDetailView({ supplierId }: { supplierId: string }) {
  const [supplier, setSupplier] = useState<Supplier | null>(null)
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [supplierData, allInvoices] = await Promise.all([
          supplierApi.getById(supplierId),
          invoiceApi.getAll()
        ])
        
        setSupplier(supplierData)
        
        // Filter invoices for this supplier
        const supplierInvoices = allInvoices.filter(inv => inv.supplierId === supplierId)
        setInvoices(supplierInvoices)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [supplierId])

  if (loading) {
    return <div className="flex items-center justify-center h-96">読み込み中...</div>
  }

  if (!supplier) {
    return <div className="flex items-center justify-center h-96">取引先が見つかりません</div>
  }

  // Calculate statistics
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const averageAmount = invoices.length > 0 ? totalAmount / invoices.length : 0
  
  // Get recent invoices (last 5)
  const recentInvoices = [...invoices]
    .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/suppliers">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-balance text-3xl font-bold tracking-tight">{supplier.name}</h1>
              <Badge variant={supplier.status === "active" ? "default" : "secondary"} className={supplier.status === "active" ? "bg-success text-success-foreground" : ""}>
                {supplier.status === "active" ? "アクティブ" : "非アクティブ"}
              </Badge>
            </div>
            <p className="text-pretty text-muted-foreground">コード: {supplier.code}</p>
          </div>
        </div>
        <Button asChild>
          <Link href={`/suppliers/${supplier.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            編集
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Info */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                基本情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">適格請求書発行事業者登録番号</p>
                  <p className="font-mono text-lg">{supplier.registrationNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">取引先コード</p>
                  <p className="text-lg">{supplier.code}</p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">所在地</p>
                <div className="space-y-1">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <span>{supplier.address}</span>
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">電話:</span>
                    <span>{supplier.phone}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${supplier.email}`} className="text-primary hover:underline">
                      {supplier.email}
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>担当者情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">担当者名</p>
                <p className="text-lg font-medium">{supplier.contact}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">電話番号</p>
                  <p>{supplier.contactPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">メールアドレス</p>
                  <p>
                    <a href={`mailto:${supplier.contactEmail}`} className="text-primary hover:underline">
                      {supplier.contactEmail}
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>取引統計</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">総請求書数</p>
                <p className="text-2xl font-bold">{invoices.length}件</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">取引総額</p>
                <p className="text-2xl font-bold">¥{totalAmount.toLocaleString()}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">平均請求額</p>
                <p className="text-xl font-semibold">¥{Math.round(averageAmount).toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                最近の請求書
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentInvoices.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground py-8">
                  請求書がありません
                </p>
              ) : (
                <>
                  {recentInvoices.map((invoice) => (
                    <Link
                      key={invoice.id}
                      href={`/invoices/${invoice.id}`}
                      className="flex items-center justify-between border-b pb-3 last:border-0 hover:bg-muted/50 rounded px-2 -mx-2 transition-colors"
                    >
                      <div>
                        <p className="font-medium font-mono text-sm">{invoice.id}</p>
                        <p className="text-xs text-muted-foreground">{invoice.issueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">¥{invoice.amount.toLocaleString()}</p>
                        <Badge
                          variant={invoice.status === "支払済" ? "default" : "outline"}
                          className={invoice.status === "支払済" ? "text-xs bg-success text-success-foreground" : "text-xs"}
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                  {invoices.length > 5 && (
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={`/invoices?supplier=${supplier.name}`}>
                        すべて表示 ({invoices.length}件)
                      </Link>
                    </Button>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* System Info */}
          <Card>
            <CardHeader>
              <CardTitle>システム情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">登録日:</span>
                <span>{supplier.createdAt.split('T')[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">更新日:</span>
                <span>{supplier.updatedAt.split('T')[0]}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
