'use client';

import { Award, MapPin, Code2, Zap } from 'lucide-react';
import FadeUpSection from './FadeUpSection';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: Award, title: 'Enterprise Experience', subtitle: 'Years of Operations', count: 8 },
  { icon: Code2, title: 'Modern Stack', subtitle: 'React • Next.js • Node', count: 100 },
  { icon: MapPin, title: 'US-Based', subtitle: 'Direct Communication', count: 50 },
  { icon: Zap, title: 'Fast Delivery', subtitle: '2-Week Turnaround', count: 14 },
];

export default function AboutSection() {

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-space-navy" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center max-w-6xl mx-auto">
          <FadeUpSection className="lg:col-span-3 space-y-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-16 bg-calm-blue rounded-full" />
              <h2 className="heading-3 text-glow">Built for Real Business Needs</h2>
            </div>

            <div className="pl-6 border-l-2 border-calm-blue/40 mb-6">
              <p className="text-[17px] text-light-gray leading-[1.8] italic">
                Vertex. In mathematics, it's the point where lines converge—where separate paths meet to create something unified. That's exactly what we do: bring together your business challenges, modern technology, and years of operational expertise to create solutions that actually work.
              </p>
            </div>

            <p className="text-[17px] text-light-gray leading-[1.8]">
              I understand business operations from years of hands-on experience with enterprise systems. I've seen what works in enterprise environments and what doesn't—that knowledge drives every application I build.
            </p>

            <p className="text-[17px] text-light-gray leading-[1.8]">
              Specializing in CRM systems, dashboards, and workflow automation for growing businesses. I use modern development frameworks to deliver custom tools quickly, without the enterprise price tag. Every application is built to solve your specific challenges, not generic problems.
            </p>

            <p className="text-[17px] text-light-gray leading-[1.8]">
              Based in the US, serving clients nationwide. From initial consultation to deployment and ongoing support, you work directly with me—no account managers, no offshore teams, just straightforward communication and solutions that work.
            </p>
          </FadeUpSection>

          <FadeUpSection delay={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="glass rounded-[20px] p-8 hover-glow"
                    style={{
                      animation: `float ${6 + index}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-calm-blue mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
                    <p className="text-sm text-soft-gray">{stat.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </FadeUpSection>
        </div>
      </div>
    </section>
  );
}
