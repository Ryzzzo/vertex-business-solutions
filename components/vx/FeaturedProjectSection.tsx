'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const cspImages = [
  '/csp_hero.png',
  '/csp_what_we_do.png',
  '/csp_animated_measurables.png',
  '/csp_why.png',
  '/csp_dynamic_automated_blog.png',
  '/csp_cta.png',
];

const portfolioProjects = [
  {
    id: 1,
    title: 'Sales CRM Dashboard',
    description: 'Pipeline tracking, contact management, and activity feeds',
    image: '/2025-10-30_18_46_08-.png',
    badge: 'Interactive Demo',
    link: 'https://crm-prototype-mu.vercel.app',
  },
  {
    id: 2,
    title: 'Commission Tracker',
    description: 'Real-time sales performance and payout management',
    image: '/live_commission_tracking_mockup.png',
    badge: 'Concept',
    link: null,
  },
  {
    id: 3,
    title: 'Purchase Management',
    description: 'Spending analytics, vendor tracking, and receipt management',
    image: '/purchase_management_dashboard_draft.png',
    badge: 'Concept',
    link: null,
  },
  {
    id: 4,
    title: 'Portfolio Analytics',
    description: 'Real-time portfolio tracking and performance visualization',
    image: '/2025-11-11_17_59_11-.png',
    badge: 'Concept',
    link: null,
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
                    {cspImages.map((image, index) => (
                      <div key={index} className="screenshot-item">
                        <img
                          src={image}
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
            <p className="text-soft-gray">Dashboards & applications built for real business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {portfolioProjects.map((project, index) => {
              const CardWrapper = project.link ? 'a' : 'div';
              const linkProps = project.link
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardWrapper
                    {...linkProps}
                    className="group relative block overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-calm-blue/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-calm-blue/10"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/30 to-transparent" />
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-sky-blue transition-colors">
                          {project.title}
                        </h4>
                        <Badge
                          className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs ${
                            project.badge === 'Interactive Demo'
                              ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
                              : 'bg-gray-500/20 border-gray-400/30 text-gray-300'
                          }`}
                        >
                          {project.badge}
                        </Badge>
                      </div>

                      <p className="text-sm text-light-gray">
                        {project.description}
                      </p>

                      {project.link && (
                        <div className="mt-3 flex items-center gap-1.5 text-sky-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>View Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
