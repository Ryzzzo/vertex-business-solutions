'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  { name: 'Bolt.new', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
];

export default function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech" className="relative py-24 bg-bg-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Technology Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div
                className="w-12 h-12 flex items-center justify-center border border-border-gray bg-bg-primary transition-colors duration-300 group-hover:border-accent-blue"
                style={{ borderRadius: '2px' }}
              >
                <div className="w-8 h-8 bg-text-primary group-hover:bg-accent-blue transition-colors duration-300" style={{ borderRadius: '2px' }} />
              </div>
              <span className="text-sm text-text-secondary text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="80"
            x2="1200"
            y2="0"
            stroke="#44494D"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
