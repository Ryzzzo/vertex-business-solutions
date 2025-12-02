'use client';

import { useRef, useState, MouseEvent, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  floatDistance?: number;
  hoverScale?: number;
  hoverGlow?: boolean;
  style?: React.CSSProperties;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 15,
  floatDistance = 40,
  hoverScale = 1,
  hoverGlow = false,
  style = {},
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(${hoverScale}, ${hoverScale}, ${hoverScale})`;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setGlarePosition({ x: 50, y: 50 });
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
        willChange: 'transform',
        position: 'relative',
        boxShadow: isHovering && hoverGlow
          ? '0 0 30px rgba(6, 182, 212, 0.3)'
          : undefined,
        ...style,
      }}
    >
      <div
        className="tilt-card-glare"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: 0.5,
          transition: 'background 0.1s ease-out',
          zIndex: 1,
        }}
      />
      <div
        style={{
          transform: `translateZ(${floatDistance}px)`,
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
}
