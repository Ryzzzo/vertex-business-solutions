'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-primary/90 backdrop-blur-md' : 'bg-transparent'
      } border-b border-border-gray`}
      style={{ height: '70px' }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <button
          onClick={() => scrollToSection('#hero')}
          className="text-lg font-bold tracking-tight text-white"
        >
          VERTEX
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm transition-colors relative ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent-blue'
                  : 'text-text-primary hover:text-accent-blue'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-blue" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-accent-blue text-white hover:bg-accent-blue/90 rounded-sm px-6 h-10"
          >
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-border-gray">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block text-text-primary hover:text-accent-blue transition-colors text-left w-full"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-accent-blue text-white w-full rounded-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
