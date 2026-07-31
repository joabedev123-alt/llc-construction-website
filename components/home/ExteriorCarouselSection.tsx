'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { allProjectImages } from '@/data/projects';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';

export const ExteriorCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = allProjectImages;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, handleNext]);

  return (
    <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="EXTERIOR FINISHING & WORKS"
            title="Acabamento Exterior / Exterior Finishing"
            description="Explore our complete gallery of real project images showing structural masonry, rendering, plastering, slate roofing, paving and fine exterior finishes across Ireland."
          />

          {/* Autoplay Toggle Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all flex items-center gap-2 ${
                isAutoPlay
                  ? 'bg-[#C79A58] text-[#090C11] border-[#C79A58]'
                  : 'bg-[#151C27] text-[#AEB4BD] border-white/10 hover:text-[#F8F8F6]'
              }`}
            >
              <i className={`bi ${isAutoPlay ? 'bi-pause-fill' : 'bi-play-fill'} text-sm`}></i>
              <span>{isAutoPlay ? 'Pause Slideshow' : 'Auto Play'}</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Carousel Display */}
        <div 
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] bg-[#090C11] border border-[#C79A58]/40 shadow-2xl overflow-hidden group"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={`LLC Construction real project image ${currentIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover transition-all duration-700"
          />

          {/* Subtle Dark Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#090C11]/50 via-transparent to-transparent opacity-40"></div>

          {/* Top Floating Counter Badge */}
          <div className="absolute top-6 left-6 bg-[#090C11]/90 backdrop-blur-md border border-[#C79A58]/40 px-4 py-2 flex items-center gap-3 text-xs text-[#F8F8F6]">
            <span className="w-2 h-2 rounded-full bg-[#C79A58] animate-pulse"></span>
            <span className="font-serif text-sm font-normal text-[#C79A58]">
              Image {currentIndex + 1} of {images.length}
            </span>
            <span className="text-[#AEB4BD]/60">|</span>
            <span className="text-[10px] uppercase tracking-widest text-[#AEB4BD]">
              Real Project Showcase
            </span>
          </div>

          {/* Carousel Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Carousel Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#090C11]/80 hover:bg-[#C79A58] text-[#F8F8F6] hover:text-[#090C11] border border-white/20 hover:border-[#C79A58] flex items-center justify-center transition-all duration-300 shadow-xl focus:outline-none"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </button>

          {/* Carousel Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Carousel Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#090C11]/80 hover:bg-[#C79A58] text-[#F8F8F6] hover:text-[#090C11] border border-white/20 hover:border-[#C79A58] flex items-center justify-center transition-all duration-300 shadow-xl focus:outline-none"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </button>

          {/* Bottom Floating Info Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#090C11]/90 backdrop-blur-md border border-white/10 p-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C79A58] block">
                EXTERIOR FINISHING & CONSTRUCTION
              </span>
              <h3 className="font-serif text-lg text-[#F8F8F6] font-normal">
                LLC Construction & Maintenance Project #{currentIndex + 1}
              </h3>
            </div>

            <Button href="/projects" variant="outline" icon="bi-grid" className="py-2 px-4 text-xs">
              View All Images in Gallery
            </Button>
          </div>
        </div>

        {/* Bottom Thumbnail Strip (22 Clickable Thumbnails) */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#C79A58]">
          {images.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-16 border transition-all duration-300 ${
                currentIndex === idx
                  ? 'border-[#C79A58] scale-105 opacity-100 shadow-[0_0_10px_rgba(199,154,88,0.5)]'
                  : 'border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={imgUrl}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
              <span className="absolute bottom-1 right-1 bg-[#090C11]/90 px-1 text-[9px] text-[#F8F8F6]">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
