'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Studio', href: '/studio' },
  { name: 'Contact', href: '/contact' },
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Determine if the current page starts with a dark hero block
  const hasHero = pathname === '/' || pathname.startsWith('/projects/') || pathname === '/services';
  const isTransparent = !scrolled && hasHero;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isTransparent
          ? 'bg-transparent border-transparent py-6'
          : 'bg-white border-border-custom py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className={`font-heading text-lg md:text-xl font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
            isTransparent ? 'text-white hover:text-accent' : 'text-primary-text hover:text-accent'
          }`}
        >
          Archio<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-accent'
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
            className={`font-heading text-xs uppercase tracking-[0.2em] border px-6 py-2.5 transition-all duration-300 ${
              isTransparent
                ? 'border-white text-white hover:bg-white hover:text-primary-text'
                : 'border-primary-text text-primary-text hover:bg-primary-text hover:text-white'
            }`}
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-1 focus:outline-none transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-primary-text'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[65px] bg-white z-40 transition-all duration-500 flex flex-col justify-between p-8 border-t border-border-custom md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-8 pt-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-xl uppercase tracking-[0.15em] hover:text-accent transition-colors ${
                  isActive ? 'text-accent' : 'text-primary-text'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col space-y-6 border-t border-border-custom pt-8">
          <Link
            href="/contact"
            className="font-heading text-xs text-center uppercase tracking-[0.2em] bg-primary-text text-white py-3.5 hover:bg-accent transition-colors"
          >
            Start Project
          </Link>
          <div className="text-center text-xs tracking-wider text-secondary-text">
            info@archiodesigns.com &nbsp;|&nbsp; 01-5269482
          </div>
        </div>
      </div>
    </header>
  );
}
