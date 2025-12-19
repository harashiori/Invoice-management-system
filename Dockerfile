# 1. Node.js 20 の軽量イメージ
FROM node:20 AS base

# Puppeteer / Chromium に必要なライブラリをインストール
RUN apt-get update && apt-get install -y \
    chromium \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libx11-6 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libgbm-dev \
    libpango-1.0-0 \
    libcairo2 \
    libasound2 \
    fonts-liberation \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 依存関係インストール（devDependencies 含む）
COPY package.json package-lock.json ./
RUN npm ci

# プロジェクト全体コピー
COPY . .

# 本番環境用の env を適用（上書き）
COPY .env.production .env

# Prisma Client 生成
RUN npx prisma generate

# Next.js ビルド
RUN npm run build

# Cloud Run のデフォルトポート設定
ENV PORT 8080
EXPOSE 8080

CMD ["npm", "start"]
