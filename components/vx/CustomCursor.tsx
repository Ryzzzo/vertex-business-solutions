'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice.current) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power2.out' });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#06b6d4',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        left: '-4px',
        top: '-4px',
        willChange: 'transform',
      }}
    />
  );
}
