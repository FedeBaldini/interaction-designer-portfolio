'use client';

import { useParallax } from '@/hooks/useParallax';

export default function Background() {
  const position1 = useParallax(0.02);
  const position2 = useParallax(-0.02);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Main blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[80vw] sm:w-[70vw] md:w-[60vw] h-[80vw] sm:h-[70vw] md:h-[60vw] bg-purple-900/20 rounded-full mix-blend-screen blur-[80px] sm:blur-[100px] md:blur-[120px] animate-blob"
        style={{ transform: `translate(${position1.x}px, ${position1.y}px)` }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] sm:w-[60vw] md:w-[50vw] h-[70vw] sm:h-[60vw] md:h-[50vw] bg-cyan-900/20 rounded-full mix-blend-screen blur-[70px] sm:blur-[85px] md:blur-[100px] animate-blob animation-delay-2000"
        style={{ transform: `translate(${position2.x}px, ${position2.y * 1.5}px)` }}
      />

      {/* Floating orbs */}
      <div className="absolute top-[25%] left-[15%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-purple-500/10 rounded-full blur-[30px] sm:blur-[35px] md:blur-[40px] animate-bounce-float" />
      <div
        className="absolute top-[60%] right-[10%] w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 bg-cyan-500/10 rounded-full blur-[35px] sm:blur-[42px] md:blur-[50px] animate-bounce-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-[15%] left-[40%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white/5 rounded-full blur-[20px] sm:blur-[25px] md:blur-[30px] animate-bounce-float"
        style={{ animationDelay: '3s' }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-20 brightness-100 contrast-150 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </div>
  );
}
