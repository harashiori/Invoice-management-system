import type { Invoice, MonthlyReport } from './types'
import { prisma } from './prisma'
import { fileStorage } from './file-storage'
import puppeteer from 'puppeteer'
import fs from 'fs/promises'
import path from 'path'

/**
 * 月次レポート生成サービス
 */

/**
 * 月次レポートのデータを生成
 * @param period - 期間 (YYYY-MM形式)
 * @returns 月次レポートデータ
 */
export async function generateMonthlyReport(period: string): Promise<MonthlyReport> {
  console.log(`[ReportGenerator] 月次レポート生成開始: ${period}`)
  
  // 期間のバリデーション
  const periodRegex = /^\d{4}-\d{2}$/
  if (!periodRegex.test(period)) {
    throw new Error('期間は YYYY-MM 形式で指定してください')
  }
  
  // 指定期間の請求書を取得
  const [year, month] = period.split('-').map(Number)
  const periodStart = new Date(year, month - 1, 1)
  const periodEnd = new Date(year, month, 0)
  
  const invoices = await prisma.invoice.findMany({
    where: {
      issueDate: {
        gte: periodStart,
        lte: periodEnd
      }
    },
    include: {
      supplierRef: true,
      items: true,
      taxBreakdowns: true
    }
  })
  
  // Invoiceの型に変換
  const periodInvoices: Invoice[] = invoices.map(inv => ({
    ...inv,
    issueDate: inv.issueDate.toISOString().split('T')[0],
    dueDate: inv.dueDate.toISOString().split('T')[0],
    transactionDate: inv.transactionDate ? inv.transactionDate.toISOString().split('T')[0] : null,
    transactionPeriodStart: inv.transactionPeriodStart ? inv.transactionPeriodStart.toISOString().split('T')[0] : null,
    transactionPeriodEnd: inv.transactionPeriodEnd ? inv.transactionPeriodEnd.toISOString().split('T')[0] : null,
    paymentDueDate: inv.paymentDueDate ? inv.paymentDueDate.toISOString().split('T')[0] : null,
    receiptDateTime: inv.receiptDateTime ? inv.receiptDateTime.toISOString() : null,
    createdAt: inv.createdAt.toISOString(),
    updatedAt: inv.updatedAt.toISOString(),
    status: inv.status as Invoice['status']
  }))
  
  console.log(`[ReportGenerator] 対象請求書数: ${periodInvoices.length}`)
  
  // 合計金額を計算
  const totalAmount = periodInvoices.reduce((sum, inv) => sum + inv.amount, 0)
  
  // ステータス別集計
  const statusMap = new Map<Invoice['status'], { count: number; amount: number }>()
  
  periodInvoices.forEach(invoice => {
    const existing = statusMap.get(invoice.status) || { count: 0, amount: 0 }
    statusMap.set(invoice.status, {
      count: existing.count + 1,
      amount: existing.amount + invoice.amount
    })
  })
  
  const statusBreakdown = Array.from(statusMap.entries()).map(([status, data]) => ({
    status,
    count: data.count,
    amount: data.amount
  }))
  
  // 取引先別集計
  const supplierMap = new Map<string, { name: string; count: number; amount: number }>()
  
  periodInvoices.forEach(invoice => {
    const existing = supplierMap.get(invoice.supplierId) || { 
      name: invoice.supplier, 
      count: 0, 
      amount: 0 
    }
    supplierMap.set(invoice.supplierId, {
      name: invoice.supplier,
      count: existing.count + 1,
      amount: existing.amount + invoice.amount
    })
  })
  
  const supplierBreakdown = Array.from(supplierMap.entries())
    .map(([supplierId, data]) => ({
      supplierId,
      supplierName: data.name,
      count: data.count,
      amount: data.amount
    }))
    .sort((a, b) => b.amount - a.amount) // 金額降順でソート
  
  // レポートID生成
  const reportId = `RPT-${period}-${Date.now()}`
  
  const report: MonthlyReport = {
    id: reportId,
    period,
    totalInvoices: periodInvoices.length,
    totalAmount,
    statusBreakdown,
    supplierBreakdown,
    generatedAt: new Date().toISOString(),
    filePath: null
  }
  
  console.log(`[ReportGenerator] 月次レポート生成完了: ${reportId}`)
  
  return report
}

/**
 * レポートHTMLを生成
 * @param report - 月次レポートデータ
 * @returns HTML文字列
 */
function generateReportHTML(report: MonthlyReport): string {
  const { period, totalInvoices, totalAmount, statusBreakdown, supplierBreakdown, generatedAt } = report
  
  // 日付フォーマット
  const periodDate = new Date(period + '-01')
  const periodLabel = `${periodDate.getFullYear()}年${periodDate.getMonth() + 1}月`
  const generatedDate = new Date(generatedAt).toLocaleDateString('ja-JP')
  
  // 金額フォーマット関数
  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString('ja-JP')}`
  }
  
  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>月次レポート</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Yu Gothic', 'Meiryo', sans-serif;
      font-size: 11pt;
      line-height: 1.4;
      color: #000;
      padding: 20mm;
      background: white;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 2px solid #000;
      padding-bottom: 15px;
    }
    .header h1 {
      font-size: 20pt;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .header .period {
      font-size: 14pt;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .header .date {
      font-size: 9pt;
      color: #666;
    }
    .summary-section {
      margin: 25px 0;
      page-break-inside: avoid;
    }
    .summary-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
    }
    .summary-table th {
      background: #f0f0f0;
      border: 1px solid #000;
      padding: 8px;
      text-align: center;
      font-weight: bold;
      font-size: 10pt;
    }
    .summary-table td {
      border: 1px solid #000;
      padding: 8px;
      text-align: right;
      font-size: 11pt;
    }
    .summary-table td.label {
      text-align: left;
      font-weight: bold;
      background: #fafafa;
    }
    .section-title {
      font-size: 12pt;
      font-weight: bold;
      margin: 20px 0 10px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #000;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      page-break-inside: avoid;
    }
    .data-table th {
      background: #e8e8e8;
      border: 1px solid #666;
      padding: 6px;
      text-align: center;
      font-weight: bold;
      font-size: 9pt;
    }
    .data-table td {
      border: 1px solid #999;
      padding: 6px;
      font-size: 10pt;
    }
    .data-table td.center {
      text-align: center;
    }
    .data-table td.right {
      text-align: right;
    }
    .data-table td.left {
      text-align: left;
    }
    .footer {
      margin-top: 30px;
      padding-top: 10px;
      border-top: 1px solid #ccc;
      text-align: center;
      font-size: 8pt;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>月次請求書レポート</h1>
    <div class="period">${periodLabel}</div>
    <div class="date">生成日: ${generatedDate}</div>
  </div>

  <div class="summary-section">
    <table class="summary-table">
      <tr>
        <th style="width: 40%;">項目</th>
        <th style="width: 60%;">値</th>
      </tr>
      <tr>
        <td class="label">請求書件数</td>
        <td>${totalInvoices.toLocaleString()} 件</td>
      </tr>
      <tr>
        <td class="label">合計金額</td>
        <td>${formatCurrency(totalAmount)}</td>
      </tr>
    </table>
  </div>

  <div class="section-title">1. ステータス別集計</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 40%;">ステータス</th>
        <th style="width: 20%;">件数</th>
        <th style="width: 40%;">金額</th>
      </tr>
    </thead>
    <tbody>
      ${statusBreakdown.map(item => `
        <tr>
          <td class="left">${item.status}</td>
          <td class="center">${item.count.toLocaleString()}</td>
          <td class="right">${formatCurrency(item.amount)}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="section-title">2. 取引先別集計 (上位10件)</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 50%;">取引先名</th>
        <th style="width: 15%;">件数</th>
        <th style="width: 35%;">金額</th>
      </tr>
    </thead>
    <tbody>
      ${supplierBreakdown.slice(0, 10).map((item, index) => `
        <tr>
          <td class="left">${item.supplierName}</td>
          <td class="center">${item.count.toLocaleString()}</td>
          <td class="right">${formatCurrency(item.amount)}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="footer">
    本レポートは自動生成されました
  </div>
</body>
</html>
  `.trim()
}

/**
 * レポートPDFを生成(模擬実装)
 * @param report - 月次レポートデータ
 * @returns ファイルパス
 */
export async function generateReportPDF(report: MonthlyReport): Promise<string> {
  console.log(`[ReportGenerator] PDF生成開始: ${report.id}`)
  
  // HTMLを生成
  const html = generateReportHTML(report)
  
  // 一時ファイルパスを生成
  const tmpDir = path.join(process.cwd(), 'tmp')
  await fs.mkdir(tmpDir, { recursive: true })
  const tmpPdfPath = path.join(tmpDir, `${Date.now()}_report_${report.period}.pdf`)
  
  let browser
  try {
    // Puppeteerでブラウザを起動
    browser = await puppeteer.launch({
      headless: true,
      // args: ['--no-sandbox', '--disable-setuid-sandbox'],

      executablePath: '/usr/bin/chromium', // ← 追加！
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--single-process'
      ]
    })
    
    const page = await browser.newPage()
    
    // HTMLをページに設定
    await page.setContent(html, { waitUntil: 'networkidle0' })
    
    // PDFを生成
    await page.pdf({
      path: tmpPdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      }
    })
    
    console.log(`[ReportGenerator] PDF一時ファイル生成完了: ${tmpPdfPath}`)
    
    // 一時ファイルを読み込んでFileオブジェクトに変換
    const pdfBuffer = await fs.readFile(tmpPdfPath)
    const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' })
    const fileName = `report_${report.period}.pdf`
    const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' })
    
    // ファイルストレージに保存
    //const filePath = await fileStorage.saveFile(pdfFile, 'reports')
    const filePath = await fileStorage.saveFile(
      pdfBuffer, // ← Buffer を直接渡す
      `reports/${fileName}`
)
    
    // 一時ファイルを削除
    await fs.unlink(tmpPdfPath)
    
    console.log(`[ReportGenerator] PDF生成完了: ${filePath}`)
    
    return filePath
  } catch (error) {
    console.error('[ReportGenerator] PDF生成エラー:', error)
    throw new Error('PDFの生成に失敗しました')
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

/**
 * レポートHTMLを取得(プレビュー用)
 * @param report - 月次レポートデータ
 * @returns HTML文字列
 */
export function getReportHTML(report: MonthlyReport): string {
  return generateReportHTML(report)
}