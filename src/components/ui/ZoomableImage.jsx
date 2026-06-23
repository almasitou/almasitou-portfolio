"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ZoomableImage({ src, alt, className }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when zoomed
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isZoomed]);

  const overlayContent = (
    <AnimatePresence>
      {isZoomed && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          />
          
          {/* Image Container */}
          <div className="relative z-10 w-full h-full p-4 md:p-8 lg:p-12 flex items-center justify-center pointer-events-none">
            <motion.img
              layoutId={`zoomable-img-${src}`}
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-2xl pointer-events-auto cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
            />
            
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-zinc-800/80 hover:bg-zinc-700/80 text-white rounded-full backdrop-blur-md transition-colors pointer-events-auto cursor-pointer border border-white/10 shadow-lg"
              onClick={() => setIsZoomed(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.img
        layoutId={`zoomable-img-${src}`}
        src={src}
        alt={alt}
        className={`cursor-zoom-in transition-all duration-300 hover:opacity-90 ${className || ''}`}
        onClick={() => setIsZoomed(true)}
      />

      {mounted && createPortal(overlayContent, document.body)}
    </>
  );
}
