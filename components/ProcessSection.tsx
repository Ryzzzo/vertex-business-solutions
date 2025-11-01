'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, FileText, Palette, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'Deep dive into your business needs, goals, and challenges to create a clear roadmap.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Planning',
    description: 'Detailed project planning with timeline, milestones, and resource allocation.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design',
    description: 'Creating intuitive UI/UX designs that align with your brand and user needs.',
  },
  {
    number: '04',
    icon: Code,
    title: 'Development',
    description: 'Building robust, scalable applications with clean code and best practices.',
  },
  {
    number: '05',
    icon: TestTube,
    title: 'Testing',
    description: 'Comprehensive testing to ensure quality, performance, and security.',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Deployment',
    description: 'Seamless deployment with CI/CD pipelines and monitoring setup.',
  },
  {
    number: '07',
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'Ongoing maintenance, updates, and technical support for your success.',
  },
];

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-darker via-black to-navy-darker" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vibrant-purple rounded-full filter blur-[200px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven process that delivers results, from concept to launch and beyond
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className={`flex flex-col items-center ${isEven ? 'lg:mt-0' : 'lg:mt-20'}`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue to-vibrant-purple flex items-center justify-center mb-4 glow-blue group cursor-pointer"
                    >
                      <Icon className="w-10 h-10 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue to-vibrant-purple opacity-0 group-hover:opacity-50 blur-xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                      className="text-5xl font-bold gradient-text mb-3"
                    >
                      {step.number}
                    </motion.div>

                    <h3 className="text-xl font-bold font-space mb-2 text-center">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-400 text-center max-w-[200px]">
                      {step.description}
                    </p>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                      className={`absolute top-10 ${
                        index < steps.length - 1 ? 'right-0 w-full' : ''
                      } h-0.5 bg-gradient-to-r from-electric-blue to-vibrant-purple lg:block hidden`}
                      style={{
                        transformOrigin: 'left',
                        left: '50%',
                        width: index < steps.length - 1 ? '100%' : '0',
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="absolute right-0 w-2 h-2 rounded-full bg-electric-blue"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Every project is unique, and this process adapts to your specific needs.
              Clear communication and collaboration at every step ensure we build exactly what you need.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
