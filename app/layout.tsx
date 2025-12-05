import './globals.css';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'VX | Vertex Business Solutions - Custom Business Application Development',
  description: 'Custom CRM systems, dashboards, and workflow automation built with modern frameworks. Enterprise-grade business applications that solve real problems for growing businesses.',
  keywords: 'business application developer, custom CRM, dashboards, workflow automation, React, Next.js, TypeScript, enterprise software',
  authors: [{ name: 'Vertex Business Solutions' }],
  openGraph: {
    title: 'VX | Vertex Business Solutions',
    description: 'Custom business applications that scale with your team',
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
