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

export default function TazaCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
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
      <section className="relative min-h-screen pt-32 pb-20 md:py-32 flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 w-full">
        <div className="absolute inset-0 w-full h-full z-0">
           <img src="/uploads/taza/cover.jpg" alt="Taza Hero" className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
           <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-4">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-400 text-sm font-medium">B2B Platform</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            Taza B2B
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Мобильный маркетплейс для оптовых закупок' : 'Mobile marketplace for wholesale procurement'}
          </motion.p>
          
          {/* Project Meta Info */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[140px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Тип проекта' : 'Project Type'}</span>
              <span className="text-white font-medium">{isRu ? 'Коммерческий проект' : 'Commercial Project'}</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[140px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Платформа' : 'Platform'}</span>
              <span className="text-white font-medium">iOS & Android</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[140px]">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Дата релиза' : 'Release Date'}</span>
              <span className="text-white font-medium">{isRu ? '14 марта 2022 года' : 'March 14, 2022'}</span>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col items-center shadow-xl flex-1 min-w-[200px] md:col-span-3">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-white font-medium text-center">UX/UI Designer</span>
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
                  <span key={i} className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 font-medium text-sm md:text-base">
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
                  { icon: '🏢', text: isRu ? 'B2B Marketplace' : 'B2B Marketplace' },
                  { icon: '🥕', text: isRu ? 'Оптовые закупки' : 'Wholesale Procurement' },
                  { icon: '🤝', text: isRu ? 'Работа с поставщиками' : 'Supplier Relations' },
                  { icon: '📦', text: isRu ? 'Управление поставками' : 'Supply Management' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-2xl">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-zinc-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Блок "Проблема" */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative pt-8">
          <motion.div variants={fadeInUp} className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {isRu ? 'Проблема' : 'The Problem'}
            </h2>
            <p className="text-emerald-400 font-semibold text-xl md:text-3xl leading-tight mb-8">
              {isRu ? 'Бизнес тратит слишком много времени на закупки' : 'Businesses spend too much time on procurement'}
            </p>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              {isRu 
                ? 'Многие компании продолжают оформлять заказы через звонки, мессенджеры и электронную почту. Поиск поставщиков, согласование условий и контроль поставок происходят в разных каналах, что усложняет процесс закупки и увеличивает количество ошибок. Цель проекта — объединить весь цикл закупки в одном мобильном приложении и сократить количество ручных операций.' 
                : 'Many companies continue to place orders through calls, messengers, and email. Searching for suppliers, negotiating terms, and controlling deliveries happen in different channels, complicating procurement and increasing errors. The goal is to unify the entire procurement cycle in a single mobile app and reduce manual operations.'}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isRu ? 'Разрозненные каналы' : 'Fragmented Channels',
                text: isRu ? 'Закупки происходят через звонки, мессенджеры и электронную почту.' : 'Procurement happens via calls, messengers, and email.',
                icon: '🔄'
              },
              {
                title: isRu ? 'Медленное оформление' : 'Slow Processing',
                text: isRu ? 'Поиск товаров и оформление заказов занимает слишком много времени.' : 'Finding products and placing orders takes too much time.',
                icon: '⏱️'
              },
              {
                title: isRu ? 'Низкая прозрачность' : 'Low Transparency',
                text: isRu ? 'Сложно отслеживать статус поставок и историю закупок.' : 'Difficult to track delivery status and procurement history.',
                icon: '📉'
              }
            ].map((card, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Блок "Решение" (Transformation) */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-[2.5rem] p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {isRu ? 'Как мы сократили количество ручных операций' : 'How we reduced manual operations'}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                  {isRu 
                    ? 'Вместо звонков поставщикам, согласований через мессенджеры и работы с прайс-листами пользователь получает единый инструмент для поиска товаров, оформления заказов и контроля поставок.' 
                    : 'Instead of calling suppliers, negotiating in messengers, and working with price lists, the user gets a single tool for finding products, placing orders, and controlling deliveries.'}
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="relative">
                {/* Было */}
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-3xl mb-4 text-zinc-400 space-y-4">
                  <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-2">{isRu ? 'Было:' : 'Before:'}</div>
                  <div className="flex items-center gap-3"><span className="text-xl">📞</span> <span>{isRu ? 'Звонки поставщикам' : 'Calls to suppliers'}</span></div>
                  <div className="flex items-center gap-3"><span className="text-xl">📄</span> <span>{isRu ? 'Таблицы и прайс-листы' : 'Spreadsheets and price lists'}</span></div>
                  <div className="flex items-center gap-3"><span className="text-xl">💬</span> <span>{isRu ? 'Переписки в мессенджерах' : 'Chats in messengers'}</span></div>
                  <div className="flex items-center gap-3"><span className="text-xl">📦</span> <span>{isRu ? 'Ручной контроль заказов' : 'Manual order control'}</span></div>
                </div>
                
                {/* Стрелка вниз */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-[#0a0a0a]">
                    ↓
                  </div>
                </div>

                {/* Стало */}
                <div className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 p-6 rounded-3xl mt-4 text-emerald-50 font-medium space-y-4">
                  <div className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">{isRu ? 'Стало:' : 'After:'}</div>
                  <div className="flex items-center gap-3"><span className="text-xl">📱</span> <span>{isRu ? 'Один интерфейс' : 'One interface'}</span></div>
                  <div className="flex items-center gap-3"><span className="text-xl">🛒</span> <span>{isRu ? 'Один процесс заказа' : 'One ordering process'}</span></div>
                  <div className="flex items-center gap-3"><span className="text-xl">🚚</span> <span>{isRu ? 'Контроль поставок' : 'Delivery control'}</span></div>
                  <div className="flex items-center gap-3"><span className="text-xl">📑</span> <span>{isRu ? 'История закупок в одном месте' : 'Procurement history in one place'}</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Блок "Ключевые решения" (Bento Cards) */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center relative">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-16 text-white">
            {isRu ? 'Ключевые решения' : 'Key Decisions'}
          </motion.h2>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6 mb-16 relative z-10 w-full">
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="w-full xl:flex-1 flex flex-col items-center">
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-[650px] md:h-[680px] group shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative transition-all duration-500 mb-6 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="p-8 pb-4 relative z-10 h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{isRu ? 'Быстрый поиск товаров' : 'Fast Product Search'}</h3>
                  <p className="text-zinc-400 leading-relaxed text-left">
                    {isRu 
                      ? 'Пользователь может быстро находить нужные позиции среди большого количества поставщиков и категорий. Интерфейс помогает сократить время на поиск и быстрее перейти к оформлению заказа.' 
                      : 'Users can quickly find needed items among many suppliers and categories. The interface helps reduce search time and move to ordering faster.'}
                  </p>
                </div>
                <div className="relative w-full mt-auto flex justify-center items-start">
                  <img src="/uploads/taza/Главная.png" alt="Catalog" className="w-[60%] md:w-[70%] xl:w-[60%] h-auto rounded-[1.5rem] drop-shadow-2xl translate-y-12 group-hover:translate-y-8 transition-transform duration-500" />
                </div>
              </div>
              <div className="text-white font-bold text-xl">{isRu ? 'Каталог товаров' : 'Product Catalog'}</div>
            </motion.div>
            
            {/* Arrow */}
            <motion.div variants={fadeInUp} className="hidden xl:flex text-emerald-500 text-5xl lg:text-6xl font-light drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse">→</motion.div>
            <motion.div variants={fadeInUp} className="xl:hidden text-emerald-500 text-5xl font-light drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse">↓</motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="w-full xl:flex-1 flex flex-col items-center">
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-[650px] md:h-[680px] group shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative transition-all duration-500 mb-6 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="p-8 pb-4 relative z-10 h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{isRu ? 'Повторяемые закупки' : 'Repeatable Procurement'}</h3>
                  <p className="text-zinc-400 leading-relaxed text-left">
                    {isRu 
                      ? 'Сценарий оформления заказа оптимизирован для регулярных закупок. Пользователи могут быстрее формировать новые заказы без необходимости каждый раз проходить полный путь выбора товаров заново.' 
                      : 'The ordering scenario is optimized for regular procurement. Users can form new orders faster without having to go through the entire product selection path again.'}
                  </p>
                </div>
                <div className="relative w-full mt-auto flex justify-center items-start">
                  <img src="/uploads/taza/Корзина.png" alt="Order" className="w-[60%] md:w-[70%] xl:w-[60%] h-auto rounded-[1.5rem] drop-shadow-2xl translate-y-12 group-hover:translate-y-8 transition-transform duration-500" />
                </div>
              </div>
              <div className="text-white font-bold text-xl">{isRu ? 'Оформление заказа' : 'Place Order'}</div>
            </motion.div>

            {/* Arrow */}
            <motion.div variants={fadeInUp} className="hidden xl:flex text-emerald-500 text-5xl lg:text-6xl font-light drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse">→</motion.div>
            <motion.div variants={fadeInUp} className="xl:hidden text-emerald-500 text-5xl font-light drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse">↓</motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="w-full xl:flex-1 flex flex-col items-center">
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-[650px] md:h-[680px] group shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative transition-all duration-500 mb-6 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="p-8 pb-4 relative z-10 h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{isRu ? 'Контроль поставок' : 'Supply Control'}</h3>
                  <p className="text-zinc-400 leading-relaxed text-left">
                    {isRu 
                      ? 'Статус заказа и история взаимодействия с поставщиками доступны внутри приложения. Это снижает количество коммуникации вне системы и делает процесс закупок более предсказуемым.' 
                      : 'Order status and supplier interaction history are available within the app. This reduces out-of-system communication and makes procurement more predictable.'}
                  </p>
                </div>
                <div className="relative w-full mt-auto flex justify-center items-start">
                  <img src="/uploads/taza/Страница заказа.png" alt="Tracking" className="w-[60%] md:w-[70%] xl:w-[60%] h-auto rounded-[1.5rem] drop-shadow-2xl translate-y-12 group-hover:translate-y-8 transition-transform duration-500" />
                </div>
              </div>
              <div className="text-white font-bold text-xl">{isRu ? 'Отслеживание заказа' : 'Track Order'}</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Block 5. Итоги проекта */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-16">
          <div className="w-full">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 text-white text-center md:text-left">
              {isRu ? 'Итоги проекта' : 'Project Results'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {isRu ? 'Проект позволил спроектировать мобильный опыт для B2B-маркетплейса, ориентированного на оптовые закупки.' : 'The project made it possible to design a mobile experience for a B2B marketplace focused on wholesale procurement.'}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
                <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 text-teal-500 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {isRu ? 'В ходе работы были проработаны сценарии поиска товаров, взаимодействия с поставщиками и оформления заказов для бизнеса.' : 'During the work, scenarios for product search, supplier interaction, and business order placement were developed.'}
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {isRu ? 'Этот кейс отличается от классических e-commerce решений тем, что фокусируется не на импульсных покупках, а на регулярных бизнес-процессах, где важны скорость оформления, прозрачность поставок и удобство повторных закупок.' : 'This case study differs from classic e-commerce solutions by focusing not on impulse purchases, but on regular business processes where speed of ordering, supply transparency, and convenience of repeat procurement are key.'}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Screenshots Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start pt-8">
            {[
              'onboard.png', 'onboard-1.png', 'onboard-2.png', 'onboard-3.png',
              'Главная.png', 'Главная — Ауцион.png', 'Главная — Ауцион модалка.png', 'Главная — Ауцион модалка аукцион завершен.png',
              'Корзина.png', 'Оформление заказа.png', 'Страница заказа.png', 'Страница заказа модалка заказа.png',
              'Мои аукционы.png', 'Отложанные товары.png', 'Мои счета.png', 'Профиль.png', 'Модалка товара.png'
            ].slice(0, 4).map((img, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex items-center justify-center w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:border-zinc-700 shadow-xl">
                <img src={`/uploads/taza/${img}`} alt={`Screen ${i+1}`} className="w-full h-auto block" />
              </div>
            ))}

            {!showAllScreenshots && (
              <div 
                className="col-span-2 md:col-span-4 relative group cursor-pointer w-full h-32 md:h-48 overflow-hidden rounded-t-[2rem]" 
                onClick={() => setShowAllScreenshots(true)}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full h-full pointer-events-none">
                  {[
                    'Главная.png', 'Главная — Ауцион.png', 'Главная — Ауцион модалка.png', 'Главная — Ауцион модалка аукцион завершен.png'
                  ].map((img, i) => (
                    <div key={i} className={`bg-zinc-900 border-x border-t border-zinc-800 rounded-t-[2rem] overflow-hidden flex items-start justify-center w-full h-full ${i >= 2 ? 'hidden md:flex' : ''}`}>
                      <img src={`/uploads/taza/${img}`} alt={`Hidden Screen ${i}`} className="w-full h-auto block opacity-50 group-hover:opacity-70 transition-opacity" />
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
              'onboard.png', 'onboard-1.png', 'onboard-2.png', 'onboard-3.png',
              'Главная.png', 'Главная — Ауцион.png', 'Главная — Ауцион модалка.png', 'Главная — Ауцион модалка аукцион завершен.png',
              'Корзина.png', 'Оформление заказа.png', 'Страница заказа.png', 'Страница заказа модалка заказа.png',
              'Мои аукционы.png', 'Отложанные товары.png', 'Мои счета.png', 'Профиль.png', 'Модалка товара.png'
            ].slice(4).map((img, i) => (
              <div key={i + 4} className="bg-zinc-900 border border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex items-center justify-center w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:border-zinc-700 shadow-xl">
                <img src={`/uploads/taza/${img}`} alt={`Screen ${i + 5}`} className="w-full h-auto block" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Other Projects */}
      <OtherProjects currentSlug="taza" lang={lang} projects={otherProjects} />
    </div>
  );
}
