'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { C, serif, sans, mono, fadeUp, easeOut } from '@/lib/theme';

export default function WorkList() {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const cats = useMemo(() => [...new Set(PROJECTS.map((p) => p.category))], []);
  const list = filter ? PROJECTS.filter((p) => p.category === filter) : PROJECTS;
  const preview = PROJECTS.find((p) => p.id === hoveredId) ?? null;

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-16 pb-12 border-b" style={{ borderColor: C.border }}>
          <motion.p
            {...fadeUp(0)}
            style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Selected Work — 2021–2026
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              style={{ ...serif, fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.fg }}
            >
              Work
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
            All
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
        <div>
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link href={`/work/${p.slug}`} className="block w-full text-left group">
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
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ opacity: hoveredId === p.id ? 1 : 0.55, transition: 'opacity 0.4s, transform 0.5s' }}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Hover image panel */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 pointer-events-none hidden xl:flex flex-col"
            style={{ width: '36vw', zIndex: 40 }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '20%' }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <div className="flex-1 relative overflow-hidden">
              <motion.img
                key={preview.id}
                src={preview.image}
                alt={preview.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.55, ease: easeOut }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, #f4efe6 0%, rgba(244,239,230,0.3) 22%, transparent 50%)' }}
              />
            </div>
            <div className="shrink-0 px-7 py-5 border-l border-t" style={{ background: C.card, borderColor: C.border }}>
              <motion.div
                key={`i-${preview.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ ...mono, fontSize: '0.62rem', color: C.muted, letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
                  {preview.num} — {preview.category}
                </p>
                <p style={{ ...serif, fontSize: '1.4rem', color: C.fg, lineHeight: 1.1, marginBottom: '0.3rem' }}>
                  {preview.title}
                </p>
                <p style={{ ...sans, fontSize: '0.75rem', color: C.muted }}>
                  {preview.client} · {preview.year}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
