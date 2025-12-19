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
import { supplierApi } from "@/lib/api-client"
import type { Supplier } from "@/lib/types"

interface SupplierEditViewProps {
  supplierId: string
}

export function SupplierEditView({ supplierId }: SupplierEditViewProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [supplier, setSupplier] = useState<Supplier | null>(null)
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    registrationNumber: "",
    address: "",
    phone: "",
    email: "",
    contact: "",
    status: "active" as "active" | "inactive"
  })

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const data = await supplierApi.getById(supplierId)
        setSupplier(data)
        setFormData({
          name: data.name,
          code: data.code,
          registrationNumber: data.registrationNumber,
          address: data.address,
          phone: data.phone,
          email: data.email,
          contact: data.contact,
          status: data.status
        })
      } catch (error) {
        console.error('Failed to fetch supplier:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSupplier()
  }, [supplierId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      await supplierApi.update(supplierId, formData)
      router.push(`/suppliers/${supplierId}`)
    } catch (error) {
      console.error('Failed to update supplier:', error)
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

  if (!supplier) {
    return <div className="flex items-center justify-center h-96">取引先が見つかりません</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/suppliers/${supplierId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">取引先編集</h1>
          <p className="text-pretty text-muted-foreground">{supplier.name}の情報を編集</p>
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
                <Label htmlFor="name">取引先名 *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="株式会社〇〇"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="code">取引先コード *</Label>
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => handleChange("code", e.target.value)}
                  required
                  placeholder="SUP001"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrationNumber">適格請求書発行事業者登録番号 *</Label>
              <Input
                id="registrationNumber"
                value={formData.registrationNumber}
                onChange={(e) => handleChange("registrationNumber", e.target.value)}
                required
                placeholder="T1234567890123"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">ステータス</Label>
              <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">アクティブ</SelectItem>
                  <SelectItem value="inactive">非アクティブ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>連絡先情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">住所 *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
                placeholder="〒000-0000 東京都..."
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">電話番号 *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  placeholder="03-1234-5678"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  placeholder="info@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">担当者名 *</Label>
              <Input
                id="contact"
                value={formData.contact}
                onChange={(e) => handleChange("contact", e.target.value)}
                required
                placeholder="山田太郎"
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href={`/suppliers/${supplierId}`}>
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