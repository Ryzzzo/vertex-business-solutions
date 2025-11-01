'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techStack = {
  Frontend: [
    { name: 'React', url: 'https://react.dev' },
    { name: 'Next.js', url: 'https://nextjs.org' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
    { name: 'Vue.js', url: 'https://vuejs.org' },
    { name: 'Framer Motion', url: 'https://www.framer.com/motion' },
  ],
  Backend: [
    { name: 'Node.js', url: 'https://nodejs.org' },
    { name: 'Express', url: 'https://expressjs.com' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org' },
    { name: 'MongoDB', url: 'https://www.mongodb.com' },
    { name: 'GraphQL', url: 'https://graphql.org' },
    { name: 'Python', url: 'https://www.python.org' },
  ],
  Cloud: [
    { name: 'AWS', url: 'https://aws.amazon.com' },
    { name: 'Vercel', url: 'https://vercel.com' },
    { name: 'Firebase', url: 'https://firebase.google.com' },
    { name: 'Docker', url: 'https://www.docker.com' },
    { name: 'Kubernetes', url: 'https://kubernetes.io' },
    { name: 'Supabase', url: 'https://supabase.com' },
  ],
  Tools: [
    { name: 'Git', url: 'https://git-scm.com' },
    { name: 'VS Code', url: 'https://code.visualstudio.com' },
    { name: 'Figma', url: 'https://www.figma.com' },
    { name: 'Postman', url: 'https://www.postman.com' },
    { name: 'Jest', url: 'https://jestjs.io' },
    { name: 'Webpack', url: 'https://webpack.js.org' },
  ],
};

export default function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech" className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-darker via-navy-dark to-navy-darker" />

      <div className="absolute inset-0 opacity-20">
        <svg className="absolute w-full h-full">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,200 Q 250,100 500,200 T 1000,200 L 1000,0 L 0,0 Z"
            fill="url(#techGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leveraging modern tools and frameworks to build robust, scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold font-space mb-6 text-electric-blue">
                {category}
              </h3>
              <div className="space-y-4">
                {technologies.map((tech, techIndex) => (
                  <motion.a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="block group relative"
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: techIndex * 0.2,
                        }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-electric-blue to-vibrant-purple"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {tech.name}
                      </span>
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ zIndex: -1 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              <span className="text-electric-blue font-bold">Always learning.</span>{' '}
              I stay up-to-date with the latest technologies and best practices to deliver
              cutting-edge solutions that give your business a competitive advantage.
            </p>
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
