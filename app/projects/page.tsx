import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Construction Projects | LLC Construction & Maintenance',
  description: 'Explore selected construction, roofing, painting, exterior and property improvement projects by LLC Construction & Maintenance.',
  openGraph: {
    title: 'Construction Projects | LLC Construction & Maintenance',
    description: 'Explore selected construction, roofing, painting, exterior and property improvement projects by LLC Construction & Maintenance.',
    url: 'https://llcconstruction.ie/projects',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#090C11]">
      {/* 14.1 Page Hero */}
      <PageHero
        eyebrow="OUR WORK"
        title="Projects Built with Care and Attention to Detail"
        description="Explore selected construction, roofing, exterior, interior and property improvement work carried out by LLC Construction & Maintenance across Ireland."
        breadcrumbCurrent="Projects"
        bgImage="/images/hero/hero-main.jpg"
      />

      {/* 14.2 Filterable Gallery */}
      <section className="py-20 md:py-28 bg-[#090C11] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="PROJECT PORTFOLIO"
              title="Work Portfolio & Gallery"
              description="Click any project to view high-resolution details in full-screen view."
              centered
            />
          </div>

          <ProjectGallery showFilters={true} />
        </div>
      </section>

      {/* 14.4 Featured Project Layout */}
      <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#151C27] border border-[#C79A58]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] w-full bg-[#090C11]">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Featured Complete Residential Construction"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#151C27] hidden lg:block"></div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C79A58] uppercase block">
                FEATURED PROJECT
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F8F8F6] tracking-tight">
                Complete Residential Construction
              </h2>

              <p className="text-sm sm:text-base text-[#AEB4BD] font-light leading-relaxed">
                A closer look at the structure, roofing and finishing details involved in a complete residential construction project executed to exact standards.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-[#AEB4BD]">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#F8F8F6]">Scope</span>
                  <span>Groundworks, Roofing, Painting & Finishes</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#F8F8F6]">Coverage</span>
                  <span>Ireland Regional Project</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" icon="bi-arrow-right" className="w-full">
                  Request Similar Project
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 14.5 Project CTA */}
      <section className="py-20 bg-[#090C11] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F8F6]">
            Have a Similar Project in Mind?
          </h2>
          <p className="text-base sm:text-lg text-[#AEB4BD] font-light">
            Send us the details of your project and the type of work you require anywhere in Ireland.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button href="/contact" variant="primary" icon="bi-arrow-right">
              Request a Quote
            </Button>
            <Button href={siteConfig.whatsapp.link} variant="whatsapp" icon="bi-whatsapp">
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
