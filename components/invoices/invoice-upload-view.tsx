"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, FileText, CheckCircle2, Loader2, Mail, AlertTriangle, Calendar, DollarSign, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { invoiceApi, supplierApi, projectApi } from "@/lib/api-client"
import type { Supplier, Project } from "@/lib/types"
import type { OCRResult } from "@/lib/ocr-service"
import { importInvoicesFromEmail } from "@/lib/email-service"
import { useToast } from "@/hooks/use-toast"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: "uploading" | "ocr_processing" | "complete" | "error" | "duplicate"
  progress: number
  ocrData?: OCRResult
  duplicateInfo?: DuplicateInfo
  validationWarnings?: string[]
  previewUrl?: string // PDFプレビュー用のURL
  originalFile?: File // 元のFileオブジェクト
}

interface DuplicateInfo {
  isDuplicate: boolean
  duplicates: Array<{
    invoiceId: string
    matchType: string
    matchScore: number
    matchReasons: string[]
  }>
  warnings: string[]
}

interface EmailImportConfig {
  emailAddress: string
  folder: string
  autoImport: boolean
}

export function InvoiceUploadView() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<"upload" | "email">("upload")
  const [uploading, setUploading] = useState(false)
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [emailConfig, setEmailConfig] = useState<EmailImportConfig>({
    emailAddress: "",
    folder: "請求書",
    autoImport: false,
  })
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null)
  const [editingOCR, setEditingOCR] = useState(false)
  const [ocrEditData, setOcrEditData] = useState<OCRResult | null>(null)
  const [selectedProjectId, setSelectedProjectId] = useState<string>("")

  // Load suppliers and projects on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [suppliersData, projectsData] = await Promise.all([
          supplierApi.getAll({ status: 'active' }),
          projectApi.getAll({ status: 'active' })
        ])
        setSuppliers(suppliersData)
        setProjects(projectsData)
      } catch (error) {
        console.error('Failed to load data:', error)
        toast({
          title: "エラー",
          description: "データの読み込みに失敗しました",
          variant: "destructive",
        })
      }
    }
    loadData()
  }, [toast])


  // Process uploaded file
  const processFile = async (file: File) => {
    // PDFプレビュー用のURLを作成
    const previewUrl = file.type === 'application/pdf' ? URL.createObjectURL(file) : undefined
    
    const uploadedFile: UploadedFile = {
      id: Math.random().toString(36).substring(7),
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading",
      progress: 0,
      previewUrl,
      originalFile: file,
    }

    setFiles(prev => [...prev, uploadedFile])

    try {
      // アップロード進行状況のシミュレーション
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setFiles(prev =>
          prev.map(f =>
            f.id === uploadedFile.id ? { ...f, progress: i } : f
          )
        )
      }

      // OCR処理開始
      setFiles(prev =>
        prev.map(f =>
          f.id === uploadedFile.id ? { ...f, status: "ocr_processing", progress: 100 } : f
        )
      )

      // API呼び出し
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('アップロードに失敗しました')
      }

      const result = await response.json()

      setFiles(prev =>
        prev.map(f =>
          f.id === uploadedFile.id
            ? {
                ...f,
                status: result.duplicateCheck.isDuplicate ? "duplicate" : "complete",
                ocrData: result.ocrResult,
                duplicateInfo: result.duplicateCheck,
                validationWarnings: result.validation.warnings,
              }
            : f
        )
      )

      toast({
        title: "OCR処理完了",
        description: `${file.name} の処理が完了しました`,
      })
    } catch (error) {
      setFiles(prev =>
        prev.map(f =>
          f.id === uploadedFile.id ? { ...f, status: "error" } : f
        )
      )
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : 'ファイル処理に失敗しました',
        variant: "destructive",
      })
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const droppedFiles = Array.from(e.dataTransfer.files)
    droppedFiles.forEach(processFile)
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(processFile)
    }
  }

  const handleEmailImport = async () => {
    if (!emailConfig.emailAddress) {
      toast({
        title: "エラー",
        description: "メールアドレスを入力してください",
        variant: "destructive",
      })
      return
    }

    setUploading(true)
    try {
      const result = await importInvoicesFromEmail(emailConfig)

      if (result.success) {
        // 取得したファイルを処理
        for (const file of result.files) {
          await processFile(file)
        }

        toast({
          title: "メール取込完了",
          description: `${result.filesExtracted}件のファイルを取り込みました`,
        })
      } else {
        toast({
          title: "エラー",
          description: result.errors.join(', '),
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "エラー",
        description: "メール取込に失敗しました",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleSaveInvoice = async (file: UploadedFile) => {
    console.log('handleSaveInvoice called with file:', file)
    
    if (!file.ocrData) {
      console.error('No OCR data available')
      return
    }

    try {
      const data = ocrEditData || file.ocrData
      console.log('Using OCR data:', data)
      
      // Find supplier by name
      console.log('Looking for supplier:', data.supplier)
      console.log('Available suppliers:', suppliers.map(s => s.name))
      let foundSupplier = suppliers.find(s => s.name === data.supplier)
      
      // 取引先が存在しない場合、OCRデータから自動作成
      if (!foundSupplier) {
        console.log('Supplier not found, creating new supplier from OCR data')
        try {
          const newSupplier = await supplierApi.create({
            name: data.supplier,
            code: `SUP-${Date.now()}`,
            registrationNumber: data.supplierRegistrationNumber || '',
            address: data.supplierAddress || '',
            phone: data.supplierPhone || '',
            email: data.supplierEmail || '',
            contact: data.supplierContactPerson || '',
            status: 'active',
          })
          console.log('New supplier created:', newSupplier)
          foundSupplier = newSupplier
          
          // 取引先リストを更新
          setSuppliers(prev => [...prev, newSupplier])
          
          toast({
            title: "取引先を登録しました",
            description: `取引先「${data.supplier}」を新規登録しました`,
          })
        } catch (error) {
          console.error('Failed to create supplier:', error)
          toast({
            title: "エラー",
            description: `取引先「${data.supplier}」の登録に失敗しました。手動で取引先を登録してから再度お試しください。`,
            variant: "destructive",
          })
          return
        }
      } else {
        console.log('Found supplier:', foundSupplier)
      }
      
      // Get selected project info
      const selectedProject = selectedProjectId && selectedProjectId !== 'none' ? projects.find(p => p.id === selectedProjectId) : null
      
      const invoiceData = {
        // 基本情報
        invoiceNumber: data.invoiceNumber,
        issueDate: data.issueDate,
        dueDate: data.dueDate,
        transactionDate: null,
        transactionPeriodStart: null,
        transactionPeriodEnd: null,
        currency: 'JPY',
        subject: null,
        purchaseOrderNumber: null,
        projectName: selectedProject?.name || null,
        projectId: selectedProjectId && selectedProjectId !== 'none' ? selectedProjectId : null,
        projectCode: selectedProject?.code || undefined,
        
        // 取引先情報
        supplier: data.supplier,
        supplierId: foundSupplier.id,
        supplierRegistrationNumber: data.supplierRegistrationNumber || null,
        supplierAddress: null,
        supplierPhone: null,
        supplierEmail: null,
        supplierContactPerson: null,
        
        // 請求先情報
        billingTo: null,
        billingToDepartment: null,
        billingToContactPerson: null,
        
        // 金額・税情報
        subtotal: data.taxExcludedAmount,
        taxAmount: data.taxAmount,
        amount: data.amount,
        taxExcludedAmount: data.taxExcludedAmount,
        taxBreakdowns: [],
        taxExemptAmount: null,
        nonTaxableAmount: null,
        
        // 明細情報
        items: data.items.map((item) => ({
          name: item.name,
          description: item.description || null,
          quantity: item.quantity,
          unit: item.unit || null,
          unitPrice: item.unitPrice,
          amount: item.amount,
          taxRate: item.taxRate || null,
          taxAmount: item.taxAmount || null,
          remarks: item.remarks || null,
        })),
        
        // 支払条件・振込先
        paymentDueDate: data.dueDate,
        paymentTerms: null,
        bankName: null,
        bankBranchName: null,
        bankAccountType: null,
        bankAccountNumber: null,
        bankAccountHolder: null,
        transferFeePayer: null,
        
        // 照合用キー
        normalizedSupplierName: null,
        matchingProjectName: selectedProject?.name || null,
        matchingContactPerson: null,
        
        // メタデータ
        receiptMethod: 'アップロード',
        receiptDateTime: new Date().toISOString(),
        registeredBy: null,
        receivedFromEmail: null,
        fileHash: null,
        storagePath: data.filePath || null,
        ocrConfidenceScore: Math.round(data.confidence * 100),
        documentVersion: 1,
        
        // ファイル情報
        filePath: data.filePath || null,
        fileName: data.fileName || null,
        fileSize: data.fileSize || null,
        
        // 既存の互換性フィールド
        project: selectedProject?.name || "プロジェクト名",
        status: "未処理" as const,
        ocrConfidence: Math.round(data.confidence * 100),
      }

      console.log('Creating invoice with data:', invoiceData)
      
      const createdInvoice = await invoiceApi.create(invoiceData)
      
      console.log('Invoice created successfully:', createdInvoice)

      toast({
        title: "登録完了",
        description: "請求書を登録しました",
      })

      // Redirect to invoice list
      window.location.href = '/invoices'
    } catch (error) {
      console.error('Invoice creation error:', error)
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : "請求書の登録に失敗しました",
        variant: "destructive",
      })
    }
  }

  const handleRemoveFile = (fileId: string) => {
    // プレビューURLのクリーンアップ
    const fileToRemove = files.find(f => f.id === fileId)
    if (fileToRemove?.previewUrl) {
      URL.revokeObjectURL(fileToRemove.previewUrl)
    }
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const handleEditOCR = (file: UploadedFile) => {
    setSelectedFile(file)
    setOcrEditData(file.ocrData || null)
    setEditingOCR(true)
  }

  const handleSaveOCREdit = () => {
    if (selectedFile && ocrEditData) {
      setFiles(prev =>
        prev.map(f =>
          f.id === selectedFile.id ? { ...f, ocrData: ocrEditData } : f
        )
      )
      setEditingOCR(false)
      setSelectedFile(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/invoices">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">請求書登録</h1>
          <p className="text-muted-foreground">メール自動取込または手動アップロードで請求書を登録</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "upload" | "email")}>
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upload">
            <Upload className="mr-2 h-4 w-4" />
            手動アップロード
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="mr-2 h-4 w-4" />
            メール自動取込
          </TabsTrigger>
        </TabsList>

        {/* Manual Upload Tab */}
        <TabsContent value="upload" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Upload Area & PDF Preview */}
            <Card>
              <CardHeader>
                <CardTitle>ファイルアップロード</CardTitle>
              </CardHeader>
              <CardContent>
                {files.length === 0 || !files[0]?.previewUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="flex min-h-[400px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/20 transition-colors hover:border-primary hover:bg-muted/40"
                  >
                    <Upload className="h-16 w-16 text-muted-foreground" />
                    <p className="mt-4 text-lg font-medium">ファイルをドラッグ&ドロップ</p>
                    <p className="mt-1 text-sm text-muted-foreground">または</p>
                    <label htmlFor="file-upload">
                      <Button className="mt-4" variant="outline" asChild>
                        <span>ファイルを選択</span>
                      </Button>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileSelect}
                    />
                    <div className="mt-6 text-xs text-muted-foreground text-center">
                      <p>対応形式: PDF, JPG, PNG</p>
                      <p>最大サイズ: 10MB/ファイル</p>
                      <p>最大件数: 10ファイル/回</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* PDFプレビューエリア */}
                    {files[0]?.previewUrl && (
                      <div className="rounded-lg border bg-muted/10">
                        <div className="flex items-center justify-between border-b px-4 py-2 bg-muted/20">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm font-medium">{files[0].name}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveFile(files[0].id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="p-2">
                          <iframe
                            src={files[0].previewUrl}
                            className="w-full h-[600px] rounded border-0"
                            title="PDF Preview"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* 追加アップロードエリア */}
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/20 p-4 transition-colors hover:border-primary hover:bg-muted/40"
                    >
                      <label htmlFor="file-upload-more" className="cursor-pointer">
                        <Button variant="outline" size="sm" asChild>
                          <span>
                            <Upload className="mr-2 h-4 w-4" />
                            別のファイルを追加
                          </span>
                        </Button>
                      </label>
                      <input
                        id="file-upload-more"
                        type="file"
                        className="hidden"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileSelect}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Processing Status */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>処理状況</CardTitle>
                </CardHeader>
                <CardContent>
                  {files.length === 0 ? (
                    <div className="flex min-h-[200px] items-center justify-center text-sm text-muted-foreground">
                      アップロードされたファイルはありません
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {files.map((file) => (
                        <div key={file.id} className="space-y-2 rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <div className="flex-1">
                              <p className="font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {file.status === "uploading" && "アップロード中..."}
                                {file.status === "ocr_processing" && "OCR処理中..."}
                                {file.status === "complete" && `処理完了 (信頼度: ${Math.round((file.ocrData?.confidence || 0) * 100)}%)`}
                                {file.status === "duplicate" && "重複検知"}
                                {file.status === "error" && "エラー"}
                              </p>
                            </div>
                            {file.status === "complete" && (
                              <CheckCircle2 className="h-5 w-5 text-success" />
                            )}
                            {file.status === "duplicate" && (
                              <AlertTriangle className="h-5 w-5 text-warning" />
                            )}
                            {(file.status === "uploading" || file.status === "ocr_processing") && (
                              <Loader2 className="h-5 w-5 animate-spin text-primary" />
                            )}
                            {file.status !== "uploading" && file.status !== "ocr_processing" && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveFile(file.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          {file.status === "uploading" && <Progress value={file.progress} />}
                          
                          {file.status === "duplicate" && file.duplicateInfo && (
                            <Alert variant="destructive">
                              <AlertTriangle className="h-4 w-4" />
                              <AlertTitle>重複検知</AlertTitle>
                              <AlertDescription>
                                <div className="space-y-2">
                                  {file.duplicateInfo.duplicates.slice(0, 3).map((dup, idx) => (
                                    <div key={idx} className="text-sm">
                                      <div className="font-medium">
                                        請求書ID: {dup.invoiceId} ({dup.matchType === 'exact' ? '完全一致' : dup.matchType === 'high' ? '高類似度' : '類似'})
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {dup.matchReasons.join(', ')}
                                      </div>
                                    </div>
                                  ))}
                                  {file.duplicateInfo.warnings.map((warning, idx) => (
                                    <div key={idx} className="text-xs text-warning">{warning}</div>
                                  ))}
                                </div>
                              </AlertDescription>
                            </Alert>
                          )}

                          {file.validationWarnings && file.validationWarnings.length > 0 && (
                            <Alert>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertTitle>注意</AlertTitle>
                              <AlertDescription>
                                <ul className="text-sm space-y-1">
                                  {file.validationWarnings.map((warning, idx) => (
                                    <li key={idx}>{warning}</li>
                                  ))}
                                </ul>
                              </AlertDescription>
                            </Alert>
                          )}

                          {(file.status === "complete" || file.status === "duplicate") && file.ocrData && (
                            <div className="space-y-2 rounded-lg bg-muted p-3 text-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <span className="text-muted-foreground">請求書番号:</span>
                                  <p className={`font-medium ${(file.ocrData.fieldConfidence?.invoiceNumber || 0) < 0.75 ? 'text-warning' : ''}`}>
                                    {file.ocrData.invoiceNumber}
                                    {(file.ocrData.fieldConfidence?.invoiceNumber || 0) < 0.75 && (
                                      <Badge variant="outline" className="ml-2 text-xs">
                                        低信頼度
                                      </Badge>
                                    )}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">取引先:</span>
                                  <p className={`font-medium ${(file.ocrData.fieldConfidence?.supplier || 0) < 0.75 ? 'text-warning' : ''}`}>
                                    {file.ocrData.supplier}
                                    {(file.ocrData.fieldConfidence?.supplier || 0) < 0.75 && (
                                      <Badge variant="outline" className="ml-2 text-xs">
                                        低信頼度
                                      </Badge>
                                    )}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">発行日:</span>
                                  <p className="font-medium">{file.ocrData.issueDate}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">支払期日:</span>
                                  <p className="font-medium">{file.ocrData.dueDate}</p>
                                </div>
                                <div className="col-span-2">
                                  <span className="text-muted-foreground">請求金額:</span>
                                  <p className={`text-lg font-bold ${(file.ocrData.fieldConfidence?.amount || 0) < 0.75 ? 'text-warning' : ''}`}>
                                    ¥{file.ocrData.amount.toLocaleString()}
                                    {(file.ocrData.fieldConfidence?.amount || 0) < 0.75 && (
                                      <Badge variant="outline" className="ml-2 text-xs">
                                        低信頼度
                                      </Badge>
                                    )}
                                  </p>
                                </div>
                                {file.ocrData.supplierRegistrationNumber && (
                                  <div className="col-span-2">
                                    <span className="text-muted-foreground">適格請求書発行事業者登録番号:</span>
                                    <p className="font-medium">{file.ocrData.supplierRegistrationNumber}</p>
                                  </div>
                                )}
                              </div>
                              
                              {/* 案件選択フィールド */}
                              <div className="space-y-2 pt-2">
                                <Label className="text-xs text-muted-foreground">案件選択（任意）</Label>
                                <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="案件を選択してください" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="none">案件なし</SelectItem>
                                    {projects.map((project) => (
                                      <SelectItem key={project.id} value={project.id}>
                                        [{project.code}] {project.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="flex gap-2 pt-2">
                                <Button size="sm" variant="outline" onClick={() => handleEditOCR(file)}>
                                  編集
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => handleSaveInvoice(file)}
                                  disabled={file.status === "duplicate"}
                                >
                                  {file.status === "duplicate" ? "重複のため登録不可" : "登録"}
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>OCR自動読み取り</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      アップロード完了後、自動的にOCR処理が開始されます。
                    </p>
                    <div className="rounded-lg bg-muted p-4">
                      <h4 className="mb-2 font-medium">自動抽出項目:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 請求書番号</li>
                        <li>• 発行日・支払期日</li>
                        <li>• 取引先名</li>
                        <li>• 請求金額（税込・税抜・消費税）</li>
                        <li>• 明細情報</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-warning bg-warning/10 p-4">
                      <h4 className="mb-2 font-medium flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        重複検知機能
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        請求書番号、取引先、金額から既存の請求書との重複をチェックし、登録ミスを防止します。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Email Import Tab */}
        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>メール自動取込設定</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="invoices@company.com"
                  value={emailConfig.emailAddress}
                  onChange={(e) => setEmailConfig({ ...emailConfig, emailAddress: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                  請求書を受信するメールアドレスを指定してください
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="folder">フォルダ指定</Label>
                <Input
                  id="folder"
                  placeholder="請求書"
                  value={emailConfig.folder}
                  onChange={(e) => setEmailConfig({ ...emailConfig, folder: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                  メール内の特定フォルダから自動取込できます
                </p>
              </div>

              <div className="rounded-lg border p-4 space-y-3">
                <h4 className="font-medium">取込対象</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span>メール添付ファイル（PDF, JPG, PNG）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span>メール本文内のダウンロードURL</span>
                  </div>
                </div>
              </div>

              <Alert>
                <Mail className="h-4 w-4" />
                <AlertTitle>自動取込の流れ</AlertTitle>
                <AlertDescription className="text-sm space-y-1">
                  <p>1. 指定メールアドレス・フォルダを定期的に監視</p>
                  <p>2. 新着請求書を自動検知</p>
                  <p>3. OCR処理を実行</p>
                  <p>4. 重複チェック後、システムに自動登録</p>
                </AlertDescription>
              </Alert>

              <Button
                className="w-full"
                onClick={handleEmailImport}
                disabled={!emailConfig.emailAddress || uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    取込中...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    今すぐメールを取り込む
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* OCR Edit Dialog */}
      {editingOCR && selectedFile && ocrEditData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>OCR結果を編集</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>請求書番号</Label>
                  <Input
                    value={ocrEditData.invoiceNumber}
                    onChange={(e) => setOcrEditData({ ...ocrEditData, invoiceNumber: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>取引先</Label>
                  <Select
                    value={ocrEditData.supplier}
                    onValueChange={(value) => setOcrEditData({ ...ocrEditData, supplier: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {suppliers.map((supplier) => (
                        <SelectItem key={supplier.id} value={supplier.name}>
                          {supplier.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>発行日</Label>
                  <Input
                    type="date"
                    value={ocrEditData.issueDate}
                    onChange={(e) => setOcrEditData({ ...ocrEditData, issueDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>支払期日</Label>
                  <Input
                    type="date"
                    value={ocrEditData.dueDate}
                    onChange={(e) => setOcrEditData({ ...ocrEditData, dueDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>請求金額（税込）</Label>
                  <Input
                    type="number"
                    value={ocrEditData.amount}
                    onChange={(e) => setOcrEditData({ ...ocrEditData, amount: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>消費税</Label>
                  <Input
                    type="number"
                    value={ocrEditData.taxAmount}
                    onChange={(e) => setOcrEditData({ ...ocrEditData, taxAmount: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setEditingOCR(false)}>
                  キャンセル
                </Button>
                <Button onClick={handleSaveOCREdit}>
                  保存
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
