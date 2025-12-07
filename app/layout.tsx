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
    '@type': 'ProfessionalService',
    '@id': 'https://www.vertexapps.dev/#business',
    name: 'Vertex Business Solutions',
    alternateName: 'VX',
    url: 'https://www.vertexapps.dev',
    logo: 'https://www.vertexapps.dev/android-chrome-512x512.png',
    image: 'https://www.vertexapps.dev/og-image.jpg',
    description: 'Custom business application development using modern frameworks and AI-assisted development. We deliver professional applications in weeks, not months. Based in Charlotte, NC, serving clients nationwide.',
    email: 'contact@vertexapps.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Ryan Stacy',
      jobTitle: 'Founder & Lead Developer',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: [
      'Custom Business Applications',
      'Web Development',
      'Dashboard Development',
      'Website Design',
      'CRM Development',
      'Workflow Automation',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Kevin M.',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: "You'll be hard pressed to find better value anywhere. Ryan's pricing is very fair for the product he delivers, and he's very communicative and responsive. He's extremely friendly and I really enjoyed working with him on my project!",
        datePublished: '2024-11-01',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Gerry F.',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: "Super responsive, did great work, and covered some gaps that I didn't see.",
        datePublished: '2024-10-01',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Janelle B.',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'Ryan is an exceptionally diligent, thoughtful, and honest individual. He consistently approaches every portion of the project with care and attention to detail. I highly recommend Ryan to anyone looking for someone who embodies professionalism, respect, and genuine character.',
        datePublished: '2024-09-01',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/rystacy/',
      'https://www.upwork.com/freelancers/ryans108',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
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
