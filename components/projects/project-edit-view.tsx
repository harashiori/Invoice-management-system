"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { projectApi, supplierApi } from "@/lib/api-client"
import type { Project, Supplier } from "@/lib/types"

interface ProjectEditViewProps {
  projectId: string
}

export function ProjectEditView({ projectId }: ProjectEditViewProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [project, setProject] = useState<Project | null>(null)
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  
  // Form state
  const [formData, setFormData] = useState({
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
        const [projectData, suppliersData] = await Promise.all([
          projectApi.getById(projectId),
          supplierApi.getAll()
        ])
        
        setProject(projectData)
        setSuppliers(suppliersData)
        setFormData({
          code: projectData.code,
          name: projectData.name,
          description: projectData.description || "",
          clientId: projectData.clientId,
          status: projectData.status,
          startDate: projectData.startDate,
          endDate: projectData.endDate || "",
          budget: projectData.budget?.toString() || "",
          manager: projectData.manager || "",
          members: projectData.members.join(", "),
          tags: projectData.tags.join(", ")
        })
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [projectId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const updateData = {
        code: formData.code,
        name: formData.name,
        description: formData.description || null,
        clientId: formData.clientId,
        status: formData.status,
        startDate: formData.startDate,
        endDate: formData.endDate || null,
        budget: formData.budget ? Number(formData.budget) : null,
        manager: formData.manager || null,
        members: formData.members ? formData.members.split(',').map(m => m.trim()).filter(m => m) : [],
        tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(t => t) : []
      }
      
      await projectApi.update(projectId, updateData)
      router.push(`/projects/${projectId}`)
    } catch (error) {
      console.error('Failed to update project:', error)
      alert('更新に失敗しました')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (loading) {
    return <div className="flex items-center justify-center h-96">読み込み中...</div>
  }

  if (!project) {
    return <div className="flex items-center justify-center h-96">案件が見つかりません</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/projects/${projectId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">案件編集</h1>
          <p className="text-pretty text-muted-foreground">{project.name}の情報を編集</p>
        </div>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>基本情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="code">案件コード *</Label>
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => handleChange("code", e.target.value)}
                  required
                  placeholder="PRJ-2025-001"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">案件名 *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="〇〇システム開発案件"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">案件説明</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="案件の詳細説明"
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="clientId">取引先 *</Label>
                <Select value={formData.clientId} onValueChange={(value) => handleChange("clientId", value)}>
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
                <Select value={formData.status} onValueChange={(value: Project["status"]) => handleChange("status", value)}>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>期間・予算</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startDate">開始日 *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">終了日</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">予算額</Label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
                placeholder="1000000"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>担当者・メンバー</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="manager">案件責任者</Label>
              <Input
                id="manager"
                value={formData.manager}
                onChange={(e) => handleChange("manager", e.target.value)}
                placeholder="山田太郎"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="members">メンバー (カンマ区切り)</Label>
              <Input
                id="members"
                value={formData.members}
                onChange={(e) => handleChange("members", e.target.value)}
                placeholder="田中次郎, 佐藤花子"
              />
              <p className="text-xs text-muted-foreground">
                複数のメンバーをカンマで区切って入力してください
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">タグ (カンマ区切り)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => handleChange("tags", e.target.value)}
                placeholder="開発, Web, React"
              />
              <p className="text-xs text-muted-foreground">
                複数のタグをカンマで区切って入力してください
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href={`/projects/${projectId}`}>
              キャンセル
            </Link>
          </Button>
          <Button type="submit" disabled={saving}>
            <Save className="mr-2 h-4 w-4" />
            {saving ? "保存中..." : "保存"}
          </Button>
        </div>
      </form>
    </div>
  )
}