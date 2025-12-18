"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioProject {
  title: string;
  description: string;
  images: string[];
  tags?: string[];
  liveUrl?: string;
}

interface PortfolioGalleryModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioGalleryModal = ({ project, isOpen, onClose }: PortfolioGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0f172a] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="relative aspect-video bg-gray-900">
              <Image
                src={project.images[currentIndex]}
                alt={`${project.title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                </>
              )}

              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800/80 rounded-full text-white text-sm">
                  {currentIndex + 1} / {project.images.length}
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                  View Live Demo
                </a>
              )}

              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentIndex ? 'border-cyan-500' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
