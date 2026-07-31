import React from 'react';
import { siteConfig } from '@/data/site-config';
import { Button } from '../shared/Button';

export const ContactMethods: React.FC = () => {
  const methods = [
    {
      title: "WhatsApp Chat",
      subtitle: "Instant messaging & quote requests",
      value: siteConfig.whatsapp.number,
      link: siteConfig.whatsapp.link,
      actionText: "Message on WhatsApp",
      icon: "bi-whatsapp",
      iconBg: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30",
      variant: "whatsapp" as const
    },
    {
      title: "Direct Business Phone",
      subtitle: "Speak directly with Nilson Nunes",
      value: siteConfig.phone.number,
      link: siteConfig.phone.link,
      actionText: "Call Now",
      icon: "bi-telephone",
      iconBg: "bg-[#C79A58]/10 text-[#C79A58] border-[#C79A58]/30",
      variant: "primary" as const
    },
    {
      title: "Instagram Page",
      subtitle: "View latest projects and updates",
      value: siteConfig.instagram.handle,
      link: siteConfig.instagram.link,
      actionText: "View Instagram",
      icon: "bi-instagram",
      iconBg: "bg-[#C79A58]/10 text-[#C79A58] border-[#C79A58]/30",
      variant: "secondary" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {methods.map((method, idx) => (
        <div 
          key={idx}
          className="bg-[#101620] border border-white/10 hover:border-[#C79A58]/40 p-8 flex flex-col justify-between transition-all duration-300 group"
        >
          <div>
            <div className={`w-12 h-12 border flex items-center justify-center text-xl mb-6 ${method.iconBg}`}>
              <i className={`bi ${method.icon}`}></i>
            </div>
            
            <h3 className="font-serif text-2xl text-[#F8F8F6] font-normal mb-1">
              {method.title}
            </h3>
            <p className="text-xs text-[#AEB4BD] font-light mb-4">
              {method.subtitle}
            </p>
            <p className="text-base font-semibold text-[#F8F8F6] mb-6">
              {method.value}
            </p>
          </div>

          <Button href={method.link} variant={method.variant} icon="bi-arrow-right" className="w-full text-xs">
            {method.actionText}
          </Button>
        </div>
      ))}
    </div>
  );
};
