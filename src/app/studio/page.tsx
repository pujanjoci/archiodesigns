'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Ar. Pujan Shrestha',
    role: 'Founder & Lead Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600',
    bio: 'Specializes in climate-responsive architectural forms and modern traditional fusion design.',
  },
  {
    name: 'Ar. Sajina Amatya',
    role: 'Lead Interior Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    bio: 'Focuses on tactile materiality, ergonomic hospitality interiors, and lighting curation.',
  },
  {
    name: 'Ar. Deepesh Rana',
    role: 'Project Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600',
    bio: 'Oversees structural execution, detailing working drawings, and onsite quality controls.',
  },
];

const timeline = [
  { year: '2016', title: 'Firm Founding', desc: 'Archio Designs established in Lalitpur, Nepal, with a focus on bespoke residential concepts.' },
  { year: '2018', title: 'Commercial Expansion', desc: 'First major retail interior showroom completed for Sony Electronics at Labim Mall.' },
  { year: '2020', title: 'Turnkey Integration', desc: 'Partnered with local contractors to provide seamless construction and design development.' },
  { year: '2022', title: 'Boutique Hospitality Focus', desc: 'Completed Square Hotel interiors, marking a move into boutique hotel designs.' },
  { year: '2023', title: 'Himalayan Basecamp Launch', desc: 'Completed the luxurious Base Camp Bar lounge at Hotel Himalaya.' },
  { year: '2026', title: 'Sustainable Horizon', desc: 'Pioneering eco-responsive master planning and smart material retrofitting.' },
];

const awards = [
  { year: '2023', title: 'Luxury Commercial Lounge Winner', org: 'Nepal Architecture Forum' },
  { year: '2021', title: 'Residential Excellence Award', org: 'Lalitpur Heritage Council' },
  { year: '2019', title: 'Outstanding Retail Concept', org: 'National Retailers Guild' },
];

export default function Studio() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress along the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 90%'],
  });

  // Animate the line height fill down the line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-white text-primary-text min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. Page Header & Studio Intro */}
        <div className="max-w-3xl space-y-6 mb-24 md:mb-32">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            About the Studio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Architectural Excellence & Cultural Value
          </h1>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-light">
            Founded in 2016 in Lalitpur, Nepal, Archio Designs is a multidisciplinary architecture and interior design firm dedicated to creating individual, aesthetically stunning spatial solutions.
          </p>
        </div>

        {/* 2. Studio Philosophy / Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-border-custom">
          <div className="lg:col-span-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-4">
              01 / Core Values
            </span>
            <h2 className="font-heading text-2xl uppercase tracking-wider font-bold">
              Our Vision & Philosophy
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8 text-sm text-secondary-text leading-relaxed font-light">
            <blockquote className="font-heading text-2xl sm:text-3xl text-primary-text leading-snug font-light italic border-l-2 border-accent pl-6">
              "We believe that a space must connect its inhabitants with its culture, place, and underlying structural values."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p>
                Our vision is to build sustainable, culture-responsive architectural frameworks that withstand time. We study native bricks, wood panels, slate tiles, and craftsmanship, integrating them with modern concrete structures.
              </p>
              <p>
                By maintaining a highly collaborative workflow between architects, contractors, and clients, we avoid execution errors. Every square foot is detailed, budgeted, and optimized before we break ground.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Scroll-Animated Responsive Timeline */}
        <section className="py-24 border-b border-border-custom">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
              02 / Firm Chronology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-wider font-bold">
              Our Journey Through Time
            </h2>
          </div>

          <div ref={timelineRef} className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8">
            
            {/* Vertical Line: Positioned on left (left-4) on mobile, centered (left-1/2) on desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border-custom -translate-x-1/2" />

            {/* Scroll Progress Line Fill */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-accent -translate-x-1/2"
            />

            {/* Timeline Milestone Cards */}
            <div className="space-y-12 md:space-y-24">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between pl-10 md:pl-0"
                  >
                    {/* Golden Square Box Marker Node: Centered on line both mobile & desktop */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-5 h-5 bg-white border-2 border-accent z-10 rounded-none shadow-sm" />

                    {/* Milestone Card Content */}
                    <div
                      className={`w-full md:w-[45%] p-6 sm:p-8 bg-[#FAFAFA] border border-border-custom space-y-3 rounded-none shadow-sm hover:border-accent transition-colors ${
                        isEven ? 'md:mr-auto text-left' : 'md:ml-auto text-left'
                      }`}
                    >
                      <span className="font-mono text-xl font-bold text-accent block">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-primary-text uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs text-secondary-text font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. Team Members */}
        <section className="py-24 border-b border-border-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
                03 / Collective
              </span>
              <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider font-bold">
                The Design Team
              </h2>
            </div>
            <p className="text-xs text-secondary-text font-light max-w-sm">
              Archio Designs is led by a collaborative team of architects, engineers, and art enthusiasts working in Lalitpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group flex flex-col space-y-4"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100 rounded-none">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                    <p className="text-xs font-light text-gray-200 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-primary-text group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-heading uppercase tracking-wider text-secondary-text">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Awards & Recognition */}
        <section className="py-24">
          <div className="max-w-3xl space-y-12">
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
                04 / Recognition
              </span>
              <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider font-bold">
                Honors & Awards
              </h2>
            </div>

            <div className="divide-y divide-border-custom border-t border-b border-border-custom">
              {awards.map((award, idx) => (
                <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-accent font-bold">{award.year}</span>
                    <h4 className="font-heading text-lg font-bold text-primary-text">{award.title}</h4>
                    <p className="text-xs text-secondary-text font-light">{award.org}</p>
                  </div>
                  <Award size={20} className="text-accent shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
