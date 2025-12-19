import { AppLayout } from "@/components/layout/app-layout"
import { ProjectListView } from "@/components/projects/project-list-view"

export default function ProjectsPage() {
  return (
    <AppLayout>
      <ProjectListView />
    </AppLayout>
  )
}