"use client";

import { useState, useEffect } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import SparklesButton from '@/components/SparklesButton';

export default function Navbar({ t, lang }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-zinc-800/50 saturate-150 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href={`/${lang}`} className="font-heading font-bold text-xl tracking-tighter hover:text-zinc-300 transition-colors">
          Almas →
        </a>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400 mr-8">
          <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher currentLang={lang} />
          <a 
            href={`/resume_${lang}.pdf`}
            target="_blank" 
            className="px-3 py-1.5 text-xs md:text-sm md:px-4 md:py-2 rounded-full border border-zinc-700/50 hover:bg-zinc-800/50 transition-colors flex items-center gap-1 md:gap-2 text-zinc-300 hover:text-white whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span className="hidden sm:inline">{t.contact.resume}</span>
            <span className="sm:hidden">CV</span>
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
  );
}
