import { AppLayout } from "@/components/layout/app-layout"
import { InvoiceDetailView } from "@/components/invoices/invoice-detail-view"

export default async function InvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <AppLayout>
      <InvoiceDetailView invoiceId={id} />
    </AppLayout>
  )
}
