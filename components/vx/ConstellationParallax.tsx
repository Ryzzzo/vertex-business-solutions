'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
  twinkleSpeed: number;
}

export default function ConstellationParallax() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const generateStars = (count: number, minSize: number, maxSize: number): Star[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        opacity: 0.3 + Math.random() * 0.7,
        twinkle: Math.random() > 0.7,
        twinkleSpeed: 0.5 + Math.random() * 1.5,
      }));
    };

    const layer1Stars = generateStars(100, 1, 1.5);
    const layer2Stars = generateStars(50, 1.5, 2);
    const layer3Stars = generateStars(20, 2, 3);

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
            "
          ></div>
        `
        )
        .join('');
    };

    if (layer1Ref.current) renderStars(layer1Stars, layer1Ref.current);
    if (layer2Ref.current) renderStars(layer2Stars, layer2Ref.current);
    if (layer3Ref.current) renderStars(layer3Stars, layer3Ref.current);

    let mouseX = 0;
    let mouseY = 0;
    let currentX1 = 0;
    let currentY1 = 0;
    let currentX2 = 0;
    let currentY2 = 0;
    let currentX3 = 0;
    let currentY3 = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    };

    const animate = () => {
      currentX1 += (mouseX * -0.5 - currentX1) * 0.05;
      currentY1 += (mouseY * -0.5 - currentY1) * 0.05;
      currentX2 += (mouseX * -2 - currentX2) * 0.05;
      currentY2 += (mouseY * -2 - currentY2) * 0.05;
      currentX3 += (mouseX * -5 - currentX3) * 0.05;
      currentY3 += (mouseY * -5 - currentY3) * 0.05;

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${currentX1}px, ${currentY1}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${currentX2}px, ${currentY2}px, 0)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate3d(${currentX3}px, ${currentY3}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="constellation-parallax"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={layer1Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          willChange: 'transform',
        }}
      />
      <div
        ref={layer2Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          willChange: 'transform',
        }}
      />
      <div
        ref={layer3Ref}
        className="star-layer"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
