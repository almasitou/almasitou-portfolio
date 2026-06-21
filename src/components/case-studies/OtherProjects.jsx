import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SparklesButton from '@/components/SparklesButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function OtherProjects({ projects, lang }) {
  if (!projects || projects.length === 0) return null;

  const isRu = lang === 'ru';

  return (
    <>
      <section className="pt-16 pb-20 md:py-24 text-center px-6 relative flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/10 rounded-t-[100%] blur-[120px] pointer-events-none z-0"></div>
        
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-10 tracking-tight text-white max-w-3xl leading-tight">
            {isRu ? 'Понравился этот кейс?' : 'Enjoyed this case study?'}
          </h2>
          <p className="text-zinc-400 text-lg md:text-2xl mb-12 max-w-2xl relative z-10">
            {isRu ? 'Открыт к новым вызовам и готов обсудить ваш следующий проект.' : 'I am open to new challenges and ready to discuss your next project.'}
          </p>
          
          <SparklesButton 
            href="https://t.me/almasitou" 
            target="_blank"
            className="group relative inline-flex items-center justify-center px-8 py-5 md:px-16 md:py-8 w-full max-w-sm md:max-w-none md:w-auto font-heading font-bold text-xl md:text-3xl text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]"
          >
            <span className="mr-3 md:mr-4 relative z-10">
              <svg className="w-8 h-8 md:w-10 md:h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
              </svg>
            </span>
            <span className="relative z-10">{isRu ? 'Связаться со мной' : 'Contact me on Telegram'}</span>
          </SparklesButton>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-20 md:pb-32 relative z-10">
        <motion.div initial="visible" animate="visible" variants={fadeInUp} className="border-t border-zinc-800 pt-16 md:pt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-left">
            {isRu ? 'Мои другие проекты' : 'My Other Projects'}
          </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => {
            const getSlug = (p) => {
              const title = (p.title || p.titleRu || '').toLowerCase();
              if (p.id === 'cmqjeakgy0000vxltp4qj7ks1' || title.includes('skibo')) return 'skibo';
              if (p.id === 'cmqjeakqk0001vxltptpxytw5' || title.includes('kaspi')) return 'kaspi';
              if (p.id === 'cmqjeakvd0002vxltgwlxjlo9' || title.includes('bao')) return 'bao';
              if (p.id === 'cmqjeal510004vxlt8hmvmcr6' || title.includes('taza')) return 'taza';
              if (p.id === 'cmqjeal060003vxlt80svpske' || title.includes('idol')) return 'idol';
              return p.id;
            };
            return (
            <Link 
              key={project.id} 
              href={`/${lang}/project/${getSlug(project)}`}
              className="nav-loadable group block relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 aspect-[4/3] hover:border-zinc-600 transition-colors"
            >
              <img 
                src={project.coverImage || project.cover} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
                <h4 className="text-white font-medium text-lg lg:text-xl transform transition-transform duration-500 group-hover:-translate-y-2">
                  {project.id === 'cmqjeakqk0001vxltptpxytw5' || (project.title || '').toLowerCase().includes('kaspi') 
                    ? (isRu ? 'Kaspi Cinema Booking UX: Билет за пару кликов' : 'Kaspi Cinema Booking UX: Ticket in a few clicks') 
                    : project.title}
                </h4>
              </div>
            </Link>
            );
          })}
        </div>
      </motion.div>
      </section>
    </>
  );
}
