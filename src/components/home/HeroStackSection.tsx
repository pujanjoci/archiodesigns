'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Project } from '../../types';

interface HeroStackSectionProps {
  projects: Project[];
}

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetScale: number;
}

function HeroCard({ project, index, total, progress, targetScale }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scale down & darken range start and end
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;

  // Scale down from 1 to targetScale as next cards enter
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);
  
  // Darken opacity from 1 down to 0.5 as next cards enter
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [1, 0.5]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        style={{
          scale,
          willChange: 'transform',
        }}
        className="relative w-full h-full bg-[#0D0D0E] overflow-hidden shadow-2xl border border-white/10 rounded-none"
      >
        {/* Background Image with Darkening Overlay */}
        <div className="absolute inset-0 bg-black">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered Dark Vignette */}
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
        </div>

        {/* Editorial Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-20 max-w-[1500px] mx-auto w-full">
          
          {/* Top Metadata Header (Without 01 / 04 PROJECT STACK text) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-accent animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                {project.category}
              </span>
            </div>

            <div className="hidden sm:flex items-center space-x-4 font-mono text-xs text-white/80">
              <span className="flex items-center space-x-1.5">
                <MapPin size={12} className="text-accent" />
                <span>{project.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Calendar size={12} className="text-accent" />
                <span>{project.year}</span>
              </span>
            </div>
          </div>

          {/* Bottom Narrative & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-3">
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
                  {project.category}
                </span>

                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[1.02]">
                  {project.title}
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
              <Link
                href={`/projects/${project.slug}`}
                className="group relative inline-flex items-center space-x-4 bg-white hover:bg-accent text-primary-text hover:text-white px-8 py-4 font-heading text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-2xl rounded-none"
              >
                <span>Explore Case Study</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}

export default function HeroStackSection({ projects }: HeroStackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const heroProjects = projects.slice(0, 4);

  // Track overall scroll progress inside the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-[#09090A]"
      style={{
        height: `${heroProjects.length * 100}vh`,
      }}
    >
      {heroProjects.map((project, idx) => {
        const targetScale = 1 - (heroProjects.length - idx) * 0.04;
        
        return (
          <HeroCard
            key={project.slug}
            project={project}
            index={idx}
            total={heroProjects.length}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
