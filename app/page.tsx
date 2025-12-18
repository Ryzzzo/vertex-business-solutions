'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/vx/Navigation';
import HeroSection from '@/components/vx/HeroSection';

const SmoothScroll = dynamic(() => import('@/components/vx/SmoothScroll'), {
  ssr: false,
});

const ServicesSection = dynamic(() => import('@/components/vx/ServicesSection'), {
  loading: () => null,
  ssr: false
});

const FeaturedProjectSection = dynamic(() => import('@/components/vx/FeaturedProjectSection'), {
  loading: () => null,
  ssr: false
});

const TestimonialsSection = dynamic(() => import('@/components/vx/TestimonialsSection'), {
  loading: () => null,
  ssr: false
});

const HowWeWorkSection = dynamic(() => import('@/components/vx/HowWeWorkSection'), {
  loading: () => null,
  ssr: false
});

const TechStackSection = dynamic(() => import('@/components/vx/TechStackSection'), {
  loading: () => null,
  ssr: false
});

const AboutSection = dynamic(() => import('@/components/vx/AboutSection'), {
  loading: () => null,
  ssr: false
});

const PricingSection = dynamic(() => import('@/components/vx/PricingSection'), {
  loading: () => null,
  ssr: false
});

const ContactSection = dynamic(() => import('@/components/vx/ContactSection'), {
  loading: () => null,
  ssr: false
});

const Footer = dynamic(() => import('@/components/vx/Footer'), {
  loading: () => null,
  ssr: false
});

function PageContent({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <SmoothScroll>{children}</SmoothScroll>;
}

export default function Home() {
  return (
    <PageContent>
      <main className="min-h-screen bg-space-navy text-light-gray overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <FeaturedProjectSection />
        <TestimonialsSection />
        <HowWeWorkSection />
        <TechStackSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </main>
    </PageContent>
  );
}
