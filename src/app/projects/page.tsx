import { projects } from '@/data/projects';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export default function ProjectsPage() {
  return <ProjectsGrid projects={projects} />;
}
