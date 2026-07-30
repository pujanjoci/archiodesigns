'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { 
  Check, 
  Compass, 
  Layout, 
  HardHat, 
  RefreshCw, 
  Briefcase, 
  Box,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Service } from '../../types';

interface WalletServicesStackProps {
  services: Service[];
}

interface WalletCardProps {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function WalletCardItem({
  service,
  index,
  total,
  progress,
}: WalletCardProps) {
  // Offset header peeking height for stacked Apple Wallet passes (80px + index * 48px)
  const topOffset = 80 + index * 48;

  // Scroll depth scale: As scroll moves past this card, card scales down slightly (1.0 -> 0.93)
  const rangeStart = index / total;
  const targetScale = 1 - (total - index) * 0.025;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  // Card themes with distinct glassmorphic dark gradients
  const cardThemes = [
    { bg: 'bg-[#18181B]', border: 'border-amber-500/30' },
    { bg: 'bg-[#161B22]', border: 'border-blue-500/30' },
    { bg: 'bg-[#1A1A1E]', border: 'border-emerald-500/30' },
    { bg: 'bg-[#201A18]', border: 'border-orange-500/30' },
    { bg: 'bg-[#1C1824]', border: 'border-purple-500/30' },
    { bg: 'bg-[#151D24]', border: 'border-cyan-500/30' },
  ];

  const theme = cardThemes[index % cardThemes.length];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'architecture': return <Compass className="w-5 h-5 text-accent" />;
      case 'interior-design': return <Layout className="w-5 h-5 text-accent" />;
      case 'construction': return <HardHat className="w-5 h-5 text-accent" />;
      case 'renovation': return <RefreshCw className="w-5 h-5 text-accent" />;
      case 'consultancy': return <Briefcase className="w-5 h-5 text-accent" />;
      case 'visualization': return <Box className="w-5 h-5 text-accent" />;
      default: return <Sparkles className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <motion.div
      style={{
        top: `${topOffset}px`,
        scale,
        willChange: 'transform',
        zIndex: index + 10,
      }}
      className={`sticky rounded-none border ${theme.border} ${theme.bg} text-white shadow-2xl overflow-hidden transition-all duration-300`}
    >
      {/* Card Header Tab */}
      <div className="flex items-center justify-between px-6 sm:px-8 py-5 bg-white/5 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <div className="p-2 border border-white/10 shrink-0 rounded-none">
            {getServiceIcon(service.id)}
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block">
              0{index + 1} &nbsp;/&nbsp; SERVICE CAPABILITY
            </span>
            <h3 className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-white uppercase">
              {service.title}
            </h3>
          </div>
        </div>

        <span className="font-mono text-xs text-white/40 font-semibold tracking-wider">
          PASS 0{index + 1}
        </span>
      </div>

      {/* Expanded Body Details (All cards permanently expanded) */}
      <div className="p-6 sm:p-8 md:p-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              {service.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Scope of Deliverables
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {service.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-3 text-xs text-gray-300 font-light">
                    <div className="mt-0.5 p-1 bg-accent/20 text-accent shrink-0 rounded-none">
                      <Check size={12} />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Steps */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Execution Phases
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {service.workflow.map((step) => (
                  <div key={step.step} className="p-3 bg-white/5 border border-white/10 space-y-1 rounded-none">
                    <span className="font-mono text-[10px] text-accent block font-semibold">STEP {step.step}</span>
                    <span className="font-heading text-xs font-semibold text-white block truncate">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Photo Preview & Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] w-full border border-white/10 shadow-xl group rounded-none overflow-hidden">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                sizes="(max-w-768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-heading uppercase tracking-widest text-white/80">
                  Archio Studio Capability Specification
                </span>
              </div>
            </div>

            <Link
              href={`/services#${service.id}`}
              className="w-full inline-flex items-center justify-center space-x-3 bg-accent hover:bg-white text-white hover:text-primary-text py-3.5 px-6 font-heading text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg rounded-none"
            >
              <span>Full Specification</span>
              <ExternalLink size={14} />
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function WalletServicesStack({ services }: WalletServicesStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
            03 / Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider font-bold text-white">
            Our Capabilities
          </h2>
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-white/50">
          Stacked Pass Overview
        </span>
      </div>

      {/* Scroll-Pinned Card Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto space-y-4 pb-32"
        style={{
          minHeight: `${services.length * 340 + 300}px`,
        }}
      >
        {services.map((service, idx) => (
          <WalletCardItem
            key={service.id}
            service={service}
            index={idx}
            total={services.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
