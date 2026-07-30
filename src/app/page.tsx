'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { services } from '../data/services';
import Reveal, { StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import HeroStackSection from '../components/home/HeroStackSection';
import WalletServicesStack from '../components/services/WalletServicesStack';

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="bg-white text-primary-text min-h-screen">
      
      {/* 1. Scroll-Driven Hero Page Stacking Section */}
      <HeroStackSection projects={projects} />

      {/* 2. Studio Philosophy Section */}
      <section className="py-24 md:py-36 border-b border-border-custom bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-4">
              01 / Studio Vision
            </span>
            <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-primary-text font-bold">
              The Architecture of Purpose
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <Reveal type="fade-up" duration={1.2}>
              <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary-text leading-tight font-light italic">
                "We design space that connects the people with its culture, place, and underlying structural value."
              </blockquote>
            </Reveal>
            <Reveal type="fade-up" duration={1.2} delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-secondary-text leading-relaxed font-light">
                <p>
                  Founded in 2016 in Lalitpur, Archio Designs believes that architecture is not merely about physical forms but about defining human experiences. Every line drawn is an inquiry into materials, natural light, and structural context, developing highly bespoke residential and hospitality spaces.
                </p>
                <p>
                  By avoiding generic templates and unnecessary ornamentation, our projects look to achieve a timeless, elegant simplicity. We respect traditional brickwork and wood components, blending them seamlessly with exposed concrete structures and clean steel contours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Grid (Alternating Editorial layouts) */}
      <section className="py-24 md:py-36 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 border-b border-border-custom pb-6">
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
                02 / Portfolio
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-wider font-bold text-primary-text">
                Selected Works
              </h3>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Dynamic Grid */}
          <div className="space-y-28 md:space-y-40">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Block with background matching section bg (#FAFAFA) and sharp corners */}
                  <div
                    className={`lg:col-span-8 relative hover-zoom-container cursor-pointer overflow-hidden shadow-xl border border-neutral-200/60 bg-[#FAFAFA] rounded-none ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <Reveal type="clip-path" direction={isEven ? 'right' : 'left'} duration={1.2}>
                        <div className="relative aspect-[3/2] w-full bg-[#FAFAFA] overflow-hidden">
                          <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            sizes="(max-w-1024px) 100vw, 800px"
                            className="object-cover hover-zoom-img"
                          />
                        </div>
                      </Reveal>
                    </Link>
                  </div>

                  {/* Narrative Block */}
                  <div
                    className={`lg:col-span-4 flex flex-col space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
                        {project.category} &nbsp;—&nbsp; {project.year}
                      </span>
                      <h4 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary-text">
                        <Link href={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                          {project.title}
                        </Link>
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-light">
                      {project.description.slice(0, 200)}...
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group font-semibold"
                      >
                        <span>Explore Case Details</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Apple Wallet Scroll-Pinned Card Stack for Section 03 / Services */}
      <section className="py-24 md:py-36 bg-[#0B0B0C] text-white border-t border-b border-border-custom relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <WalletServicesStack services={services} />
        </div>
      </section>

      {/* 5. Statistics Counters */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Founded Year', value: '2016' },
              { label: 'Completed Works', value: '45+' },
              { label: 'Firm Members', value: '12' },
              { label: 'Design Awards', value: '08' },
            ].map((stat, idx) => (
              <StaggerItem key={idx} className="space-y-2 border-l border-accent/40 pl-6">
                <span className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary-text block">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-text block font-mono">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Selected Client Logs */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block text-center mb-12">
            04 / Selected Clients & Collaborators
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {[
              'Hotel Himalaya',
              'Sony Electronics',
              'Square Hotel',
              'Apex Fitness',
              'Lab House Ltd.',
              'Cityscape Condos',
            ].map((client) => (
              <div
                key={client}
                className="text-center font-heading text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-secondary-text py-4 px-2 border border-border-custom bg-white shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default rounded-none"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact CTA Block */}
      <section className="py-24 md:py-36 bg-[#171717] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Start a Collaboration
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight uppercase">
            Have a project?<br />Let’s build something extraordinary.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed font-light">
            We partner with visionary clients to shape custom physical experiences. Contact our office in Chakupat to schedule a briefing.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 font-heading text-xs uppercase tracking-[0.2em] bg-white text-primary-text px-9 py-4 font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-xl rounded-none"
            >
              <span>Work With Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
