import { AppLayout } from "@/components/layout/app-layout"
import { SupplierDetailView } from "@/components/suppliers/supplier-detail-view"

export default async function SupplierDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <AppLayout>
      <SupplierDetailView supplierId={id} />
    </AppLayout>
  )
}
