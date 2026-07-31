import React from 'react';
import Image from 'next/image';
import { Button } from '../shared/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 bg-[#090C11] overflow-hidden flex items-center border-b border-white/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none"></div>

      {/* Decorative Gold Light Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C79A58]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content (7 cols desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C79A58]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C79A58] uppercase">
                CONSTRUCTION & MAINTENANCE ACROSS IRELAND
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal text-[#F8F8F6] tracking-tight leading-[1.05]">
              Built Right.<br />
              <span className="text-[#C79A58] italic font-normal">From the Ground Up.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#AEB4BD] font-light leading-relaxed max-w-xl">
              LLC Construction & Maintenance delivers complete construction, finishing and property maintenance services across Ireland, from foundations and structural work to painting, roofing, tiling and carpentry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <Button href="/contact" variant="primary" icon="bi-arrow-right">
                Request a Quote
              </Button>
              <Button href="/projects" variant="secondary" icon="bi-grid">
                View Our Projects
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#F8F8F6] font-medium">
                <i className="bi bi-shield-check text-[#C79A58] text-xl"></i>
                <span>Quality Workmanship</span>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#F8F8F6] font-medium">
                <i className="bi bi-check-circle text-[#C79A58] text-xl"></i>
                <span>Attention to Detail</span>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#F8F8F6] font-medium">
                <i className="bi bi-house-check text-[#C79A58] text-xl"></i>
                <span>Built to Last</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual (5 cols desktop - Editorial Split Screen) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            
            {/* Main Editorial Image Frame */}
            <div className="relative w-full max-w-md lg:max-w-none h-[480px] sm:h-[560px] lg:h-[620px] border border-[#C79A58]/40 shadow-2xl overflow-hidden group bg-[#101620]">
              <Image
                src="/3607c568-702f-431d-8d7e-6071962f09a7.png"
                alt="Completed residential construction project by LLC Construction & Maintenance in Ireland"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Subtle Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-transparent to-transparent opacity-70"></div>

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#090C11]/90 backdrop-blur-md border border-[#C79A58]/40 p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C79A58] block">
                      COMPLETE CONSTRUCTION
                    </span>
                    <span className="text-xs sm:text-sm text-[#F8F8F6] font-medium">
                      From foundation to final finish
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C79A58] flex items-center justify-center text-[#C79A58]">
                    <i className="bi bi-building text-sm"></i>
                  </div>
                </div>
              </div>

              {/* Geometric Corner Lines Overlay */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C79A58]"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C79A58]"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C79A58]"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C79A58]"></div>
            </div>

            {/* Additional Architectural Accent Line Behind Frame */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full border border-white/10 -z-10 pointer-events-none"></div>

          </div>

        </div>
      </div>
    </section>
  );
};
