'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { C, serif, sans, fadeUp, easeOut } from '@/lib/theme';

const INFO = [
  { l: 'Email', v: 'baldini.chiara00@gmail.com' },
  { l: 'LinkedIn', v: 'Chiara Baldini' },
  { l: 'Location', v: 'Milan / Lugano' },
  { l: 'Availability', v: 'Open to opportunities' },
];

const TEXT_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
] as const;

export default function ContactView() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const fieldStyle = (name: string): CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? C.fg : C.border}`,
    padding: '0.6rem 0',
    ...sans,
    fontSize: '0.9rem',
    color: C.fg,
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  const labelStyle: CSSProperties = {
    ...sans,
    fontSize: '0.7rem',
    color: C.muted,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
  };

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="pt-16 pb-12 border-b" style={{ borderColor: C.border }}>
          <motion.p
            {...fadeUp(0)}
            style={{ ...sans, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Get in Touch
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              style={{ ...serif, fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.fg }}
            >
              Let&apos;s talk.
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 py-16">
          {/* Info */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-4">
            <p style={{ ...sans, fontSize: '0.95rem', lineHeight: 1.8, color: C.muted, marginBottom: '2.5rem' }}>
              Available for graphic design, web design, prototyping, and interaction design projects.
              I&apos;m always happy to connect — response within 24 hours.
            </p>
            {INFO.map((r) => (
              <div key={r.l} className="flex justify-between items-center py-4 border-b" style={{ borderColor: C.border }}>
                <span style={{ ...sans, fontSize: '0.78rem', color: C.muted }}>{r.l}</span>
                <span style={{ ...sans, fontSize: '0.82rem', color: C.fg }}>{r.v}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.18)} className="md:col-span-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <h3 style={{ ...serif, fontSize: '2rem', color: C.fg, marginBottom: '0.75rem' }}>
                    Message received.
                  </h3>
                  <p style={{ ...sans, fontSize: '0.85rem', color: C.muted }}>I&apos;ll be in touch shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {TEXT_FIELDS.map((f) => (
                      <div key={f.name}>
                        <label htmlFor={f.name} style={labelStyle}>
                          {f.label}
                        </label>
                        <input
                          id={f.name}
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                          onFocus={() => setFocused(f.name)}
                          onBlur={() => setFocused(null)}
                          style={fieldStyle(f.name)}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="message" style={labelStyle}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project…"
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={{ ...fieldStyle('message'), border: `1px solid ${focused === 'message' ? C.fg : C.border}`, padding: '0.8rem', resize: 'none' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 group"
                    style={{ ...sans, fontSize: '0.85rem', color: C.fg, borderBottom: `1px solid ${C.fg}`, paddingBottom: '2px' }}
                  >
                    Send message
                    <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
