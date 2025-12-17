'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/vx/Navigation';
import HeroSection from '@/components/vx/HeroSection';
import SmoothScroll from '@/components/vx/SmoothScroll';
import CustomCursor from '@/components/vx/CustomCursor';

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

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
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
    </SmoothScroll>
  );
}
