'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, MotionConfig, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ArrowLeft, Plus, Menu, X } from 'lucide-react';
import { localize } from '@/lib/portfolio';

export function PortfolioMotion({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="folio-progress" style={{ scaleX }} />
      {children}
    </MotionConfig>
  );
}

export function RevealBlock({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} initial={false}
      whileInView={{ y: reduced ? 0 : [14, 0] }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>
      {children}
    </motion.div>
  );
}

export function PortfolioNav({ lang, project = false }) {
  const [open, setOpen] = useState(false);
  const ru = lang === 'ru';
  const home = `/${lang}`;
  const links = [
    [`${home}#work`, ru ? 'Работы' : 'Work'],
    [`${home}#about`, ru ? 'Подход' : 'Approach'],
    [`${home}#experience`, ru ? 'Опыт' : 'Experience'],
  ];
  return (
    <header className="folio-header">
      <Link href={home} className="folio-brand" aria-label={ru ? 'Алмас — главная' : 'Almas — home'}>
        <span className="brand-mark" aria-hidden="true">a.</span>
        <span className="brand-name">{ru ? 'Алмас' : 'Almas'}<span className="brand-surname"> {ru ? 'Кажымуратулы' : 'Qajymuratuly'}</span></span>
      </Link>
      <nav className="folio-nav" aria-label={ru ? 'Главная навигация' : 'Main navigation'}>
        {project
          ? <Link href={`${home}#work`}><ArrowLeft size={14}/>{ru ? 'Все работы' : 'All work'}</Link>
          : links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        <a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">CV <ArrowUpRight size={12}/></a>
      </nav>
      <div className="folio-nav-end">
        <Link className="folio-language" href={project ? `/${ru ? 'en' : 'ru'}/project/${project}` : `/${ru ? 'en' : 'ru'}`}
          aria-label={ru ? 'Switch to English' : 'Переключить на русский'}>{ru ? 'EN' : 'RU'}</Link>
        <a className="folio-contact-link" href="https://t.me/almasitou" target="_blank" rel="noreferrer">{ru ? 'Написать' : 'Let’s talk'}<ArrowUpRight size={15}/></a>
        <button className="folio-menu" onClick={() => setOpen(!open)} aria-expanded={open}
          aria-controls="mobile-navigation" aria-label={ru ? 'Меню' : 'Menu'}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="folio-mobile-nav" aria-label={ru ? 'Мобильная навигация' : 'Mobile navigation'}>
          {links.map(([href,label]) => <Link onClick={() => setOpen(false)} href={href} key={href}>{label}<ArrowUpRight size={19}/></Link>)}
          <a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">{ru ? 'Резюме' : 'Résumé'}<ArrowUpRight size={19}/></a>
        </nav>
      )}
    </header>
  );
}

function Portrait({ lang }) {
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 100, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 24 });
  function tilt(event) {
    if (reduced || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    rotateX.set(((event.clientY - rect.top) / rect.height - .5) * -9);
    rotateY.set(((event.clientX - rect.left) / rect.width - .5) * 9);
  }
  return (
    <div className="hero-portrait-wrap">
      <motion.div className="hero-portrait" onPointerMove={tilt}
        onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}
        style={{ rotateX: springX, rotateY: springY, transformPerspective: 1100 }}>
        <Image src="/profile.jpg" alt={lang === 'ru' ? 'Алмас Кажымуратулы' : 'Almas Qajymuratuly'}
          width={824} height={1024} priority sizes="(max-width: 760px) 66vw, 340px" draggable={false}/>
      </motion.div>
      <svg className="portrait-flower" viewBox="0 0 100 100" aria-hidden="true">
        {[0,45,90,135].map(angle => <ellipse key={angle} cx="50" cy="50" rx="10" ry="47" transform={`rotate(${angle} 50 50)`}/>)}
      </svg>
    </div>
  );
}

export function Hero({ lang }) {
  const ru = lang === 'ru';
  return (
    <section className="folio-hero" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <RevealBlock><p className="hero-intro">Senior Product Designer<span>6+ {ru ? 'лет опыта' : 'years of experience'}</span></p></RevealBlock>
          <h1 id="hero-title">
            <RevealBlock>{ru ? 'Делаю сложное' : 'Making complexity'}</RevealBlock>
            <RevealBlock delay={.08}><em>{ru ? 'понятным.' : 'feel simple.'}</em></RevealBlock>
          </h1>
          <RevealBlock delay={.16}>
            <p className="hero-description">{ru
              ? 'Исследую, проектирую и собираю в систему цифровые продукты. От AI-касс и производственных платформ до сервисов, которыми пользуются каждый день.'
              : 'Researching, designing, and connecting digital products into coherent systems. From AI checkouts and manufacturing platforms to everyday services.'}</p>
            <a href="#work" className="hero-work-link">{ru ? 'Избранные работы' : 'Selected work'}<ArrowDown size={17}/></a>
          </RevealBlock>
        </div>
        <Portrait lang={lang}/>
      </div>
      <div className="hero-bottom">
        <span><span className="status-dot"/>{ru ? 'Открыт к новым проектам' : 'Open to new projects'}</span>
        <span>{ru ? 'Алматы · Работаю по всему миру' : 'Almaty · Working worldwide'}</span>
        <span>STRATEGY / UX / SYSTEMS</span>
      </div>
      <div className="hero-clients" aria-label={ru ? 'Опыт работы с компаниями' : 'Companies I have worked with'}>
        <span>{ru ? 'Работал с командами' : 'Worked with teams at'}</span>
        <div>{[['rrs.svg','RRS'],['qalan.svg','Qalan'],['aurora.svg','Avrora'],['europharma-white.png','Europharma']].map(([file,name]) => <Image key={file} src={`/uploads/companies/${file}`} alt={name} width={130} height={46} unoptimized/>)}</div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, lang, index = 0 }) {
  const headline = localize(project.headline || project.summary, lang);
  return (
    <RevealBlock className={`project-card ${index === 0 ? 'project-featured' : ''}`}>
      <Link href={`/${lang}/project/${project.slug}`} className="project-link">
        <div className={`project-art project-art-${project.slug}`}>
          <Image src={project.cover || '/profile.jpg'} unoptimized={!!project.cover && !project.cover.startsWith('/')}
            sizes={index === 0 ? '90vw' : '(max-width: 760px) 90vw, 52vw'}
            alt={`${project.name} — ${headline}`} loading="lazy" width={1200} height={800}/>
        </div>
        <div className="project-caption">
          <span className="project-number">{String(index+1).padStart(2,'0')}</span>
          <div className="project-caption-copy">
            <p className="project-category">{project.category}{/^\d/.test(project.year) && <span> · {project.year}</span>}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{localize(project.summary,lang)}</p>
          </div>
          <ArrowUpRight className="project-arrow" strokeWidth={1.4}/>
        </div>
      </Link>
    </RevealBlock>
  );
}

export function WorkSection({ projects, lang }) {
  const ru = lang === 'ru';
  return (
    <section className="folio-work folio-container" id="work">
      <div className="section-heading">
        <div><p className="eyebrow">01 / {ru ? 'ПРАКТИКА' : 'PRACTICE'}</p><h2>{ru ? 'Избранные работы' : 'Selected work'}<sup>{String(projects.length).padStart(2,'0')}</sup></h2></div>
        <p>{ru ? 'Продукты, системы\nи новые возможности.' : 'Products, systems,\nand new possibilities.'}</p>
      </div>
      <div className="projects-grid">{projects.map((project,index) => <ProjectCard key={project.slug} project={project} lang={lang} index={index}/>)}</div>
    </section>
  );
}

export function Approach({ lang }) {
  const ru = lang === 'ru';
  const items = ru ? [
    ['Разобраться в контексте', 'Начинаю с целей бизнеса, задач людей и ограничений. Формулирую проблему и критерии, по которым можно оценить решение.'],
    ['Найти логику', 'Связываю сценарии в систему и проверяю её в прототипах. Продумываю ошибки и состояния, которые часто остаются за кадром.'],
    ['Довести до деталей', 'Собираю компоненты и правила. Работаю с инженерами и проверяю, как дизайн ведёт себя в реальном продукте.'],
  ] : [
    ['Understand the context', 'Start with business goals, people’s tasks, and constraints. Define the problem and the criteria for assessing a solution.'],
    ['Find the logic', 'Connect flows into a system and explore it through prototypes, including the errors and states that often go unseen.'],
    ['Get the details right', 'Build components and rules. Collaborate with engineers and review how the design behaves in the actual product.'],
  ];
  return (
    <section className="folio-approach" id="about"><div className="folio-container">
      <p className="eyebrow">02 / {ru ? 'ПОДХОД' : 'APPROACH'}</p>
      <div className="approach-intro">
        <RevealBlock><h2>{ru ? <>Сначала понять.<br/><em>Потом — упростить.</em></> : <>Understand first.<br/><em>Then simplify.</em></>}</h2></RevealBlock>
        <p>{ru ? 'В хорошем интерфейсе видна простота. За ним — решения, связи и внимание к тому, как люди на самом деле пользуются продуктом.' : 'A good interface feels simple. Behind it are decisions, connections, and attention to how people actually use a product.'}</p>
      </div>
      <div className="approach-columns">{items.map(([title,text],i) => <RevealBlock key={title} delay={i*.06}><article><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article></RevealBlock>)}</div>
    </div></section>
  );
}

export function Experience({ experiences, lang }) {
  const ru = lang === 'ru';
  return (
    <section className="folio-container folio-experience" id="experience">
      <div className="section-heading"><div><p className="eyebrow">03 / {ru ? 'ОПЫТ' : 'EXPERIENCE'}</p><h2>{ru ? 'Разные команды.\nШирокий взгляд.' : 'Different teams.\nA wider perspective.'}</h2></div><a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer" className="folio-text-link">{ru ? 'Полное резюме' : 'Full résumé'}<ArrowUpRight size={16}/></a></div>
      <div className="experience-list">{experiences.map((item,i) => (
        <RevealBlock key={item.id || item.company}><details className="experience-item">
          <summary><span className="experience-number">{String(i+1).padStart(2,'0')}</span><h3>{ru && item.companyRu ? item.companyRu : item.company}</h3><span className="experience-role">{ru && item.roleRu ? item.roleRu : item.role}</span><span className="experience-date">{ru && item.datesRu ? item.datesRu : item.dates}</span><Plus size={17}/></summary>
          <ul>{(() => { try { return JSON.parse(ru && item.achievementsRu ? item.achievementsRu : item.achievements || '[]').map((a,j) => <li key={j}>{a}</li>); } catch { return <li>{ru ? 'Подробнее в резюме.' : 'More details in the résumé.'}</li>; } })()}</ul>
        </details></RevealBlock>
      ))}</div>
    </section>
  );
}

export function Recommendations({ items, lang }) {
  if (!items.length) return null;
  const ru = lang === 'ru';
  return (
    <section className="folio-container folio-recommendations">
      <p className="eyebrow">04 / {ru ? 'ЛЮДИ' : 'PEOPLE'}</p><h2>{ru ? 'С другой стороны команды' : 'From the other side of the team'}</h2>
      <div className="recommendations-grid">{items.slice(0,3).map(item => (
        <RevealBlock key={item.id}><article className="recommendation-card">
          <span className="quote-mark" aria-hidden="true">“</span><blockquote>{ru && item.textRu ? item.textRu : item.text}</blockquote>
          <footer><div><strong>{item.authorName}</strong><p>{ru && item.authorRoleRu ? item.authorRoleRu : item.authorRole}</p></div>{item.linkedinUrl && <a href={item.linkedinUrl} target="_blank" rel="noreferrer" aria-label={`${item.authorName} — LinkedIn`}><ArrowUpRight size={18}/></a>}</footer>
        </article></RevealBlock>
      ))}</div>
    </section>
  );
}

export function Contact({ lang, settings = {} }) {
  const ru = lang === 'ru';
  const email = settings.email || 'almasitou@gmail.com';
  return (
    <footer className="folio-footer" id="contact"><div className="folio-container">
      <div className="footer-top"><p className="eyebrow">{ru ? 'ЕСТЬ ЗАДАЧА?' : 'HAVE A CHALLENGE?'}</p><span><span className="status-dot"/>{ru ? 'Открыт к диалогу' : 'Open to a conversation'}</span></div>
      <a className="footer-title" href="https://t.me/almasitou" target="_blank" rel="noreferrer">{ru ? <>Давайте<br/><em>обсудим.</em></> : <>Let’s<br/><em>talk about it.</em></>}<ArrowUpRight strokeWidth={1}/></a>
      <a className="footer-email" href={`mailto:${email}`}>{email}</a>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ALMAS QAJYMURATULY</span><div><a href={settings.linkedinUrl || 'https://www.linkedin.com/in/almasitou'} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://t.me/almasitou" target="_blank" rel="noreferrer">Telegram ↗</a><a href="#top">{ru ? 'Наверх ↑' : 'Back to top ↑'}</a></div></div>
    </div></footer>
  );
}
