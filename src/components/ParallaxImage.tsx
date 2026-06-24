'use client';

import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Vertical drift (px) applied at each scroll extreme. Higher = stronger. */
  amount?: number;
  /** Classes for the clipping container. */
  className?: string;
  /** Inline styles for the container (e.g. aspect-ratio, background). */
  style?: CSSProperties;
  /** Extra classes for the image itself. */
  imgClassName?: string;
}

/**
 * Cover image that drifts vertically within its frame as the page scrolls.
 * The image is rendered taller than its container so the translation never
 * reveals an edge. Disabled when the user prefers reduced motion.
 */
export default function ParallaxImage({
  src,
  alt,
  amount = 50,
  className,
  style,
  imgClassName,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`} style={style}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute left-0 w-full object-cover ${imgClassName ?? ''}`}
        style={
          reduce
            ? { top: 0, height: '100%' }
            : { y, top: -amount, height: `calc(100% + ${amount * 2}px)` }
        }
      />
    </div>
  );
}
