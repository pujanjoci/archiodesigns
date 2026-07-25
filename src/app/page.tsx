'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { services } from '../data/services';
import Reveal, { StaggerContainer, StaggerItem } from '../components/animations/Reveal';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const heroProjects = projects.slice(0, 4);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);

  // Automatically cycle hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroProjects.length]);

  const handleNextHero = () => {
    setActiveHeroIdx((prev) => (prev + 1) % heroProjects.length);
  };

  const handlePrevHero = () => {
    setActiveHeroIdx((prev) => (prev - 1 + heroProjects.length) % heroProjects.length);
  };

  return (
    <div className="bg-white">
      {/* 1. Immersive Hero Slider */}
      <section className="relative h-screen overflow-hidden bg-[#171717]">
        {heroProjects.map((project, idx) => {
          const isActive = idx === activeHeroIdx;
          return (
            <div
              key={project.slug}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Photography with Edge-to-Edge display */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-100' : 'scale-110'
                }`}
              />

              {/* Editorial Text Layer */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 md:pb-32">
                <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
                      {project.category} &nbsp;—&nbsp; {project.location}
                    </span>
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                      {project.title}
                    </h2>
                  </div>
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-white hover:text-accent group transition-colors pb-1 border-b border-white/30 hover:border-accent"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Hero Slider Controllers */}
        <div className="absolute bottom-8 right-6 md:right-12 z-30 flex items-center space-x-4">
          <button
            onClick={handlePrevHero}
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-primary-text transition-all duration-300"
            aria-label="Previous Project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNextHero}
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-primary-text transition-all duration-300"
            aria-label="Next Project"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Hero Pagination Indicators */}
        <div className="absolute bottom-12 left-6 md:left-12 z-30 flex space-x-4">
          {heroProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHeroIdx(idx)}
              className={`h-0.5 transition-all duration-500 ${
                idx === activeHeroIdx ? 'w-12 bg-accent' : 'w-6 bg-white/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Studio Philosophy Section */}
      <section className="py-24 md:py-36 border-b border-border-custom">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
              01 / Studio Vision
            </span>
            <h3 className="font-heading text-2xl uppercase tracking-wider text-primary-text font-bold">
              The Architecture of Purpose
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <Reveal type="fade-up" duration={1.2}>
              <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary-text leading-tight font-light">
                "We design space that connects the people with its culture, place, and value."
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
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
                02 / Portfolio
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                Selected Works
              </h3>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Dynamic Grid */}
          <div className="space-y-32 md:space-y-48">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Block */}
                  <div
                    className={`lg:col-span-8 relative hover-zoom-container cursor-pointer overflow-hidden ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <Reveal type="clip-path" direction={isEven ? 'right' : 'left'} duration={1.2}>
                        <div className="relative aspect-[3/2] w-full bg-neutral-100 overflow-hidden">
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
                    <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                      {project.category} &nbsp;—&nbsp; {project.year}
                    </span>
                    <h4 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary-text">
                      <Link href={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                        {project.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-secondary-text leading-relaxed font-light">
                      {project.description.slice(0, 180)}...
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group"
                      >
                        <span>Details</span>
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

      {/* 4. Firm Services Capabilities */}
      <section className="py-24 md:py-36 border-t border-b border-border-custom bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-6">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block">
              03 / Services
            </span>
            <h3 className="font-heading text-3xl uppercase tracking-wider font-bold text-primary-text">
              Our Capabilities
            </h3>
            <p className="text-sm text-secondary-text leading-relaxed font-light max-w-sm">
              We guide projects through all execution steps—conceptual research, permit development, structural detailing, material sourcing, and onsite supervision.
            </p>
            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group"
              >
                <span>Full Workflows</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8">
            <StaggerContainer className="divide-y divide-border-custom border-t border-b border-border-custom">
              {services.map((service, index) => (
                <StaggerItem key={service.id} className="py-8 first:pt-0 last:pb-0">
                  <div className="group flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-3 max-w-md">
                      <span className="font-heading text-xs text-accent font-semibold block">
                        0{index + 1}
                      </span>
                      <h4 className="font-heading text-xl font-bold tracking-tight text-primary-text">
                        {service.title}
                      </h4>
                      <p className="text-xs text-secondary-text leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-secondary-text hover:text-accent group-hover:text-accent self-start pt-6 md:pt-0 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
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
              <StaggerItem key={idx} className="space-y-2 border-l border-border-custom pl-6">
                <span className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary-text block">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-text block">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Selected Client Logs */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block text-center mb-12">
            04 / Selected Clients & Collaborators
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
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
                className="text-center font-heading text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-secondary-text py-4 border border-border-custom"
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Have a project?<br />Let’s build something extraordinary.
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed font-light">
            We partner with visionary clients to shape custom physical experiences. Contact our office in Chakupat to schedule a briefing.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 font-heading text-xs uppercase tracking-[0.2em] bg-white text-primary-text px-8 py-3.5 hover:bg-accent hover:text-white transition-colors"
            >
              <span>Work With Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
