import type { Metadata } from 'next';
import StudioClient from '../../components/studio/StudioClient';

export const metadata: Metadata = {
  title: 'Studio Philosophy & Design Team',
  description: 'Discover Archio Designs’ architectural philosophy, leadership team, firm chronology, and design honors in Lalitpur, Nepal.',
  alternates: {
    canonical: 'https://archiodesigns.com/studio',
  },
  openGraph: {
    title: 'Studio Philosophy & Design Team | Archio Designs',
    description: 'Discover Archio Designs’ architectural philosophy, leadership team, firm chronology, and design honors in Lalitpur, Nepal.',
    url: 'https://archiodesigns.com/studio',
    siteName: 'Archio Designs',
    images: [
      {
        url: '/og-studio.png',
        width: 1200,
        height: 630,
        alt: 'Archio Designs Studio Philosophy & Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Philosophy & Design Team | Archio Designs',
    description: 'Discover Archio Designs’ architectural philosophy, leadership team, firm chronology, and design honors.',
    images: ['/og-studio.png'],
  },
};

export default function StudioPage() {
  return <StudioClient />;
}
