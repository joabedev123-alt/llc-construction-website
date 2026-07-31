'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { ProjectItem, allProjectImages } from '@/data/projects';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onNavigate: (project: ProjectItem) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  projects,
  onClose,
  onNavigate,
}) => {
  const images = allProjectImages;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (project) {
      const idx = projects.findIndex((p) => p.id === project.id);
      if (idx !== -1 && idx < images.length) {
        setActiveImageIndex(idx);
      }
    }
  }, [project, projects, images.length]);

  if (!project) return null;

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#090C11]/98 backdrop-blur-xl transition-opacity duration-300 p-4 sm:p-6">
      {/* Background click to close */}
      <div className="absolute inset-0 z-0" onClick={onClose}></div>

      {/* Top Controls Bar */}
      <div className="relative z-10 w-full max-w-7xl flex items-center justify-between py-2 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-none border border-[#C79A58] bg-[#101620] flex items-center justify-center text-[#C79A58]">
            <i className="bi bi-images text-sm"></i>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C79A58] font-semibold block">
              ACABAMENTO EXTERIOR & REAL PROJECTS
            </span>
            <h3 className="font-serif text-lg text-[#F8F8F6] font-normal">
              {project.title} — Photo {activeImageIndex + 1} of {images.length}
            </h3>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close project preview"
          className="p-2.5 text-[#AEB4BD] hover:text-[#C79A58] transition-colors focus:outline-none rounded-full bg-[#101620] border border-white/10 hover:border-[#C79A58]"
        >
          <i className="bi bi-x-lg text-xl"></i>
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 w-full max-w-6xl h-[55vh] sm:h-[65vh] my-auto flex items-center justify-center">
        {/* Navigation Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 text-[#F8F8F6] hover:text-[#090C11] bg-[#101620]/90 hover:bg-[#C79A58] border border-white/20 hover:border-[#C79A58] transition-all rounded-full focus:outline-none shadow-2xl"
        >
          <i className="bi bi-chevron-left text-xl sm:text-2xl"></i>
        </button>

        {/* Display Image */}
        <div className="relative w-full h-full border border-[#C79A58]/40 shadow-2xl overflow-hidden bg-[#090C11]">
          <Image
            src={images[activeImageIndex]}
            alt={`LLC Construction project image ${activeImageIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-contain"
          />
        </div>

        {/* Navigation Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 text-[#F8F8F6] hover:text-[#090C11] bg-[#101620]/90 hover:bg-[#C79A58] border border-white/20 hover:border-[#C79A58] transition-all rounded-full focus:outline-none shadow-2xl"
        >
          <i className="bi bi-chevron-right text-xl sm:text-2xl"></i>
        </button>
      </div>

      {/* Bottom Thumbnail Strip (All 22 Images) */}
      <div className="relative z-10 w-full max-w-7xl pt-2">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#C79A58]">
          {images.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-12 border transition-all duration-300 ${
                activeImageIndex === idx
                  ? 'border-[#C79A58] scale-105 opacity-100 shadow-[0_0_10px_rgba(199,154,88,0.5)]'
                  : 'border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={imgUrl}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
              <span className="absolute bottom-0.5 right-0.5 bg-[#090C11]/90 px-1 text-[8px] text-[#F8F8F6]">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
