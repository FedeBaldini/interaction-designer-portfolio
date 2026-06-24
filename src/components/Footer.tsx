import Link from 'next/link';
import { C, serif, sans, mono } from '@/lib/theme';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div style={{ height: '1px', background: C.border }} />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex items-center justify-between flex-wrap gap-4">
        <Link href="/" style={{ ...serif, fontSize: '0.9rem', color: C.fg }}>
          Chiara Baldini
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/contact" style={{ ...sans, fontSize: '0.78rem', color: C.muted }}>
            Contact
          </Link>
          <span style={{ ...mono, fontSize: '0.7rem', color: C.muted }}>© 2024</span>
        </div>
      </div>
    </footer>
  );
}
