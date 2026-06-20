'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SparklesButton from '@/components/SparklesButton';
import OtherProjects from './OtherProjects';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fastFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function KaspiCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);
  const [activeAnimations, setActiveAnimations] = useState({});

  const triggerAnimation = (id) => {
    if (activeAnimations[id]) return;
    setActiveAnimations(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setActiveAnimations(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link href={`/${lang}`} className="inline-flex items-center px-5 py-2.5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all shadow-2xl group">
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {isRu ? 'Назад в портфолио' : 'Back to Portfolio'}
        </Link>
      </div>

      {/* Block 1: Hero */}
      <section className="relative min-h-screen md:min-h-[90vh] pt-32 pb-10 md:py-0 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 w-full">
        <div className="absolute inset-0 w-full h-full z-0">
           <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d0ac70248526435.Y3JvcCwxMDA3LDc4OCwzNDEsMA.png" alt="Kaspi Hero" className="w-full h-full object-cover object-[center_top] md:object-center" />
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-10 md:mt-20">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wider text-red-500 uppercase">UX/UI Concept</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            Kaspi Афиша
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Проектирование билетного сервиса для экосистемы Kaspi' : 'Designing a ticketing service for the Kaspi ecosystem'}
          </motion.p>
          
          {/* Project Meta Info */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[150px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Тип проекта' : 'Project Type'}</span>
              <span className="text-white font-medium">{isRu ? 'Тестовое задание' : 'Test Assignment'}</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[150px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Платформа' : 'Platform'}</span>
              <span className="text-white font-medium">iOS / Android</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[150px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Релиз' : 'Release Date'}</span>
              <span className="text-white font-medium text-center leading-tight">{isRu ? '30 апреля 2026' : 'April 30, 2026'}</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[150px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-white font-medium text-center leading-tight">Product Designer</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro text */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-left">
          <motion.div variants={fadeInUp} className="space-y-6 max-w-4xl relative z-10">
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
              {isRu 
                ? 'Первоначальная задача была сосредоточена на покупке билетов в кинотеатры. В процессе проектирования я предложил более масштабируемое решение — единый сервис для покупки билетов на различные типы мероприятий: киносеансы, концерты, театральные постановки, спортивные события и шоу.' 
                : 'The initial task focused on buying cinema tickets. During the design process, I proposed a more scalable solution — a unified ticket service for various types of events: movies, concerts, theater plays, sports events, and shows.'}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
              {isRu 
                ? 'Основной целью было создать понятный пользовательский сценарий, который органично встраивается в существующую экосистему Kaspi и сохраняет привычный опыт взаимодействия для миллионов пользователей.' 
                : 'The main goal was to create a clear user flow that organically integrates into the existing Kaspi ecosystem and preserves the familiar user experience for millions of users.'}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Почему Kaspi? */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="mb-12 max-w-3xl">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-left">
              {isRu ? 'Почему Kaspi?' : 'Why Kaspi?'}
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-lg md:text-xl text-zinc-400">
              <p>{isRu ? 'Kaspi уже является частью повседневной жизни миллионов пользователей и помогает решать широкий спектр финансовых и бытовых задач.' : 'Kaspi is already part of the daily lives of millions of users, helping solve a wide range of financial and household tasks.'}</p>
              <p>{isRu ? 'Покупка билетов на мероприятия может стать естественным продолжением существующей экосистемы и использовать уже сформированные пользовательские привычки.' : 'Buying tickets for events can become a natural extension of the existing ecosystem, utilizing already formed user habits.'}</p>
              <p>{isRu ? 'Вместо необходимости устанавливать отдельные приложения пользователь получает новый сервис внутри знакомой среды.' : 'Instead of needing to install separate apps, the user gets a new service within a familiar environment.'}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: isRu ? 'Миллионы пользователей' : 'Millions of Users', icon: '👥', desc: isRu ? 'Использование существующей аудитории Kaspi без необходимости привлекать пользователей с нуля.' : 'Utilizing Kaspi’s existing audience without needing to acquire users from scratch.' },
              { title: isRu ? 'Встроенная оплата' : 'Built-in Payment', icon: '💳', desc: isRu ? 'Покупка билетов через привычные платёжные сценарии экосистемы.' : 'Buying tickets through familiar payment flows within the ecosystem.' },
              { title: isRu ? 'Знакомый интерфейс' : 'Familiar Interface', icon: '📱', desc: isRu ? 'Минимальный порог входа благодаря уже знакомым паттернам взаимодействия.' : 'Minimal entry barrier thanks to familiar interaction patterns.' },
              { title: isRu ? 'Новый сценарий' : 'New Use Case', icon: '🎫', desc: isRu ? 'Расширение возможностей экосистемы за счёт сервисов мероприятий и развлечений.' : 'Expanding ecosystem capabilities through event and entertainment services.' }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 hover:bg-zinc-800/80 transition-colors text-left flex flex-col">
                <div className="text-4xl mb-6">{card.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Product Concept (Skibo style) */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32 text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="relative rounded-3xl md:rounded-[3rem] bg-gradient-to-tr from-red-900/40 to-zinc-900 border border-red-500/20 overflow-hidden flex flex-col items-start md:items-center pt-10 md:pt-20 px-4 md:px-6 shadow-[0_0_50px_rgba(239,68,68,0.1)] group"
        >
          <div className="w-full relative z-20 mb-12 px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 text-white text-left md:text-center">{isRu ? 'Продуктовая концепция' : 'Product Concept'}</h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mb-16">
              <div className="flex-1 text-zinc-300 text-base md:text-lg leading-relaxed space-y-6 text-left">
                <p className="text-white font-semibold text-xl md:text-2xl mb-2">
                  {isRu ? 'От покупки билета к полноценному сервису мероприятий' : 'From ticket purchase to a full event service'}
                </p>
                <p>{isRu ? 'Вместо проектирования отдельного сценария для кинотеатров я сосредоточился на создании универсальной архитектуры, которая может работать с различными форматами мероприятий.' : 'Instead of designing a separate flow for cinemas, I focused on creating a versatile architecture that can handle different event formats.'}</p>
                <p>{isRu ? 'Такой подход позволяет пользователю использовать единый привычный сценарий независимо от того, покупает он билет в кино, театр, на концерт или спортивное событие.' : 'This approach allows the user to follow a single familiar flow regardless of whether they are buying a ticket for a movie, theater, concert, or sporting event.'}</p>
                <p>{isRu ? 'Для бизнеса это создаёт основу для масштабирования продукта без необходимости разрабатывать отдельные решения для каждой категории мероприятий.' : 'For the business, this lays the foundation for scaling the product without having to develop separate solutions for each event category.'}</p>
              </div>

              {/* Visual Diagram */}
              <div className="flex-1 w-full bg-zinc-950/50 rounded-[2rem] p-6 md:p-8 border border-zinc-800/50 flex flex-col md:flex-row gap-6 md:gap-4 items-stretch justify-center relative">
                {/* Left side: Different Services */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex gap-2 justify-center flex-wrap">
                    <span className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium whitespace-nowrap">🎬 {isRu ? 'Кино' : 'Movie'}</span>
                    <span className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium whitespace-nowrap">🎭 {isRu ? 'Театр' : 'Theater'}</span>
                    <span className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium whitespace-nowrap">🎤 {isRu ? 'Концерт' : 'Concert'}</span>
                    <span className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium whitespace-nowrap">🏟 {isRu ? 'Спорт' : 'Sport'}</span>
                    <span className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium whitespace-nowrap">🎪 {isRu ? 'Шоу' : 'Show'}</span>
                  </div>
                  <div className="flex justify-center text-zinc-600 my-2">↓</div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-center">
                    <span className="text-zinc-400 font-medium text-sm">{isRu ? 'Разные сервисы' : 'Different Services'}</span>
                  </div>
                </div>

                {/* VS or Arrow */}
                <div className="hidden md:flex items-center justify-center px-2">
                  <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
                </div>
                <div className="flex md:hidden justify-center text-zinc-700 my-2">↓</div>

                {/* Right side: Kaspi Afisha */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center h-full flex flex-col justify-center gap-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="font-bold text-white text-lg relative z-10">Kaspi Афиша</div>
                    <div className="text-red-500/50 text-sm relative z-10">↓</div>
                    <div className="text-zinc-300 font-medium text-sm relative z-10">{isRu ? 'Единый сценарий покупки' : 'Unified Purchase Flow'}</div>
                    <div className="text-red-500/50 text-sm relative z-10">↓</div>
                    <div className="text-red-400 font-bold text-sm bg-red-500/10 py-2 rounded-xl relative z-10">{isRu ? 'Единый пользовательский опыт' : 'Unified User Experience'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="w-full relative flex items-start justify-center min-h-[350px] md:min-h-[450px] overflow-visible -mb-10 mt-10 md:mt-0 group cursor-pointer"
            onClick={() => triggerAnimation('concept')}
            data-active={activeAnimations['concept'] || undefined}
          >
            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-red-500/20 blur-[100px] z-0"></div>
            
            {/* Multiple Screenshots overlapping with hover spread animation */}
            <div className="relative flex justify-center w-full max-w-4xl z-20 transition-all duration-700">
              <img src="/uploads/kaspi/Movie's page_ tickets_ sort time.png" alt="App Screen 1" className="absolute -left-2 md:left-10 top-10 md:top-20 w-[55%] md:w-[45%] lg:w-[35%] object-contain drop-shadow-2xl -rotate-6 transition-all duration-700 group-hover:-translate-x-12 group-hover:-rotate-12 group-hover:scale-105 group-data-[active=true]:-translate-x-8 md:group-data-[active=true]:-translate-x-12 group-data-[active=true]:-rotate-12 group-data-[active=true]:scale-105" />
              <img src="/uploads/kaspi/Choose place.png" alt="App Screen 3" className="absolute -right-2 md:right-10 top-10 md:top-20 w-[55%] md:w-[45%] lg:w-[35%] object-contain drop-shadow-2xl rotate-6 transition-all duration-700 group-hover:translate-x-12 group-hover:rotate-12 group-hover:scale-105 group-data-[active=true]:translate-x-8 md:group-data-[active=true]:translate-x-12 group-data-[active=true]:rotate-12 group-data-[active=true]:scale-105" />
              <img src="/uploads/kaspi/Main page of Afisha.png" alt="Solution iPhone" className="relative z-30 w-[65%] md:w-[80%] max-w-[360px] object-cover object-top drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:-translate-y-6 group-hover:scale-105 group-data-[active=true]:-translate-y-4 md:group-data-[active=true]:-translate-y-6 group-data-[active=true]:scale-105" />
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-white mb-10 mt-20 text-left md:text-center">{isRu ? 'Ключевые принципы' : 'Key Principles'}</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                t: isRu ? 'Единый пользовательский опыт' : 'Unified UX', 
                d: isRu ? 'Одинаковая логика покупки для всех типов событий.' : 'Identical purchase logic for all event types.',
                c: 'bg-blue-500/10 text-blue-500',
                i: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              },
              { 
                t: isRu ? 'Масштабируемость' : 'Scalability', 
                d: isRu ? 'Возможность расширять каталог мероприятий без изменения базового сценария.' : 'Ability to expand the event catalog without changing the base flow.',
                c: 'bg-emerald-500/10 text-emerald-500',
                i: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              },
              { 
                t: isRu ? 'Интеграция в экосистему' : 'Ecosystem Integration', 
                d: isRu ? 'Использование существующих пользовательских привычек и платёжных сценариев.' : 'Utilizing existing user habits and payment scenarios.',
                c: 'bg-purple-500/10 text-purple-500',
                i: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5l-8.25 4.5-8.25-4.5M20.25 14.25l-8.25 4.5-8.25-4.5M3.75 6.75l8.25-4.5 8.25 4.5-8.25 4.5-8.25-4.5z" />
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/80 transition-colors text-left group">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 ${item.c}`}>
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">{item.i}</svg>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{item.t}</h4>
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Ключевые UX-решения (Bento) */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-left md:text-center">
            {isRu ? 'Ключевые UX-решения' : 'Key UX Decisions'}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-16 text-left md:text-center max-w-3xl mx-auto">
            {isRu ? 'Проектирование сценария покупки билетов' : 'Designing the ticket purchase flow'}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: isRu ? 'Оптимизация выбора' : 'Selection Optimization',
                desc: isRu 
                  ? 'Пользователь сначала выбирает нужные места на схеме зала, а система автоматически формирует заказ с билетами стандартной категории. Можно изменить категорию позже, не прерывая выбор.' 
                  : 'The user selects desired seats, and the system automatically creates an order with standard tickets. Categories can be changed later without interrupting the flow.',
                img: '/uploads/kaspi/hall scheme 1st block.png?v=3',
                color: 'from-blue-500/20 to-transparent'
              },
              {
                title: isRu ? 'Групповое бронирование' : 'Group Booking',
                desc: isRu 
                  ? 'Были добавлены массовые операции, позволяющие управлять несколькими билетами одновременно и быстрее завершать оформление заказа.' 
                  : 'Bulk operations were added to manage multiple tickets simultaneously, speeding up the checkout process.',
                img: '/uploads/kaspi/massive actions.png?v=3',
                color: 'from-purple-500/20 to-transparent'
              }
            ].map((ux, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-zinc-700 data-[active=true]:-translate-y-2 shadow-xl cursor-pointer"
                onClick={() => triggerAnimation(`ux-${i}`)}
                data-active={activeAnimations[`ux-${i}`] || undefined}
              >
                {/* Content top */}
                <div className="p-8 pb-4 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{ux.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{ux.desc}</p>
                </div>
                {/* Image bottom embedded */}
                <div className={`relative w-full h-[350px] md:h-[400px] mt-4 flex items-start justify-center pt-8 bg-gradient-to-t ${ux.color} overflow-hidden`}>
                  <img 
                    src={ux.img} 
                    alt={ux.title} 
                    className="w-full max-w-[60%] md:max-w-[50%] h-auto object-contain object-top drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-data-[active=true]:-translate-y-2" 
                  />
                </div>
              </motion.div>
            ))}

            {/* Third block: Post-Purchase / Full width */}
            <motion.div 
              variants={fadeInUp} 
              className="md:col-span-2 h-[600px] md:h-[500px] relative bg-zinc-900 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] data-[active=true]:-translate-y-2 shadow-xl border border-zinc-800 hover:border-zinc-700 cursor-pointer"
              onClick={() => triggerAnimation('post-purchase')}
              data-active={activeAnimations['post-purchase'] || undefined}
            >
              {/* Background Glow across entire card bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[40%] md:h-[60%] bg-gradient-to-t from-red-500/10 to-transparent z-0 pointer-events-none"></div>

              {/* Text Left */}
              <div className="p-8 pb-4 md:p-12 lg:p-16 flex-1 text-left flex flex-col justify-start md:justify-center relative z-10">
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">{isRu ? 'Путь после покупки' : 'Post-Purchase'}</h3>
                <div className="text-zinc-400 leading-relaxed space-y-4 md:space-y-6 text-base md:text-xl font-medium">
                  <p>{isRu ? 'Пользователь получает QR-код для прохода, информацию о заказе и возможность быстро построить маршрут до места проведения события.' : 'The user receives a QR code for entry, order details, and quick directions to the venue.'}</p>
                </div>
              </div>
              
              {/* Image Right */}
              <div className="relative flex-1 w-full h-full flex items-start justify-center group pt-0 md:pt-12 mt-4 md:mt-0">
                {/* Rotated Flex Container for guaranteed gap and parallel alignment */}
                <div className="relative z-10 w-[140%] max-w-[700px] flex flex-row items-start justify-center gap-6 md:gap-8 rotate-[12deg] transition-transform duration-700 group-hover:rotate-[14deg] group-data-[active=true]:rotate-[14deg]">
                  {/* Left ticket (Front) */}
                  <img 
                    src="/uploads/kaspi/ticket.png?v=3" 
                    alt="Ticket Details" 
                    className="w-[50%] md:w-[48%] translate-y-0 md:-translate-y-[100px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:-translate-y-[10px] md:group-hover:-translate-y-[110px] group-data-[active=true]:-translate-y-[10px] md:group-data-[active=true]:-translate-y-[110px]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Что осталось за рамками */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-8 md:p-12 lg:p-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {isRu ? 'Что осталось за рамками проекта' : 'What Was Left Out of Scope'}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl leading-relaxed">
            {isRu ? 'Если бы работа над продуктом продолжилась, следующим этапом развития могли бы стать:' : 'If work on the product had continued, the next stage of development could have been:'}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              isRu ? 'Персональные рекомендации мероприятий' : 'Personalized event recommendations',
              isRu ? 'Интеграция программы лояльности Kaspi' : 'Kaspi loyalty program integration',
              isRu ? 'Уведомления о новых событиях' : 'Notifications about new events',
              isRu ? 'Рекомендации на основе прошлых покупок' : 'Recommendations based on past purchases',
              isRu ? 'Аналитика пользовательского поведения' : 'User behavior analytics',
              isRu ? 'Подбор мероприятий по интересам пользователя' : 'Event selection based on user interests'
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-4 p-5 bg-[#0a0a0a] rounded-2xl border border-zinc-800 hover:border-red-500/30 transition-colors">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <p className="text-zinc-300 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Пользовательский сценарий */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-transparent text-left md:text-center relative">
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 md:mb-16 relative z-10 text-left md:text-center">
            {isRu ? 'Пользовательский сценарий' : 'User Flow'}
          </motion.h2>

          {/* Entry points highlight */}
          <motion.div variants={fadeInUp} className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 text-left max-w-5xl mx-auto">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{isRu ? 'Точки входа' : 'Entry Points'}</h3>
              <p className="text-zinc-400">{isRu ? 'Пользователь может начать сценарий несколькими способами. Независимо от точки входа путь оформления заказа остаётся единым.' : 'The user can start the flow in several ways. Regardless of the entry point, the checkout path remains unified.'}</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-1 md:justify-end">
              <span className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 text-sm font-medium">{isRu ? 'Раздел Афиша' : 'Afisha Section'}</span>
              <span className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 text-sm font-medium">{isRu ? 'Поиск внутри Kaspi' : 'Kaspi Search'}</span>
              <span className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 text-sm font-medium">{isRu ? 'Рекламные баннеры' : 'Banners'}</span>
              <span className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 text-sm font-medium">{isRu ? 'Рекомендации' : 'Recommendations'}</span>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-start md:justify-center items-stretch md:items-center gap-y-2 md:gap-y-6 gap-x-3 md:gap-x-4 relative z-10 max-w-6xl mx-auto">
            {[
              { n: '1', t: isRu ? 'Главная Kaspi' : 'Kaspi Home' },
              { n: '2', t: isRu ? 'Афиша' : 'Afisha' },
              { n: '3', t: isRu ? 'Страница мероприятия' : 'Event Page' },
              { n: '4', t: isRu ? 'Выбор сеанса' : 'Select Time' },
              { n: '5', t: isRu ? 'Выбор мест' : 'Select Seats' },
              { n: '6', t: isRu ? 'Оформление' : 'Checkout' },
              { n: '7', t: isRu ? 'Оплата Kaspi' : 'Kaspi Pay' },
              { n: '8', t: isRu ? 'Эл. билет' : 'E-Ticket' },
              { n: '9', t: isRu ? 'Маршрут и календарь' : 'Route & Calendar' },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <motion.div variants={fastFadeInUp} className="bg-zinc-900 px-6 py-4 md:py-5 rounded-2xl md:rounded-[2rem] border border-zinc-800 flex items-center justify-center md:justify-start gap-4 shadow-lg hover:border-zinc-700 transition-colors w-full md:w-auto">
                  <span className="text-red-500 font-mono text-xl md:text-2xl font-bold">{step.n}</span>
                  <span className="text-white text-base md:text-lg font-medium">{step.t}</span>
                </motion.div>
                {i < 8 && (
                  <motion.div variants={fastFadeInUp} className="text-zinc-600 hidden md:flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </motion.div>
                )}
                {i < 8 && (
                  <motion.div variants={fastFadeInUp} className="text-zinc-600 flex md:hidden items-center justify-center py-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Итоги проекта */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-16">
          <div className="w-full">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-white text-center md:text-left">{isRu ? 'Итоги проекта' : 'Project Results'}</motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{isRu ? 'Универсальная архитектура' : 'Universal Architecture'}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {isRu ? 'Спроектирован единый сценарий покупки, который одинаково эффективно работает для кинотеатров, концертов, театральных постановок и других мероприятий.' : 'A unified purchasing scenario was designed that works equally efficiently for cinemas, concerts, theatrical performances, and other events.'}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{isRu ? 'Оптимизация ключевого сценария' : 'Key Scenario Optimization'}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {isRu ? 'Основное внимание было уделено сокращению количества действий пользователя и упрощению процесса выбора и покупки билетов.' : 'The main focus was on reducing the number of user actions and simplifying the process of selecting and purchasing tickets.'}
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
                <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{isRu ? 'Продуктовое мышление' : 'Product Thinking'}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {isRu ? 'Проект демонстрирует подход к запуску нового сервиса внутри существующей цифровой экосистемы с учётом масштабирования и пользовательских привычек.' : 'The project demonstrates an approach to launching a new service within an existing digital ecosystem, taking into account scalability and user habits.'}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Screens Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
            {[
              "Services.png", "Search in main page.png", "Loader.png", "Main page of Afisha.png",
              "Search results.png", "Movie's page_ tickets_ sort time.png", "Movie's page_ tickets_ sort time-1.png",
              "Movie's page_ feadback.png", "Choose place.png", "Choose place-1.png", "Choose place-2.png",
              "Buy.png", "Success.png", "My ticket.png", "My ticket-1.png", "My tickets.png"
            ].slice(0, 4).map((img, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-zinc-700 shadow-xl">
                <img src={`/uploads/kaspi/${img}`} alt={`Screen ${i + 1}`} className="w-full h-auto block" />
              </div>
            ))}

            {!showAllScreenshots && (
              <div 
                className="col-span-2 md:col-span-4 relative group cursor-pointer w-full h-32 md:h-48 overflow-hidden rounded-t-3xl" 
                onClick={() => setShowAllScreenshots(true)}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full h-full pointer-events-none">
                  {[
                    "Search results.png", "Movie's page_ tickets_ sort time.png", "Movie's page_ tickets_ sort time-1.png",
                    "Movie's page_ feadback.png"
                  ].map((img, i) => (
                    <div key={i} className={`bg-zinc-900 border-x border-t border-zinc-800 rounded-t-3xl overflow-hidden flex items-start justify-center w-full h-full ${i >= 2 ? 'hidden md:flex' : ''}`}>
                      <img src={`/uploads/kaspi/${img}`} alt={`Hidden Screen ${i}`} className="w-full h-auto block opacity-50 group-hover:opacity-70 transition-opacity" />
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="px-6 py-2.5 bg-zinc-800/90 text-zinc-400 text-sm md:text-base rounded-full backdrop-blur-md border border-zinc-700 pointer-events-auto transition-colors group-hover:bg-zinc-700 group-hover:text-zinc-200">
                    {isRu ? 'Показать все скриншоты' : 'Show all screenshots'}
                  </span>
                </div>
              </div>
            )}

            {showAllScreenshots && [
              "Services.png", "Search in main page.png", "Loader.png", "Main page of Afisha.png",
              "Search results.png", "Movie's page_ tickets_ sort time.png", "Movie's page_ tickets_ sort time-1.png",
              "Movie's page_ feadback.png", "Choose place.png", "Choose place-1.png", "Choose place-2.png",
              "Buy.png", "Success.png", "My ticket.png", "My ticket-1.png", "My tickets.png"
            ].slice(4).map((img, i) => (
              <div key={i + 4} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-zinc-700 shadow-xl">
                <img src={`/uploads/kaspi/${img}`} alt={`Screen ${i + 5}`} className="w-full h-auto block" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Главная мысль кейса */}
      <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mb-24 md:mb-32 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/20 rounded-[3rem] p-10 md:p-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {isRu ? 'Kaspi Афиша — это не просто интерфейс покупки билетов.' : 'Kaspi Afisha is not just a ticket purchasing interface.'}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
            {isRu ? 'Это концепция нового сервиса внутри экосистемы Kaspi, построенная вокруг масштабируемого сценария покупки мероприятий различных категорий через единый пользовательский опыт.' : 'It is a concept for a new service within the Kaspi ecosystem, built around a scalable event purchase scenario across various categories through a unified user experience.'}
          </p>
        </motion.div>
      </section>



      {/* Other Projects */}
      <OtherProjects projects={otherProjects} lang={lang} />

    </div>
  );
}
