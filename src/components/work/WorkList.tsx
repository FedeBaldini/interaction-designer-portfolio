'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import type { Locale } from '@/lib/i18n';
import { C, serif, sans, mono, fadeUp, easeOut } from '@/lib/theme';

interface WorkDict {
  eyebrow: string;
  title: string;
  filterAll: string;
}

export default function WorkList({
  lang,
  dict,
  projects,
}: {
  lang: Locale;
  dict: WorkDict;
  projects: Project[];
}) {
  const [filter, setFilter] = useState<string | null>(null);

  const cats = useMemo(() => [...new Set(projects.map((p) => p.category))], [projects]);
  const list = filter ? projects.filter((p) => p.category === filter) : projects;

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-16 pb-12 border-b" style={{ borderColor: C.border }}>
          <motion.p
            {...fadeUp(0)}
            style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            {dict.eyebrow}
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              style={{ ...serif, fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.fg }}
            >
              {dict.title}
            </motion.h1>
          </div>
        </div>

        {/* Filters */}
        <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-2 py-6 border-b" style={{ borderColor: C.border }}>
          <button
            onClick={() => setFilter(null)}
            style={{
              ...mono,
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              padding: '4px 12px',
              border: `1px solid ${filter === null ? C.fg : C.border}`,
              color: filter === null ? C.fg : C.muted,
              background: 'transparent',
              transition: 'all 0.2s',
            }}
          >
            {dict.filterAll}
          </button>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(filter === c ? null : c)}
              style={{
                ...mono,
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                padding: '4px 12px',
                border: `1px solid ${filter === c ? C.fg : C.border}`,
                color: filter === c ? C.fg : C.muted,
                background: 'transparent',
                transition: 'all 0.2s',
              }}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* List */}
        <ul>
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <Link href={`/${lang}/work/${p.slug}`} className="block w-full text-left group">
                  <div className="flex items-center gap-4 py-5 border-b" style={{ borderColor: C.border }}>
                    <span style={{ ...mono, fontSize: '0.65rem', color: C.muted, width: '2.2rem', flexShrink: 0 }}>
                      {p.num}
                    </span>

                    <span
                      className="group-hover:opacity-50"
                      style={{ ...serif, fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: C.fg, flexGrow: 1, lineHeight: 1.1, transition: 'opacity 0.2s' }}
                    >
                      {p.title}
                    </span>

                    {/* Thumbnail */}
                    <div className="hidden md:block shrink-0 overflow-hidden" style={{ width: 88, height: 60, background: C.card }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        width={88}
                        height={60}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="hidden lg:block shrink-0 text-right" style={{ ...sans, fontSize: '0.75rem', color: C.muted, width: '11rem' }}>
                      {p.category}
                    </span>
                    <span className="hidden sm:block shrink-0" style={{ ...sans, fontSize: '0.75rem', color: C.muted, width: '3rem', textAlign: 'right' }}>
                      {p.year}
                    </span>
                    <ArrowUpRight size={14} color={C.muted} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
