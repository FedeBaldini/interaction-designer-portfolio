'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (blob1.current) blob1.current.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${x * -0.02}px, ${y * 0.03}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${x * 0.03}px, ${y * -0.01}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245,240,232,0.04) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Blob Fuchsia */}
      <div
        ref={blob1}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#FF2D6B]/15 rounded-full mix-blend-screen blur-[120px] animate-liquid"
      />

      {/* Blob Cyan */}
      <div
        ref={blob2}
        className="absolute bottom-[-10%] right-[-20%] w-[70vw] h-[70vw] bg-[#00E5CC]/12 rounded-full mix-blend-screen blur-[140px] animate-liquid delay-1"
      />

      {/* Blob deep purple */}
      <div
        ref={blob3}
        className="absolute top-[20%] left-[40%] w-[50vw] h-[50vw] bg-[#6a00ff]/15 rounded-full mix-blend-screen blur-[150px] animate-liquid delay-2"
      />

      {/* Noise grain overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
