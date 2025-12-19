// Invoice Types
export interface Invoice {
  id: string
  
  // ①基本情報
  invoiceNumber: string | null
  issueDate: string
  dueDate: string
  transactionDate: string | null // 役務提供日/納品日
  transactionPeriodStart: string | null // 請求期間開始
  transactionPeriodEnd: string | null // 請求期間終了
  currency: string | null // 通貨 (JPYなど)
  subject: string | null // 件名/タイトル
  purchaseOrderNumber: string | null // 発注番号
  projectName: string | null // 案件名
  projectId: string | null // 案件ID
  projectCode?: string // 案件コード(参照用)
  
  // ②取引先(請求元)
  supplier: string
  supplierId: string
  supplierRegistrationNumber: string | null // T+13桁
  supplierAddress: string | null
  supplierPhone: string | null
  supplierEmail: string | null
  supplierContactPerson: string | null // 担当者名
  
  // ③請求先(当社情報)
  billingTo: string | null // 宛名
  billingToDepartment: string | null // 部署
  billingToContactPerson: string | null // 担当者
  
  // ④金額・税情報
  subtotal: number | null // 小計(税抜)
  taxAmount: number
  amount: number // 合計金額(税込)
  taxExcludedAmount: number // 税抜金額
  taxBreakdowns: TaxBreakdown[] // 税率ごとの内訳
  taxExemptAmount: number | null // 免税額
  nonTaxableAmount: number | null // 不課税額
  
  // ⑤明細情報
  items?: InvoiceItem[]
  
  // ⑥支払条件・振込先
  paymentDueDate: string | null // 支払期日
  paymentTerms: string | null // 支払条件(締日・サイト)
  bankName: string | null
  bankBranchName: string | null
  bankAccountType: string | null // 普通/当座
  bankAccountNumber: string | null
  bankAccountHolder: string | null // 名義カナ
  transferFeePayer: string | null // 手数料負担(貴社/当社)
  
  // ⑦照合用キー
  normalizedSupplierName: string | null // 正規化された取引先名
  matchingProjectName: string | null // 案件名
  matchingContactPerson: string | null // 担当者名
  
  // ⑧電帳法・監査用メタデータ
  receiptMethod: string | null // 受領方法(メール/アップロード)
  receiptDateTime: string | null // 受領日時
  registeredBy: string | null // 登録者
  receivedFromEmail: string | null // 受信元メールアドレス
  fileHash: string | null // SHA256ハッシュ
  storagePath: string | null // S3等の保存パス
  ocrConfidenceScore: number | null // OCR信頼度
  documentVersion: number | null // バージョン番号
  
  // PDFファイル情報
  filePath?: string | null // PDFファイルパス
  fileName?: string | null // ファイル名
  fileSize?: number | null // ファイルサイズ(bytes)
  
  // 既存の互換性フィールド
  project: string
  status: "未処理" | "照合済" | "差異あり" | "支払済" | "消込済"
  ocrConfidence?: number
  createdAt: string
  updatedAt: string
}

export interface InvoiceItem {
  id: string
  name: string // 品目/役務内容
  description: string | null // 詳細説明
  quantity: number
  unit: string | null // 単位
  unitPrice: number // 単価(税抜)
  amount: number // 金額(税抜)
  taxRate: number | null // 税率
  taxAmount: number | null // 税額
  remarks: string | null // 備考
}

export interface TaxBreakdown {
  taxRate: number // 10, 8など
  taxableAmount: number // 課税対象額
  taxAmount: number // 税額
}

// 案件マスタ
export interface Project {
  id: string
  code: string // 案件コード(例: PRJ-2025-001)
  name: string // 案件名
  description: string | null // 案件説明
  clientId: string // 取引先ID(Supplierとの関連)
  clientName?: string // 取引先名(参照用)
  status: 'active' | 'completed' | 'suspended' | 'cancelled' // ステータス
  startDate: string // 開始日(YYYY-MM-DD)
  endDate: string | null // 終了日(YYYY-MM-DD)
  budget: number | null // 予算額
  actualAmount: number // 実績金額(紐付いた請求書の合計)
  manager: string | null // 案件責任者
  members: string[] // 案件メンバー
  tags: string[] // タグ
  createdAt: string
  updatedAt: string
}

// Supplier Types
export interface Supplier {
  id: string
  name: string
  code: string
  registrationNumber: string
  address: string
  phone: string
  email: string
  contact: string
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}

// Payment Types
export interface Payment {
  id: string
  invoiceId: string
  supplier: string
  project: string
  amount: number
  dueDate: string
  status: "未処理" | "照合済" | "差異あり" | "支払済" | "消込済"
  paidAt?: string
  paymentMethod?: "銀行振込" | "クレジットカード" | "現金" | "その他"
  bankTransactionId?: string
  reconciliationStatus?: "未消込" | "消込中" | "消込済" | "差異あり"
  reconciliationNote?: string
  reconciliationDate?: string
  actualAmount?: number
  createdAt: string
  updatedAt: string
}

// Reconciliation Types (消込管理)
export interface Reconciliation {
  id: string
  paymentId: string
  invoiceId: string
  expectedAmount: number
  actualAmount: number
  difference: number
  status: "完了" | "差異あり" | "保留中"
  reconciliationDate: string
  bankTransactionId?: string
  note: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

// Bank Transaction Types (銀行API連携用)
export interface BankTransaction {
  id: string
  transactionDate: string
  amount: number
  counterparty: string
  description: string
  balanceAfter: number
  matched: boolean
  matchedPaymentId?: string
  createdAt: string
}

// Bank API Configuration
export interface BankApiConfig {
  enabled: boolean
  provider: "Mock" | "GMO" | "SBI" | "UFJ" | "その他"
  apiKey?: string
  accountNumber?: string
  lastSyncDate?: string
  autoReconciliation: boolean
}

// Payment Schedule Types
export interface PaymentSchedule {
  id: string
  month: string
  totalAmount: number
  totalCount: number
  scheduledPayments: Payment[]
  generatedAt: string
  status: "下書き" | "確定" | "処理中" | "完了"
}

// Batch Payment Processing
export interface BatchPaymentRequest {
  paymentIds: string[]
  paymentDate: string
  paymentMethod: "銀行振込" | "クレジットカード" | "現金" | "その他"
  note?: string
}

export interface BatchPaymentResult {
  success: number
  failed: number
  total: number
  errors: Array<{
    paymentId: string
    error: string
  }>
  processedAt: string
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  role: "管理者" | "経理担当者" | "営業担当者" | "閲覧者"
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}

// Settings Types
export interface CompanySettings {
  companyName: string
  registrationNumber: string
  address: string
  phone: string
  email: string
  fiscalYearStart: number
}

export interface InvoiceSettings {
  autoOcr: boolean
  confidenceThreshold: number
  approvalRequired: boolean
  approvalThreshold: number
  invoicePrefix: string
  invoiceFormat: "年-連番" | "年月-連番" | "連番のみ"
  invoiceDigits: number
}

export interface NotificationSettings {
  paymentDueNotification: boolean
  paymentDueDays: number
  newInvoiceNotification: boolean
  approvalNotification: boolean
  ocrCompleteNotification: boolean
  emailNotifications: boolean
  notificationEmail: string
}

export interface SecuritySettings {
  twoFactor: boolean
  sessionTimeout: number
  ipRestriction: boolean
  minPasswordLength: number
  requireUppercase: boolean
  requireNumbers: boolean
  requireSymbols: boolean
  passwordExpiry: number
  auditLog: boolean
}

export interface StorageSettings {
  timestamp: boolean
  immutable: boolean
  searchRequirements: boolean
  retentionPeriod: "7" | "10" | "permanent"
  autoArchive: boolean
  autoBackup: boolean
  backupFrequency: "毎日" | "毎週" | "毎月"
}

export interface Settings {
  company: CompanySettings
  invoice: InvoiceSettings
  notification: NotificationSettings
  security: SecuritySettings
  storage: StorageSettings
}
// Monthly Report Types
export interface MonthlyReport {
  id: string
  period: string // 'YYYY-MM'形式
  totalInvoices: number
  totalAmount: number
  statusBreakdown: {
    status: Invoice['status']
    count: number
    amount: number
  }[]
  supplierBreakdown: {
    supplierId: string
    supplierName: string
    count: number
    amount: number
  }[]
  generatedAt: string
  filePath?: string | null
}

export interface ReportSchedule {
  id: string
  name: string
  frequency: 'monthly' | 'weekly' | 'daily'
  dayOfMonth?: number // 月次の場合の日付(1-31)
  recipients: string[] // メールアドレスリスト
  enabled: boolean
  lastSentAt?: string | null
  createdAt: string
  updatedAt: string
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'invoice_received' | 'payment_due' | 'payment_completed' | 'approval_required' | 'project_updated' | 'system'
  title: string
  message: string
  relatedId?: string | null // 関連するInvoice/Payment/Project等のID
  relatedType?: 'invoice' | 'payment' | 'project' | 'supplier' | null
  priority: 'low' | 'medium' | 'high'
  read: boolean
  createdAt: string
}