'use client';

import { useState, useEffect } from 'react';
import { Hexagon } from 'lucide-react';

export default function LogoAnimation() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'done'>('visible');

  useEffect(() => {
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] transition-opacity duration-300 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="logo-intro-wrapper">
        <div className="logo-intro-icon">
          <Hexagon className="text-black w-8 h-8" strokeWidth={2.5} />
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
          background: linear-gradient(to top right, #22d3ee, #a855f7);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: iconEntry 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     iconPulse 2.5s ease-out forwards;
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
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
        }

        .logo-intro-text-accent {
          color: #22d3ee;
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

        @keyframes iconPulse {
          0% {
            box-shadow: 0 0 0px rgba(139, 92, 246, 0);
          }
          40% {
            box-shadow: 0 0 60px rgba(139, 92, 246, 0.6), 0 0 120px rgba(34, 211, 238, 0.3);
          }
          70% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(34, 211, 238, 0.2);
          }
          100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(34, 211, 238, 0.15);
          }
        }

        @keyframes revealText {
          0% {
            max-width: 0;
          }
          100% {
            max-width: 600px;
          }
        }
      `}</style>
    </div>
  );
}
