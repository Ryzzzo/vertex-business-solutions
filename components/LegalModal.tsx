'use client';

import { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      if (scrollRef.current) {
        scrollRef.current.focus();
      }
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-navy-darker border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
        </DialogHeader>
        <div
          ref={scrollRef}
          tabIndex={-1}
          className="h-[60vh] pr-4 overflow-y-auto outline-none overscroll-contain"
        >
          <div className="text-gray-300 space-y-6">
            {content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
