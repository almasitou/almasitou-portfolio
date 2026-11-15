'use client';

import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AnimatePresence,motion,MotionConfig,useReducedMotion,useScroll,useTransform} from 'framer-motion';
import {ArrowUpRight,ArrowRight,ArrowLeft,ArrowDown} from 'lucide-react';
import {caseStudies,localize} from '@/lib/portfolio';
import {homeConcepts} from '@/lib/home-concepts';

const logos = [
  ['/uploads/companies/rrs.svg','RRS'],
  ['/uploads/companies/qalan.svg','Qalan'],
  ['/uploads/companies/aurora.svg','Avrora'],
  ['/uploads/companies/europharma-white.png','Europharma'],
];
const copy = (lang,ru,en) => lang==='ru' ? ru : en;
const projectUrl = (lang,p) => `/${lang}/project/${p.slug}`;

function Logos({className=''}) {
  return <div className={`concept-logos ${className}`} aria-label="RRS, Qalan, Avrora, Europharma">{logos.map(([src,name])=><Image key={src} src={src} alt={name} width={130} height={46} unoptimized/>)}</div>;
}
function Header({lang,onWork}) {
  return <header className="concept-header"><a href="#top" className="concept-brand">ALMAS Q<span>✳</span></a><nav aria-label={copy(lang,'Навигация','Navigation')}><a href="#work" onClick={onWork}>{copy(lang,'Работы','Work')}</a><a href="#about">{copy(lang,'Обо мне','About')}</a><a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">CV<ArrowUpRight size={12}/></a></nav><a className="concept-talk" href="https://t.me/almasitou" target="_blank" rel="noreferrer">{copy(lang,'Написать','Let’s talk')}<ArrowUpRight size={16}/></a></header>;
}
function Switcher({variant,lang}) {
  return <nav className="concept-switcher" aria-label={copy(lang,'Варианты главной','Homepage concepts')}><Link href={`/${lang}/concepts`} className="switcher-back"><ArrowLeft size={14}/><span>{copy(lang,'Сравнить','Compare')}</span></Link><div>{homeConcepts.map(c=><Link key={c.id} href={`/${lang}/concepts/${c.id}`} aria-current={variant===c.id?'page':undefined} aria-label={`${c.id}. ${c.name}`}><span>{c.id.padStart(2,'0')}</span><small>{lang==='ru'?c.name:c.nameEn}</small></Link>)}</div></nav>;
}
function Reveal({children,className='',delay=0}) {
  const reduced=useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={{y:reduced?0:[22,0]}} viewport={{once:true}} transition={{duration:.8,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
function Grid({lang}) {
  return <section className="concept-work" id="work"><div className="concept-section-heading"><h2>{copy(lang,'Избранные работы','Selected work')}</h2><span>01—07 / 2022—2026</span></div><div className="concept-project-grid">{caseStudies.map((p,i)=><Reveal key={p.slug}><Link className="concept-project-card" href={projectUrl(lang,p)}><div className="concept-card-art"><Image src={p.cover} alt={p.name} width={1200} height={800} sizes="(max-width:760px) 94vw, 48vw"/></div><div className="concept-card-caption"><span>{String(i+1).padStart(2,'0')}</span><div><h3>{p.name}</h3><p>{p.category}</p></div><ArrowUpRight size={24} strokeWidth={1.4}/></div></Link></Reveal>)}</div></section>;
}
function End({lang}) {
  return <section className="concept-end" id="about"><div className="concept-about"><Image src="/profile.jpg" alt={copy(lang,'Алмас Кажымуратулы','Almas Qajymuratuly')} width={824} height={1024} sizes="160px"/><div><p className="concept-kicker">{copy(lang,'АЛМАС КАЖЫМУРАТУЛЫ','ALMAS QAJYMURATULY')} / SENIOR PRODUCT DESIGNER</p><h2>{copy(lang,<>От контекста —<br/>к целостному продукту.</>,<>From context<br/>to a coherent product.</>)}</h2><p>{copy(lang,'6+ лет проектирую интерфейсы для AI, B2B и повседневных сервисов. Соединяю исследования, продуктовую логику и визуальный язык. Работаю с командой от первых гипотез до деталей реализации.','6+ years designing interfaces for AI, B2B, and everyday services. Connecting research, product logic, and visual language, from early hypotheses to implementation details.')}</p><Logos/></div></div><footer className="concept-contact"><a href="https://t.me/almasitou" target="_blank" rel="noreferrer">{copy(lang,'Обсудим вашу задачу?','Let’s discuss your project.')}<ArrowUpRight strokeWidth={1}/></a><div><span>ALMATY / WORLDWIDE</span><a href="mailto:almasitou@gmail.com">almasitou@gmail.com</a><span>© 2026 ALMAS Q.</span></div></footer></section>;
}
function Graphite({lang}) {
  const reduced=useReducedMotion();
  return <><Header lang={lang}/><section className="graphite-hero"><div className="graphite-label"><span>SENIOR PRODUCT DESIGNER</span><span>{copy(lang,'АЛМАС КАЖЫМУРАТУЛЫ','ALMAS QAJYMURATULY')}</span></div><h1><Reveal>{copy(lang,'СЛОЖНОЕ.','COMPLEX.')}</Reveal><Reveal delay={.08}><span>{copy(lang,'ПРОСТО.','SIMPLE.')}</span></Reveal></h1><motion.div className="graphite-phone" animate={reduced?{}:{y:[0,-14,0],rotate:[8,5,8]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}><Image src="/uploads/skibo/main_page.png" alt="Skibo — мобильный интерфейс" width={1373} height={2799} priority sizes="300px"/></motion.div><div className="graphite-bottom"><p>{copy(lang,'Проектирую цифровые продукты, в которых сложная логика превращается в понятный опыт.','Designing digital products that turn complex logic into clear experiences.')}</p><a href="#work">{copy(lang,'Смотреть работы','Explore work')}<ArrowDown size={18}/></a><span>6+ {copy(lang,'ЛЕТ В ДИЗАЙНЕ','YEARS IN DESIGN')}</span></div><Logos/></section><Grid lang={lang}/><End lang={lang}/></>;
}
function Horizontal({lang}) {
  const rail=useRef(null);
  const lastWheel=useRef(0);
  const [current,setCurrent]=useState(0);
  const reduced=useReducedMotion();
  const total=caseStudies.length+2;
  function go(index) {
    const node=rail.current;
    const i=Math.max(0,Math.min(total-1,index));
    node?.scrollTo({left:i===0?0:node.children[i].offsetLeft,behavior:reduced?'instant':'smooth'});
  }
  function update() {
    const node=rail.current;
    if(!node)return;
    let closest=0, distance=Infinity;
    [...node.children].forEach((child,i)=>{const d=Math.abs(child.offsetLeft-node.scrollLeft);if(d<distance){distance=d;closest=i;}});
    setCurrent(closest);
  }
  useEffect(()=>{
    const node=rail.current;
    function wheel(event) {
      if(event.ctrlKey||event.shiftKey||Math.abs(event.deltaX)>Math.abs(event.deltaY)||Math.abs(event.deltaY)<2)return;
      event.preventDefault();
      if(Date.now()-lastWheel.current<600)return;
      lastWheel.current=Date.now();
      let nearest=0,distance=Infinity;
      [...node.children].forEach((child,i)=>{const d=Math.abs(child.offsetLeft-node.scrollLeft);if(d<distance){distance=d;nearest=i;}});
      const index=Math.max(0,Math.min(node.children.length-1,nearest+Math.sign(event.deltaY)));
      node.scrollTo({left:index===0?0:node.children[index].offsetLeft,behavior:reduced?'instant':'smooth'});
    }
    node.addEventListener('wheel',wheel,{passive:false});
    return()=>node.removeEventListener('wheel',wheel);
  },[reduced]);
  return <div className="horizontal-home"><Header lang={lang} onWork={e=>{e.preventDefault();go(1);}}/><div className="horizontal-rail" ref={rail} onScroll={update} tabIndex={0} role="region" aria-label={copy(lang,'Горизонтальная галерея портфолио','Horizontal portfolio gallery')} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();go(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();go(current-1);}}}>
    <section className="rail-panel rail-intro"><p className="concept-kicker">PRODUCT DESIGN / ALMAS Q.</p><h1>{copy(lang,<>Продукты.<br/><em>В движении.</em></>,<>Products.<br/><em>In motion.</em></>)}</h1><div className="rail-intro-bottom"><div><p>{copy(lang,'Создаю понятный опыт в сложных цифровых продуктах. Листайте — дальше мои работы.','Creating clarity in complex digital products. Scroll to explore my work.')}</p><button onClick={()=>go(1)}>{copy(lang,'В галерею','Enter gallery')}<ArrowRight size={21}/></button></div><Image src="/profile.jpg" alt="Алмас Кажымуратулы" width={824} height={1024} priority sizes="150px"/></div><Logos/></section>
    {caseStudies.map((p,i)=><section id={i===0?'work':undefined} className="rail-panel rail-project" key={p.slug}><div className="rail-project-top"><span>{String(i+1).padStart(2,'0')} / SELECTED WORK</span><span>{p.category}</span></div><Link href={projectUrl(lang,p)} className="rail-project-link"><div className="rail-art"><Image src={p.cover} alt={p.name} width={1400} height={900} sizes="88vw"/></div><div className="rail-caption"><h2>{p.name}</h2><p>{localize(p.summary,lang)}</p><ArrowUpRight strokeWidth={1.2}/></div></Link></section>)}
    <section className="rail-panel rail-finale" id="about"><p className="concept-kicker">{copy(lang,'АЛМАС КАЖЫМУРАТУЛЫ','ALMAS QAJYMURATULY')} / 6+ YEARS</p><h2>{copy(lang,<>Следующая<br/>история —<br/><em>вместе?</em></>,<>The next<br/>story.<br/><em>Together?</em></>)}</h2><a href="https://t.me/almasitou" target="_blank" rel="noreferrer">{copy(lang,'Обсудить проект','Let’s talk')}<ArrowUpRight/></a><a href="mailto:almasitou@gmail.com">almasitou@gmail.com</a><Logos/></section>
  </div><div className="rail-controls"><span aria-live="polite">{String(current+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span><span>{copy(lang,'Листайте горизонтально','Scroll horizontally')} →</span><div><button disabled={current===0} onClick={()=>go(current-1)} aria-label={copy(lang,'Предыдущая сцена','Previous scene')}><ArrowLeft size={19}/></button><button disabled={current===total-1} onClick={()=>go(current+1)} aria-label={copy(lang,'Следующая сцена','Next scene')}><ArrowRight size={19}/></button></div><div className="rail-progress"><i style={{width:`${(current+1)/total*100}%`}}/></div></div></div>;
}
function BluePoster({lang}) {
  const reduced=useReducedMotion();
  const {scrollY}=useScroll();
  const x=useTransform(scrollY,[0,650],[0,-75]);
  return <><div className="blue-intro"><Header lang={lang}/><section className="poster-hero"><div className="poster-micro"><span>ALMAS QAJYMURATULY</span><span>INDEPENDENT PRODUCT DESIGNER / KZ</span></div><motion.h1 style={{x:reduced?0:x}}>ALMAS<span>↗</span></motion.h1><div className="poster-lower"><h2>{copy(lang,<>Дизайн<br/>со смыслом.</>,<>Design<br/>with purpose.</>)}</h2><div><p>{copy(lang,'Превращаю задачи бизнеса и потребности людей в продуманные интерфейсы. AI, B2B и цифровые сервисы.','Turning business goals and human needs into thoughtful interfaces. AI, B2B, and digital services.')}</p><a href="#work">{copy(lang,'Избранные работы','Selected work')}<ArrowDown size={18}/></a></div><Image src="/profile.jpg" alt="Алмас Кажымуратулы" width={824} height={1024} priority sizes="160px"/></div><div className="poster-bottom"><span>6+ YEARS / STRATEGY / UX / UI</span><Logos/></div></section></div><Grid lang={lang}/><End lang={lang}/></>;
}
function LiveIndex({lang}) {
  const [selected,setSelected]=useState(0);
  const p=caseStudies[selected];
  return <><Header lang={lang}/><main className="index-main" id="work"><div className="index-sidebar"><p className="concept-kicker">SENIOR PRODUCT DESIGNER / 6+ YEARS</p><h1>{copy(lang,<>Дизайн<br/>в деталях.</>,<>Design.<br/>In detail.</>)}</h1><p>{copy(lang,'Алмас Кажымуратулы. Проектирую цифровые продукты — от сложных систем до повседневных сценариев.','Almas Qajymuratuly. Designing digital products, from complex systems to everyday experiences.')}</p><div className="index-preview" aria-hidden="true"><AnimatePresence mode="wait" initial={false}><motion.div key={p.slug} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.2}}><Image src={p.cover} alt="" width={800} height={600} sizes="35vw" priority={selected===0}/></motion.div></AnimatePresence></div><span className="index-preview-caption">{String(selected+1).padStart(2,'0')} / {p.name}</span><Logos/></div><div className="index-list"><div className="index-list-label"><span>{copy(lang,'ИЗБРАННЫЕ РАБОТЫ','SELECTED WORK')}</span><span>01—07</span></div>{caseStudies.map((project,i)=><Link key={project.slug} href={projectUrl(lang,project)} onMouseEnter={()=>setSelected(i)} onFocus={()=>setSelected(i)} className={selected===i?'is-previewed':''}><span className="index-number">{String(i+1).padStart(2,'0')}</span><div><h2>{project.name}</h2><p>{project.category}</p></div><ArrowUpRight size={24} strokeWidth={1.2}/><div className="index-mobile-image"><Image src={project.cover} alt={project.name} width={900} height={600} sizes="90vw"/></div></Link>)}</div></main><End lang={lang}/></>;
}
function CinemaScene({project,index,lang}) {
  const target=useRef(null);
  const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target,offset:['start end','end start']});
  const y=useTransform(scrollYProgress,[0,1],[-35,35]);
  return <section className="cinema-scene" ref={target}><motion.div className="cinema-scene-art" style={{y:reduced?0:y}}><Image src={project.cover} alt={project.name} fill sizes="100vw"/></motion.div><Link href={projectUrl(lang,project)} className="cinema-scene-link"><div className="cinema-scene-top"><span>{String(index+1).padStart(2,'0')} / SELECTED WORK</span><span>{project.category}</span></div><div className="cinema-scene-caption"><h2>{project.name}</h2><p>{localize(project.summary,lang)}</p><ArrowUpRight strokeWidth={1}/></div></Link></section>;
}
function Cinema({lang}) {
  const p=caseStudies[0];
  return <><div className="cinema-hero" id="work"><Image className="cinema-hero-art" src={p.cover} alt="RRS / Chaickout" fill priority sizes="100vw"/><Header lang={lang}/><div className="cinema-hero-copy"><p className="concept-kicker">ALMAS QAJYMURATULY / PRODUCT DESIGN</p><h1>{copy(lang,<>Опыт.<br/>В каждой<br/><em>детали.</em></>,<>Experience.<br/>In every<br/><em>detail.</em></>)}</h1><div><span>{copy(lang,'6+ лет создаю цифровые продукты.','6+ years shaping digital products.')}</span><Link href={projectUrl(lang,p)}>01 / RRS — {copy(lang,'Смотреть кейс','View case')}<ArrowUpRight size={19}/></Link></div></div></div>{caseStudies.slice(1).map((p,i)=><CinemaScene key={p.slug} project={p} index={i+1} lang={lang}/>)}<End lang={lang}/></>;
}
export default function ConceptHome({variant,lang,clean=false}) {
  const components={'1':Graphite,'2':Horizontal,'3':BluePoster,'4':LiveIndex,'5':Cinema};
  const Component=components[variant];
  const concept=homeConcepts.find(c=>c.id===variant);
  return <MotionConfig reducedMotion="user"><div id="top" className={`concept-view concept-${concept.key} ${clean?'concept-clean':''}`}><Component lang={lang}/>{!clean&&<Switcher variant={variant} lang={lang}/>}</div></MotionConfig>;
}
