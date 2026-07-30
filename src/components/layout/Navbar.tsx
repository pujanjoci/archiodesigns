'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Projects', href: '/projects', num: '01' },
  { name: 'Services', href: '/services', num: '02' },
  { name: 'Studio', href: '/studio', num: '03' },
  { name: 'Contact', href: '/contact', num: '04' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Only Home '/' and project details '/projects/[slug]' have dark hero blocks
  const hasDarkHero = pathname === '/' || (pathname.startsWith('/projects/') && pathname !== '/projects');
  const isTransparent = !scrolled && hasDarkHero;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isTransparent
            ? 'bg-transparent border-transparent py-6'
            : 'bg-white/95 backdrop-blur-md border-border-custom py-4 shadow-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo Image from Public Folder */}
          <Link href="/" className="relative block h-8 md:h-10 w-36 md:w-44 transition-opacity hover:opacity-90">
            <Image
              src="/archiodesigns.png"
              alt="Archio Designs Logo"
              fill
              priority
              sizes="(max-w-768px) 150px, 200px"
              className={`object-contain object-left ${isTransparent ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-heading text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-accent font-bold'
                      : isTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-primary-text hover:text-accent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Link */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`font-heading text-xs uppercase tracking-[0.2em] border px-6 py-2.5 transition-all duration-300 rounded-none ${
                isTransparent
                  ? 'border-white text-white hover:bg-white hover:text-primary-text'
                  : 'border-primary-text text-primary-text hover:bg-primary-text hover:text-white'
              }`}
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Open Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-primary-text'
            }`}
            aria-label="Open mobile navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 w-screen h-screen min-h-screen bg-[#0D0D0E] text-white flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
          >
            {/* Overlay Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="relative block h-8 w-36"
              >
                <Image
                  src="/archiodesigns.png"
                  alt="Archio Designs Logo"
                  fill
                  priority
                  sizes="150px"
                  className="object-contain object-left brightness-0 invert"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-white/20 hover:border-accent text-white hover:text-accent transition-colors rounded-none"
                aria-label="Close navigation overlay"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Navigation Links List */}
            <div className="py-12 space-y-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block">
                Navigation Directory
              </span>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}`));
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between border-b border-white/10 pb-4 ${
                          isActive ? 'text-accent' : 'text-white hover:text-accent'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <span className="font-mono text-xs text-accent">{link.num}</span>
                          <span className="font-heading text-3xl font-bold uppercase tracking-wider">
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform text-accent" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Overlay Bottom Footer Info */}
            <div className="border-t border-white/10 pt-6 space-y-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-3 bg-accent text-white py-4 font-heading text-xs uppercase tracking-[0.2em] font-semibold rounded-none hover:bg-white hover:text-primary-text transition-colors"
              >
                <span>Start Project Briefing</span>
                <ArrowRight size={14} />
              </Link>

              <div className="grid grid-cols-1 gap-3 font-mono text-[11px] text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={12} className="text-accent shrink-0" />
                  <span>Chakupat-11, Lalitpur, Nepal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={12} className="text-accent shrink-0" />
                  <a href="tel:01-5269482" className="hover:text-white transition-colors">
                    +977 01-5269482
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={12} className="text-accent shrink-0" />
                  <a href="mailto:info@archiodesigns.com" className="hover:text-white transition-colors">
                    info@archiodesigns.com
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
