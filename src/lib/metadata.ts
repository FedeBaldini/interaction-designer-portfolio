import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale } from '@/lib/i18n';

/**
 * Build canonical + hreflang alternates for a page at `path` (no locale prefix,
 * e.g. '' for home, '/work', `/work/${slug}`). Relative URLs resolve against
 * metadataBase.
 */
export function alternates(lang: Locale, path: string): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${path}`;
  languages['x-default'] = `/${defaultLocale}${path}`;
  return { canonical: `/${lang}${path}`, languages };
}
