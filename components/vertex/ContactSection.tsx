'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="relative py-32"
      style={{
        background: 'linear-gradient(135deg, #0F0F10 0%, #151516 50%, #0F0F10 100%)',
      }}
    >
      <div className="container mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-6xl font-bold text-white tracking-tight">
            Let's Build Something
          </h2>

          <p className="text-xl text-text-primary">
            Ready to streamline your business with custom tools?
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-accent-blue text-white hover:bg-accent-blue/90 rounded-sm text-lg font-medium glow-accent"
              style={{ height: '60px', paddingLeft: '48px', paddingRight: '48px' }}
            >
              Start Your Project
            </Button>
          </div>

          <div className="pt-8">
            <a
              href="mailto:ryan@vertex.dev"
              className="text-sm text-text-secondary hover:text-accent-blue transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              ryan@vertex.dev
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="1200"
            y2="80"
            stroke="#44494D"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
