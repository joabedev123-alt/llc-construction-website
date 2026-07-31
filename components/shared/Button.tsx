import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  onClick?: () => void;
  icon?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  onClick,
  icon,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#C79A58] focus:ring-offset-2 focus:ring-offset-[#090C11] disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer";
  
  const variants = {
    primary: "bg-[#C79A58] text-[#090C11] hover:bg-[#DAB678] hover:shadow-[0_0_20px_rgba(199,154,88,0.4)] border border-[#C79A58]",
    secondary: "bg-[#151C27] text-[#F8F8F6] hover:bg-[#101620] hover:text-[#C79A58] border border-white/10 hover:border-[#C79A58]/50",
    outline: "bg-transparent text-[#F8F8F6] border border-[#C79A58]/60 hover:bg-[#C79A58]/10 hover:border-[#C79A58]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-lg hover:shadow-xl border border-[#25D366]"
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <i className={`${icon} text-base transition-transform duration-300 group-hover:translate-x-1`}></i>}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('https://wa.me')) {
      return (
        <a 
          href={href} 
          target={href.startsWith('http') ? '_blank' : '_self'} 
          rel="noopener noreferrer" 
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};
