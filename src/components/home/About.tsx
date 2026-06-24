'use client';

import { motion } from 'framer-motion';
import ParallaxImage from '@/components/ParallaxImage';
import { C, serif, sans, mono } from '@/lib/theme';

interface AboutDict {
  label: string;
  heading: string;
  p1: string;
  p2: string;
  experienceLabel: string;
  portraitAlt: string;
  education: { year: string; label: string; detail: string }[];
  softSkills: { label: string; note: string }[];
  experience: { role: string; company: string; duration: string; note: string }[];
}

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
      <motion.div
        className="md:col-span-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ParallaxImage
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&h=875&fit=crop&auto=format"
          alt={dict.portraitAlt}
          amount={45}
          style={{ background: C.card, aspectRatio: '4/5' }}
        />
      </motion.div>

      <motion.div
        className="md:col-span-7 flex flex-col justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          {dict.label}
        </p>
        <h2 style={{ ...serif, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: C.fg, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          {dict.heading}
        </h2>
        <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.8, color: C.muted, marginBottom: '1.25rem' }}>
          {dict.p1}
        </p>
        <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.8, color: C.muted, marginBottom: '2rem' }}>
          {dict.p2}
        </p>

        {/* Education */}
        <div className="mb-6">
          {dict.education.map((e) => (
            <div key={e.label} className="flex items-start gap-4 py-3 border-b" style={{ borderColor: C.border }}>
              <span style={{ ...mono, fontSize: '0.6rem', color: C.muted, flexShrink: 0, width: '5.5rem', paddingTop: 2 }}>
                {e.year}
              </span>
              <div>
                <span style={{ ...sans, fontSize: '0.85rem', color: C.fg, fontWeight: 500 }}>{e.label}</span>
                <span style={{ ...sans, fontSize: '0.82rem', color: C.muted }}> — {e.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="mb-6">
          {dict.softSkills.map((s) => (
            <div key={s.label} className="flex items-start gap-4 py-3 border-b" style={{ borderColor: C.border }}>
              <div>
                <span style={{ ...sans, fontSize: '0.85rem', color: C.fg, fontWeight: 500 }}>{s.label}</span>
                <span style={{ ...sans, fontSize: '0.82rem', color: C.muted }}> — {s.note}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <p style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {dict.experienceLabel}
        </p>
        <div>
          {dict.experience.map((exp) => (
            <div key={exp.role} className="py-4 border-b" style={{ borderColor: C.border }}>
              <div className="flex items-start justify-between gap-4 mb-1">
                <span style={{ ...sans, fontSize: '0.9rem', color: C.fg, fontWeight: 500 }}>{exp.role}</span>
                <span style={{ ...mono, fontSize: '0.6rem', color: C.muted, flexShrink: 0 }}>{exp.duration}</span>
              </div>
              <p style={{ ...sans, fontSize: '0.78rem', color: C.accent, marginBottom: '0.3rem' }}>{exp.company}</p>
              <p style={{ ...sans, fontSize: '0.82rem', color: C.muted, lineHeight: 1.6 }}>{exp.note}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
