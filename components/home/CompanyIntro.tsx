import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '../shared/SectionHeading';
import { siteConfig } from '@/data/site-config';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[450px] w-full border border-white/10 overflow-hidden bg-[#090C11]">
              <Image
                src="/images/projects/construction-progress-01.jpg"
                alt="Construction progress on residential property in Ireland"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101620] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#090C11]/90 backdrop-blur-md border border-[#C79A58]/30 p-3.5 text-xs text-[#F8F8F6] flex items-center justify-between">
                <span className="text-[#C79A58] font-semibold uppercase tracking-wider">Active Project</span>
                <span>Ireland Coverage</span>
              </div>
            </div>

            {/* Backing Gold Outline Box */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#C79A58]/30 -z-10"></div>
          </div>

          {/* Right Column Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="ABOUT LLC"
              title="Complete Construction. One Reliable Team."
            />

            <p className="text-base sm:text-lg text-[#AEB4BD] font-light leading-relaxed">
              LLC Construction & Maintenance provides practical, detail-focused construction and property maintenance services for projects across Ireland. We support each stage of the work, helping clients move from the initial structure to the final finish with clear communication and consistent attention to quality.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#C79A58] hover:text-[#DAB678] group transition-colors"
              >
                <span>Learn More About Us</span>
                <i className="bi bi-arrow-right text-base group-hover:translate-x-1 transition-transform"></i>
              </Link>

              <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>

              <div className="text-xs text-[#AEB4BD] font-light flex items-center gap-2">
                <i className="bi bi-person-check text-[#C79A58] text-base"></i>
                <span>Direct consultation with {siteConfig.contactPerson}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
