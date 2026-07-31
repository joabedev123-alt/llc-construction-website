import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'LLC Construction & Maintenance | Ireland',
    template: '%s | LLC Construction & Maintenance',
  },
  description: 'Professional construction, finishing, roofing, painting, tiling, carpentry and property maintenance services across Ireland.',
  keywords: [
    'LLC Construction',
    'Construction Ireland',
    'Property Maintenance Ireland',
    'Roofing Ireland',
    'Plastering Ireland',
    'Tiling Ireland',
    'Carpentry Ireland',
    'Paving Ireland',
    'Nilson Nunes',
  ],
  authors: [{ name: 'LLC Construction & Maintenance' }],
  creator: 'LLC Construction & Maintenance',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteConfig.url,
    title: 'LLC Construction & Maintenance | Construction Services Across Ireland',
    description: 'Professional construction, finishing, roofing, painting, tiling, carpentry and property maintenance services across Ireland.',
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone.number,
    sameAs: [siteConfig.instagram.link, siteConfig.whatsapp.link],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Ireland',
    },
    knowsAbout: [
      'Full Construction',
      'Foundations',
      'Plastering and Rendering',
      'Paving and Walkways',
      'Interior and Exterior Painting',
      'Patios',
      'Tiling and Ceramics',
      'Roofing',
      'Carpentry',
      'Property Maintenance',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090C11] text-[#F8F8F6] antialiased selection:bg-[#C79A58] selection:text-[#090C11]">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
