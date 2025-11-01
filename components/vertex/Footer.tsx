'use client';

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-gray py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            © 2025 Vertex • Business Application Development • Charlotte, NC
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-accent-blue transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-accent-blue transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-accent-blue transition-colors"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
