'use client';

import {useEffect,useId,useRef} from 'react';
import Image from 'next/image';
import dimensions from '@/lib/portfolio-images.json';
import {presentationContacts} from '@/lib/presentation';

export function PresentationImage({src,mobileSrc,alt='',sizes='80vw',priority=false,className='',style}) {
 const image=<Image src={src} alt={alt} fill sizes={sizes} preload={priority}/>;
 return <div className={`pd-image ${className}`} style={style}>{mobileSrc?<picture><source media="(max-width:900px)" srcSet={mobileSrc}/>{image}</picture>:image}</div>;
}

export function PresentationButton({href,onClick,children,secondary=false,className='',target}) {
 const cls=`pd-button ${secondary?'pd-button--secondary':''} ${className}`;
 return href?<a className={cls} href={href} onClick={onClick} target={target} rel={target==='_blank'?'noreferrer':undefined}>{children}</a>:<button type="button" className={cls} onClick={onClick}>{children}</button>;
}

export function PresentationModal({open,onClose,title,children,className='',lang='ru'}) {
 const dialog=useRef(null);
 const heading=useId();
 useEffect(()=>{
  const node=dialog.current;
  if(!open)return;
  const overflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  node.showModal();
  return()=>{node.close();document.body.style.overflow=overflow;};
 },[open]);
 return <dialog ref={dialog} className={`presentation-modal ${className}`} aria-labelledby={heading}
  onCancel={event=>{event.preventDefault();event.stopPropagation();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
   <div className="pd-modal-heading"><h2 id={heading}>{title}</h2><button type="button" onClick={onClose} aria-label={lang==='ru'?'Закрыть':'Close'} autoFocus>×</button></div>
   {children}
   <button type="button" className="pd-modal-close" onClick={onClose}>{lang==='ru'?'Закрыть':'Close'} ×</button>
 </dialog>;
}

export function StaticDivider(){return <Image className="pd-about-divider" src="/presentation-v2/about-divider.svg" alt="" width={1720} height={1} style={{height:'auto'}} loading="eager" unoptimized/>;}

export function PresentationSocials({contact=false}) {
 const icons=contact?['linkedin','instagram']:['telegram','linkedin','instagram'];
 const hrefs={...presentationContacts,linkedin:'https://www.linkedin.com/in/almasitou'};
 return <div className="pd-social-icons">{icons.map(name=><a key={name} href={hrefs[name]} target="_blank" rel="noreferrer" aria-label={name==='linkedin'?'LinkedIn':name==='instagram'?'Instagram':'Telegram'}><Image src={`/presentation-v2/${contact?'contact-':''}${name}.svg`} alt="" width={80} height={80} unoptimized/></a>)}</div>;
}

export function nativeImageSize(src){return dimensions[src]||{width:1600,height:1000};}
