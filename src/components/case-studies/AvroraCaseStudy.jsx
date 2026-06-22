"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OtherProjects from './OtherProjects';

export default function AvroraCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [isNavigating, setIsNavigating] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen font-sans selection:bg-blue-500/30">
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
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-[100px]"></div>
      </div>

      {/* ===================== 1. HERO SECTION ===================== */}
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
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-300 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Внутренняя цифровая платформа для управления производственными процессами, запасами, сырьем и пользователями внутри производственного предприятия.' : 'Internal digital platform for managing manufacturing processes, inventory, raw materials, and users within a manufacturing enterprise.'}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Lead Product Designer', 'UX Research', 'Product Design', 'Design Leadership', 'Team Management'].map((role, i) => (
              <span key={i} className="px-5 py-2.5 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full text-zinc-300 font-medium text-sm md:text-base">
                {role}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== 2. БИЗНЕС-ПРОБЛЕМА ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32 relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            {isRu ? 'Когда бизнес-процессы разбросаны по пяти разным инструментам' : 'When business processes are scattered across five tools'}
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-6 text-zinc-300 text-lg leading-relaxed max-w-4xl mb-12">
            <p>
              {isRu ? 'До начала проекта сотрудники использовали разные инструменты для разных задач:' : 'Before the project, employees used different tools for different tasks:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>{isRu ? 'постановка задач велась в отдельных сервисах вроде Trello;' : 'task management in separate services like Trello;'}</li>
              <li>{isRu ? 'коммуникация происходила через WhatsApp;' : 'communication via WhatsApp;'}</li>
              <li>{isRu ? 'документооборот велся через электронную почту;' : 'document flow through email;'}</li>
              <li>{isRu ? 'производственные данные хранились в Excel-таблицах;' : 'manufacturing data stored in Excel;'}</li>
              <li>{isRu ? 'информация была распределена между несколькими системами.' : 'information distributed across multiple systems.'}</li>
            </ul>
            <p>
              {isRu ? 'Из-за этого сотрудники тратили время на поиск информации, переключались между сервисами и работали с несинхронизированными данными.' : 'Because of this, employees wasted time searching for info, switching tools, and dealing with out-of-sync data.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div variants={fadeInUp} className="bg-blue-500/10 border border-blue-500/20 p-8 rounded-2xl flex flex-col justify-center">
              <h4 className="text-blue-400 font-bold mb-4 text-2xl">{isRu ? 'Цель проекта:' : 'Project Goal:'}</h4>
              <p className="text-white text-xl leading-relaxed">
                {isRu ? 'Создать единую цифровую платформу для управления ключевыми внутренними процессами предприятия.' : 'Create a unified digital platform to manage key internal enterprise processes.'}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden h-full">
              <div className="flex flex-col gap-3 relative z-10">
                {['Excel', 'Email', 'WhatsApp', 'Trello'].map((tool, i) => (
                  <div key={tool} className="flex items-center gap-4">
                    <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-xl text-zinc-400 text-center w-32 md:w-40 flex-shrink-0">{tool}</div>
                    <div className="text-zinc-600">→</div>
                  </div>
                ))}
              </div>
              <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-0">
                <div className="bg-blue-600/20 border border-blue-500/50 px-6 md:px-8 py-10 md:py-12 rounded-2xl text-blue-400 font-bold text-center h-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] leading-tight">
                  Avrora<br/>Platform
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===================== 3. ИССЛЕДОВАНИЕ НА ПРОИЗВОДСТВЕ ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            {isRu ? 'Погружение в реальные производственные процессы' : 'Diving into Real Manufacturing Workflows'}
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-4xl">
            {isRu ? 'Перед проектированием команда проводила исследования непосредственно на предприятии. В процессе исследования:' : 'Before designing, the team conducted research directly at the enterprise. During the research:'}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.ul variants={fadeInUp} className="space-y-4">
              {[
                isRu ? 'наблюдали за работой сотрудников;' : 'observed employees working;',
                isRu ? 'изучали существующие бизнес-процессы;' : 'studied existing business processes;',
                isRu ? 'проводили интервью;' : 'conducted interviews;',
                isRu ? 'анализировали сценарии взаимодействия между отделами;' : 'analyzed cross-department interaction scenarios;',
                isRu ? 'выявляли точки потери времени и данных.' : 'identified time and data loss points.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 text-lg">
                  <svg className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-blue-500/30 rounded-2xl p-8 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="text-white text-lg font-medium italic">
                {isRu ? '«Решения валидировались совместно с директором предприятия, который лично участвовал в тестировании ключевых сценариев.»' : '"Decisions were validated together with the enterprise director, who personally participated in testing key scenarios."'}
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            {[
              isRu ? 'Наблюдение' : 'Observation',
              isRu ? 'Интервью' : 'Interviews',
              isRu ? 'Карта процессов' : 'Process Mapping',
              isRu ? 'Проектирование' : 'Design',
              isRu ? 'Валидация' : 'Validation'
            ].map((step, i, arr) => (
              <React.Fragment key={step}>
                <div className="px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium text-center flex-1">{step}</div>
                {i < arr.length - 1 && <div className="text-zinc-600 hidden md:block">→</div>}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== 4. МОЯ РОЛЬ ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
              {isRu ? 'Моя роль как Lead Product Designer' : 'My Role as Lead Product Designer'}
            </motion.h2>
            <motion.ul variants={fadeInUp} className="space-y-4">
              {[
                isRu ? 'проектирование ключевых модулей системы;' : 'designing key system modules;',
                isRu ? 'проведение UX-исследований;' : 'conducting UX research;',
                isRu ? 'формирование UX-решений;' : 'forming UX solutions;',
                isRu ? 'управление командой из 3 дизайнеров;' : 'managing a team of 3 designers;',
                isRu ? 'распределение задач между дизайнерами;' : 'allocating tasks among designers;',
                isRu ? 'проведение дизайн-ревью;' : 'conducting design reviews;',
                isRu ? 'контроль качества решений;' : 'quality control of solutions;',
                isRu ? 'проверка соответствия бизнес-целям проекта;' : 'verifying alignment with business goals;',
                isRu ? 'синхронизация работы команды.' : 'synchronizing team work.'
              ].map((role, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {role}
                </li>
              ))}
            </motion.ul>
          </div>

      {/* ===================== 5. УПРАВЛЕНИЕ КОМАНДОЙ ===================== */}
          <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{isRu ? 'Координация команды дизайнеров' : 'Design Team Coordination'}</h3>
            <p className="text-zinc-400 mb-8 relative z-10">
              {isRu ? 'В проекте участвовали ещё три дизайнера. Моя задача заключалась не только в проектировании интерфейсов, но и в организации дизайн-процесса: распределение модулей, постановка задач, дизайн-ревью, поддержание единого UX-подхода и контроль соответствия требованиям бизнеса.' : 'Three other designers participated in the project. My task was not only to design interfaces but to organize the design process: task allocation, design reviews, maintaining a unified UX approach, and ensuring business requirements were met.'}
            </p>
            
            <div className="flex flex-col items-center gap-4 relative z-10 p-6 bg-zinc-950 rounded-2xl border border-zinc-800/50">
              <div className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">Lead Designer</div>
              <div className="text-zinc-600">↓</div>
              <div className="flex flex-wrap justify-center gap-3">
                {[1, 2, 3].map(num => (
                  <div key={num} className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm border border-zinc-700">Designer {num}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== 6. MODULES (PROBLEM/SOLUTION + SCREENSHOTS) ===================== */}
      
      {/* Module 1: Production Planning */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">{isRu ? 'План производства' : 'Production Planning'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-zinc-900/50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <span className="text-red-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Проблема:' : 'Problem:'}</span>
                <p className="text-zinc-300">{isRu ? 'Планирование производства происходило в разрозненных таблицах и требовало постоянного ручного контроля.' : 'Production planning occurred in scattered spreadsheets and required constant manual oversight.'}</p>
              </div>
              <div className="bg-zinc-900/50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                <span className="text-green-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Решение:' : 'Solution:'}</span>
                <p className="text-zinc-300">{isRu ? 'Создан единый интерфейс планирования с централизованным управлением заявками, объемами и производственными участками.' : 'Created a unified planning interface with centralized management of requests, volumes, and production areas.'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 text-sm text-zinc-400">
                <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Планирование заявок' : 'Request Planning'}<br/>
                <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Менеджеры производства' : 'Production Managers'}
              </div>
              <img src="/uploads/avrora/production_plan_1.png" alt="Production Plan 1" className="w-full h-auto rounded-2xl shadow-2xl block" />
            </div>
            <div>
              <div className="mb-4 text-sm text-zinc-400">
                <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Мониторинг статусов' : 'Status Monitoring'}<br/>
                <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Начальники цехов' : 'Shop Floor Managers'}
              </div>
              <img src="/uploads/avrora/status_tracking.png" alt="Status Tracking" className="w-full h-auto rounded-2xl shadow-2xl block" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Module 2: Inventory Turnover */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">{isRu ? 'Оборачиваемость запасов' : 'Inventory Turnover'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-zinc-900/50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <span className="text-red-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Проблема:' : 'Problem:'}</span>
                <p className="text-zinc-300">{isRu ? 'Отсутствовала единая прозрачная картина по остаткам и оборачиваемости продукции.' : 'There was no unified transparent picture of stock balances and product turnover.'}</p>
              </div>
              <div className="bg-zinc-900/50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                <span className="text-green-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Решение:' : 'Solution:'}</span>
                <p className="text-zinc-300">{isRu ? 'Создан инструмент мониторинга запасов и анализа остатков для принятия более быстрых решений.' : 'Created an inventory monitoring and balance analysis tool for faster decision making.'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="mb-4 text-sm text-zinc-400">
                <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Дашборд остатков' : 'Inventory Dashboard'}<br/>
                <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Логисты, Склад' : 'Logisticians, Warehouse'}
              </div>
              <img src="/uploads/avrora/turnover_1.png" alt="Inventory Turnover 1" className="w-full h-auto rounded-2xl shadow-2xl block" />
            </div>
            <div>
              <div className="mb-4 text-sm text-zinc-400">
                <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Аналитика запасов' : 'Inventory Analytics'}<br/>
                <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Руководители' : 'Executives'}
              </div>
              <img src="/uploads/avrora/turnover_2.png" alt="Inventory Turnover 2" className="w-full h-auto rounded-2xl shadow-2xl block" />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="w-full">
            <div className="mb-4 text-sm text-zinc-400">
              <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Графики оборачиваемости' : 'Turnover Charts'}<br/>
              <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Аналитики' : 'Analysts'}
            </div>
            <img src="/uploads/avrora/turnover_3.png" alt="Inventory Charts" className="w-full h-auto rounded-2xl shadow-2xl block" />
          </motion.div>
        </motion.div>
      </section>

      {/* Module 3: Raw Materials */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">{isRu ? 'Управление сырьем' : 'Raw Materials'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-zinc-900/50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <span className="text-red-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Проблема:' : 'Problem:'}</span>
                <p className="text-zinc-300">{isRu ? 'Сотрудникам было сложно отслеживать потребности производства и доступные объемы сырья.' : 'Employees found it difficult to track production needs and available raw material volumes.'}</p>
              </div>
              <div className="bg-zinc-900/50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                <span className="text-green-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Решение:' : 'Solution:'}</span>
                <p className="text-zinc-300">{isRu ? 'Разработан интерфейс контроля сырья с детализацией потребностей, остатков и связанных заявок.' : 'Developed a raw materials control interface detailing requirements, balances, and linked requests.'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full">
            <div className="mb-4 text-sm text-zinc-400">
              <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Детализация сырья (деревья спецификаций)' : 'Raw Material Breakdown (BOM Trees)'}<br/>
              <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Технологи, Отдел закупок' : 'Technologists, Procurement'}
            </div>
            <img src="/uploads/avrora/raw_materials.png" alt="Raw Materials" className="w-full h-auto rounded-2xl shadow-2xl block" />
          </motion.div>
        </motion.div>
      </section>

      {/* Module 4: User Administration */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">{isRu ? 'Администрирование пользователей' : 'User Administration'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-zinc-900/50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <span className="text-red-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Проблема:' : 'Problem:'}</span>
                <p className="text-zinc-300">{isRu ? 'Управление доступами выполнялось вручную и требовало участия нескольких сотрудников.' : 'Access management was manual and required the involvement of several employees.'}</p>
              </div>
              <div className="bg-zinc-900/50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                <span className="text-green-400 font-bold uppercase tracking-wider text-sm block mb-2">{isRu ? 'Решение:' : 'Solution:'}</span>
                <p className="text-zinc-300">{isRu ? 'Создан централизованный модуль управления пользователями и ролями.' : 'Created a centralized user and role management module.'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 text-sm text-zinc-400">
                <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Список сотрудников' : 'Employee List'}<br/>
                <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'HR, Системные администраторы' : 'HR, System Administrators'}
              </div>
              <img src="/uploads/avrora/users_1.png" alt="Users List" className="w-full h-auto rounded-2xl shadow-2xl block" />
            </div>
            <div>
              <div className="mb-4 text-sm text-zinc-400">
                <span className="text-white font-semibold">{isRu ? 'Модуль:' : 'Module:'}</span> {isRu ? 'Настройка ролей' : 'Role Configuration'}<br/>
                <span className="text-white font-semibold">{isRu ? 'Пользователи:' : 'Users:'}</span> {isRu ? 'Системные администраторы' : 'System Administrators'}
              </div>
              <img src="/uploads/avrora/users_2.png" alt="Users Filters" className="w-full h-auto rounded-2xl shadow-2xl block" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== 7. ИЗМЕНЕНИЯ ПОСЛЕ ВНЕДРЕНИЯ ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {isRu ? 'Что изменилось после внедрения' : 'What Changed After Implementation'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              isRu ? 'Единая точка доступа к рабочим процессам' : 'Single point of access to workflows',
              isRu ? 'Снижение необходимости переключаться между системами' : 'Reduced need to switch between systems',
              isRu ? 'Более прозрачное управление данными' : 'More transparent data management',
              isRu ? 'Ускорение выполнения ежедневных операций' : 'Acceleration of daily operations',
              isRu ? 'Упрощение взаимодействия между отделами' : 'Simplified cross-department interaction',
              isRu ? 'Стандартизация внутренних процессов' : 'Standardization of internal processes'
            ].map((outcome, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{outcome}</h4>
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
