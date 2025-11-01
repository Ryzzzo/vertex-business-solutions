'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ConstellationBackground from './ConstellationBackground';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F0F10 0%, #151516 100%)' }}
    >
      <ConstellationBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <h1
              className="font-bold tracking-tighter leading-none"
              style={{ fontSize: '72px', color: '#FFFFFF' }}
            >
              Vertex
            </h1>

            <h2 className="text-2xl font-medium text-text-primary">
              Business Application Development
            </h2>

            <p
              className="text-lg text-text-secondary leading-relaxed"
              style={{ maxWidth: '600px' }}
            >
              Building custom CRM systems, dashboards, and business tools that scale with your team
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="bg-accent-blue text-white hover:bg-accent-blue/90 rounded-sm px-8 h-12 text-base font-medium"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 rounded-sm px-8 h-12 text-base font-medium"
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              <div
                className="absolute inset-0 bg-accent-blue opacity-20 blur-[100px]"
                style={{ transform: 'translateZ(0)' }}
              />

              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto relative z-10"
                style={{ filter: 'drop-shadow(0 0 20px rgba(97, 175, 239, 0.3))' }}
              >
                <rect x="50" y="50" width="140" height="140" fill="none" stroke="#61AFEF" strokeWidth="2" />
                <rect x="100" y="100" width="200" height="200" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
                <rect x="150" y="150" width="160" height="160" fill="none" stroke="#61AFEF" strokeWidth="2" />

                <line x1="50" y1="50" x2="190" y2="190" stroke="#61AFEF" strokeWidth="1" opacity="0.3" />
                <line x1="190" y1="50" x2="50" y2="190" stroke="#61AFEF" strokeWidth="1" opacity="0.3" />

                <circle cx="50" cy="50" r="4" fill="#61AFEF" />
                <circle cx="190" cy="50" r="4" fill="#61AFEF" />
                <circle cx="50" cy="190" r="4" fill="#61AFEF" />
                <circle cx="190" cy="190" r="4" fill="#61AFEF" />

                <circle cx="150" cy="150" r="4" fill="#FFFFFF" />
                <circle cx="310" cy="150" r="4" fill="#FFFFFF" />
                <circle cx="150" cy="310" r="4" fill="#FFFFFF" />
                <circle cx="310" cy="310" r="4" fill="#FFFFFF" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
