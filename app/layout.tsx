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
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
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
    serviceType: ['Web Development', 'Custom Software Development', 'CRM Development', 'Business Automation'],
  };

  const servicesSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Business Website Development',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vertex Business Solutions',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Custom Dashboard Development',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vertex Business Solutions',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'CRM System Development',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vertex Business Solutions',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Workflow Automation & Integration',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vertex Business Solutions',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
  ];

  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="services-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JMBHGHJWGY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JMBHGHJWGY');
          `}
        </Script>
        <Script
          id="chatbase-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="DxHbjHt8UTb0OXB7-Kawu";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `,
          }}
        />
      </body>
    </html>
  );
}
