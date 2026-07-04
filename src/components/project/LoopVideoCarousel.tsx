'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LoopVideo from '@/components/project/LoopVideo';
import { C, mono, easeOut } from '@/lib/theme';

/**
 * Carousel of muted autoplay loops — one at a time, with prev/next arrows and
 * dot indicators. Only the current video is mounted, so it plays while the
 * others stay idle.
 */
export default function LoopVideoCarousel({ bases }: { bases: string[] }) {
  const [idx, setIdx] = useState(0);
  if (!bases.length) return null;

  const prev = () => setIdx((i) => (i - 1 + bases.length) % bases.length);
  const next = () => setIdx((i) => (i + 1) % bases.length);

  return (
    <div>
      <div className="flex items-center justify-end gap-4 mb-3">
        <span style={{ ...mono, fontSize: '0.62rem', color: C.muted }}>
          {idx + 1} / {bases.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous video"
            className="w-8 h-8 flex items-center justify-center border transition-colors"
            style={{ borderColor: C.border }}
          >
            <ArrowLeft size={13} color={C.muted} />
          </button>
          <button
            onClick={next}
            aria-label="Next video"
            className="w-8 h-8 flex items-center justify-center border transition-colors"
            style={{ borderColor: C.border }}
          >
            <ArrowRight size={13} color={C.muted} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ background: C.card, height: '70vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <LoopVideo base={bases[idx]} className="max-h-full max-w-full w-auto h-auto object-contain" />
          </motion.div>
        </AnimatePresence>
      </div>

      {bases.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {bases.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to video ${i + 1}`}
              aria-current={i === idx ? 'true' : undefined}
              style={{
                width: i === idx ? 20 : 6,
                height: 6,
                background: i === idx ? C.fg : C.border,
                border: 'none',
                transition: 'all 0.25s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
