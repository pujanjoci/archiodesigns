import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Compass, Layout, HardHat, RefreshCw, Briefcase, Box, Sparkles } from 'lucide-react';
import { services } from '../../data/services';
import Reveal from '../../components/animations/Reveal';

export const metadata: Metadata = {
  title: 'Architectural, Interior & Construction Services',
  description: 'Explore Archio Designs comprehensive services in architectural planning, interior styling, turnkey construction, heritage renovation, structural consultancy, and 3D visualization in Nepal.',
  alternates: {
    canonical: 'https://archiodesigns.com/services',
  },
  openGraph: {
    title: 'Architectural, Interior & Construction Services | Archio Designs',
    description: 'Comprehensive architectural planning, interior styling, turnkey construction, heritage renovation, consultancy, and 3D visualization.',
    url: 'https://archiodesigns.com/services',
    siteName: 'Archio Designs',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Archio Designs Architectural & Interior Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architectural, Interior & Construction Services | Archio Designs',
    description: 'Comprehensive architectural planning, interior styling, turnkey construction, heritage renovation, consultancy, and 3D visualization.',
    images: ['/og-services.png'],
  },
};

export default function Services() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'architecture': return <Compass className="w-6 h-6 text-accent" />;
      case 'interior-design': return <Layout className="w-6 h-6 text-accent" />;
      case 'construction': return <HardHat className="w-6 h-6 text-accent" />;
      case 'renovation': return <RefreshCw className="w-6 h-6 text-accent" />;
      case 'consultancy': return <Briefcase className="w-6 h-6 text-accent" />;
      case 'visualization': return <Box className="w-6 h-6 text-accent" />;
      default: return <Sparkles className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <div className="bg-white text-primary-text min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 md:mb-24">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Capabilities & Disciplines
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Services & Expertise
          </h1>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-light">
            We provide comprehensive services from the initial conceptual brief to structural detailing, custom interior styling, and on-site construction supervision across Lalitpur and nationwide.
          </p>
        </div>

        {/* Services Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#FAFAFA] border border-border-custom p-8 flex flex-col justify-between space-y-6 hover:border-accent transition-colors shadow-sm rounded-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent font-bold">0{idx + 1}</span>
                  <div className="p-2 bg-white border border-border-custom">{getServiceIcon(service.id)}</div>
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-primary-text uppercase">
                  {service.title}
                </h3>
                <p className="text-xs text-secondary-text font-light leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-custom">
                <a
                  href={`#${service.id}`}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-primary-text hover:text-accent font-semibold transition-colors"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation Menu */}
        <div className="border-b border-border-custom pb-6 mb-24 overflow-x-auto no-scrollbar">
          <nav className="flex space-x-8 md:space-x-12 min-w-max">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="font-heading text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent transition-colors font-medium"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Detailed Services Breakdown */}
        <div className="space-y-36 md:space-y-48">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
              >
                {/* Narrative & details block */}
                <div className={`lg:col-span-5 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <span className="font-heading text-xs text-accent font-semibold block">
                      0{index + 1} &nbsp;/&nbsp; Service Specification
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-text uppercase">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Details Bullet List */}
                  <div className="space-y-4 border-t border-border-custom pt-8">
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-text">
                      Scope of Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs text-secondary-text leading-relaxed">
                          <Check size={14} className="text-accent mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group font-semibold"
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Photo & step workflow block */}
                <div className={`lg:col-span-7 space-y-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Service Hero Photo */}
                  <Reveal type="clip-path" direction="up" duration={1.2}>
                    <div className="relative aspect-[16/9] w-full bg-[#FAFAFA] overflow-hidden shadow-xl border border-neutral-200 rounded-none">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-w-1024px) 100vw, 700px"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>

                  {/* Step Workflow Grid */}
                  <div className="space-y-6">
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-text">
                      Execution Phases
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.workflow.map((step) => (
                        <div
                          key={step.step}
                          className="p-5 border border-border-custom bg-[#FAFAFA] space-y-2 hover:border-accent transition-colors rounded-none"
                        >
                          <span className="font-mono text-xs text-accent font-bold block">
                            PHASE {step.step}
                          </span>
                          <h5 className="font-heading text-sm font-bold text-primary-text">
                            {step.title}
                          </h5>
                          <p className="text-xs text-secondary-text font-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
