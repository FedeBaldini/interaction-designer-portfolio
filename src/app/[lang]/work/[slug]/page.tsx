import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjects, getProject, PROJECT_SLUGS } from '@/data/projects';
import ProjectDetail from '@/components/project/ProjectDetail';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import { alternates } from '@/lib/metadata';

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = getProject(slug, lang);
  if (!project) return { title: 'Project not found' };

  return {
    title: project.title,
    description: project.description,
    alternates: alternates(lang, `/work/${project.slug}`),
    openGraph: {
      title: `${project.title} — ${SITE.name}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const project = getProject(slug, locale);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const projects = getProjects(locale);
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          headline: project.title,
          description: project.description,
          url: `${SITE.url}/${locale}/work/${project.slug}`,
          image: project.image.startsWith('http') ? project.image : `${SITE.url}${project.image}`,
          dateCreated: project.year,
          genre: project.category,
          keywords: project.tags.join(', '),
          inLanguage: locale,
          creator: { '@id': `${SITE.url}/#person` },
          author: { '@id': `${SITE.url}/#person` },
        }}
      />
      <ProjectDetail
        lang={locale}
        dict={dict.project}
        project={project}
        next={{ num: next.num, title: next.title, category: next.category, slug: next.slug }}
      />
    </>
  );
}
