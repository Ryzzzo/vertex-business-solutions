'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice.current) return;

    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, 'x', { duration: 0.3, ease: 'power2.out' });
    const yTo = gsap.quickTo(button, 'y', { duration: 0.3, ease: 'power2.out' });
    const scaleTo = gsap.quickTo(button, 'scale', { duration: 0.3, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseEnter = () => {
      scaleTo(1.02);
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      style={{ willChange: 'transform' }}
    >
      {children}
    </button>
  );
}
