'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'CRM Dashboard Pro',
    description: 'Complete customer relationship management system with sales pipeline and analytics',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://crm-dashboard-v1.bolt.host/',
    large: true,
  },
  {
    id: 2,
    title: 'Business Intelligence Suite',
    description: 'Real-time reporting dashboard with data visualization',
    tech: ['Next.js', 'Chart.js', 'Vercel'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    large: false,
  },
  {
    id: 3,
    title: 'Inventory Management System',
    description: 'Track products, manage stock levels, and generate reports',
    tech: ['React', 'PostgreSQL', 'Node.js'],
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    large: false,
  },
];

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="relative py-24 bg-bg-primary">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Featured Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-bg-secondary border border-border-gray overflow-hidden hover-glow transition-all duration-300 group ${
                project.large ? 'md:col-span-2' : ''
              }`}
              style={{ borderRadius: '2px' }}
            >
              <div className="relative overflow-hidden" style={{ height: project.large ? '400px' : '280px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-text-primary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-border-gray text-text-primary rounded-sm px-2 py-1 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-blue hover:underline inline-flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
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
            y1="0"
            x2="1200"
            y2="80"
            stroke="#44494D"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
