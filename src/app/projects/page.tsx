import type { Metadata } from 'next';
import ProjectsClient from '../../components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Selected Architectural & Interior Projects',
  description: 'Explore Archio Designs’ portfolio of luxury residential homes, boutique hotels, commercial lounges, interior design, and heritage restorations in Nepal.',
  alternates: {
    canonical: 'https://archiodesigns.com/projects',
  },
  openGraph: {
    title: 'Selected Architectural & Interior Projects | Archio Designs',
    description: 'Portfolio of luxury residential homes, boutique hotels, commercial lounges, interior design, and heritage restorations in Nepal.',
    url: 'https://archiodesigns.com/projects',
    siteName: 'Archio Designs',
    images: [
      {
        url: '/archiodesigns.png',
        width: 1200,
        height: 630,
        alt: 'Archio Designs Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Architectural & Interior Projects | Archio Designs',
    description: 'Portfolio of luxury residential homes, boutique hotels, commercial lounges, interior design, and heritage restorations in Nepal.',
    images: ['/archiodesigns.png'],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
