'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Database, ChartBar as BarChart3, Zap, Code as Code2 } from 'lucide-react';
import SpaceBackground from './SpaceBackground';
import { useState } from 'react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

const floatingCards = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    subtitle: '2-Week Turnaround',
    position: 'top-left',
    delay: 0,
    hoverText: 'Using modern frameworks and AI-assisted development, we deliver professional applications in weeks, not months. Most projects complete in 1-3 weeks.',
  },
  {
    icon: Database,
    title: 'US-Based',
    subtitle: 'Charlotte, NC',
    position: 'top-right',
    delay: 0.2,
    hoverText: 'Direct communication with no account managers or offshore teams. Based in Charlotte, NC, serving clients nationwide with real-time collaboration.',
  },
  {
    icon: Code2,
    title: 'Modern Tech',
    subtitle: 'React • Next.js',
    position: 'bottom-left',
    delay: 0.4,
    hoverText: 'Built with React, Next.js, and modern cloud infrastructure. Your applications are fast, responsive, and scalable from day one.',
  },
  {
    icon: BarChart3,
    title: 'Years of Experience',
    subtitle: 'Enterprise Operations',
    position: 'bottom-right',
    delay: 0.6,
    hoverText: 'Backed by extensive operational experience with enterprise systems. We understand real business workflows and what teams actually use.',
  },
];

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                className={positions[card.position as keyof typeof positions]}
              >
                <div
                  className="hero-card glass rounded-[20px] p-8 cursor-pointer"
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: `${index * 0.2}s`,
                    width: '300px',
                    minHeight: '200px',
                    zIndex: index % 2 === 0 ? 5 : 15,
                  }}
                >
                  <Icon className="w-12 h-12 text-calm-blue mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-soft-gray mb-3">{card.subtitle}</p>
                  <div className="hero-card-details overflow-hidden border-t border-calm-blue/30">
                    <p className="text-sm text-light-gray leading-relaxed pt-4">{card.hoverText}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                margin: 0,
                width: 'auto',
                height: 'auto'
              }}
            >
              <h1
                className="font-bold tracking-tighter leading-none text-white mb-6 animate-text-glow-pulse"
                style={{
                  fontSize: 'clamp(80px, 14vw, 140px)',
                  background: 'transparent',
                  border: 'none',
                  textShadow: '0 0 40px rgba(74, 144, 226, 0.8), 0 0 80px rgba(74, 144, 226, 0.4)'
                }}
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

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
