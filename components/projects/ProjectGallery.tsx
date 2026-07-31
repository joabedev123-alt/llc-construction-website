'use client';

import React, { useState } from 'react';
import { projectsData, projectCategories, ProjectItem } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectLightbox } from './ProjectLightbox';

interface ProjectGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  limit,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="space-y-10">
      {/* Category Filter Bar */}
      {showFilters && (
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#C79A58] text-[#090C11] border-[#C79A58] shadow-[0_0_15px_rgba(199,154,88,0.3)]'
                    : 'bg-[#101620] text-[#AEB4BD] border-white/10 hover:border-[#C79A58]/50 hover:text-[#F8F8F6]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onNavigate={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
};
