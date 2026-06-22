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

export default function AvroraCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [isNavigating, setIsNavigating] = useState(false);

  const featuresList = isRu 
    ? [
        { icon: '🏭', text: 'Управление производством' },
        { icon: '📦', text: 'Оборачиваемость запасов' },
        { icon: '👥', text: 'Управление ролями' },
        { icon: '📊', text: 'Мониторинг ресурсов' },
      ]
    : [
        { icon: '🏭', text: 'Production Management' },
        { icon: '📦', text: 'Inventory Turnover' },
        { icon: '👥', text: 'Role Administration' },
        { icon: '📊', text: 'Resource Monitoring' },
      ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href={`/${lang}`} 
          onClick={() => setIsNavigating(true)}
          className={`inline-flex items-center px-5 py-2.5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all shadow-2xl group ${isNavigating ? 'is-loading-nav' : ''}`}
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 group-[.is-active]:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {isRu ? 'Назад в портфолио' : 'Back to Portfolio'}
        </Link>
      </div>

      {/* ===================== BLOCK 1: HERO ===================== */}
      <section className="relative h-[100dvh] pt-32 pb-10 md:py-0 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
           <img src="/uploads/avrora/avrora_cover.jpg" alt="Avrora Hero" className="w-full h-full object-cover object-[center_top] opacity-40 blur-sm" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
           <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-10 md:mt-20">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Enterprise SaaS</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            Avrora Holdings
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-300 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Цифровая платформа для управления производственными процессами и оптимизации бизнес-задач' : 'Digital platform for manufacturing process management and business process optimization'}
          </motion.p>
          
          {/* Project Meta Info */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-white font-medium text-sm md:text-base">Lead Product Designer</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Период' : 'Duration'}</span>
              <span className="text-white font-medium text-sm md:text-base">1+ year</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Команда' : 'Team'}</span>
              <span className="text-white font-medium text-sm md:text-base">{isRu ? '4 Дизайнера, Аналитики' : '4 Designers, Analysts'}</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Платформа' : 'Platform'}</span>
              <span className="text-white font-medium text-center text-sm md:text-base">Web / SaaS</span>
            </div>
          </motion.div>
        </motion.div>
      </section>



      {/* ===================== BLOCK 1.5: MY ROLE ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Моя роль */}
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-8">
                {isRu ? 'Моя роль' : 'My Role'}
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                {['Lead Product Design', 'UX Research', 'Interaction Design', 'UI Design', 'Prototyping', 'Design System', 'User Testing', 'Enterprise Architecture', 'Complex Data Visualization'].map((role, i) => (
                  <span key={i} className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(59,130,246,0.15)] hover:text-white transition-all duration-300 rounded-full text-zinc-300 font-medium text-sm md:text-base cursor-default">
                    {role}
                  </span>
                ))}
              </motion.div>
            </div>
            {/* Right: Особенности продукта */}
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-8">
                {isRu ? 'Особенности продукта' : 'Product Features'}
              </motion.h2>
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuresList.map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-xl hover:bg-zinc-800/80 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-default group`}>
                    <span className={`text-2xl group-hover:scale-110 transition-transform duration-300`}>{item.icon}</span>
                    <span className={`text-zinc-300 font-medium group-hover:text-white transition-colors duration-300`}>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 2: THE CHALLENGE ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{isRu ? 'Вызов: Фрагментация процессов' : 'The Challenge: Fragmented Workflows'}</motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed">
              <p>
                {isRu 
                  ? 'До внедрения системы сотрудники работали в множестве разрозненных инструментов: Excel, почта, мессенджеры и Trello.' 
                  : 'Before implementation, employees worked across multiple disconnected tools: Excel spreadsheets, email communication, WhatsApp chats, and Trello boards.'}
              </p>
              <p>
                {isRu 
                  ? 'Эта фрагментация приводила к потере информации, дублированию работы, долгим согласованиям, ошибкам в планировании производства и сложностям в отслеживании запасов.' 
                  : 'This fragmentation caused loss of information, duplicate work, slow approval processes, production planning errors, difficult inventory tracking, and a lack of process transparency.'}
              </p>
              <p className="text-white font-medium">
                {isRu 
                  ? 'Цель: создать централизованную платформу для автоматизации и оптимизации всех производственных операций.' 
                  : 'The goal was to create a centralized platform that automated and optimized manufacturing operations.'}
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
             
             {/* Abstract representation of chaos in dark mode */}
             <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-zinc-800 border border-red-500/30 flex items-center justify-center absolute top-8 left-8 animate-[bounce_6s_infinite] shadow-lg"><span className="text-red-400 font-bold text-sm">Excel</span></div>
                <div className="w-20 h-20 rounded-full bg-zinc-800 border border-blue-500/30 flex items-center justify-center absolute bottom-12 left-12 animate-[bounce_5s_infinite_0.5s] shadow-lg"><span className="text-blue-400 font-bold text-xs">Email</span></div>
                <div className="w-24 h-24 rounded-full bg-zinc-800 border border-green-500/30 flex items-center justify-center absolute top-1/4 right-8 animate-[bounce_7s_infinite_1s] shadow-lg"><span className="text-green-400 font-bold text-sm">WhatsApp</span></div>
                <div className="w-20 h-20 rounded-full bg-zinc-800 border border-blue-400/30 flex items-center justify-center absolute bottom-8 right-1/4 animate-[bounce_4s_infinite_1.5s] shadow-lg"><span className="text-blue-300 font-bold text-xs">Trello</span></div>
                
                <div className="text-center z-10 bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-700 shadow-2xl">
                  <span className="block text-xl md:text-2xl font-bold text-white mb-2">{isRu ? 'Хаос данных' : 'Data Chaos'}</span>
                  <span className="block text-zinc-400 text-sm">{isRu ? 'Потеря информации & дублирование' : 'Information loss & duplication'}</span>
                </div>
              </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 3: RESEARCH PHASE ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16">
          <motion.div variants={fadeInUp} className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {isRu ? 'Понимание реальных производственных процессов' : 'Understanding Real Manufacturing Workflows'}
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              {isRu 
                ? 'Процесс дизайна начался с полевых исследований прямо на производственных площадках.' 
                : 'The design process started with field research inside manufacturing facilities.'}
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              isRu ? 'Визиты на фабрики' : 'Factory visits', 
              isRu ? 'Контекстное наблюдение' : 'Contextual observation', 
              isRu ? 'Интервью сотрудников' : 'Employee interviews', 
              isRu ? 'Картирование процессов' : 'Workflow mapping'
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">{i+1}</div>
                <span className="font-semibold text-zinc-300 text-sm leading-tight">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 md:p-8 flex items-start gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h4 className="text-blue-400 font-bold text-lg mb-2">{isRu ? 'Важное замечание' : 'Important Note'}</h4>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                {isRu 
                  ? 'Стейкхолдеры и руководство компании активно участвовали в тестировании и валидации продуктовых решений на протяжении всего проекта.' 
                  : 'Stakeholders from the manufacturing department actively participated in testing and validating product decisions throughout the project.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 4: LEADERSHIP ROLE ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {isRu ? 'Лидерство в команде' : 'Leading the Design Team'}
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-zinc-400 leading-relaxed mb-8">
              <p>
                {isRu 
                  ? 'Как Lead Product Designer, я отвечал не только за проектирование критически важных модулей, но и за координацию работы всей команды.' 
                  : 'As Lead Product Designer, I was responsible not only for designing critical modules but also for coordinating the work of the entire design team.'}
              </p>
            </motion.div>

            <motion.ul variants={fadeInUp} className="space-y-4">
              {[
                isRu ? 'Распределение задач' : 'Task allocation & tracking', 
                isRu ? 'Ревью дизайна' : 'Design reviews & feedback', 
                isRu ? 'Синхронизация с бизнесом' : 'Business goal alignment', 
                isRu ? 'Проектирование ключевых модулей' : 'Designing key product modules'
              ].map((task, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {task}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={fadeInUp} className="relative w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-xl shadow-sm text-zinc-300 font-semibold w-48 text-center">{isRu ? 'Бизнес' : 'Business'}</div>
              <div className="w-px h-6 bg-zinc-700"></div>
              <div className="bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-xl shadow-sm text-zinc-300 font-semibold w-48 text-center">{isRu ? 'Продукт' : 'Product'}</div>
              <div className="w-px h-6 bg-zinc-700"></div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20"></div>
                <div className="bg-blue-600/20 border border-blue-500/50 px-8 py-4 rounded-xl shadow-lg text-white font-bold text-lg w-56 text-center relative z-10">Lead Designer</div>
              </div>
              
              <div className="w-px h-6 bg-zinc-700"></div>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-[300px]">
                {[1,2,3].map(n => (
                  <div key={n} className="bg-zinc-950 border border-zinc-800 px-4 py-3 rounded-xl shadow-sm text-zinc-500 font-medium text-sm text-center">Designer {n}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 5: PRODUCTION PLANNING ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-3xl mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {isRu ? 'План производства' : 'Production Planning'}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed mb-8">
              {isRu 
                ? 'Модуль помогал производственным командам планировать объемы, управлять запросами, распределять ресурсы и мониторить мощности.' 
                : 'This module helped manufacturing teams plan production volumes, manage requests, allocate resources, and monitor production capacity.'}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/uploads/avrora/aurora_screen_1.png" alt="Production Plan 1" className="w-full h-auto rounded-md shadow-md block" />
            <img src="/uploads/avrora/aurora_screen_3.png" alt="Status Tracking" className="w-full h-auto rounded-md shadow-md block" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 6: INVENTORY TURNOVER ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-3xl mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {isRu ? 'Оборачиваемость запасов' : 'Inventory Turnover'}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed mb-8">
              {isRu 
                ? 'Спроектированы инструменты для мониторинга оборачиваемости запасов, доступности на складах, резервов и производственных потребностей.' 
                : 'Designed tools for monitoring inventory turnover, stock availability, reserve quantities, and production requirements.'}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/uploads/avrora/aurora_screen_7.png" alt="Inventory Turnover 1" className="w-full h-auto rounded-md shadow-md block" />
            <img src="/uploads/avrora/aurora_screen_8.png" alt="Inventory Turnover 2" className="w-full h-auto rounded-md shadow-md block" />
            <img src="/uploads/avrora/aurora_screen_9.png" alt="Inventory Charts" className="w-full h-auto rounded-md shadow-md block" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 7: RAW MATERIALS ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="/uploads/avrora/aurora_screen_4.png" alt="Raw Materials" className="order-2 md:order-1 w-full h-auto rounded-md shadow-md block" />

          <div className="order-1 md:order-2">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {isRu ? 'Управление сырьем' : 'Raw Materials'}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed mb-6">
              {isRu 
                ? 'Модуль позволял производственным командам понимать потребности в материалах, доступность, дефициты и зависимости.' 
                : 'This module enabled production teams to understand material requirements, availability, shortages, and dependencies.'}
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-sm mt-8">
              <h4 className="font-bold text-white mb-2">{isRu ? 'Информационная иерархия' : 'Information Hierarchy'}</h4>
              <p className="text-zinc-400">
                {isRu ? 'Использование расширяемых структур данных (деревьев) для отображения рецептур и многоуровневых спецификаций.' : 'Showcasing expandable data structures to display recipes and multi-level bills of materials.'}
              </p>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* ===================== BLOCK 8: USER ADMIN ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-3xl mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {isRu ? 'Администрирование пользователей' : 'User Administration'}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed mb-8">
              {isRu 
                ? 'Спроектированы интерфейсы управления пользователями, поддерживающие сложные права доступа, роли, группы и оргструктуру.' 
                : 'Designed user management interfaces supporting permissions, roles, groups, and organizational structures.'}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/uploads/avrora/aurora_screen_6.png" alt="Users List" className="w-full h-auto rounded-md shadow-md block" />
            <img src="/uploads/avrora/aurora_screen_5.png" alt="Users Filters" className="w-full h-auto rounded-md shadow-md block" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 9: KEY OUTCOMES ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {isRu ? 'Ключевые результаты' : 'Key Outcomes'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: isRu ? 'Единая платформа' : 'Unified Platform',
                desc: isRu ? 'Заменили разрозненные инструменты (Excel, Trello, 1C) на одну систему.' : 'Replaced multiple disconnected tools (Excel, Trello, 1C) with one ecosystem.'
              },
              {
                title: isRu ? 'Минимизация потерь' : 'Reduced Fragmentation',
                desc: isRu ? 'Значительно сократили потерю данных и дублирование задач.' : 'Significantly reduced workflow fragmentation and data loss.'
              },
              {
                title: isRu ? 'Улучшенная прозрачность' : 'Improved Visibility',
                desc: isRu ? 'Больше прозрачности процессов во всех производственных отделах.' : 'Better transparency across all manufacturing departments.'
              },
              {
                title: isRu ? 'Быстрый доступ' : 'Faster Access',
                desc: isRu ? 'Мгновенный доступ к операционной информации и данным складов.' : 'Instant access to operational information and inventory data.'
              },
              {
                title: isRu ? 'Эффективное планирование' : 'Efficient Planning',
                desc: isRu ? 'Более точное производственное планирование и распределение ресурсов.' : 'More efficient production planning and coordination processes.'
              }
            ].map((outcome, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{outcome.title}</h4>
                <p className="text-zinc-400 leading-relaxed">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================== CTA + OTHER PROJECTS ===================== */}
      <OtherProjects projects={otherProjects} lang={lang} />
    </div>
  );
}
