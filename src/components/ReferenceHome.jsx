'use client';

import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight,Send} from 'lucide-react';
import {localize} from '@/lib/portfolio';
import {getReferenceStyle} from '@/lib/reference-content';
import {ReferenceShape,ReferenceMockup} from './ReferenceVisual';
import {ReferenceNav,ReferenceSocials,TelegramButton,useReferenceViewport} from './ReferenceShared';

const t=(lang,ru,en)=>lang==='ru'?ru:en;

function Intro({lang,settings}) {
  return <section className="rf-panel rf-intro" id="intro" aria-label={t(lang,'Знакомство','Introduction')}><div className="rf-panel-surface"><div className="rf-canvas rf-intro-canvas"><ReferenceShape kind="intro"/>
    <div className="rf-intro-identity"><Image src="/profile.jpg" width={824} height={1024} sizes="70px" alt={t(lang,'Алмас Кажымуратулы','Almas Qajymuratuly')} preload/><p>{t(lang,'Привет 👋','Hi 👋')}<br/>{t(lang,'я Алмас','I’m Almas')}</p></div>
    <h1 className="rf-intro-headline"><span>{t(lang,'Продуктовый дизайнер','Product designer')}<br/>{t(lang,'с 6+ годами опыта','with 6+ years of experience')}</span><strong>{t(lang,'в AI, B2B и B2C','in AI, B2B, and B2C')}</strong></h1>
    <p className="rf-intro-caption">{t(lang,<>Проектирую сложные интерфейсы<br/>для AI, E-commerce и B2B-сервисов<br/>на web, iOS и Android</>,<>Designing complex interfaces<br/>for AI, e-commerce, and B2B products<br/>across web, iOS, and Android</>)}</p>
    <ReferenceSocials className="rf-intro-socials" settings={settings}/>
  </div></div></section>;
}

function Project({project,lang,index}) {
  const style=getReferenceStyle(project);
  const headline=localize(style.shortTitle,lang);
  return <Link className={`rf-panel rf-project-card rf-project-card--${project.slug}`} id={index===0?'work':`work-${project.slug}`} href={`/${lang}/project/${project.slug}`} aria-label={`${project.name}: ${headline.replaceAll('\n',' ')}`}>
    <div className="rf-panel-surface"><div className="rf-canvas rf-project-canvas" style={{'--rf-project-color':style.color}}>
      <ReferenceShape kind={index%3===1?'round':'project'} color={style.color}/>
      <div className="rf-card-copy"><p className="rf-project-tags">{project.category}{/\d/.test(project.year)?` · ${project.year}`:''}</p><h2>{headline}</h2><p className="rf-project-description">{localize(style.tagline,lang)}</p></div>
      <div className="rf-card-art"><ReferenceMockup project={project} priority={index===0}/></div>
      <span className="rf-card-open" aria-hidden="true"><ArrowUpRight size={27}/></span>
      {(project.kind==='concept'||project.slug==='skibo') && <span className="rf-project-concept">{project.slug==='skibo'?t(lang,'До разработки','Pre-development'):t(lang,'Концепт','Concept')}</span>}
    </div></div>
  </Link>;
}

function About({lang}) {
  const features=[
    [t(lang,'UI и UX','UI and UX'),t(lang,'Проектирую связанные сценарии для клиента и команды: от мобильного приложения до CRM и внутренних систем.','Designing connected journeys for customers and teams, from mobile apps to CRM and internal systems.')],
    [t(lang,'Исследования','Research'),t(lang,'Изучаю процессы на месте, разговариваю с пользователями и проверяю гипотезы на интерактивных прототипах.','Observing real processes, talking to users, and testing hypotheses through interactive prototypes.')],
    [t(lang,'Системный подход','Systems thinking'),t(lang,'Собираю архитектуру, роли, статусы и состояния в единый интерфейс, который сохраняет контекст работы.','Connecting architecture, roles, statuses, and states in a coherent interface that preserves context.')],
    [t(lang,'Работа с командой','Collaboration'),t(lang,'Обсуждаю решения, учитываю ограничения реализации и готовлю понятную передачу дизайна в разработку.','Discussing decisions, accounting for implementation constraints, and making design clear for development.')],
  ];
  return <section className="rf-panel rf-about" id="about" aria-label={t(lang,'Обо мне','About me')}><div className="rf-panel-surface"><div className="rf-canvas rf-about-canvas"><ReferenceShape kind="intro"/>
    <h2>{t(lang,<>Работаю с исследованиями<br/><span>и сложными сценариями, связываю потребности людей с задачами продукта</span></>,<>Working with research<br/><span>and complex journeys, connecting human needs with product goals</span></>)}</h2>
    <div className="rf-about-features">{features.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <ul className="rf-about-tools" aria-label={t(lang,'Инструменты и подходы','Tools and methods')}>{['Figma','UX Research','Prototyping','Design Systems'].map(tool=><li key={tool}>{tool}</li>)}</ul>
  </div></div></section>;
}

function Contact({lang,settings}) {
  return <section className="rf-panel rf-contact" id="contact" aria-label={t(lang,'Контакты','Contact')}><div className="rf-panel-surface"><div className="rf-canvas rf-contact-canvas"><ReferenceShape kind="round" color="#efc98b"/>
    <h2>{t(lang,<>Открыт к интересным<br/>задачам и командам.<br/><span>Давайте познакомимся</span></>,<>Open to interesting<br/>projects and teams.<br/><span>Let’s get acquainted</span></>)}</h2>
    <div className="rf-contact-actions"><TelegramButton>{t(lang,'Написать в Telegram','Message on Telegram')}</TelegramButton><ReferenceSocials settings={settings}/></div>
    <Send className="rf-contact-plane" strokeWidth={.8} aria-hidden="true"/>
    <span className="rf-contact-handle" aria-hidden="true">@almasitou</span>
    <a className="rf-contact-email" href={`mailto:${settings.email || 'almasitou@gmail.com'}`}>{settings.email || 'almasitou@gmail.com'}</a>
  </div></div></section>;
}

export default function ReferenceHome({lang='ru',projects,settings={}}) {
  const viewport=useRef(null);
  const restored=useRef(false);
  const progress=useRef(0);
  const [zone,setZone]=useState(0);
  const {width,height,scale,offsetY,mobile}=useReferenceViewport();

  function goTo(id) {
    const node=viewport.current;
    const section=document.getElementById(id);
    if(!node||!section)return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(mobile)section.scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'});
    else node.scrollTo({left:Math.max(0,section.offsetLeft-80*scale),behavior:reduced?'instant':'smooth'});
  }

  useEffect(()=>{
    const node=viewport.current;
    if(!node||mobile)return;
    function wheel(event) {
      if(event.ctrlKey)return;
      const delta=Math.abs(event.deltaY)>=Math.abs(event.deltaX)?event.deltaY:event.deltaX;
      if(!delta)return;
      event.preventDefault();
      node.scrollLeft+=delta;
    }
    node.addEventListener('wheel',wheel,{passive:false});
    return()=>node.removeEventListener('wheel',wheel);
  },[mobile]);

  useEffect(()=>{
    const node=viewport.current;
    // Wait for the actual viewport rather than restoring against the server canvas.
    if(!node||width!==window.innerWidth||height!==window.innerHeight)return;
    const max=node.scrollWidth-node.clientWidth;
    if(!restored.current){
      restored.current=true;
      const id=window.location.hash.slice(1);
      let destination=0;
      if(id==='work'||id==='about'||id==='contact'){
        const section=document.getElementById(id);
        if(section){if(mobile)section.scrollIntoView({block:'start'});else destination=Math.max(0,section.offsetLeft-80*scale);}
      }else if(!mobile){
        try{const saved=Number(sessionStorage.getItem(`rf-position-${lang}`));if(Number.isFinite(saved))destination=Math.max(0,Math.min(1,saved))*max;}catch{/* Browsing still works without session storage. */}
      }
      if(!mobile){progress.current=max>0?destination/max:0;node.scrollLeft=destination;}
    }else if(!mobile)node.scrollLeft=progress.current*Math.max(0,max);
  },[width,height,mobile,scale,lang]);

  function onScroll() {
    const node=viewport.current;
    if(!node||mobile)return;
    const max=node.scrollWidth-node.clientWidth;
    progress.current=max>0?Math.max(0,Math.min(1,node.scrollLeft/max)):0;
    setZone(Math.min(2,Math.floor(progress.current*3)));
    try{sessionStorage.setItem(`rf-position-${lang}`,String(progress.current));}catch{/* Optional navigation memory. */}
  }

  function onKeyDown(event) {
    if(mobile||event.target.closest('a,button'))return;
    const node=viewport.current;
    if(!node)return;
    let destination;
    if(event.key==='ArrowRight'||event.key==='PageDown')destination=node.scrollLeft+972*scale;
    else if(event.key==='ArrowLeft'||event.key==='PageUp')destination=node.scrollLeft-972*scale;
    else if(event.key==='Home')destination=0;
    else if(event.key==='End')destination=node.scrollWidth;
    else return;
    event.preventDefault();node.scrollTo({left:destination,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }

  return <div className="rf-home" style={{'--rf-scale':scale,'--rf-offset-y':`${offsetY}px`,'--rf-mobile-scale':Math.max(0,(width-16)/960)}}>
    <a className="rf-skip" href="#work" onClick={e=>{e.preventDefault();goTo('work');document.getElementById('work')?.focus({preventScroll:true});}}>{t(lang,'Перейти к проектам','Skip to projects')}</a>
    <ReferenceNav lang={lang} onNavigate={goTo}/>
    <main ref={viewport} className="rf-viewport" onScroll={onScroll} onKeyDown={onKeyDown} tabIndex={0} aria-label={t(lang,'Портфолио: знакомство, проекты и контакты','Portfolio: introduction, projects, and contact')}>
      <div className="rf-track"><Intro lang={lang} settings={settings}/>{projects.map((project,index)=><Project key={project.slug} project={project} lang={lang} index={index}/>)}<About lang={lang}/><Contact lang={lang} settings={settings}/></div>
    </main>
    <div className="rf-pagination" role="status" aria-label={t(lang,`Часть ${zone+1} из 3`,`Part ${zone+1} of 3`)}>{[0,1,2].map(index=><span key={index} className={zone===index?'is-active':''} aria-hidden="true"/>)}</div>
  </div>;
}
