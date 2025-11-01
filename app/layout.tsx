import './globals.css';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Vertex | Business Application Development',
  description: 'Custom CRM systems, dashboards, and workflow automation built with modern frameworks. Enterprise-grade business applications for small to medium businesses.',
  keywords: 'business application developer, custom CRM, dashboards, workflow automation, React, Next.js, TypeScript',
  authors: [{ name: 'Ryan' }],
  openGraph: {
    title: 'Vertex | Business Application Development',
    description: 'Building custom business applications that scale',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
