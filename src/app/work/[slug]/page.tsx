import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, getProject } from '@/data/projects';
import ProjectDetail from '@/components/project/ProjectDetail';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Chiara Baldini`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          headline: project.title,
          description: project.description,
          url: `${SITE.url}/work/${project.slug}`,
          image: project.image.startsWith('http')
            ? project.image
            : `${SITE.url}${project.image}`,
          dateCreated: project.year,
          genre: project.category,
          keywords: project.tags.join(', '),
          creator: { '@id': `${SITE.url}/#person` },
          author: { '@id': `${SITE.url}/#person` },
        }}
      />
      <ProjectDetail
        project={project}
        next={{ num: next.num, title: next.title, category: next.category, slug: next.slug }}
      />
    </>
  );
}
