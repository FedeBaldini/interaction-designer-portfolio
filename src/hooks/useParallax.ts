'use client';

import { useState, useEffect, useCallback } from 'react';

interface ParallaxPosition {
  x: number;
  y: number;
}

export function useParallax(factor: number = 0.02) {
  const [position, setPosition] = useState<ParallaxPosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({
      x: e.clientX * factor,
      y: e.clientY * factor,
    });
  }, [factor]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
