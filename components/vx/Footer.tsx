'use client';

import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-space-navy border-t border-white/5 py-12">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-[13px] text-subtle-purple text-center">
            © 2025 Vertex Business Solutions • Custom Business Application Development
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-subtle-purple hover:text-calm-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-subtle-purple hover:text-calm-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[13px] text-subtle-purple hover:text-calm-blue transition-colors"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
