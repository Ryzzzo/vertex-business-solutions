'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const cspScreenshots = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

const supportingProjects = [
  {
    id: 2,
    title: 'Executive Analytics Dashboard',
    subtitle: 'Business Intelligence Demo',
    description: 'Real-time KPI tracking with multi-source data visualization.',
    tech: ['React', 'Chart.js', 'Tailwind'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Concept Demo',
  },
  {
    id: 3,
    title: 'ServicePro CRM',
    subtitle: 'Field Service Management',
    description: 'Customer management with scheduling and job tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Concept Demo',
  },
];

export default function FeaturedProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [20, 0]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.85, 1]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -50]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.6, 1]),
    springConfig
  );

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-space-navy" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-glow mb-4">Featured Work</h2>
            <p className="text-lg text-soft-gray max-w-2xl mx-auto">
              Solutions built for real businesses
            </p>
          </motion.div>
        </div>

        <div
          ref={containerRef}
          className="relative"
          style={{ perspective: '1000px' }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <Badge className="bg-calm-blue/20 border-calm-blue/40 text-sky-blue px-4 py-1.5 rounded-full text-sm mb-6">
                Featured Project
              </Badge>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Government Consulting Firm Website
              </h3>

              <p className="text-lg text-light-gray mb-6 leading-relaxed">
                Professional website for a federal contracting consultant.
                Modern design, fast performance, mobile-optimized.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'HubSpot API', 'Vercel', 'Responsive'].map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-white/5 border border-white/10 text-soft-gray px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <a
                href="https://civicstrategypartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-calm-blue hover:bg-calm-blue/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:gap-4 group"
              >
                View Live Site
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              style={{
                rotateX,
                scale,
                y: translateY,
                opacity,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="browser-url">
                    <span className="url-text">civicstrategypartners.com</span>
                  </div>
                  <div className="browser-actions">
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                </div>

                <div className="browser-content">
                  <div className="screenshot-scroll">
                    {cspScreenshots.map((screenshot, index) => (
                      <div key={index} className="screenshot-item">
                        <img
                          src={screenshot}
                          alt={`CSP website section ${index + 1}`}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-calm-blue/20 via-transparent to-sky-blue/20 rounded-3xl blur-3xl -z-10 opacity-50" />
            </motion.div>
          </div>
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">More Work</h3>
            <p className="text-soft-gray">Concept demonstrations and case studies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-deep-space/50 border border-white/5 hover:border-calm-blue/30 transition-all duration-400"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/50 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-soft-gray">{project.subtitle}</p>
                    </div>
                    <Badge className="bg-gray-500/20 border-gray-400/30 text-gray-300 px-2.5 py-0.5 rounded-full text-xs">
                      {project.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-light-gray mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-calm-blue/10 border border-calm-blue/20 text-sky-blue px-2 py-0.5 rounded-full text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
