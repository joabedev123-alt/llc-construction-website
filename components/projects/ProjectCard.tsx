import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative bg-[#101620] border border-white/10 hover:border-[#C79A58]/50 overflow-hidden cursor-pointer transition-all duration-500 flex flex-col"
    >
      {/* Aspect ratio container */}
      <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden bg-[#090C11]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-[#090C11]/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300"></div>

        {/* Zoom Icon Button */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#090C11]/80 backdrop-blur-md border border-[#C79A58]/40 flex items-center justify-center text-[#C79A58] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <i className="bi bi-arrows-angle-expand text-sm"></i>
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 bg-[#090C11]/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C79A58]">
          {project.categoryLabel}
        </div>

        {/* Card Bottom Details */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F8F8F6] tracking-tight group-hover:text-[#C79A58] transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-xs text-[#AEB4BD] font-light group-hover:text-[#F8F8F6] transition-colors">
            <span>View Details</span>
            <i className="bi bi-arrow-right text-[#C79A58] group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
