import React from 'react';
import { Button } from '../shared/Button';
import { siteConfig } from '@/data/site-config';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#101620] relative border-b border-white/10 overflow-hidden">
      {/* Background Fine Lines Grid */}
      <div className="absolute inset-0 architectural-gold-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#151C27] border border-[#C79A58]/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090C11] border border-[#C79A58]/40 text-xs font-semibold text-[#C79A58] uppercase tracking-widest">
                <i className="bi bi-geo-alt text-sm"></i>
                <span>NATIONWIDE COVERAGE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F8F6] tracking-tight leading-[1.15]">
                Building and Maintaining Properties Across Ireland
              </h2>

              <p className="text-base sm:text-lg text-[#AEB4BD] font-light leading-relaxed max-w-2xl">
                LLC Construction & Maintenance provides construction, finishing and maintenance services for clients throughout Ireland. Contact the team to discuss your location, project requirements and availability.
              </p>
            </div>

            {/* Right Action (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <Button href="/contact" variant="primary" icon="bi-arrow-right" className="w-full lg:w-auto">
                Check Project Availability
              </Button>
              <a 
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-[#25D366] hover:underline flex items-center gap-2"
              >
                <i className="bi bi-whatsapp"></i>
                <span>Direct WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
