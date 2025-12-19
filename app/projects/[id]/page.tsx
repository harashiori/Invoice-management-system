import { AppLayout } from "@/components/layout/app-layout"
import { ProjectDetailView } from "@/components/projects/project-detail-view"

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  
  return (
    <AppLayout>
      <ProjectDetailView projectId={id} />
    </AppLayout>
  )
}