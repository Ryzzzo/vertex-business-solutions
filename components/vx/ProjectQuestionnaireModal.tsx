'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectQuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectQuestionnaireModal({
  isOpen,
  onClose,
}: ProjectQuestionnaireModalProps) {
  const [formData, setFormData] = useState({
    industry: '',
    needSimplified: '',
    scale: '',
    painPoints: '',
    capabilities: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
New Project Inquiry from ${formData.name}

Industry/Services: ${formData.industry}

What needs simplified: ${formData.needSimplified}

Scale of operation: ${formData.scale}

Pain points: ${formData.painPoints}

Desired capabilities: ${formData.capabilities}

Timeline: ${formData.timeline}

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
    `.trim();

    const mailtoLink = `mailto:contact@vertexapps.dev?subject=New Project Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      industry: '',
      needSimplified: '',
      scale: '',
      painPoints: '',
      capabilities: '',
      timeline: '',
      name: '',
      email: '',
      phone: '',
    });
    onClose();
  };

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
              className="absolute top-6 right-6 text-soft-gray hover:text-white transition-colors"
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      What is your industry / What services do you provide? *
                    </label>
                    <input
                      type="text"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors"
                      placeholder="e.g., Real estate, custom manufacturing, consulting"
                    />
                  </div>

                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      What does your business need simplified? *
                    </label>
                    <textarea
                      name="needSimplified"
                      required
                      value={formData.needSimplified}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors resize-none"
                      placeholder="What processes or workflows need improvement?"
                    />
                  </div>

                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      What is the scale of your operation? *
                    </label>
                    <input
                      type="text"
                      name="scale"
                      required
                      value={formData.scale}
                      onChange={handleChange}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors"
                      placeholder="e.g., High-value custom products, high-volume sales, service scheduling"
                    />
                  </div>

                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      What pain points are making your business difficult, overwhelming, or
                      impossible? *
                    </label>
                    <textarea
                      name="painPoints"
                      required
                      value={formData.painPoints}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors resize-none"
                      placeholder="What's currently not working or causing frustration?"
                    />
                  </div>

                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      What capabilities does your application need that would make your life
                      easier, more organized, and more efficient? *
                    </label>
                    <textarea
                      name="capabilities"
                      required
                      value={formData.capabilities}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors resize-none"
                      placeholder="What features or tools would help your team?"
                    />
                  </div>

                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      How soon do you need a solution? *
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors"
                      placeholder="e.g., ASAP, within 1 month, flexible"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-light-gray mb-2 font-medium">
                        Your name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-light-gray mb-2 font-medium">
                        Your email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-light-gray mb-2 font-medium">
                      Your phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-deep-space/50 border border-calm-blue/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-calm-blue transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-calm-blue hover:bg-sky-blue text-white h-14 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-calm-blue/50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send My Project Details
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
                  <Send className="w-10 h-10 text-calm-blue" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Thank you!</h3>
                <p className="text-light-gray text-lg mb-8">
                  We'll review your project details and respond within 24 hours.
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
