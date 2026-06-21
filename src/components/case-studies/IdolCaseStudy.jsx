'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OtherProjects from './OtherProjects';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function IdolCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);
  const [activeAnimations, setActiveAnimations] = useState({});

  const triggerAnimation = (id) => {
    if (activeAnimations[id]) return;
    setActiveAnimations(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setActiveAnimations(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link href={`/${lang}`} className="inline-flex items-center px-5 py-2.5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all shadow-2xl group">
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 group-[.is-active]:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {isRu ? 'Назад в портфолио' : 'Back to Portfolio'}
        </Link>
      </div>

      {/* Block 1: Hero */}
      <section className="relative min-h-screen pt-32 pb-20 md:py-32 flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 w-full">
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[#0a0a0a]">
           <iframe
             src="https://player.vimeo.com/video/1203077862?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
             className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-w-[177.77vh] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30"
             allow="autoplay; fullscreen; picture-in-picture"
           ></iframe>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-4">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 text-sm font-medium">SaaS Concept</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            IDOL
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-2xl md:text-4xl text-white font-bold max-w-4xl mx-auto leading-relaxed mb-6">
            AI Creator Operating System
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-zinc-300 font-medium max-w-4xl mx-auto leading-relaxed mb-6">
            {isRu ? 'Концепция платформы, объединяющей создание контента, управление знаниями, планирование публикаций и взаимодействие между AI-креаторами в едином рабочем пространстве.' : 'A platform concept combining content creation, knowledge management, publication planning, and interaction between AI creators in a single workspace.'}
          </motion.p>
          <motion.p variants={fadeInUp} className="text-sm md:text-base text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Проект был создан как продуктовая инициатива и исследование того, каким может быть следующий этап развития AI Creator Economy.' : 'The project was created as a product initiative and exploration of what the next stage of the AI Creator Economy could be.'}
          </motion.p>
          
          {/* Project Meta Info */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 w-full">
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Тип проекта' : 'Project Type'}</span>
              <span className="text-white font-medium">{isRu ? 'Концепт' : 'Concept'}</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Платформа' : 'Platform'}</span>
              <span className="text-white font-medium">Web Application</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Дата' : 'Date'}</span>
              <span className="text-white font-medium">{isRu ? '19 января 2026' : 'January 19, 2026'}</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-white font-medium text-center">Product Designer</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Блок "Моя роль" */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mt-10 mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Моя роль */}
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-white mb-8">
                {isRu ? 'Моя роль' : 'My Role'}
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                {['Product Discovery', 'UX Research', 'User Flow Design', 'Wireframing', 'UI Design', 'Interactive Prototyping'].map((role, i) => (
                  <span key={i} className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 font-medium text-sm md:text-base hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(236,72,153,0.15)] hover:border-pink-500/30 hover:text-white transition-all duration-300 cursor-default">
                    {role}
                  </span>
                ))}
              </motion.div>
            </div>
            {/* Right: Особенности продукта */}
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-white mb-8">
                {isRu ? 'Особенности продукта' : 'Product Features'}
              </motion.h2>
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🤖', text: 'AI Assistant' },
                  { icon: '📝', text: 'Prompt Library' },
                  { icon: '📅', text: 'Content Planning' },
                  { icon: '🎨', text: 'AI Content Creation' },
                  { icon: '🤝', text: 'Creator Marketplace' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-2xl hover:bg-zinc-800/80 hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(236,72,153,0.15)] transition-all duration-300 cursor-default group `}>
                    <span className={`text-2xl group-hover:scale-110 group-[.is-active]:scale-110 group-hover:-rotate-3 group-[.is-active]:-rotate-3 transition-transform duration-300`}>{item.icon}</span>
                    <span className={`text-zinc-300 font-medium group-hover:text-white group-[.is-active]:text-white transition-colors duration-300`}>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Блок "Проблема" */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Text */}
            <div className="space-y-8 text-center md:text-left">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white">
                {isRu ? 'Контент создаётся в десятках разных инструментов' : 'Content is created in dozens of different tools'}
              </motion.h2>
              <div className="text-zinc-400 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  {isRu 
                    ? 'Современный AI-креатор использует множество сервисов для генерации изображений, написания текстов, планирования публикаций и управления проектами.' 
                    : 'A modern AI creator uses multiple services for generating images, writing texts, planning publications, and managing projects.'}
                </p>
                <p>
                  {isRu 
                    ? 'Переключение между инструментами усложняет рабочий процесс, увеличивает количество ручных действий и затрудняет совместную работу.' 
                    : 'Switching between tools complicates the workflow, increases the number of manual actions, and makes collaboration difficult.'}
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <motion.div variants={fadeInUp} className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center overflow-visible">
              <div className="w-full max-w-lg flex flex-wrap items-center justify-center gap-4 relative z-10 pt-8 pb-8">
                {[
                  { name: 'ChatGPT', logo: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128', offset: '-mt-4 -rotate-3' },
                  { name: 'Midjourney', logo: 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=128', offset: 'mt-6 rotate-2' },
                  { name: 'Runway', logo: 'https://www.google.com/s2/favicons?domain=runwayml.com&sz=128', offset: '-mt-2 rotate-3' },
                  { name: 'Nano Banana Pro', logo: 'https://www.google.com/s2/favicons?domain=nanobanana.gg&sz=128', offset: 'mt-8 -rotate-2' },
                  { name: 'SeeDance', logo: 'https://www.google.com/s2/favicons?domain=hailuoai.video&sz=128', offset: '-mt-6 rotate-6' },
                  { name: 'Kling', logo: 'https://www.google.com/s2/favicons?domain=klingai.com&sz=128', offset: 'mt-2 -rotate-3' },
                  { name: 'Veo 3', logo: 'https://www.google.com/s2/favicons?domain=deepmind.google&sz=128', offset: '-mt-8 -rotate-6' },
                  { name: 'Higgsfield', logo: 'https://www.google.com/s2/favicons?domain=higgsfield.ai&sz=128', offset: 'mt-4 rotate-3' }
                ].map((tool, idx) => (
                  <div key={idx} className={"relative " + tool.offset}>
                    <motion.div 
                      animate={{ y: [0, -8, 0], rotate: [0, (idx % 2 === 0 ? -3 : 3), 0] }} 
                      transition={{ repeat: Infinity, duration: 4 + idx * 0.4, ease: "easeInOut" }}
                      whileHover={{ scale: 1.1, zIndex: 20 }}
                      className="bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow transition-colors duration-300 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden shrink-0 bg-white">
                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-zinc-200 font-bold whitespace-nowrap">{tool.name}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. Блок "Продуктовая гипотеза" */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Text */}
            <div className="space-y-8 text-center md:text-left">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white">
                {isRu ? 'Что если весь цикл создания контента будет происходить в одном месте?' : 'What if the entire content creation cycle happened in one place?'}
              </motion.h2>
              <div className="text-zinc-400 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  {isRu 
                    ? 'IDOL был спроектирован как единая операционная система для AI-креаторов.' 
                    : 'IDOL was designed as a unified operating system for AI creators.'}
                </p>
                <p>
                  {isRu 
                    ? 'Вместо использования множества отдельных инструментов пользователь получает централизованное рабочее пространство для создания, хранения, публикации и управления контентом.' 
                    : 'Instead of using many separate tools, the user gets a centralized workspace for creating, storing, publishing, and managing content.'}
                </p>
              </div>
            </div>

            {/* Right: Visual Before/After */}
            <motion.div variants={fadeInUp} className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Было */}
              <div className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 shadow-2xl flex flex-col items-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-default group ${activeAnimations['anim_0'] ? 'is-active' : ''} `} onClick={() => triggerAnimation('anim_0')} tabIndex="0">
                <h3 className="text-zinc-500 font-bold mb-4 uppercase text-sm tracking-wider">{isRu ? 'Было' : 'Before'}</h3>
                {['Множество инструментов', 'Множество переключений', 'Потеря контекста', 'Потеря времени'].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <motion.div 
                      whileInView={{ opacity: [0, 1], y: [10, 0] }} 
                      transition={{ delay: idx * 0.2 }}
                      className={`bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 px-4 py-2 rounded-xl text-center text-sm font-medium w-full shadow-lg transition-colors group-hover:bg-zinc-800 group-[.is-active]:bg-zinc-800 group-hover:text-zinc-300 group-[.is-active]:text-zinc-300`}
                    >
                      {isRu ? step : ['Multiple tools', 'Multiple switches', 'Context loss', 'Time loss'][idx]}
                    </motion.div>
                    {idx !== arr.length - 1 && (
                      <motion.div animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-zinc-700 text-lg font-bold my-1">↓</motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Стало */}
              <div className={`bg-blue-900/20 border border-blue-500/30 rounded-[2rem] p-6 shadow-2xl flex flex-col items-center hover:scale-105 transition-all duration-500 cursor-default group`}>
                <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-wider">{isRu ? 'Стало' : 'After'}</h3>
                {['IDOL', 'Создание контента', 'Планирование', 'Публикация', 'Управление проектами', 'Поиск клиентов'].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <motion.div 
                      whileInView={{ opacity: [0, 1], y: [10, 0] }} 
                      transition={{ delay: idx * 0.15 }}
                      className={`${idx === 0 ? 'bg-blue-600 border-blue-500 text-white shadow-blue-500/20' : 'bg-zinc-800 border-zinc-700 text-zinc-300'} border px-4 py-2 rounded-xl text-center text-sm font-medium w-full shadow-lg group-hover:shadow-xl group-[.is-active]:shadow-xl transition-shadow`}
                    >
                      {isRu ? step : ['IDOL', 'Content creation', 'Planning', 'Publishing', 'Project management', 'Finding clients'][idx]}
                    </motion.div>
                    {idx !== arr.length - 1 && (
                      <motion.div animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-blue-500/50 text-lg font-bold my-1">↓</motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. Основные возможности */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">
            {isRu ? 'Основные возможности' : 'Key Features'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col group ${activeAnimations['anim_1'] ? 'is-active' : ''} relative overflow-hidden`} onClick={() => triggerAnimation('anim_1')} tabIndex="0">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none rounded-[2rem]"></div>
              <div className="p-8 pb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{isRu ? 'Рабочее AI-пространство' : 'AI Workspace'}</h3>
                <p className="text-zinc-400">
                  {isRu ? 'Единое рабочее пространство для создания и управления контентом.' : 'A unified workspace for creating and managing content.'}
                </p>
              </div>
              <div className="mt-4 p-8 flex justify-center items-center relative z-10">
                <img src="/uploads/idol/Dashboard.png" alt="AI Workspace" className={`w-[90%] h-auto object-cover rounded-2xl border border-zinc-700/50 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-[.is-active]:-translate-y-2`} />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col group  relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none rounded-[2rem]"></div>
              <div className="p-8 pb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{isRu ? 'Библиотека промптов' : 'Prompt Library'}</h3>
                <p className="text-zinc-400">
                  {isRu ? 'Хранение, организация и обмен промптами между участниками сообщества.' : 'Storing, organizing, and sharing prompts between community members.'}
                </p>
              </div>
              <div className="mt-4 p-8 flex justify-center items-center relative z-10">
                <img src="/uploads/idol/Studio -_ Explore.png" alt="Prompt Library" className={`w-[90%] h-auto object-cover rounded-2xl border border-zinc-700/50 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-[.is-active]:-translate-y-2`} />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            {/* Card 3: Content Planner */}
            <motion.div variants={fadeInUp} className={`md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col shadow-xl hover:bg-zinc-800 hover:border-purple-500/30 transition-all duration-500 group  relative overflow-hidden hover:-translate-y-1`}>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none rounded-[2rem]"></div>
              <div className="p-8 pb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{isRu ? 'Планировщик контента' : 'Content Planner'}</h3>
                <p className="text-zinc-400">
                  {isRu ? 'Планирование публикаций для Instagram, TikTok, Threads, Telegram и других платформ.' : 'Planning publications for Instagram, TikTok, Threads, Telegram, and other platforms.'}
                </p>
              </div>
              <div className="mt-auto p-6 flex justify-center items-end relative z-10 h-48 md:h-56 overflow-hidden">
                <div className="w-full h-full relative transition-transform duration-700 group-hover:-translate-y-2 group-[.is-active]:-translate-y-2 translate-y-4 flex items-center justify-center">
                  <div className="w-[70%] max-w-[180px] bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-4 shadow-2xl relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-700/50"></div>
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2 bg-zinc-700/50 rounded w-2/3"></div>
                        <div className="h-2 bg-zinc-700/30 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="w-full h-24 bg-zinc-700/30 rounded-xl mb-3 flex items-center justify-center">
                       <svg className="w-8 h-8 text-pink-500/80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-zinc-700/50 rounded w-full"></div>
                      <div className="h-2 bg-zinc-700/50 rounded w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-[15%] w-12 h-12 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-xl flex items-center justify-center animate-bounce shadow-[0_0_15px_rgba(99,102,241,0.2)] z-20" style={{ animationDuration: '3s' }}>
                    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  
                  <div className="absolute bottom-6 left-[15%] w-10 h-10 bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 rounded-lg flex items-center justify-center animate-bounce shadow-lg z-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.26 6.32 6.32 6.32 0 006.21-6.32V8.58a8.2 8.2 0 003.53 1.05V6.26a4.87 4.87 0 01-1.41.43z"/></svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: AI Assistant */}
            <motion.div variants={fadeInUp} className={`md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col md:flex-row group  relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-rose-500/20 to-transparent pointer-events-none rounded-[2rem]"></div>
              <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{isRu ? 'AI-ассистент' : 'AI Assistant'}</h3>
                <p className="text-zinc-400 text-lg">
                  {isRu ? 'Контекстный помощник, который понимает проекты пользователя, файлы, задачи и историю работы.' : 'Contextual assistant that understands user projects, files, tasks, and work history.'}
                </p>
              </div>
              <div className="w-full md:w-[55%] p-8 flex justify-center items-center h-full min-h-[250px] relative z-10">
                <img src="/uploads/idol/Studio -_ Explore -_ Image -_ AI Chat.png" alt="AI Assistant" className={`w-full h-auto object-cover rounded-2xl border border-zinc-700/50 shadow-2xl transition-transform duration-700 group-hover:-translate-x-2 group-[.is-active]:-translate-x-2`} />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div variants={fadeInUp} className={`md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col md:flex-row group  items-center shadow-xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none rounded-[2rem]"></div>
              <div className="p-8 md:p-12 md:w-[45%] flex flex-col justify-center h-full relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{isRu ? 'Единый центр управления' : 'Unified Control Center'}</h3>
                <p className="text-zinc-400 text-lg">
                  {isRu ? 'Управление AI-моделями в одном месте: подключайте аккаунты соцсетей, запускайте задачи и наблюдайте их статистику из единого дашборда.' : 'Manage AI models in one place: connect social accounts, run tasks, and monitor statistics from a single dashboard.'}
                </p>
              </div>
              <div className="w-full md:w-[55%] p-8 flex justify-center items-center h-full min-h-[250px] relative z-10">
                <img src="/uploads/idol/Talent Roster.png" alt="Unified Control Center" className={`w-full h-auto object-cover rounded-2xl border border-zinc-700/50 shadow-2xl transition-transform duration-700 group-hover:-translate-x-2 group-[.is-active]:-translate-x-2`} />
              </div>
            </motion.div>

            {/* Card 6: Creator Marketplace (With Image) */}
            <motion.div variants={fadeInUp} className={`md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col shadow-xl hover:bg-zinc-800 hover:border-emerald-500/30 transition-all duration-500 group  relative overflow-hidden hover:-translate-y-1`}>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none rounded-[2rem]"></div>
              <div className="p-8 pb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{isRu ? 'Маркетплейс креаторов' : 'Creator Marketplace'}</h3>
                <p className="text-zinc-400">
                  {isRu ? 'Пространство для взаимодействия между заказчиками и AI-креаторами.' : 'Space for interaction between clients and AI creators.'}
                </p>
              </div>
              <div className="mt-auto p-6 flex justify-center items-end relative z-10 h-48 md:h-56 overflow-hidden">
                <div className="w-full h-full relative transition-transform duration-700 group-hover:-translate-y-2 group-[.is-active]:-translate-y-2 translate-y-4 flex items-center justify-center">
                  {/* Profile Card 1 */}
                  <div className="absolute z-20 w-[80%] max-w-[200px] bg-zinc-800/90 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-4 shadow-2xl transition-transform duration-700 group-hover:-translate-y-4 group-[.is-active]:-translate-y-4 translate-y-4 animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 p-[2px]">
                        <div className="w-full h-full bg-zinc-800 rounded-full border-2 border-zinc-900 flex items-center justify-center overflow-hidden">
                          <svg className="w-6 h-6 text-zinc-500 mt-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 bg-zinc-600 rounded w-2/3 mb-1.5"></div>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <div className="h-2 bg-zinc-700 rounded w-6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <div className="h-2 bg-emerald-500/50 rounded w-1/3"></div>
                      <div className="h-6 w-16 bg-emerald-500/20 text-emerald-400 rounded-lg text-[10px] font-bold flex items-center justify-center border border-emerald-500/30">Hire</div>
                    </div>
                  </div>
                  
                  {/* Profile Card 2 (Background) */}
                  <div className="absolute z-10 w-[70%] max-w-[180px] bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 rounded-2xl p-4 shadow-xl translate-y-2 translate-x-6 opacity-60 transition-transform duration-700 group-hover:translate-x-12 group-[.is-active]:translate-x-12 group-hover:-rotate-6 group-[.is-active]:-rotate-6 animate-pulse" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2 bg-zinc-700 rounded w-full"></div>
                        <div className="h-2 bg-zinc-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. Как работает платформа */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-left md:text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-12 text-left md:text-center">
            {isRu ? 'От идеи до публикации' : 'From Idea to Publication'}
          </motion.h2>

          <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-4 relative z-10 w-full">
            {['Идея', 'Создание контента', 'Планирование публикаций', 'Публикация во всех соцсетях', 'Аналитика', 'Рекомендации AI-ассистента'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 flex items-center gap-3 hover:border-zinc-700 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 font-mono text-sm font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">
                    {isRu ? step : ['Idea', 'Content Creation', 'Content Planning', 'Publication across all social media', 'Analytics', 'AI Assistant Recommendations'][idx]}
                  </span>
                </motion.div>
                {idx < arr.length - 1 && (
                  <motion.div variants={fadeInUp} className="flex text-zinc-600 rotate-90 md:rotate-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. Почему этот продукт интересен */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">
            {isRu ? 'Почему этот продукт интересен' : 'Why this product is interesting'}
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isRu ? 'Единая экосистема' : 'Unified Ecosystem',
                text: isRu ? 'Объединяет инструменты, которые сегодня существуют отдельно друг от друга.' : 'Combines tools that currently exist separately from each other.',
                icon: '🌍'
              },
              {
                title: isRu ? 'Контекстный AI' : 'Contextual AI',
                text: isRu ? 'AI-ассистент работает не с одним запросом, а понимает весь проект и историю пользователя.' : 'The AI assistant works not with a single request, but understands the entire project and user history.',
                icon: '🧠'
              },
              {
                title: isRu ? 'Creator Economy' : 'Creator Economy',
                text: isRu ? 'Платформа создаёт пространство для взаимодействия между создателями контента, заказчиками и AI-сообществом.' : 'The platform creates a space for interaction between content creators, clients, and the AI community.',
                icon: '🚀'
              }
            ].map((card, i) => (
              <div key={i} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 group `}>
                <div className={`w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-blue-500/20 group-[.is-active]:bg-blue-500/20 transition-all duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 8. Итоги проекта */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-16">
          <div className="w-full">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 text-white text-center md:text-left">
              {isRu ? 'Итоги проекта' : 'Project Results'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group `}>
                <div className={`w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-blue-500/20 group-[.is-active]:bg-blue-500/20 transition-all duration-300`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <p className={`text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors`}>
                  {isRu ? 'Исследование нового класса продуктов для AI Creator Economy.' : 'Researching a new class of products for the AI Creator Economy.'}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group `}>
                <div className={`w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-purple-500/20 group-[.is-active]:bg-purple-500/20 transition-all duration-300`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <p className={`text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors`}>
                  {isRu ? 'Проработка единой платформы вместо набора разрозненных инструментов.' : 'Designing a unified platform instead of a set of fragmented tools.'}
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group `}>
                <div className={`w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-emerald-500/20 group-[.is-active]:bg-emerald-500/20 transition-all duration-300`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <p className={`text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors`}>
                  {isRu ? 'Демонстрация продуктового мышления и проектирования цифрового продукта с нуля.' : 'Demonstrating product thinking and designing a digital product from scratch.'}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Главная мысль кейса */}
      <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mb-24 md:mb-32 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">{isRu ? 'Главная мысль кейса' : 'Key Takeaway'}</h3>
          <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed relative z-10 max-w-4xl mx-auto">
            {isRu 
              ? 'IDOL — это не просто AI-инструмент. Это концепция единой операционной системы для AI-креаторов, которая объединяет создание контента, управление знаниями, публикацию, поиск клиентов и взаимодействие внутри сообщества в рамках одной платформы.' 
              : 'IDOL is not just an AI tool. It is a concept of a unified operating system for AI creators that combines content creation, knowledge management, publishing, finding clients, and community interaction within a single platform.'}
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">
            {isRu ? 'Галерея экранов' : 'Screenshots Gallery'}
          </motion.h2>

          <div className="relative">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start ${!showAllScreenshots ? 'max-h-[800px] md:max-h-[600px] overflow-hidden' : ''}`}>
              <div className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:border-pink-500/30">
                <img src="/uploads/idol/Dashboard.png" alt="Dashboard" className="w-full h-auto block" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <div className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:border-pink-500/30">
                <img src="/uploads/idol/Studio -_ Explore.png" alt="Explore" className="w-full h-auto block" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <div className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:border-pink-500/30">
                <img src="/uploads/idol/Talent Roster.png" alt="Talent Roster" className="w-full h-auto block" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <div className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:border-pink-500/30">
                <img src="/uploads/idol/Studio -_ Explore -_ Image -_ AI Chat.png" alt="AI Chat" className="w-full h-auto block" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <div className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl md:col-span-2 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:border-pink-500/30">
                <img src="/uploads/idol/Studio -_ Explore -_ Image.png" alt="Explore Image" className="w-full h-auto block" onError={(e) => e.target.style.display = 'none'} />
              </div>
            </div>

            {!showAllScreenshots && (
              <div 
                className={`absolute bottom-0 left-0 right-0 h-48 md:h-64 cursor-pointer group ${activeAnimations['anim_2'] ? 'is-active' : ''} z-20`}
                onClick={() => { setShowAllScreenshots(true); triggerAnimation('anim_2'); }}
                tabIndex="0"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-8">
                  <span className={`px-6 py-2.5 bg-zinc-800/90 text-zinc-400 text-sm md:text-base rounded-full backdrop-blur-md border border-zinc-700 pointer-events-auto transition-colors group-hover:bg-zinc-700 group-[.is-active]:bg-zinc-700 group-hover:text-zinc-200 group-[.is-active]:text-zinc-200 shadow-xl`}>
                    {isRu ? 'Показать все скриншоты' : 'Show all screenshots'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Other Projects */}
      <OtherProjects projects={otherProjects} lang={lang} />
    </div>
  );
}
