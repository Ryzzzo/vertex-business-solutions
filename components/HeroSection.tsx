'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from './ParticleBackground';

const techIcons = ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'];

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-darker to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue rounded-full filter blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-purple rounded-full filter blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vibrant-cyan rounded-full filter blur-[150px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm text-gray-300">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold font-space leading-tight"
            >
              Building Business{' '}
              <span className="gradient-text">Applications</span>{' '}
              That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 leading-relaxed max-w-2xl"
            >
              Transforming business challenges into elegant, scalable solutions.
              Expert in custom CRM systems, enterprise dashboards, and full-stack applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="bg-gradient-to-r from-electric-blue to-vibrant-purple hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-500 text-lg px-8 group"
              >
                View Portfolio
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10 text-lg px-8 group relative overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-6 pt-4"
            >
              <span className="text-sm text-gray-500">Powered by</span>
              <div className="flex items-center space-x-4">
                {techIcons.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="text-xs px-3 py-1 glass rounded-full text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative glass-dark rounded-2xl p-8 glow-purple"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-full filter blur-xl animate-glow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-vibrant-cyan to-vibrant-purple rounded-full filter blur-xl animate-glow" style={{ animationDelay: '1s' }} />

              <div className="relative bg-navy-darker rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-500">
                    <span className="text-vibrant-purple">const</span>{' '}
                    <span className="text-electric-blue">buildApp</span> ={' '}
                    <span className="text-yellow-400">async</span> () =&gt; {'{'}
                  </div>
                  <div className="pl-4 text-gray-500">
                    <span className="text-vibrant-purple">const</span> solution =
                    <span className="text-green-400"> await</span>{' '}
                    <span className="text-electric-blue">create</span>();
                  </div>
                  <div className="pl-4 text-gray-500">
                    <span className="text-vibrant-purple">return</span>{' '}
                    <span className="text-orange-400">scale</span>(solution);
                  </div>
                  <div className="text-gray-500">{'}'}</div>
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -z-10 inset-0 bg-gradient-to-r from-electric-blue via-vibrant-purple to-vibrant-cyan opacity-20 rounded-2xl blur-2xl"
              />
            </motion.div>

            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-20 h-20 border-2 border-electric-blue/30 rounded-lg rotate-12"
            />

            <motion.div
              animate={{
                x: [0, -15, 0],
                y: [0, 25, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-vibrant-purple/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('#services')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-electric-blue transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
