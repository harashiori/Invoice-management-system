"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Edit, FolderKanban, Calendar, TrendingUp, FileText, Users, Tag } from "lucide-react"
import Link from "next/link"
import { projectApi, supplierApi, invoiceApi } from "@/lib/api-client"
import type { Project, Supplier, Invoice } from "@/lib/types"

export function ProjectDetailView({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<Project | null>(null)
  const [supplier, setSupplier] = useState<Supplier | null>(null)
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectData, allInvoices] = await Promise.all([
          projectApi.getById(projectId),
          invoiceApi.getAll()
        ])
        
        setProject(projectData)
        
        // Filter invoices for this project
        const projectInvoices = allInvoices.filter(inv => inv.projectId === projectId)
        setInvoices(projectInvoices)

        // Fetch supplier if clientId exists
        if (projectData.clientId) {
          try {
            const supplierData = await supplierApi.getById(projectData.clientId)
            setSupplier(supplierData)
          } catch (error) {
            console.error('Failed to fetch supplier:', error)
          }
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [projectId])

  if (loading) {
    return <div className="flex items-center justify-center h-96">読み込み中...</div>
  }

  if (!project) {
    return <div className="flex items-center justify-center h-96">案件が見つかりません</div>
  }

  // Calculate statistics
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidInvoices = invoices.filter(inv => inv.status === "支払済" || inv.status === "消込済")
  const paidAmount = paidInvoices.reduce((sum, inv) => sum + inv.amount, 0)
  const difference = (project.budget || 0) - totalAmount
  
  // Get recent invoices (last 5)
  const recentInvoices = [...invoices]
    .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime())
    .slice(0, 5)

  const getStatusBadge = (status: Project["status"]) => {
    const statusConfig = {
      active: { label: "進行中", variant: "default" as const, color: "bg-success text-success-foreground" },
      completed: { label: "完了", variant: "secondary" as const, color: "" },
      suspended: { label: "中断", variant: "outline" as const, color: "border-warning text-warning" },
      cancelled: { label: "中止", variant: "outline" as const, color: "border-destructive text-destructive" }
    }
    const config = statusConfig[status] || statusConfig.active // デフォルトはactive
    return (
      <Badge variant={config.variant} className={config.color}>
        {config.label}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-balance text-3xl font-bold tracking-tight">{project.name}</h1>
              {getStatusBadge(project.status)}
            </div>
            <p className="text-pretty text-muted-foreground">コード: {project.code}</p>
          </div>
        </div>
        <Button asChild>
          <Link href={`/projects/${project.id}/edit`}>
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
                <FolderKanban className="h-5 w-5" />
                基本情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">案件コード</p>
                  <p className="font-mono text-lg">{project.code}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ステータス</p>
                  <div className="mt-1">{getStatusBadge(project.status)}</div>
                </div>
              </div>

              {project.description && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">案件説明</p>
                  <p className="mt-1">{project.description}</p>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">開始日</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{project.startDate ? new Date(project.startDate).toISOString().split('T')[0] : "未設定"}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">終了日</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{project.endDate ? new Date(project.endDate).toISOString().split('T')[0] : "未定"}</span>
                  </div>
                </div>
              </div>

              {project.manager && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">案件責任者</p>
                  <p className="mt-1">{project.manager}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Client Information */}
          <Card>
            <CardHeader>
              <CardTitle>取引先情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {supplier ? (
                <div>
                  <p className="text-sm text-muted-foreground">取引先名</p>
                  <Link 
                    href={`/suppliers/${supplier.id}`}
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    {supplier.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">コード: {supplier.code}</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">取引先情報がありません</p>
              )}
            </CardContent>
          </Card>

          {/* Budget and Actual */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                予算・実績
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm text-muted-foreground">予算額</p>
                  <p className="text-2xl font-bold">
                    {project.budget ? `¥${project.budget.toLocaleString()}` : "未設定"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">実績金額</p>
                  <p className="text-2xl font-bold">¥{totalAmount.toLocaleString()}</p>
                </div>
                {project.budget && (
                  <div>
                    <p className="text-sm text-muted-foreground">差額</p>
                    <p className={`text-2xl font-bold ${difference >= 0 ? 'text-success' : 'text-destructive'}`}>
                      ¥{difference.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Members and Tags */}
          {((project.members && project.members.length > 0) || (project.tags && project.tags.length > 0)) && (
            <Card>
              <CardHeader>
                <CardTitle>メンバー・タグ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.members && project.members.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium text-muted-foreground">メンバー</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.members.map((member, index) => (
                        <Badge key={index} variant="secondary">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium text-muted-foreground">タグ</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>統計情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">請求書件数</p>
                <p className="text-2xl font-bold">{invoices.length}件</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">合計金額</p>
                <p className="text-2xl font-bold">¥{totalAmount.toLocaleString()}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">支払済金額</p>
                <p className="text-xl font-semibold">¥{paidAmount.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                紐付いた請求書
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
                        <p className="font-medium font-mono text-sm">{invoice.invoiceNumber || invoice.id}</p>
                        <p className="text-xs text-muted-foreground">{invoice.issueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">¥{invoice.amount.toLocaleString()}</p>
                        <Badge
                          variant={invoice.status === "支払済" || invoice.status === "消込済" ? "default" : "outline"}
                          className={invoice.status === "支払済" || invoice.status === "消込済" ? "text-xs bg-success text-success-foreground" : "text-xs"}
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                  {invoices.length > 5 && (
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={`/invoices?project=${project.name}`}>
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
                <span>{project.createdAt ? project.createdAt.split('T')[0] : '未設定'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">更新日:</span>
                <span>{project.updatedAt ? project.updatedAt.split('T')[0] : '未設定'}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}