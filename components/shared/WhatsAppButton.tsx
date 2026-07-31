'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/site-config';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const encodedMsg = encodeURIComponent(siteConfig.whatsapp.defaultMessage);
  const whatsappUrl = `${siteConfig.whatsapp.link}?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Tooltip */}
      <div 
        className={`hidden sm:block transition-all duration-300 transform ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-[#101620] text-[#F8F8F6] border border-[#C79A58]/40 px-3.5 py-1.5 rounded text-xs font-medium tracking-wide shadow-xl whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LLC Construction & Maintenance on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 whatsapp-pulse"
      >
        <i className="bi bi-whatsapp text-2xl sm:text-3xl"></i>
      </a>
    </div>
  );
};
