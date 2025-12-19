import { AppLayout } from "@/components/layout/app-layout"
import { InvoiceListView } from "@/components/invoices/invoice-list-view"

export default function InvoicesPage() {
  return (
    <AppLayout>
      <InvoiceListView />
    </AppLayout>
  )
}
