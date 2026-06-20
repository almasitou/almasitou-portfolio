'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SparklesButton from '@/components/SparklesButton';
import OtherProjects from './OtherProjects';

// Animation variants
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

const fastStaggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export default function SkiboCaseStudy({ lang, otherProjects }) {
  const isRu = lang === 'ru';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans pb-0 overflow-x-hidden w-full max-w-[100vw]">
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
           <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/19dd56222469445.67e6476145244.png" alt="Skibo Hero" className="w-full h-full object-cover object-[center_top] md:object-center" />
           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
           <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto text-center mt-10 md:mt-20">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">B2C App & CRM</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl leading-none">
            Skibo
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed mb-16">
            {isRu ? 'Онлайн-бронирование спортивной экипировки' : 'Online Sports Equipment Booking'}
          </motion.p>
          
          {/* Project Meta Info horizontally flexed */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-5xl mx-auto w-full">
            <div className="flex-1 min-w-[180px] p-6 md:p-8 rounded-[2rem] bg-zinc-950/60 border border-white/10 backdrop-blur-xl shadow-2xl">
              <span className="block text-zinc-400 text-sm uppercase tracking-wider mb-2">{isRu ? 'Моя роль' : 'My Role'}</span>
              <span className="text-xl md:text-2xl text-white font-medium">Product Designer</span>
            </div>
            <div className="flex-1 min-w-[180px] p-6 md:p-8 rounded-[2rem] bg-zinc-950/60 border border-white/10 backdrop-blur-xl shadow-2xl">
              <span className="block text-zinc-400 text-sm uppercase tracking-wider mb-2">{isRu ? 'Срок' : 'Timeline'}</span>
              <span className="text-xl md:text-2xl text-white font-medium">{isRu ? '6 недель' : '6 weeks'}</span>
            </div>
            <div className="flex-1 min-w-[180px] p-6 md:p-8 rounded-[2rem] bg-zinc-950/60 border border-white/10 backdrop-blur-xl shadow-2xl">
              <span className="block text-zinc-400 text-sm uppercase tracking-wider mb-2">{isRu ? 'Релиз' : 'Release Date'}</span>
              <span className="text-xl md:text-2xl text-white font-medium">{isRu ? '28 марта 2025' : 'March 28, 2025'}</span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-6 flex flex-col items-center justify-center p-8 rounded-[2rem] bg-zinc-950/60 border border-white/10 backdrop-blur-xl shadow-2xl w-full">
             <span className="block text-zinc-400 text-sm uppercase tracking-wider mb-6">{isRu ? 'Что сделал' : 'What I Did'}</span>
             <div className="flex flex-wrap items-center justify-center gap-3">
               {(isRu 
                 ? ['Исследование рынка', 'Анализ сценариев', 'UX Проектирование', 'User Flows', 'Wireframes', 'UI Мобильного приложения', 'UI Админ-панели', 'Прототипирование', 'Тестирование']
                 : ['Market Research', 'Scenario Analysis', 'UX Design', 'User Flows', 'Wireframing', 'Mobile App UI', 'Admin Panel UI', 'Interactive prototyping', 'User testing']
               ).map((task, i) => (
                 <span key={i} className="px-3 py-1.5 md:px-5 md:py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white text-sm md:text-lg font-medium transition-colors cursor-default backdrop-blur-md">
                   {task}
                 </span>
               ))}
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Block 2: Проблема бизнеса */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 pt-10 md:pt-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="relative md:rounded-[3rem] bg-transparent md:bg-zinc-900 md:border md:border-zinc-800 overflow-hidden flex flex-col md:flex-row items-stretch md:min-h-[500px] md:shadow-2xl"
        >
          <div className="py-6 md:p-16 lg:p-20 flex-1 relative z-20 flex flex-col justify-center md:bg-zinc-900 text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white">{isRu ? 'Проблема' : 'The Challenge'}</h2>
            <div className="text-zinc-300 text-base md:text-xl leading-relaxed space-y-4 md:space-y-6">
              <p>{isRu ? 'В высокий сезон прокат спортивной экипировки сталкивался с перегрузкой точки выдачи.' : 'During peak season, the sports equipment rental faced severe congestion at the pickup point.'}</p>
              <p>{isRu ? 'Посетители приезжали одновременно, создавались очереди, помещение быстро заполнялось людьми, а сотрудники тратили значительное время на оформление документов и подбор инвентаря.' : 'Visitors arrived simultaneously, creating queues. The space filled up quickly, and staff spent significant time processing paperwork and selecting equipment.'}</p>
              <p>{isRu ? 'Дополнительной проблемой было отсутствие возможности заранее узнать наличие нужного размера или конкретной модели экипировки. Из-за этого часть клиентов уезжала без аренды или оставалась недовольна сервисом.' : 'An additional issue was the inability to check the availability of specific sizes or models in advance, leaving some customers without equipment or dissatisfied with the service.'}</p>
            </div>
          </div>
          <div className="flex-1 w-full relative min-h-[400px] md:min-h-full mt-4 md:mt-0">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none hidden md:block" />
            <img src="/uploads/skibo/line.jpeg" alt="Queue" className="absolute inset-0 w-full h-full object-cover rounded-[3rem] md:rounded-none" />
          </div>
        </motion.div>
      </section>

      {/* Block 2.5: Решение */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12 md:mb-16">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="relative rounded-3xl md:rounded-[3rem] bg-gradient-to-tr from-blue-900/40 to-zinc-900 border border-blue-500/20 overflow-hidden flex flex-col items-start md:items-center pt-10 md:pt-20 px-4 md:px-6 shadow-[0_0_50px_rgba(37,99,235,0.1)] group"
        >
          <div className="max-w-4xl text-left md:text-center relative z-20 mb-12 md:mb-16 px-2 md:px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white">{isRu ? 'Решение' : 'The Solution'}</h2>
            <div className="text-zinc-300 text-base md:text-xl leading-relaxed space-y-4 md:space-y-6">
              <p>{isRu ? 'Мы разработали комплексную экосистему: мобильное приложение для клиентов и мощную админ-панель для бизнеса.' : 'We developed a comprehensive ecosystem: a mobile app for customers and a powerful admin panel for the business.'}</p>
              <p>{isRu ? 'Клиенты больше не стоят в очередях — они делают всё в смартфоне: от выбора экипировки до подписания договора и оплаты.' : 'Customers no longer wait in queues — they do everything on their smartphones: from selecting equipment to signing contracts and paying.'}</p>
            </div>
          </div>
          <div className="w-full relative flex items-start justify-center min-h-[450px] overflow-visible -mb-10">
            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-blue-500/20 blur-[100px] z-0"></div>
            
            {/* Multiple Screenshots overlapping with hover spread animation */}
            <div className="relative flex justify-center w-full max-w-4xl z-20 transition-all duration-700">
              <img src="/uploads/skibo/cart.png" alt="App Screen 1" className="absolute left-0 md:left-10 top-20 w-[60%] md:w-[45%] lg:w-[35%] object-contain drop-shadow-2xl -rotate-6 transition-all duration-700 group-hover:-translate-x-12 group-hover:-rotate-12 group-hover:scale-105" />
              <img src="/uploads/skibo/combo_page.png" alt="App Screen 3" className="absolute right-0 md:right-10 top-20 w-[60%] md:w-[45%] lg:w-[35%] object-contain drop-shadow-2xl rotate-6 transition-all duration-700 group-hover:translate-x-12 group-hover:rotate-12 group-hover:scale-105" />
              <img src="/uploads/skibo/media__1781870690123.png" alt="Solution iPhone" className="relative z-30 w-[80%] max-w-[360px] object-cover object-top drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:-translate-y-6 group-hover:scale-105" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Block 3: Цели проекта */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold text-left md:text-center mb-10 md:mb-16">{isRu ? 'Цели бизнеса' : 'Business Goals'}</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-800/80 transition-colors text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500/10 text-blue-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{isRu ? 'Сократить очереди' : 'Reduce Queues'}</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{isRu ? 'Уменьшить количество времени, которое клиенты проводят в пункте выдачи.' : 'Minimize the time customers spend at the pickup point.'}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-800/80 transition-colors text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{isRu ? 'Повысить предсказуемость' : 'Improve Predictability'}</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{isRu ? 'Дать возможность заранее резервировать нужную экипировку и размеры.' : 'Allow users to reserve needed equipment and sizes in advance.'}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 hover:bg-zinc-800/80 transition-colors text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-500/10 text-purple-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{isRu ? 'Автоматизировать процесс' : 'Automate Processes'}</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{isRu ? 'Перевести оформление договора и оплату в цифровой формат.' : 'Digitize contract signing and payment.'}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Block 4: Исследование */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1 space-y-8 flex flex-col justify-start pt-4 lg:pt-10 text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">{isRu ? 'Исследование' : 'Research'}</h2>
              <p className="text-zinc-300 text-base md:text-xl leading-relaxed">
                {isRu 
                  ? 'Перед проектированием я изучил сервисы аренды спортивного оборудования, системы онлайн-бронирования и маркетплейсы с похожей логикой выбора товаров.' 
                  : 'Before designing, I analyzed sports equipment rental services, online booking systems, and marketplaces with similar product selection logic.'}
              </p>
            </div>
            <div className="flex-[1.2] w-full">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl md:rounded-[3rem] p-6 md:p-10 lg:p-14 h-full md:shadow-2xl relative overflow-hidden flex flex-col justify-center text-left">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
                <h4 className="text-white font-bold text-2xl md:text-3xl mb-6 md:mb-10 relative z-10">{isRu ? 'Ключевые инсайты:' : 'Key insights:'}</h4>
                <ul className="space-y-4 md:space-y-6 text-zinc-300 text-base md:text-xl relative z-10 font-medium">
                  <li className="flex items-start"><span className="text-yellow-500 text-2xl md:text-3xl mr-4 md:mr-5 leading-none">✦</span> {isRu ? 'Пользователи хотят заранее видеть наличие размеров' : 'Users want to see size availability in advance'}</li>
                  <li className="flex items-start"><span className="text-yellow-500 text-2xl md:text-3xl mr-4 md:mr-5 leading-none">✦</span> {isRu ? 'Оформление документов на месте вызывает раздражение' : 'Filling out paperwork on-site is frustrating'}</li>
                  <li className="flex items-start"><span className="text-yellow-500 text-2xl md:text-3xl mr-4 md:mr-5 leading-none">✦</span> {isRu ? 'Ожидание в очереди негативно влияет на впечатление' : 'Waiting in queues negatively impacts the experience'}</li>
                  <li className="flex items-start"><span className="text-yellow-500 text-2xl md:text-3xl mr-4 md:mr-5 leading-none">✦</span> {isRu ? 'Сотрудники тратят много времени на повторяющиеся операции' : 'Staff spend too much time on repetitive tasks'}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Block 5: User Flow */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fastStaggerContainer} className="bg-transparent md:bg-zinc-900 md:border md:border-zinc-800 rounded-none md:rounded-[3rem] p-0 md:p-10 lg:p-16 md:shadow-2xl relative overflow-hidden text-left md:text-center">
          <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-white text-left md:text-center">{isRu ? 'Пользовательский сценарий' : 'User Flow'}</motion.h2>
          
          <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-center items-center gap-y-2 md:gap-y-6 gap-x-3 md:gap-x-4 relative z-10">
            {[
              { n: '1', t: isRu ? 'Каталог' : 'Catalog' },
              { n: '2', t: isRu ? 'Выбор дат' : 'Select Dates' },
              { n: '3', t: isRu ? 'Бронирование' : 'Booking' },
              { n: '4', t: isRu ? 'Эл. договор' : 'Contract', sub: isRu ? '* Подписывается лишь один раз' : '* Signed only once' },
              { n: '5', t: isRu ? 'Оплата' : 'Payment' },
              { n: '6', t: isRu ? 'Подтверждение' : 'Confirmation' },
              { n: '7', t: isRu ? 'Прибытие' : 'Arrival' },
              { n: '8', t: isRu ? 'Получение' : 'Pickup' },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <motion.div variants={fastFadeInUp} className="bg-zinc-950 px-6 py-4 rounded-2xl border border-zinc-800 flex items-center gap-4 shadow-lg hover:bg-zinc-900 active:scale-95 transition-all cursor-pointer select-none">
                  <span className="text-blue-500 font-mono text-xl font-bold">{item.n}</span>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-base md:text-lg font-medium whitespace-nowrap leading-tight">{item.t}</span>
                    {item.sub && <span className="text-zinc-500 text-xs whitespace-nowrap mt-0.5">{item.sub}</span>}
                  </div>
                </motion.div>
                {i < 7 && (
                  <motion.div variants={fastFadeInUp} className="text-zinc-600 hidden md:flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </motion.div>
                )}
                {i < 7 && (
                  <motion.div variants={fastFadeInUp} className="text-zinc-600 flex md:hidden items-center justify-center py-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </motion.div>
                )}
                
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Block 6: Ключевые решения */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-16 text-left md:text-center">{isRu ? 'Ключевые продуктовые решения' : 'Key Product Solutions'}</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                t: isRu ? 'Предварительное бронирование' : 'Pre-booking', 
                d: isRu ? 'Пользователи могли заранее зарезервировать экипировку и гарантировать её наличие на дату.' : 'Users could reserve equipment in advance, guaranteeing availability for chosen dates.',
                colorClass: 'bg-emerald-500/10 text-emerald-500 rounded-2xl md:rounded-3xl',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              },
              { 
                t: isRu ? 'Электронный договор' : 'Electronic Contract', 
                d: isRu ? 'Вместо заполнения бумаг на месте клиент подписывал договор прямо в приложении.' : 'Instead of filling out paperwork on-site, clients signed the contract directly in the app.',
                colorClass: 'bg-blue-500/10 text-blue-500 rounded-2xl md:rounded-3xl',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              },
              { 
                t: isRu ? 'Онлайн-оплата' : 'Online Payment', 
                d: isRu ? 'Процесс оплаты перенесён в цифровой формат, что позволило значительно ускорить выдачу.' : 'Moving the payment process to a digital format significantly sped up equipment handover.',
                colorClass: 'bg-purple-500/10 text-purple-500 rounded-2xl md:rounded-3xl',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              }
            ].map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group hover:border-zinc-700 hover:shadow-2xl active:scale-95 cursor-pointer transition-all h-full text-left">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500/5 rounded-bl-3xl md:rounded-bl-[4rem] group-hover:bg-blue-500/10 transition-colors pointer-events-none"></div>
                <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-6 md:mb-8 ${sol.colorClass}`}>
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">{sol.icon}</svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{sol.t}</h3>
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg">{sol.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Block 7: Мобильное приложение */}
      <section className="mb-20 pt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-bold text-left md:text-center mb-16 md:mb-24">{isRu ? 'Мобильное приложение' : 'Mobile App'}</motion.h2>
          
          <div className="space-y-32">
            {[
              {
                t: isRu ? 'Каталог экипировки' : 'Equipment Catalog',
                d: isRu ? 'Удобная система категорий, фильтров и поиска помогала быстро находить необходимый инвентарь.' : 'A convenient system of categories, filters, and search helped users quickly find the inventory they needed.',
                layout: 'row',
                align: 'left',
                images: ['/uploads/skibo/main_page.png']
              },
              {
                t: isRu ? 'Карточка товара' : 'Product Card',
                d: isRu ? 'Пользователь видел фотографии, характеристики, доступные размеры и даты аренды.' : 'Users could see photos, specifications, available sizes, and rental dates.',
                layout: 'row',
                align: 'right',
                images: ['/uploads/skibo/combo_page.png', '/uploads/skibo/combo_page_selecting_size.png']
              },
              {
                t: isRu ? 'Бронирование, договор и оплата' : 'Booking, Contract & Payment',
                d: isRu ? 'Пошаговый процесс оформления помогал избежать ошибок и снижал количество отказов на этапе оплаты.' : 'A step-by-step checkout process prevented errors and reduced cart abandonment at the payment stage.',
                layout: 'column',
                images: ['/uploads/skibo/cart.png', '/uploads/skibo/pre_booking.png', '/uploads/skibo/booking.png', '/uploads/skibo/payment.png', '/uploads/skibo/payment_success.png']
              }
            ].map((scr, i) => {
              if (scr.layout === 'column') {
                return (
                  <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                    <div className="text-left md:text-center max-w-3xl mx-auto mb-10 md:mb-16">
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">{scr.t}</h3>
                      <p className="text-zinc-400 text-base md:text-xl leading-relaxed">{scr.d}</p>
                    </div>
                    {/* Matrix for booking screenshots */}
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
                      {scr.images.map((imgSrc, idx) => (
                        <div key={idx} className="relative group w-[80%] md:w-full max-w-[220px] md:max-w-[280px] flex justify-center cursor-pointer active:scale-95 transition-transform duration-300">
                          <div className="absolute inset-4 bg-blue-500/40 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full z-0"></div>
                          <img 
                            src={imgSrc} 
                            alt={`${scr.t} screen ${idx + 1}`} 
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-4" 
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div key={i} variants={fadeInUp} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${scr.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 text-left md:text-center ${scr.align === 'right' ? 'lg:text-right' : 'lg:text-left'} max-w-xl mx-auto lg:mx-0`}>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">{scr.t}</h3>
                    <p className="text-zinc-400 text-base md:text-xl leading-relaxed">{scr.d}</p>
                  </div>
                  <div className="flex-[1.5] w-full flex justify-center gap-4 md:gap-8">
                    {scr.images.map((imgSrc, idx) => (
                      <div key={idx} className="relative group w-[45%] md:w-1/2 max-w-[220px] md:max-w-[280px] flex justify-center cursor-pointer active:scale-95 transition-transform duration-300">
                        <div className="absolute inset-4 bg-blue-500/40 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full z-0"></div>
                        <img 
                          src={imgSrc} 
                          alt={`${scr.t} screen ${idx + 1}`} 
                          className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-4" 
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Block 8: Административная панель */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12 md:mb-16 pt-10 md:pt-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-transparent md:bg-zinc-900 md:border md:border-zinc-800 rounded-none md:rounded-[3.5rem] p-0 md:p-16 lg:p-20 md:shadow-2xl overflow-hidden relative">
          <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white">{isRu ? 'Умная Админ-панель' : 'Smart Admin Panel'}</h2>
            <p className="text-zinc-300 text-base md:text-2xl leading-relaxed mb-6 md:mb-10">
              {isRu 
                ? 'Помимо клиентского приложения была спроектирована внутренняя система управления для сотрудников компании, чтобы быстрее обрабатывать заказы и контролировать доступность инвентаря.' 
                : 'Alongside the client app, an internal management system was designed to help staff process orders faster and monitor equipment availability.'}
            </p>
          </div>

          {/* Admin Panel Screenshots Flex/Grid WITHOUT background wrappers */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
             {[
               { img: '/uploads/skibo/admin_orders.png', desc: isRu ? 'Список заказов' : 'Orders List' },
               { img: '/uploads/skibo/admin_order_info_able_to_give.png', desc: isRu ? 'Заказ (Готов к выдаче)' : 'Order (Ready)' },
               { img: '/uploads/skibo/admin_order_info_no_items_to_give.png', desc: isRu ? 'Заказ (Ожидает инвентарь)' : 'Order (Waiting Items)' },
               { img: '/uploads/skibo/admin_items_manage_page.png', desc: isRu ? 'Управление каталогом' : 'Catalog Management' },
               { img: '/uploads/skibo/admin_chat_with_clients.png', desc: isRu ? 'Чат с клиентами' : 'Client Chat' },
               { img: '/uploads/skibo/admin_profile_page.png', desc: isRu ? 'Профиль администратора' : 'Admin Profile' }
             ].map((adminSrc, idx) => (
               <div key={idx} className="flex flex-col items-center group cursor-pointer active:scale-95 transition-transform duration-300">
                 <img 
                   src={adminSrc.img} 
                   alt={adminSrc.desc} 
                   className="w-full max-w-[280px] md:max-w-none h-auto object-contain mb-6 transition-all duration-500 group-hover:-translate-y-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] rounded-2xl" 
                 />
                 <h4 className="text-zinc-400 font-medium text-lg transition-colors group-hover:text-white text-center">{adminSrc.desc}</h4>
               </div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* Block 9 & 10: Проверка и Результат */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-20">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="relative md:rounded-[3rem] bg-transparent md:bg-zinc-900 md:border md:border-zinc-800 overflow-hidden flex flex-col md:flex-row items-stretch md:min-h-[500px] md:shadow-2xl"
          >
            <div className="py-6 md:p-16 lg:p-20 flex-1 relative z-20 flex flex-col justify-center md:bg-zinc-900 text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white">{isRu ? 'Проверка решений' : 'Validating Solutions'}</h2>
              <div className="text-zinc-300 text-base md:text-xl leading-relaxed space-y-4 md:space-y-6">
                <p>{isRu ? 'После создания интерактивного прототипа были проведены пользовательские тестирования с потенциальными клиентами сервиса.' : 'After creating an interactive prototype, we conducted user testing with potential service clients.'}</p>
                <p>{isRu ? 'Полученная обратная связь позволила улучшить структуру экранов и упростить отдельные этапы пользовательского сценария.' : 'The feedback allowed us to improve screen structures and simplify specific steps in the user flow.'}</p>
              </div>
            </div>
            <div className="flex-1 w-full relative min-h-[400px] md:min-h-full mt-4 md:mt-0">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none hidden md:block" />
              <img src="/uploads/skibo/ux_test.jpeg" alt="UX Testing session" className="absolute inset-0 w-full h-full object-cover rounded-[3rem] md:rounded-none" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 md:p-16 lg:p-20 rounded-3xl md:rounded-[3rem] bg-gradient-to-tr from-emerald-900/30 to-zinc-900 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
            {/* Decorative background grid and glow */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none"></div>
            
            <div className="absolute -right-20 -bottom-10 opacity-10 pointer-events-none z-0 transform rotate-[-15deg]">
              <svg className="w-[400px] h-[400px] text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" /></svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-start text-left max-w-3xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-white">{isRu ? 'Результат проекта' : 'The Result'}</h2>
              <div className="prose prose-invert prose-base md:prose-xl max-w-none text-zinc-300 space-y-4 md:space-y-6 font-medium">
                <p>{isRu ? 'Проект был полностью спроектирован и подготовлен к разработке. Дизайн-система и все компоненты были задокументированы.' : 'The project was fully designed and prepared for development. The design system and all components were documented.'}</p>
                <p>{isRu ? 'Однако до начала реализации владелец бизнеса принял решение временно отказаться от запуска продукта из-за изменения приоритетов компании.' : 'However, before implementation began, the business owner decided to temporarily pause the product launch due to shifting company priorities.'}</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Block 11: Дальнейшее развитие */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12 md:mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-3xl md:rounded-[3rem] p-6 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent z-0"></div>
             <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 transform">
               <svg className="w-[350px] h-[350px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
             </div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-white">{isRu ? 'Дальнейшее развитие' : 'Future Development'}</h2>
            <div className="prose prose-invert prose-xl max-w-none text-zinc-300 space-y-6 font-medium">
              <p>{isRu ? 'Несмотря на то, что проект был поставлен на паузу, он позволил проработать полный цикл цифровой аренды спортивной экипировки — от выбора инвентаря до получения заказа в пункте выдачи.' : 'Despite being paused, the project successfully mapped out the complete cycle of digital sports equipment rental — from selecting inventory to collecting the order at the pickup point.'}</p>
              <p>{isRu ? 'В будущем эти наработки могут быть адаптированы для других ниш аренды (сапборды, велосипеды, туристическое оборудование), так как ядро логики останется неизменным.' : 'In the future, these foundations can be adapted for other rental niches (paddleboards, bicycles, camping equipment), as the core logic remains the same.'}</p>
            </div>
          </div>
        </motion.div>
      </section>



      {/* Other Projects */}
      <OtherProjects projects={otherProjects} lang={lang} />

    </div>
  );
}
