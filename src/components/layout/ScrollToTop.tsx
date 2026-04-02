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
      className={`fixed bottom-8 right-8 z-40 p-3 min-w-[44px] min-h-[44px] bg-[#0a0a0a] text-[#00E5CC] border-2 border-[#00E5CC] hover:bg-[#00E5CC] hover:text-[#0a0a0a] transition-all duration-200 shadow-[4px_4px_0px_#FF2D6B] group ${
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
