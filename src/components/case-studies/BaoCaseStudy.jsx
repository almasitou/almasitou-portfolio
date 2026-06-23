'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OtherProjects from './OtherProjects';
import ZoomableImage from '@/components/ui/ZoomableImage';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function BaoCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeAnimations, setActiveAnimations] = useState({});

  const triggerAnimation = (id) => {
    if (activeAnimations[id]) return;
    setActiveAnimations(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setActiveAnimations(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
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

      {/* Block 1: Hero */}
      <section className="relative h-[100dvh] pt-32 pb-10 md:py-0 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
           <ZoomableImage src="/bao-cover.jpg" alt="BAO Hero" className="w-full h-full object-cover object-[center_top] md:object-center" />
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-10 md:mt-20">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-400 text-sm font-medium">B2C Service</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            BAO
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Мобильное приложение для ресторана азиатской кухни' : 'Mobile app for an Asian cuisine restaurant'}
          </motion.p>
          
          {/* Project Meta Info */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Тип проекта' : 'Project Type'}</span>
              <span className="text-white font-medium">{isRu ? 'Фриланс-проект' : 'Freelance Project'}</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Релиз' : 'Release Date'}</span>
              <span className="text-white font-medium">{isRu ? '11 января 2023' : 'Jan 11, 2023'}</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Платформа' : 'Platform'}</span>
              <span className="text-white font-medium">iOS & Android</span>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-xl h-full">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-white font-medium text-center">Product Designer</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 1. Блок "Моя роль" */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mt-20 mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Моя роль */}
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-white mb-8">
                {isRu ? 'Моя роль' : 'My Role'}
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                {['UX Research', 'User Flow Design', 'Wireframing', 'UI Design', 'Interactive Prototyping'].map((role, i) => (
                  <span key={i} className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-orange-500/30 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(249,115,22,0.15)] transition-all duration-300 rounded-full text-zinc-300 hover:text-white font-medium text-sm md:text-base cursor-default">
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
                  { icon: '🍜', text: isRu ? 'Ресторан азиатской кухни' : 'Asian Cuisine Restaurant' },
                  { icon: '🚚', text: isRu ? 'Собственная доставка' : 'In-house Delivery' },
                  { icon: '📱', text: isRu ? 'Mobile First' : 'Mobile First' },
                  { icon: '💳', text: isRu ? 'Онлайн-заказ и оплата' : 'Online Ordering & Payment' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-orange-500/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(249,115,22,0.15)] transition-all duration-300 p-4 rounded-2xl cursor-default">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-zinc-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Block 2. Задача бизнеса */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Text Only */}
            <div className="space-y-8 text-left">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white">
                {isRu ? 'Бизнес-задача' : 'Business Goal'}
              </motion.h2>
              <div className="text-zinc-400 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  {isRu 
                    ? 'Ресторан BAO развивал собственную доставку и стремился снизить зависимость от сторонних сервисов заказа еды.' 
                    : 'The BAO restaurant was developing its own delivery service and aimed to reduce dependence on third-party food ordering platforms.'}
                </p>
                <p>
                  {isRu 
                    ? 'Для этого требовалось создать мобильное приложение, которое позволило бы клиентам напрямую взаимодействовать с брендом, быстро оформлять заказы и получать информацию о доставке без использования агрегаторов.' 
                    : 'This required creating a mobile application that would allow customers to interact directly with the brand, quickly place orders, and receive delivery information without using aggregators.'}
                </p>
                <p className="text-white font-medium">
                  {isRu 
                    ? 'Основная цель проекта — сделать процесс заказа максимально быстрым и удобным для постоянных клиентов ресторана.' 
                    : 'The main goal of the project was to make the ordering process as fast and convenient as possible for the restaurant\'s regular customers.'}
                </p>
              </div>
            </div>

            {/* Right: Photo */}
            <motion.div variants={fadeInUp} className={`relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group  border border-zinc-800`}>
              <img src="/uploads/bao/bao_restaurant.jpg" alt="BAO Restaurant" className={`absolute inset-0 w-full h-full object-cover object-[center_30%] group-hover:scale-105 group-[.is-active]:scale-105 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Block 3. Пользовательский сценарий */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-left relative">
          
          <motion.div variants={fadeInUp} className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {isRu ? 'Ключевой пользовательский сценарий' : 'Key User Scenario'}
            </h2>
            <div className="text-zinc-400 text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                {isRu ? 'Основной сценарий приложения был построен вокруг максимально быстрого оформления заказа.' : 'The main application scenario was built around the fastest possible order placement.'}
              </p>
              <p>
                {isRu ? 'При проектировании особое внимание уделялось сокращению количества действий между выбором блюда и подтверждением заказа.' : 'During design, special attention was paid to reducing the number of actions between selecting a dish and confirming the order.'}
              </p>
              <p className="text-orange-400 font-medium mt-4">
                {isRu ? 'Пользователь может пройти путь от просмотра меню до оформления доставки всего за несколько простых шагов.' : 'The user can go from viewing the menu to placing a delivery order in just a few simple steps.'}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6 mb-16 relative z-10 w-full">
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="w-full xl:flex-1 flex flex-col items-center">
              <div className={`w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-[650px] md:h-[680px] group  shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] [&.is-active]:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative transition-all duration-500 mb-6 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                <div className="p-8 pb-4 relative z-10 h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{isRu ? 'Выбор блюда' : 'Dish Selection'}</h3>
                  <p className="text-zinc-400 leading-relaxed text-left">
                    {isRu 
                      ? 'Пользователь быстро знакомится с меню ресторана, просматривает фотографии блюд и выбирает интересующие позиции.' 
                      : 'The user quickly explores the restaurant menu, views photos of dishes, and selects items of interest.'}
                  </p>
                </div>
                <div className="relative w-full mt-auto flex justify-center items-start">
                  <ZoomableImage src="/uploads/bao/foods page.png" alt="Dish Selection" className={`w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[60%] h-auto rounded-[1.5rem] drop-shadow-2xl translate-y-12 group-hover:translate-y-8 group-[.is-active]:translate-y-8 transition-transform duration-500`} />
                </div>
              </div>
              <div className="text-white font-bold text-xl">{isRu ? 'Выбрать блюдо' : 'Select Dish'}</div>
            </motion.div>
            
            {/* Arrow */}
            <motion.div variants={fadeInUp} className="hidden xl:flex text-orange-500 text-5xl lg:text-6xl font-light drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse">→</motion.div>
            <motion.div variants={fadeInUp} className="xl:hidden text-orange-500 text-5xl font-light drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse">↓</motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="w-full xl:flex-1 flex flex-col items-center">
              <div className={`w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-[650px] md:h-[680px] group  shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] [&.is-active]:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative transition-all duration-500 mb-6 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                <div className="p-8 pb-4 relative z-10 h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{isRu ? 'Формирование заказа' : 'Order Formation'}</h3>
                  <p className="text-zinc-400 leading-relaxed text-left">
                    {isRu 
                      ? 'Добавление товаров в корзину и управление составом заказа происходит без лишних переходов между экранами.' 
                      : 'Adding items to the cart and managing the order composition happens without unnecessary screen transitions.'}
                  </p>
                </div>
                <div className="relative w-full mt-auto flex justify-center items-start">
                  <ZoomableImage src="/uploads/bao/cart.png" alt="Order Formation" className={`w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[60%] h-auto rounded-[1.5rem] drop-shadow-2xl translate-y-12 group-hover:translate-y-8 group-[.is-active]:translate-y-8 transition-transform duration-500`} />
                </div>
              </div>
              <div className="text-white font-bold text-xl">{isRu ? 'Сформировать заказ' : 'Form Order'}</div>
            </motion.div>

            {/* Arrow */}
            <motion.div variants={fadeInUp} className="hidden xl:flex text-orange-500 text-5xl lg:text-6xl font-light drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse">→</motion.div>
            <motion.div variants={fadeInUp} className="xl:hidden text-orange-500 text-5xl font-light drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse">↓</motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="w-full xl:flex-1 flex flex-col items-center">
              <div className={`w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-[650px] md:h-[680px] group  shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] [&.is-active]:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative transition-all duration-500 mb-6 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                <div className="p-8 pb-4 relative z-10 h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{isRu ? 'Оформление доставки' : 'Delivery Checkout'}</h3>
                  <p className="text-zinc-400 leading-relaxed text-left">
                    {isRu 
                      ? 'Пользователь указывает адрес и подтверждает заказ через простой и понятный сценарий оформления доставки.' 
                      : 'The user enters the address and confirms the order through a simple and clear delivery checkout scenario.'}
                  </p>
                </div>
                <div className="relative w-full mt-auto flex justify-center items-start">
                  <ZoomableImage src="/uploads/bao/check out - delivery.png" alt="Delivery Checkout" className={`w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[60%] h-auto rounded-[1.5rem] drop-shadow-2xl translate-y-12 group-hover:translate-y-8 group-[.is-active]:translate-y-8 transition-transform duration-500`} />
                </div>
              </div>
              <div className="text-white font-bold text-xl">{isRu ? 'Оформить доставку' : 'Checkout Delivery'}</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. Блок "Ключевые решения" */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-12 text-left">
            {isRu ? 'Ключевые решения' : 'Key Decisions'}
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isRu ? 'Фокус на еде' : 'Focus on Food',
                text: isRu ? 'Фотографии блюд стали главным элементом интерфейса, помогая пользователям быстрее принимать решение о заказе.' : 'Food photos became the main UI element, helping users make ordering decisions faster.',
                icon: '🍱'
              },
              {
                title: isRu ? 'Минимум лишних действий' : 'Minimal Extra Actions',
                text: isRu ? 'Основные пользовательские действия вынесены на первый план, что позволяет быстрее перейти от выбора блюда к оформлению заказа.' : 'Key user actions are brought to the forefront, allowing faster transition from dish selection to ordering.',
                icon: '⚡'
              },
              {
                title: isRu ? 'Прямое взаимодействие с брендом' : 'Direct Brand Interaction',
                text: isRu ? 'Приложение позволяет ресторану выстраивать отношения с клиентами напрямую, без использования сторонних платформ доставки.' : 'The app allows the restaurant to build direct customer relationships without third-party delivery platforms.',
                icon: '🤝'
              }
            ].map((card, i) => (
              <div key={i} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 group `}>
                <div className={`w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-orange-500/20 group-[.is-active]:bg-orange-500/20 transition-all duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Block 5. Результат */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-16">
          <div className="w-full">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 text-white text-left">
              {isRu ? 'Итоги проекта' : 'Project Results'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group `}>
                <div className={`w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-orange-500/20 group-[.is-active]:bg-orange-500/20 transition-all duration-300`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className={`text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors`}>
                  {isRu ? 'В рамках проекта был спроектирован полный мобильный опыт для сервиса доставки еды — от просмотра меню до оформления заказа.' : 'As part of the project, a complete mobile experience for a food delivery service was designed — from browsing the menu to placing an order.'}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group `}>
                <div className={`w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-red-500/20 group-[.is-active]:bg-red-500/20 transition-all duration-300`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className={`text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors`}>
                  {isRu ? 'Особое внимание было уделено скорости взаимодействия, визуальной подаче блюд и упрощению ключевого пользовательского сценария.' : 'Special attention was paid to the speed of interaction, visual presentation of dishes, and simplification of the key user flow.'}
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group `}>
                <div className={`w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 group-[.is-active]:scale-110 group-hover:bg-yellow-500/20 group-[.is-active]:bg-yellow-500/20 transition-all duration-300`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className={`text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors`}>
                  {isRu ? 'Проект стал примером создания цифрового продукта для локального бизнеса, который стремится выстраивать прямое взаимодействие с клиентами без использования сторонних платформ доставки.' : 'The project became an example of creating a digital product for a local business aiming to build direct interaction with customers without relying on third-party delivery platforms.'}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Final Screens Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start pt-8">
            {[
              'main.png', 
              'search.png', 
              'foods page.png', 
              'order modal.png'
            ].map((img, i) => (
              <div key={i} className={`bg-zinc-900 border border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex items-center justify-center w-full group  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:border-zinc-700 shadow-xl`}>
                <ZoomableImage src={`/uploads/bao/${img}`} alt={`Screen ${i+1}`} className="w-full h-auto block" />
              </div>
            ))}

            {!showAllScreenshots && (
              <div 
                className={`col-span-2 md:col-span-4 relative group ${activeAnimations['anim_0'] ? 'is-active' : ''} cursor-pointer w-full h-32 md:h-48 overflow-hidden rounded-t-3xl mt-4`} 
                onClick={() => { setShowAllScreenshots(true); triggerAnimation('anim_0'); }}
                tabIndex="0"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full h-full pointer-events-none">
                  {[
                    'cart.png', 
                    'check out - delivery.png', 
                    'profile.png', 
                    'orders.png'
                  ].map((img, i) => (
                    <div key={i} className={"bg-zinc-900 border-x border-t border-zinc-800 rounded-t-3xl overflow-hidden flex items-start justify-center w-full h-full " + (i >= 2 ? 'hidden md:flex' : '')}>
                      <ZoomableImage src={`/uploads/bao/${img}`} alt={`Hidden Screen ${i}`} className="w-full h-auto block opacity-50 group-hover:opacity-70 group-[.is-active]:opacity-70 transition-opacity" />
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className={`px-6 py-2.5 bg-zinc-800/90 text-zinc-400 text-sm md:text-base rounded-full backdrop-blur-md border border-zinc-700 pointer-events-auto transition-colors group-hover:bg-zinc-700 group-[.is-active]:bg-zinc-700 group-hover:text-zinc-200 group-[.is-active]:text-zinc-200`}>
                    {isRu ? 'Показать все скриншоты' : 'Show all screenshots'}
                  </span>
                </div>
              </div>
            )}

            {showAllScreenshots && [
              'cart.png', 
              'check out - delivery.png', 
              'profile.png', 
              'orders.png'
            ].map((img, i) => (
              <div key={i+4} className={`bg-zinc-900 border border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex items-center justify-center w-full group  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:border-zinc-700 shadow-xl`}>
                <ZoomableImage src={`/uploads/bao/${img}`} alt={`Screen ${i+5}`} className="w-full h-auto block" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Block 6: Google Play App Link */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className={`bg-zinc-900 border border-zinc-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-left shadow-xl relative overflow-hidden group ${activeAnimations['anim_1'] ? 'is-active' : ''} `} onClick={() => triggerAnimation('anim_1')} tabIndex="0">
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500"></div>

          {/* Decorative blobs (Google Play Colors) */}
          <div className={`absolute top-[-20%] left-[-10%] w-[40%] h-[150%] bg-[#34A853]/15 blur-[80px] rounded-full transform rotate-45 pointer-events-none group-hover:bg-[#34A853]/25 group-[.is-active]:bg-[#34A853]/25 transition-colors duration-700`}></div>
          <div className={`absolute top-[-20%] right-[-10%] w-[40%] h-[150%] bg-[#EA4335]/15 blur-[80px] rounded-full transform -rotate-45 pointer-events-none group-hover:bg-[#EA4335]/25 group-[.is-active]:bg-[#EA4335]/25 transition-colors duration-700`}></div>
          <div className={`absolute bottom-[-50%] left-[10%] w-[40%] h-[150%] bg-[#FBBC04]/15 blur-[80px] rounded-full transform rotate-12 pointer-events-none group-hover:bg-[#FBBC04]/25 group-[.is-active]:bg-[#FBBC04]/25 transition-colors duration-700`}></div>
          <div className={`absolute bottom-[-50%] right-[10%] w-[40%] h-[150%] bg-[#4285F4]/15 blur-[80px] rounded-full transform -rotate-12 pointer-events-none group-hover:bg-[#4285F4]/25 group-[.is-active]:bg-[#4285F4]/25 transition-colors duration-700`}></div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center gap-12 xl:gap-20">
            <div className="flex-1 flex flex-col items-start w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {isRu ? 'Оцените приложение вживую' : 'Try the app live'}
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                {isRu ? 'Мобильное приложение BAO доступно для скачивания в Google Play. Вы можете самостоятельно протестировать удобство интерфейса, ознакомиться с меню и заказать доставку прямо сейчас.' : 'The BAO mobile app is available for download on Google Play. You can test the convenience of the interface, explore the menu, and order delivery right now.'}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 w-full max-w-xs sm:max-w-none">
                <a 
                  href="https://play.google.com/store/apps/details?id=kz.osu.bao&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 px-5 py-3 sm:px-6 sm:py-3 bg-black/40 hover:bg-black/60 border border-white/20 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <div className="flex flex-col items-start justify-center text-left">
                    <span className="text-[10px] sm:text-[11px] text-white/70 font-medium uppercase tracking-wider mb-0.5 leading-none">GET IT ON</span>
                    <span className="text-lg sm:text-xl font-semibold text-white leading-none tracking-tight">Google Play</span>
                  </div>
                </a>
                <a 
                  href="https://apps.apple.com/kz/app/bao-noodles-sushi-bar/id6753782905" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 px-5 py-3 sm:px-6 sm:py-3 bg-black/40 hover:bg-black/60 border border-white/20 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="flex flex-col items-start justify-center text-left">
                    <span className="text-[10px] sm:text-[11px] text-white/70 font-medium tracking-wider mb-0.5 leading-none">Download on the</span>
                    <span className="text-lg sm:text-xl font-semibold text-white leading-none tracking-tight">App Store</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center xl:justify-end mt-8 xl:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[280px] flex justify-center pl-8 md:pl-16 -mb-[14rem] md:-mb-[18rem] lg:-mb-[20rem] xl:-mb-[8rem]">
                {/* Main Screen */}
                <img 
                  src="/uploads/bao/foods page.png" 
                  alt="BAO App Menu" 
                  className="w-full h-auto rounded-[2rem] md:rounded-[2.5rem] border-[6px] border-zinc-800 shadow-2xl relative z-10 transform transition-transform duration-700 group-hover:-translate-y-4 group-[.is-active]:-translate-y-4" 
                />
                {/* Floating secondary screen */}
                <div className="absolute -left-8 md:-left-16 top-[20%] md:top-[25%] xl:top-auto xl:bottom-20 w-[60%] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[4px] border-zinc-800 shadow-2xl z-20 transform transition-transform duration-700 group-hover:-translate-x-4 group-hover:-translate-y-2 group-[.is-active]:-translate-x-4 group-[.is-active]:-translate-y-2 delay-100">
                  <img 
                    src="/uploads/bao/cart.png" 
                    alt="BAO App Cart" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Other Projects seamlessly continuing */}
      <OtherProjects currentSlug="bao" lang={lang} projects={otherProjects} />
    </div>
  );
}
