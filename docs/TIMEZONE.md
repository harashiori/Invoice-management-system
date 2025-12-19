# タイムゾーン設定

このシステムは **Asia/Tokyo (JST/UTC+9)** タイムゾーンで動作します。

## 設定内容

### 1. 環境変数 (`.env.local`)

```env
DATABASE_URL="postgresql://harashiori@localhost:5432/invoice_management?timezone=Asia/Tokyo"
TZ=Asia/Tokyo
```

- `DATABASE_URL`: PostgreSQL接続URLにタイムゾーンパラメータを追加
- `TZ`: Node.jsプロセスのタイムゾーンを設定

### 2. Next.js設定 (`next.config.mjs`)

```javascript
const nextConfig = {
  env: {
    TZ: 'Asia/Tokyo',
  },
}
```

### 3. PostgreSQLデータベース

```sql
ALTER DATABASE invoice_management SET timezone TO 'Asia/Tokyo';
```

データベース全体でAsia/Tokyoタイムゾーンを使用するように設定されています。

### 4. タイムゾーンユーティリティ (`lib/timezone.ts`)

日付のフォーマットやタイムゾーン変換を行うユーティリティ関数を提供:

```typescript
import { formatDateInJST, formatDateOnlyInJST, getNowInJST } from '@/lib/timezone'

// 日時をJSTでフォーマット
const formattedDateTime = formatDateInJST(new Date())

// 日付のみをフォーマット (YYYY-MM-DD)
const formattedDate = formatDateOnlyInJST(new Date())

// 現在のJST時刻を取得
const now = getNowInJST()
```

## 使用方法

### サーバー起動

```bash
# タイムゾーンを指定して起動
TZ=Asia/Tokyo npm run dev
```

または、`.env.local`にTZ環境変数が設定されているため、通常通り起動できます:

```bash
npm run dev
```

### データベース接続

Prismaは自動的に`DATABASE_URL`のタイムゾーンパラメータを使用します。
新しい接続では常にAsia/Tokyoタイムゾーンが適用されます。

## 注意事項

### 日付の保存

- データベースには**UTCタイムスタンプ**として保存されます
- アプリケーション層で**Asia/Tokyo**として解釈・表示されます
- この方式により、異なるタイムゾーンのユーザーにも対応可能です

### 既存データ

既存のデータベースレコードはUTCで保存されているため、タイムゾーン設定後も正しく表示されます。

### APIレスポンス

APIは日付をISO 8601形式の文字列として返します:
- `createdAt`: ISO文字列 (例: "2025-11-21T11:07:42.424Z")
- `updatedAt`: ISO文字列 (例: "2025-11-21T11:07:42.424Z")

フロントエンドで表示する際は、`lib/timezone.ts`のユーティリティ関数を使用してJST形式にフォーマットしてください。

## トラブルシューティング

### タイムゾーンが反映されない場合

1. サーバーを再起動
2. データベース接続をリセット
3. 環境変数が正しく設定されているか確認

```bash
# 環境変数の確認
echo $TZ

# PostgreSQLのタイムゾーン確認
psql -U harashiori -d invoice_management -c "SHOW timezone;"
```

### 期待される出力

```
     timezone     
------------------
 Asia/Tokyo