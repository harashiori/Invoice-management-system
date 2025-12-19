import { Metadata } from 'next'
import { AppLayout } from '@/components/layout/app-layout'
import { ReportListView } from '@/components/reports/report-list-view'

export const metadata: Metadata = {
  title: 'レポート管理',
  description: '月次レポートの生成・管理',
}

export default function ReportsPage() {
  return (
    <AppLayout>
      <ReportListView />
    </AppLayout>
  )
}