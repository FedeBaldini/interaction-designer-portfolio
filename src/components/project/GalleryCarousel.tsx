'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { C, sans, mono, easeOut } from '@/lib/theme';

export default function GalleryCarousel({
  images,
  onOpen,
  label,
}: {
  images: string[];
  onOpen: (src: string, alt: string) => void;
  /** Project title, used to build a contextual alt for each slide. */
  label: string;
}) {
  const [idx, setIdx] = useState(0);
  if (!images.length) return null;

  const altFor = (i: number) => `${label} — gallery image ${i + 1} of ${images.length}`;

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Gallery
        </h2>
        <div className="flex items-center gap-4">
          <span style={{ ...mono, fontSize: '0.62rem', color: C.muted }}>
            {idx + 1} / {images.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 flex items-center justify-center border transition-colors"
              style={{ borderColor: C.border }}
              aria-label="Previous image"
            >
              <ArrowLeft size={13} color={C.muted} />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 flex items-center justify-center border transition-colors"
              style={{ borderColor: C.border }}
              aria-label="Next image"
            >
              <ArrowUpRight size={13} color={C.muted} style={{ transform: 'rotate(45deg)' }} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ height: '65vh' }}>
        <AnimatePresence mode="wait">
          <motion.button
            key={idx}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            onClick={() => onOpen(images[idx], altFor(idx))}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: easeOut }}
            aria-label={`Open ${altFor(idx)} in full screen`}
          >
            <ImageWithFallback src={images[idx]} alt={altFor(idx)} className="w-full h-full object-contain" />
          </motion.button>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-current={i === idx ? 'true' : undefined}
              style={{
                width: i === idx ? 20 : 6,
                height: 6,
                background: i === idx ? C.fg : C.border,
                border: 'none',
                transition: 'all 0.25s',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
