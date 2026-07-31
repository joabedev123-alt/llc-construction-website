import React from 'react';
import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { ContactMethods } from '@/components/contact/ContactMethods';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Request a Quote | LLC Construction & Maintenance',
  description: 'Contact LLC Construction & Maintenance to discuss a construction, finishing or property maintenance project anywhere in Ireland.',
  openGraph: {
    title: 'Request a Quote | LLC Construction & Maintenance',
    description: 'Contact LLC Construction & Maintenance to discuss a construction, finishing or property maintenance project anywhere in Ireland.',
    url: 'https://llcconstruction.ie/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#090C11]">
      {/* 15.1 Page Hero */}
      <PageHero
        eyebrow="CONTACT LLC"
        title="Let’s Discuss Your Project"
        description="Tell us what type of work you need, where the project is located and the best way to contact you across Ireland."
        breadcrumbCurrent="Contact"
        bgImage="/images/projects/project-04.jpg"
      />

      {/* 15.2 Direct Contact Methods */}
      <section className="py-16 md:py-24 bg-[#101620] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Direct Contact Channels"
              description="Reach out directly via WhatsApp, direct call or social media to discuss your project requirements with Nilson Nunes."
            />
          </div>

          <ContactMethods />
        </div>
      </section>

      {/* 15.3 Quote Request Form & Service Coverage */}
      <section className="py-20 md:py-28 bg-[#090C11] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Service Coverage Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Coverage Box */}
              <div className="bg-[#101620] border border-white/10 p-8 space-y-4">
                <div className="w-12 h-12 border border-[#C79A58] bg-[#151C27] flex items-center justify-center text-[#C79A58] text-xl">
                  <i className="bi bi-geo-alt"></i>
                </div>
                
                <h3 className="font-serif text-2xl font-normal text-[#F8F8F6] tracking-tight">
                  Serving Projects Across Ireland
                </h3>

                <p className="text-sm text-[#AEB4BD] font-light leading-relaxed">
                  LLC Construction & Maintenance works with project enquiries throughout Ireland. Send your location or county with your enquiry so the team can review availability and discuss project timelines.
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#C79A58] font-medium">
                  <i className="bi bi-check-circle"></i>
                  <span>Nationwide Project Availability</span>
                </div>
              </div>

              {/* Direct Person Contact Card */}
              <div className="bg-[#151C27] border border-[#C79A58]/30 p-8 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C79A58] font-semibold block">
                  PRIMARY CONTACT
                </span>
                
                <h4 className="font-serif text-2xl text-[#F8F8F6]">{siteConfig.contactPerson}</h4>
                <p className="text-xs text-[#AEB4BD] font-light">
                  Managing project enquiries, technical consultations and work scheduling.
                </p>

                <div className="pt-2 space-y-2 text-xs text-[#F8F8F6]">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-whatsapp text-[#25D366]"></i>
                    <span>{siteConfig.whatsapp.number}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-telephone text-[#C79A58]"></i>
                    <span>{siteConfig.phone.number}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 15.5 Direct Speak CTA */}
      <section className="py-20 bg-[#101620] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F8F6]">
            Prefer to Speak Directly?
          </h2>
          <p className="text-base sm:text-lg text-[#AEB4BD] font-light">
            Call the business number or send a WhatsApp message to speak with Nilson Nunes about your project needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button href={siteConfig.phone.link} variant="primary" icon="bi-telephone">
              Call {siteConfig.phone.number}
            </Button>
            <Button href={siteConfig.whatsapp.link} variant="whatsapp" icon="bi-whatsapp">
              Open WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
