import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const top = [
    { path: '', priority: 1 },
    { path: '/work', priority: 0.8 },
    { path: '/contact', priority: 0.5 },
  ].map((r) => ({
    url: `${SITE.url}${r.path}`,
    changeFrequency: 'monthly' as const,
    priority: r.priority,
  }));

  const projects = PROJECTS.map((p) => ({
    url: `${SITE.url}/work/${p.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...top, ...projects];
}
