import Link from 'next/link';
import { C, serif, sans, mono } from '@/lib/theme';
import type { Locale } from '@/lib/i18n';

export default function Footer({ lang, dict }: { lang: Locale; dict: { contact: string } }) {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div style={{ height: '1px', background: C.border }} />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex items-center justify-between flex-wrap gap-4">
        <Link href={`/${lang}`} style={{ ...serif, fontSize: '0.9rem', color: C.fg }}>
          Chiara Baldini
        </Link>
        <div className="flex items-center gap-6">
          <Link href={`/${lang}/contact`} style={{ ...sans, fontSize: '0.78rem', color: C.muted }}>
            {dict.contact}
          </Link>
          <span style={{ ...mono, fontSize: '0.7rem', color: C.muted }}>© 2024</span>
        </div>
      </div>
    </footer>
  );
}
