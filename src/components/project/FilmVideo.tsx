'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { C, sans } from '@/lib/theme';

/**
 * Self-hosted click-to-play video (with audio). Shows a poster + play button
 * and only loads/plays the video on click — keeping the page light. Serves
 * AV1/WebM first (smallest) with an H.264/MP4 fallback.
 *
 * `base` is the path without extension → <base>.webm, <base>.mp4, <base>.jpg.
 */
export default function FilmVideo({
  base,
  title,
  playLabel,
}: {
  base: string;
  title: string;
  playLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ background: C.card, maxHeight: '80vh' }}
    >
      {open ? (
        <video
          controls
          autoPlay
          playsInline
          title={title}
          className="max-h-[80vh] w-auto max-w-full"
          suppressHydrationWarning
        >
          <source src={`${base}.webm`} type="video/webm" />
          <source src={`${base}.mp4`} type="video/mp4" />
        </video>
      ) : (
        <button onClick={() => setOpen(true)} aria-label={playLabel} className="group relative block w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${base}.jpg`} alt="" className="max-h-[80vh] w-full object-contain" />
          <span className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(28,25,22,0.22)' }}>
            <span
              className="flex items-center gap-2 transition-transform group-hover:scale-105"
              style={{ ...sans, fontSize: '0.85rem', color: C.fg, background: C.bg, padding: '0.65rem 1.1rem', borderRadius: '999px' }}
            >
              <Play size={15} fill={C.fg} />
              {playLabel}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
