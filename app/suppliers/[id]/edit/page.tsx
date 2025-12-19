import { SupplierEditView } from "@/components/suppliers/supplier-edit-view"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function SupplierEditPage({ params }: PageProps) {
  const { id } = await params
  
  return <SupplierEditView supplierId={id} />
}