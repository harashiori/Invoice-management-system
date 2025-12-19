import { AppLayout } from "@/components/layout/app-layout"
import { ProjectEditView } from "@/components/projects/project-edit-view"

export default async function ProjectEditPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  
  return (
    <AppLayout>
      <ProjectEditView projectId={id} />
    </AppLayout>
  )
}