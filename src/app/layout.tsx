import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Background from '@/components/layout/Background';
import ScrollToTop from '@/components/layout/ScrollToTop';
import LogoAnimation from '@/components/layout/LogoAnimation';

export const metadata: Metadata = {
  title: 'Interaction Designer | Portfolio',
  description:
    'Blending Geometric Precision with Liquid Motion to craft immersive digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Syne:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#F5F0E8] font-sans overflow-x-hidden relative">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <LogoAnimation />
        <Background />
        <Header />
        <main id="main-content" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32 min-h-screen flex flex-col items-center">
          <div className="w-full max-w-7xl">{children}</div>
        </main>
        <footer className="relative z-10 text-center py-8 text-[#F5F0E8]/60 text-sm font-mono uppercase tracking-wider border-t-2 border-[#F5F0E8]/25">
          <p>&copy; {new Date().getFullYear()} Interaction Designer. All rights reserved.</p>
        </footer>
        <ScrollToTop />
      </body>
    </html>
  );
}
