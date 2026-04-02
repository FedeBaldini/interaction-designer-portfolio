'use client';

import { useState, useEffect } from 'react';
import { Hexagon } from 'lucide-react';

export default function LogoAnimation() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'done'>('visible');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase('done');
      return;
    }

    const fadeTimer = setTimeout(() => setPhase('fading'), 1950);
    const doneTimer = setTimeout(() => setPhase('done'), 2250);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-300 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="logo-intro-wrapper">
        <div className="logo-intro-icon">
          <Hexagon className="text-[#00E5CC] w-8 h-8" strokeWidth={2.5} />
        </div>
        <div className="logo-intro-text-mask">
          <span className="logo-intro-text">
            Interaction<span className="logo-intro-text-accent">Designer</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        .logo-intro-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-intro-icon {
          width: 80px;
          height: 80px;
          background: #0a0a0a;
          border: 2px solid #00E5CC;
          box-shadow: 4px 4px 0 #FF2D6B;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: iconEntry 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform: scale(0) rotate(-180deg);
          opacity: 0;
        }

        .logo-intro-text-mask {
          overflow: hidden;
          max-width: 0;
          animation: revealText 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
        }

        .logo-intro-text {
          display: block;
          white-space: nowrap;
          font-size: 32px;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #F5F0E8;
        }

        .logo-intro-text-accent {
          color: #00E5CC;
        }

        @keyframes iconEntry {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
            opacity: 1;
          }
          70% {
            transform: scale(0.9) rotate(0deg);
          }
          85% {
            transform: scale(1.05) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes revealText {
          0% { max-width: 0; }
          100% { max-width: 600px; }
        }
      `}</style>
    </div>
  );
}
