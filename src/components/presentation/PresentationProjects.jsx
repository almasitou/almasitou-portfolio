'use client';

import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {presentationContacts} from '@/lib/presentation';
import {getPresentationCover} from '@/lib/presentation-covers';
import {PresentationImage as Picture} from './PresentationUI';
import '@/app/presentation.css';
import '@/app/presentation-projects.css';
import '@/app/presentation-refresh.css';

function CoverPiece({piece,width,height}) {
 const [x,y,w,h]=piece.box,[iw,ih]=piece.inner||[w,h];
 const mask=piece.mask;
 const renderStyle={width:`${iw/w*100}%`,height:`${ih/h*100}%`,transform:`translate(-50%,-50%) rotate(${piece.rotate||0}deg)`};
 if(mask){const [mw,mh]=mask.size,[mx,my]=mask.offset;Object.assign(renderStyle,{maskImage:`url("${mask.src}")`,maskSize:`${mw/iw*100}% ${mh/ih*100}%`,maskPosition:`${Math.abs(iw-mw)<.001?50:mx/(iw-mw)*100}% ${Math.abs(ih-mh)<.001?50:my/(ih-mh)*100}%`,maskRepeat:'no-repeat'});}
 return <div className="pd-cover-piece-slot" style={{left:`${x/width*100}%`,top:`${y/height*100}%`,width:`${w/width*100}%`,height:`${h/height*100}%`,mixBlendMode:piece.blend}}><Picture className="pd-cover-piece-render" src={piece.src} alt="" sizes="(max-width:900px) 70vw, 40vw" style={renderStyle}/></div>;
}

export function ProjectCard({project,lang='ru',mobilePreview=false,priority=false,className=''}) {
 const cover=getPresentationCover(project),[x,y,w,h]=cover.foreground;
 const layerStyle={left:`${x/cover.width*100}%`,top:`${y/cover.height*100}%`,width:`${w/cover.width*100}%`,height:`${h/cover.height*100}%`,'--foreground-reveal':`${cover.shift/h*100}%`};
 return <Link className={`pd-case-card pd-case-card--layered ${className}`} href={`/${lang}/project/${project.slug}`} data-mobile-preview={mobilePreview&&cover.mobile?true:undefined} aria-label={`${cover.title} — ${cover.type}`} style={{'--cover-ratio':cover.width/cover.height,'--card-label-color':cover.ink||'#fff',backgroundColor:cover.backgroundColor}}>
  {cover.background?<Picture className="pd-cover-background" src={cover.background} alt="" priority={priority} sizes="(max-width:900px) 90vw, 65vw"/>:<div className="pd-cover-background pd-cover-background--plain"/>}
  <div className="pd-cover-scene" aria-hidden="true">
   <div className="pd-cover-foreground" style={layerStyle}>{cover.pieces?cover.pieces.map(piece=><CoverPiece key={piece.src} piece={piece} width={w} height={h}/>):<Picture className="pd-cover-foreground-image" src={cover.image} alt="" sizes="(max-width:900px) 70vw, 45vw"/>}</div>
  </div>
  {mobilePreview&&cover.mobile&&<Picture className="pd-case-mobile-preview" src={cover.mobile} alt="" sizes="(max-width:900px) 85vw, 1px"/>}
  <div className="pd-case-caption"><h3><span className="pd-case-desktop-label">{cover.title}</span><span className="pd-case-mobile-label">{cover.mobileTitle||cover.title} →</span></h3><p><span className="pd-case-desktop-label">{cover.type}</span><span className="pd-case-mobile-label">{cover.mobileCategory?.[lang]||cover.type}</span></p></div>
 </Link>;
}

export function ProjectRail({projects,lang='ru',className='',priority=false}) {
 const region=useRef(null),[active,setActive]=useState(0),ru=lang==='ru';
 useEffect(()=>{
  const node=region.current;
  function wheel(event){
   if(event.ctrlKey||window.innerWidth<=900)return;
   event.preventDefault();event.stopPropagation();
   node.scrollLeft+=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
  }
  node.addEventListener('wheel',wheel,{passive:false});
  return()=>node.removeEventListener('wheel',wheel);
 },[]);
 function move(direction){
  const node=region.current,card=node.querySelector('.pd-case-card');
  node.scrollBy({left:direction*(card.getBoundingClientRect().width+24),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 }
 function scroll(){
  const node=region.current,card=node.querySelector('.pd-case-card');
  if(card)setActive(Math.round(node.scrollLeft/(card.getBoundingClientRect().width+24)));
 }
 return <div className={`pd-project-rail ${className}`}>
  <div className="pd-project-rail-track" data-horizontal-scroll ref={region} onScroll={scroll} tabIndex={0} role="region" aria-label={ru?'Все проекты':'All projects'} onKeyDown={event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();move(event.key==='ArrowRight'?1:-1);}}>
   {projects.map((project,index)=><ProjectCard project={project} lang={lang} key={project.slug} priority={priority&&index===0}/>)}
  </div>
  <div className="pd-project-rail-controls"><span>{String(Math.min(active+1,projects.length)).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span><div><button type="button" onClick={()=>move(-1)} aria-label={ru?'Предыдущие проекты':'Previous projects'}>←</button><button type="button" onClick={()=>move(1)} aria-label={ru?'Следующие проекты':'Next projects'}>→</button></div></div>
 </div>;
}

export default function PresentationProjects({projects,lang='ru'}) {
 const ru=lang==='ru';
 return <div className="presentation-projects pp-refreshed">
  <header className="pp-header"><Link href={`/${lang}#work`}>{ru?'← На главную':'← Back to home'}</Link><a href={presentationContacts.telegram} target="_blank" rel="noreferrer">Telegram ↗</a></header>
  <main><div className="pp-heading"><h1>{ru?'Проекты.':'Selected work.'}</h1><p>{ru?'Продукты, сервисы и концепции.':'Products, services, and concepts.'}</p></div><ProjectRail projects={projects} lang={lang} priority/></main>
  <footer className="pp-footer"><span>ALMAS QAJYMURATULY / PRODUCT DESIGN</span><span>{ru?'Листайте проекты →':'Explore the projects →'}</span></footer>
 </div>;
}
