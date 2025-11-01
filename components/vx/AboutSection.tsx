'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, Code2 } from 'lucide-react';

const stats = [
  { icon: Award, title: 'Enterprise Experience', subtitle: '14+ Years Operations' },
  { icon: Code2, title: 'Modern Stack', subtitle: 'React • Next.js • Node' },
  { icon: MapPin, title: 'US-Based', subtitle: 'Direct Communication' },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-space-navy" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-16 bg-calm-blue rounded-full" />
              <h2 className="heading-3 text-glow">Built for Real Business Needs</h2>
            </div>

            <p className="text-[17px] text-light-gray leading-[1.8]">
              I understand business operations from 14+ years of hands-on experience with USPS systems. I've seen what works in enterprise environments and what doesn't—that knowledge drives every application I build.
            </p>

            <p className="text-[17px] text-light-gray leading-[1.8]">
              Specializing in CRM systems, dashboards, and workflow automation for growing businesses. I use modern development frameworks to deliver custom tools quickly, without the enterprise price tag. Every application is built to solve your specific challenges, not generic problems.
            </p>

            <p className="text-[17px] text-light-gray leading-[1.8]">
              Based in the US, serving clients nationwide. From initial consultation to deployment and ongoing support, you work directly with me—no account managers, no offshore teams, just straightforward communication and solutions that work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-[20px] p-8 hover-glow"
                  style={{
                    animation: `float ${6 + index}s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <Icon className="w-8 h-8 text-calm-blue mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
                  <p className="text-sm text-soft-gray">{stat.subtitle}</p>
                </motion.div>
              );
            })}

            <div className="glass rounded-[20px] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-calm-blue/10 rounded-full blur-3xl" />
              <svg
                viewBox="0 0 200 200"
                className="w-full h-auto opacity-20"
              >
                <rect x="20" y="20" width="80" height="80" fill="none" stroke="#4A90E2" strokeWidth="1" />
                <rect x="60" y="60" width="100" height="100" fill="none" stroke="#5DADE2" strokeWidth="1" />
                <line x1="20" y1="20" x2="100" y2="100" stroke="#4A90E2" strokeWidth="0.5" />
                <line x1="100" y1="20" x2="20" y2="100" stroke="#4A90E2" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
