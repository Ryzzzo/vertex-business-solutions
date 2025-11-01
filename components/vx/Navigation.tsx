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
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

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
        isScrolled ? 'glass-strong' : 'glass-subtle'
      } border-b border-white/5`}
      style={{
        height: isScrolled ? '70px' : '80px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="container h-full flex items-center justify-between">
        <button
          onClick={() => scrollToSection('#hero')}
          className="flex flex-col items-start group"
        >
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-calm-blue transition-colors">
            VX
          </span>
          {!isScrolled && (
            <span className="text-[11px] tracking-widest text-soft-gray uppercase transition-opacity duration-300">
              Vertex
            </span>
          )}
        </button>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-[15px] transition-all duration-300 relative ${
                activeSection === link.href.replace('#', '')
                  ? 'text-calm-blue'
                  : 'text-light-gray hover:text-calm-blue'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-calm-blue" />
              )}
              {activeSection !== link.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-calm-blue group-hover:w-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="glass-subtle hover:bg-calm-blue/20 border border-calm-blue text-white h-[42px] px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-calm-blue/30"
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
        <div className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-white/5 animate-fade-in-up">
          <div className="container py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block text-light-gray hover:text-calm-blue transition-colors text-left w-full py-3"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-calm-blue hover:bg-sky-blue text-white w-full rounded-xl h-12"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
