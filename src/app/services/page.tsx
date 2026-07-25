'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../../data/services';
import Reveal, { StaggerContainer, StaggerItem } from '../../components/animations/Reveal';

export default function Services() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-2xl space-y-4 mb-20 md:mb-32">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Capabilities
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Services & Expertise
          </h1>
          <p className="text-sm text-secondary-text leading-relaxed font-light">
            We provide comprehensive services from the initial conceptual brief to structural detailing, custom interior styling, and on-site construction supervision.
          </p>
        </div>

        {/* Quick Menu anchor points */}
        <div className="border-b border-border-custom pb-6 mb-24 overflow-x-auto no-scrollbar">
          <nav className="flex space-x-8 md:space-x-12 min-w-max">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="font-heading text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent transition-colors"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Detailed Services list */}
        <div className="space-y-36 md:space-y-48">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
              >
                {/* 1. Narrative & details block */}
                <div className={`lg:col-span-5 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <span className="font-heading text-xs text-accent font-semibold block">
                      0{index + 1} &nbsp;/&nbsp; Service
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-text uppercase">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-secondary-text leading-relaxed font-light">
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
                      className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-primary-text hover:text-accent pb-1 border-b border-primary-text hover:border-accent transition-colors group"
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* 2. Photo & step workflow block */}
                <div className={`lg:col-span-7 space-y-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Service Hero Photo */}
                  <Reveal type="clip-path" direction="up" duration={1.2}>
                    <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-w-1024px) 100vw, 700px"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>

                  {/* Step-by-step workflow */}
                  <div className="space-y-6">
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-text border-b border-border-custom pb-3">
                      Process & Execution Stages
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                      {service.workflow.map((flow) => (
                        <div key={flow.step} className="space-y-2 border-l border-border-custom pl-4">
                          <span className="text-[10px] text-accent font-semibold uppercase tracking-wider block">
                            {flow.step} &nbsp;—&nbsp; {flow.title}
                          </span>
                          <p className="text-xs text-secondary-text leading-relaxed font-light">
                            {flow.description}
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
