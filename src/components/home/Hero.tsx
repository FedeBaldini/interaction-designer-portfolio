'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto pt-10 text-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-300 text-sm tracking-widest uppercase font-medium">
          Available for freelance
        </span>
      </div>

      {/* Main Title */}
      <div className="relative">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-12 relative z-10 uppercase">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-2xl mb-2">
            INTERACTION
          </span>
          <span className="block text-cyan-400 transform filter drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            DESIGNER
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
        Blending <span className="text-cyan-300 font-semibold">Geometric Precision</span> with{' '}
        <span className="text-purple-300 font-semibold">Liquid Motion</span> to craft immersive
        digital experiences.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <Link
          href="/projects"
          className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer z-50"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            Explore Work{' '}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <Link
          href="/story"
          className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer z-50 text-center"
        >
          My Journey
        </Link>
      </div>
    </div>
  );
}
