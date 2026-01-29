'use client';

import { useParallax } from '@/hooks/useParallax';

export default function Background() {
  const position1 = useParallax(0.02);
  const position2 = useParallax(-0.02);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Main blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full mix-blend-screen blur-[120px] animate-blob"
        style={{ transform: `translate(${position1.x}px, ${position1.y}px)` }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/20 rounded-full mix-blend-screen blur-[100px] animate-blob animation-delay-2000"
        style={{ transform: `translate(${position2.x}px, ${position2.y * 1.5}px)` }}
      />

      {/* Floating orbs */}
      <div className="absolute top-[25%] left-[15%] w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] animate-bounce-float" />
      <div
        className="absolute top-[60%] right-[10%] w-48 h-48 bg-cyan-500/10 rounded-full blur-[50px] animate-bounce-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-[15%] left-[40%] w-24 h-24 bg-white/5 rounded-full blur-[30px] animate-bounce-float"
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
