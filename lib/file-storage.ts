/**
 * ファイルストレージサービス
 *
 * ローカルファイルシステム(public/uploads/)に保存します。
 * 将来的にAWS S3やGoogle Cloud Storageと置き換え可能な設計になっています。
 */

import fs from 'fs/promises';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

/**
 * ファイルを保存
 * @param file - 保存するファイル
 * @param category - カテゴリ (例: 'invoices')
 * @returns 保存パス
 */
export async function saveFile(
  file: File,
  category: string = 'invoices'
): Promise<string> {
  try {
    // ディレクトリパスを生成
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const relativePath = `${category}/${year}/${month}`;
    const fileName = `${timestamp}_${sanitizedFileName}`;
    
    // ディレクトリを作成
    const fullDirPath = path.join(UPLOAD_DIR, relativePath);
    await fs.mkdir(fullDirPath, { recursive: true });
    
    // ファイルを保存
    const fullFilePath = path.join(fullDirPath, fileName);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(fullFilePath, buffer);
    
    const storagePath = `${relativePath}/${fileName}`;
    console.log(`[FileStorage] ファイル保存成功: ${storagePath} (${file.size} bytes)`);
    
    return storagePath;
  } catch (error) {
    console.error('[FileStorage] ファイル保存エラー:', error);
    throw new Error('ファイルの保存に失敗しました');
  }
}

/**
 * ファイルを取得
 * @param path - ファイルパス
 * @returns ファイルのBlob
 */
export async function getFile(filePath: string): Promise<Blob> {
  try {
    const fullPath = path.join(UPLOAD_DIR, filePath);
    const buffer = await fs.readFile(fullPath);
    
    // MIMEタイプを推測
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.pdf') contentType = 'application/pdf';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.png') contentType = 'image/png';
    
    const blob = new Blob([buffer], { type: contentType });
    
    console.log(`[FileStorage] ファイル取得成功: ${filePath}`);
    
    return blob;
  } catch (error) {
    console.error('[FileStorage] ファイル取得エラー:', error);
    throw new Error('ファイルが見つかりません');
  }
}

/**
 * ファイルのメタデータを取得
 * @param path - ファイルパス
 * @returns ファイルのメタデータ
 */
export async function getFileMetadata(filePath: string): Promise<{
  fileName: string;
  contentType: string;
  size: number;
  createdAt: Date;
} | null> {
  try {
    const fullPath = path.join(UPLOAD_DIR, filePath);
    const stats = await fs.stat(fullPath);
    
    // MIMEタイプを推測
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.pdf') contentType = 'application/pdf';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.png') contentType = 'image/png';
    
    return {
      fileName: path.basename(filePath),
      contentType,
      size: stats.size,
      createdAt: stats.birthtime,
    };
  } catch (error) {
    console.error('[FileStorage] メタデータ取得エラー:', error);
    return null;
  }
}

/**
 * ファイルを削除
 * @param path - ファイルパス
 * @returns 削除成功ならtrue
 */
export async function deleteFile(filePath: string): Promise<boolean> {
  try {
    const fullPath = path.join(UPLOAD_DIR, filePath);
    await fs.unlink(fullPath);
    console.log(`[FileStorage] ファイル削除成功: ${filePath}`);
    return true;
  } catch (error) {
    console.warn(`[FileStorage] ファイル削除失敗: ${filePath}`, error);
    return false;
  }
}

/**
 * ファイルが存在するかチェック
 * @param path - ファイルパス
 * @returns 存在すればtrue
 */
export async function fileExists(filePath: string): Promise<boolean> {
  try {
    const fullPath = path.join(UPLOAD_DIR, filePath);
    await fs.access(fullPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * ファイルのBase64データを取得(プレビュー用)
 * @param path - ファイルパス
 * @returns Base64エンコードされたデータとコンテンツタイプ
 */
export async function getFileBase64(filePath: string): Promise<{
  data: string;
  contentType: string;
} | null> {
  try {
    const fullPath = path.join(UPLOAD_DIR, filePath);
    const buffer = await fs.readFile(fullPath);
    const base64 = buffer.toString('base64');
    
    // MIMEタイプを推測
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.pdf') contentType = 'application/pdf';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.png') contentType = 'image/png';
    
    return {
      data: base64,
      contentType,
    };
  } catch (error) {
    console.error('[FileStorage] Base64取得エラー:', error);
    return null;
  }
}

// デバッグ用: 全ファイルリストを取得
export async function listAllFiles(): Promise<string[]> {
  try {
    const files: string[] = [];
    
    async function scanDir(dir: string, prefix: string = '') {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          await scanDir(path.join(dir, entry.name), `${prefix}${entry.name}/`);
        } else {
          files.push(`${prefix}${entry.name}`);
        }
      }
    }
    
    await scanDir(UPLOAD_DIR);
    return files;
  } catch (error) {
    console.error('[FileStorage] ファイルリスト取得エラー:', error);
    return [];
  }
}

// シングルトンオブジェクト
export const fileStorage = {
  saveFile,
  getFile,
  getFileMetadata,
  deleteFile,
  fileExists,
  getFileBase64,
  listAllFiles,
};

/**
 * 将来的にS3やGoogle Cloud Storageと置き換える際のインターフェース
 * 
 * interface FileStorageProvider {
 *   saveFile(file: File, path: string): Promise<string>;
 *   getFile(path: string): Promise<Blob>;
 *   deleteFile(path: string): Promise<boolean>;
 *   fileExists(path: string): Promise<boolean>;
 * }
 * 
 * 実装例:
 * - S3Provider implements FileStorageProvider
 * - GCSProvider implements FileStorageProvider
 * - LocalStorageProvider implements FileStorageProvider
 */