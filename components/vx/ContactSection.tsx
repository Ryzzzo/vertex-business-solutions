'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const buttonX = useSpring(0, { stiffness: 150, damping: 15 });
  const buttonY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distanceX = e.clientX - buttonCenterX;
      const distanceY = e.clientY - buttonCenterY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < 120) {
        const strength = (120 - distance) / 120;
        buttonX.set(distanceX * strength * 0.1);
        buttonY.set(distanceY * strength * 0.1);
      } else {
        buttonX.set(0);
        buttonY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [buttonX, buttonY]);

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-space-navy"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-calm-blue/10 rounded-full filter blur-[150px]" />

        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="starfield animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-space-navy to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-space-navy to-transparent" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className="text-6xl font-bold text-white mb-6 text-glow-strong"
            style={{ letterSpacing: '-0.02em' }}
          >
            Ready to Build Something Together?
          </h2>

          <p className="text-[19px] text-light-gray mb-12 leading-relaxed">
            Let's discuss your project and create a solution that fits your needs
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              style={{ x: buttonX, y: buttonY }}
              className="inline-block"
            >
              <Button
                ref={buttonRef}
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="glass-subtle border-2 border-calm-blue text-white w-[240px] h-16 rounded-xl text-lg font-semibold hover:bg-calm-blue transition-all duration-300 magnetic-button animate-glow-pulse"
                aria-label="Start your custom business application project - Open project questionnaire"
              >
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 space-y-4"
          >
            <p className="text-sm text-soft-gray">
              Free consultation • No obligation • Nationwide service
            </p>

            <a
              href="mailto:contact@vertexapps.dev"
              className="inline-flex items-center gap-2 text-sm text-calm-blue hover:text-sky-blue transition-colors"
              aria-label="Email Vertex Business Solutions at contact@vertexapps.dev"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              contact@vertexapps.dev
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-calm-blue/20" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-calm-blue/20" />
      </div>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
