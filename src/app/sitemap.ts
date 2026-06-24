import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { PROJECT_SLUGS } from '@/data/projects';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
    ...PROJECT_SLUGS.map((slug) => ({
      path: `/work/${slug}`,
      priority: 0.6,
      changeFrequency: 'yearly' as const,
    })),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const { path, priority, changeFrequency } of paths) {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[l] = `${SITE.url}/${l}${path}`;
    for (const locale of locales) {
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
