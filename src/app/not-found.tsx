import Link from 'next/link';
import { C, serif, sans, mono } from '@/lib/theme';

export default function NotFound() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="min-h-[60vh] flex flex-col justify-center py-24">
          <p style={{ ...mono, fontSize: '0.7rem', color: C.muted, letterSpacing: '0.12em', marginBottom: '1.5rem' }}>
            404 — Page not found
          </p>
          <h1 style={{ ...serif, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: C.fg, lineHeight: 1.05, marginBottom: '1.5rem' }}>
            This page took a different wave.
          </h1>
          <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.75, color: C.muted, maxWidth: '42ch', marginBottom: '2.5rem' }}>
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/"
              style={{ ...sans, fontSize: '0.85rem', color: C.fg, borderBottom: `1px solid ${C.fg}`, paddingBottom: '2px' }}
            >
              Back to home
            </Link>
            <Link
              href="/work"
              style={{ ...sans, fontSize: '0.85rem', color: C.muted, borderBottom: `1px solid ${C.border}`, paddingBottom: '2px' }}
            >
              View work →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
