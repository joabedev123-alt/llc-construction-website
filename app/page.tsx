import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { CompanyIntro } from '@/components/home/CompanyIntro';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ExteriorCarouselSection } from '@/components/home/ExteriorCarouselSection';
import { FullServiceFeature } from '@/components/home/FullServiceFeature';
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { ServiceAreaSection } from '@/components/home/ServiceAreaSection';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'LLC Construction & Maintenance | Construction Services Across Ireland',
  description: 'Professional construction, finishing, roofing, painting, tiling, carpentry and property maintenance services across Ireland.',
  openGraph: {
    title: 'LLC Construction & Maintenance | Construction Services Across Ireland',
    description: 'Professional construction, finishing, roofing, painting, tiling, carpentry and property maintenance services across Ireland.',
    url: 'https://llcconstruction.ie',
    siteName: 'LLC Construction & Maintenance',
    locale: 'en_IE',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090C11]">
      <Hero />
      <CompanyIntro />
      <ServicesSection />
      <ExteriorCarouselSection />
      <FullServiceFeature />
      <FeaturedProjectsSection />
      <ProcessSection />
      <WhyChooseSection />
      <ServiceAreaSection />
      <CTASection />
    </main>
  );
}
