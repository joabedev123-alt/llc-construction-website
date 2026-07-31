import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';

export const WhyChooseSection: React.FC = () => {
  const advantages = [
    {
      title: "Complete Project Coverage",
      desc: "Support for multiple stages of construction and finishing, from foundations to final carpentry and paint.",
      icon: "bi-building-gear"
    },
    {
      title: "Attention to Detail",
      desc: "Careful execution from heavy structural groundworks down to fine interior finishing and alignment.",
      icon: "bi-check-all"
    },
    {
      title: "Clear Communication",
      desc: "Direct contact with Nilson Nunes and straightforward project discussions without middleman delays.",
      icon: "bi-[#C79A58] bi-chat-left-text"
    },
    {
      title: "Service Across Ireland",
      desc: "Construction, finishing and property maintenance services available for projects throughout all of Ireland.",
      icon: "bi-geo-alt"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#090C11] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="WHY LLC"
            title="Practical Experience. Professional Standards."
            description="We focus on real craftsmanship, clear execution, and honest project delivery across residential properties."
          />
        </div>

        {/* 4 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#101620] border border-white/10 hover:border-[#C79A58]/50 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-none bg-[#151C27] border border-[#C79A58]/30 flex items-center justify-center text-[#C79A58] text-xl mb-6 group-hover:border-[#C79A58] transition-colors">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#F8F8F6] tracking-tight mb-3 group-hover:text-[#C79A58] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#AEB4BD] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-[#C79A58] uppercase tracking-widest font-semibold flex items-center justify-between">
                <span>Standard</span>
                <i className="bi bi-shield-check"></i>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
