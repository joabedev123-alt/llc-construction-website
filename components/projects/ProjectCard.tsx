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
      className="group relative bg-[#101620] border border-white/10 hover:border-[#C79A58] overflow-hidden cursor-pointer transition-all duration-500 rounded-none shadow-lg"
    >
      {/* Aspect ratio container */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-[#090C11]">
        <Image
          src={project.image}
          alt="LLC Construction Project Gallery"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#090C11]/0 group-hover:bg-[#090C11]/30 transition-all duration-300 flex items-center justify-center">
          {/* Center Expand Icon */}
          <div className="w-12 h-12 bg-[#090C11]/80 backdrop-blur-md border border-[#C79A58] flex items-center justify-center text-[#C79A58] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-xl">
            <i className="bi bi-arrows-angle-expand text-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
