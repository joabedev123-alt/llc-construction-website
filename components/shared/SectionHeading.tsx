import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-6 bg-[#C79A58]"></span>
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C79A58] uppercase">
            {eyebrow}
          </span>
          {centered && <span className="h-[1px] w-6 bg-[#C79A58]"></span>}
        </div>
      )}
      
      <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#F8F8F6] tracking-tight leading-[1.15] max-w-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-[#AEB4BD] font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
