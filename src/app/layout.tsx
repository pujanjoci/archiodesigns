import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/animations/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Archio Designs | Premium Architecture & Interior Design Nepal',
    template: '%s | Archio Designs',
  },
  description: 'Archio Designs is an award-winning architecture and interior design firm based in Nepal, crafting individual, aesthetically stunning solutions that connect culture, site, and timeless design.',
  keywords: ['Architecture Nepal', 'Interior Design Lalitpur', 'Archio Designs', 'Boutique Hotel Design', 'Modern Residential Architecture'],
  authors: [{ name: 'Archio Designs' }],
  metadataBase: new URL('https://archiodesigns.com'),
  openGraph: {
    title: 'Archio Designs | Premium Architecture & Interior Design',
    description: 'Award-winning architecture and interior design firm based in Nepal, crafting modern, culture-driven spaces.',
    url: 'https://archiodesigns.com',
    siteName: 'Archio Designs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archio Designs',
    description: 'Crafting spaces that connect people with culture, place, and value.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-primary-text">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
