import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { SectionHeading } from '../shared/SectionHeading';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090C11] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Services for Every Stage of Your Project"
            description="From groundworks and foundations to final decorative finishes, our services are designed to support complete residential and property improvement projects across Ireland."
          />
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#151C27] border border-white/10 hover:border-[#C79A58]/50 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Gold Number & Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <span className="font-serif text-2xl font-normal text-[#C79A58]">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-none bg-[#101620] border border-[#C79A58]/30 flex items-center justify-center text-[#C79A58] group-hover:border-[#C79A58] transition-colors">
                    <i className={`bi ${service.icon} text-lg`}></i>
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="font-serif text-2xl font-normal text-[#F8F8F6] tracking-tight mb-3 group-hover:text-[#C79A58] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#AEB4BD] font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Arrow link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#F8F8F6] group-hover:text-[#C79A58] transition-colors">
                <span>Scope Details</span>
                <i className="bi bi-arrow-right text-base text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-12 text-center bg-[#101620] border border-white/10 p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#AEB4BD] font-light">
            Need a specific custom service or structural repair for your property?
          </p>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-widest font-semibold text-[#C79A58] hover:text-[#DAB678] transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Inquire About Services</span>
            <i className="bi bi-chevron-right text-xs"></i>
          </Link>
        </div>

      </div>
    </section>
  );
};
