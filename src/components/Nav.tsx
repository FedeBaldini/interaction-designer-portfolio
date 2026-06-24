'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { C, serif, sans } from '@/lib/theme';

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <Link
          href="/"
          style={{ ...serif, fontSize: '1rem', color: C.fg, letterSpacing: '0.01em' }}
        >
          Chiara Baldini
        </Link>
        <nav className="flex items-center gap-8">
          {LINKS.map((link) => {
            const active =
              link.href === '/work'
                ? pathname.startsWith('/work')
                : pathname === link.href;
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
        </nav>
      </div>
    </header>
  );
}
