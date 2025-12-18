'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSupabase } from '@/lib/supabase';

interface ProjectQuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  teamSize: string;
  challenges: string;
  services: string[];
  budget: string;
  timeline: string;
  additionalInfo: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const industryOptions = [
  'E-commerce / Retail',
  'Healthcare / Medical',
  'Technology / SaaS',
  'Manufacturing / Distribution',
  'Professional Services',
  'Real Estate',
  'Financial Services',
  'Other',
];

const teamSizeOptions = [
  'Just me (Solo)',
  '2-10 employees',
  '11-50 employees',
  '51-200 employees',
  '200+ employees',
];

const serviceOptions = [
  'Business Website',
  'Custom Web Application',
  'Workflow Automation',
  "I'm not sure - need consultation",
];

const budgetOptions = [
  '$1,500 - $2,500',
  '$2,500 - $4,000',
  '$4,000+',
  'Not sure yet',
];

const timelineOptions = [
  '1-2 weeks',
  '2-3 weeks',
  '3-4 weeks',
  'Flexible',
];

export default function ProjectQuestionnaireModal({
  isOpen,
  onClose,
}: ProjectQuestionnaireModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    teamSize: '',
    challenges: '',
    services: [],
    budget: '',
    timeline: '',
    additionalInfo: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Stop Lenis smooth scroll
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      if (scrollRef.current) {
        scrollRef.current.focus();
      }
      return () => {
        // Resume Lenis smooth scroll
        if ((window as any).lenis) {
          (window as any).lenis.start();
        }
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleCheckboxChange = (value: string) => {
    const currentServices = formData.services;
    const newServices = currentServices.includes(value)
      ? currentServices.filter((s) => s !== value)
      : [...currentServices, value];

    setFormData({ ...formData, services: newServices });
    if (errors.services) {
      setErrors({ ...errors, services: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (!formData.teamSize) newErrors.teamSize = 'Please select team size';
    if (!formData.challenges.trim()) newErrors.challenges = 'Please describe your challenges';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one option';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = getSupabase();
      const { error: dbError } = await supabase.from('inquiries').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        industry: formData.industry,
        team_size: formData.teamSize,
        challenges: formData.challenges,
        services: formData.services,
        budget: formData.budget,
        timeline: formData.timeline,
        additional_info: formData.additionalInfo || null,
      });

      if (dbError) throw dbError;

      try {
        await fetch('/api/send-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        // Email notification is non-critical
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      teamSize: '',
      challenges: '',
      services: [],
      budget: '',
      timeline: '',
      additionalInfo: '',
    });
    setErrors({});
    onClose();
  };

  const inputClasses = (hasError: boolean) =>
    `w-full bg-white/[0.03] backdrop-blur-sm border ${
      hasError ? 'border-red-500' : 'border-white/10 hover:border-white/20 focus:border-calm-blue'
    } rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none transition-colors`;

  const selectClasses = (hasError: boolean) =>
    `w-full bg-white/[0.03] backdrop-blur-sm border ${
      hasError ? 'border-red-500' : 'border-white/10 hover:border-white/20 focus:border-calm-blue'
    } rounded-xl px-4 py-3 text-white focus:outline-none transition-colors appearance-none cursor-pointer`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
          style={{
            background: 'rgba(8, 12, 24, 0.9)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            ref={scrollRef}
            tabIndex={-1}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl relative outline-none overscroll-contain"
            style={{
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(11, 17, 32, 0.98) 100%)',
              boxShadow: '0 0 60px rgba(74, 144, 226, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors z-10 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Start Your Project
                  </h2>
                  <p className="text-gray-400">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-calm-blue/20 flex items-center justify-center text-calm-blue text-sm font-semibold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses(!!errors.name)}
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Work Email <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses(!!errors.email)}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClasses(false)}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClasses(false)}
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-calm-blue/20 flex items-center justify-center text-calm-blue text-sm font-semibold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-white">Your Business</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Industry <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className={selectClasses(!!errors.industry)}
                          >
                            <option value="" className="bg-slate-900">Select industry</option>
                            {industryOptions.map((option) => (
                              <option key={option} value={option} className="bg-slate-900">
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.industry && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.industry}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Current Team Size <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleChange}
                            className={selectClasses(!!errors.teamSize)}
                          >
                            <option value="" className="bg-slate-900">Select team size</option>
                            {teamSizeOptions.map((option) => (
                              <option key={option} value={option} className="bg-slate-900">
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.teamSize && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.teamSize}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-calm-blue/20 flex items-center justify-center text-calm-blue text-sm font-semibold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-white">Your Project</h3>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        What challenges are you looking to solve? <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleChange}
                        rows={4}
                        className={`${inputClasses(!!errors.challenges)} resize-none`}
                        placeholder="Tell us about the specific challenges or pain points you're facing..."
                      />
                      {errors.challenges && (
                        <p className="text-red-400 text-xs mt-1.5">{errors.challenges}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-3">
                        Which solutions are you interested in? <span className="text-cyan-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceOptions.map((service) => (
                          <label
                            key={service}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              formData.services.includes(service)
                                ? 'bg-calm-blue/10 border-calm-blue/40'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 rounded border-white/20 bg-transparent text-calm-blue focus:ring-calm-blue focus:ring-offset-0"
                            />
                            <span className="text-sm text-gray-200">{service}</span>
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="text-red-400 text-xs mt-2">{errors.services}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Project Budget <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={selectClasses(!!errors.budget)}
                          >
                            <option value="" className="bg-slate-900">Select budget range</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option} className="bg-slate-900">
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.budget && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.budget}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Timeline <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className={selectClasses(!!errors.timeline)}
                          >
                            <option value="" className="bg-slate-900">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option} className="bg-slate-900">
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.timeline && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.timeline}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-calm-blue/20 flex items-center justify-center text-calm-blue text-sm font-semibold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-white">Additional Details</h3>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Anything else we should know?
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={3}
                        className={`${inputClasses(false)} resize-none`}
                        placeholder="Any additional context, requirements, or questions..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-calm-blue hover:bg-calm-blue/90 text-white h-12 rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">Thanks!</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  We'll review your inquiry and get back to you within 24 hours.
                </p>
                <Button
                  onClick={handleClose}
                  className="bg-calm-blue hover:bg-calm-blue/90 text-white px-8 h-11 rounded-xl font-semibold"
                >
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
