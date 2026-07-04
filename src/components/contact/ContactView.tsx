'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { C, serif, sans, fadeUp, easeOut } from '@/lib/theme';

interface InfoRow {
  l: string;
  v: string;
  href?: string;
  external?: boolean;
}

interface ContactDict {
  eyebrow: string;
  title: string;
  intro: string;
  labels: { email: string; linkedin: string; location: string; availability: string };
  location: string;
  availability: string;
  newTab: string;
}

export default function ContactView({
  dict,
  email,
  linkedin,
}: {
  dict: ContactDict;
  email: string;
  linkedin: string;
}) {
  const INFO: InfoRow[] = [
    { l: dict.labels.email, v: email, href: `mailto:${email}` },
    { l: dict.labels.linkedin, v: 'Chiara Baldini', href: linkedin, external: true },
    { l: dict.labels.location, v: dict.location },
    { l: dict.labels.availability, v: dict.availability },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="pt-16 pb-12 border-b" style={{ borderColor: C.border }}>
          <motion.p
            {...fadeUp(0)}
            style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            {dict.eyebrow}
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              style={{ ...serif, fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.fg }}
            >
              {dict.title}
            </motion.h1>
          </div>
        </div>

        <motion.div {...fadeUp(0.1)} className="py-16">
          <p
            style={{ ...sans, fontSize: '1.05rem', lineHeight: 1.8, color: C.muted, marginBottom: '3rem', maxWidth: '46ch' }}
          >
            {dict.intro}
          </p>
          <div>
            {INFO.map((r) => (
              <div key={r.l} className="flex justify-between items-center py-5 border-b" style={{ borderColor: C.border }}>
                <span style={{ ...sans, fontSize: '0.85rem', color: C.muted }}>{r.l}</span>
                {r.href ? (
                  <a
                    href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group inline-flex items-center gap-1.5"
                    style={{ ...sans, fontSize: '0.95rem', color: C.fg }}
                  >
                    <span
                      className="transition-colors group-hover:opacity-60"
                      style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: '1px' }}
                    >
                      {r.v}
                    </span>
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="opacity-0 -translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                    />
                    {r.external && <span className="sr-only"> {dict.newTab}</span>}
                  </a>
                ) : (
                  <span style={{ ...sans, fontSize: '0.95rem', color: C.fg }}>{r.v}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
