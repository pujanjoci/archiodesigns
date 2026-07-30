'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project } from '../../types';

type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Hospitality' | 'Interior' | 'Master Planning';

const categories: ProjectCategory[] = [
  'All',
  'Residential',
  'Commercial',
  'Hospitality',
  'Interior',
  'Master Planning',
];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // Filter projects by active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-white text-primary-text min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 md:mb-20">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Portfolio & Selected Works
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Selected Works
          </h1>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-light">
            An overview of our architectural narratives, interior completions, and design strategies across Nepal. Every project represents a conversation between structure, materiality, and cultural context.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="border-b border-border-custom pb-6 mb-16 overflow-x-auto no-scrollbar">
          <nav className="flex space-x-8 md:space-x-12 min-w-max">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              const count = category === 'All' 
                ? projects.length 
                : projects.filter(p => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-heading text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-2 flex items-center space-x-2 ${
                    isActive ? 'text-accent font-bold' : 'text-primary-text hover:text-accent'
                  }`}
                >
                  <span>{category}</span>
                  <span className="font-mono text-[10px] opacity-60">({count})</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Stacked Cards View Only */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-16 py-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="sticky top-28 bg-[#141416] text-white overflow-hidden shadow-2xl border border-white/10 p-6 sm:p-10 md:p-14 transition-transform rounded-none"
                style={{
                  zIndex: idx + 10,
                  marginTop: idx === 0 ? '0px' : '-20px',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  
                  {/* Image Column */}
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] w-full overflow-hidden shadow-xl border border-white/10 group rounded-none">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-w-1024px) 100vw, 700px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-accent font-bold">PROJECT 0{idx + 1}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-xs uppercase tracking-widest text-accent font-medium">{project.category}</span>
                      </div>
                      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
                        {project.title}
                      </h2>
                    </div>

                    <div className="space-y-2 text-xs text-gray-300 font-light font-mono">
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} className="text-accent shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} className="text-accent shrink-0" />
                        <span>Completion: {project.year}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center space-x-3 bg-white hover:bg-accent text-primary-text hover:text-white px-7 py-3.5 font-heading text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg rounded-none"
                      >
                        <span>View Project Study</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4">
            <p className="text-sm text-secondary-text font-light">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="text-xs font-heading uppercase tracking-widest text-accent border-b border-accent pb-1"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
