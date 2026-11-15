'use client';

import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {useReferenceViewport} from '@/components/ReferenceShared';
import {presentationExperience,getPresentationExperience,presentationSteps,presentationContacts as contacts} from '@/lib/presentation';
import {featuredProjectSlugs} from '@/lib/presentation-covers';
import {PresentationButton as Button,PresentationImage as Picture,PresentationModal as Modal,PresentationSocials,StaticDivider} from './PresentationUI';
import {ProjectCard} from './PresentationProjects';
import '@/app/presentation.css';
import '@/app/presentation-refresh.css';

const ids=['start','work','about','path','approach','contact'];
const labels={ru:['Начало','Проекты','О себе','Путь','Подход','Контакт'],en:['Start','Projects','About','Journey','Approach','Contact']};
const footerLabels={ru:['ПРИВЕТСТВИЕ','ПРОЕКТЫ','О СЕБЕ','ОПЫТ','ПОДХОД','КОНТАКТ'],en:['INTRODUCTION','PROJECTS','ABOUT','EXPERIENCE','APPROACH','CONTACT']};

function SlideFooter({index,lang,onNext}) {
 return <footer className="pd-slide-footer"><span>ALMAS QAJYMURATULY / PRODUCT DESIGN</span><span>{String(index+1).padStart(2,'0')} / 06 — {footerLabels[lang][index]}</span><button onClick={onNext} type="button">{index===5?(lang==='ru'?'К началу ↑':'Back to start ↑'):(lang==='ru'?'Далее →':'Next →')}</button></footer>;
}

function Intro({lang,go}) {
 const ru=lang==='ru';
 return <><div className="pd-intro-titles"><p>{ru?'Приветствую!':'Welcome!'}</p><h1><span className="pd-only-desktop">{ru?'Я Алмас':'I’m Almas'}</span><span className="pd-only-mobile">{ru?'Я Алмас.':'I’m Almas.'}</span></h1></div>
  <div className="pd-intro-position"><p>Product designer</p><p>{ru?'с 6+ годами опыта':'with 6+ years of experience'}</p><strong>{ru?'в B2B, B2C & Mobile':'in B2B, B2C & Mobile'}</strong><p className="pd-mobile-position">{ru?'6+ лет в B2B, B2C и Mobile':'6+ years in B2B, B2C & Mobile'}</p></div>
  <Picture className="pd-portrait" mobileSrc="/presentation-v2/portrait-mobile.png" src="/presentation-v2/portrait.png" alt={ru?'Алмас Кажымуратулы':'Almas Qajymuratuly'} priority sizes="(max-width:900px) 90vw, 48vw"/>
  <div className="pd-intro-socials"><PresentationSocials/></div>
  <Button className="pd-intro-cta" onClick={()=>go(1)}>{ru?'Смотреть проекты →':'View projects →'}</Button>
 </>;
}

function Work({lang,projects}) {
 const ru=lang==='ru';
 return <><div className="pd-mobile-section-heading"><p>{ru?'ИЗБРАННЫЕ ПРОЕКТЫ':'SELECTED PROJECTS'}</p><h2>{ru?'Работа в деталях.':'Work in detail.'}</h2></div>
  <Link className="pd-all-projects" href={`/${lang}/projects`}>{ru?'Все проекты (7) ↗':'All projects (7) ↗'}</Link>
  <div className="pd-project-grid">{featuredProjectSlugs.map((slug,index)=><ProjectCard key={slug} project={projects.find(project=>project.slug===slug)} lang={lang} mobilePreview={index<3} className={`pd-home-case pd-project-card--${index}`}/>)}</div>
 </>;
}

function About({lang}) {
 const ru=lang==='ru';
 const stats=ru?[['6+','лет опыта'],['10+','реализованных проектов'],['EU','международные клиенты'],['0 → 1','От идеи до запуска']]:[['6+','years of experience'],['10+','delivered projects'],['EU','international clients'],['0 → 1','From idea to launch']];
 return <><div className="pd-mobile-section-heading"><p>{ru?'О СЕБЕ':'ABOUT'}</p></div><h2 className="pd-about-title">{ru?'Создаю продукты,':'Creating products,'}<span>{ru?'которые решают реальные задачи.':'that solve real problems.'}</span></h2>
  <p className="pd-about-copy"><span className="pd-only-desktop">{ru?'Сочетаю логику, эстетику и понимание бизнеса, чтобы делать удобные, понятные и масштабируемые решения.':'Combining logic, aesthetics, and business understanding to create useful, clear, and scalable solutions.'}</span><span className="pd-only-mobile">{ru?'Сочетаю логику, эстетику и понимание бизнеса. Прохожу путь от исследования задачи до интерфейса, готового к разработке.':'Combining logic, aesthetics, and business understanding. From research to an interface ready for development.'}</span></p>
  <dl className="pd-about-stats">{stats.map(([value,label],index)=><div key={value} className={index===1?'pd-project-count':''}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
  <StaticDivider/><p className="pd-about-bottom-copy">{ru?'От исследования задачи до интерфейса, готового к разработке.':'From understanding the problem to an interface ready for development.'}</p>
 </>;
}

function MobileExperience({lang,onDetails}) {
 const [opened,setOpened]=useState(0),ru=lang==='ru';
 return <div className="pd-mobile-experience">{presentationExperience.map((entry,index)=>{const item=getPresentationExperience(index,lang),period=entry.rolePeriod.split(' / ')[1];return <details open={opened===index} key={entry.company}><summary onClick={event=>{event.preventDefault();setOpened(opened===index?-1:index);}}><span><strong>{item.company}</strong><span aria-hidden="true">{opened===index?'−':'+'}</span></span><small>{period}</small></summary><div className="pd-mobile-job-body"><p>{index===0&&ru?'Интерфейс AI-кассы и веб-продукты для ресторанов. Дизайн-система, сценарии распознавания и оплаты.':item.summary}</p><p>{index===0?<>{ru?'~1 мин → 10–15 сек':'~1 min → 10–15 sec'}<br/>{ru?'Время чекаута продукта RRS':'RRS product checkout time'}</>:item.contribution}</p><button type="button" onClick={()=>onDetails(item)}>{ru?'Подробнее об опыте +':'More about this role +'}</button></div></details>;})}</div>;
}

function Experience({lang,onDetails}) {
 const ru=lang==='ru';
 const [selected,setSelected]=useState(0),item=getPresentationExperience(selected,lang);
 return <><div className="pd-path-heading"><h2>{ru?'Мой путь.':'My journey.'}</h2><p>{ru?'ОПЫТ / 2019 — 2026':'EXPERIENCE / 2019 — 2026'}</p></div>
  <p className="pd-path-deck"><span className="pd-only-desktop">{ru?'От первых интерфейсов до международных продуктов.':'From first interfaces to international products.'}</span><span className="pd-only-mobile">{ru?'Компании, задачи и мой вклад.':'Companies, challenges, and my contribution.'}</span></p>
  <div className="pd-companies" role="tablist" aria-label={ru?'Компании':'Companies'} aria-orientation="vertical" onKeyDown={event=>{if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?6:(selected+(event.key==='ArrowDown'?1:6))%7;setSelected(next);event.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus();}}>{presentationExperience.map((entry,index)=>{const current=getPresentationExperience(index,lang),[role,period]=current.rolePeriod.split(' / ');return <button id={`pd-company-${index}`} type="button" role="tab" aria-selected={selected===index} aria-controls="pd-company-panel" tabIndex={selected===index?0:-1} key={entry.company} onClick={()=>setSelected(index)}><span><strong>{current.company}</strong><small>{period}</small></span><span>{role}</span></button>;})}</div>
  <MobileExperience lang={lang} onDetails={onDetails}/>
  <article className="pd-experience-details" role="tabpanel" id="pd-company-panel" aria-labelledby={`pd-company-${selected}`}><p className="pd-experience-kicker">{item.context}</p><h3>{item.company}</h3><p className="pd-experience-role">{item.rolePeriod}</p><p className="pd-experience-summary">{item.summary}</p><ul>{item.points.map(point=><li key={point}>— {point}</li>)}</ul><div className="pd-contribution"><span>{ru?'КЛЮЧЕВОЙ ВКЛАД':'SELECTED CONTRIBUTION'}</span><p>{item.contribution}</p></div><button className="pd-details-button" type="button" onClick={()=>onDetails(item)}>{ru?'Подробнее об опыте +':'More about this role +'}</button>{item.slug&&<Link className="pd-related-case" href={`/${lang}/project/${item.slug}`}>{ru?'Смотреть связанный кейс →':'View related case study →'}</Link>}</article>
 </>;
}

function Approach({lang}) {
 const ru=lang==='ru',column=ru?0:1;
 const mobileCopy=ru?['Изучаю контекст, пользователей и ограничения. Формулирую задачу и гипотезы.','Собираю пользовательские пути, структуру и прототип. Продумываю ошибки и состояния.','Проверяю сценарии на пользователях и дорабатываю решение по обратной связи.','Готовлю дизайн-систему и макеты. Обсуждаю реализацию с командой и проверяю результат.']:['Study the context, users, and constraints. Define the problem and hypotheses.','Build user journeys, structure, and prototypes. Plan for errors and states.','Test flows with users and refine the solution through feedback.','Prepare design systems and layouts. Discuss implementation with the team and review the result.'];
 return <><h2 className="pd-approach-title">{ru?<>Сначала — задача.<br/>Потом — интерфейс.</>:<>First, the problem.<br/>Then, the interface.</>}</h2><div className="pd-approach-intro"><p>{ru?'КАК Я РАБОТАЮ':'HOW I WORK'}</p><p>{ru?'Каждый этап отвечает на конкретный вопрос продукта.':'Each stage answers a concrete product question.'}</p></div>
  <ol className="pd-steps">{presentationSteps.map((step,index)=><li key={index}><span>{String(index+1).padStart(2,'0')}</span><h3>{step.title[column]}</h3><p className="pd-step-question">{step.question[column]}</p><p><span className="pd-only-desktop">{step.body[column]}</span><span className="pd-only-mobile">{mobileCopy[index]}</span></p><small>{step.tools[column]}</small></li>)}</ol>
 </>;
}

function Contact({lang,onRecommendations}) {
 const ru=lang==='ru';
 return <><div className="pd-mobile-section-heading"><p>{ru?'КОНТАКТ':'CONTACT'}</p></div><h2 className="pd-contact-title">{ru?<>Давайте создадим<br/>что-то полезное.</>:<>Let’s create<br/>something useful.</>}</h2>
  <div className="pd-contact-links"><Button href={contacts.telegram} target="_blank">{ru?'Написать в Telegram →':'Message on Telegram →'}</Button><a className="pd-contact-email pd-only-mobile" href={`mailto:${contacts.email}`}>{contacts.email} →</a><a className="pd-contact-whatsapp pd-only-mobile" href={contacts.whatsapp} target="_blank" rel="noreferrer">WhatsApp →</a></div>
  <div className="pd-contact-icons"><PresentationSocials contact/></div>
  <div className="pd-contact-copy"><p className="pd-only-desktop">{ru?<>Есть задача для продукта<br/>или предложение о работе?</>:<>A product challenge<br/>or a job opportunity?</>}</p><p className="pd-only-desktop">{ru?<>Расскажите о продукте, команде и том,<br/>что хотите изменить.</>:<>Tell me about the product, team,<br/>and what you want to change.</>}</p><p className="pd-only-mobile">{ru?'Есть задача для продукта или предложение о работе? Расскажите, что хотите изменить.':'A product challenge or a job opportunity? Tell me what you want to change.'}</p></div>
  <aside className="pd-recommendation"><button type="button" onClick={onRecommendations}>{ru?'РЕКОМЕНДАЦИИ — ПО ЗАПРОСУ':'RECOMMENDATIONS — ON REQUEST'}</button><p>{ru?'Карина Мухамедова':'Karina Mukhamedova'}</p><span>{ru?'Генеральный директор · ИНИИТ КБТУ':'CEO · INIIT KBTU'}</span></aside>
  <p className="pd-location">{ru?'Алматы, Казахстан / remote':'Almaty, Kazakhstan / remote'}</p>
 </>;
}

export default function PresentationHome({lang='ru',projects=[],recommendations=[]}) {
 const {width,height}=useReferenceViewport();
 const mobile=width<=900,scale=Math.min(width/1920,height/1080),offsetY=Math.max(0,(height-1080*scale)/2);
 const track=useRef(null),activeRef=useRef(0),initialized=useRef(false),lastWheel=useRef(0);
 const [active,setActive]=useState(0),[modal,setModal]=useState(null);
 const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function go(index){const node=track.current;if(!node)return;const i=Math.max(0,Math.min(5,index));activeRef.current=i;const target=document.getElementById('pd-'+ids[i]);if(mobile)target?.scrollIntoView({behavior:reduced()?'instant':'smooth',block:'start'});else node.scrollTo({left:i*node.clientWidth,behavior:reduced()?'instant':'smooth'});window.history.replaceState(null,'',`#${ids[i]}`);}
 useEffect(()=>{
  if(width!==window.innerWidth||height!==window.innerHeight||initialized.current)return;
  initialized.current=true;const hash=location.hash.slice(1).replace(/^pd-/,'');const index=ids.indexOf(hash==='experience'?'path':hash);if(index>0){activeRef.current=index;if(mobile)document.getElementById('pd-'+ids[index])?.scrollIntoView();else track.current.scrollLeft=index*track.current.clientWidth;}
 },[width,height,mobile]);
 useEffect(()=>{
  const node=track.current;if(!node||mobile)return;let sum=0,last=0;
  node.scrollLeft=activeRef.current*node.clientWidth;
  function wheel(event){if(event.ctrlKey)return;event.preventDefault();const now=performance.now();if(now-last>180)sum=0;last=now;if(now-lastWheel.current<700)return;sum+=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;if(Math.abs(sum)<30)return;const next=Math.max(0,Math.min(5,activeRef.current+Math.sign(sum)));lastWheel.current=now;sum=0;node.scrollTo({left:next*node.clientWidth,behavior:reduced()?'instant':'smooth'});}
  function resize(){node.scrollLeft=activeRef.current*node.clientWidth;}
  node.addEventListener('wheel',wheel,{passive:false});window.addEventListener('resize',resize);return()=>{node.removeEventListener('wheel',wheel);window.removeEventListener('resize',resize);};
 },[mobile]);
 function onScroll(){if(mobile)return;const index=Math.max(0,Math.min(5,Math.round(track.current.scrollLeft/track.current.clientWidth)));activeRef.current=index;setActive(index);}
 function keys(event){if(mobile||event.target.closest('a,button,input,[role="tablist"]'))return;let index;if(['ArrowRight','PageDown',' '].includes(event.key))index=activeRef.current+1;else if(['ArrowLeft','PageUp'].includes(event.key))index=activeRef.current-1;else if(event.key==='Home')index=0;else if(event.key==='End')index=5;else return;event.preventDefault();go(index);}
 const sections=[<Intro key="intro" lang={lang} go={go}/>,<Work key="work" lang={lang} projects={projects}/>,<About key="about" lang={lang}/>,<Experience key="path" lang={lang} onDetails={item=>setModal({type:'experience',item})}/>,<Approach key="approach" lang={lang}/>,<Contact key="contact" lang={lang} onRecommendations={()=>setModal({type:'recommendations'})}/>];
 return <div className={`presentation-deck pd-refreshed pd-lang-${lang}`} style={{'--pd-scale':scale,'--pd-offset-y':`${offsetY}px`}}>
  <a className="pd-skip" href="#pd-work" onClick={event=>{event.preventDefault();go(1);document.querySelector('#pd-work a')?.focus({preventScroll:true});}}>{lang==='ru'?'Перейти к проектам':'Skip to projects'}</a>
  <nav className="pd-nav" aria-label={lang==='ru'?'Разделы портфолио':'Portfolio sections'}>{labels[lang].map((label,index)=><a key={label} href={'#'+ids[index]} aria-current={active===index?'page':undefined} onClick={e=>{e.preventDefault();go(index);}}>{label}</a>)}</nav>
  <header className="pd-mobile-header"><div><a href="#start" onClick={e=>{e.preventDefault();go(0);}}>almas.</a><a href={contacts.telegram} target="_blank" rel="noreferrer">{lang==='ru'?'Написать →':'Say hello →'}</a></div><nav aria-label={lang==='ru'?'Основная навигация':'Main navigation'}>{[1,3,5].map(index=><a key={index} href={'#'+ids[index]} onClick={e=>{e.preventDefault();go(index);}}>{lang==='ru'?(index===3?'Мой путь':labels[lang][index]):labels[lang][index]}</a>)}</nav></header>
  <main className="pd-track" ref={track} onScroll={onScroll} onKeyDown={keys} tabIndex={0} aria-label={lang==='ru'?'Портфолио-презентация':'Portfolio presentation'}>{sections.map((content,index)=><section className={`pd-slide pd-${ids[index]}`} id={'pd-'+ids[index]} key={ids[index]} aria-label={labels[lang][index]}><div className="pd-canvas">{content}<SlideFooter index={index} lang={lang} onNext={()=>go(index===5?0:index+1)}/></div></section>)}</main>
  <Modal lang={lang} open={Boolean(modal)} onClose={()=>setModal(null)} title={modal?.type==='experience'?modal.item.company:(lang==='ru'?'Рекомендации':'Recommendations')}>
   {modal?.type==='experience'&&<div className="pd-modal-experience"><p className="pd-kicker">{modal.item.context}</p><p className="pd-modal-role">{modal.item.rolePeriod}</p><div>{modal.item.full.map((p,index)=><p key={index}>{p}</p>)}</div><a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">{lang==='ru'?'Полное резюме ↗':'Full résumé ↗'}</a></div>}
   {modal?.type==='recommendations'&&<div className="pd-reviews">{recommendations.map(review=><blockquote key={review.id}><p>{lang==='ru'&&review.textRu?review.textRu:review.text}</p><footer><strong>{review.authorName}</strong><span>{lang==='ru'&&review.authorRoleRu?review.authorRoleRu:review.authorRole}</span>{review.linkedinUrl&&<a href={review.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>}</footer></blockquote>)}<p>{lang==='ru'?'Дополнительные рекомендации — по запросу.':'Additional references available on request.'} <a href={contacts.telegram} target="_blank" rel="noreferrer">Telegram →</a></p></div>}
  </Modal>
 </div>;
}
