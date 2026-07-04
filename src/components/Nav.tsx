'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { C, serif, sans, mono } from '@/lib/theme';
import { locales, type Locale } from '@/lib/i18n';

interface NavDict {
  work: string;
  contact: string;
  switchLanguage: string;
}

export default function Nav({ lang, dict }: { lang: Locale; dict: NavDict }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: `/${lang}/work`, label: dict.work, match: `/${lang}/work` },
    { href: `/${lang}/contact`, label: dict.contact, match: `/${lang}/contact` },
  ];

  // Same page in the other locale: swap the leading /<lang> segment.
  const swapLocale = (target: Locale) => {
    const rest = pathname.replace(/^\/(en|it)(?=\/|$)/, '');
    return `/${target}${rest}` || `/${target}`;
  };

  const setLocaleCookie = (target: Locale) => {
    // eslint-disable-next-line react-hooks/immutability -- document.cookie write is the standard API
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(244,239,230,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} style={{ ...serif, fontSize: '1rem', color: C.fg, letterSpacing: '0.01em' }}>
          Chiara Baldini
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {links.map((link) => {
            const active = pathname.startsWith(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  ...sans,
                  fontSize: '0.82rem',
                  color: active ? C.fg : C.muted,
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Language switcher */}
          <div className="flex items-center gap-1.5" role="group" aria-label={dict.switchLanguage}>
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center gap-1.5">
                {i > 0 && <span style={{ ...mono, fontSize: '0.62rem', color: C.border }}>/</span>}
                <Link
                  href={swapLocale(loc)}
                  onClick={() => setLocaleCookie(loc)}
                  aria-current={loc === lang ? 'true' : undefined}
                  style={{
                    ...mono,
                    fontSize: '0.66rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: loc === lang ? C.fg : C.muted,
                  }}
                >
                  {loc}
                </Link>
              </span>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
