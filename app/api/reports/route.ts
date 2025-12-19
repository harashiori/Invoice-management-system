import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateMonthlyReport, generateReportPDF } from '@/lib/report-generator'
import { sendReportEmail } from '@/lib/email-service'

/**
 * GET /api/reports - レポート一覧取得
 */
export async function GET() {
  try {
    const reports = await prisma.monthlyReport.findMany({
      orderBy: { generatedAt: 'desc' }
    })
    
    return NextResponse.json({
      success: true,
      reports,
      count: reports.length
    })
  } catch (error) {
    console.error('[API] レポート一覧取得エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'レポート一覧の取得に失敗しました' 
      },
      { status: 500 }
    )
  }
}

/**
 * POST /api/reports - レポート生成
 * Body: { period: string, generatePdf?: boolean, sendEmail?: boolean, recipients?: string[] }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { period, generatePdf = true, sendEmail = false, recipients = [] } = body

    // バリデーション
    if (!period) {
      return NextResponse.json(
        { success: false, error: '期間を指定してください' },
        { status: 400 }
      )
    }

    const periodRegex = /^\d{4}-\d{2}$/
    if (!periodRegex.test(period)) {
      return NextResponse.json(
        { success: false, error: '期間は YYYY-MM 形式で指定してください' },
        { status: 400 }
      )
    }

    // レポートデータ生成
    console.log(`[API] レポート生成開始: ${period}`)
    const report = await generateMonthlyReport(period)

    // PDF生成
    let filePath: string | null = null
    if (generatePdf) {
      console.log(`[API] PDF生成開始: ${report.id}`)
      filePath = await generateReportPDF(report)
      report.filePath = filePath
    }

    // データベースに保存
    await prisma.monthlyReport.create({
      data: {
        period: report.period,
        totalInvoices: report.totalInvoices,
        totalAmount: report.totalAmount,
        statusBreakdown: report.statusBreakdown,
        supplierBreakdown: report.supplierBreakdown,
        filePath: report.filePath || null,
      }
    })

    // メール送信
    let emailSent = false
    if (sendEmail && recipients.length > 0 && filePath) {
      console.log(`[API] メール送信開始: ${recipients.join(', ')}`)
      emailSent = await sendReportEmail(recipients, filePath, period)
    }

    console.log(`[API] レポート生成完了: ${report.id}`)

    return NextResponse.json({
      success: true,
      report,
      emailSent,
      message: 'レポートを生成しました'
    })
  } catch (error) {
    console.error('[API] レポート生成エラー:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'レポートの生成に失敗しました' 
      },
      { status: 500 }
    )
  }
}