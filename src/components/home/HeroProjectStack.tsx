'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Project } from '../../types';

interface HeroProjectStackProps {
  projects: Project[];
}

export default function HeroProjectStack({ projects }: HeroProjectStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const heroProjects = projects.slice(0, 5);

  // Cycle slides
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroProjects.length) % heroProjects.length);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (isAutoplay) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplay, currentIndex, heroProjects.length]);

  return (
    <section className="relative h-screen w-full bg-[#0D0D0E] text-white overflow-hidden select-none">
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,141,64,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Main Stack Container */}
      <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-12 pt-20 pb-24 z-10 max-w-[1500px] mx-auto">
        <div className="relative w-full h-full max-h-[820px] flex items-center justify-center">
          
          {/* Stacked Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {heroProjects.map((project, idx) => {
              // Calculate relative index position in stack
              const total = heroProjects.length;
              const stackOffset = (idx - currentIndex + total) % total;

              // We only render active and next 2 cards in background stack for optimal performance & visual depth
              const isVisible = stackOffset === 0 || stackOffset === 1 || stackOffset === 2 || stackOffset === total - 1;
              if (!isVisible) return null;

              const isCurrent = stackOffset === 0;
              
              // Visual properties based on stack depth
              let scale = 1;
              let translateY = 0;
              let opacity = 1;
              let zIndex = 30 - stackOffset;

              if (stackOffset === 1) {
                scale = 0.94;
                translateY = 24;
                opacity = 0.65;
              } else if (stackOffset === 2) {
                scale = 0.88;
                translateY = 48;
                opacity = 0.35;
              } else if (stackOffset === total - 1) {
                // Previously exited card sliding away
                scale = 1.04;
                translateY = -60;
                opacity = 0;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={project.slug}
                  initial={false}
                  animate={{
                    scale,
                    y: translateY,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => !isCurrent && handleSelect(idx)}
                  className={`absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${
                    !isCurrent ? 'cursor-pointer hover:border-accent/40 transition-colors' : ''
                  }`}
                  style={{
                    transformOrigin: 'bottom center',
                    boxShadow: isCurrent
                      ? '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 18px 36px -18px rgba(182, 141, 64, 0.2)'
                      : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Background Hero Photography with Parallax Scale */}
                  <div className="absolute inset-0 bg-[#141416]">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      priority={idx === 0}
                      sizes="100vw"
                      className={`object-cover transition-transform duration-[8000ms] ease-out ${
                        isCurrent ? 'scale-105' : 'scale-100'
                      }`}
                    />
                    {/* Multi-layered Vignette Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
                  </div>

                  {/* Editorial Content Overlay (Rendered for active top page) */}
                  {isCurrent && (
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">
                      
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          <span className="font-heading text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">
                            Project 0{idx + 1} / 0{total}
                          </span>
                        </div>

                        <div className="hidden sm:flex items-center space-x-4 text-xs font-mono text-white/70 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>

                      {/* Bottom Content Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
                        <div className="lg:col-span-8 space-y-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-3"
                          >
                            <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/40 text-accent font-heading text-[10px] uppercase tracking-[0.2em] rounded-md font-medium">
                              {project.category}
                            </span>

                            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05]">
                              {project.title}
                            </h1>
                          </motion.div>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xs sm:text-sm text-gray-300 max-w-xl font-light leading-relaxed line-clamp-2 md:line-clamp-3"
                          >
                            {project.description}
                          </motion.p>
                        </div>

                        {/* CTA Link & Quick Metadata */}
                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <Link
                              href={`/projects/${project.slug}`}
                              className="group relative inline-flex items-center space-x-4 bg-white hover:bg-accent text-primary-text hover:text-white px-7 py-3.5 rounded-full font-heading text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg hover:shadow-accent/30"
                            >
                              <span>Explore Case Study</span>
                              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Stack Index Label for Background Stack Cards */}
                  {!isCurrent && (
                    <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase tracking-widest text-white/60 font-mono">
                      Card 0{idx + 1} — {project.title}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Floating Bottom Navigation & Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-40 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          
          {/* Slide Indicator Progress Bars */}
          <div className="flex items-center space-x-2">
            {heroProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                  idx === currentIndex ? 'w-12 md:w-16 bg-accent' : 'w-4 md:w-6 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to project slide ${idx + 1}`}
              >
                {idx === currentIndex && isAutoplay && (
                  <motion.span
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute inset-0 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Autoplay & Stack Navigation Controls */}
          <div className="flex items-center space-x-3 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              title={isAutoplay ? 'Pause Stack Auto-cycle' : 'Play Stack Auto-cycle'}
            >
              {isAutoplay ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <div className="w-px h-4 bg-white/20" />

            <button
              onClick={handlePrev}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Previous project card"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Next project card"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
