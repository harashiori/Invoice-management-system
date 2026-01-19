# Invoice Management System

電帳法（電子帳簿保存法）対応の企業向け請求書管理システム

## 概要

請求書の受領・OCR処理による自動データ抽出・支払管理・レポート生成を統合したプラットフォームです。ロールベースのアクセス制御により、複数ユーザーでの安全な運用を実現します。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16.0.0 (App Router) |
| 言語 | TypeScript 5 |
| UI | Radix UI + shadcn/ui + Tailwind CSS 4 |
| ORM | Prisma 5.22.0 |
| データベース | PostgreSQL (Supabase) |
| デプロイ | Docker + Google Cloud Run |

## 主要機能

### 請求書管理
- PDF/画像ファイルのアップロード
- OCR技術による自動データ抽出（信頼度スコア付き）
- ステータス管理（未処理→照合済→差異あり→支払済→消込済）
- 重複チェック機能
- 電帳法対応メタデータ保存

### 支払管理
- 支払予定の登録・管理
- 支払方法選択（銀行振込、クレジットカード、現金、その他）
- 消込管理（支払と請求書の照合）
- 支払期限通知

### 案件管理
- 案件マスタ管理
- 予算管理・実績管理
- メンバー・タグ管理
- 請求書との紐付け

### 取引先マスタ
- 取引先情報管理
- インボイス登録番号（T+13桁）対応
- 連絡先・担当者管理

### レポート機能
- 月次レポート自動生成
- ステータス別・取引先別集計
- PDF出力
- スケジュール配信（日次/週次/月次）

### 通知システム
- リアルタイム通知
- 支払期限通知、承認要求、システムメッセージ等
- 優先度設定（low/medium/high）

## ディレクトリ構成

```
/
├── app/                    # Next.js App Router
│   ├── api/               # REST API エンドポイント
│   ├── invoices/          # 請求書ページ
│   ├── payments/          # 支払ページ
│   ├── projects/          # 案件ページ
│   ├── suppliers/         # 取引先ページ
│   ├── reports/           # レポートページ
│   └── settings/          # 設定ページ
├── components/            # React コンポーネント
│   ├── ui/               # 共通UIコンポーネント
│   └── [feature]/        # 機能別コンポーネント
├── lib/                   # ビジネスロジック
│   ├── auth-service.ts   # 認証・認可
│   ├── ocr-service.ts    # OCR処理
│   ├── file-storage.ts   # ファイル管理
│   └── prisma.ts         # DB接続
├── prisma/               # Prisma ORM
│   ├── schema.prisma     # DBスキーマ
│   └── migrations/       # マイグレーション
└── public/               # 静的ファイル
    └── uploads/          # アップロードファイル
```

## データベース構造

| モデル | 説明 |
|--------|------|
| User | ユーザー管理（4ロール対応） |
| Supplier | 取引先マスタ |
| Project | 案件マスタ |
| Invoice | 請求書（電帳法メタデータ含む） |
| InvoiceItem | 請求書明細 |
| TaxBreakdown | 税率別内訳 |
| Payment | 支払管理 |
| Notification | 通知 |
| MonthlyReport | 月次レポート |
| ReportSchedule | レポートスケジュール |
| Settings | システム設定 |

## ユーザーロール

| ロール | 権限 |
|--------|------|
| 管理者 | 全機能アクセス可、ユーザー管理、設定管理 |
| 経理担当者 | 請求書・支払・取引先の作成/編集、レポート閲覧 |
| 営業担当者 | 支払予定・案件の作成/編集 |
| 閲覧者 | 全データの閲覧のみ |

## セットアップ

### 必要条件
- Node.js 20以上
- PostgreSQL

### インストール

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env
# DATABASE_URL と DIRECT_URL を設定

# データベースのマイグレーション
npx prisma migrate dev

# シードデータの投入
npm run db:seed

# 開発サーバーの起動
npm run dev
```

### 環境変数

```
DATABASE_URL="postgresql://..."    # アプリケーション用接続（PgBouncer経由）
DIRECT_URL="postgresql://..."      # マイグレーション用直接接続
```

## 開発フロー（コードを変更したとき）

### 基本手順（毎回やること）

コードを修正したら、以下の手順で GitHub に反映します。

```bash
# 1. 変更内容を確認
git status

# 2. 変更をステージング
git add .

# 3. コミット
git commit -m "変更内容が分かるメッセージ"

# 4. GitHub に反映
git push
```

## API エンドポイント

### 認証
- `POST /api/auth/login` - ログイン
- `POST /api/auth/register` - ユーザー登録
- `POST /api/auth/logout` - ログアウト
- `GET /api/auth/me` - 現在のユーザー情報

### 請求書
- `GET /api/invoices` - 一覧取得
- `POST /api/invoices` - 新規作成
- `GET /api/invoices/[id]` - 詳細取得
- `PUT /api/invoices/[id]` - 更新
- `DELETE /api/invoices/[id]` - 削除

### 支払
- `GET /api/payments` - 一覧取得
- `POST /api/payments` - 新規作成
- `GET /api/payments/[id]` - 詳細取得
- `PUT /api/payments/[id]` - 更新
- `DELETE /api/payments/[id]` - 削除

### 案件
- `GET /api/projects` - 一覧取得
- `POST /api/projects` - 新規作成
- `GET /api/projects/[id]` - 詳細取得
- `PUT /api/projects/[id]` - 更新
- `DELETE /api/projects/[id]` - 削除

### 取引先
- `GET /api/suppliers` - 一覧取得
- `POST /api/suppliers` - 新規作成
- `GET /api/suppliers/[id]` - 詳細取得
- `PUT /api/suppliers/[id]` - 更新
- `DELETE /api/suppliers/[id]` - 削除

### レポート
- `GET /api/reports` - 一覧取得
- `POST /api/reports` - レポート生成
- `GET /api/reports/[id]` - 詳細取得
- `GET /api/reports/schedules` - スケジュール一覧
- `POST /api/reports/schedules` - スケジュール作成

### その他
- `POST /api/upload` - ファイルアップロード + OCR
- `POST /api/emails/import` - メールから請求書取込
- `GET /api/notifications` - 通知一覧
- `GET /api/settings` - 設定取得
- `PUT /api/settings` - 設定更新

## 電帳法対応

本システムは電子帳簿保存法の要件に対応しています。

- ファイルハッシュ保存（改ざん検知）
- 受領日時・登録者の記録
- OCR信頼度スコアの保存
- ドキュメントバージョン管理
- 保存期間設定（デフォルト7年）
- 自動バックアップ機能

## ライセンス

Private
