import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { siteConfig } from '@/data/site-config';

interface CTASectionProps {
  title?: string;
  copy?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Planning a Construction or Maintenance Project?",
  copy = "Speak directly with Nilson Nunes and tell us what you need. We will review your enquiry and discuss the next steps for your project across Ireland."
}) => {
  return (
    <section className="relative py-20 md:py-28 bg-[#090C11] overflow-hidden border-t border-b border-white/10">
      {/* Dark Overlay Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale"
        style={{ backgroundImage: `url('/images/hero/hero-main.jpg')` }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#090C11] via-[#090C11]/90 to-[#090C11]"></div>
      
      {/* Decorative Gold Grid Overlay */}
      <div className="absolute inset-0 architectural-gold-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl border-l-2 border-[#C79A58] pl-6 md:pl-10">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C79A58] uppercase mb-3 block">
            GET IN TOUCH TODAY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F8F6] tracking-tight leading-[1.15] mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-[#AEB4BD] font-light leading-relaxed mb-8">
            {copy}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon="bi-arrow-right">
              Request a Quote
            </Button>
            <Button href={siteConfig.phone.link} variant="secondary" icon="bi-telephone">
              Call {siteConfig.phone.number}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
