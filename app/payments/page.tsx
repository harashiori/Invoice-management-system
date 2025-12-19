import { AppLayout } from "@/components/layout/app-layout"
import { PaymentManagementView } from "@/components/payments/payment-management-view"

export default function PaymentsPage() {
  return (
    <AppLayout>
      <PaymentManagementView />
    </AppLayout>
  )
}
