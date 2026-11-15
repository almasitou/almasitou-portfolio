'use client';

import {useRef,useState,useSyncExternalStore} from 'react';
import Link from 'next/link';
import {ArrowLeft,ArrowUpRight,Menu,X} from 'lucide-react';
import SparklesButton from './SparklesButton';

const subscribe = callback => {
  window.addEventListener('resize',callback);
  return () => window.removeEventListener('resize',callback);
};
const getSnapshot = () => `${window.innerWidth}:${window.innerHeight}`;
const getServerSnapshot = () => '1600:900';

export function useReferenceViewport() {
  const snapshot=useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);
  const [width,height]=snapshot.split(':').map(Number);
  const scale=Math.min(width/1600,height/900);
  return {width,height,scale,offsetY:Math.max(0,(height-900*scale)/2),mobile:width<=768};
}

export function TelegramLogo({className=''}) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>;
}

export function TelegramButton({children='Telegram',className=''}) {
  return <SparklesButton className={`rf-telegram ${className}`} href="https://t.me/almasitou" target="_blank">
    <span className="rf-telegram-icon"><TelegramLogo/></span><span className="rf-telegram-label">{children}</span>
  </SparklesButton>;
}

export function ReferenceNav({lang='ru',project=false,onNavigate}) {
  const {width,scale,offsetY,mobile}=useReferenceViewport();
  const [open,setOpen]=useState(false);
  const toggle=useRef(null);
  const ru=lang==='ru';
  const navScale=Math.max(.85,project?width/1600:scale);
  const style=mobile?{top:12,left:project?8:'auto',right:8,transform:'none'}:{top:project?20*navScale:offsetY+67*scale-51*navScale,left:'50%',transform:`translateX(-50%) scale(${navScale})`};
  function navigate(event,id) {
    setOpen(false);
    if(onNavigate){event.preventDefault();onNavigate(id);}
  }
  return <header className={`rf-nav ${project?'rf-nav--case':''} ${open?'rf-nav--open':''}`} style={style} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}}}>
    {project && <Link className="rf-back" href={`/${lang}`}><ArrowLeft size={16}/>{ru?'Назад':'Back'}</Link>}
    <nav className={`rf-nav-menu ${open?'is-open':''}`} id="rf-navigation" aria-label={ru?'Основная навигация':'Main navigation'}>
      <Link href={`/${lang}#work`} onClick={e=>navigate(e,'work')}>{ru?'Проекты':'Projects'}</Link>
      <Link href={`/${lang}#about`} onClick={e=>navigate(e,'about')}>{ru?'Обо мне':'About'}</Link>
      <a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>CV</a>
      {open && mobile && <span className="rf-menu-intro">{ru?'Алмас Кажымуратулы':'Almas Qajymuratuly'}<small>Senior Product Designer</small></span>}
    </nav>
    <div className="rf-nav-actions"><TelegramButton/><button ref={toggle} className="rf-menu-toggle" aria-expanded={open} aria-controls="rf-navigation" aria-label={ru?(open?'Закрыть меню':'Открыть меню'):(open?'Close menu':'Open menu')} onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button></div>
  </header>;
}

export function ReferenceSocials({settings={},className=''}) {
  const linkedin=settings.linkedinUrl || 'https://www.linkedin.com/in/almasitou';
  return <div className={`rf-socials ${className}`}>
    <a className="rf-social rf-social--telegram" href="https://t.me/almasitou" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramLogo/></a>
    <a className="rf-social rf-social--linkedin" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
  </div>;
}

export function ReferenceCaseLink({href,children}) {
  return <Link className="rf-case-link" href={href}>{children}<ArrowUpRight size={22}/></Link>;
}
