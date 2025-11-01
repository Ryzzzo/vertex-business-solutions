'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy-darker to-black flex items-center justify-center px-6 grain relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue rounded-full filter blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-purple rounded-full filter blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <h1 className="text-[200px] font-bold gradient-text leading-none">
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold font-space mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-12"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-vibrant-purple hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-500 text-lg px-8 group"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10 text-lg px-8"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-400">
              Need help? <a href="/#contact" className="text-electric-blue hover:underline">Contact me</a>
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="url(#gradient)"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.4,73.8C27,80.6,11.2,82.6,-4.7,80.1C-20.6,77.6,-41.2,70.6,-56.8,58.8C-72.4,47,-83,30.4,-86.8,12.4C-90.6,-5.6,-87.6,-24.9,-79.8,-41.8C-72,-58.7,-59.4,-73.2,-44.2,-79.8C-29,-86.4,-11.8,-85.1,2.6,-81.6C17,-78.1,30.6,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
