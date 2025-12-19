import 'dotenv/config'
import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
  console.log('シードデータを投入中...')

  // ユーザーの作成
  console.log('ユーザーを作成中...')
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: '山田 太郎',
        email: 'yamada@sample.co.jp',
        password: await bcrypt.hash('password123', 10),
        role: '管理者',
        status: 'active',
      },
    }),
    prisma.user.create({
      data: {
        name: '佐藤 花子',
        email: 'sato@sample.co.jp',
        password: await bcrypt.hash('password123', 10),
        role: '経理担当者',
        status: 'active',
      },
    }),
    prisma.user.create({
      data: {
        name: '鈴木 次郎',
        email: 'suzuki@sample.co.jp',
        password: await bcrypt.hash('password123', 10),
        role: '営業担当者',
        status: 'active',
      },
    }),
    prisma.user.create({
      data: {
        name: '田中 三郎',
        email: 'tanaka@sample.co.jp',
        password: await bcrypt.hash('password123', 10),
        role: '閲覧者',
        status: 'inactive',
      },
    }),
  ])
  console.log(`${users.length}件のユーザーを作成しました`)

  // 取引先の作成
  console.log('取引先を作成中...')
  const suppliers = await Promise.all([
    prisma.supplier.create({
      data: {
        name: '株式会社サンプル',
        code: 'SAMPLE001',
        registrationNumber: 'T1234567890123',
        address: '東京都千代田区丸の内1-1-1',
        phone: '03-1234-5678',
        email: 'info@sample.co.jp',
        contact: '営業部 田中',
        status: 'active',
      },
    }),
    prisma.supplier.create({
      data: {
        name: 'テストコーポレーション',
        code: 'TEST002',
        registrationNumber: 'T9876543210987',
        address: '大阪府大阪市北区梅田2-2-2',
        phone: '06-9876-5432',
        email: 'contact@test.co.jp',
        contact: '経理部 佐藤',
        status: 'active',
      },
    }),
    prisma.supplier.create({
      data: {
        name: 'デモ株式会社',
        code: 'DEMO003',
        registrationNumber: 'T5555666677778',
        address: '神奈川県横浜市西区みなとみらい3-3-3',
        phone: '045-123-4567',
        email: 'sales@demo.co.jp',
        contact: '営業課 鈴木',
        status: 'active',
      },
    }),
    prisma.supplier.create({
      data: {
        name: 'ABC商事',
        code: 'ABC004',
        registrationNumber: 'T1111222233334',
        address: '愛知県名古屋市中区栄4-4-4',
        phone: '052-987-6543',
        email: 'info@abc.co.jp',
        contact: '総務部 高橋',
        status: 'active',
      },
    }),
    prisma.supplier.create({
      data: {
        name: 'XYZ株式会社',
        code: 'XYZ005',
        registrationNumber: 'T9999888877776',
        address: '福岡県福岡市博多区博多駅前5-5-5',
        phone: '092-111-2222',
        email: 'info@xyz.co.jp',
        contact: 'マーケティング部 山本',
        status: 'active',
      },
    }),
  ])
  console.log(`${suppliers.length}件の取引先を作成しました`)

  // 案件の作成
  console.log('案件を作成中...')
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        code: 'PRJ-2024-001',
        name: 'Webサイトリニューアル',
        description: 'コーポレートサイトの全面リニューアルプロジェクト',
        clientId: suppliers[0].id,
        status: 'completed',
        startDate: new Date('2024-04-01'),
        endDate: new Date('2024-09-30'),
        budget: 5000000,
        actualAmount: 0,
        manager: '山田 太郎',
        members: ['山田 太郎', '佐藤 花子'],
        tags: ['Web開発', 'デザイン'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2024-002',
        name: 'システム開発',
        description: '基幹システムの新規開発プロジェクト',
        clientId: suppliers[1].id,
        status: 'active',
        startDate: new Date('2024-06-01'),
        endDate: null,
        budget: 15000000,
        actualAmount: 0,
        manager: '佐藤 花子',
        members: ['佐藤 花子', '鈴木 次郎', '田中 三郎'],
        tags: ['システム開発', 'データベース'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2024-003',
        name: 'コンサルティング',
        description: '業務改善コンサルティング',
        clientId: suppliers[2].id,
        status: 'active',
        startDate: new Date('2024-07-01'),
        endDate: new Date('2025-12-31'),
        budget: 8000000,
        actualAmount: 0,
        manager: '鈴木 次郎',
        members: ['鈴木 次郎'],
        tags: ['コンサルティング', '業務改善'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2025-001',
        name: 'マーケティング支援',
        description: 'デジタルマーケティング施策の企画・実行',
        clientId: suppliers[3].id,
        status: 'active',
        startDate: new Date('2025-01-01'),
        endDate: null,
        budget: 6000000,
        actualAmount: 0,
        manager: '山田 太郎',
        members: ['山田 太郎', '佐藤 花子'],
        tags: ['マーケティング', 'SNS'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2025-002',
        name: 'セキュリティ診断',
        description: '情報セキュリティ診断およびペネトレーションテスト',
        clientId: suppliers[4].id,
        status: 'active',
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-06-30'),
        budget: 3000000,
        actualAmount: 0,
        manager: '佐藤 花子',
        members: ['佐藤 花子'],
        tags: ['セキュリティ', '診断'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2025-003',
        name: 'インフラ構築',
        description: 'クラウドインフラの構築・移行プロジェクト',
        clientId: suppliers[0].id,
        status: 'active',
        startDate: new Date('2025-05-01'),
        endDate: new Date('2025-12-31'),
        budget: 10000000,
        actualAmount: 0,
        manager: '鈴木 次郎',
        members: ['鈴木 次郎', '田中 三郎'],
        tags: ['インフラ', 'クラウド', 'AWS'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2025-004',
        name: '保守運用',
        description: 'システム保守運用サービス(年間契約)',
        clientId: suppliers[1].id,
        status: 'active',
        startDate: new Date('2025-01-01'),
        endDate: new Date('2025-12-31'),
        budget: 12000000,
        actualAmount: 0,
        manager: '田中 三郎',
        members: ['田中 三郎'],
        tags: ['保守運用', 'サポート'],
      },
    }),
    prisma.project.create({
      data: {
        code: 'PRJ-2025-005',
        name: 'デザイン制作',
        description: 'ブランディングおよびデザイン制作',
        clientId: suppliers[2].id,
        status: 'suspended',
        startDate: new Date('2025-08-01'),
        endDate: null,
        budget: 2500000,
        actualAmount: 0,
        manager: '山田 太郎',
        members: ['山田 太郎'],
        tags: ['デザイン', 'ブランディング'],
      },
    }),
  ])
  console.log(`${projects.length}件の案件を作成しました`)

  // 設定の作成
  console.log('設定を作成中...')
  await prisma.settings.create({
    data: {
      companyName: '株式会社サンプル',
      companyRegistration: 'T1234567890123',
      companyAddress: '東京都千代田区丸の内1-1-1',
      companyPhone: '03-1234-5678',
      companyEmail: 'info@sample.co.jp',
      fiscalYearStart: 4,
      autoOcr: true,
      confidenceThreshold: 85,
      approvalRequired: true,
      approvalThreshold: 100000,
      invoicePrefix: 'INV-',
      invoiceFormat: '年-連番',
      invoiceDigits: 3,
      paymentDueNotification: true,
      paymentDueDays: 7,
      newInvoiceNotification: true,
      approvalNotification: true,
      ocrCompleteNotification: false,
      emailNotifications: true,
      notificationEmail: 'yamada@sample.co.jp',
      twoFactor: false,
      sessionTimeout: 30,
      ipRestriction: false,
      minPasswordLength: 8,
      requireUppercase: true,
      requireNumbers: true,
      requireSymbols: false,
      passwordExpiry: 90,
      auditLog: true,
      timestamp: true,
      immutable: true,
      searchRequirements: true,
      retentionPeriod: '7',
      autoArchive: false,
      autoBackup: true,
      backupFrequency: '毎日',
    },
  })
  console.log('設定を作成しました')

  console.log('シードデータの投入が完了しました！')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })