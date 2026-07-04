import type { CSSProperties } from 'react';

/**
 * Editorial cream palette shared across the whole site.
 * Kept as plain values so it can be used in inline styles, CSS, and JS alike.
 */
export const C = {
  bg: '#f4efe6',
  fg: '#1c1916',
  accent: '#7a5a35',
  muted: '#6b6258',
  border: 'rgba(28,25,22,0.1)',
  card: '#ece7dc',
} as const;

/** Font-family helpers wired to the next/font CSS variables set in layout.tsx. */
export const serif: CSSProperties = { fontFamily: 'var(--font-serif)', fontWeight: 400 };
export const sans: CSSProperties = { fontFamily: 'var(--font-sans)' };
export const mono: CSSProperties = { fontFamily: 'var(--font-mono)' };

/** Shared "fade up on mount" motion preset. */
export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  };
}

/** Easing used by the larger heading reveals. */
export const easeOut = [0.22, 1, 0.36, 1] as const;
