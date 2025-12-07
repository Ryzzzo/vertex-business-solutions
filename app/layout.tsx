import './globals.css';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vertexapps.dev'),
  title: 'Vertex Business Solutions | Custom Business Applications & Websites',
  description: 'Charlotte-based developer creating custom websites, dashboards, and CRM systems for growing businesses. Modern web applications that solve real problems.',
  keywords: 'business application developer, custom CRM, dashboards, workflow automation, React, Next.js, TypeScript, enterprise software, Charlotte web developer, custom business websites',
  authors: [{ name: 'Vertex Business Solutions' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#00d4ff',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Vertex Business Solutions | Custom Business Applications & Websites',
    description: 'Charlotte-based developer creating custom websites, dashboards, and CRM systems for growing businesses. Modern web applications that solve real problems.',
    url: 'https://www.vertexapps.dev',
    siteName: 'Vertex Business Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vertex Business Solutions - Custom Business Applications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Business Solutions | Custom Business Applications & Websites',
    description: 'Charlotte-based developer creating custom websites, dashboards, and CRM systems for growing businesses. Modern web applications that solve real problems.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.vertexapps.dev',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.vertexapps.dev/#business',
    name: 'Vertex Business Solutions',
    description: 'Custom business application development including websites, dashboards, CRM systems, and workflow automation',
    url: 'https://www.vertexapps.dev',
    email: 'contact@vertexapps.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    areaServed: 'United States',
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Business Application Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Website Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Dashboard Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CRM System Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Workflow Automation & Integration',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0B1120" />
        <meta name="msapplication-TileColor" content="#0B1120" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JMBHGHJWGY"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JMBHGHJWGY');
          `}
        </Script>
      </body>
    </html>
  );
}
