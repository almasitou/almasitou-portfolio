"use client";

import { useState, useEffect } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import SparklesButton from '@/components/SparklesButton';
import QuickSummaryModal from '@/components/QuickSummaryModal';

export default function Navbar({ t, lang }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide navbar if scrolling down and past the threshold
      else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleOpenModal = () => setIsModalOpen(true);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('open-quick-summary', handleOpenModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-quick-summary', handleOpenModal);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-zinc-800/50 saturate-150 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tighter">
            AQ<span className="text-blue-500">.</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400 mr-8">
            <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#principles" className="hover:text-white transition-colors">{t.nav.principles}</a>
            <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher currentLang={lang} />

            <a 
              href={`/resume_${lang}.pdf`}
              target="_blank" 
              className="hidden sm:flex px-3 py-1.5 text-xs md:text-sm md:px-4 md:py-2 rounded-full border border-zinc-700/50 hover:bg-zinc-800/50 transition-colors items-center gap-1 md:gap-2 text-zinc-300 hover:text-white whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>{t.contact.resume}</span>
            </a>

            <SparklesButton 
              href="https://t.me/almasitou" 
              target="_blank" 
              className="bg-blue-600 text-white px-3 py-1.5 text-xs md:text-sm md:px-5 md:py-2 rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center gap-1 md:gap-2 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
              </svg>
              <span className="hidden sm:inline relative z-10">{t.nav.hireMe}</span>
              <span className="sm:hidden relative z-10">{lang === 'ru' ? 'Написать' : 'Hire'}</span>
            </SparklesButton>
          </div>
        </div>
      </nav>

      {/* Floating Quick Summary Widget (Top-Right under Navbar) */}
      <div 
        className={`fixed top-[92px] sm:top-24 right-3 sm:right-6 md:right-8 z-40 transition-all duration-300 ease-in-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-28 opacity-0 pointer-events-none'
        }`}
      >
        <button
          id="floating-quick-summary-btn"
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-zinc-950/90 hover:bg-zinc-900/95 border border-blue-500/30 hover:border-blue-500/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer"
          title={lang === 'ru' ? 'Быстрое резюме за 30 секунд' : '30-sec Executive Summary'}
        >
          {/* Glowing neon pulse dot */}
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]"></span>
          </span>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="font-heading text-[11px] sm:text-xs font-bold text-white tracking-tight uppercase">
                {lang === 'ru' ? 'Выжимка 30 сек' : '30s Summary'}
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30">
                {lang === 'ru' ? 'Резюме' : 'TL;DR'}
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 hidden sm:inline font-medium">
              Senior Product Designer • 6+ {lang === 'ru' ? 'лет' : 'yrs'}
            </span>
          </div>
        </button>
      </div>

      {/* Quick Summary 1-Pager Modal */}
      <QuickSummaryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        t={t} 
        lang={lang} 
      />
    </>
  );
}

