import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbCurrent: string;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  breadcrumbCurrent,
  bgImage = "/images/projects/project-01.jpg",
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#090C11] overflow-hidden border-b border-white/10">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 filter blur-[2px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Architectural Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090C11]/80 via-[#090C11]/95 to-[#090C11]"></div>
      
      {/* Decorative Fine Grid Lines */}
      <div className="absolute inset-0 architectural-grid opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#AEB4BD]">
            <li>
              <Link href="/" className="hover:text-[#C79A58] transition-colors flex items-center gap-1">
                <i className="bi bi-house-door text-xs"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <i className="bi bi-chevron-right text-[10px] text-[#C79A58]"></i>
            </li>
            <li className="text-[#C79A58] font-medium" aria-current="page">
              {breadcrumbCurrent}
            </li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#C79A58]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C79A58] uppercase">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F8F8F6] tracking-tight leading-[1.1] mb-6">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#AEB4BD] font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Gold Accent Bar at bottom right */}
      <div className="absolute bottom-0 right-0 w-32 md:w-64 h-[2px] bg-gradient-to-l from-[#C79A58] to-transparent"></div>
    </section>
  );
};
