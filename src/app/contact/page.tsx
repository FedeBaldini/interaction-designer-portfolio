'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-center animate-fade-in-up pt-6 sm:pt-8 md:pt-10 px-2 sm:px-0">
      <div className="bg-[#0a0a0a] border-2 border-[#00E5CC] p-5 sm:p-7 md:p-10 space-y-6 sm:space-y-8 shadow-[10px_10px_0px_rgba(0,229,204,0.2)]">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-champ uppercase">Let&apos;s Create Together</h1>
        <p className="text-[#F5F0E8]/80">
          Have a project that needs a touch of liquid geometry?
        </p>

        {/* Form */}
        <form className="space-y-3 sm:space-y-4 text-left mt-4 sm:mt-6" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-mono font-bold uppercase tracking-wider text-[#F5F0E8]/80 mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-[#0a0a0a] border-2 border-[#F5F0E8]/30 p-3 text-[#F5F0E8] focus:border-[#00E5CC] focus:shadow-[4px_4px_0px_rgba(0,229,204,0.2)] transition-colors placeholder:text-[#F5F0E8]/40 font-mono"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-mono font-bold uppercase tracking-wider text-[#F5F0E8]/80 mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-[#0a0a0a] border-2 border-[#F5F0E8]/30 p-3 text-[#F5F0E8] focus:border-[#00E5CC] focus:shadow-[4px_4px_0px_rgba(0,229,204,0.2)] transition-colors placeholder:text-[#F5F0E8]/40 font-mono"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mono font-bold uppercase tracking-wider text-[#F5F0E8]/80 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-[#0a0a0a] border-2 border-[#F5F0E8]/30 p-3 text-[#F5F0E8] focus:border-[#00E5CC] focus:shadow-[4px_4px_0px_rgba(0,229,204,0.2)] transition-colors h-32 resize-none placeholder:text-[#F5F0E8]/40 font-mono"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#FF2D6B] text-[#0a0a0a] font-bold font-mono uppercase tracking-wider hover:bg-[#F5F0E8] transition-colors border-2 border-[#FF2D6B] hover:border-[#F5F0E8]"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-6 border-t-2 border-[#F5F0E8]/25">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F0E8]/70 hover:text-[#00E5CC] cursor-pointer transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F0E8]/70 hover:text-[#00E5CC] cursor-pointer transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-[#F5F0E8]/70 hover:text-[#00E5CC] cursor-pointer transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
