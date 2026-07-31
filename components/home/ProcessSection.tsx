import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Initial Contact",
      desc: "Tell us about your project, location and the type of work required via phone, WhatsApp or form."
    },
    {
      step: "02",
      title: "Project Assessment",
      desc: "We review the project requirements and discuss the most suitable next steps."
    },
    {
      step: "03",
      title: "Planning & Quote",
      desc: "The scope of work is organised and the project details are clearly presented."
    },
    {
      step: "04",
      title: "Construction & Finishing",
      desc: "The work is completed with attention to quality, organisation and detail."
    },
    {
      step: "05",
      title: "Final Review",
      desc: "The completed work is reviewed with care before the project is concluded."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#101620] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="A Clear Path from Enquiry to Completion"
            description="Our structured step-by-step workflow ensures transparency, safety, and consistent quality from day one."
          />
        </div>

        {/* Timeline Grid (Horizontal Desktop / Vertical Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Horizontal Connecting Gold Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C79A58]/40 to-transparent -z-0"></div>

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151C27] border border-white/10 hover:border-[#C79A58]/50 p-6 flex flex-col justify-between relative z-10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Step Number Circle */}
                <div className="w-12 h-12 rounded-none bg-[#090C11] border border-[#C79A58] text-[#C79A58] font-serif text-xl font-normal flex items-center justify-center mb-6 group-hover:bg-[#C79A58] group-hover:text-[#090C11] transition-colors">
                  {item.step}
                </div>

                <h3 className="font-serif text-xl font-normal text-[#F8F8F6] tracking-tight mb-2 group-hover:text-[#C79A58] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#AEB4BD] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-[#C79A58] uppercase tracking-widest font-semibold">
                Step {item.step}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
