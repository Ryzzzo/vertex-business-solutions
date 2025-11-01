'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, BarChart3, Settings } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Custom CRM Systems',
    description: 'Sales pipelines, contact management, and business intelligence dashboards',
  },
  {
    icon: BarChart3,
    title: 'Business Dashboards',
    description: 'Real-time data visualization and reporting tools for operational efficiency',
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description: 'Custom applications that streamline processes and eliminate manual work',
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="relative py-24 bg-bg-primary">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          What I Build
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bg-secondary border border-border-gray p-10 hover-glow transition-all duration-300 group cursor-pointer"
                style={{ borderRadius: '2px' }}
              >
                <Icon className="w-6 h-6 text-accent-blue mb-6" strokeWidth={2} />

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-base text-text-primary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
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
