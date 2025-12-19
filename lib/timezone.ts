/**
 * タイムゾーン設定ユーティリティ
 * システム全体でAsia/Tokyoタイムゾーンを使用
 */

export const TIMEZONE = 'Asia/Tokyo';

/**
 * 日付をAsia/Tokyoタイムゾーンでフォーマット
 */
export function formatDateInJST(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('ja-JP', { timeZone: TIMEZONE });
}

/**
 * 日付のみを取得 (YYYY-MM-DD形式)
 */
export function formatDateOnlyInJST(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('ja-JP', { 
    timeZone: TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '-');
}

/**
 * 現在のJST時刻を取得
 */
export function getNowInJST(): Date {
  return new Date(new Date().toLocaleString('en-US', { timeZone: TIMEZONE }));
}

/**
 * ISO文字列を日本時間で解釈
 */
export function parseISOInJST(isoString: string): Date {
  return new Date(new Date(isoString).toLocaleString('en-US', { timeZone: TIMEZONE }));
}