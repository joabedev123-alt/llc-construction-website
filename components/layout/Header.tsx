'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site-config';
import { Button } from '../shared/Button';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090C11]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#090C11]/90 via-[#090C11]/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#C79A58] flex items-center justify-center bg-[#101620] group-hover:border-[#DAB678] transition-colors">
                <i className="bi bi-house-door text-[#C79A58] text-lg group-hover:scale-110 transition-transform"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#F8F8F6] group-hover:text-[#C79A58] transition-colors leading-none">
                  LLC
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C79A58] font-medium mt-1">
                  Construction & Maintenance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium uppercase tracking-widest transition-colors py-1 ${
                      isActive ? 'text-[#C79A58]' : 'text-[#F8F8F6] hover:text-[#C79A58]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C79A58]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Button href="/contact" variant="primary" className="py-2.5 px-5 text-xs">
                  Request a Quote
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-2 text-[#F8F8F6] hover:text-[#C79A58] focus:outline-none"
              >
                <i className="bi bi-list text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
};
