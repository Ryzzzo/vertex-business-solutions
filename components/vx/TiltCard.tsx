'use client';

import { useRef, useState, MouseEvent, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  hoverScale?: number;
  hoverGlow?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 20,
  hoverScale = 1,
  hoverGlow = false,
}: TiltCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !wrapperRef.current) return;

    const card = wrapperRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / rect.width) * maxTilt;
    const rotateX = ((y - centerY) / rect.height) * -maxTilt;

    setTransform({ rotateX, rotateY });

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlarePosition({ x: 50, y: 50 });
    setIsHovering(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="tilt-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        ref={cardRef}
        className={`tilt-card ${className}`}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${hoverScale}, ${hoverScale}, ${hoverScale})`,
          transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
          willChange: 'transform',
          position: 'relative',
          width: '100%',
          height: '100%',
          boxShadow: isHovering && hoverGlow
            ? '0 0 30px rgba(255, 255, 255, 0.1)'
            : undefined,
        }}
      >
        <div
          className="tilt-card-glare"
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            transition: 'background 0.1s ease-out',
            zIndex: 1,
            transformStyle: 'preserve-3d',
          }}
        />
        <div
          className="tilt-card-content"
          style={{
            position: 'relative',
            zIndex: 2,
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
