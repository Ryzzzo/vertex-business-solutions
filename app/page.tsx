'use client';

import Navigation from '@/components/vx/Navigation';
import HeroSection from '@/components/vx/HeroSection';
import ServicesSection from '@/components/vx/ServicesSection';
import PortfolioSection from '@/components/vx/PortfolioSection';
import TechStackSection from '@/components/vx/TechStackSection';
import AboutSection from '@/components/vx/AboutSection';
import ContactSection from '@/components/vx/ContactSection';
import Footer from '@/components/vx/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-space-navy text-light-gray overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
