"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Shield, Database, FileText, Bell, Building2, Save } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SettingsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-balance text-3xl font-bold tracking-tight">設定</h1>
        <p className="text-pretty text-muted-foreground">システムの設定と管理</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-6">
          <TabsTrigger value="general">
            <Building2 className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">一般</span>
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">ユーザー</span>
          </TabsTrigger>
          <TabsTrigger value="invoice">
            <FileText className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">請求書</span>
          </TabsTrigger>
          <TabsTrigger value="storage">
            <Database className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">保存</span>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">通知</span>
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">セキュリティ</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>会社情報</CardTitle>
              <CardDescription>請求書に表示される会社情報を設定します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">会社名</Label>
                  <Input id="company-name" defaultValue="株式会社サンプル" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registration-number">適格請求書発行事業者登録番号</Label>
                  <Input id="registration-number" defaultValue="T1234567890123" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">住所</Label>
                  <Input id="address" defaultValue="東京都千代田区丸の内1-1-1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">電話番号</Label>
                  <Input id="phone" defaultValue="03-1234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" defaultValue="info@sample.co.jp" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>会計年度</CardTitle>
              <CardDescription>会計年度の設定を管理します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fiscal-year-start">会計年度開始月</Label>
                  <select
                    id="fiscal-year-start"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="4">4月</option>
                    <option value="1">1月</option>
                    <option value="7">7月</option>
                    <option value="10">10月</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-fiscal-year">現在の会計年度</Label>
                  <Input id="current-fiscal-year" defaultValue="2024年度（2024/04 - 2025/03）" disabled />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management */}
        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>ユーザー管理</CardTitle>
                  <CardDescription>システムユーザーの管理と権限設定</CardDescription>
                </div>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  新規ユーザー追加
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "山田 太郎", email: "yamada@sample.co.jp", role: "管理者", status: "active" },
                  { name: "佐藤 花子", email: "sato@sample.co.jp", role: "経理担当者", status: "active" },
                  { name: "鈴木 次郎", email: "suzuki@sample.co.jp", role: "営業担当者", status: "active" },
                  { name: "田中 三郎", email: "tanaka@sample.co.jp", role: "閲覧者", status: "inactive" },
                ].map((user) => (
                  <div
                    key={user.email}
                    className="flex flex-col gap-3 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{user.name}</p>
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status === "active" ? "アクティブ" : "非アクティブ"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">役割:</span> {user.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        編集
                      </Button>
                      <Button variant="outline" size="sm">
                        権限変更
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>役割と権限</CardTitle>
              <CardDescription>各役割の権限設定</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { role: "管理者", permissions: ["すべての機能", "ユーザー管理", "システム設定"] },
                  { role: "経理担当者", permissions: ["請求書管理", "支払管理", "レポート閲覧"] },
                  { role: "営業担当者", permissions: ["請求書登録", "取引先管理", "請求書閲覧"] },
                  { role: "閲覧者", permissions: ["請求書閲覧", "レポート閲覧"] },
                ].map((item) => (
                  <div key={item.role} className="rounded-lg border p-4">
                    <h4 className="mb-2 font-semibold">{item.role}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.permissions.map((permission) => (
                        <Badge key={permission} variant="secondary">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Invoice Settings */}
        <TabsContent value="invoice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>OCR設定</CardTitle>
              <CardDescription>請求書の自動読み取り設定</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="auto-ocr">アップロード時に自動でOCR処理を実行</Label>
                  <p className="text-sm text-muted-foreground">
                    新しい請求書がアップロードされたら自動的にOCR処理を開始します
                  </p>
                </div>
                <Switch id="auto-ocr" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="confidence-threshold">信頼度の閾値</Label>
                  <p className="text-sm text-muted-foreground">この値以下の認識結果には警告を表示します</p>
                </div>
                <Input id="confidence-threshold" type="number" defaultValue="85" className="w-20" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>承認フロー</CardTitle>
              <CardDescription>請求書の承認プロセス設定</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="approval-required">承認フローを有効化</Label>
                  <p className="text-sm text-muted-foreground">請求書の支払いに承認が必要になります</p>
                </div>
                <Switch id="approval-required" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="approval-threshold">承認が必要な金額</Label>
                <div className="flex items-center gap-2">
                  <Input id="approval-threshold" type="number" defaultValue="100000" />
                  <span className="text-sm text-muted-foreground">円以上</span>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>請求書番号の採番ルール</CardTitle>
              <CardDescription>請求書番号の自動採番設定</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="invoice-prefix">プレフィックス</Label>
                <Input id="invoice-prefix" defaultValue="INV-" placeholder="例: INV-" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="invoice-format">番号形式</Label>
                  <select
                    id="invoice-format"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option>年-連番 (例: 2025-001)</option>
                    <option>年月-連番 (例: 202501-001)</option>
                    <option>連番のみ (例: 001)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoice-digits">桁数</Label>
                  <Input id="invoice-digits" type="number" defaultValue="3" min="3" max="6" />
                </div>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm text-muted-foreground">プレビュー: INV-2025-001</p>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Storage Settings */}
        <TabsContent value="storage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>電子帳簿保存法対応</CardTitle>
              <CardDescription>電帳法に準拠した保存設定</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="timestamp">タイムスタンプの自動付与</Label>
                  <p className="text-sm text-muted-foreground">請求書保存時に認定タイムスタンプを付与します</p>
                </div>
                <Switch id="timestamp" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="immutable">不可逆性の確保</Label>
                  <p className="text-sm text-muted-foreground">保存後の請求書の改ざんを防止します</p>
                </div>
                <Switch id="immutable" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="search-requirements">3要件検索の有効化</Label>
                  <p className="text-sm text-muted-foreground">取引年月日、取引金額、取引先名での検索を必須化</p>
                </div>
                <Switch id="search-requirements" defaultChecked />
              </div>
              <div className="rounded-lg border border-success/50 bg-success/10 p-4">
                <p className="text-sm font-medium text-success">電子帳簿保存法の要件を満たしています</p>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>保存期間設定</CardTitle>
              <CardDescription>請求書の保存期間管理</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="retention-period">保存期間</Label>
                <select
                  id="retention-period"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="7">7年（法定保存期間）</option>
                  <option value="10">10年</option>
                  <option value="permanent">無期限</option>
                </select>
                <p className="text-sm text-muted-foreground">
                  ※ 法人税法により、請求書は7年間の保存が義務付けられています
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="auto-archive">自動アーカイブ</Label>
                  <p className="text-sm text-muted-foreground">保存期間を過ぎた請求書を自動でアーカイブします</p>
                </div>
                <Switch id="auto-archive" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>バックアップ設定</CardTitle>
              <CardDescription>データの自動バックアップ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="auto-backup">自動バックアップ</Label>
                  <p className="text-sm text-muted-foreground">定期的にデータのバックアップを作成します</p>
                </div>
                <Switch id="auto-backup" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">バックアップ頻度</Label>
                <select
                  id="backup-frequency"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option>毎日</option>
                  <option>毎週</option>
                  <option>毎月</option>
                </select>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">最終バックアップ: 2025-01-15 03:00</p>
                <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                  今すぐバックアップ
                </Button>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>通知設定</CardTitle>
              <CardDescription>各種イベントの通知設定を管理します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notify-payment-due">支払期日の通知</Label>
                  <p className="text-sm text-muted-foreground">支払期日が近づいたら通知します</p>
                </div>
                <Switch id="notify-payment-due" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-due-days">通知タイミング</Label>
                <div className="flex items-center gap-2">
                  <Input id="payment-due-days" type="number" defaultValue="7" className="w-20" />
                  <span className="text-sm text-muted-foreground">日前</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notify-new-invoice">新規請求書の通知</Label>
                  <p className="text-sm text-muted-foreground">新しい請求書が登録されたら通知します</p>
                </div>
                <Switch id="notify-new-invoice" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notify-approval">承認依頼の通知</Label>
                  <p className="text-sm text-muted-foreground">承認が必要な請求書があるときに通知します</p>
                </div>
                <Switch id="notify-approval" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notify-ocr-complete">OCR処理完了の通知</Label>
                  <p className="text-sm text-muted-foreground">OCR処理が完了したら通知します</p>
                </div>
                <Switch id="notify-ocr-complete" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>メール通知設定</CardTitle>
              <CardDescription>メール通知の設定</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="email-notifications">メール通知を有効化</Label>
                  <p className="text-sm text-muted-foreground">重要な通知をメールで受信します</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">通知先メールアドレス</Label>
                <Input id="notification-email" type="email" defaultValue="yamada@sample.co.jp" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>セキュリティ設定</CardTitle>
              <CardDescription>システムのセキュリティ設定を管理します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="two-factor">二段階認証</Label>
                  <p className="text-sm text-muted-foreground">ログイン時に二段階認証を要求します</p>
                </div>
                <Switch id="two-factor" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">セッションタイムアウト</Label>
                <div className="flex items-center gap-2">
                  <Input id="session-timeout" type="number" defaultValue="30" className="w-20" />
                  <span className="text-sm text-muted-foreground">分</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="ip-restriction">IPアドレス制限</Label>
                  <p className="text-sm text-muted-foreground">特定のIPアドレスからのアクセスのみ許可します</p>
                </div>
                <Switch id="ip-restriction" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>パスワードポリシー</CardTitle>
              <CardDescription>パスワードの要件を設定します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="min-password-length">最小文字数</Label>
                <Input id="min-password-length" type="number" defaultValue="8" min="6" max="32" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="require-uppercase">大文字を含める</Label>
                  <p className="text-sm text-muted-foreground">パスワードに大文字を1文字以上含める必要があります</p>
                </div>
                <Switch id="require-uppercase" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="require-numbers">数字を含める</Label>
                  <p className="text-sm text-muted-foreground">パスワードに数字を1文字以上含める必要があります</p>
                </div>
                <Switch id="require-numbers" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="require-symbols">記号を含める</Label>
                  <p className="text-sm text-muted-foreground">パスワードに記号を1文字以上含める必要があります</p>
                </div>
                <Switch id="require-symbols" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-expiry">パスワード有効期限</Label>
                <div className="flex items-center gap-2">
                  <Input id="password-expiry" type="number" defaultValue="90" />
                  <span className="text-sm text-muted-foreground">日</span>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>監査ログ</CardTitle>
              <CardDescription>システムの操作履歴を確認できます</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="audit-log">監査ログの記録</Label>
                  <p className="text-sm text-muted-foreground">すべての操作履歴を記録します</p>
                </div>
                <Switch id="audit-log" defaultChecked />
              </div>
              <div>
                <Button variant="outline">監査ログを表示</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
