'use client';

import { useEffect, useRef } from 'react';

/**
 * Muted, looping video that behaves like an elegant GIF: it plays only while
 * on screen (saving bandwidth) and starts from a poster frame to avoid layout
 * shift. Serves AV1/WebM first (smallest) with an H.264/MP4 fallback. Users
 * who prefer reduced motion get a paused video with controls.
 *
 * `base` is the path without extension, e.g. "/videos/docare/film" →
 * <base>.webm, <base>.mp4 sources and <base>.jpg poster.
 */
export default function LoopVideo({ base, className }: { base: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      video.controls = true;
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video ref={ref} poster={`${base}.jpg`} muted loop playsInline preload="none" className={className}>
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}
