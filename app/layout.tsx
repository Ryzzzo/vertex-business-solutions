import './globals.css';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vertexapps.dev'),
  title: 'Custom Business Applications | Vertex Business Solutions',
  description: 'Charlotte-based developer creating custom websites, dashboards, and CRM systems for growing businesses. Modern web applications that solve real problems.',
  keywords: 'custom business applications, business websites, custom dashboards, CRM systems, workflow automation, web development Charlotte, custom software development, business application developer',
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
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vertexapps.dev',
    siteName: 'Vertex Business Solutions',
    title: 'Custom Business Applications | Vertex Business Solutions',
    description: 'Charlotte-based developer creating custom websites, dashboards, and CRM systems for growing businesses. Modern web applications that solve real problems.',
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
    title: 'Custom Business Applications | Vertex Business Solutions',
    description: 'Charlotte-based developer creating custom websites, dashboards, and CRM systems for growing businesses. Modern web applications that solve real problems.',
    images: ['/twitter-image.jpg'],
    creator: '@vertexapps',
  },
  alternates: {
    canonical: 'https://www.vertexapps.dev',
  },
  verification: {
    google: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          id="structured-data-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Vertex Business Solutions',
              description: 'Custom business application development including websites, dashboards, CRM systems, and workflow automation',
              url: 'https://www.vertexapps.dev',
              logo: 'https://www.vertexapps.dev/logo.png',
              image: 'https://www.vertexapps.dev/og-image.jpg',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Charlotte',
                addressRegion: 'NC',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              email: 'contact@vertexapps.dev',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'contact@vertexapps.dev',
              },
              sameAs: [
                'https://twitter.com/vertexapps',
                'https://linkedin.com/company/vertexapps',
              ],
            }),
          }}
        />
        <Script
          id="structured-data-services"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                serviceType: 'Business Website Development',
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Vertex Business Solutions',
                  url: 'https://www.vertexapps.dev',
                },
                description: 'Custom business website development with modern design and functionality',
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
                  url: 'https://www.vertexapps.dev',
                },
                description: 'Data visualization dashboards with real-time metrics and insights',
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
                  url: 'https://www.vertexapps.dev',
                },
                description: 'Custom CRM systems tailored to your business processes',
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
                  url: 'https://www.vertexapps.dev',
                },
                description: 'Streamline business processes with custom automation and integrations',
                areaServed: {
                  '@type': 'Country',
                  name: 'United States',
                },
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
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
