'use client';

import { useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function ScrollToTop() {
  const isScrolled = useScrollPosition(300);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 min-w-[44px] min-h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-500 transform hover:bg-cyan-500 hover:border-cyan-400 group ${
        isScrolled
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-10'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
