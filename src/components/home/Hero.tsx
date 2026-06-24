'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { C, serif, sans, fadeUp, easeOut } from '@/lib/theme';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20 md:pt-36 md:pb-28">
      <motion.p
        {...fadeUp(0)}
        style={{ ...sans, fontSize: '0.82rem', color: C.muted, letterSpacing: '0.04em', marginBottom: '1.5rem' }}
      >
        Graphic &amp; Interaction Designer
      </motion.p>

      <div className="overflow-hidden mb-8">
        <motion.h1
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          style={{
            ...serif,
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            color: C.fg,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
          }}
        >
          Chiara Baldini
        </motion.h1>
      </div>

      <motion.div {...fadeUp(0.25)} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.75, color: C.muted, maxWidth: '38ch' }}>
          Dynamic and energetic designer I thrive on connecting with new people and believe in active
          listening as a catalyst for continuous growth. Currently exploring prototyping and interaction
          design at SUPSI.
        </p>
        <div className="flex md:justify-end">
          <Link
            href="/work"
            className="group flex items-center gap-2"
            style={{ ...sans, fontSize: '0.85rem', color: C.fg, borderBottom: `1px solid ${C.fg}`, paddingBottom: '2px' }}
          >
            Selected Work
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
