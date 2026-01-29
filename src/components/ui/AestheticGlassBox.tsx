'use client';

import { ReactNode } from 'react';

interface AestheticGlassBoxProps {
  children: ReactNode;
  className?: string;
}

export default function AestheticGlassBox({
  children,
  className = '',
}: AestheticGlassBoxProps) {
  return (
    <div className={`aesthetic-glass-box ${className}`}>
      {children}
    </div>
  );
}
