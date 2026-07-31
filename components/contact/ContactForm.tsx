'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { Button } from '../shared/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    service: 'Complete Construction',
    description: '',
    contactMethod: 'WhatsApp',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesOptions = [
    'Complete Construction',
    'Foundations',
    'Plastering or Rendering',
    'Paving or Walkways',
    'Interior Painting',
    'Exterior Painting',
    'Patio',
    'Tiling or Ceramics',
    'Roofing',
    'Carpentry',
    'Property Maintenance',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.location.trim()) newErrors.location = 'Project location or county is required';
    if (!formData.description.trim()) newErrors.description = 'Please describe your project';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format WhatsApp Message
    const message = `Hello LLC Construction & Maintenance,

I would like to request a project quote.

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Project Location: ${formData.location}
Service Required: ${formData.service}
Preferred Contact Method: ${formData.contactMethod}
Project Description: ${formData.description}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.cleanNumber}?text=${encodedMsg}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Open WhatsApp window
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="bg-[#101620] border border-white/10 p-6 sm:p-10 relative">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-[1px] w-6 bg-[#C79A58]"></span>
        <span className="text-xs font-semibold tracking-[0.2em] text-[#C79A58] uppercase">
          PROJECT ENQUIRY FORM
        </span>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F8F8F6] tracking-tight mb-2">
        Request a Project Quote
      </h3>
      <p className="text-sm text-[#AEB4BD] font-light mb-8">
        Fill out the details below to generate your formatted WhatsApp enquiry directly to Nilson Nunes.
      </p>

      {isSuccess ? (
        <div className="bg-[#151C27] border border-[#C79A58]/50 p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto text-2xl">
            <i className="bi bi-check-lg"></i>
          </div>
          <h4 className="font-serif text-2xl text-[#F8F8F6]">Enquiry Prepared!</h4>
          <p className="text-sm text-[#AEB4BD]">
            Your WhatsApp chat window should have opened automatically. If not, click below to launch WhatsApp.
          </p>
          <div className="pt-2">
            <Button
              href={`https://wa.me/${siteConfig.whatsapp.cleanNumber}?text=${encodeURIComponent(
                `Hello LLC Construction & Maintenance, I would like to request a quote for ${formData.service}.`
              )}`}
              variant="whatsapp"
              icon="bi-whatsapp"
            >
              Open WhatsApp Now
            </Button>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                location: '',
                service: 'Complete Construction',
                description: '',
                contactMethod: 'WhatsApp',
                consent: false,
              });
            }}
            className="text-xs text-[#C79A58] underline block mx-auto pt-4 cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-medium text-[#F8F8F6] mb-2">
                Full Name <span className="text-[#C79A58]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. John Smith"
                className={`w-full bg-[#090C11] border ${
                  errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#C79A58]'
                } px-4 py-3 text-sm text-[#F8F8F6] focus:outline-none transition-colors`}
              />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-medium text-[#F8F8F6] mb-2">
                Phone Number <span className="text-[#C79A58]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +353 87 123 4567"
                className={`w-full bg-[#090C11] border ${
                  errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#C79A58]'
                } px-4 py-3 text-sm text-[#F8F8F6] focus:outline-none transition-colors`}
              />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-medium text-[#AEB4BD] mb-2">
                Email Address <span className="text-xs text-[#AEB4BD]/60">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. john@example.com"
                className="w-full bg-[#090C11] border border-white/10 focus:border-[#C79A58] px-4 py-3 text-sm text-[#F8F8F6] focus:outline-none transition-colors"
              />
            </div>

            {/* Location or County */}
            <div>
              <label htmlFor="location" className="block text-xs uppercase tracking-wider font-medium text-[#F8F8F6] mb-2">
                Project Location or County <span className="text-[#C79A58]">*</span>
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Dublin, Cork, Galway, Kildare..."
                className={`w-full bg-[#090C11] border ${
                  errors.location ? 'border-red-500' : 'border-white/10 focus:border-[#C79A58]'
                } px-4 py-3 text-sm text-[#F8F8F6] focus:outline-none transition-colors`}
              />
              {errors.location && <p className="text-xs text-red-400 mt-1">{errors.location}</p>}
            </div>
          </div>

          {/* Service Required */}
          <div>
            <label htmlFor="service" className="block text-xs uppercase tracking-wider font-medium text-[#F8F8F6] mb-2">
              Service Required <span className="text-[#C79A58]">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[#090C11] border border-white/10 focus:border-[#C79A58] px-4 py-3 text-sm text-[#F8F8F6] focus:outline-none transition-colors cursor-pointer"
            >
              {servicesOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#090C11] text-[#F8F8F6]">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-[#F8F8F6] mb-2">
              Preferred Contact Method
            </label>
            <div className="flex items-center space-x-6">
              {['WhatsApp', 'Telephone', 'Email'].map((method) => (
                <label key={method} className="flex items-center space-x-2 cursor-pointer text-sm text-[#AEB4BD]">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="accent-[#C79A58]"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-xs uppercase tracking-wider font-medium text-[#F8F8F6] mb-2">
              Project Description <span className="text-[#C79A58]">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell us about the scope of work, property condition, or key requirements..."
              className={`w-full bg-[#090C11] border ${
                errors.description ? 'border-red-500' : 'border-white/10 focus:border-[#C79A58]'
              } px-4 py-3 text-sm text-[#F8F8F6] focus:outline-none transition-colors`}
            ></textarea>
            {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 accent-[#C79A58]"
              />
              <span className="text-xs text-[#AEB4BD] font-light leading-relaxed">
                I agree to be contacted regarding my project enquiry by LLC Construction & Maintenance.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-red-400 mt-1">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              icon="bi-whatsapp"
              className="w-full py-4 text-base"
            >
              {isSubmitting ? 'Preparing WhatsApp Message...' : 'Send Project Enquiry'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
