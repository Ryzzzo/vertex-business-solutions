'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, BarChart3, Settings } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Custom CRM Systems',
    description: 'Sales pipelines, contact management, and analytics dashboards that scale with your team and adapt to your workflow',
  },
  {
    icon: BarChart3,
    title: 'Business Dashboards',
    description: 'Real-time data visualization and reporting tools that transform complex data into clear, actionable insights',
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description: 'Custom applications that streamline repetitive processes, eliminate manual work, and boost operational efficiency',
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-navy via-dark-blue to-space-navy opacity-50" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-glow mb-4">What I Build</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Modern business applications that solve real problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass rounded-[24px] p-12 hover-glow group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-calm-blue/5 rounded-full blur-3xl" />

                <Icon className="w-14 h-14 text-calm-blue mb-6" strokeWidth={1.5} />

                <h3 className="text-[26px] font-semibold text-white mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-base text-light-gray leading-[1.7]">
                  {service.description}
                </p>

                <div className="absolute bottom-6 right-6 w-12 h-12 border-t-2 border-r-2 border-calm-blue/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
