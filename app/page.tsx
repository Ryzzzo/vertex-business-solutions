'use client';

import Navigation from '@/components/vertex/Navigation';
import HeroSection from '@/components/vertex/HeroSection';
import ServicesSection from '@/components/vertex/ServicesSection';
import PortfolioSection from '@/components/vertex/PortfolioSection';
import TechStackSection from '@/components/vertex/TechStackSection';
import AboutSection from '@/components/vertex/AboutSection';
import ContactSection from '@/components/vertex/ContactSection';
import Footer from '@/components/vertex/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
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
