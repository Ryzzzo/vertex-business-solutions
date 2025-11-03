'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function ProjectQuestionnaireModal({
  isOpen,
  onClose,
}: ProjectQuestionnaireModalProps) {
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
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (!formData.teamSize) newErrors.teamSize = 'Please select team size';
    if (!formData.challenges.trim()) newErrors.challenges = 'Please describe your challenges';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one solution';
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
      // Prepare data for API
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: formData.industry,
        teamSize: formData.teamSize,
        challenges: formData.challenges,
        services: formData.services,
        budget: formData.budget,
        timeline: formData.timeline,
        additionalInfo: formData.additionalInfo,
      };

      // Call Supabase Edge Function
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration missing');
      }

      const apiUrl = `${supabaseUrl}/functions/v1/submit-inquiry`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or email us directly at contact@yourcompany.com');
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

  const serviceOptions = [
    'Custom Dashboard Development',
    'CRM System',
    'Business Intelligence & Reporting',
    'Workflow Automation',
    'Data Visualization',
    "I'm not sure - need consultation",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(8, 12, 24, 0.85)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[24px] p-8 relative"
            style={{
              boxShadow: '0 0 60px rgba(74, 144, 226, 0.2)',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-soft-gray hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-2 text-glow">
                  Let's Build Something Together
                </h2>
                <p className="text-soft-gray mb-8">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white border-b border-calm-blue/20 pb-2">
                      Contact Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Your Name <span className="text-calm-blue">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.name ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-calm-blue transition-colors`}
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Work Email <span className="text-calm-blue">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.email ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-calm-blue transition-colors`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/10 backdrop-blur-sm border border-calm-blue/30 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-calm-blue transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Company Name <span className="text-calm-blue">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.company ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-calm-blue transition-colors`}
                          placeholder="Acme Inc."
                        />
                        {errors.company && (
                          <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white border-b border-calm-blue/20 pb-2">
                      Your Business
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Industry <span className="text-calm-blue">*</span>
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.industry ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors [&>option]:bg-space-navy [&>option]:text-white`}
                        >
                          <option value="" className="bg-space-navy text-white">Select industry</option>
                          <option value="E-commerce / Retail" className="bg-space-navy text-white">E-commerce / Retail</option>
                          <option value="Healthcare / Medical" className="bg-space-navy text-white">Healthcare / Medical</option>
                          <option value="Technology / SaaS" className="bg-space-navy text-white">Technology / SaaS</option>
                          <option value="Manufacturing / Distribution" className="bg-space-navy text-white">Manufacturing / Distribution</option>
                          <option value="Professional Services" className="bg-space-navy text-white">Professional Services</option>
                          <option value="Real Estate" className="bg-space-navy text-white">Real Estate</option>
                          <option value="Financial Services" className="bg-space-navy text-white">Financial Services</option>
                          <option value="Other" className="bg-space-navy text-white">Other</option>
                        </select>
                        {errors.industry && (
                          <p className="text-red-400 text-sm mt-1">{errors.industry}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Current Team Size <span className="text-calm-blue">*</span>
                        </label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.teamSize ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors [&>option]:bg-space-navy [&>option]:text-white`}
                        >
                          <option value="" className="bg-space-navy text-white">Select team size</option>
                          <option value="Just me (Solo)" className="bg-space-navy text-white">Just me (Solo)</option>
                          <option value="2-10 employees" className="bg-space-navy text-white">2-10 employees</option>
                          <option value="11-50 employees" className="bg-space-navy text-white">11-50 employees</option>
                          <option value="51-200 employees" className="bg-space-navy text-white">51-200 employees</option>
                          <option value="200+ employees" className="bg-space-navy text-white">200+ employees</option>
                        </select>
                        {errors.teamSize && (
                          <p className="text-red-400 text-sm mt-1">{errors.teamSize}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white border-b border-calm-blue/20 pb-2">
                      Your Project
                    </h3>

                    <div>
                      <label className="block text-light-gray mb-2 font-medium">
                        What challenges are you looking to solve? <span className="text-calm-blue">*</span>
                      </label>
                      <textarea
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full bg-white/10 backdrop-blur-sm border ${
                          errors.challenges ? 'border-red-500' : 'border-calm-blue/30'
                        } rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-calm-blue transition-colors resize-none`}
                        placeholder="Tell us about the specific challenges or pain points you're facing..."
                      />
                      {errors.challenges && (
                        <p className="text-red-400 text-sm mt-1">{errors.challenges}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-light-gray mb-3 font-medium">
                        Which solutions are you interested in? <span className="text-calm-blue">*</span>
                      </label>
                      <div className="space-y-3">
                        {serviceOptions.map((service) => (
                          <label
                            key={service}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="mt-1 w-5 h-5 rounded border-calm-blue/30 bg-deep-space/50 text-calm-blue focus:ring-calm-blue focus:ring-offset-0"
                            />
                            <span className="text-light-gray group-hover:text-white transition-colors">
                              {service}
                            </span>
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="text-red-400 text-sm mt-2">{errors.services}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Project Budget <span className="text-calm-blue">*</span>
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.budget ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors [&>option]:bg-space-navy [&>option]:text-white`}
                        >
                          <option value="" className="bg-space-navy text-white">Select budget range</option>
                          <option value="Under $2,000" className="bg-space-navy text-white">Under $2,000</option>
                          <option value="$2,000 - $5,000" className="bg-space-navy text-white">$2,000 - $5,000</option>
                          <option value="$5,000 - $10,000" className="bg-space-navy text-white">$5,000 - $10,000</option>
                          <option value="$10,000+" className="bg-space-navy text-white">$10,000+</option>
                          <option value="Need help determining budget" className="bg-space-navy text-white">Need help determining budget</option>
                        </select>
                        {errors.budget && (
                          <p className="text-red-400 text-sm mt-1">{errors.budget}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-light-gray mb-2 font-medium">
                          Timeline <span className="text-calm-blue">*</span>
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={`w-full bg-white/10 backdrop-blur-sm border ${
                            errors.timeline ? 'border-red-500' : 'border-calm-blue/30'
                          } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors [&>option]:bg-space-navy [&>option]:text-white`}
                        >
                          <option value="" className="bg-space-navy text-white">Select timeline</option>
                          <option value="Urgent (within 2 weeks)" className="bg-space-navy text-white">Urgent (within 2 weeks)</option>
                          <option value="1 month" className="bg-space-navy text-white">1 month</option>
                          <option value="2-3 months" className="bg-space-navy text-white">2-3 months</option>
                          <option value="3-6 months" className="bg-space-navy text-white">3-6 months</option>
                          <option value="Flexible / Exploring options" className="bg-space-navy text-white">Flexible / Exploring options</option>
                        </select>
                        {errors.timeline && (
                          <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white border-b border-calm-blue/20 pb-2">
                      Additional Details
                    </h3>

                    <div>
                      <label className="block text-light-gray mb-2 font-medium">
                        Anything else we should know?
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-white/10 backdrop-blur-sm border border-calm-blue/30 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-calm-blue transition-colors resize-none"
                        placeholder="Any additional context, requirements, or questions..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-calm-blue hover:bg-sky-blue text-white h-14 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-calm-blue/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Your Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-calm-blue/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-calm-blue" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Thanks!</h3>
                <p className="text-light-gray text-lg mb-8">
                  We'll review your inquiry and get back to you within 24 hours.
                </p>
                <Button
                  onClick={handleClose}
                  className="bg-calm-blue hover:bg-sky-blue text-white px-8 h-12 rounded-xl font-semibold"
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
