import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin } from 'lucide-react';
import { projects } from '../../../data/projects';
import Reveal from '../../../components/animations/Reveal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} — ${project.category} Project`;
  const description = `${project.title} (${project.location}, ${project.year}). ${project.description.slice(0, 150)}...`;
  const canonicalUrl = `https://archiodesigns.com/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.category} Architecture`,
      `${project.location} Design`,
      'Archio Designs Architecture',
      'Nepal Architecture Case Study',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Archio Designs`,
      description,
      url: canonicalUrl,
      siteName: 'Archio Designs',
      type: 'article',
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} Project by Archio Designs`,
        },
        {
          url: '/archiodesigns.png',
          width: 1200,
          height: 630,
          alt: 'Archio Designs Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Archio Designs`,
      description,
      images: [project.heroImage, '/archiodesigns.png'],
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="bg-white min-h-screen">
      {/* 1. Large Edge-to-Edge Hero Image (No overlays, pure visual impact) */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* 2. Editorial Title Header (Breathes below the hero) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block mb-3">
          {project.category}
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary-text leading-none uppercase">
          {project.title}
        </h1>
      </section>

      {/* 3. Thin-Bordered Profile Box */}
      <section className="py-8 my-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="border-t border-b border-border-custom py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <h3 className="font-heading text-[10px] uppercase tracking-[0.25em] text-secondary-text font-bold">
                Project Profile
              </h3>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 text-sm font-light">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-secondary-text block">Location</span>
                <span className="text-primary-text font-medium text-xs tracking-wider uppercase">{project.location}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-secondary-text block">Year</span>
                <span className="text-primary-text font-medium text-xs tracking-wider uppercase">{project.year}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-secondary-text block">Client</span>
                <span className="text-primary-text font-medium text-xs tracking-wider uppercase">{project.client}</span>
              </div>
              <div className="space-y-1 md:col-span-2">
                <span className="text-[9px] uppercase tracking-widest text-secondary-text block">Services</span>
                <span className="text-primary-text font-medium text-xs tracking-wider uppercase leading-relaxed block">{project.services.join(', ')}</span>
              </div>
              {project.stats && project.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-secondary-text block">{stat.label}</span>
                  <span className="text-primary-text font-medium text-xs tracking-wider uppercase">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Asymmetrical Location Map Module */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Styled coordinates container on the left */}
          <div className="lg:col-span-7 border border-border-custom bg-neutral-50 aspect-[16/9] w-full flex flex-col justify-between p-8">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-accent font-semibold block">Map Coordinates</span>
              <h4 className="font-heading text-xs font-bold text-primary-text uppercase">Zone Index Check</h4>
            </div>
            <div className="h-[1px] bg-border-custom my-4" />
            <div className="tech-description text-secondary-text space-y-4">
              <p>
                Environmental analysis has been mapped to capture wind tunnels and solar paths. Materials are sourced locally within Lalitpur to reduce carbon footprints.
              </p>
            </div>
          </div>
          {/* Metadata on the right */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">Plot Index</span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-primary-text leading-snug">
              {project.location}
            </h3>
            <p className="text-xs text-secondary-text tracking-wider uppercase font-medium flex items-center space-x-2">
              <MapPin size={12} className="text-accent shrink-0" />
              <span>Latitude 27.6766° N &nbsp;|&nbsp; Longitude 85.3262° E</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Minimal Double-Lined Quote Box */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 my-12">
        <div className="border-t border-b border-border-custom py-16 text-center max-w-4xl mx-auto">
          <Reveal type="fade-up" duration={1.2}>
            <p className="font-heading text-lg sm:text-xl md:text-2xl tracking-[0.05em] leading-relaxed text-primary-text max-w-2xl mx-auto font-light">
              "{project.concept}"
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. Technical Drawings (Asymmetrical side-by-side) */}
      {project.plans && project.plans.map((plan, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={idx} className="py-16 md:py-24 border-t border-border-custom bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="border border-border-custom bg-white p-6 relative aspect-[4/3] w-full flex items-center justify-center">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    sizes="(max-w-768px) 100vw, 700px"
                    className="object-contain p-4 opacity-75"
                  />
                </div>
              </div>
              <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">Drawing 0{idx + 1}</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-primary-text">{plan.title}</h3>
                <p className="tech-description text-secondary-text">{plan.description}</p>
              </div>
            </div>
          </section>
        );
      })}

      {/* 7. Exploded diagrams (Centered studies) */}
      {project.diagrams && project.diagrams.map((diag, idx) => (
        <section key={idx} className="py-24 bg-[#FAFAFA] border-t border-b border-border-custom text-center">
          <div className="max-w-[900px] mx-auto px-6 space-y-8">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">Conceptual Model</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-primary-text">Environmental Analysis</h3>
            <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto border border-border-custom bg-white p-4">
              <Image
                src={diag}
                alt="Isometric spatial diagram"
                fill
                sizes="(max-w-1024px) 100vw, 800px"
                className="object-contain p-4 opacity-85"
              />
            </div>
          </div>
        </section>
      ))}

      {/* 8. Textures & Material Swatches */}
      {project.materials && (
        <section className="py-24 border-b border-border-custom bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-secondary-text block mb-2">04 / Tactility</span>
                <h2 className="font-heading text-xs uppercase tracking-widest font-bold">Material Swatches</h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-xs text-secondary-text leading-relaxed font-light max-w-lg">
                  Curated palettes reflecting physical authenticity and tactile longevity, responding elegantly to daylight parameters.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.materials.map((mat, idx) => (
                <div key={idx} className="border border-border-custom p-6 space-y-4">
                  {mat.image ? (
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={mat.image}
                        alt={mat.name}
                        fill
                        sizes="(max-w-768px) 100vw, 300px"
                        className="object-cover animate-fade-in"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[3/2] w-full" style={{ backgroundColor: mat.color || '#F0F0F0' }} />
                  )}
                  <h4 className="font-heading text-xs font-bold tracking-widest text-primary-text uppercase">{mat.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Immersive Alternating Gallery (Neba image rhythm) */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-36">
          <div className="mb-12">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
              05 / Architectural Photography
            </span>
            <h2 className="font-heading text-3xl uppercase tracking-wider font-bold">
              Immersive Gallery
            </h2>
          </div>

          <div className="space-y-36">
            {/* Gallery Slide 1: Full Panoramic Screen Width */}
            {project.gallery[0] && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 border border-border-custom">
                <Image
                  src={project.gallery[0]}
                  alt="Spatial Panorama"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* Gallery Slide 2: Asymmetrical Left Image, Right Text */}
            {project.gallery[1] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100 border border-border-custom">
                    <Image
                      src={project.gallery[1]}
                      alt="Workstations Showcase"
                      fill
                      sizes="(max-w-1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">Interior Perspective</span>
                  <h3 className="font-heading text-xl font-bold uppercase text-primary-text">Spatial Narrative</h3>
                  <p className="tech-description text-secondary-text">
                    {project.description}
                  </p>
                </div>
              </div>
            )}

            {/* Gallery Slide 3: Full Panoramic Screen Width */}
            {project.gallery[2] && (
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-100 border border-border-custom hidden md:block">
                <Image
                  src={project.gallery[2]}
                  alt="Panoramic Lounge"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* Gallery Slide 4: Asymmetrical Right Image, Left Text */}
            {project.gallery[3] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-5 space-y-4 lg:order-1">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">Design Philosophy</span>
                  <h3 className="font-heading text-xl font-bold uppercase text-primary-text">Concept & Volumetrics</h3>
                  <p className="tech-description text-secondary-text">
                    {project.concept}
                  </p>
                </div>
                <div className="lg:col-span-7 lg:order-2">
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100 border border-border-custom">
                    <Image
                      src={project.gallery[3]}
                      alt="Workstations Close-up"
                      fill
                      sizes="(max-w-1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 10. Execution Credits */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-8">
            Project Credits
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.credits.map((credit, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-secondary-text block">
                  {credit.role}
                </span>
                <p className="text-sm font-heading font-bold text-primary-text">
                  {credit.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Next Case Study Loop Navigation */}
      <section className="bg-[#171717] text-white">
        <Link href={`/projects/${nextProject.slug}`} scroll={true} className="block group">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-36 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block group-hover:tracking-[0.4em] transition-all duration-500">
                Up Next
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                {nextProject.title}
              </h2>
            </div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary-text transition-all duration-500">
              <ArrowRight size={24} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
}
