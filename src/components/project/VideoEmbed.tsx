'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { C, sans } from '@/lib/theme';

/**
 * Lazy YouTube facade: shows the video thumbnail with a play button and only
 * loads the (heavy) YouTube iframe once the user clicks — keeping the page
 * light. Uses the privacy-friendly youtube-nocookie domain.
 */
export default function VideoEmbed({
  id,
  title,
  playLabel,
}: {
  id: string;
  title: string;
  playLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9', background: C.card }}>
      {open ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button onClick={() => setOpen(true)} aria-label={playLabel} className="group absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(28,25,22,0.28)' }}>
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
