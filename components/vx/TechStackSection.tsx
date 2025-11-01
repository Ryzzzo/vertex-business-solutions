'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
];

export default function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-navy via-midnight-blue to-space-navy opacity-60" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-glow mb-4">Technology Stack</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Modern frameworks and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
              style={{
                animation: `float ${4 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="glass w-[100px] h-[100px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-calm-blue/50 group-hover:shadow-[0_8px_24px_rgba(74,144,226,0.2)]">
                <div className="w-12 h-12 bg-light-gray group-hover:bg-calm-blue transition-colors duration-300 rounded" style={{ maskImage: 'linear-gradient(black, black)' }} />
              </div>
              <span className="text-sm text-soft-gray text-center group-hover:text-calm-blue transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
