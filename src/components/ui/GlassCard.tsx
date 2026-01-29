'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  interactive = false,
  className = '',
  onClick,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${interactive ? 'interactive cursor-pointer' : ''} rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
