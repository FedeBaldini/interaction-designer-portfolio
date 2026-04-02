'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto pt-10 text-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border-2 border-[#00E5CC] font-mono text-xs sm:text-sm tracking-widest uppercase text-[#00E5CC]">
        <span className="w-2 h-2 bg-[#00E5CC] animate-pulse" />
        Available for freelance
      </div>

      {/* Main Title */}
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-8 sm:mb-10 md:mb-12 relative z-10 uppercase font-champ">
          <span className="block text-[#F5F0E8] mb-2">
            INTERACTION
          </span>
          <span className="block" style={{ WebkitTextStroke: '2px #FF2D6B', color: 'transparent' }}>
            DESIGNER
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="bg-[#0a0a0a]/80 border-2 border-[#F5F0E8]/10 p-8 md:p-10 max-w-2xl mx-auto relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00E5CC]" />
        <p className="text-base sm:text-lg md:text-xl text-[#F5F0E8]/80 font-mono text-left leading-relaxed pl-4">
          Blending <span className="text-[#00E5CC] font-bold">Geometric Precision</span> with{' '}
          <span className="text-[#FF2D6B] font-bold">Liquid Motion</span> to craft immersive
          digital experiences.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 px-4 sm:px-0">
        <Link
          href="/projects"
          className="group relative px-8 py-4 bg-[#00E5CC] text-[#0a0a0a] font-bold font-mono uppercase tracking-wider overflow-hidden transition-all hover:bg-[#0a0a0a] hover:text-[#00E5CC] cursor-pointer z-50 border-2 border-[#00E5CC] shadow-[6px_6px_0px_#FF2D6B]"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            Explore Work{' '}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <Link
          href="/story"
          className="px-8 py-4 border-2 border-[#F5F0E8] font-bold font-mono uppercase tracking-wider hover:bg-[#F5F0E8] hover:text-[#0a0a0a] transition-all cursor-pointer z-50 text-center"
        >
          My Journey
        </Link>
      </div>
    </div>
  );
}
