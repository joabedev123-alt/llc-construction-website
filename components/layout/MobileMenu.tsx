'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { Button } from '../shared/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, pathname }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#090C11]/98 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      {/* Top Header Row inside Mobile Drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-none border border-[#C79A58] flex items-center justify-center bg-[#101620]">
            <i className="bi bi-house-door text-[#C79A58] text-base"></i>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-normal tracking-wide text-[#F8F8F6]">LLC</span>
            <span className="text-[9px] uppercase tracking-widest text-[#C79A58] font-medium -mt-1">
              Construction & Maintenance
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#AEB4BD] hover:text-[#C79A58] focus:outline-none"
        >
          <i className="bi bi-x-lg text-2xl"></i>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-6">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`text-2xl font-serif tracking-wide transition-colors flex items-center justify-between pb-3 border-b border-white/5 ${
                  isActive ? 'text-[#C79A58] font-medium' : 'text-[#F8F8F6] hover:text-[#C79A58]'
                }`}
              >
                <span>{link.label}</span>
                <i className="bi bi-chevron-right text-sm text-[#C79A58]"></i>
              </Link>
            );
          })}
        </nav>

        {/* Contact Info & CTA in Mobile Menu */}
        <div className="mt-8 space-y-6 pt-6 border-t border-white/10">
          <Button href="/contact" variant="primary" onClick={onClose} className="w-full">
            Request a Quote
          </Button>

          <div className="space-y-3 pt-2">
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#AEB4BD] hover:text-[#25D366] transition-colors"
            >
              <i className="bi bi-whatsapp text-[#25D366] text-lg"></i>
              <span>{siteConfig.whatsapp.number}</span>
            </a>

            <a
              href={siteConfig.phone.link}
              className="flex items-center gap-3 text-sm text-[#AEB4BD] hover:text-[#C79A58] transition-colors"
            >
              <i className="bi bi-telephone text-[#C79A58] text-lg"></i>
              <span>{siteConfig.phone.number}</span>
            </a>

            <a
              href={siteConfig.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#AEB4BD] hover:text-[#C79A58] transition-colors"
            >
              <i className="bi bi-instagram text-[#C79A58] text-lg"></i>
              <span>{siteConfig.instagram.handle}</span>
            </a>
          </div>

          <p className="text-xs text-[#AEB4BD]/60 font-light">
            Serving projects across all of Ireland
          </p>
        </div>
      </div>
    </div>
  );
};
