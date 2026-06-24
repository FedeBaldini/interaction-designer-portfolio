'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { C, serif, sans, mono, fadeUp } from '@/lib/theme';

export default function ProjectsPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <motion.p
        {...fadeUp(0)}
        style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2rem' }}
      >
        Selected Projects
      </motion.p>

      <div>
        {PROJECTS.slice(0, 5).map((p, i) => (
          <motion.div key={p.id} {...fadeUp(i * 0.06)}>
            <Link href={`/work/${p.slug}`} className="block w-full text-left group">
              <div
                className="flex items-baseline justify-between py-4 border-b transition-colors duration-200"
                style={{ borderColor: C.border }}
              >
                <div className="flex items-baseline gap-5">
                  <span style={{ ...mono, fontSize: '0.7rem', color: C.muted, width: '2rem', flexShrink: 0 }}>
                    {p.num}
                  </span>
                  <span
                    className="group-hover:opacity-60"
                    style={{ ...serif, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: C.fg, transition: 'opacity 0.2s' }}
                  >
                    {p.title}
                  </span>
                </div>
                <div className="flex items-center gap-6 shrink-0 ml-4">
                  <span className="hidden md:block" style={{ ...sans, fontSize: '0.72rem', color: C.muted }}>
                    {p.category}
                  </span>
                  <span style={{ ...sans, fontSize: '0.72rem', color: C.muted }}>{p.year}</span>
                  <ArrowUpRight
                    size={13}
                    color={C.muted}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/work"
          style={{ ...sans, fontSize: '0.82rem', color: C.muted, borderBottom: `1px solid ${C.border}`, paddingBottom: '2px' }}
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
