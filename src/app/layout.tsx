import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/animations/SmoothScroll';
import DisableDevTools from '../components/security/DisableDevTools';
import FaviconSwitcher from '../components/layout/FaviconSwitcher';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL || 'https://archiodesigns.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Archio Designs | Premium Architecture & Interior Design Nepal',
    template: '%s | Archio Designs',
  },
  description: 'Archio Designs is an award-winning architecture and interior design firm based in Lalitpur, Nepal, crafting bespoke residential, hospitality, and commercial spaces connecting culture, site, and timeless design.',
  keywords: [
    'Architecture Nepal',
    'Interior Design Lalitpur',
    'Archio Designs',
    'Boutique Hotel Design',
    'Modern Residential Architecture',
    'Kathmandu Valley Architects',
    'Sustainable Architecture Nepal',
    'Luxury Interior Design',
  ],
  authors: [{ name: 'Archio Designs', url: siteUrl }],
  creator: 'Archio Designs',
  publisher: 'Archio Designs',
  applicationName: 'Archio Designs',
  alternates: {
    canonical: '/',
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
  icons: {
    icon: [
      { url: '/archiodesigns.png', media: '(prefers-color-scheme: light)' },
      { url: '/archiodesigns-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: [
      { url: '/archiodesigns.png', media: '(prefers-color-scheme: light)' },
      { url: '/archiodesigns-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/archiodesigns.png', media: '(prefers-color-scheme: light)' },
      { url: '/archiodesigns-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    title: 'Archio Designs | Premium Architecture & Interior Design',
    description: 'Award-winning architecture and interior design firm based in Nepal, crafting modern, culture-driven spaces.',
    url: siteUrl,
    siteName: 'Archio Designs',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Archio Designs - Architecture & Interior Design Firm',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archio Designs | Premium Architecture & Interior Design',
    description: 'Crafting spaces that connect people with culture, place, and value.',
    images: ['/og-home.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-primary-text select-none">
        <DisableDevTools />
        <FaviconSwitcher />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
