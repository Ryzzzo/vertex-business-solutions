'use client';

import { useEffect, useRef } from 'react';
import { useMouseParallax } from '@/hooks/useMouseParallax';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
  twinkleSpeed: number;
  color: string;
}

export default function ConstellationParallax() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const mousePosition = useMouseParallax();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const generateStars = (count: number, minSize: number, maxSize: number, baseOpacity: number): Star[] => {
      const colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#06b6d4', '#3b82f6'];
      return Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        opacity: baseOpacity - 0.2 + Math.random() * 0.2,
        twinkle: Math.random() > 0.9,
        twinkleSpeed: 1 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const layer1Stars = generateStars(150, 1, 1, 0.4);
    const layer2Stars = generateStars(80, 1.5, 1.5, 0.6);
    const layer3Stars = generateStars(40, 2, 2, 0.8);
    const layer4Stars = generateStars(15, 3, 3, 1.0);

    const renderStars = (stars: Star[], element: HTMLDivElement) => {
      element.innerHTML = stars
        .map(
          (star) => `
          <div
            class="star ${star.twinkle ? 'twinkle' : ''}"
            style="
              left: ${star.x}%;
              top: ${star.y}%;
              width: ${star.size}px;
              height: ${star.size}px;
              opacity: ${star.opacity};
              animation-duration: ${star.twinkleSpeed}s;
              background: radial-gradient(circle, ${star.color} 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%);
            "
          ></div>
        `
        )
        .join('');
    };

    if (layer1Ref.current) renderStars(layer1Stars, layer1Ref.current);
    if (layer2Ref.current) renderStars(layer2Stars, layer2Ref.current);
    if (layer3Ref.current) renderStars(layer3Stars, layer3Ref.current);
    if (layer4Ref.current) renderStars(layer4Stars, layer4Ref.current);

    let currentX1 = 0;
    let currentY1 = 0;
    let currentX2 = 0;
    let currentY2 = 0;
    let currentX3 = 0;
    let currentY3 = 0;
    let currentX4 = 0;
    let currentY4 = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;

    const animate = () => {
      const targetX1 = -mousePosition.normalizedX * 7;
      const targetY1 = -mousePosition.normalizedY * 7;
      const targetX2 = -mousePosition.normalizedX * 17;
      const targetY2 = -mousePosition.normalizedY * 17;
      const targetX3 = -mousePosition.normalizedX * 27;
      const targetY3 = -mousePosition.normalizedY * 27;
      const targetX4 = -mousePosition.normalizedX * 30;
      const targetY4 = -mousePosition.normalizedY * 30;

      const targetRotateX = mousePosition.normalizedY * 2;
      const targetRotateY = -mousePosition.normalizedX * 2;

      currentX1 += (targetX1 - currentX1) * 0.1;
      currentY1 += (targetY1 - currentY1) * 0.1;
      currentX2 += (targetX2 - currentX2) * 0.1;
      currentY2 += (targetY2 - currentY2) * 0.1;
      currentX3 += (targetX3 - currentX3) * 0.1;
      currentY3 += (targetY3 - currentY3) * 0.1;
      currentX4 += (targetX4 - currentX4) * 0.1;
      currentY4 += (targetY4 - currentY4) * 0.1;
      currentRotateX += (targetRotateX - currentRotateX) * 0.1;
      currentRotateY += (targetRotateY - currentRotateY) * 0.1;

      if (container) {
        container.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
      }

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${currentX1}px, ${currentY1}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${currentX2}px, ${currentY2}px, 0)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate3d(${currentX3}px, ${currentY3}px, 0)`;
      }
      if (layer4Ref.current) {
        layer4Ref.current.style.transform = `translate3d(${currentX4}px, ${currentY4}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="constellation-parallax"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        ref={layer1Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: '-50px',
          zIndex: 1,
          willChange: 'transform',
        }}
      />
      <div
        ref={layer2Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: '-50px',
          zIndex: 2,
          willChange: 'transform',
        }}
      />
      <div
        ref={layer3Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: '-50px',
          zIndex: 3,
          willChange: 'transform',
        }}
      />
      <div
        ref={layer4Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: '-50px',
          zIndex: 4,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
