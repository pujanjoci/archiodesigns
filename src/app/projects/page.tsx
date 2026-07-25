'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import Reveal, { StaggerContainer, StaggerItem } from '../../components/animations/Reveal';

type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Hospitality' | 'Interior' | 'Master Planning';

const categories: ProjectCategory[] = [
  'All',
  'Residential',
  'Commercial',
  'Hospitality',
  'Interior',
  'Master Planning',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // Filter projects by active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-2xl space-y-4 mb-16 md:mb-24">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Selected Works
          </h1>
          <p className="text-sm text-secondary-text leading-relaxed font-light">
            An overview of our architectural narratives, interior completions, and design strategies across Nepal. Every project represents a conversation between structure, materiality, and cultural context.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="border-b border-border-custom pb-6 mb-16 overflow-x-auto no-scrollbar">
          <nav className="flex space-x-8 md:space-x-12 min-w-max">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-heading text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                    isActive ? 'text-accent' : 'text-primary-text hover:text-accent'
                  }`}
                >
                  {category}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.slug} className="flex flex-col space-y-6 group">
                {/* Image Showcase */}
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative hover-zoom-container">
                  <Reveal type="clip-path" direction="up" duration={1} className="relative aspect-[3/2] w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 600px"
                      className="object-cover hover-zoom-img"
                    />
                  </Reveal>
                </Link>

                {/* Project Metadata */}
                <div className="flex justify-between items-start pt-2">
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">
                      {project.category} &nbsp;—&nbsp; {project.location}
                    </span>
                    <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-primary-text group-hover:text-accent transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="text-[10px] font-heading uppercase tracking-widest text-secondary-text self-start mt-2">
                    {project.year}
                  </div>
                </div>

                {/* Action Link */}
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-all duration-300 group-hover:text-accent group-hover:border-accent"
                  >
                    <span>View Project</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-24 text-secondary-text font-light text-sm tracking-wider">
            No projects found in this category. We are working on updates.
          </div>
        )}
      </div>
    </div>
  );
}
