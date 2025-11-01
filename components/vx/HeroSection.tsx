'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Database, BarChart3, Zap, Code2 } from 'lucide-react';
import SpaceBackground from './SpaceBackground';

const floatingCards = [
  { icon: Database, title: 'CRM Systems', position: 'top-left', delay: 0 },
  { icon: BarChart3, title: 'Analytics', position: 'top-right', delay: 0.2 },
  { icon: Zap, title: 'Automation', position: 'bottom-left', delay: 0.4 },
  { icon: Code2, title: 'Modern Stack', position: 'bottom-right', delay: 0.6 },
];

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SpaceBackground />

      <div className="container relative z-10 py-32">
        <div className="relative max-w-6xl mx-auto">
          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            const positions = {
              'top-left': 'lg:absolute lg:-top-20 lg:-left-32',
              'top-right': 'lg:absolute lg:-top-20 lg:-right-32',
              'bottom-left': 'lg:absolute lg:-bottom-20 lg:-left-32',
              'bottom-right': 'lg:absolute lg:-bottom-20 lg:-right-32',
            };

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: card.delay }}
                className={`glass hidden lg:block w-[300px] h-[200px] rounded-[20px] p-8 ${positions[card.position as keyof typeof positions]}`}
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                  zIndex: index % 2 === 0 ? 5 : 15,
                }}
              >
                <Icon className="w-12 h-12 text-calm-blue mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              </motion.div>
            );
          })}

          <div className="text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6"
              style={{ background: 'transparent' }}
            >
              <h1
                className="font-bold tracking-tighter leading-none text-white text-glow-strong mb-6 animate-glow-pulse"
                style={{ fontSize: 'clamp(80px, 14vw, 140px)', background: 'transparent' }}
              >
                V<span className="relative inline-block" style={{ background: 'transparent' }}><span className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-calm-blue via-sky-blue to-calm-blue" style={{ width: '120%', left: '-10%' }} /></span>X
              </h1>

              <div className="flex items-center justify-center mb-4">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-calm-blue to-transparent" />
              </div>

              <p className="text-[20px] tracking-[0.3em] text-light-gray uppercase mb-3">
                Vertex Business Solutions
              </p>
              <p className="text-base text-soft-gray">
                Custom Business Application Development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="glass-subtle hover:border-calm-blue border-2 border-calm-blue text-white w-[180px] h-14 rounded-xl text-base font-semibold hover:bg-calm-blue/10 transition-all duration-300 hover:shadow-lg hover:shadow-calm-blue/40 group"
              >
                <span>View Portfolio</span>
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-calm-blue hover:bg-sky-blue text-white w-[180px] h-14 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-calm-blue/50 hover:scale-105"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 text-sm text-soft-gray"
            >
              Free consultation • No obligation • Nationwide service
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
