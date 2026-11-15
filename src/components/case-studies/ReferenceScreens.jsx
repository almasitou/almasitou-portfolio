'use client';

import {useId,useRef,useState} from 'react';
import {ChevronDown,ChevronUp} from 'lucide-react';
import {CaseImage} from './EditorialCase';
import {getProjectScreens} from '@/lib/project-screens';
import imageDimensions from '@/lib/portfolio-images.json';
import '@/app/reference-screens.css';

const previewCount=6;

export default function ReferenceScreens({project,lang='ru'}) {
  const ru=lang==='ru';
  const [expanded,setExpanded]=useState(false);
  const region=useRef(null);
  const gridId=useId();
  const headingId=useId();
  const screens=getProjectScreens(project);
  const visible=expanded?screens:screens.slice(0,previewCount);
  const allPortrait=screens.every(src=>{
    const dimensions=imageDimensions[src];
    return dimensions && dimensions.height>dimensions.width*1.25;
  });
  if(!screens.length)return null;

  function toggle() {
    if(expanded){
      region.current?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    }
    setExpanded(!expanded);
  }

  return <section ref={region} className={`rc-screens ${allPortrait?'rc-screens--portrait':'rc-screens--wide'}`} id="screens" aria-labelledby={headingId}>
    <div className="rc-screens-heading"><div>
      <p>{ru?'Интерфейс в деталях':'Interface details'}</p>
      <h2 id={headingId}>{ru?'Экраны продукта':'Product screens'}</h2>
    </div><span>{screens.length} {ru?'экранов':'screens'}</span></div>
    <div className="rc-screens-grid" id={gridId}>
      {visible.map((src,index)=><div className="rc-screens-item" key={src}>
        <CaseImage src={src} alt={`${project.name} — ${ru?'экран':'screen'} ${index+1}`} lang={lang}
          sizes={allPortrait?'(max-width:768px) 35vw, 160px':'(max-width:768px) 42vw, 28vw'}/>
      </div>)}
    </div>
    {screens.length>previewCount && <button type="button" className="rc-screens-toggle" aria-expanded={expanded} aria-controls={gridId} onClick={toggle}>
      {expanded?<>{ru?'Свернуть':'Show fewer'}<ChevronUp size={17}/></>:<>{ru?'Показать все экраны':'Show all screens'}<span>{screens.length}</span><ChevronDown size={17}/></>}
    </button>}
  </section>;
}
