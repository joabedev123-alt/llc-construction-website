import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { servicesData } from '@/data/services';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'About LLC Construction & Maintenance | Ireland',
  description: 'Learn about LLC Construction & Maintenance and its practical approach to complete construction, finishing and property maintenance projects across Ireland.',
  openGraph: {
    title: 'About LLC Construction & Maintenance | Ireland',
    description: 'Learn about LLC Construction & Maintenance and its practical approach to complete construction, finishing and property maintenance projects across Ireland.',
    url: 'https://llcconstruction.ie/about',
  },
};

export default function AboutPage() {
  const principles = [
    {
      title: "Quality Workmanship",
      desc: "Every stage should contribute to a strong and professionally finished result built for long-term endurance."
    },
    {
      title: "Attention to Detail",
      desc: "The final quality of a project depends on careful execution of both major structural work and minor finishing details."
    },
    {
      title: "Clear Communication",
      desc: "Clients should understand the project process, project timeline and know how to contact the team directly."
    },
    {
      title: "Long-Term Value",
      desc: "Construction and maintenance decisions should support durability, usability and the long-term condition of the property."
    }
  ];

  const approachSteps = [
    "Understanding the required work and project goals",
    "Reviewing the property and site conditions across Ireland",
    "Organising the scope of work clearly before starting",
    "Carrying out each stage carefully with proper materials",
    "Reviewing the final result to ensure complete satisfaction"
  ];

  return (
    <main className="min-h-screen bg-[#090C11]">
      {/* 13.1 Page Hero */}
      <PageHero
        eyebrow="ABOUT THE COMPANY"
        title="Construction Focused on Quality, Detail and Reliability"
        description="LLC Construction & Maintenance supports residential construction, finishing and property maintenance projects across Ireland. Our approach is based on practical planning, clear communication and careful execution at every stage."
        breadcrumbCurrent="About"
        bgImage="/images/projects/project-01.jpg"
      />

      {/* 13.2 Company Overview */}
      <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="OUR OVERVIEW"
                title="From Foundations to Final Finishes"
              />

              <p className="text-base sm:text-lg text-[#AEB4BD] font-light leading-relaxed">
                Construction projects involve many connected stages. LLC Construction & Maintenance offers a broad range of services to help clients move through those stages with greater consistency and a clear point of contact.
              </p>

              <p className="text-base text-[#AEB4BD] font-light leading-relaxed">
                Our work covers foundations, plastering, paving, painting, patios, tiling, roofing, carpentry and general property maintenance. Each enquiry is reviewed according to the type of property, project requirements and location.
              </p>

              <div className="pt-4 p-5 bg-[#090C11] border-l-2 border-[#C79A58] text-sm text-[#F8F8F6]">
                <p className="font-medium">Direct Professional Consultation</p>
                <p className="text-xs text-[#AEB4BD] font-light mt-1">
                  Clients can speak directly with <strong className="text-[#C79A58]">{siteConfig.contactPerson}</strong> when discussing a new enquiry for their property in Ireland.
                </p>
              </div>
            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] w-full border border-white/10 overflow-hidden bg-[#090C11]">
                <Image
                  src="/images/projects/construction-progress-01.jpg"
                  alt="Real construction project execution by LLC Construction & Maintenance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101620] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full border border-[#C79A58]/30 -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 13.3 Mission */}
      <section className="py-16 md:py-24 bg-[#090C11] relative border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 border border-[#C79A58] text-[#C79A58] flex items-center justify-center mx-auto text-2xl">
            <i className="bi bi-compass"></i>
          </div>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C79A58] uppercase block">
            OUR MISSION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F8F6]">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-[#AEB4BD] font-light leading-relaxed max-w-3xl mx-auto italic">
            &ldquo;To provide dependable construction and maintenance services that combine practical solutions, careful workmanship and professional communication from the beginning of a project to its final details.&rdquo;
          </p>
        </div>
      </section>

      {/* 13.4 Working Principles */}
      <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeading
              eyebrow="CORE VALUES"
              title="Working Principles"
              description="The standards that guide every construction, renovation, and maintenance project we undertake."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#151C27] border border-white/10 hover:border-[#C79A58]/40 p-8 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <span className="font-serif text-3xl text-[#C79A58] block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#F8F8F6] tracking-tight mb-3 group-hover:text-[#C79A58] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#AEB4BD] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13.5 Capabilities */}
      <section className="py-20 md:py-28 bg-[#090C11] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeading
              eyebrow="FULL CAPABILITIES"
              title="Our Complete Service Range"
              description="Explore the full spectrum of residential construction and finishing services offered across Ireland."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s) => (
              <div
                key={s.id}
                className="bg-[#101620] border border-white/10 p-6 flex items-start gap-4 hover:border-[#C79A58]/40 transition-colors"
              >
                <div className="w-10 h-10 border border-[#C79A58]/40 bg-[#151C27] flex items-center justify-center text-[#C79A58] flex-shrink-0">
                  <i className={`bi ${s.icon} text-lg`}></i>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-normal text-[#F8F8F6] mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-[#AEB4BD] font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13.6 Project Approach */}
      <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR METHODOLOGY"
                title="A Practical Approach to Every Project"
              />

              <div className="space-y-4 pt-2">
                {approachSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-[#151C27] border border-white/10 p-4">
                    <span className="w-7 h-7 bg-[#090C11] border border-[#C79A58] text-[#C79A58] text-xs font-semibold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-[#F8F8F6] font-medium pt-0.5">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Box (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative h-[480px] w-full border border-[#C79A58]/40 shadow-2xl overflow-hidden bg-[#090C11]">
                <Image
                  src="/images/projects/roofing-project-01.jpg"
                  alt="Precision construction approach by LLC Construction & Maintenance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-[#090C11]/90 backdrop-blur-md border border-[#C79A58]/30 p-4">
                  <span className="text-xs font-semibold text-[#C79A58] uppercase tracking-wider block">
                    QUALITY CONTROL
                  </span>
                  <p className="text-xs text-[#AEB4BD] font-light mt-1">
                    Every detail reviewed prior to final project conclusion.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 13.7 CTA */}
      <section className="py-20 bg-[#090C11] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F8F6]">
            Let&rsquo;s Talk About Your Property
          </h2>
          <p className="text-base sm:text-lg text-[#AEB4BD] font-light">
            Contact LLC Construction & Maintenance to discuss the work required and the location of your project anywhere in Ireland.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button href={siteConfig.whatsapp.link} variant="whatsapp" icon="bi-whatsapp">
              Send a WhatsApp Message
            </Button>
            <Button href="/projects" variant="secondary" icon="bi-grid">
              Visit Our Projects
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
