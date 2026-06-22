'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OtherProjects from './OtherProjects';
import InteractiveGlobe from './InteractiveGlobe';

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

export default function RRSCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);
  const [activeAnimations, setActiveAnimations] = useState({});
  const [isNavigating, setIsNavigating] = useState(false);

  const triggerAnimation = (id) => {
    if (activeAnimations[id]) return;
    setActiveAnimations(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setActiveAnimations(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const userFlowSteps = isRu
    ? [
        { title: 'Поставить поднос', desc: 'Установите поднос с едой под камеру и нажмите кнопку.', image: '/uploads/chaickout/tap-to-recognize.png' },
        { title: 'Проверить заказ', desc: 'Нейросеть мгновенно определяет блюда. Убедитесь, что всё распознано верно.', image: '/uploads/chaickout/my-order.png' },
        { title: 'Оплатить', desc: 'Выберите способ оплаты и приложите карту к терминалу.', image: '/uploads/chaickout/bring-card.png' },
        { title: 'Готово', desc: 'Возьмите чек и приятного аппетита!', image: '/uploads/chaickout/success.png' }
      ]
    : [
        { title: 'Place Tray', desc: 'Place your food tray under the camera and press the button.', image: '/uploads/chaickout/tap-to-recognize.png' },
        { title: 'Review Order', desc: 'Neural network instantly identifies dishes. Check that everything is correct.', image: '/uploads/chaickout/my-order.png' },
        { title: 'Pay', desc: 'Choose a payment method and tap your card on the terminal.', image: '/uploads/chaickout/bring-card.png' },
        { title: 'Done', desc: 'Take your receipt and enjoy your meal!', image: '/uploads/chaickout/success.png' }
      ];

  const featuresList = isRu 
    ? [
        { icon: '👁️', text: 'Компьютерное зрение' },
        { icon: '⚡', text: 'Обработка в реальном времени' },
        { icon: '🎯', text: 'Точность 98-99%' },
        { icon: '🛡️', text: 'Работа с edge-кейсами' },
        { icon: '🖥️', text: 'Touch UI для киоска' }
      ]
    : [
        { icon: '👁️', text: 'Computer Vision AI' },
        { icon: '⚡', text: 'Real-time Processing' },
        { icon: '🎯', text: '98-99% Accuracy' },
        { icon: '🛡️', text: 'Edge-cases Handling' },
        { icon: '🖥️', text: 'Kiosk Touch UI' }
      ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
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
           <img src="/uploads/chaickout/cover-hero.jpg" alt="Chaickout Hero" className="w-full h-full object-cover object-[center_top] md:object-center opacity-70" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-black/50 to-[#0a0a0a]"></div>
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-10 md:mt-20">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">AI + Computer Vision</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            Retail Robotics Solution
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'AI-платформа для самообслуживания в ресторанах' : 'AI-powered checkout platform for restaurants'}
          </motion.p>
          
          {/* Project Meta Info */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Тип проекта' : 'Project Type'}</span>
              <span className="text-white font-medium text-sm md:text-base">{isRu ? 'Коммерческий продукт' : 'Commercial Product'}</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Платформа' : 'Platform'}</span>
              <span className="text-white font-medium text-sm md:text-base">AI Kiosk Interface</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Период' : 'Period'}</span>
              <span className="text-white font-medium text-sm md:text-base">2022–2025</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl px-4 md:px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-white font-medium text-center text-sm md:text-base">Lead Product Designer</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== NEW BLOCK: БИЗНЕС ПРОБЛЕМА ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            {isRu ? 'Почему ресторанам понадобилось автоматическое распознавание еды' : 'Why restaurants needed automatic food recognition'}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInUp} className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                {isRu ? 'В традиционных системах самообслуживания пользователь вынужден вручную искать блюда, сканировать штрихкоды или взаимодействовать с персоналом.' : 'In traditional self-service systems, the user has to manually search for dishes, scan barcodes, or interact with staff.'}
              </p>
              <p className="font-semibold text-white mt-4">{isRu ? 'Это приводит к:' : 'This leads to:'}</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>{isRu ? 'увеличению времени обслуживания;' : 'increased service time;'}</li>
                <li>{isRu ? 'образованию очередей в часы пик;' : 'queues during peak hours;'}</li>
                <li>{isRu ? 'дополнительной нагрузке на сотрудников;' : 'extra workload on employees;'}</li>
                <li>{isRu ? 'ошибкам при идентификации блюд.' : 'errors in identifying dishes.'}</li>
              </ul>
              <div className="mt-8 bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-2xl">
                <h4 className="text-cyan-400 font-bold mb-2 text-xl">{isRu ? 'Цель проекта:' : 'Project Goal:'}</h4>
                <p className="text-white">
                  {isRu ? 'Создать систему компьютерного зрения, способную автоматически определять блюда на подносе и сокращать путь пользователя от выбора еды до оплаты.' : 'Create a computer vision system capable of automatically identifying dishes on a tray and shortening the user journey from food selection to payment.'}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex flex-col gap-2 relative z-10">
                <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">{isRu ? 'Было' : 'Before'}</div>
                {(isRu ? ['Выбор еды', 'Очередь', 'Ручная идентификация', 'Оплата'] : ['Food selection', 'Queue', 'Manual identification', 'Payment']).map((step, i) => (
                  <React.Fragment key={`old-${i}`}>
                    <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-xl text-zinc-400 text-center">{step}</div>
                    {i < 3 && <div className="text-zinc-600 text-center">↓</div>}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="h-px bg-zinc-800 my-2"></div>
              
              <div className="flex flex-col gap-2 relative z-10">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">{isRu ? 'Стало' : 'After'}</div>
                {(isRu ? ['Выбор еды', 'AI Recognition', 'Оплата'] : ['Food selection', 'AI Recognition', 'Payment']).map((step, i) => (
                  <React.Fragment key={`new-${i}`}>
                    <div className={`px-6 py-3 rounded-xl text-center font-medium ${step === 'AI Recognition' ? 'bg-cyan-600/20 border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'bg-zinc-800 border border-zinc-600 text-white'}`}>{step}</div>
                    {i < 2 && <div className="text-zinc-600 text-center">↓</div>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 2: ABOUT ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden text-left hover:border-cyan-500/20 transition-colors duration-500">
          <motion.div variants={fadeInUp} className="space-y-6 max-w-4xl relative z-10">
            <p className="text-lg md:text-2xl leading-relaxed text-zinc-300 font-medium">
              {isRu 
                ? 'Retail Robotics Solution — это AI-платформа для автоматизации расчёта в столовых и ресторанах самообслуживания. Система использует компьютерное зрение и нейронные сети для мгновенного распознавания блюд на подносе — без штрихкодов, без ручного ввода.' 
                : 'Retail Robotics Solution is an AI-powered platform that automates the checkout process in canteens and self-service restaurants. The system uses computer vision and neural networks to instantly recognize dishes on a tray — no barcodes, no manual input.'}
            </p>
            <p className="text-base md:text-xl leading-relaxed text-zinc-400">
              {isRu 
                ? 'Главный вызов: спроектировать интерфейс, который корректно обрабатывает edge-кейсы AI-распознавания (неуверенность модели, перекрытие блюд, ограничения по возрасту) и остаётся интуитивным для пользователей без технического бэкграунда.' 
                : 'The main challenge: designing an interface that gracefully handles AI recognition edge cases (model uncertainty, dish overlap, age restrictions) while remaining intuitive for non-technical users.'}
            </p>
          </motion.div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 3: MY ROLE ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-8">
            {isRu ? 'Моя зона ответственности' : 'My Responsibilities'}
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              isRu ? 'UX/UI дизайн терминала самообслуживания;' : 'UX/UI design of the self-service terminal;',
              isRu ? 'проектирование пользовательских сценариев оплаты;' : 'designing user payment flows;',
              isRu ? 'дизайн экранов распознавания блюд;' : 'designing food recognition screens;',
              isRu ? 'анализ нестандартных сценариев использования;' : 'analyzing edge cases;',
              isRu ? 'проектирование взаимодействия пользователя с AI-системой;' : 'designing user interaction with AI;',
              isRu ? 'работа с бизнес-требованиями;' : 'working with business requirements;',
              isRu ? 'проработка интерфейсов для реальных ресторанных сценариев;' : 'detailing interfaces for real restaurant scenarios;',
              isRu ? 'участие в развитии рекламного модуля внутри системы.' : 'participating in the development of the ad module.'
            ].map((role, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:border-cyan-500/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{role}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 4: PROBLEM ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Text */}
            <div className="space-y-8 text-left">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white">
                {isRu ? 'Кассы самообслуживания сегодня — это медленно' : 'Self-service checkouts today are slow'}
              </motion.h2>
              <div className="text-zinc-400 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  {isRu 
                    ? 'В столовых каждый день тысячи людей стоят в очередях. Кассиры вручную определяют блюда, ошибаются в ценах, путают порции.' 
                    : 'In canteens, thousands of people stand in queues every day. Cashiers manually identify dishes, make pricing errors, and confuse portions.'}
                </p>
                <div className="space-y-4">
                  {(isRu 
                    ? ['Очереди по 10–15 минут', 'Ошибки кассиров в 8% транзакций', 'Расходы до €3 100/мес на кассу']
                    : ['10–15 min queues', 'Cashier errors in 8% of transactions', 'Staff costs up to €3,100/month']
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800/50 px-4 py-3 rounded-lg w-fit hover:border-red-500/30 transition-colors">
                      <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="text-zinc-300 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual Abstract Concept */}
            <motion.div variants={fadeInUp} className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-visible bg-zinc-900/30 border border-zinc-800/50 rounded-2xl group hover:border-cyan-500/30 transition-all duration-500 mt-10 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 via-transparent to-cyan-500/5 rounded-2xl"></div>
              
              {/* Floating manual chaos */}
              <motion.div 
                animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute z-10 w-32 md:w-40 bg-zinc-800 border border-red-500/20 rounded-xl p-3 md:p-4 shadow-xl -translate-x-16 -translate-y-16 md:-translate-x-20 md:-translate-y-16 group-hover:-translate-x-24 transition-transform duration-500"
              >
                <div className="h-2 w-1/2 bg-red-500/50 rounded mb-2"></div>
                <div className="h-2 w-full bg-zinc-600 rounded mb-2"></div>
                <div className="h-2 w-3/4 bg-zinc-600 rounded"></div>
                <div className="mt-3 text-red-400 text-[10px] md:text-xs font-bold uppercase">{isRu ? 'Ошибка кассы' : 'Register Error'}</div>
              </motion.div>

              <motion.div 
                animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute z-10 w-36 md:w-48 bg-zinc-800 border border-orange-500/20 rounded-xl p-3 md:p-4 shadow-xl translate-x-16 translate-y-16 md:translate-x-20 md:translate-y-16 group-hover:translate-x-24 transition-transform duration-500"
              >
                <div className="flex gap-2 mb-2 items-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                  <div className="h-2 w-1/2 bg-zinc-600 rounded"></div>
                </div>
                <div className="h-2 w-full bg-zinc-600 rounded mb-2"></div>
                <div className="mt-3 text-orange-400 text-[10px] md:text-xs font-bold uppercase">{isRu ? 'Ожидание 15 мин' : '15 min wait'}</div>
              </motion.div>

              {/* Central AI Eye / Camera focus */}
              <div className="relative z-20 w-24 h-24 md:w-40 md:h-40 rounded-full border border-cyan-500/30 flex items-center justify-center bg-zinc-900/80 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.4)] transition-all duration-500">
                <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center overflow-hidden">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></motion.div>
                </div>
                {/* Scanner line */}
                <motion.div animate={{ y: [-30, 30, -30] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute w-full h-[2px] bg-cyan-400/80 shadow-[0_0_10px_rgba(6,182,212,1)]"></motion.div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===================== NEW BLOCK: ОГРАНИЧЕНИЯ ПРОЕКТА ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {isRu ? 'Ограничения и требования' : 'Constraints and Requirements'}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl mb-12 max-w-4xl leading-relaxed">
            {isRu ? 'Проектирование происходило с учетом нескольких важных ограничений:' : 'The design process took into account several key constraints:'}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              isRu ? 'пользователь не должен проходить сложное обучение;' : 'the user should not require complex training;',
              isRu ? 'интерфейс должен быть понятен с первого взаимодействия;' : 'the interface must be intuitive from the first interaction;',
              isRu ? 'система должна корректно обрабатывать ошибки распознавания;' : 'the system must gracefully handle recognition errors;',
              isRu ? 'сценарий оплаты должен оставаться быстрым даже при нестандартных ситуациях;' : 'the payment flow must remain fast even in edge cases;',
              isRu ? 'взаимодействие должно быть одинаково понятным для пользователей разного возраста и опыта.' : 'the interaction must be equally clear to users of all ages and experiences.'
            ].map((constraint, i) => (
              <motion.div variants={fadeInUp} key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center font-bold">!</div>
                <p className="text-zinc-300 pt-2 leading-relaxed">{constraint}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 5: AI COMPLEXITY ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{isRu ? 'Почему распознавание еды — сложно' : 'Why Food Recognition is Hard'}</motion.h2>
          <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl mb-12 max-w-3xl">
            {isRu 
              ? 'В отличие от штрихкодов, реальная еда — это визуальный хаос. Нейросеть должна справляться с десятками переменных.' 
              : 'Unlike barcodes, real food is visual chaos. The neural network must handle dozens of variables.'}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeInUp} className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 hover:bg-zinc-800/80 hover:border-orange-500/30 transition-all text-left overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent pointer-events-none"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{isRu ? 'Визуальное сходство' : 'Visual Similarity'}</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{isRu ? 'Некоторые блюда выглядят почти одинаково. Суп-пюре и каша, разные виды выпечки или гарниров. AI должен различать мельчайшие детали.' : 'Some dishes look almost identical. Pureed soups and porridges, different types of pastries. AI must understand the finest distinctions.'}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 hover:bg-zinc-800/80 hover:border-purple-500/30 transition-all text-left overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25 6.429 14.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{isRu ? 'Перекрытие объектов' : 'Object Overlap'}</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{isRu ? 'Тарелки на подносе часто стоят друг на друге, хлеб закрывает гарнир, столовые приборы перекрывают блюда.' : 'Plates on trays often stack, bread covers side dishes, cutlery overlaps food items.'}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 hover:bg-zinc-800/80 hover:border-green-500/30 transition-all text-left overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent pointer-events-none"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{isRu ? 'Вариации порций' : 'Portion Variations'}</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{isRu ? 'Одно и то же блюдо выглядит по-разному в зависимости от повара, порции, освещения, посуды.' : 'The same dish looks different depending on the cook, portion size, lighting, and plate.'}</p>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="mt-16 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8">{isRu ? 'С какими сценариями сталкивается система' : 'Scenarios the system faces'}</h3>
            <div className="flex flex-wrap gap-4">
              {[
                isRu ? 'блюда похожи друг на друга' : 'dishes look alike',
                isRu ? 'одно и то же блюдо выглядит по-разному в зависимости от порции' : 'the same dish looks different depending on the portion',
                isRu ? 'часть блюда может быть закрыта другими объектами' : 'part of the dish may be covered by other objects',
                isRu ? 'пользователь может поставить поднос нестандартным образом' : 'the user may place the tray in a non-standard way',
                isRu ? 'некоторые позиции визуально практически не отличаются' : 'some items are visually almost indistinguishable'
              ].map((scenario, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700/50 px-5 py-3 rounded-full text-zinc-300 text-sm md:text-base">
                  {scenario}
                </div>
              ))}
            </div>
            <p className="text-zinc-400 mt-8 leading-relaxed max-w-4xl text-lg md:text-xl">
              {isRu ? 'Всё это показывает, что проблема намного сложнее обычного сканирования товара.' : 'All of this shows that the problem is much more complex than simple item scanning.'}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 6: HOW IT WORKS (CARDS) ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">{isRu ? 'Как это работает' : 'How It Works'}</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {userFlowSteps.map((step, i) => (
              <motion.div 
                key={i}
                variants={fastFadeInUp}
                className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 md:p-10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 group flex flex-col relative overflow-hidden"
              >
                {/* Background Number */}
                <div className="absolute -top-4 -right-4 text-[10rem] md:text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-500/[0.03]">
                  {i + 1}
                </div>
                
                {/* Text section */}
                <div className="relative z-10 mb-8 md:mb-12">
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-3">{step.title}</h4>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm">{step.desc}</p>
                </div>
                
                {/* Screenshot inside the card */}
                <div className="relative z-10 w-full mt-auto flex items-center justify-center">
                  <img src={step.image} alt={step.title} className="w-full h-auto object-contain rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2" />
                </div>
              </motion.div>
            ))}

            {/* Banner: Time spent */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-2">{isRu ? 'Скорость' : 'Speed'}</h4>
                  <div className="space-y-2">
                    <p className="text-zinc-300 text-lg md:text-xl">
                      {isRu ? (
                        <>Весь процесс занимает <span className="text-cyan-400 font-bold">10–15 секунд</span></>
                      ) : (
                        <>The whole process takes <span className="text-cyan-400 font-bold">10–15 seconds</span></>
                      )}
                    </p>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
                      {isRu ? 'Для сравнения: обычный кассир тратит на одного гостя от 45 секунд до 1 минуты. Мы ускорили процесс чекаута в 4-5 раз.' : 'For comparison: a regular human cashier takes 45 to 60 seconds per guest. We sped up the checkout process by 4-5x.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* ===================== NEW BLOCK: UX ARTIFACT ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center md:text-left relative z-10">{isRu ? 'Путь пользователя' : 'User Journey'}</motion.h2>
          
          <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-center justify-center md:justify-start gap-4 md:gap-4 relative z-10">
            {[
              isRu ? 'Берет поднос' : 'Takes tray',
              isRu ? 'Подходит к терминалу' : 'Approaches terminal',
              isRu ? 'Система распознает блюда' : 'System recognizes dishes',
              isRu ? 'Пользователь проверяет результат' : 'User verifies result',
              isRu ? 'Оплачивает заказ' : 'Pays for order',
              isRu ? 'Получает подтверждение' : 'Gets confirmation'
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <motion.div variants={fadeInUp} className="flex items-center bg-zinc-900 border border-zinc-800 rounded-full py-2 px-4 gap-3 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-zinc-300 text-sm md:text-base font-medium">{step}</div>
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div variants={fadeInUp} className="text-zinc-600 hidden md:flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </motion.div>
                )}
                {i < arr.length - 1 && (
                  <motion.div variants={fadeInUp} className="text-zinc-600 md:hidden flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 7: EDGE CASES ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">{isRu ? 'Продуктовое мышление' : 'Product Thinking'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{isRu ? 'Edge-кейсы — настоящий вызов' : 'Edge Cases — The Real Challenge'}</h2>
            <div className="space-y-4 text-zinc-400 text-lg md:text-xl max-w-4xl leading-relaxed">
              <p>
                {isRu ? 'Основная сложность проекта заключалась не в идеальном сценарии, а в обработке реальных ситуаций, которые регулярно происходят в ресторанах самообслуживания.' : 'The main challenge of the project was not the ideal scenario, but handling real situations that regularly occur in self-service restaurants.'}
              </p>
              <p>
                {isRu 
                  ? 'Главный flow прост и покрывает большинство ситуаций. Но настоящая работа дизайнера — в пограничных сценариях. Что делать, когда AI не уверен? Когда поднос пуст? Когда на подносе алкоголь?' 
                  : 'The main flow is simple and covers most situations. But the real designer work is in edge cases. What happens when AI is uncertain? When the tray is empty? When there\'s alcohol on the tray?'}
              </p>
            </div>
          </motion.div>

          {/* Edge Case 1: Empty Tray */}
          <motion.div variants={fadeInUp} className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden mb-8 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 w-fit">
                  <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">{isRu ? 'Edge-кейс #1' : 'Edge Case #1'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{isRu ? 'Пустой поднос' : 'Empty Tray'}</h3>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
                  {isRu 
                    ? 'AI камера не обнаружила ни одного блюда. Вместо скучной ошибки системы — дружелюбное состояние с понятными действиями: повторить сканирование или отменить заказ.' 
                    : 'The AI camera detected no dishes. Instead of a boring system error — a friendly state with clear actions: retry scanning or cancel the order.'}
                </p>
              </div>
              <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16">
                <img src="/uploads/chaickout/empty-tray.png" alt="Empty tray state" className="w-full max-w-sm md:max-w-md h-auto rounded-xl object-contain shadow-2xl transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>

          {/* Edge Case 2: Dish Clarification */}
          <motion.div variants={fadeInUp} className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden mb-8 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 w-fit">
                  <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">{isRu ? 'Edge-кейс #2' : 'Edge Case #2'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{isRu ? 'Уточнение блюда' : 'Dish Clarification'}</h3>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
                  {isRu 
                    ? 'Нейросеть распознает 98-99% блюд идеально, но для оставшихся редких случаев мы предусмотрели запасной сценарий. Если AI распознал категорию (например, суп), но сомневается в конкретном блюде, мы показываем фото с камеры слева и возможные варианты меню справа. Пользователь делает выбор за 2 секунды.' 
                    : 'The neural network recognizes 98-99% of dishes perfectly, but for the rare remaining cases, we have a fallback scenario. If AI recognizes the category (e.g. soup) but is unsure about the specific dish, we show the camera photo on the left and possible menu options on the right. User chooses in 2 seconds.'}
                </p>
              </div>
              <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16">
                <img src="/uploads/chaickout/specify-dish.png" alt="Dish clarification" className="w-full max-w-sm md:max-w-md h-auto rounded-xl object-contain shadow-2xl transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>

          {/* Edge Case 3: Object Overlap */}
          <motion.div variants={fadeInUp} className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 w-fit">
                  <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">{isRu ? 'Edge-кейс #3' : 'Edge Case #3'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{isRu ? 'Перекрытие блюд' : 'Object Overlap'}</h3>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
                  {isRu 
                    ? 'Тарелки стоят слишком близко или друг на друге, поэтому AI не может корректно распознать все объекты на подносе. В этом сценарии система вежливо просит пользователя раздвинуть посуду и повторяет сканирование.' 
                    : 'Plates are too close or stacked on each other, so AI can\'t correctly recognize all objects. In this scenario, the system politely asks the user to spread out the dishes and retries the scan.'}
                </p>
              </div>
              <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16">
                <img src="/uploads/chaickout/dishes-overlapped.png" alt="Dishes overlapped" className="w-full max-w-sm md:max-w-md h-auto rounded-xl object-contain shadow-2xl transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== NEW BLOCK: РЕКЛАМНЫЙ МОДУЛЬ ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">{isRu ? 'Дополнительная ценность экрана оплаты' : 'Additional value of the payment screen'}</h2>
            <div className="space-y-4 text-zinc-400 text-lg md:text-xl leading-relaxed">
              <p>
                {isRu ? 'Помимо основной функции оплаты терминал позволяет использовать экран как рекламную площадку.' : 'Besides the main payment function, the terminal allows using the screen as an advertising platform.'}
              </p>
              <p>
                {isRu ? 'Рестораны могут размещать рекламный контент партнеров и использовать время ожидания для дополнительной коммуникации с посетителями.' : 'Restaurants can place partner advertising content and use the waiting time for additional communication with visitors.'}
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 flex flex-col shadow-2xl">
            <div className="w-full bg-zinc-950 rounded-xl overflow-hidden relative border border-zinc-800/50 flex flex-col h-full">
               <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" alt="Ad Banner" className="w-full aspect-[2/1] md:aspect-[16/9] object-cover opacity-80" />
               <div className="bg-zinc-900 p-6 flex flex-col justify-center flex-1">
                 <div className="text-white font-bold text-xl md:text-2xl mb-2">{isRu ? 'Специальное предложение' : 'Special Offer'}</div>
                 <div className="text-zinc-400 text-sm md:text-base">{isRu ? 'Получите скидку 20% на десерты при оплате картой партнера.' : 'Get a 20% discount on desserts when paying with a partner card.'}</div>
               </div>
               <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">{isRu ? 'Реклама' : 'Ad'}</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BLOCK 8: RESULTS ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{isRu ? 'Результаты' : 'Results'}</motion.h2>
          <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl mb-12 max-w-4xl leading-relaxed">
            {isRu ? 'В результате проект объединил технологии компьютерного зрения и удобный пользовательский интерфейс, позволив создать быстрый и понятный сценарий самообслуживания.' : 'As a result, the project combined computer vision technologies and a convenient user interface, allowing to create a fast and intuitive self-service flow.'}
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp} className="bg-gradient-to-tr from-cyan-900/30 to-zinc-900 border border-cyan-500/20 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-4">&lt;1<span className="text-cyan-400 text-2xl ml-1">{isRu ? 'сек' : 'sec'}</span></div>
              <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">{isRu ? 'Время распознавания всех блюд' : 'Recognition time for all dishes'}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-tr from-emerald-900/30 to-zinc-900 border border-emerald-500/20 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-4">99<span className="text-emerald-400 text-2xl ml-1">%</span></div>
              <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">{isRu ? 'Точность распознавания' : 'Dish recognition accuracy'}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-tr from-blue-900/30 to-zinc-900 border border-blue-500/20 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-4">5x</div>
              <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">{isRu ? 'Быстрее обычной кассы' : 'Faster than regular checkout'}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-tr from-amber-900/30 to-zinc-900 border border-amber-500/20 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-4">€900</div>
              <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">{isRu ? 'Стоимость терминала в месяц' : 'Monthly terminal cost'}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===================== NEW BLOCK: GLOBAL LAUNCH ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-gradient-to-br from-blue-900/20 via-zinc-900/50 to-zinc-900 border border-blue-500/20 rounded-[2rem] p-8 pb-[300px] md:p-12 md:pb-[600px] lg:p-16 relative overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

          {/* Absolute Globe */}
          <div className="absolute bottom-0 translate-y-[40%] left-1/2 -translate-x-1/2 lg:bottom-auto lg:translate-y-0 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 lg:-right-[20%] w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] lg:w-[1000px] lg:h-[1000px] z-10 pointer-events-auto">
            <InteractiveGlobe />
          </div>

          {/* Text Content */}
          <div className="relative z-20 w-full max-w-lg lg:max-w-xl pointer-events-none lg:-translate-x-4">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              {isRu ? 'Успешный запуск в Европе и США' : 'Successful Launch in Europe and the US'}
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
              {isRu 
                ? 'Сегодня система Retail Robotics Solution успешно внедрена и работает в столовых и ресторанах самообслуживания по всей Европе и в США. Продукт доказал свою эффективность на международных рынках, ежедневно обрабатывая тысячи заказов и сокращая время обслуживания.' 
                : 'Today, the Retail Robotics Solution system is successfully implemented and operating in canteens and self-service restaurants across Europe and the US. The product has proven its efficiency in international markets, processing thousands of orders daily and reducing service time.'}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pointer-events-auto">
              {['USA', 'France', 'Italy', 'Portugal', 'Belgium'].map((country) => (
                <div key={country} className="px-4 py-2 bg-zinc-900/80 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium flex items-center gap-2 shadow-xl backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  {country}
                </div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* ===================== BLOCK 9: IDOL-STYLE GALLERY ===================== */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">{isRu ? 'Другие экраны' : 'Other Screens'}</motion.h2>
          
          <div className="relative">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start ${!showAllScreenshots ? 'max-h-[800px] md:max-h-[600px] overflow-hidden' : ''}`}>
              
              {[
                'tap-to-recognize.png', 'my-order.png', 'bring-card.png', 'success.png',
                'empty-tray.png', 'specify-dish.png', 'dishes-overlapped.png',
                'alcoholic-drink.png', 'menu-fallback.png', 'menu-search.png', 
                'specify-soup-search.png', 'specify-soup.png'
              ].map((img, i) => (
                <div key={i} className="rounded-xl border border-zinc-800 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:border-cyan-500/30 bg-zinc-900">
                  <img src={`/uploads/chaickout/${img}`} alt={`Screen ${i+1}`} className="w-full h-auto block" />
                </div>
              ))}

            </div>

            {!showAllScreenshots && (
              <div 
                className={`absolute bottom-0 left-0 right-0 h-48 md:h-64 cursor-pointer group z-20`}
                onClick={() => setShowAllScreenshots(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-8">
                  <span className={`px-6 py-2.5 bg-zinc-800/90 text-zinc-400 text-sm md:text-base rounded-full backdrop-blur-md border border-zinc-700 pointer-events-auto transition-colors group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-300 shadow-xl`}>
                    {isRu ? 'Показать все скриншоты' : 'Show all screenshots'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* ===================== CTA + OTHER PROJECTS ===================== */}
      <OtherProjects projects={otherProjects} lang={lang} />
    </div>
  );
}
