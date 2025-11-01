'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TechStackSection from '@/components/TechStackSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-navy-darker text-white overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TechStackSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </main>
    </>
  );
}
