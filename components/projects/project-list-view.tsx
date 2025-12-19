"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FolderKanban, Search, Plus, Eye, Calendar } from "lucide-react"
import Link from "next/link"
import { projectApi, supplierApi, invoiceApi } from "@/lib/api-client"
import type { Project, Supplier, Invoice } from "@/lib/types"

interface ProjectWithStats extends Project {
  invoiceCount: number
  totalAmount: number
  paidAmount: number
}

export function ProjectListView() {
  const router = useRouter()
  const [projects, setProjects] = useState<ProjectWithStats[]>([])
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "completed" | "suspended" | "cancelled">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [creating, setCreating] = useState(false)

  // 新規登録フォームの状態
  const [newProject, setNewProject] = useState({
    code: "",
    name: "",
    description: "",
    clientId: "",
    status: "active" as Project["status"],
    startDate: "",
    endDate: "",
    budget: "",
    manager: "",
    members: "",
    tags: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, suppliersData, invoicesData] = await Promise.all([
          projectApi.getAll(),
          supplierApi.getAll(),
          invoiceApi.getAll()
        ])
        
        // Calculate stats for each project
        const projectsWithStats: ProjectWithStats[] = projectsData.map(project => {
          const projectInvoices = invoicesData.filter(inv => inv.projectId === project.id)
          const paidInvoices = projectInvoices.filter(inv => inv.status === "支払済" || inv.status === "消込済")
          
          return {
            ...project,
            invoiceCount: projectInvoices.length,
            totalAmount: projectInvoices.reduce((sum, inv) => sum + inv.amount, 0),
            paidAmount: paidInvoices.reduce((sum, inv) => sum + inv.amount, 0)
          }
        })
        
        setProjects(projectsWithStats)
        setSuppliers(suppliersData)
        setInvoices(invoicesData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Filter projects
  const filteredProjects = projects.filter(project => {
    // Status filter
    if (statusFilter === "active" && project.status !== "active") return false
    if (statusFilter === "completed" && project.status !== "completed") return false
    if (statusFilter === "suspended" && project.status !== "suspended") return false
    if (statusFilter === "cancelled" && project.status !== "cancelled") return false
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        project.name.toLowerCase().includes(query) ||
        project.code.toLowerCase().includes(query) ||
        project.clientName?.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  // Calculate stats
  const totalProjects = projects.length
  const activeProjects = projects.filter(p => p.status === "active").length
  const completedProjects = projects.filter(p => p.status === "completed").length
  const suspendedProjects = projects.filter(p => p.status === "suspended").length
  const cancelledProjects = projects.filter(p => p.status === "cancelled").length

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreating(true)

    try {
      const projectData = {
        code: newProject.code,
        name: newProject.name,
        description: newProject.description || null,
        clientId: newProject.clientId,
        status: newProject.status,
        startDate: newProject.startDate,
        endDate: newProject.endDate || null,
        budget: newProject.budget ? Number(newProject.budget) : null,
        manager: newProject.manager || null,
        members: newProject.members ? newProject.members.split(',').map(m => m.trim()) : [],
        tags: newProject.tags ? newProject.tags.split(',').map(t => t.trim()) : []
      }

      const created = await projectApi.create(projectData)
      setIsCreateDialogOpen(false)
      
      // Reset form
      setNewProject({
        code: "",
        name: "",
        description: "",
        clientId: "",
        status: "active",
        startDate: "",
        endDate: "",
        budget: "",
        manager: "",
        members: "",
        tags: ""
      })
      
      // Redirect to the newly created project detail page
      router.push(`/projects/${created.id}`)
      router.refresh()
    } catch (error) {
      console.error('Failed to create project:', error)
      alert('案件の作成に失敗しました')
    } finally {
      setCreating(false)
    }
  }

  const getStatusBadge = (status: Project["status"]) => {
    const statusConfig = {
      active: { label: "進行中", variant: "default" as const, color: "bg-success text-success-foreground" },
      completed: { label: "完了", variant: "secondary" as const, color: "" },
      suspended: { label: "中断", variant: "outline" as const, color: "border-warning text-warning" },
      cancelled: { label: "中止", variant: "outline" as const, color: "border-destructive text-destructive" }
    }
    const config = statusConfig[status]
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
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">案件管理</h1>
          <p className="text-pretty text-muted-foreground">案件情報の管理</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              新規案件登録
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>新規案件登録</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="code">案件コード *</Label>
                  <Input
                    id="code"
                    value={newProject.code}
                    onChange={(e) => setNewProject({ ...newProject, code: e.target.value })}
                    required
                    placeholder="PRJ-2025-001"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">案件名 *</Label>
                  <Input
                    id="name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    required
                    placeholder="〇〇システム開発案件"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">案件説明</Label>
                <Input
                  id="description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="案件の詳細説明"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="clientId">取引先 *</Label>
                  <Select value={newProject.clientId} onValueChange={(value) => setNewProject({ ...newProject, clientId: value })}>
                    <SelectTrigger id="clientId">
                      <SelectValue placeholder="取引先を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {suppliers.map(supplier => (
                        <SelectItem key={supplier.id} value={supplier.id}>
                          {supplier.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">ステータス *</Label>
                  <Select value={newProject.status} onValueChange={(value: Project["status"]) => setNewProject({ ...newProject, status: value })}>
                    <SelectTrigger id="status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">進行中</SelectItem>
                      <SelectItem value="completed">完了</SelectItem>
                      <SelectItem value="suspended">中断</SelectItem>
                      <SelectItem value="cancelled">中止</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="startDate">開始日 *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={newProject.startDate}
                    onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">終了日</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={newProject.endDate}
                    onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="budget">予算額</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={newProject.budget}
                    onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                    placeholder="1000000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manager">案件責任者</Label>
                  <Input
                    id="manager"
                    value={newProject.manager}
                    onChange={(e) => setNewProject({ ...newProject, manager: e.target.value })}
                    placeholder="山田太郎"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="members">メンバー (カンマ区切り)</Label>
                <Input
                  id="members"
                  value={newProject.members}
                  onChange={(e) => setNewProject({ ...newProject, members: e.target.value })}
                  placeholder="田中次郎, 佐藤花子"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">タグ (カンマ区切り)</Label>
                <Input
                  id="tags"
                  value={newProject.tags}
                  onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                  placeholder="開発, Web, React"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  キャンセル
                </Button>
                <Button type="submit" disabled={creating}>
                  {creating ? "作成中..." : "作成"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats with Filter Tabs */}
      <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
          <TabsTrigger value="all" className="gap-2">
            <FolderKanban className="h-4 w-4" />
            全案件 ({totalProjects})
          </TabsTrigger>
          <TabsTrigger value="active" className="gap-2">
            <div className="h-2 w-2 rounded-full bg-success" />
            進行中 ({activeProjects})
          </TabsTrigger>
          <TabsTrigger value="completed" className="gap-2">
            <div className="h-2 w-2 rounded-full bg-muted-foreground" />
            完了 ({completedProjects})
          </TabsTrigger>
          <TabsTrigger value="suspended" className="gap-2">
            <div className="h-2 w-2 rounded-full bg-warning" />
            中断 ({suspendedProjects})
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="gap-2">
            <div className="h-2 w-2 rounded-full bg-destructive" />
            中止 ({cancelledProjects})
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="案件コード、案件名、取引先名で検索..."
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

      {/* Project List */}
      <div className="space-y-3">
        {loading ? (
          <Card>
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              読み込み中...
            </CardContent>
          </Card>
        ) : filteredProjects.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              該当する案件が見つかりません
            </CardContent>
          </Card>
        ) : (
          filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      {getStatusBadge(project.status)}
                      <span className="text-sm text-muted-foreground">コード: {project.code}</span>
                    </div>

                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FolderKanban className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">取引先:</span>
                        <span>{project.clientName || "未設定"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {project.startDate} 〜 {project.endDate || "未定"}
                        </span>
                      </div>
                    </div>

                    {project.manager && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">責任者:</span> {project.manager}
                      </div>
                    )}

                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">予算額: </span>
                        <span className="font-semibold">
                          {project.budget ? `¥${project.budget.toLocaleString()}` : "未設定"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">実績金額: </span>
                        <span className="font-semibold">¥{project.totalAmount.toLocaleString()}</span>
                      </div>
                      {project.budget && (
                        <div>
                          <span className="text-muted-foreground">差額: </span>
                          <span className={`font-semibold ${project.budget - project.totalAmount >= 0 ? 'text-success' : 'text-destructive'}`}>
                            ¥{(project.budget - project.totalAmount).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>
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
            {filteredProjects.length}件の案件を表示中
            {searchQuery && ` （検索: "${searchQuery}"）`}
          </p>
        </div>
      )}
    </div>
  )
}