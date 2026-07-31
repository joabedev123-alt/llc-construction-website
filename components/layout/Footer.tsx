import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090C11] text-[#AEB4BD] pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Gold Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C79A58]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Logo & Company Summary */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#C79A58] flex items-center justify-center bg-[#101620]">
                <i className="bi bi-house-door text-[#C79A58] text-lg"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal tracking-wide text-[#F8F8F6]">LLC</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C79A58] font-medium -mt-1">
                  Construction & Maintenance
                </span>
              </div>
            </Link>

            <p className="text-sm font-light text-[#AEB4BD] leading-relaxed pt-2">
              Complete construction, finishing and property maintenance services across Ireland.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C79A58]">
              <i className="bi bi-person text-sm"></i>
              <span>Primary Contact: {siteConfig.contactPerson}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-normal text-[#F8F8F6] tracking-wide uppercase border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group"
                  >
                    <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-normal text-[#F8F8F6] tracking-wide uppercase border-b border-white/10 pb-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#full-construction" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Complete Construction</span>
                </Link>
              </li>
              <li>
                <Link href="/services#foundations" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Foundations</span>
                </Link>
              </li>
              <li>
                <Link href="/services#painting" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Painting</span>
                </Link>
              </li>
              <li>
                <Link href="/services#roofing" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Roofing</span>
                </Link>
              </li>
              <li>
                <Link href="/services#tiling-ceramics" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Tiling</span>
                </Link>
              </li>
              <li>
                <Link href="/services#carpentry" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Carpentry</span>
                </Link>
              </li>
              <li>
                <Link href="/services#property-maintenance" className="hover:text-[#C79A58] transition-colors flex items-center gap-2 group">
                  <i className="bi bi-chevron-right text-[10px] text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
                  <span>Property Maintenance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-normal text-[#F8F8F6] tracking-wide uppercase border-b border-white/10 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <i className="bi bi-whatsapp text-[#25D366] text-base mt-0.5"></i>
                <div>
                  <span className="block text-xs text-[#AEB4BD]/60 uppercase tracking-wider">WhatsApp</span>
                  <a href={siteConfig.whatsapp.link} target="_blank" rel="noopener noreferrer" className="text-[#F8F8F6] hover:text-[#25D366] transition-colors font-medium">
                    {siteConfig.whatsapp.number}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <i className="bi bi-telephone text-[#C79A58] text-base mt-0.5"></i>
                <div>
                  <span className="block text-xs text-[#AEB4BD]/60 uppercase tracking-wider">Phone</span>
                  <a href={siteConfig.phone.link} className="text-[#F8F8F6] hover:text-[#C79A58] transition-colors font-medium">
                    {siteConfig.phone.number}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <i className="bi bi-instagram text-[#C79A58] text-base mt-0.5"></i>
                <div>
                  <span className="block text-xs text-[#AEB4BD]/60 uppercase tracking-wider">Instagram</span>
                  <a href={siteConfig.instagram.link} target="_blank" rel="noopener noreferrer" className="text-[#F8F8F6] hover:text-[#C79A58] transition-colors font-medium">
                    {siteConfig.instagram.handle}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-[#C79A58] text-base mt-0.5"></i>
                <div>
                  <span className="block text-xs text-[#AEB4BD]/60 uppercase tracking-wider">Service Region</span>
                  <span className="text-[#F8F8F6] font-medium">{siteConfig.serviceRegion}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#AEB4BD]/60 font-light text-center md:text-left">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-[#C79A58] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#C79A58] transition-colors cursor-pointer">Cookie Policy</span>
            <span className="hover:text-[#C79A58] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
