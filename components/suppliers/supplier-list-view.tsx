"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Search, Plus, Eye, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { supplierApi, invoiceApi } from "@/lib/api-client"
import type { Supplier, Invoice } from "@/lib/types"

interface SupplierWithStats extends Supplier {
  invoiceCount: number
  totalAmount: number
}

export function SupplierListView() {
  const [suppliers, setSuppliers] = useState<SupplierWithStats[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [suppliersData, invoicesData] = await Promise.all([
          supplierApi.getAll(),
          invoiceApi.getAll()
        ])
        
        // Calculate stats for each supplier
        const suppliersWithStats: SupplierWithStats[] = suppliersData.map(supplier => {
          const supplierInvoices = invoicesData.filter(inv => inv.supplierId === supplier.id)
          return {
            ...supplier,
            invoiceCount: supplierInvoices.length,
            totalAmount: supplierInvoices.reduce((sum, inv) => sum + inv.amount, 0)
          }
        })
        
        setSuppliers(suppliersWithStats)
        setInvoices(invoicesData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Filter suppliers
  const filteredSuppliers = suppliers.filter(supplier => {
    // Status filter
    if (statusFilter === "active" && supplier.status !== "active") return false
    if (statusFilter === "inactive" && supplier.status !== "inactive") return false
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        supplier.name.toLowerCase().includes(query) ||
        supplier.code.toLowerCase().includes(query) ||
        supplier.registrationNumber.toLowerCase().includes(query) ||
        supplier.email.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  // Calculate stats
  const totalSuppliers = suppliers.length
  const activeSuppliers = suppliers.filter(s => s.status === "active").length
  const inactiveSuppliers = suppliers.filter(s => s.status === "inactive").length
  
  // Calculate new suppliers this month
  const currentMonth = new Date().toISOString().substring(0, 7)
  const newThisMonth = suppliers.filter(s => s.createdAt.startsWith(currentMonth)).length

  const handleClearSearch = () => {
    setSearchQuery("")
  }
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">取引先マスタ</h1>
          <p className="text-pretty text-muted-foreground">取引先情報の管理</p>
        </div>
        <Button asChild>
          <Link href="/suppliers/new">
            <Plus className="mr-2 h-4 w-4" />
            新規取引先登録
          </Link>
        </Button>
      </div>

      {/* Stats with Filter Tabs */}
      <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
          <TabsTrigger value="all" className="gap-2">
            <Building2 className="h-4 w-4" />
            総取引先 ({totalSuppliers})
          </TabsTrigger>
          <TabsTrigger value="active" className="gap-2">
            <div className="h-2 w-2 rounded-full bg-success" />
            アクティブ ({activeSuppliers})
          </TabsTrigger>
          <TabsTrigger value="inactive" className="gap-2">
            <div className="h-2 w-2 rounded-full bg-muted-foreground" />
            非アクティブ ({inactiveSuppliers})
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* New this month indicator */}
      {newThisMonth > 0 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Plus className="h-5 w-5 text-primary" />
              <p className="text-sm">
                <span className="font-semibold text-primary">{newThisMonth}件</span>の取引先が今月追加されました
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="取引先名、コード、適格請求書発行事業者登録番号で検索..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              onClick={handleClearSearch}
              disabled={!searchQuery}
            >
              検索条件クリア
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Supplier List */}
      <div className="space-y-3">
        {loading ? (
          <Card>
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              読み込み中...
            </CardContent>
          </Card>
        ) : filteredSuppliers.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              該当する取引先が見つかりません
            </CardContent>
          </Card>
        ) : (
          filteredSuppliers.map((supplier) => (
          <Card key={supplier.id} className="hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{supplier.name}</h3>
                    <Badge variant={supplier.status === "active" ? "default" : "secondary"}>
                      {supplier.status === "active" ? "アクティブ" : "非アクティブ"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">コード: {supplier.code}</span>
                  </div>

                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">登録番号:</span>
                      <span className="font-mono">{supplier.registrationNumber}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{supplier.email}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">担当:</span> {supplier.contact}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{supplier.address}</p>

                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">請求書数: </span>
                      <span className="font-semibold">{supplier.invoiceCount}件</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">取引総額: </span>
                      <span className="font-semibold">¥{supplier.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/suppliers/${supplier.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      詳細
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          ))
        )}
      </div>

      {/* Results count */}
      {!loading && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredSuppliers.length}件の取引先を表示中
            {searchQuery && ` （検索: "${searchQuery}"）`}
          </p>
        </div>
      )}
    </div>
  )
}
