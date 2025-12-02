'use client';

import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import FadeUpSection from './FadeUpSection';

const projects = [
  {
    id: 1,
    title: 'Civic Strategy Partners',
    subtitle: 'Government Consultant Website',
    description: 'Professional website for a government contracting consultant with HubSpot blog integration and strategic service positioning.',
    tech: ['React', 'HubSpot API', 'Vercel'],
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://civicstrategypartners.com',
    badge: 'Live Client Project',
    badgeType: 'live',
  },
  {
    id: 2,
    title: 'Executive Analytics Dashboard',
    subtitle: 'Business Intelligence Demo',
    description: 'Real-time KPI tracking with multi-source data visualization and interactive reporting.',
    tech: ['React', 'Chart.js', 'Tailwind'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    badge: 'Concept Demo',
    badgeType: 'concept',
  },
  {
    id: 3,
    title: 'ServicePro CRM',
    subtitle: 'Field Service Management',
    description: 'Customer management for service businesses with scheduling, job tracking, and automated follow-ups.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    badge: 'Concept Demo',
    badgeType: 'concept',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-space-navy" />

      <div className="container relative z-10">
        <FadeUpSection className="text-center mb-20">
          <h2 className="heading-2 text-glow mb-4">Featured Work</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Solutions built for real businesses
          </p>
        </FadeUpSection>

        <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <FadeUpSection
              key={project.id}
              delay={index * 0.15}
              className="group relative overflow-hidden rounded-[24px] cursor-pointer h-[420px]"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-space-navy via-space-navy/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-400" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-transform duration-400 group-hover:translate-y-[-8px]">
                <div className="glass-strong rounded-[20px] p-8 transform transition-all duration-400">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[22px] font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-soft-gray">{project.subtitle}</p>
                    </div>
                    <Badge
                      className={`${
                        project.badgeType === 'live'
                          ? 'bg-green-500/20 border-green-400/40 text-green-300'
                          : 'bg-gray-500/20 border-gray-400/30 text-gray-300'
                      } border px-3 py-1 rounded-[20px] text-xs whitespace-nowrap`}
                    >
                      {project.badgeType === 'live' && '✓ '}
                      {project.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-light-gray mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-calm-blue/15 border border-calm-blue/30 text-sky-blue px-3 py-1 rounded-[20px] text-xs hover:bg-calm-blue/25 transition-colors"
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
                      className="inline-flex items-center gap-2 text-sm text-calm-blue hover:text-sky-blue transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 border border-white/8 rounded-[24px] group-hover:border-calm-blue/50 transition-all duration-400 group-hover:shadow-[0_8px_32px_rgba(74,144,226,0.2)]" />
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
