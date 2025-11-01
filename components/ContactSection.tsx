'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you within 24 hours.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-darker to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/20 via-vibrant-purple/20 to-vibrant-cyan/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-3xl font-bold font-space mb-6 gradient-text">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-electric-blue/50 transition-all">
                    <Mail className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-medium group-hover:text-electric-blue transition-colors">
                      hello@developer.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vibrant-purple/20 to-vibrant-cyan/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-vibrant-purple/50 transition-all">
                    <Phone className="w-6 h-6 text-vibrant-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-lg font-medium group-hover:text-vibrant-purple transition-colors">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vibrant-cyan/20 to-electric-blue/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-vibrant-cyan/50 transition-all">
                    <MapPin className="w-6 h-6 text-vibrant-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-medium group-hover:text-vibrant-cyan transition-colors">
                      San Francisco, CA
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: '#', color: 'hover:text-electric-blue' },
                    { icon: Github, href: '#', color: 'hover:text-vibrant-purple' },
                    { icon: Twitter, href: '#', color: 'hover:text-vibrant-cyan' },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-xl glass flex items-center justify-center ${social.color} transition-colors`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-gray-300">
                <span className="text-electric-blue font-bold">Quick response guaranteed.</span>{' '}
                I typically respond to all inquiries within 24 hours. For urgent matters, please call directly.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark rounded-3xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-electric-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-electric-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-electric-blue transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-gray-300">
                  Project Type *
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, projectType: value }))
                  }
                  required
                >
                  <SelectTrigger className="bg-white/5 border-white/10 focus:border-electric-blue transition-colors">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crm">CRM System</SelectItem>
                    <SelectItem value="dashboard">Dashboard</SelectItem>
                    <SelectItem value="tool">Custom Tool</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-white/5 border-white/10 focus:border-electric-blue transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-500 text-lg py-6 group"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
