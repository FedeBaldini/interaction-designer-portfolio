'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import GalleryCarousel from '@/components/project/GalleryCarousel';
import { C, serif, sans, mono, fadeUp, easeOut } from '@/lib/theme';

export default function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Pick<Project, 'num' | 'title' | 'category' | 'slug'>;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const openLightbox = (src: string) => {
    lastFocusedRef.current = (document.activeElement as HTMLElement) ?? null;
    setLightbox(src);
  };
  const closeLightbox = () => {
    setLightbox(null);
    lastFocusedRef.current?.focus?.();
  };

  // Move focus into the dialog on open, close on Escape, restore focus on close.
  useEffect(() => {
    if (!lightbox) return;
    lightboxCloseRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
        lastFocusedRef.current?.focus?.();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const heroRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  const imgs = project.localImages?.length ? project.localImages : [project.image];
  const meta = [
    { l: 'Client', v: project.client },
    { l: 'Year', v: project.year },
    { l: 'Duration', v: project.duration },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Back */}
        <motion.div {...fadeUp(0)}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 mt-10 mb-10 group"
            style={{ ...sans, fontSize: '0.8rem', color: C.muted }}
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Work
          </Link>
        </motion.div>

        {/* Header */}
        <div className="border-b pb-10 mb-10" style={{ borderColor: C.border }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <motion.p
                {...fadeUp(0.05)}
                style={{ ...mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', marginBottom: '1rem' }}
              >
                {project.num} — {project.category}
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: easeOut }}
                  style={{ ...serif, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: C.fg, lineHeight: 1.05 }}
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>
            <motion.div {...fadeUp(0.2)} className="md:col-span-4 space-y-3">
              {meta.map((row) => (
                <div key={row.l} className="flex items-center justify-between border-b pb-3" style={{ borderColor: C.border }}>
                  <span style={{ ...sans, fontSize: '0.72rem', color: C.muted }}>{row.l}</span>
                  <span style={{ ...sans, fontSize: '0.8rem', color: C.fg }}>{row.v}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Content */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-8">
            {/* Hero image */}
            <button
              ref={heroRef}
              className="w-full overflow-hidden block group mb-10"
              style={{ background: C.card }}
              onClick={() => openLightbox(imgs[0])}
              aria-label="Open hero image in full screen"
            >
              <motion.div style={reduce ? undefined : { scale: heroScale }}>
                <ImageWithFallback
                  src={imgs[0]}
                  alt={project.title}
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </motion.div>
            </button>

            {/* Description */}
            <p style={{ ...sans, fontSize: '1.05rem', lineHeight: 1.8, color: C.muted, marginBottom: '2.5rem' }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((t) => (
                <span
                  key={t}
                  style={{ ...mono, fontSize: '0.62rem', letterSpacing: '0.08em', color: C.muted, border: `1px solid ${C.border}`, padding: '3px 10px' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Sections */}
            {project.sections.map((s, i) => (
              <div key={s.title}>
                <div className="border-t py-8" style={{ borderColor: C.border }}>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-4">
                      <h2 style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {s.title}
                      </h2>
                    </div>
                    <div className="col-span-12 sm:col-span-8">
                      <p style={{ ...sans, fontSize: '0.95rem', lineHeight: 1.8, color: C.muted }}>{s.body}</p>
                    </div>
                  </div>
                </div>

                {/* Paired feature after the second section */}
                {i === 1 && imgs[1] && imgs[2] && (
                  <div className="space-y-3 my-6">
                    {[imgs[1], imgs[2]].map((src, n) => (
                      <button
                        key={n}
                        onClick={() => openLightbox(src)}
                        className="w-full overflow-hidden block group"
                        style={{ background: C.card }}
                        aria-label={`Open ${project.title} detail ${n + 1} in full screen`}
                      >
                        <ImageWithFallback
                          src={src}
                          alt={`${project.title} detail ${n + 1}`}
                          className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ height: 1, background: C.border }} />

            {/* Bottom gallery */}
            {imgs.length > 3 && (
              <GalleryCarousel images={imgs.slice(3)} onOpen={openLightbox} />
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div {...fadeUp(0.2)} className="md:col-span-4">
            <div className="sticky top-24">
              <h2 style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Deliverables
              </h2>
              <div>
                {project.deliverables.map((d, i) => (
                  <div key={d} className="flex items-start gap-3 py-3 border-b" style={{ borderColor: C.border }}>
                    <span style={{ ...mono, fontSize: '0.6rem', color: C.muted, flexShrink: 0, marginTop: 2 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ ...sans, fontSize: '0.85rem', color: C.muted, lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>

              {project.tools.length > 0 && (
                <div className="mt-10 pt-8 border-t" style={{ borderColor: C.border }}>
                  <h2 style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Tools
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{ ...mono, fontSize: '0.62rem', letterSpacing: '0.06em', color: C.fg, border: `1px solid ${C.border}`, padding: '4px 10px' }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 pt-8 border-t" style={{ borderColor: C.border }}>
                <h2 style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Next
                </h2>
                <Link href={`/work/${next.slug}`} className="group flex flex-col gap-1 w-full text-left">
                  <span style={{ ...mono, fontSize: '0.62rem', color: C.muted }}>{next.num}</span>
                  <span
                    className="group-hover:border-current transition-colors"
                    style={{ ...serif, fontSize: '1.3rem', color: C.fg, lineHeight: 1.1, borderBottom: '1px solid transparent' }}
                  >
                    {next.title}
                  </span>
                  <span style={{ ...sans, fontSize: '0.75rem', color: C.muted }}>{next.category}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} — full screen image`}
            className="fixed inset-0 flex items-center justify-center z-[9990] px-6"
            style={{ background: 'rgba(28,25,22,0.92)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback src={lightbox} alt={project.title} className="w-full object-contain" style={{ maxHeight: '85vh' }} />
              <button
                ref={lightboxCloseRef}
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center"
                style={{ background: C.bg }}
                aria-label="Close full screen image"
              >
                <X size={14} color={C.fg} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
