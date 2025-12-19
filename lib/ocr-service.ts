/**
 * OCRサービス - PDF/画像から請求書情報を抽出
 * 現在は模擬実装。将来的にGoogle Vision API等と連携可能な設計
 */

export interface OCRResult {
  // ①基本情報
  invoiceNumber: string
  issueDate: string
  dueDate: string
  transactionDate: string | null
  transactionPeriodStart: string | null
  transactionPeriodEnd: string | null
  currency: string | null
  subject: string | null
  purchaseOrderNumber: string | null
  projectName: string | null
  
  // ②取引先(請求元)
  supplier: string
  supplierRegistrationNumber: string | null
  supplierAddress: string | null
  supplierPhone: string | null
  supplierEmail: string | null
  supplierContactPerson: string | null
  
  // ③請求先(当社情報)
  billingTo: string | null
  billingToDepartment: string | null
  billingToContactPerson: string | null
  
  // ④金額・税情報
  subtotal: number | null
  taxAmount: number
  amount: number
  taxExcludedAmount: number
  taxBreakdowns: Array<{
    taxRate: number
    taxableAmount: number
    taxAmount: number
  }>
  taxExemptAmount: number | null
  nonTaxableAmount: number | null
  
  // ⑤明細情報
  items: Array<{
    name: string
    description: string | null
    quantity: number
    unit: string | null
    unitPrice: number
    amount: number
    taxRate: number | null
    taxAmount: number | null
    remarks: string | null
  }>
  
  // ⑥支払条件・振込先
  paymentDueDate: string | null
  paymentTerms: string | null
  bankName: string | null
  bankBranchName: string | null
  bankAccountType: string | null
  bankAccountNumber: string | null
  bankAccountHolder: string | null
  transferFeePayer: string | null
  
  // ファイル情報
  filePath?: string | null
  fileName?: string | null
  fileSize?: number | null
  
  // OCRメタデータ
  confidence: number
  fieldConfidence: {
    invoiceNumber: number
    issueDate: number
    dueDate: number
    supplier: number
    amount: number
    taxExcludedAmount: number
    taxAmount: number
    supplierRegistrationNumber: number
    bankName: number
    bankAccountNumber: number
    [key: string]: number
  }
  rawText?: string
}

export interface OCROptions {
  language?: 'ja' | 'en'
  confidenceThreshold?: number
  extractItems?: boolean
}

/**
 * PDFまたは画像ファイルからOCR処理を実行
 * @param file - アップロードされたファイル
 * @param options - OCRオプション
 * @param filePath - 保存されたファイルのパス(オプション)
 * @returns OCR結果
 */
export async function processOCR(
  file: File,
  options: OCROptions = {},
  filePath?: string
): Promise<OCRResult> {
  const {
    language = 'ja',
    confidenceThreshold = 0.85,
    extractItems = true,
  } = options

  // TODO: 実際のOCR API (Google Vision API等) と連携
  // 現在は模擬実装
  
  // ファイルサイズとタイプのバリデーション
  if (file.size > 10 * 1024 * 1024) {
    throw new Error('ファイルサイズが大きすぎます (最大: 10MB)')
  }

  const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
  if (!validTypes.includes(file.type)) {
    throw new Error('対応していないファイル形式です')
  }

  // 模擬的な処理遅延
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000))

  // 模擬データ生成
  const today = new Date()
  const issueDate = new Date(today)
  issueDate.setDate(issueDate.getDate() - Math.floor(Math.random() * 10))
  
  const dueDate = new Date(issueDate)
  dueDate.setDate(dueDate.getDate() + 30)
  
  const paymentDueDate = new Date(dueDate)
  paymentDueDate.setDate(paymentDueDate.getDate() + Math.floor(Math.random() * 10))

  // 日付をy/m/d形式にフォーマット
  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}/${month}/${day}`
  }

  const taxExcludedAmount = Math.floor(Math.random() * 900000) + 100000
  const taxAmount = Math.floor(taxExcludedAmount * 0.1)
  const amount = taxExcludedAmount + taxAmount
  
  const supplier = generateRandomSupplier()
  const hasFullInfo = Math.random() > 0.3 // 70%の確率で詳細情報あり

  // ランダムな信頼度スコア (0.70-0.99)
  const baseConfidence = 0.70 + Math.random() * 0.29
  
  // 税率別内訳を生成
  const taxBreakdowns = []
  const tax10Amount = Math.floor(taxExcludedAmount * 0.8)
  const tax8Amount = taxExcludedAmount - tax10Amount
  if (tax10Amount > 0) {
    taxBreakdowns.push({
      taxRate: 10,
      taxableAmount: tax10Amount,
      taxAmount: Math.floor(tax10Amount * 0.1)
    })
  }
  if (tax8Amount > 0) {
    taxBreakdowns.push({
      taxRate: 8,
      taxableAmount: tax8Amount,
      taxAmount: Math.floor(tax8Amount * 0.08)
    })
  }
  
  const result: OCRResult = {
    // ①基本情報
    invoiceNumber: `INV-${today.getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
    issueDate: formatDate(issueDate),
    dueDate: formatDate(dueDate),
    transactionDate: hasFullInfo ? formatDate(issueDate) : null,
    transactionPeriodStart: hasFullInfo ? formatDate(new Date(issueDate.getFullYear(), issueDate.getMonth(), 1)) : null,
    transactionPeriodEnd: hasFullInfo ? formatDate(new Date(issueDate.getFullYear(), issueDate.getMonth() + 1, 0)) : null,
    currency: 'JPY',
    subject: hasFullInfo ? `${issueDate.getMonth() + 1}月分請求` : null,
    purchaseOrderNumber: hasFullInfo ? `PO-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}` : null,
    projectName: hasFullInfo ? generateRandomProjectName() : null,
    
    // ②取引先(請求元)
    supplier,
    supplierRegistrationNumber: `T${Math.floor(Math.random() * 10000000000000).toString().padStart(13, '0')}`,
    supplierAddress: hasFullInfo ? generateRandomAddress() : null,
    supplierPhone: hasFullInfo ? `0${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}` : null,
    supplierEmail: hasFullInfo ? `info@${supplier.replace(/株式会社|合同会社/g, '').trim().toLowerCase()}.co.jp` : null,
    supplierContactPerson: hasFullInfo ? generateRandomPersonName() : null,
    
    // ③請求先(当社情報)
    billingTo: '株式会社NEWGATE御中',
    billingToDepartment: hasFullInfo ? '経理部' : null,
    billingToContactPerson: hasFullInfo ? generateRandomPersonName() : null,
    
    // ④金額・税情報
    subtotal: taxExcludedAmount,
    taxAmount,
    amount,
    taxExcludedAmount,
    taxBreakdowns,
    taxExemptAmount: null,
    nonTaxableAmount: null,
    
    // ⑤明細情報
    items: extractItems ? generateRandomItems(taxExcludedAmount) : [],
    
    // ⑥支払条件・振込先
    paymentDueDate: hasFullInfo ? formatDate(paymentDueDate) : null,
    paymentTerms: hasFullInfo ? '月末締め翌月末払い' : null,
    bankName: hasFullInfo ? generateRandomBankName() : null,
    bankBranchName: hasFullInfo ? `${['本店', '支店', '東京', '大阪', '名古屋'][Math.floor(Math.random() * 5)]}支店` : null,
    bankAccountType: hasFullInfo ? (Math.random() > 0.5 ? '普通' : '当座') : null,
    bankAccountNumber: hasFullInfo ? Math.floor(Math.random() * 9000000) + 1000000 + '' : null,
    bankAccountHolder: hasFullInfo ? supplier.replace(/株式会社|合同会社/g, '').trim().toUpperCase() : null,
    transferFeePayer: hasFullInfo ? (Math.random() > 0.5 ? '貴社負担' : '当社負担') : null,
    
    // ファイル情報
    filePath: filePath || null,
    fileName: file.name,
    fileSize: file.size,
    
    // OCRメタデータ
    confidence: baseConfidence,
    fieldConfidence: {
      invoiceNumber: Math.min(0.99, baseConfidence + Math.random() * 0.1),
      issueDate: Math.min(0.99, baseConfidence + Math.random() * 0.15),
      dueDate: Math.min(0.99, baseConfidence + Math.random() * 0.15),
      supplier: Math.min(0.99, baseConfidence + Math.random() * 0.1),
      amount: Math.min(0.99, baseConfidence + Math.random() * 0.2),
      taxExcludedAmount: Math.min(0.99, baseConfidence + Math.random() * 0.15),
      taxAmount: Math.min(0.99, baseConfidence + Math.random() * 0.15),
      supplierRegistrationNumber: hasFullInfo ? Math.min(0.99, baseConfidence + Math.random() * 0.1) : 0.5,
      bankName: hasFullInfo ? Math.min(0.99, baseConfidence + Math.random() * 0.15) : 0.5,
      bankAccountNumber: hasFullInfo ? Math.min(0.99, baseConfidence + Math.random() * 0.15) : 0.5,
    },
    rawText: generateMockRawText(),
  }

  return result
}

/**
 * 複数ファイルのバッチOCR処理
 */
export async function batchProcessOCR(
  files: File[],
  options: OCROptions = {}
): Promise<OCRResult[]> {
  const results: OCRResult[] = []
  
  for (const file of files) {
    try {
      const result = await processOCR(file, options)
      results.push(result)
    } catch (error) {
      console.error(`Failed to process ${file.name}:`, error)
      // エラーの場合はスキップして次へ
    }
  }
  
  return results
}

/**
 * OCR結果の検証
 */
export function validateOCRResult(result: OCRResult): {
  isValid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  // 必須フィールドのチェック
  if (!result.invoiceNumber) {
    errors.push('請求書番号が見つかりません')
  }
  if (!result.supplier) {
    errors.push('取引先名が見つかりません')
  }
  if (!result.amount || result.amount <= 0) {
    errors.push('請求金額が無効です')
  }

  // 日付の整合性チェック
  const issue = new Date(result.issueDate)
  const due = new Date(result.dueDate)
  if (due < issue) {
    warnings.push('支払期日が発行日より前です')
  }

  // 金額の整合性チェック
  const calculatedAmount = result.taxExcludedAmount + result.taxAmount
  if (Math.abs(calculatedAmount - result.amount) > 1) {
    warnings.push('税込金額の計算が一致しません')
  }

  // 信頼度チェック
  if (result.confidence < 0.70) {
    warnings.push('OCR信頼度が低いです。内容を確認してください')
  }

  // 低信頼度フィールドの警告
  Object.entries(result.fieldConfidence).forEach(([field, confidence]) => {
    if (confidence < 0.75) {
      warnings.push(`${getFieldLabel(field)}の信頼度が低いです (${Math.round(confidence * 100)}%)`)
    }
  })

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

// ヘルパー関数
function generateRandomSupplier(): string {
  // データストアに登録されている取引先のみを返す
  const suppliers = [
    '株式会社サンプル',
    'テストコーポレーション',
    'デモ株式会社',
    'ABC商事',
    'XYZ株式会社',
  ]
  return suppliers[Math.floor(Math.random() * suppliers.length)]
}

function generateRandomItems(totalAmount: number): Array<{
  name: string
  description: string | null
  quantity: number
  unit: string | null
  unitPrice: number
  amount: number
  taxRate: number | null
  taxAmount: number | null
  remarks: string | null
}> {
  const itemNames = [
    'システム開発費用',
    'コンサルティング費用',
    '商品A',
    '商品B',
    'サービス利用料',
    '保守運用費',
    'ライセンス費用',
    '月額利用料',
  ]
  
  const units = ['式', '時間', '個', '台', 'セット', 'ヶ月', '日', '人月']

  const itemCount = Math.floor(Math.random() * 3) + 2 // 2-4項目
  const items = []
  let remainingAmount = totalAmount

  for (let i = 0; i < itemCount; i++) {
    const isLast = i === itemCount - 1
    const itemAmount = isLast 
      ? remainingAmount 
      : Math.floor(remainingAmount / (itemCount - i) * (0.7 + Math.random() * 0.6))
    
    const quantity = Math.floor(Math.random() * 10) + 1
    const unitPrice = Math.floor(itemAmount / quantity)
    const actualAmount = quantity * unitPrice
    const taxRate = Math.random() > 0.2 ? 10 : 8
    const itemTaxAmount = Math.floor(actualAmount * taxRate / 100)

    items.push({
      name: itemNames[i % itemNames.length],
      description: Math.random() > 0.5 ? `${itemNames[i % itemNames.length]}の詳細説明` : null,
      quantity,
      unit: units[Math.floor(Math.random() * units.length)],
      unitPrice,
      amount: actualAmount,
      taxRate,
      taxAmount: itemTaxAmount,
      remarks: Math.random() > 0.7 ? '特記事項あり' : null,
    })

    remainingAmount -= actualAmount
  }

  return items
}

function generateRandomProjectName(): string {
  const projects = [
    'Webサイトリニューアル',
    'システム開発',
    'コンサルティング',
    'マーケティング支援',
    'セキュリティ診断',
    'インフラ構築',
    '保守運用',
    'デザイン制作',
  ]
  return projects[Math.floor(Math.random() * projects.length)]
}

function generateRandomAddress(): string {
  const prefectures = ['東京都', '大阪府', '神奈川県', '愛知県', '福岡県']
  const cities = ['千代田区', '港区', '渋谷区', '新宿区', '中央区']
  const towns = ['丸の内', '六本木', '渋谷', '新宿', '銀座']
  
  const pref = prefectures[Math.floor(Math.random() * prefectures.length)]
  const city = cities[Math.floor(Math.random() * cities.length)]
  const town = towns[Math.floor(Math.random() * towns.length)]
  const number = `${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 9) + 1}`
  
  return `${pref}${city}${town}${number}`
}

function generateRandomPersonName(): string {
  const surnames = ['田中', '佐藤', '鈴木', '高橋', '渡辺', '伊藤', '山本', '中村']
  const givenNames = ['太郎', '次郎', '三郎', '花子', '美咲', '健太', '翔太', '優子']
  return `${surnames[Math.floor(Math.random() * surnames.length)]} ${givenNames[Math.floor(Math.random() * givenNames.length)]}`
}

function generateRandomBankName(): string {
  const banks = [
    '三菱UFJ銀行',
    '三井住友銀行',
    'みずほ銀行',
    'りそな銀行',
    'ゆうちょ銀行',
    '楽天銀行',
    'PayPay銀行',
    'GMOあおぞらネット銀行',
  ]
  return banks[Math.floor(Math.random() * banks.length)]
}

function generateMockRawText(): string {
  return `
請求書

請求書番号: INV-2025-XXX
発行日: 2025-XX-XX
支払期日: 2025-XX-XX

株式会社サンプル 御中

下記の通りご請求申し上げます。

小計: ¥XXX,XXX
消費税(10%): ¥XX,XXX
合計: ¥XXX,XXX

適格請求書発行事業者登録番号: TXXXXXXXXXXXXX
  `.trim()
}

function getFieldLabel(field: string): string {
  const labels: Record<string, string> = {
    invoiceNumber: '請求書番号',
    issueDate: '発行日',
    dueDate: '支払期日',
    supplier: '取引先名',
    amount: '請求金額',
    taxExcludedAmount: '税抜金額',
    taxAmount: '消費税',
    supplierRegistrationNumber: '登録番号',
    bankName: '銀行名',
    bankAccountNumber: '口座番号',
  }
  return labels[field] || field
}