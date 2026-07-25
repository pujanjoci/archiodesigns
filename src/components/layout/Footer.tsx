'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-custom pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-heading text-lg font-bold tracking-[0.25em] text-primary-text uppercase">
              Archio<span className="text-accent">.</span>
            </h3>
            <p className="text-sm text-secondary-text max-w-sm leading-relaxed">
              We design individual, aesthetically stunning structures and spaces that connect people with their culture, site context, and timeless design values.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-text">
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-text">
              Studio
            </h4>
            <address className="not-italic text-xs tracking-wider text-secondary-text space-y-2 leading-relaxed">
              <p>Chakupat-11, Lalitpur, Nepal</p>
              <p>
                Phone:{' '}
                <a href="tel:01-5269482" className="hover:text-accent transition-colors">
                  01-5269482
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@archiodesigns.com" className="hover:text-accent transition-colors">
                  info@archiodesigns.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-custom pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-secondary-text">
            &copy; {currentYear} Archio Designs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-secondary-text hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-secondary-text hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-secondary-text hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/privacy"
              className="text-[10px] uppercase tracking-widest text-secondary-text hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
