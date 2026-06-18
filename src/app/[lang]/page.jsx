import { prisma } from '@/lib/prisma';
import { dictionaries } from '@/i18n/dictionaries';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ params }) {
  const { lang } = await params;
  const t = dictionaries[lang] || dictionaries['en'];
  
  const settings = await prisma.settings.findFirst() || {};
  const experiences = await prisma.experience.findMany({ orderBy: { orderIndex: 'asc' } });
  const skills = await prisma.skillCategory.findMany({ orderBy: { orderIndex: 'asc' } });
  const projects = await prisma.project.findMany({ orderBy: { orderIndex: 'asc' } });
  const recommendations = await prisma.recommendation.findMany({ orderBy: { orderIndex: 'asc' } });

  // Translation helpers
  const getS = (obj, field) => obj[`${field}Ru`] && lang === 'ru' ? obj[`${field}Ru`] : obj[field];

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tighter">
            AQ<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
            <LanguageSwitcher currentLang={lang} />
            <a 
              href={settings.linkedinUrl} 
              target="_blank" 
              className="bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition-transform"
            >
              {t.nav.hireMe}
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        <section className="min-h-[80vh] flex flex-col justify-center items-start pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-zinc-700/50 text-xs font-medium text-zinc-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t.hero.available}
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6">
            <span className="text-gradient">{settings.title?.split(' ')[0]}</span><br/>
            {settings.title?.split(' ').slice(1).join(' ')}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
            {getS(settings, 'bio')}
          </p>
          
          <div className="flex gap-12 border-t border-zinc-800 pt-8 mt-auto w-full">
            <div>
              <div className="text-4xl font-heading font-bold text-white mb-1">6+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">{t.hero.yearsExp}</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-white mb-1">7</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">{t.hero.companies}</div>
            </div>
          </div>
        </section>

        <section id="work" className="py-24">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 tracking-tight">{t.work.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.length > 0 ? projects.map((proj, i) => (
              <Link 
                key={proj.id} 
                href={`/${lang}/project/${proj.id}`}
                className="group block relative rounded-3xl overflow-hidden glass glass-hover aspect-[4/3]"
              >
                {proj.coverImage ? (
                  <img 
                    src={proj.coverImage} 
                    referrerPolicy="no-referrer"
                    alt={getS(proj, 'title')} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                    <span className="text-zinc-600 font-medium tracking-widest uppercase">{t.work?.preview || 'Preview'}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">{getS(proj, 'title')}</h3>
                      <p className="text-zinc-400 text-sm">{proj.tags}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      ↗
                    </div>
                  </div>
                </div>
              </Link>
            )) : (
              <div className="col-span-2 py-20 text-center glass rounded-3xl">
                <p className="text-zinc-500">{t.work.empty}</p>
              </div>
            )}
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-heading text-4xl font-bold tracking-tight sticky top-32">
                {t.experience.title}
              </h2>
            </div>
            
            <div className="lg:col-span-2 space-y-12">
              {experiences.map((exp, i) => {
                const rawAchievements = getS(exp, 'achievements');
                let achievements = [];
                try {
                  achievements = JSON.parse(rawAchievements || '[]');
                } catch(e) {}

                return (
                  <div key={exp.id} className="group relative pl-8 md:pl-0">
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-800 md:hidden" />
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 md:hidden" />

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
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map(skill => (
              <div key={skill.id} className="glass p-8 rounded-3xl">
                <h3 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-6">{getS(skill, 'name')}</h3>
                <div className="flex flex-wrap gap-2">
                  {(getS(skill, 'tags') || '').split(',').map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="recommendations" className="py-24 border-t border-zinc-900">
          <h2 className="font-heading text-4xl font-bold tracking-tight mb-16">{t.recommendations?.title || "Recommendations"}</h2>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {recommendations.map((rec) => (
              <div key={rec.id} className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col h-full">
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
                  </div>
                </div>
                
                {rec.linkedinUrl && (
                  <a href={rec.linkedinUrl} target="_blank" className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors z-10">
                    ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="py-24 mt-24 border-t border-zinc-800 flex flex-col items-center text-center">
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter mb-12">{t.contact.title}</h2>
          
          <a 
            href="https://t.me/almasitou" 
            target="_blank"
            className="group relative inline-flex items-center justify-center px-12 py-6 mb-12 font-heading font-bold text-2xl text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
          >
            <span className="mr-3">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
              </svg>
            </span>
            {t.contact.telegram}
          </a>

          <a href={`mailto:${settings.email}`} className="text-xl md:text-2xl text-zinc-500 hover:text-white transition-colors underline decoration-zinc-800 hover:decoration-blue-500 underline-offset-8 mb-16">
            {t.contact.email} {settings.email}
          </a>
          
          <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-zinc-500">
            <a href={settings.linkedinUrl} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={settings.behanceUrl} target="_blank" className="hover:text-white transition-colors">Behance</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
