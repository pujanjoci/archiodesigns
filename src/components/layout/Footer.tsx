'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0C] text-white border-t border-white/10 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Branding Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
              Architectural Practice & Studio
            </span>
            <Link href="/" className="relative block h-12 sm:h-14 w-48 sm:w-60">
              <Image
                src="/archiodesigns.png"
                alt="Archio Designs Logo"
                fill
                priority
                sizes="(max-w-768px) 200px, 300px"
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed pt-2">
              We design individual, aesthetically stunning structures and spaces that connect people with their culture, site context, and timeless structural values in Lalitpur and across Nepal.
            </p>
          </div>

          {/* Back to Top Action */}
          <button
            onClick={scrollToTop}
            className="self-start lg:self-end flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-mono text-gray-400 hover:text-accent border border-white/15 px-5 py-3 hover:border-accent transition-colors rounded-none"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Middle Navigation & Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b border-white/10">
          
          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Navigation
            </h4>
            <ul className="space-y-3 font-heading text-xs uppercase tracking-wider">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Selected Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-gray-300 hover:text-white transition-colors">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities Directory */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Disciplines
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-light">
              <li>Architectural Design & Planning</li>
              <li>Interior Styling & Furnishing</li>
              <li>Turnkey Construction Management</li>
              <li>Adaptive Reuse & Renovation</li>
              <li>Design Strategy Consultancy</li>
              <li>3D Path-Traced Visualization</li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Lalitpur Studio
            </h4>
            <address className="not-italic text-xs text-gray-400 font-light space-y-2 leading-relaxed font-mono">
              <p>Chakupat-11, Lalitpur, Nepal</p>
              <p>
                Phone:{' '}
                <a href="tel:01-5269482" className="text-gray-300 hover:text-accent transition-colors">
                  +977 01-5269482
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@archiodesigns.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@archiodesigns.com
                </a>
              </p>
              <p className="text-gray-500 pt-1">Sun — Fri: 9:30 AM – 6:00 PM</p>
            </address>
          </div>

          {/* Newsletter Journal Subscription */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Architectural Journal
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Subscribe to receive updates on newly completed projects and architectural essays.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-accent outline-none transition-colors rounded-none"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-0 top-0 bottom-0 px-4 bg-accent text-white hover:bg-white hover:text-primary-text transition-colors rounded-none"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              {subscribed && (
                <p className="text-[10px] text-accent font-mono">Thank you for subscribing to our journal.</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
          <p>&copy; {currentYear} Archio Designs. All Rights Reserved.</p>
          
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
