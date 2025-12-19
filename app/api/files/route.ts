import { NextRequest, NextResponse } from 'next/server';
import { getFileBase64, getFileMetadata } from '@/lib/file-storage';

/**
 * ファイル取得API
 * GET /api/files?path=invoices/INV-2025-001/file.pdf
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get('path');

    if (!path) {
      return NextResponse.json(
        { error: 'ファイルパスが指定されていません' },
        { status: 400 }
      );
    }

    // パス検証(セキュリティ)
    if (path.includes('..') || path.startsWith('/')) {
      return NextResponse.json(
        { error: '不正なファイルパスです' },
        { status: 400 }
      );
    }

    // ファイルメタデータを取得
    const metadata = await getFileMetadata(path);
    if (!metadata) {
      return NextResponse.json(
        { error: 'ファイルが見つかりません' },
        { status: 404 }
      );
    }

    // ファイルデータを取得
    const fileData = await getFileBase64(path);
    if (!fileData) {
      return NextResponse.json(
        { error: 'ファイルデータの取得に失敗しました' },
        { status: 500 }
      );
    }

    // Base64データをバイナリに変換してブラウザで表示可能な形式で返す
    const buffer = Buffer.from(fileData.data, 'base64');
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': fileData.contentType,
        'Content-Disposition': `inline; filename="${encodeURIComponent(metadata.fileName)}"`,
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('[API] ファイル取得エラー:', error);
    return NextResponse.json(
      { error: 'ファイルの取得に失敗しました' },
      { status: 500 }
    );
  }
}