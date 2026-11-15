'use client';

import {useEffect,useId,useMemo,useRef,useState} from 'react';
import Link from 'next/link';
import {ArrowLeft,ArrowRight,ArrowUpRight} from 'lucide-react';
import {ReferenceMockup,ReferenceShape} from './ReferenceVisual';
import {getReferenceStyle} from '@/lib/reference-content';
import '@/app/reference-project-rail.css';

export default function ReferenceProjectRail({projects=[],lang='ru',currentSlug}) {
  const rail=useRef(null);
  const firstArt=useRef(null);
  const headingId=useId();
  const trackId=useId();
  const [bounds,setBounds]=useState({start:true,end:false});
  const ru=lang==='ru';
  const orderedProjects=useMemo(()=>{
    const current=projects.findIndex(project=>project.slug===currentSlug);
    return current<0?projects:[...projects.slice(current+1),...projects.slice(0,current+1)];
  },[projects,currentSlug]);

  useEffect(()=>{
    const node=rail.current;
    const art=firstArt.current;
    if(!node||!art)return;
    function updateBounds() {
      const next={start:node.scrollLeft<=2,end:node.scrollLeft>=node.scrollWidth-node.clientWidth-2};
      setBounds(previous=>previous.start===next.start&&previous.end===next.end?previous:next);
    }
    function updateLayout() {
      node.style.setProperty('--rpr-art-scale',String(art.getBoundingClientRect().width/960));
      updateBounds();
    }
    function wheel(event) {
      if(event.ctrlKey)return;
      const raw=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
      const delta=raw*(event.deltaMode===1?16:event.deltaMode===2?node.clientWidth:1);
      const remaining=node.scrollWidth-node.clientWidth-node.scrollLeft;
      if((delta>0&&remaining>1)||(delta<0&&node.scrollLeft>1)) {
        event.preventDefault();
        node.scrollLeft+=delta;
      }
    }
    node.scrollLeft=0;
    updateLayout();
    const observer=new ResizeObserver(updateLayout);
    observer.observe(node);
    observer.observe(art);
    node.addEventListener('scroll',updateBounds,{passive:true});
    node.addEventListener('wheel',wheel,{passive:false});
    return()=>{
      observer.disconnect();
      node.removeEventListener('scroll',updateBounds);
      node.removeEventListener('wheel',wheel);
    };
  },[orderedProjects]);

  function scrollTo(left) {
    const node=rail.current;
    if(!node)return;
    node.scrollTo({left,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  function step(direction) {
    const node=rail.current;
    const first=node?.querySelector('.rpr-card');
    if(!node||!first)return;
    const gap=parseFloat(getComputedStyle(node).columnGap)||0;
    scrollTo(node.scrollLeft+direction*(first.getBoundingClientRect().width+gap));
  }
  function onKeyDown(event) {
    if(event.target.closest('a,button,input,textarea,select'))return;
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
      event.preventDefault();step(event.key==='ArrowLeft'?-1:1);
    }else if(event.key==='Home'||event.key==='End'){
      event.preventDefault();scrollTo(event.key==='Home'?0:rail.current.scrollWidth);
    }
  }

  if(!orderedProjects.length)return null;
  return <section className="rpr-section" aria-labelledby={headingId}>
    <div className="rpr-heading">
      <h2 id={headingId}>{ru?'Другие проекты':'Other projects'}</h2>
      <div className="rpr-controls">
        <button type="button" onClick={()=>step(-1)} disabled={bounds.start} aria-controls={trackId} aria-label={ru?'Предыдущие проекты':'Previous projects'}><ArrowLeft size={21} strokeWidth={1.5}/></button>
        <button type="button" onClick={()=>step(1)} disabled={bounds.end} aria-controls={trackId} aria-label={ru?'Следующие проекты':'Next projects'}><ArrowRight size={21} strokeWidth={1.5}/></button>
      </div>
    </div>
    <div ref={rail} id={trackId} className="rpr-track" tabIndex={0} onKeyDown={onKeyDown} role="group" aria-label={ru?'Все проекты, горизонтальная прокрутка':'All projects, horizontal scrolling'}>
      {orderedProjects.map((project,index)=>{
        const style=getReferenceStyle(project);
        const current=project.slug===currentSlug;
        return <Link className="rpr-card" key={project.slug} href={`/${lang}/project/${project.slug}`} aria-current={current?'page':undefined}>
          <div ref={index===0?firstArt:undefined} className="rpr-art">
            <div className="rpr-canvas">
              <ReferenceShape kind={index%3===1?'round':'project'} color={style.color}/>
              <ReferenceMockup project={project}/>
            </div>
          </div>
          <div className="rpr-caption"><h3>{project.name}</h3><ArrowUpRight size={22} strokeWidth={1.4} aria-hidden="true"/></div>
          <p className="rpr-category">{current?(ru?'Текущий кейс':'Current case'):project.category}</p>
        </Link>;
      })}
    </div>
  </section>;
}
