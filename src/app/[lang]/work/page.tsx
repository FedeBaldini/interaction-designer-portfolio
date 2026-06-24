import type { Metadata } from 'next';
import WorkList from '@/components/work/WorkList';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import { getProjects } from '@/data/projects';
import { alternates } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.work.title,
    description: dict.meta.work.description,
    alternates: alternates(lang, '/work'),
  };
}

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  const projects = getProjects(locale);

  return <WorkList lang={locale} dict={dict.work} projects={projects} />;
}
