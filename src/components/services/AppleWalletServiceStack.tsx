'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  Grid, 
  Sparkles, 
  Compass, 
  Layout, 
  HardHat, 
  RefreshCw, 
  Briefcase, 
  Box,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { Service } from '../../types';

interface AppleWalletServiceStackProps {
  services: Service[];
}

export default function AppleWalletServiceStack({ services }: AppleWalletServiceStackProps) {
  const [activeId, setActiveId] = useState<string>(services[0]?.id || 'architecture');
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Icon mapping helper
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'architecture':
        return <Compass className="w-5 h-5 text-accent" />;
      case 'interior-design':
        return <Layout className="w-5 h-5 text-accent" />;
      case 'construction':
        return <HardHat className="w-5 h-5 text-accent" />;
      case 'renovation':
        return <RefreshCw className="w-5 h-5 text-accent" />;
      case 'consultancy':
        return <Briefcase className="w-5 h-5 text-accent" />;
      case 'visualization':
        return <Box className="w-5 h-5 text-accent" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent" />;
    }
  };

  // Card themes for distinct Apple Wallet card aesthetics
  const getCardTheme = (index: number, isSelected: boolean) => {
    const themes = [
      { bg: 'bg-[#18181B]', border: 'border-amber-500/30', accent: 'bg-amber-500/10 text-amber-400', headerBg: 'bg-[#222226]' },
      { bg: 'bg-[#161B22]', border: 'border-blue-500/30', accent: 'bg-blue-500/10 text-blue-400', headerBg: 'bg-[#1F242D]' },
      { bg: 'bg-[#1A1A1E]', border: 'border-emerald-500/30', accent: 'bg-emerald-500/10 text-emerald-400', headerBg: 'bg-[#24242A]' },
      { bg: 'bg-[#201A18]', border: 'border-orange-500/30', accent: 'bg-orange-500/10 text-orange-400', headerBg: 'bg-[#2A2320]' },
      { bg: 'bg-[#1C1824]', border: 'border-purple-500/30', accent: 'bg-purple-500/10 text-purple-400', headerBg: 'bg-[#262130]' },
      { bg: 'bg-[#151D24]', border: 'border-cyan-500/30', accent: 'bg-cyan-500/10 text-cyan-400', headerBg: 'bg-[#1E2730]' },
    ];
    return themes[index % themes.length];
  };

  const activeIndex = services.findIndex((s) => s.id === activeId);

  return (
    <div className="w-full">
      {/* Section Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-border-custom pb-6">
        <div>
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
            03 / Services
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-wider font-bold text-primary-text">
            Our Capabilities
          </h3>
        </div>

        {/* View Mode Toggle Switcher */}
        <div className="flex items-center space-x-1 bg-neutral-100 p-1 rounded-full border border-neutral-200">
          <button
            onClick={() => setViewMode('stack')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-heading text-xs uppercase tracking-wider transition-all duration-300 ${
              viewMode === 'stack'
                ? 'bg-primary-text text-white shadow-md'
                : 'text-secondary-text hover:text-primary-text'
            }`}
          >
            <Layers size={14} />
            <span>Apple Wallet Stack</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-heading text-xs uppercase tracking-wider transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-primary-text text-white shadow-md'
                : 'text-secondary-text hover:text-primary-text'
            }`}
          >
            <Grid size={14} />
            <span>Grid Overview</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: Apple Wallet Interactive Card Stack */}
      {viewMode === 'stack' && (
        <div className="relative w-full max-w-5xl mx-auto min-h-[680px] pb-12">
          
          {/* Card Tabs Bar for Quick Select on Desktop */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-4 mb-6">
            {services.map((service, idx) => {
              const isSelected = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap text-xs font-heading uppercase tracking-wider ${
                    isSelected
                      ? 'bg-primary-text text-white border-primary-text shadow-lg scale-105'
                      : 'bg-white text-secondary-text border-border-custom hover:border-accent hover:text-primary-text'
                  }`}
                >
                  <span className="font-mono font-bold text-accent">0{idx + 1}</span>
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Card Deck Container */}
          <div className="relative w-full pt-4">
            {services.map((service, idx) => {
              const isSelected = service.id === activeId;
              const isHovered = service.id === hoveredId;
              const theme = getCardTheme(idx, isSelected);

              // Calculate stack position offset relative to selected card
              let offsetY = idx * 64; // Default stacked tab offset
              if (idx > activeIndex) {
                // Cards below selected shift further down to reveal active card content
                offsetY = activeIndex * 64 + 440 + (idx - activeIndex - 1) * 54;
              } else if (idx === activeIndex) {
                offsetY = idx * 64;
              }

              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    y: offsetY,
                    scale: isSelected ? 1 : isHovered ? 0.99 : 0.98,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 28,
                  }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveId(service.id)}
                  className={`absolute top-0 left-0 right-0 rounded-3xl border ${theme.border} ${theme.bg} text-white overflow-hidden shadow-2xl transition-shadow cursor-pointer ${
                    isSelected ? 'z-30 shadow-amber-950/20' : 'z-10 hover:border-white/30'
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(182, 141, 64, 0.15)'
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Apple Wallet Header Band (Always visible for stacked card tabs) */}
                  <div className={`flex items-center justify-between px-6 py-4 border-b border-white/10 ${theme.headerBg}`}>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        {getServiceIcon(service.id)}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block">
                          PASS 0{idx + 1} / ARCHIO CAPABILITY
                        </span>
                        <h4 className="font-heading text-lg font-bold tracking-tight text-white">
                          {service.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-heading font-medium ${theme.accent}`}>
                        {isSelected ? 'Active Card' : 'Click to View'}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-white/60 transition-transform duration-300 ${
                          isSelected ? 'rotate-180 text-accent' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Card Body Content */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="p-6 sm:p-8 md:p-10 border-t border-white/5"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                          
                          {/* Left Column: Scope & Description */}
                          <div className="lg:col-span-7 space-y-6">
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                              {service.description}
                            </p>

                            {/* Scope Deliverables */}
                            <div className="space-y-3 pt-2">
                              <h5 className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                                Scope of Deliverables
                              </h5>
                              <div className="grid grid-cols-1 gap-2.5">
                                {service.details.map((detail, dIdx) => (
                                  <div key={dIdx} className="flex items-start space-x-3 text-xs text-gray-300 font-light">
                                    <div className="mt-0.5 p-1 rounded-full bg-accent/20 text-accent shrink-0">
                                      <Check size={12} />
                                    </div>
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Workflow Pills */}
                            <div className="space-y-3 pt-2">
                              <h5 className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                                Execution Process
                              </h5>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {service.workflow.map((step) => (
                                  <div key={step.step} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                    <span className="font-mono text-[10px] text-accent block">STEP {step.step}</span>
                                    <span className="font-heading text-xs font-semibold text-white block truncate">{step.title}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Hero Image Preview & CTA */}
                          <div className="lg:col-span-5 space-y-6">
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                              <Image
                                src={service.heroImage}
                                alt={service.title}
                                fill
                                sizes="(max-w-768px) 100vw, 400px"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                                <span className="text-[10px] font-heading uppercase tracking-widest text-white/80">
                                  Archio Studio Detail
                                </span>
                              </div>
                            </div>

                            <Link
                              href={`/services#${service.id}`}
                              className="w-full inline-flex items-center justify-center space-x-3 bg-accent hover:bg-white text-white hover:text-primary-text py-3.5 px-6 rounded-xl font-heading text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg hover:shadow-accent/20"
                            >
                              <span>Full Service Specification</span>
                              <ExternalLink size={14} />
                            </Link>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: Grid Overview */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#18181B] border border-white/10 rounded-2xl overflow-hidden p-6 text-white flex flex-col justify-between space-y-6 hover:border-accent/50 transition-colors shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent font-bold">0{idx + 1}</span>
                  <div className="p-2 rounded-lg bg-white/5">{getServiceIcon(service.id)}</div>
                </div>
                <h4 className="font-heading text-xl font-bold tracking-tight text-white">{service.title}</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-accent hover:text-white transition-colors"
                >
                  <span>Explore Workflow</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
