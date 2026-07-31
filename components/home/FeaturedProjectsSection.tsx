import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';
import { ProjectGallery } from '../projects/ProjectGallery';

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090C11] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Real Projects. Visible Results."
            description="Explore selected construction, roofing, exterior and finishing work carried out by LLC Construction & Maintenance across Ireland."
          />

          <div className="flex-shrink-0">
            <Button href="/projects" variant="secondary" icon="bi-arrow-right">
              Explore All Projects
            </Button>
          </div>
        </div>

        {/* Gallery Grid preview limited to 6 */}
        <ProjectGallery limit={6} showFilters={false} />

      </div>
    </section>
  );
};
