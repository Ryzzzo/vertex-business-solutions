import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'Premium Business App Developer | Custom CRM & Dashboard Solutions',
  description: 'Expert business application developer specializing in custom CRM systems, enterprise dashboards, and scalable web applications. Transform your business with cutting-edge technology.',
  keywords: 'business application developer, custom CRM, enterprise dashboards, web applications, React, Next.js, TypeScript',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Premium Business App Developer',
    description: 'Building business applications that scale',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
