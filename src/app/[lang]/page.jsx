import { prisma } from '@/lib/prisma';
import { dictionaries } from '@/i18n/dictionaries';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import InstagramReel from '@/components/InstagramReel';
import Typewriter from '@/components/Typewriter';
import Reveal from '@/components/Reveal';
import SparklesButton from '@/components/SparklesButton';

const getProjectCategory = (id, defaultTag) => {
  if (id === 'cmqjeakqk0001vxltptpxytw5') return 'UX/UI Concept';
  if (id === 'cmqjeakgy0000vxltp4qj7ks1') return 'B2C App & CRM';
  if (id === 'cmqjeakvd0002vxltgwlxjlo9') return 'B2C Service';
  if (id === 'cmqjeal510004vxlt8hmvmcr6') return 'B2B Platform';
  if (id === 'cmqjeal060003vxlt80svpske') return 'SaaS Concept';
  return defaultTag;
};

export const dynamic = 'force-dynamic';

export default async function Home({ params }) {
  const { lang } = await params;
  const t = dictionaries[lang] || dictionaries['en'];
  
  const settings = await prisma.settings.findFirst() || {};
  const experiences = await prisma.experience.findMany({ orderBy: { orderIndex: 'asc' } });
  const skills = await prisma.skillCategory.findMany({ orderBy: { orderIndex: 'asc' } });
  const projects = await prisma.project.findMany({ orderBy: { orderIndex: 'asc' } });
  const recommendations = await prisma.recommendation.findMany({ orderBy: { orderIndex: 'asc' } });
  const instagramReels = await prisma.instagramReel.findMany({ orderBy: { orderIndex: 'asc' } });

  // Translation helpers
  const getS = (obj, field) => obj[`${field}Ru`] && lang === 'ru' ? obj[`${field}Ru`] : obj[field];

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      
      <Navbar t={t} lang={lang} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-24">
        
        <section className="min-h-[85vh] lg:min-h-[80vh] flex flex-col justify-center lg:grid lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center pt-4 lg:pt-0 pb-10 lg:pb-16 w-full">
          
          {/* Left Column (Text Content) */}
          <div className="lg:col-span-6 flex flex-col items-start w-full">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-zinc-700/50 text-xs font-medium text-zinc-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {t.hero.available}
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9] mb-6 min-h-[2em]">
                <Typewriter title={settings.title} />
              </h1>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8">
                {[
                  t.hero.skills?.strategy,
                  t.hero.skills?.ux,
                  t.hero.skills?.systems,
                  t.hero.skills?.apps
                ].filter(Boolean).map((item, i) => (
                  <div key={i} className="relative overflow-hidden glass inline-flex items-center px-4 py-2 md:px-5 md:py-3 rounded-full border border-zinc-800/60 shadow-lg hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default group">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-seq"
                      style={{ animationDelay: `${i * 5}s` }}
                    />
                    <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 md:mr-3 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <span className="relative z-10 text-[10px] md:text-xs font-medium tracking-wide uppercase text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="max-w-2xl mb-8">
                <p className="text-lg md:text-xl text-zinc-400/90 font-medium leading-relaxed">
                  {getS(settings, 'bio')}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column (Photo & Floating Stats) */}
          <div className="lg:col-span-6 w-full relative">
            <Reveal delay={0.5}>
              <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] group mt-12 lg:mt-0 mx-auto lg:ml-auto lg:mr-0">
                
                {/* Decorative Background Glow for AI Integration */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 rounded-[3.5rem] blur-3xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
                
                {/* Premium Glass Frame */}
                <div className="p-3 rounded-[2.8rem] md:rounded-[3.2rem] bg-zinc-950/40 border border-zinc-800/50 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-blue-500/30 group-[.is-active]:border-blue-500/30 group-hover:bg-zinc-950/60 group-[.is-active]:bg-zinc-950/60 animate-float">
                  
                  {/* Photo Container with overflow-hidden for zoom effect */}
                  <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2.2rem] md:rounded-[2.5rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-40 group-[.is-active]:opacity-40"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-40 group-[.is-active]:opacity-40"></div>

                    <img 
                      src="/profile.jpg" 
                      alt={`${t.hero.firstName} ${t.hero.lastName}`} 
                      className="w-full h-full object-cover object-center opacity-90 transition-all duration-700 group-hover:opacity-100 group-[.is-active]:opacity-100 group-hover:scale-105 group-[.is-active]:scale-105"
                    />
                  </div>
                </div>

                {/* Glassmorphic Name Badge - Decomposed Intersection */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-top-8 md:-left-8 lg:-left-12 z-30 w-max transform transition-all duration-500 group-hover:scale-105 group-[.is-active]:scale-105 group-hover:-translate-y-2 group-[.is-active]:-translate-y-2 group-hover:-rotate-2 group-[.is-active]:-rotate-2">
                  <div className="relative overflow-hidden glass px-6 py-4 md:px-8 md:py-5 rounded-[2rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-zinc-950/50 group-hover:bg-zinc-900/70 group-[.is-active]:bg-zinc-900/70 group-hover:border-blue-400/50 group-[.is-active]:border-blue-400/50 transition-colors flex flex-col items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                    <span className="font-heading font-bold text-xl md:text-3xl text-white tracking-tight leading-none drop-shadow-lg relative z-10">{t.hero.firstName}</span>
                    <span className="font-heading font-semibold text-[10px] md:text-xs text-blue-400 tracking-[0.3em] uppercase mt-1.5 drop-shadow-md relative z-10">{t.hero.lastName}</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 lg:-bottom-10 left-1/2 -translate-x-1/2 z-20 bg-black/30 backdrop-blur-xl border border-zinc-700/40 px-8 py-6 lg:px-12 lg:py-8 rounded-[2rem] shadow-2xl flex justify-center items-center gap-8 lg:gap-12 w-max transform transition-transform duration-500 group-hover:-translate-y-2 group-[.is-active]:-translate-y-2 group-hover:-translate-x-1/2 group-[.is-active]:-translate-x-1/2 group-hover:border-blue-500/40 group-[.is-active]:border-blue-500/40 group-hover:bg-black/40 group-[.is-active]:bg-black/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer pointer-events-none" style={{ animationDelay: '3.25s' }} />
                  <div className="text-center relative z-10">
                    <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">6+</div>
                    <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-medium whitespace-nowrap">{t.hero.yearsExp}</div>
                  </div>
                  <div className="w-px h-16 bg-zinc-800 relative z-10"></div>
                  <div className="text-center relative z-10">
                    <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">20+</div>
                    <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-medium whitespace-nowrap">{t.hero.projects}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </section>

        {/* Tech Stack Marquee for HRs */}
          <div className="w-full mt-24 mb-12 pt-12 border-t border-zinc-900 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-xl font-bold font-heading">Figma</span>
                  <span className="text-xl font-bold font-heading text-zinc-400">FigJam</span>
                  <span className="text-xl font-bold font-heading">Miro</span>
                  <span className="text-xl font-bold font-heading text-zinc-400">Tilda</span>
                  <span className="text-xl font-bold font-heading">HTML/CSS</span>
                  <span className="text-xl font-bold font-heading text-zinc-400">JavaScript</span>
                  <span className="text-xl font-bold font-heading">Jira</span>
                  <span className="text-xl font-bold font-heading text-zinc-400">Trello</span>
                  <span className="text-xl font-bold font-heading">Confluence</span>
                  <span className="text-xl font-bold font-heading text-zinc-400">Notion</span>
                  <span className="text-xl font-bold font-heading">Slack</span>
                  <span className="text-xl font-bold font-heading text-zinc-400">Photoshop</span>
                  <span className="text-xl font-bold font-heading">CapCut</span>
                </div>
              ))}
            </div>
          </div>

        <section id="work" className="py-24">
          <Reveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 tracking-tight">{t.work.title}</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.length > 0 ? projects.map((proj, i) => (
              <Reveal key={proj.id} delay={0.1 * (i % 2)} className={proj.id === 'cmqjeal510004vxlt8hmvmcr6' ? 'md:col-span-2' : ''}>
                <Link 
                  href={`/${lang}/project/${proj.id === 'cmqjeakgy0000vxltp4qj7ks1' ? 'skibo' : proj.id === 'cmqjeakqk0001vxltptpxytw5' ? 'kaspi' : proj.id === 'cmqjeakvd0002vxltgwlxjlo9' ? 'bao' : proj.id === 'cmqjeal510004vxlt8hmvmcr6' ? 'taza' : proj.id === 'cmqjeal060003vxlt80svpske' ? 'idol' : proj.id}`}
                  className={`nav-loadable group block relative rounded-3xl overflow-hidden glass glass-hover ${proj.id === 'cmqjeal510004vxlt8hmvmcr6' ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'} hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 active:scale-95 transition-all duration-500`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-once pointer-events-none z-20" />
                  {proj.coverImage ? (
                    <img 
                      src={proj.id === 'cmqjeakqk0001vxltptpxytw5' ? '/kaspi-cover.jpg' : proj.id === 'cmqjeakvd0002vxltgwlxjlo9' ? '/bao-cover.jpg' : proj.coverImage} 
                      referrerPolicy="no-referrer"
                      alt={getS(proj, 'title')} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                      <span className="text-zinc-600 font-medium tracking-widest uppercase">{t.work.preview}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white mb-2">
                          {proj.id === 'cmqjeakgy0000vxltp4qj7ks1' ? 'Skibo Mobile App & Admin Panel' : 
                           proj.id === 'cmqjeakqk0001vxltptpxytw5' ? (lang === 'ru' ? 'Kaspi Cinema Booking UX: Билет за пару кликов' : 'Kaspi Cinema Booking UX: Ticket in a few clicks') :
                           proj.id === 'cmqjeal510004vxlt8hmvmcr6' ? 'Taza B2B Store' :
                           getS(proj, 'title')}
                        </h3>
                        <p className="text-zinc-400 text-sm group-hover:text-blue-300 transition-colors duration-300">{getProjectCategory(proj.id, proj.tags)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )) : (
              <div className="col-span-2 py-20 text-center glass rounded-3xl">
                <p className="text-zinc-500">{t.work.empty}</p>
              </div>
            )}
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-16">
            <div className="xl:col-span-1">
              <Reveal delay={0.1}>
                <h2 className="font-heading text-4xl font-bold tracking-tight sticky top-32">
                  {t.experience.title}
                </h2>
              </Reveal>
            </div>
            
            <div className="xl:col-span-2 space-y-2 md:space-y-4 group/list">
              {experiences.map((exp, i) => {
                const rawAchievements = getS(exp, 'achievements');
                let achievements = [];
                try {
                  achievements = JSON.parse(rawAchievements || '[]');
                } catch(e) {}

                return (
                  <Reveal key={exp.id} delay={i * 0.1}>
                    <div className="group/item relative pl-8 pr-4 md:px-8 py-6 transition-all duration-500 md:group-hover/list:opacity-20 md:hover:!opacity-100 md:hover:scale-[1.02] md:hover:bg-zinc-900/40 rounded-3xl border border-transparent md:hover:border-zinc-800/60 md:hover:shadow-2xl active:bg-zinc-900/40 active:scale-[0.98]">
                      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full md:group-hover/item:animate-shimmer-once" />
                      </div>
                      <div className="absolute left-0 top-8 bottom-0 w-px bg-zinc-800 z-10" />
                      <div className="absolute left-[-4px] top-8 w-2 h-2 rounded-full bg-blue-500 z-10" />

                      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-white">{getS(exp, 'company')}</h3>
                          <p className="text-blue-400 font-medium mt-1">{getS(exp, 'role')}</p>
                        </div>
                        <span className="text-sm font-medium text-zinc-500 mt-2 md:mt-0 uppercase tracking-widest">{getS(exp, 'dates')}</span>
                      </div>
                      <ul className="space-y-3 mt-6">
                        {achievements.map((ach, idx) => (
                          <li key={idx} className="flex gap-4 text-zinc-400 leading-relaxed">
                            <span className="text-zinc-600 mt-1.5 opacity-50">▹</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <Reveal key={skill.id} delay={i * 0.1} className="h-full">
                <div className="group relative overflow-hidden glass p-8 rounded-3xl hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] hover:border-blue-500/20 active:scale-95 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer-once pointer-events-none z-0" />
                  <h3 className="relative z-10 text-zinc-400 font-medium text-sm tracking-widest uppercase mb-6">{getS(skill, 'name')}</h3>
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {(getS(skill, 'tags') || '').split(',').map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section id="content" className="py-24 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.content.title}</h2>
              <p className="text-zinc-400 text-lg max-w-xl">
                {t.content.subtitle}
              </p>
            </div>
            <a 
              href={settings.instagramUrl || "https://instagram.com/almasitou.design"} 
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] whitespace-nowrap"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @almasitou.design
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Real Instagram Embeds */}
            {(instagramReels.length > 0 ? instagramReels : [
              { url: 'https://www.instagram.com/reel/DE-R6IttzVb/' },
              { url: 'https://www.instagram.com/reel/DFsH3JBNnN7/' },
              { url: 'https://www.instagram.com/p/DFc6H4_tJ8d/' }
            ]).map((reel, i) => {
              return (
                <div key={i} className={`w-full max-w-[350px] bg-white rounded-xl overflow-hidden shadow-2xl ${i === 2 ? 'hidden lg:block' : ''}`}>
                  <InstagramReel url={reel.url} />
                </div>
              );
            })}
          </div>
        </section>

        <section id="recommendations" className="py-24 border-t border-zinc-900">
          <h2 className="font-heading text-4xl font-bold tracking-tight mb-16">{t.recommendations.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {recommendations.map((rec, i) => (
              <div key={rec.id} className={`glass p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] hover:border-blue-500/20 active:scale-95 transition-all duration-500 ${i === 2 ? 'md:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                
                <p className="text-lg leading-relaxed text-zinc-300 italic mb-8 relative z-10 flex-grow">
                  {getS(rec, 'text')}
                </p>
                
                <div className="flex items-center gap-4 relative z-10 mt-auto">
                  <div className="min-w-0">
                    <div className="text-white font-bold font-heading text-base truncate">{rec.authorName}</div>
                    <div className="text-blue-500 font-medium text-sm truncate">{getS(rec, 'authorRole')}</div>
                    
                    {rec.linkedinUrl && (
                      <a href={rec.linkedinUrl} target="_blank" className="md:hidden mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 rounded-full text-[11px] font-medium text-zinc-300 hover:text-white transition-all duration-300 z-10 w-fit">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        {t.recommendations.viewLinkedin}
                      </a>
                    )}
                  </div>
                </div>
                
                {rec.linkedinUrl && (
                  <a href={rec.linkedinUrl} target="_blank" className="hidden md:flex absolute bottom-6 right-6 items-center gap-2 px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 rounded-full text-xs font-medium text-zinc-300 hover:text-white transition-all duration-300 z-10 group-hover:border-zinc-600">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    {t.recommendations.viewLinkedin}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="py-24 mt-24 border-t border-zinc-800 flex flex-col items-center text-center w-full px-4">
          <h2 className="font-heading text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] 2xl:text-[2.5vw] font-bold tracking-tighter mb-12 whitespace-nowrap">{t.contact.title}</h2>
          
          <SparklesButton 
            href="https://t.me/almasitou" 
            target="_blank"
            className="group relative inline-flex items-center justify-center px-6 py-4 md:px-12 md:py-6 w-full max-w-xs md:w-auto md:max-w-none mb-12 font-heading font-bold text-lg md:text-2xl text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
          >
            <span className="mr-2 md:mr-3 relative z-10">
              <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
              </svg>
            </span>
            <span className="relative z-10">{t.contact.telegram}</span>
          </SparklesButton>

          <a href={`mailto:${settings.email}`} className="text-xl md:text-2xl text-zinc-500 hover:text-white transition-colors underline decoration-zinc-800 hover:decoration-blue-500 underline-offset-8 mb-16">
            {t.contact.email} {settings.email}
          </a>
          
          <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-zinc-500">
            <a href={settings.instagramUrl || "https://instagram.com/almasitou.design"} target="_blank" className="hover:text-white transition-colors">Instagram</a>
            <a href={settings.linkedinUrl} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={settings.behanceUrl} target="_blank" className="hover:text-white transition-colors">Behance</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
