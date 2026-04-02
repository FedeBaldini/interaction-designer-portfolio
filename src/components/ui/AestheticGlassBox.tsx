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
    <div className={`punk-box ${className}`}>
      {children}
    </div>
  );
}
