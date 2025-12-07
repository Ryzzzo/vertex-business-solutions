'use client';

import { useEffect, useRef } from 'react';
import { Globe, LayoutDashboard, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import FadeUpSection from './FadeUpSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional websites that convert visitors into customers. Modern design, fast loading, mobile-optimized. From landing pages to full company sites.',
    details: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Performance',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Dashboards',
    description: 'Data visualization dashboards with real-time metrics and insights. Track KPIs, monitor performance, and make data-driven decisions.',
    details: [
      'Real-Time Data',
      'Custom Metrics',
      'User Authentication',
    ],
  },
  {
    icon: Settings,
    title: 'CRM Systems',
    description: 'Customer relationship management systems tailored to your business processes. Manage leads, track interactions, and close more deals.',
    details: [
      'Lead Management',
      'Pipeline Tracking',
      'Custom Workflows',
    ],
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description: 'Connect your tools and eliminate manual work. Form submissions to CRM, bookings to calendar, payments to receipts - all automated.',
    details: [
      'API Integrations',
      'Process Automation',
      'Data Synchronization',
    ],
  },
];

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = cardsRef.current.querySelectorAll('.service-card');

    gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === cardsRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-navy via-dark-blue to-space-navy opacity-50" />

      <div className="container relative z-10">
        <FadeUpSection className="text-center mb-20">
          <p className="text-lg text-calm-blue font-semibold mb-4">Our Services</p>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Modern business applications that solve real problems
          </p>
        </FadeUpSection>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.title}
                className="service-card glass rounded-[24px] p-10 hover-glow group cursor-pointer relative overflow-hidden"
                maxTilt={20}
                hoverGlow={true}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-calm-blue/5 rounded-full blur-3xl" />

                <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                  <Icon className="w-12 h-12 text-calm-blue mb-6" strokeWidth={1.5} />
                </div>

                <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
                  <h2 className="text-[28px] font-semibold text-white mb-3 leading-tight">
                    {service.title}
                  </h2>
                </div>

                <div style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
                  <p className="text-base text-light-gray leading-[1.7] mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="text-sm text-soft-gray flex items-center">
                        <span className="w-1.5 h-1.5 bg-calm-blue rounded-full mr-3" />
                        <h3 className="text-sm font-medium">{detail}</h3>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-6 right-6 w-12 h-12 border-t-2 border-r-2 border-calm-blue/20" />
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
