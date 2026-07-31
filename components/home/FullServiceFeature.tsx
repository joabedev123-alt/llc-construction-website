import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';

export const FullServiceFeature: React.FC = () => {
  const featureList = [
    "Initial groundwork and foundations",
    "Structural and exterior work",
    "Interior and exterior finishing",
    "Roofing and carpentry",
    "Final details and property maintenance"
  ];

  return (
    <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10 overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="FROM START TO FINISH"
              title="One Team for Every Stage of Construction"
            />

            <p className="text-base sm:text-lg text-[#AEB4BD] font-light leading-relaxed">
              Managing different stages of a construction project should not feel disconnected. LLC Construction & Maintenance offers a broad range of services, allowing clients to coordinate structural work, exterior improvements and finishing details through one reliable point of contact.
            </p>

            <ul className="space-y-3.5 pt-2">
              {featureList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#F8F8F6] font-medium">
                  <div className="w-5 h-5 rounded-none border border-[#C79A58] bg-[#090C11] flex items-center justify-center text-[#C79A58] text-xs">
                    <i className="bi bi-check"></i>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button href="/contact" variant="primary" icon="bi-arrow-right">
                Discuss Your Project
              </Button>
            </div>
          </div>

          {/* Right Column Large Image (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full border border-[#C79A58]/40 shadow-2xl overflow-hidden bg-[#090C11]">
              <Image
                src="/images/projects/project-01.jpg"
                alt="Comprehensive residential construction project execution"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Stat Box */}
              <div className="absolute top-6 left-6 bg-[#090C11]/90 backdrop-blur-md border border-white/10 p-4 max-w-xs">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C79A58] block mb-1">
                  COORDINATED WORKFLOW
                </span>
                <p className="text-xs text-[#AEB4BD] font-light">
                  Single point of contact from excavation to paint.
                </p>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full border border-white/10 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
