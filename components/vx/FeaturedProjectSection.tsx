'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { BrowserFrame } from '@/components/ui/browser-frame';
import { AutoScrollImages } from '@/components/ui/auto-scroll-images';
import { PortfolioGalleryModal } from '@/components/ui/portfolio-gallery-modal';

const cspImages = [
  { src: '/csp_hero.png', alt: 'Civic Strategy Partners website hero section - federal consulting firm homepage' },
  { src: '/csp_what_we_do.png', alt: 'Civic Strategy Partners services section - government contracting expertise' },
  { src: '/csp_animated_measurables.png', alt: 'Civic Strategy Partners metrics and results - performance statistics' },
  { src: '/csp_why.png', alt: 'Civic Strategy Partners value proposition - why choose CSP' },
  { src: '/csp_dynamic_automated_blog.png', alt: 'Civic Strategy Partners blog section - HubSpot integrated articles' },
  { src: '/csp_cta.png', alt: 'Civic Strategy Partners contact section - call to action for consultations' },
];

const portfolioProjects = [
  {
    id: 'crm-dashboard',
    title: 'Sales CRM Dashboard',
    description: 'Pipeline tracking, contact management, and activity feeds for sales teams.',
    images: [
      '/2025-10-30_18_46_08-.png',
      '/2025-10-30_18_45_57-.png',
      '/2025-10-30_18_46_34-.png',
      '/2025-10-30_18_46_59-.png',
      '/2025-10-30_18_48_25-.png',
    ],
    altText: 'Sales CRM dashboard with pipeline tracking, contact management, and real-time activity feeds',
    tags: ['React', 'Supabase', 'Real-time'],
    badge: 'Interactive Demo',
    liveUrl: 'https://crm-prototype-mu.vercel.app',
  },
  {
    id: 'commission-tracker',
    title: 'Commission Tracker',
    description: 'Real-time sales performance and payout management for restaurants.',
    images: ['/live_commission_tracking_mockup.png'],
    altText: 'Restaurant commission tracking dashboard with real-time sales performance data',
    tags: ['Dashboard', 'Analytics'],
    badge: 'Concept',
  },
  {
    id: 'purchase-management',
    title: 'Purchase Management',
    description: 'Spending analytics, vendor tracking, and receipt management.',
    images: ['/purchase_management_dashboard_draft.png'],
    altText: 'Purchase management dashboard with spending analytics and vendor tracking',
    tags: ['Finance', 'Reporting'],
    badge: 'Concept',
  },
  {
    id: 'portfolio-analytics',
    title: 'Portfolio Analytics',
    description: 'Real-time portfolio tracking and performance visualization.',
    images: ['/2025-11-11_17_59_11-.png'],
    altText: 'Portfolio analytics dashboard for wealth management with performance visualization',
    tags: ['Finance', 'Data Viz'],
    badge: 'Interactive Demo',
    liveUrl: '/premium_financial_dashboard.html',
  },
];

type PortfolioProject = (typeof portfolioProjects)[number];

export default function FeaturedProjectSection() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="portfolio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-space-navy" />

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 text-center lg:text-left max-w-6xl mx-auto px-4">
              <div className="lg:w-1/2 space-y-5">
                <Badge className="bg-calm-blue/20 border-calm-blue/40 text-sky-blue px-4 py-1.5 rounded-full text-sm">
                  Featured Project
                </Badge>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Government Consulting Firm Website
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Professional website for a federal contracting consultant.
                  Modern design, fast performance, mobile-optimized.
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {['React', 'HubSpot API', 'Vercel', 'Responsive'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://civicstrategypartners.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-calm-blue hover:bg-calm-blue/90 text-white font-medium rounded-full transition-all duration-300 group"
                >
                  View Live Site
                  <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          }
        >
          <BrowserFrame url="civicstrategypartners.com">
            <AutoScrollImages images={cspImages} />
          </BrowserFrame>
        </ContainerScroll>

        <div className="container pb-24 md:pb-32">
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
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer group relative block overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-calm-blue/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-calm-blue/10"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.altText}
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

                    <div className="mt-3 flex items-center gap-1.5 text-sky-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <PortfolioGalleryModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
