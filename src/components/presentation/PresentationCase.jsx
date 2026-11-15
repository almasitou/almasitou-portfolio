'use client';

import {useMemo} from 'react';
import CaseTopbar from '@/components/odunsi/CaseTopbar';
import {getPresentationCase} from '@/lib/presentation';
import {localize} from '@/lib/portfolio';
import {CaseImage} from '@/components/case-studies/EditorialCase';
import CaseStoreLinks from '@/components/odunsi/CaseStoreLinks';
import usePresentationDeck from './usePresentationDeck';
import '@/app/presentation.css';
import '@/app/presentation-case.css';
import '@/app/presentation-refresh.css';

function createModel(project,lang) {
 const ru=lang==='ru',copy=getPresentationCase(project,lang);
 const solutions=[...copy.solutions,...project.decisions.slice(copy.solutions.length).map(item=>({title:localize(item.title,lang),text:localize(item.text,lang),image:item.image}))];
 const slides=[{id:'top',type:'cover',label:ru?'О проекте':'Overview'},{id:'case-context',type:'context',label:ru?'Задача':'Challenge'}];
 if(project.research)slides.push({id:'research',type:'research',label:ru?'Исследование':'Research'});
 solutions.forEach((solution,index)=>slides.push({id:index===0?'decisions':`decision-${index+1}`,type:'solution',label:ru?`Решение ${index+1}`:`Decision ${index+1}`,solution,number:index+1}));
 slides.push({id:'outcome',type:'outcome',label:ru?'Результат':'Outcome'});
 slides.push({id:'more',type:'more',label:ru?'Другие проекты':'More projects'});
 return {copy,slides};
}

function SlideContent({slide,model,project,lang,projectFooter,storeLinks}) {
 const ru=lang==='ru',{copy}=model;
 if(slide.type==='cover')return (
  <header className="pc-cover-layout">
   <div className={`pc-cover-art ${project.slug==='skibo'?'pc-cover-art--phones':''} ${copy.images.length===1?'pc-cover-art--single':''}`}>
    {copy.images.map((src,index)=>(
     <div key={src} className={`pc-cover-art-item pc-cover-art-item--${index}`}>
      <CaseImage src={src} alt={`${copy.name} — ${ru?'интерфейс':'interface'} ${index+1}`} lang={lang} eager sizes="(max-width:900px) 82vw, 50vw"/>
     </div>
    ))}
   </div>
   <div className="od-case-hero-copy">
    <div className="pc-cover-copy">
     <p className="pc-overline"><strong>{copy.name}</strong><span>{copy.category}</span></p>
     <h1>{copy.headline.join(' ')}</h1>
     <p className="pc-cover-summary">{copy.summary}</p>
    </div>
    <dl className="pc-cover-facts od-case-facts">
     <div><dt>{ru?'Моя роль':'My role'}</dt><dd>{copy.role}</dd></div>
     <div><dt>{ru?'Формат проекта':'Project format'}</dt><dd>{copy.stage}</dd></div>
    </dl>
   </div>
  </header>
 );
 if(slide.type==='context')return <div className="pc-slide-content"><p className="pc-eyebrow">{ru?'КОНТЕКСТ ПРОЕКТА':'PROJECT CONTEXT'}</p><h2>{ru?'Задача и мой вклад.':'The challenge and my role.'}</h2><div className="pc-context-columns"><article><h3>{ru?'Задача':'The challenge'}</h3><p className="pc-challenge">{copy.challenge}</p></article><article><h3>{ru?'Мой вклад':'My contribution'}</h3><p className="pc-scope">{copy.scope}</p></article></div></div>;
 if(slide.type==='research'){
  const research=project.research;
  return <div className="pc-slide-content"><p className="pc-eyebrow">{ru?'ИССЛЕДОВАНИЕ':'RESEARCH'}</p><div className="pc-story-layout"><div className="pc-story-copy"><h2>{localize(research.title,lang)}</h2><p>{localize(research.body,lang)}</p><ul>{research.points.map((point,index)=><li key={index}>{localize(point,lang)}</li>)}</ul></div><div className="pc-story-visual"><CaseImage src={research.image||copy.images[0]} alt={`${copy.name} — ${localize(research.title,lang)}`} lang={lang} sizes="(max-width:900px) 82vw, 48vw"/></div></div></div>;
 }
 if(slide.type==='solution')return <div className="pc-slide-content"><p className="pc-eyebrow">{ru?`РЕШЕНИЕ ${String(slide.number).padStart(2,'0')}`:`DECISION ${String(slide.number).padStart(2,'0')}`}</p><div className="pc-story-layout"><div className="pc-story-copy"><h2>{slide.solution.title}</h2><p>{slide.solution.text}</p></div><div className="pc-story-visual"><CaseImage src={slide.solution.image} alt={`${copy.name} — ${slide.solution.title}`} lang={lang} sizes="(max-width:900px) 82vw, 48vw"/></div></div></div>;
 if(slide.type==='outcome')return <div className="pc-slide-content pc-outcome-content"><p className="pc-eyebrow">{ru?'РЕЗУЛЬТАТ И МОЙ ВКЛАД':'OUTCOME AND MY CONTRIBUTION'}</p><h2>{copy.outcomeTitle}</h2><p className="pc-outcome-copy">{copy.outcome}</p><p className="pc-outcome-stage">{copy.stage}</p><CaseStoreLinks links={storeLinks}/></div>;
 return <div className="pc-slide-content pc-more-content pc-more-content--projects" data-horizontal-scroll tabIndex={0} aria-label={slide.label}>{projectFooter}</div>;
}

export default function PresentationCase({project,lang='ru',projectFooter,storeLinks}) {
 const ru=lang==='ru',model=useMemo(()=>createModel(project,lang),[project,lang]);
 const ids=useMemo(()=>model.slides.map(slide=>slide.id),[model]);
 const {track,go,onScroll,onKeyDown,style}=usePresentationDeck(ids,`${lang}/${project.slug}`);
 return <div className={`presentation-case pc-refreshed pc-${project.slug}`} style={style}>
  <a className="pd-skip" href="#case-context" onClick={event=>{event.preventDefault();go(1);}}>{ru?'К описанию проекта':'Skip to project overview'}</a>
  <CaseTopbar lang={lang} slug={project.slug} presentation/>
  <main className="pc-track" ref={track} tabIndex={0} onScroll={onScroll} onKeyDown={onKeyDown} aria-label={ru?`${model.copy.name} — презентация кейса`:`${model.copy.name} — case presentation`}>
   {model.slides.map((slide,index)=><section className={`pc-slide pc-slide--${slide.type}`} id={slide.id} key={slide.id} aria-label={slide.label}><div className="pc-canvas"><SlideContent slide={slide} model={model} project={project} lang={lang} projectFooter={projectFooter} storeLinks={storeLinks}/><footer className="pc-slide-footer"><span>{model.copy.name.toUpperCase()}</span><span>{String(index+1).padStart(2,'0')} / {String(model.slides.length).padStart(2,'0')}{slide.type!=='more'&&` — ${slide.label}`}</span><div>{index>0&&<button type="button" onClick={()=>go(index-1)} aria-label={ru?'Предыдущий слайд':'Previous slide'}>←</button>}<button type="button" onClick={()=>go(index===model.slides.length-1?0:index+1)}>{index===model.slides.length-1?(ru?'К началу ↑':'Back to start ↑'):(ru?'Далее →':'Next →')}</button></div></footer></div></section>)}
  </main>
 </div>;
}
