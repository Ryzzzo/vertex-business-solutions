'use client';

import { Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import LegalModal from '../LegalModal';
import { privacyPolicyContent, termsOfServiceContent, cookiePolicyContent, disclaimerContent } from '@/lib/legalContent';

type LegalType = 'privacy' | 'terms' | 'cookies' | 'disclaimer' | null;

export default function Footer() {
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);

  const getLegalContent = () => {
    switch (activeLegal) {
      case 'privacy':
        return { title: 'Privacy Policy', content: privacyPolicyContent };
      case 'terms':
        return { title: 'Terms of Service', content: termsOfServiceContent };
      case 'cookies':
        return { title: 'Cookie Policy', content: cookiePolicyContent };
      case 'disclaimer':
        return { title: 'Disclaimer', content: disclaimerContent };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getLegalContent();

  return (
    <footer className="bg-space-navy border-t border-white/5 py-12">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-[13px] text-subtle-purple text-center">
            © 2025 Vertex Business Solutions • Custom Business Application Development
          </p>

          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/rystacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle-purple hover:text-calm-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Ryzzzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle-purple hover:text-calm-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] text-subtle-purple justify-center items-center">
            <button
              onClick={() => setActiveLegal('privacy')}
              className="hover:text-calm-blue transition-colors underline underline-offset-2"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegal('terms')}
              className="hover:text-calm-blue transition-colors underline underline-offset-2"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegal('cookies')}
              className="hover:text-calm-blue transition-colors underline underline-offset-2"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegal('disclaimer')}
              className="hover:text-calm-blue transition-colors underline underline-offset-2"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={activeLegal !== null}
        onClose={() => setActiveLegal(null)}
        title={title}
        content={content}
      />
    </footer>
  );
}
