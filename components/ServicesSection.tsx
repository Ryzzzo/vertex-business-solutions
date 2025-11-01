'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Layers, Zap, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom CRM Development',
    description: 'Tailored customer relationship management systems that streamline your sales process and boost productivity.',
    large: true,
  },
  {
    icon: Layers,
    title: 'Business Dashboards',
    description: 'Real-time analytics dashboards with beautiful visualizations that turn data into actionable insights.',
    large: true,
  },
  {
    icon: Database,
    title: 'Database Integration',
    description: 'Seamless integration with existing databases and migration to modern, scalable solutions.',
    large: false,
  },
  {
    icon: Zap,
    title: 'API Development',
    description: 'Robust, secure REST and GraphQL APIs that power your business applications.',
    large: false,
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Enterprise-grade cloud infrastructure setup with automated CI/CD pipelines.',
    large: false,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for optimal user experience and conversion.',
    large: false,
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-darker via-navy-dark to-navy-darker" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-vibrant-purple rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-blue rounded-full filter blur-[150px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
            What I <span className="gradient-text">Build</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses, from concept to deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group ${
                  service.large ? 'lg:col-span-2' : 'lg:col-span-1'
                } glass rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-vibrant-purple/5 to-vibrant-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-electric-blue/50 transition-shadow duration-500"
                >
                  <Icon className="w-8 h-8 text-electric-blue" />
                </motion.div>

                <h3 className="text-2xl font-bold font-space mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-vibrant-purple to-vibrant-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
