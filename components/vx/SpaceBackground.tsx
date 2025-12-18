'use client';

import { useEffect, useMemo, useState, useRef, useCallback, memo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useMouseParallax } from '@/hooks/useMouseParallax';

const ConstellationParticles = memo(function ConstellationParticles({ isMobile }: { isMobile: boolean }) {
  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    console.log(container);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
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
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: {
            min: 0.3,
            max: 1.2,
          },
          straight: false,
          bounce: true,
          attract: {
            enable: false,
          },
          warp: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: isMobile ? 4 : 15,
        },
        opacity: {
          value: {
            min: 0.2,
            max: 0.6,
          },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
        wobble: {
          enable: true,
          distance: 5,
          speed: {
            min: 1,
            max: 3,
          },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  return (
    <Particles
      id="space-particles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
});

export default function SpaceBackground() {
  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const mousePosition = useMouseParallax();
  const mousePositionRef = useRef(mousePosition);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

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
  }, [isVisible]);

  const starfield = useMemo(
    () => {
      const count = isMobile ? 3 : 12;
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 2 + Math.random() * 2,
      }));
    },
    [isMobile]
  );

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div
        ref={gradientRef}
        className="absolute inset-0 gradient-mesh"
        style={{ willChange: 'transform' }}
      />

      {init && (
        <div className="absolute inset-0 z-0">
          <ConstellationParticles isMobile={isMobile} />
        </div>
      )}

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
    </div>
  );
}
