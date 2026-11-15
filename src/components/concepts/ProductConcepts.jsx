'use client';

import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AnimatePresence,MotionConfig,motion,useReducedMotion} from 'framer-motion';
import {ArrowUpRight,ArrowDown,ArrowLeft,ArrowRight,Mail} from 'lucide-react';
import {localize} from '@/lib/portfolio';
import imageSizes from '@/lib/portfolio-images.json';
import {productConcepts,findProductConcept,selectedProjects,projectPresentation} from '@/lib/product-concepts';

const text = (lang,ru,en) => lang === 'ru' ? ru : en;
const url = (lang,p) => `/${lang}/project/${p.slug}`;
const about = (lang) => text(lang,'6+ лет проектирую цифровые сервисы: AI-кассы, мобильные приложения и внутренние B2B-системы. От исследования задачи до деталей интерфейса.','6+ years designing AI checkout, mobile services, and internal B2B systems. From understanding the problem to the details of the interface.');
const name = (lang) => text(lang,'Алмас Кажымуратулы','Almas Qajymuratuly');
const orderedProjects = slugs => slugs.map(slug=>selectedProjects.find(p=>p.slug===slug));
const personalProjects = orderedProjects(['skibo','rrs','avrora','idol','kaspi','bao','taza']);
const journalProjects = orderedProjects(['avrora','rrs','skibo','idol','kaspi','bao','taza']);
const chapterProjects = orderedProjects(['skibo','avrora','rrs','idol','kaspi','bao','taza']);

function Portrait({className=''}) {
  return <Image className={`pc-portrait ${className}`} src="/profile.jpg" alt="Алмас Кажымуратулы" width={824} height={1024} priority sizes="160px"/>;
}
function Logos() {
  return <div className="pc-logos" aria-label="RRS, Qalan, Avrora, Europharma">
    <Image src="/uploads/companies/rrs.svg" alt="RRS" width={61} height={61} unoptimized/>
    <Image src="/uploads/companies/qalan.svg" alt="Qalan" width={130} height={131} unoptimized/>
    <Image src="/uploads/companies/aurora.svg" alt="Avrora" width={48} height={48} unoptimized/>
    <Image src="/uploads/companies/europharma-white.png" alt="Europharma" width={180} height={42} unoptimized/>
  </div>;
}
function Brand({project}) {
  const presentation = projectPresentation[project.slug];
  return <span className="pc-case-brand">{presentation.logo ? <Image src={presentation.logo} alt={project.name} width={46} height={32} unoptimized/> : <span>{project.name}</span>}</span>;
}
function Header({lang}) {
  return <header className="pc-header">
    <a className="pc-identity" href="#top"><span className="pc-monogram" aria-hidden="true">a</span><span>{name(lang)}<small>Product designer</small></span></a>
    <nav aria-label={text(lang,'Навигация','Navigation')}><a href="#work">{text(lang,'Работы','Work')}</a><a href="#about">{text(lang,'Обо мне','About')}</a><a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">CV <ArrowUpRight size={12}/></a></nav>
    <a className="pc-header-contact" href="https://t.me/almasitou" target="_blank" rel="noreferrer">{text(lang,'Связаться','Get in touch')}<ArrowUpRight size={15}/></a>
  </header>;
}
function Switcher({variant,lang}) {
  return <nav className="pc-switcher" aria-label={text(lang,'Новые варианты главной','New homepage concepts')}>
    <Link href={`/${lang}/concepts`}><ArrowLeft size={13}/><span>{text(lang,'Все варианты','All concepts')}</span></Link>
    <div>{productConcepts.map(c=><Link key={c.id} href={`/${lang}/concepts/${c.id}`} aria-current={variant===c.id?'page':undefined} aria-label={`${c.number}. ${c.name}`}>{c.number}</Link>)}</div>
  </nav>;
}
function Art({project,photo=false,priority=false}) {
  const presentation=projectPresentation[project.slug];
  const mobile=['skibo','kaspi','bao'].includes(project.slug);
  const shots=mobile ? presentation.images : [presentation.images[0]];
  if(photo && project.slug==='rrs')return <div className="pc-art pc-art-photo"><Image src={project.cover} alt="AI-касса RRS в ресторане" width={1600} height={1000} priority={priority} sizes="(max-width:760px) 94vw, 60vw"/></div>;
  return <div className={`pc-art ${mobile?'pc-art-phones':'pc-art-desktop'} pc-art-${project.slug}`}>
    {shots.map((src,i)=><Image key={src} src={src} alt={`${project.name}: ${localize(presentation.short,'ru')}${mobile ? `, экран ${i+1}`:''}`} width={imageSizes[src]?.width || (mobile?1373:1800)} height={imageSizes[src]?.height || (mobile?2799:1100)} priority={priority && i===0} sizes={mobile?'(max-width:760px) 36vw, 20vw':'(max-width:760px) 94vw, 60vw'}/>)}
  </div>;
}
function CaseCard({project,lang,index=0,compact=false}) {
  const presentation=projectPresentation[project.slug];
  const reduced=useReducedMotion();
  return <motion.article className={`pc-card ${compact?'pc-card-compact':''}`} whileHover={reduced?{}:{y:-5}} transition={{duration:.3}}>
    <Link href={url(lang,project)} aria-label={`${project.name}: ${localize(presentation.title,lang)}`}>
      <Art project={project} photo priority={index<2}/>
      <div className="pc-card-meta"><Brand project={project}/><span>{project.platform}</span><ArrowUpRight size={19}/></div>
      <h3>{localize(presentation.title,lang)}</h3>
      <p>{localize(presentation.scope,lang)}</p>
      <span className="pc-project-status">{localize(presentation.status,lang)}</span>
    </Link>
  </motion.article>;
}
function Grid({lang,projects=selectedProjects,columns=2}) {
  return <section id="work" className={`pc-work pc-work-${columns}`}><div className="pc-section-label"><h2>{text(lang,'Избранные проекты','Selected projects')}</h2><span>2022 — 2026 / {String(projects.length).padStart(2,'0')}</span></div>
    <div className="pc-case-grid">{projects.map((p,i)=><CaseCard key={p.slug} project={p} lang={lang} index={i} compact={columns===3}/>)}</div>
  </section>;
}
function About({lang}) {
  return <section id="about" className="pc-about"><div className="pc-about-heading"><Portrait/><div><span className="pc-eyebrow">{text(lang,'ЗА ЭТИМИ ПРОЕКТАМИ','BEHIND THE PROJECTS')}</span><h2>{name(lang)}</h2><p>Senior Product Designer · Almaty</p></div></div>
    <div className="pc-about-body"><p>{about(lang)}</p><div className="pc-about-points"><div><span>01</span><h3>{text(lang,'Разобраться в задаче','Understand the problem')}</h3><p>{text(lang,'Исследовать контекст, ограничения и реальные сценарии людей.','Explore context, constraints, and real user scenarios.')}</p></div><div><span>02</span><h3>{text(lang,'Связать систему','Connect the system')}</h3><p>{text(lang,'Собрать архитектуру, путь пользователя и состояния интерфейса.','Connect architecture, user journeys, and interface states.')}</p></div><div><span>03</span><h3>{text(lang,'Довести до деталей','Refine the details')}</h3><p>{text(lang,'Проверить прототип и подготовить согласованный UI для команды.','Test the prototype and prepare consistent UI for the team.')}</p></div></div><Logos/></div>
  </section>;
}
function Footer({lang}) {
  return <footer className="pc-footer"><span>{text(lang,'ЕСТЬ ЗАДАЧА ДЛЯ ОБСУЖДЕНИЯ?','HAVE SOMETHING IN MIND?')}</span><a className="pc-footer-title" href="https://t.me/almasitou" target="_blank" rel="noreferrer">{text(lang,'Давайте познакомимся.','Let’s get acquainted.')}<ArrowUpRight/></a><div><a href="mailto:almasitou@gmail.com"><Mail size={14}/>almasitou@gmail.com</a><a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">{text(lang,'Резюме','Résumé')}<ArrowUpRight size={14}/></a><small>© 2026 · {name(lang)}</small></div></footer>;
}
function ProductFolio({lang}) {
  return <><Header lang={lang}/><main><section className="pc-folio-intro"><div><div className="pc-intro-person"><Portrait/><span>Senior Product Designer<br/><small>Almaty, Kazakhstan</small></span></div><h1>{text(lang,<>Алмас Кажымуратулы.<br/><span>Продуктовый дизайнер.</span></>,<>Almas Qajymuratuly.<br/><span>Product designer.</span></>)}</h1></div><div className="pc-folio-summary"><p>{about(lang)}</p><Logos/></div></section><Grid lang={lang}/><About lang={lang}/></main><Footer lang={lang}/></>;
}
function Personal({lang}) {
  const reduced=useReducedMotion();
  return <><Header lang={lang}/><main><section className="pc-personal-intro"><span className="pc-eyebrow">SENIOR PRODUCT DESIGNER · 6+ YEARS</span><h1>{text(lang,'Привет, я Алмас','Hi, I’m Almas')} <motion.span className="pc-inline-photo" whileHover={reduced?{}:{rotate:-8,scale:1.12}}><Portrait/></motion.span><br/>{text(lang,<>Делаю интерфейсы <span>понятнее.</span></>,<>Making interfaces <span>clearer.</span></>)}</h1><p>{text(lang,'Работаю с AI, мобильными сервисами и сложными B2B-продуктами. Люблю находить простую логику там, где её трудно увидеть.','Working with AI, mobile services, and complex B2B products. I enjoy finding clear logic where it’s hard to see.')}</p><div className="pc-personal-trust"><Logos/><span>{text(lang,'Команды, с которыми работал','Teams I’ve worked with')}</span></div><a className="pc-personal-scroll" href="#work"><ArrowDown size={16}/>{text(lang,'Ниже — мои работы','My work, just below')}</a></section><Grid lang={lang} projects={personalProjects} columns={3}/><About lang={lang}/></main><Footer lang={lang}/></>;
}
function Journal({lang}) {
  return <><Header lang={lang}/><main className="pc-journal-layout"><aside className="pc-journal-profile"><Portrait/><p className="pc-eyebrow">SENIOR PRODUCT DESIGNER</p><h1>{name(lang)}</h1><p>{about(lang)}</p><Logos/><a className="pc-text-link" href="https://t.me/almasitou" target="_blank" rel="noreferrer">{text(lang,'Давайте знакомиться','Let’s get acquainted')}<ArrowUpRight size={17}/></a><a className="pc-journal-about" href="#about">{text(lang,'Подробнее обо мне','More about me')}<ArrowDown size={14}/></a></aside><section className="pc-journal-stories" id="work"><div className="pc-section-label"><h2>{text(lang,'Истории продуктов','Product stories')}</h2><span>01 — 07</span></div>{journalProjects.map((p,i)=>{const presentation=projectPresentation[p.slug];return <article className="pc-journal-story" key={p.slug}><div className="pc-journal-story-meta"><span>{String(i+1).padStart(2,'0')} / {p.category}</span><Brand project={p}/></div><Link href={url(lang,p)}><h2>{localize(presentation.title,lang)}<ArrowUpRight size={24}/></h2><p className="pc-story-summary">{localize(p.summary,lang)}</p><Art project={p} photo priority={i===0}/></Link><div className="pc-journal-facts"><div><span>{text(lang,'МОЯ РОЛЬ','MY ROLE')}</span><p>{p.role}</p></div><div><span>{text(lang,'ФОКУС РАБОТЫ','FOCUS')}</span><p>{localize(presentation.scope,lang)}</p></div></div><p className="pc-journal-decision">{localize(p.decisions[0].text,lang)}</p><div className="pc-story-bottom"><span className="pc-project-status">{localize(presentation.status,lang)}</span><Link className="pc-text-link" href={url(lang,p)}>{text(lang,'История проекта','Read the story')}<ArrowUpRight size={15}/></Link></div></article>;})}</section></main><About lang={lang}/><Footer lang={lang}/></>;
}
function Workbench({lang}) {
  const [selected,setSelected]=useState(0);
  const p=selectedProjects[selected];
  const presentation=projectPresentation[p.slug];
  const reduced=useReducedMotion();
  function onTabKey(event,index) {
    let next=index;
    if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(index+1)%selectedProjects.length;
    else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(index+selectedProjects.length-1)%selectedProjects.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=selectedProjects.length-1;
    else return;
    event.preventDefault();setSelected(next);document.getElementById(`pc-tab-${next}`)?.focus();
  }
  return <><Header lang={lang}/><main><section className="pc-bench-intro"><div><span className="pc-eyebrow">{name(lang)} / SENIOR PRODUCT DESIGNER</span><h1>{text(lang,<>Продуктовый дизайн.<br/>Задачи и решения.</>,<>Product design.<br/>Problems and decisions.</>)}</h1></div><div><p>{about(lang)}</p><Logos/></div></section><section className="pc-workbench" id="work"><div className="pc-bench-sidebar"><div className="pc-bench-label"><span>{text(lang,'ПРОЕКТЫ','PROJECTS')}</span><span>07</span></div><div className="pc-bench-tabs" role="tablist" aria-label={text(lang,'Выберите проект','Choose a project')}>{selectedProjects.map((project,i)=><button key={project.slug} id={`pc-tab-${i}`} role="tab" aria-selected={selected===i} aria-controls="pc-project-panel" tabIndex={selected===i?0:-1} onClick={()=>setSelected(i)} onKeyDown={e=>onTabKey(e,i)}><span>{String(i+1).padStart(2,'0')}</span><div><strong>{project.name}</strong><small>{localize(projectPresentation[project.slug].short,lang)}</small></div><ArrowRight size={14}/></button>)}</div><p className="pc-bench-hint">{text(lang,'Выберите работу, чтобы посмотреть задачу и решения.','Choose a project to explore the problem and decisions.')}</p></div><div id="pc-project-panel" className="pc-bench-panel" role="tabpanel" aria-labelledby={`pc-tab-${selected}`} tabIndex={0}><AnimatePresence mode="wait" initial={false}><motion.div key={p.slug} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.18}}><div className="pc-bench-panel-top"><div><Brand project={p}/><h2>{localize(presentation.title,lang)}</h2></div><Link className="pc-text-link" href={url(lang,p)}>{text(lang,'Полный кейс','Full case')}<ArrowUpRight size={16}/></Link></div><div className="pc-bench-context"><span>{p.role}</span><span>{p.platform}</span><span>{localize(presentation.status,lang)}</span></div><Art project={p} priority={selected===0}/><div className="pc-bench-decisions">{p.decisions.map((d,i)=><div key={i}><span>0{i+1}</span><h3>{localize(d.title,lang)}</h3><p>{localize(d.text,lang)}</p></div>)}</div></motion.div></AnimatePresence></div></section><About lang={lang}/></main><Footer lang={lang}/></>;
}
function Chapters({lang}) {
  return <><Header lang={lang}/><main><section className="pc-chapters-intro"><div><span className="pc-eyebrow">SENIOR PRODUCT DESIGNER / 6+ YEARS</span><h1>{text(lang,<>От задачи бизнеса —<br/>к сценарию человека.</>,<>From a business goal<br/>to a human experience.</>)}</h1></div><div className="pc-chapters-person"><Portrait/><p>{name(lang)}<span>{text(lang,'AI · Mobile · B2B-системы','AI · Mobile · B2B systems')}</span></p></div></section><section id="work" className="pc-chapter-list">{chapterProjects.map((p,i)=>{const presentation=projectPresentation[p.slug];return <article className="pc-chapter" key={p.slug}><div className="pc-chapter-copy"><div className="pc-chapter-topline"><span>0{i+1}</span><Brand project={p}/><span>{p.platform}</span></div><h2>{localize(presentation.title,lang)}</h2><p>{localize(p.summary,lang)}</p><div className="pc-chapter-role"><span>{p.role}</span><span>{localize(presentation.status,lang)}</span></div><Link className="pc-text-link" href={url(lang,p)}>{text(lang,'Задача, решения и интерфейс','Problem, decisions, and interface')}<ArrowUpRight size={17}/></Link></div><Link href={url(lang,p)} className="pc-chapter-visual" aria-label={`${p.name}: ${localize(presentation.title,lang)}`}><Art project={p} priority={i===0}/></Link></article>;})}</section><About lang={lang}/></main><Footer lang={lang}/></>;
}
const variants={folio:ProductFolio,personal:Personal,journal:Journal,workbench:Workbench,chapters:Chapters};
export default function ProductConcepts({variant,lang,clean=false}) {
  const concept=findProductConcept(variant);
  const Home=variants[concept.key];
  return <MotionConfig reducedMotion="user"><div className={`pc-page pc-${concept.key} ${clean?'pc-clean':''}`} id="top"><a className="pc-skip" href="#work">{text(lang,'Перейти к работам','Skip to work')}</a><Home lang={lang}/>{!clean && <Switcher variant={variant} lang={lang}/>}</div></MotionConfig>;
}
