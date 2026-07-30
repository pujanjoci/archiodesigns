import type { Metadata } from 'next';
import ContactClient from '../../components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Studio & Project Inquiry',
  description: 'Connect with Archio Designs in Chakupat, Lalitpur. Submit a project brief for residential architecture, hotel interiors, commercial design, or renovation consultations.',
  alternates: {
    canonical: 'https://archiodesigns.com/contact',
  },
  openGraph: {
    title: 'Contact Studio & Project Inquiry | Archio Designs',
    description: 'Connect with Archio Designs in Chakupat, Lalitpur. Submit a project brief for residential architecture, hotel interiors, commercial design, or renovation consultations.',
    url: 'https://archiodesigns.com/contact',
    siteName: 'Archio Designs',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Archio Designs Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Studio & Project Inquiry | Archio Designs',
    description: 'Connect with Archio Designs in Chakupat, Lalitpur. Submit a project brief for your architectural vision.',
    images: ['/og-contact.png'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
