'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import AestheticGlassBox from '@/components/ui/AestheticGlassBox';

export default function ContactPage() {
  return (
    <section className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-center animate-fade-in-up pt-6 sm:pt-8 md:pt-10 px-2 sm:px-0">
      <AestheticGlassBox className="p-5 sm:p-7 md:p-10 space-y-6 sm:space-y-8 relative">
        <div className="relative z-10">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let&apos;s Create Together</h1>
          <p className="text-white/80">
            Have a project that needs a touch of liquid geometry?
          </p>

          {/* Form */}
          <form className="space-y-3 sm:space-y-4 text-left mt-4 sm:mt-6" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 transition-colors placeholder:text-white/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 transition-colors placeholder:text-white/60"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 transition-colors h-32 resize-none placeholder:text-white/60"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-6 border-t border-white/10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white cursor-pointer transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white cursor-pointer transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-white/70 hover:text-white cursor-pointer transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </AestheticGlassBox>
    </section>
  );
}
