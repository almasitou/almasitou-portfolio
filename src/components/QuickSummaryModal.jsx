"use client";

import React, { useEffect } from 'react';

export default function QuickSummaryModal({ isOpen, onClose, t, lang }) {
  const q = t.quickSummary;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !q) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-3xl overflow-y-auto overflow-x-hidden bg-[#0a0a0a] sm:bg-zinc-950 border-0 sm:border sm:border-zinc-800/90 rounded-none sm:rounded-[2rem] shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 px-5 py-6 sm:p-8 md:p-10 flex flex-col justify-between">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Pinned Circular Frosted Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 sm:absolute sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/15 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all flex items-center justify-center shadow-xl active:scale-95 group cursor-pointer"
          aria-label={q.close}
        >
          <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
            <div className="pr-14 sm:pr-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {q.tag}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t.hero.firstName} {t.hero.lastName}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base font-medium mt-1">
                {q.title} • 6+ {lang === 'ru' ? 'лет опыта' : 'years exp'}
              </p>
            </div>
          </div>

          {/* Status & Location Pill */}
          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {q.status}
            </div>
            <div className="text-zinc-400 font-medium">
              📍 {q.location}
            </div>
          </div>

          {/* 2-Columns Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left: Core Pillars */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <span className="text-blue-500">❖</span> {q.pillarsTitle}
              </h4>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>{q.pillar1}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>{q.pillar2}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>{q.pillar3}</span>
                </li>
              </ul>
            </div>

            {/* Right: Key Highlights */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <span className="text-blue-500">★</span> {q.highlightsTitle}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                {q.h1 && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▹</span>
                    <span>{q.h1}</span>
                  </li>
                )}
                {q.h2 && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▹</span>
                    <span>{q.h2}</span>
                  </li>
                )}
                {q.h3 && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▹</span>
                    <span>{q.h3}</span>
                  </li>
                )}
                {q.h4 && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▹</span>
                    <span>{q.h4}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 pb-8 sm:pb-0 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 shrink-0">
          <a
            href="https://t.me/almasitou"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
            </svg>
            <span>{q.openTelegram}</span>
          </a>

          <a
            href={`/resume_${lang}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-semibold transition-all duration-300 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>{q.downloadResume}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
