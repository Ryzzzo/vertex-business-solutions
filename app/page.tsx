'use client';

import Navigation from '@/components/vx/Navigation';
import HeroSection from '@/components/vx/HeroSection';
import ServicesSection from '@/components/vx/ServicesSection';
import PortfolioSection from '@/components/vx/PortfolioSection';
import TestimonialsSection from '@/components/vx/TestimonialsSection';
import HowWeWorkSection from '@/components/vx/HowWeWorkSection';
import TechStackSection from '@/components/vx/TechStackSection';
import AboutSection from '@/components/vx/AboutSection';
import PricingSection from '@/components/vx/PricingSection';
import ContactSection from '@/components/vx/ContactSection';
import Footer from '@/components/vx/Footer';
import SmoothScroll from '@/components/vx/SmoothScroll';
import CustomCursor from '@/components/vx/CustomCursor';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="min-h-screen bg-space-navy text-light-gray overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
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
