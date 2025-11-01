'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Enterprise CRM System',
    category: 'CRM Systems',
    description: 'Full-featured customer relationship management platform',
    fullDescription: 'Built a comprehensive CRM system for a Fortune 500 company, handling 50,000+ customer interactions daily. Features include lead management, sales pipeline tracking, automated email campaigns, and advanced analytics.',
    challenge: 'The client needed to consolidate data from 5 different legacy systems while maintaining business continuity.',
    solution: 'Developed a phased migration strategy with a modern React/Node.js stack, implementing real-time data sync and a comprehensive API layer.',
    results: '40% increase in sales team productivity, 60% reduction in data entry time, and 99.9% uptime.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    category: 'Dashboards',
    description: 'Interactive dashboard with live data visualization',
    fullDescription: 'Created a real-time analytics platform for an e-commerce business processing millions of transactions. Features dynamic charts, customizable widgets, and predictive analytics.',
    challenge: 'Handle massive data streams and provide insights in under 2 seconds while supporting 500+ concurrent users.',
    solution: 'Implemented a microservices architecture with WebSocket connections, time-series database, and intelligent caching strategies.',
    results: 'Processing 10M+ events per day with <1s latency, enabling data-driven decisions that increased revenue by 25%.',
    tech: ['Next.js', 'TypeScript', 'TimescaleDB', 'GraphQL', 'Docker'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'Inventory Management System',
    category: 'Tools',
    description: 'Smart inventory tracking with predictive restocking',
    fullDescription: 'Developed an AI-powered inventory management system for a retail chain with 200+ locations. Includes barcode scanning, automated reordering, and demand forecasting.',
    challenge: 'Synchronize inventory across hundreds of stores in real-time while predicting stock needs.',
    solution: 'Built a distributed system with edge computing capabilities and machine learning models for demand prediction.',
    results: '35% reduction in overstock, 50% decrease in stockouts, saving $2M annually.',
    tech: ['React Native', 'Python', 'TensorFlow', 'MongoDB', 'Azure'],
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    title: 'Patient Management Portal',
    category: 'CRM Systems',
    description: 'HIPAA-compliant healthcare management system',
    fullDescription: 'Built a secure patient management platform for a healthcare network serving 100,000+ patients. Features appointment scheduling, electronic health records, telemedicine integration, and billing.',
    challenge: 'Ensure HIPAA compliance while providing seamless user experience for patients and healthcare providers.',
    solution: 'Implemented end-to-end encryption, audit logging, and role-based access control with a modern, intuitive interface.',
    results: '70% reduction in appointment no-shows, 45% improvement in patient satisfaction scores.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'GCP'],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 5,
    title: 'Financial Trading Dashboard',
    category: 'Dashboards',
    description: 'High-performance trading interface with live market data',
    fullDescription: 'Created a professional trading platform for institutional investors with real-time market data, advanced charting, algorithmic trading capabilities, and risk management tools.',
    challenge: 'Display and process thousands of market updates per second while maintaining sub-millisecond latency.',
    solution: 'Utilized WebSocket connections, canvas-based rendering for charts, and web workers for data processing.',
    results: 'Handling 50,000+ price updates/second with <10ms latency, managing $500M+ in daily trades.',
    tech: ['React', 'D3.js', 'WebSocket', 'Kafka', 'Kubernetes'],
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 6,
    title: 'Project Management Suite',
    category: 'Tools',
    description: 'Collaborative workspace for distributed teams',
    fullDescription: 'Developed a comprehensive project management platform for remote teams. Features include task boards, time tracking, resource allocation, document collaboration, and video conferencing.',
    challenge: 'Create a unified platform to replace 8 different tools while ensuring seamless collaboration across time zones.',
    solution: 'Built a modular architecture with real-time sync, offline support, and integrations with popular tools.',
    results: '50% reduction in tool costs, 30% improvement in project delivery time, used by 5,000+ team members.',
    tech: ['Next.js', 'Supabase', 'Tailwind', 'WebRTC', 'Vercel'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const categories = ['All', 'CRM Systems', 'Dashboards', 'Tools'];

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-darker via-black to-navy-darker" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
            Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Delivering exceptional results for businesses across industries
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-electric-blue to-vibrant-purple text-white shadow-lg shadow-electric-blue/50'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group glass rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/50">
                      {project.category}
                    </Badge>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-navy-dark/80 backdrop-blur-sm"
                  >
                    <Button className="bg-gradient-to-r from-electric-blue to-vibrant-purple">
                      View Details
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold font-space mb-3 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 glass rounded-full text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-dark rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/50 mb-4">
                    {selectedProject.category}
                  </Badge>
                  <h3 className="text-4xl font-bold font-space gradient-text mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xl text-gray-300">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-electric-blue mb-3">Challenge</h4>
                  <p className="text-gray-300">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-vibrant-purple mb-3">Solution</h4>
                  <p className="text-gray-300">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-vibrant-cyan mb-3">Results</h4>
                  <p className="text-gray-300">{selectedProject.results}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass rounded-lg text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
