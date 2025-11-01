'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-24 bg-bg-primary">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Built for Business
            </h2>

            <p className="text-base text-text-primary leading-relaxed">
              I bring 14+ years of operational experience from USPS to building custom business applications.
              I understand enterprise workflows, data management, and what it takes to create tools that teams actually use.
            </p>

            <p className="text-base text-text-primary leading-relaxed">
              Specializing in CRM systems, dashboards, and workflow automation for small to medium-sized businesses.
              Every application is built with modern frameworks and deployed on reliable cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="space-y-8">
              <div className="border border-border-gray p-8 bg-bg-secondary" style={{ borderRadius: '2px' }}>
                <div className="text-4xl font-bold text-white mb-2">14+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>

              <div className="border border-border-gray p-8 bg-bg-secondary" style={{ borderRadius: '2px' }}>
                <div className="text-2xl font-bold text-white mb-2">Charlotte, NC</div>
                <div className="text-sm text-text-secondary">Based</div>
              </div>

              <div className="border border-border-gray p-8 bg-bg-secondary" style={{ borderRadius: '2px' }}>
                <div className="text-xl font-bold text-white mb-2">Enterprise</div>
                <div className="text-sm text-text-secondary">Background</div>
              </div>
            </div>

            <div className="mt-8 relative">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-auto opacity-30"
              >
                <rect x="20" y="20" width="80" height="80" fill="none" stroke="#61AFEF" strokeWidth="1" />
                <rect x="60" y="60" width="100" height="100" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                <line x1="20" y1="20" x2="100" y2="100" stroke="#61AFEF" strokeWidth="0.5" />
                <line x1="100" y1="20" x2="20" y2="100" stroke="#61AFEF" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <svg
          className="w-full"
          viewBox="0 0 1200 2"
          preserveAspectRatio="none"
          style={{ height: '2px' }}
        >
          <line
            x1="0"
            y1="1"
            x2="1200"
            y2="1"
            stroke="#44494D"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
