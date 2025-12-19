/**
 * 重複検知サービス - 既存請求書との重複をチェック
 * 請求書番号、取引先名、金額、日付などから重複を検知
 */

import type { Invoice } from './types'
import type { OCRResult } from './ocr-service'

export interface DuplicateCheckResult {
  isDuplicate: boolean
  duplicates: DuplicateMatch[]
  warnings: string[]
}

export interface DuplicateMatch {
  invoice: Invoice
  matchType: 'exact' | 'high' | 'medium' | 'low'
  matchScore: number
  matchReasons: string[]
  matchDetails: {
    invoiceNumber?: boolean
    supplier?: boolean
    amount?: boolean
    date?: boolean
  }
}

export interface DuplicateCheckOptions {
  strictMode?: boolean
  checkInvoiceNumber?: boolean
  checkSupplierAndAmount?: boolean
  checkSupplierAndDate?: boolean
  amountTolerance?: number // 金額の許容誤差（円）
  dateTolerance?: number // 日付の許容誤差（日）
}

/**
 * OCR結果と既存請求書の重複をチェック
 * @param ocrResult - OCR結果
 * @param existingInvoices - 既存請求書のリスト
 * @param options - チェックオプション
 * @returns 重複チェック結果
 */
export async function checkDuplicate(
  ocrResult: OCRResult,
  existingInvoices: any[],
  options: DuplicateCheckOptions = {}
): Promise<DuplicateCheckResult> {
  const {
    strictMode = false,
    checkInvoiceNumber = true,
    checkSupplierAndAmount = true,
    checkSupplierAndDate = true,
    amountTolerance = 100,
    dateTolerance = 3,
  } = options

  const duplicates: DuplicateMatch[] = []
  const warnings: string[] = []

  // 模擬的な処理遅延
  await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200))

  for (const invoice of existingInvoices) {
    const match = checkInvoiceMatch(
      ocrResult,
      invoice,
      {
        checkInvoiceNumber,
        checkSupplierAndAmount,
        checkSupplierAndDate,
        amountTolerance,
        dateTolerance,
      }
    )

    if (match.matchScore > 0) {
      duplicates.push(match)
    }
  }

  // スコアでソート（高い順）
  duplicates.sort((a, b) => b.matchScore - a.matchScore)

  // 厳格モードでは完全一致のみを重複とみなす
  const isDuplicate = strictMode
    ? duplicates.some(d => d.matchType === 'exact')
    : duplicates.some(d => d.matchType === 'exact' || d.matchType === 'high')

  // 警告の生成
  if (duplicates.length > 0 && !isDuplicate) {
    warnings.push('類似した請求書が見つかりました。確認してください。')
  }

  if (duplicates.filter(d => d.matchType === 'high').length > 1) {
    warnings.push('複数の類似請求書が見つかりました。')
  }

  return {
    isDuplicate,
    duplicates: duplicates.slice(0, 5), // 上位5件まで
    warnings,
  }
}

/**
 * 個別の請求書との一致をチェック
 */
function checkInvoiceMatch(
  ocrResult: OCRResult,
  invoice: any,
  options: {
    checkInvoiceNumber: boolean
    checkSupplierAndAmount: boolean
    checkSupplierAndDate: boolean
    amountTolerance: number
    dateTolerance: number
  }
): DuplicateMatch {
  const matchReasons: string[] = []
  const matchDetails = {
    invoiceNumber: false,
    supplier: false,
    amount: false,
    date: false,
  }
  let matchScore = 0

  // 請求書番号の完全一致チェック（最も重要）
  if (options.checkInvoiceNumber && ocrResult.invoiceNumber === invoice.id) {
    matchDetails.invoiceNumber = true
    matchReasons.push('請求書番号が一致')
    matchScore += 100
  }

  // 取引先名の一致チェック
  const supplierMatch = checkSupplierMatch(ocrResult.supplier, invoice.supplier)
  if (supplierMatch.isMatch) {
    matchDetails.supplier = true
    matchReasons.push(`取引先名が${supplierMatch.similarity}%一致`)
    matchScore += 30 * (supplierMatch.similarity / 100)
  }

  // 金額の一致チェック
  const amountDiff = Math.abs(ocrResult.amount - invoice.amount)
  if (amountDiff <= options.amountTolerance) {
    matchDetails.amount = true
    matchReasons.push(
      amountDiff === 0
        ? '金額が完全一致'
        : `金額が類似 (差額: ¥${amountDiff.toLocaleString()})`
    )
    matchScore += amountDiff === 0 ? 40 : 40 * (1 - amountDiff / options.amountTolerance)
  }

  // 発行日の一致チェック
  const dateDiff = Math.abs(
    new Date(ocrResult.issueDate).getTime() - new Date(invoice.issueDate).getTime()
  ) / (1000 * 60 * 60 * 24)
  
  if (dateDiff <= options.dateTolerance) {
    matchDetails.date = true
    matchReasons.push(
      dateDiff === 0
        ? '発行日が完全一致'
        : `発行日が類似 (差: ${Math.round(dateDiff)}日)`
    )
    matchScore += dateDiff === 0 ? 20 : 20 * (1 - dateDiff / options.dateTolerance)
  }

  // 組み合わせパターンのボーナススコア
  if (matchDetails.supplier && matchDetails.amount && matchDetails.date) {
    matchScore += 10
    matchReasons.push('取引先・金額・日付の組み合わせが一致')
  }

  // マッチタイプの判定
  let matchType: 'exact' | 'high' | 'medium' | 'low'
  if (matchScore >= 100) {
    matchType = 'exact'
  } else if (matchScore >= 70) {
    matchType = 'high'
  } else if (matchScore >= 40) {
    matchType = 'medium'
  } else {
    matchType = 'low'
  }

  // スコアが低すぎる場合は0にする
  if (matchScore < 30) {
    matchScore = 0
  }

  return {
    invoice,
    matchType,
    matchScore,
    matchReasons,
    matchDetails,
  }
}

/**
 * 取引先名の類似度チェック
 */
function checkSupplierMatch(
  supplier1: string,
  supplier2: string
): { isMatch: boolean; similarity: number } {
  // 正規化（空白除去、小文字化）
  const normalize = (str: string) =>
    str.replace(/\s+/g, '').toLowerCase()

  const s1 = normalize(supplier1)
  const s2 = normalize(supplier2)

  // 完全一致
  if (s1 === s2) {
    return { isMatch: true, similarity: 100 }
  }

  // 部分一致チェック
  if (s1.includes(s2) || s2.includes(s1)) {
    const longerLength = Math.max(s1.length, s2.length)
    const shorterLength = Math.min(s1.length, s2.length)
    const similarity = Math.round((shorterLength / longerLength) * 100)
    return { isMatch: similarity >= 70, similarity }
  }

  // レーベンシュタイン距離による類似度計算
  const distance = levenshteinDistance(s1, s2)
  const maxLength = Math.max(s1.length, s2.length)
  const similarity = Math.round(((maxLength - distance) / maxLength) * 100)

  return { isMatch: similarity >= 70, similarity }
}

/**
 * レーベンシュタイン距離の計算
 */
function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length
  const n = str2.length
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,     // 削除
          dp[i][j - 1] + 1,     // 挿入
          dp[i - 1][j - 1] + 1  // 置換
        )
      }
    }
  }

  return dp[m][n]
}

/**
 * 複数のOCR結果をバッチでチェック
 */
export async function batchCheckDuplicate(
  ocrResults: OCRResult[],
  existingInvoices: any[],
  options: DuplicateCheckOptions = {}
): Promise<DuplicateCheckResult[]> {
  const results: DuplicateCheckResult[] = []

  for (const ocrResult of ocrResults) {
    const result = await checkDuplicate(ocrResult, existingInvoices, options)
    results.push(result)
  }

  return results
}

/**
 * 重複チェック結果のサマリーを生成
 */
export function generateDuplicateSummary(
  results: DuplicateCheckResult[]
): {
  totalChecked: number
  duplicatesFound: number
  warningsCount: number
  byMatchType: Record<string, number>
} {
  const summary = {
    totalChecked: results.length,
    duplicatesFound: results.filter(r => r.isDuplicate).length,
    warningsCount: results.reduce((sum, r) => sum + r.warnings.length, 0),
    byMatchType: {
      exact: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
  }

  for (const result of results) {
    for (const duplicate of result.duplicates) {
      summary.byMatchType[duplicate.matchType]++
    }
  }

  return summary
}

/**
 * 重複検知のルールを検証
 */
export function validateDuplicateRules(
  options: DuplicateCheckOptions
): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (options.amountTolerance !== undefined && options.amountTolerance < 0) {
    errors.push('金額の許容誤差は0以上である必要があります')
  }

  if (options.dateTolerance !== undefined && options.dateTolerance < 0) {
    errors.push('日付の許容誤差は0以上である必要があります')
  }

  if (
    options.checkInvoiceNumber === false &&
    options.checkSupplierAndAmount === false &&
    options.checkSupplierAndDate === false
  ) {
    errors.push('少なくとも1つのチェック項目を有効にする必要があります')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}