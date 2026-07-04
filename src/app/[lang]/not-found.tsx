import type { Metadata } from 'next';
import Link from 'next/link';
import { C, serif, sans, mono } from '@/lib/theme';
import { SITE } from '@/lib/site';
import { defaultLocale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Page not found',
  robots: { index: false, follow: true },
};

// not-found has no route params; render in the default locale to stay static.
export default function NotFound() {
  const locale = defaultLocale;
  const dict = getDictionary(locale).notFound;

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="min-h-[60vh] flex flex-col justify-center py-24">
          <p style={{ ...mono, fontSize: '0.7rem', color: C.muted, letterSpacing: '0.12em', marginBottom: '1.5rem' }}>
            {dict.eyebrow}
          </p>
          <h1 style={{ ...serif, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: C.fg, lineHeight: 1.05, marginBottom: '1.5rem' }}>
            {dict.title}
          </h1>
          <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.75, color: C.muted, maxWidth: '42ch', marginBottom: '2.5rem' }}>
            {dict.body}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={`/${locale}`}
              style={{ ...sans, fontSize: '0.85rem', color: C.fg, borderBottom: `1px solid ${C.fg}`, paddingBottom: '2px' }}
            >
              {dict.home}
            </Link>
            <Link
              href={`/${locale}/work`}
              style={{ ...sans, fontSize: '0.85rem', color: C.muted, borderBottom: `1px solid ${C.border}`, paddingBottom: '2px' }}
            >
              {dict.work}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
