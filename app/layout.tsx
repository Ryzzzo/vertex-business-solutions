import './globals.css';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vertexapps.dev'),
  title: 'Astral AI | AI Data Analytics & Real-Time Pattern Detection',
  description: 'Transform your data with Astral AI. Advanced AI data analytics platform delivering real-time pattern detection and actionable insights. Start detecting patterns today.',
  keywords: 'AI data analytics, real-time pattern detection, data insights, machine learning, predictive analytics, AI analytics platform, data intelligence, pattern recognition',
  authors: [{ name: 'Astral AI' }],
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
    url: 'https://vertexapps.dev',
    siteName: 'Astral AI',
    title: 'Astral AI | AI Data Analytics & Real-Time Pattern Detection',
    description: 'Transform your data with Astral AI. Advanced AI data analytics platform delivering real-time pattern detection and actionable insights.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Astral AI - AI Data Analytics Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astral AI | AI Data Analytics & Real-Time Pattern Detection',
    description: 'Transform your data with Astral AI. Advanced AI data analytics platform delivering real-time pattern detection and actionable insights.',
    images: ['/twitter-image.jpg'],
    creator: '@astralai',
  },
  alternates: {
    canonical: 'https://vertexapps.dev',
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
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Astral AI',
              description: 'Advanced AI data analytics platform delivering real-time pattern detection and actionable insights',
              url: 'https://vertexapps.dev',
              logo: 'https://vertexapps.dev/logo.png',
              sameAs: [
                'https://twitter.com/astralai',
                'https://linkedin.com/company/astralai',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'contact@vertexapps.dev',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              foundingDate: '2024',
              keywords: 'AI data analytics, real-time pattern detection, data insights, machine learning, predictive analytics',
              brand: {
                '@type': 'Brand',
                name: 'Astral AI',
              },
              offers: {
                '@type': 'Offer',
                category: 'AI Data Analytics Services',
                description: 'Real-time pattern detection and AI-powered data insights',
              },
            }),
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
