/**
 * メール取込サービス - メールから請求書PDFを自動取得
 * 現在は模擬実装。将来的にIMAPやGmail API等と連携可能な設計
 */

export interface EmailAttachment {
  filename: string
  contentType: string
  size: number
  data: Blob
}

export interface EmailMessage {
  id: string
  from: string
  subject: string
  receivedDate: string
  attachments: EmailAttachment[]
  bodyText: string
  bodyHtml?: string
  downloadUrls: string[]
}

export interface EmailImportConfig {
  emailAddress: string
  folder?: string
  autoImport?: boolean
  filterSender?: string[]
  filterSubject?: string[]
}

export interface EmailImportResult {
  success: boolean
  messagesProcessed: number
  filesExtracted: number
  files: File[]
  errors: string[]
}

/**
 * メールサーバーから新着メールを取得
 * @param config - メール取込設定
 * @returns 取得したメッセージのリスト
 */
export async function fetchEmails(
  config: EmailImportConfig
): Promise<EmailMessage[]> {
  // TODO: 実際のメールサーバー (IMAP/Gmail API等) と連携
  // 現在は模擬実装
  
  // バリデーション
  if (!config.emailAddress) {
    throw new Error('メールアドレスが指定されていません')
  }

  // 模擬的な処理遅延
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000))

  // 模擬メールデータ生成
  const mockMessages: EmailMessage[] = []
  const messageCount = Math.floor(Math.random() * 3) + 1 // 1-3件

  for (let i = 0; i < messageCount; i++) {
    const message = generateMockEmail(i)
    mockMessages.push(message)
  }

  // フィルタリング
  let filteredMessages = mockMessages

  if (config.filterSender && config.filterSender.length > 0) {
    filteredMessages = filteredMessages.filter(msg =>
      config.filterSender!.some(sender => msg.from.includes(sender))
    )
  }

  if (config.filterSubject && config.filterSubject.length > 0) {
    filteredMessages = filteredMessages.filter(msg =>
      config.filterSubject!.some(subject => msg.subject.includes(subject))
    )
  }

  return filteredMessages
}

/**
 * メールから請求書PDFを抽出
 * @param messages - メールメッセージのリスト
 * @returns 抽出されたファイルのリスト
 */
export async function extractInvoicesFromEmails(
  messages: EmailMessage[]
): Promise<EmailImportResult> {
  const files: File[] = []
  const errors: string[] = []
  let filesExtracted = 0

  for (const message of messages) {
    try {
      // 添付ファイルから抽出
      for (const attachment of message.attachments) {
        if (isInvoiceFile(attachment)) {
          const file = new File(
            [attachment.data],
            attachment.filename,
            { type: attachment.contentType }
          )
          files.push(file)
          filesExtracted++
        }
      }

      // メール本文内のURLから抽出
      for (const url of message.downloadUrls) {
        try {
          const file = await downloadFromUrl(url)
          if (file) {
            files.push(file)
            filesExtracted++
          }
        } catch (error) {
          errors.push(`URL ${url} からのダウンロードに失敗しました`)
        }
      }
    } catch (error) {
      errors.push(`メッセージ ${message.id} の処理に失敗しました`)
    }
  }

  return {
    success: errors.length === 0,
    messagesProcessed: messages.length,
    filesExtracted,
    files,
    errors,
  }
}

/**
 * メール自動取込を実行
 * @param config - メール取込設定
 * @returns 取込結果
 */
export async function importInvoicesFromEmail(
  config: EmailImportConfig
): Promise<EmailImportResult> {
  try {
    // メールを取得
    const messages = await fetchEmails(config)

    // 請求書を抽出
    const result = await extractInvoicesFromEmails(messages)

    return result
  } catch (error) {
    return {
      success: false,
      messagesProcessed: 0,
      filesExtracted: 0,
      files: [],
      errors: [error instanceof Error ? error.message : '不明なエラー'],
    }
  }
}

/**
 * URLから請求書PDFをダウンロード
 * @param url - ダウンロードURL
 * @returns ダウンロードされたファイル
 */
export async function downloadFromUrl(url: string): Promise<File | null> {
  // TODO: 実際のHTTPダウンロード実装
  // 現在は模擬実装
  
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 模擬PDFデータ
  const mockPdfData = new Blob(['Mock PDF content'], { type: 'application/pdf' })
  const filename = `invoice_${Date.now()}.pdf`
  
  return new File([mockPdfData], filename, { type: 'application/pdf' })
}

/**
 * メール本文からダウンロードURLを抽出
 * @param bodyText - メール本文
 * @returns URLのリスト
 */
export function extractDownloadUrls(bodyText: string): string[] {
  const urlRegex = /(https?:\/\/[^\s<>"]+\.pdf)/gi
  const matches = bodyText.match(urlRegex)
  return matches || []
}

/**
 * ファイルが請求書として有効かチェック
 * @param attachment - メール添付ファイル
 * @returns 有効な場合true
 */
function isInvoiceFile(attachment: EmailAttachment): boolean {
  const validExtensions = ['.pdf', '.jpg', '.jpeg', '.png']
  const extension = attachment.filename.toLowerCase().slice(attachment.filename.lastIndexOf('.'))
  
  // ファイル拡張子チェック
  if (!validExtensions.includes(extension)) {
    return false
  }

  // ファイルサイズチェック (10MB以下)
  if (attachment.size > 10 * 1024 * 1024) {
    return false
  }

  // ファイル名に「請求書」「invoice」などのキーワードが含まれているか
  const invoiceKeywords = ['請求書', 'invoice', '請求', 'bill', '見積', 'quote']
  const filenameCheck = invoiceKeywords.some(keyword =>
    attachment.filename.toLowerCase().includes(keyword)
  )

  return filenameCheck || extension === '.pdf' // PDFは基本的に許可
}

/**
 * 模擬メールデータを生成
 */
function generateMockEmail(index: number): EmailMessage {
  const senders = [
    'accounts@sample.co.jp',
    'billing@test-corp.com',
    'invoice@demo.co.jp',
    'sales@abc-trading.jp',
  ]

  const subjects = [
    '【請求書】2025年11月分のご請求',
    'Invoice for November 2025',
    '御請求書送付の件',
    '【重要】お支払いのお願い',
  ]

  const date = new Date()
  date.setDate(date.getDate() - index)

  // 模擬添付ファイル生成
  const hasAttachment = Math.random() > 0.3
  const attachments: EmailAttachment[] = hasAttachment
    ? [
        {
          filename: `請求書_2025-11-${String(date.getDate()).padStart(2, '0')}.pdf`,
          contentType: 'application/pdf',
          size: Math.floor(Math.random() * 500000) + 100000,
          data: new Blob(['Mock PDF content'], { type: 'application/pdf' }),
        },
      ]
    : []

  // 模擬本文
  const bodyText = `
平素より格別のご高配を賜り、誠にありがとうございます。

下記の通り、2025年11月分のご請求をお送りいたします。
添付ファイルをご確認の上、お支払いくださいますようお願い申し上げます。

【お支払い期日】2025年12月31日

何かご不明な点がございましたら、お気軽にお問い合わせください。

今後とも何卒よろしくお願い申し上げます。
  `.trim()

  // 模擬ダウンロードURL
  const hasUrl = Math.random() > 0.7
  const downloadUrls = hasUrl
    ? [`https://example.com/invoices/download/${Math.random().toString(36).substring(7)}.pdf`]
    : []

  return {
    id: `MSG-${Date.now()}-${index}`,
    from: senders[index % senders.length],
    subject: subjects[index % subjects.length],
    receivedDate: date.toISOString(),
    attachments,
    bodyText,
    downloadUrls,
  }
}

/**
 * メール取込の自動実行をスケジュール
 * @param config - メール取込設定
 * @param intervalMinutes - 実行間隔（分）
 * @param callback - 取込完了時のコールバック
 */
export function scheduleAutoImport(
  config: EmailImportConfig,
  intervalMinutes: number,
  callback: (result: EmailImportResult) => void
): NodeJS.Timeout {
  const intervalMs = intervalMinutes * 60 * 1000

  return setInterval(async () => {
    if (config.autoImport) {
      const result = await importInvoicesFromEmail(config)
      callback(result)
    }
  }, intervalMs)
}

/**
 * メールサーバー接続テスト
 * @param config - メール取込設定
 * @returns 接続成功の場合true
 */
export async function testEmailConnection(
  config: EmailImportConfig
): Promise<{ success: boolean; message: string }> {
  try {
    // TODO: 実際のメールサーバー接続テスト
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (!config.emailAddress) {
      return {
        success: false,
        message: 'メールアドレスが指定されていません',
      }
    }

    return {
      success: true,
      message: 'メールサーバーへの接続に成功しました',
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : '接続に失敗しました',
    }
  }
}

/**
 * レポートをメール送信(模擬実装)
 * @param recipients - 送信先メールアドレスのリスト
 * @param reportPath - レポートファイルパス
 * @param period - レポート期間(YYYY-MM形式)
 * @returns 送信成功の場合true
 */
export async function sendReportEmail(
  recipients: string[],
  reportPath: string,
  period: string
): Promise<boolean> {
  try {
    // バリデーション
    if (!recipients || recipients.length === 0) {
      throw new Error('送信先メールアドレスが指定されていません')
    }

    if (!reportPath) {
      throw new Error('レポートファイルパスが指定されていません')
    }

    // 模擬的な処理遅延
    await new Promise(resolve => setTimeout(resolve, 1500))

    // 模擬実装: 実際にはSMTP/SES等を使用してメール送信
    console.log('📧 ═══════════════════════════════════════')
    console.log('📧 月次レポート送信')
    console.log('📧 ═══════════════════════════════════════')
    console.log(`📧 送信先: ${recipients.join(', ')}`)
    console.log(`📄 レポート: ${reportPath}`)
    console.log(`📅 期間: ${period}`)
    console.log('📧 ═══════════════════════════════════════')
    console.log('✅ メール送信成功 (模擬実装)')

    // 実際の実装例:
    // const transporter = nodemailer.createTransport({ ... })
    // await transporter.sendMail({
    //   from: 'noreply@yourcompany.com',
    //   to: recipients.join(','),
    //   subject: `月次レポート - ${period}`,
    //   text: `${period}の月次レポートを送付いたします。`,
    //   attachments: [{ filename: `report_${period}.pdf`, path: reportPath }]
    // })

    return true
  } catch (error) {
    console.error('❌ メール送信エラー:', error)
    return false
  }
}

/**
 * 複数のレポートを一括送信
 * @param recipients - 送信先メールアドレスのリスト
 * @param reports - レポート情報のリスト
 * @returns 送信結果
 */
export async function sendMultipleReports(
  recipients: string[],
  reports: Array<{ path: string; period: string }>
): Promise<{ success: number; failed: number; total: number }> {
  let success = 0
  let failed = 0

  for (const report of reports) {
    try {
      const result = await sendReportEmail(recipients, report.path, report.period)
      if (result) {
        success++
      } else {
        failed++
      }
    } catch (error) {
      failed++
    }
  }

  return {
    success,
    failed,
    total: reports.length
  }
}