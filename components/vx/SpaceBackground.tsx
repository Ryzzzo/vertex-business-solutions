'use client';

import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useMouseParallax } from '@/hooks/useMouseParallax';

export default function SpaceBackground() {
  const [init, setInit] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const mousePosition = useMouseParallax();
  const mousePositionRef = useRef(mousePosition);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    mousePositionRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let currentGradientX = 0;
    let currentGradientY = 0;
    let currentStarfieldX = 0;
    let currentStarfieldY = 0;

    const animate = () => {
      const targetGradientX = -mousePositionRef.current.normalizedX * 5;
      const targetGradientY = -mousePositionRef.current.normalizedY * 5;
      const targetStarfieldX = -mousePositionRef.current.normalizedX * 10;
      const targetStarfieldY = -mousePositionRef.current.normalizedY * 10;

      currentGradientX += (targetGradientX - currentGradientX) * 0.1;
      currentGradientY += (targetGradientY - currentGradientY) * 0.1;
      currentStarfieldX += (targetStarfieldX - currentStarfieldX) * 0.1;
      currentStarfieldY += (targetStarfieldY - currentStarfieldY) * 0.1;

      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate3d(${currentGradientX}px, ${currentGradientY}px, 0)`;
      }
      if (starfieldRef.current) {
        starfieldRef.current.style.transform = `translate3d(${currentStarfieldX}px, ${currentStarfieldY}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    console.log(container);
  }, []);

  const starfield = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 2 + Math.random() * 2,
      })),
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
        },
      },
      smooth: true,
      particles: {
        color: {
          value: '#FFFFFF',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 0.5,
        },
        move: {
          direction: 'none',
          enable: false,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <>
      <div
        ref={gradientRef}
        className="absolute inset-0 gradient-mesh"
        style={{ willChange: 'transform' }}
      />

      <div
        ref={particlesRef}
        className="absolute inset-0 z-0"
      >
        <Particles
          id="space-particles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div
        ref={starfieldRef}
        className="absolute inset-0"
        style={{ willChange: 'transform' }}
      >
        {starfield.map((star) => (
          <div
            key={star.id}
            className="starfield animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
