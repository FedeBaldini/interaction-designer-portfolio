'use client';

import { motion } from 'framer-motion';
import { C, serif, sans, mono } from '@/lib/theme';

const EDUCATION = [
  { year: '2017–2022', label: 'Liceo Artistico Boccioni', detail: 'Multimedia Art' },
  { year: '2022–2025', label: 'IED Milano', detail: 'BA Graphic Design' },
  { year: '2025–now', label: 'SUPSI', detail: 'Prototyping & Interaction Design' },
];

const SOFT_SKILLS = [
  { label: 'Teamwork', note: 'Playing soccer has taught me accountability and the importance of being a team player.' },
  { label: 'Focus', note: 'Playing guitar helps me maintain concentration and balance during intense work phases.' },
  { label: 'Determination', note: 'I approach every project with the drive to step outside my comfort zone.' },
];

const EXPERIENCE = [
  {
    role: 'Graphic Designer Intern',
    company: 'Strategy Design — Political Communication Agency',
    duration: '6 months',
    note: 'First full immersion in graphic design applied to real-world clients inside a young, fast-paced agency.',
  },
  {
    role: 'Motion & Video Design Intern',
    company: 'Communication Agency',
    duration: '3 months',
    note: 'Video content creation within a specialized agency — exploring new visual languages and expanding my technical toolkit.',
  },
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
      <motion.div
        className="md:col-span-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative overflow-hidden" style={{ background: C.card, aspectRatio: '4/5' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&h=875&fit=crop&auto=format"
            alt="Chiara Baldini, Graphic & Interaction Designer"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="md:col-span-7 flex flex-col justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          About
        </p>
        <h2 style={{ ...serif, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: C.fg, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          I am Chiara Baldini.
        </h2>
        <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.8, color: C.muted, marginBottom: '1.25rem' }}>
          A dynamic and energetic designer with a passion for connecting ideas, people, and form. I
          firmly believe in active listening as a catalyst for continuous growth, every project starts
          with genuinely understanding the person I&apos;m designing for.
        </p>
        <p style={{ ...sans, fontSize: '1rem', lineHeight: 1.8, color: C.muted, marginBottom: '2rem' }}>
          My journey began at the Boccioni Multimedia Art High School and was solidified with a
          Bachelor&apos;s in Graphic Design from IED Milano. I am currently evolving toward prototyping and
          Interaction Design at SUPSI. While my skill set spans visual communication in its many forms,
          my true passion lies in Web Design.
        </p>

        {/* Education */}
        <div className="mb-6">
          {EDUCATION.map((e) => (
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
          {SOFT_SKILLS.map((s) => (
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
          Experience
        </p>
        <div>
          {EXPERIENCE.map((exp) => (
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
