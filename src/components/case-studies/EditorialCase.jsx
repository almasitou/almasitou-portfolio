'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { PortfolioMotion, PortfolioNav, RevealBlock, Contact } from '@/components/Portfolio';
import { localize } from '@/lib/portfolio';
import imageDimensions from '@/lib/portfolio-images.json';

export function CaseImage({ src, alt, lang, eager = false, sizes = '(max-width: 760px) 90vw, 74vw' }) {
  const dimensions = imageDimensions[src] || { width: 1600, height: 1200 };
  const orientation = dimensions.height > dimensions.width * 1.25 ? 'portrait' : 'landscape';
  const dialog = useRef(null);
  const enlarged = useRef(null);
  const origin = useRef(null);
  const savedOverflow = useRef(null);
  const closing = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => () => {
    if (savedOverflow.current !== null) document.body.style.overflow = savedOverflow.current;
    savedOverflow.current = null;
  }, []);

  function restoreScroll() {
    if (savedOverflow.current !== null) document.body.style.overflow = savedOverflow.current;
    savedOverflow.current = null;
    closing.current = false;
  }

  function originTransform() {
    const target = enlarged.current.getBoundingClientRect();
    const source = origin.current;
    if (!source || !target.width) return 'scale(.96)';
    const x = source.left + source.width / 2 - target.left - target.width / 2;
    const y = source.top + source.height / 2 - target.top - target.height / 2;
    return `translate(${x}px, ${y}px) scale(${source.width / target.width})`;
  }

  function open(event) {
    origin.current = event.currentTarget.querySelector('img').getBoundingClientRect();
    savedOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    if (!reduced) enlarged.current.animate(
      [{ transform: originTransform(), opacity: .75 }, { transform: 'none', opacity: 1 }],
      { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
  }

  async function close() {
    const viewer = dialog.current;
    const media = enlarged.current;
    if (closing.current || !viewer?.open || !media) return;
    closing.current = true;
    if (!reduced) {
      try {
        await media.animate(
          [{ transform: 'none', opacity: 1 }, { transform: originTransform(), opacity: .3 }],
          { duration: 240, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' }
        ).finished;
      } catch { /* Closing still restores focus and scrolling if an animation is interrupted. */ }
    }
    viewer.close();
    media.getAnimations().forEach(animation => animation.cancel());
    restoreScroll();
  }

  return (
    <>
      <button type="button" className="case-image" data-orientation={orientation} onClick={open}
        aria-label={`${lang === 'ru' ? 'Рассмотреть' : 'View'}: ${alt}`}>
        <Image src={src} alt={alt} width={dimensions.width} height={dimensions.height} sizes={sizes} loading={eager?'eager':'lazy'}/>
      </button>
      <dialog ref={dialog} className="image-viewer" data-orientation={orientation} aria-label={alt}
        onCancel={event => { event.preventDefault(); event.stopPropagation(); close(); }} onClose={restoreScroll}
        onClick={event => { if (event.target === event.currentTarget) close(); }}>
        <button type="button" className="image-viewer-close" autoFocus onClick={close}
          aria-label={lang === 'ru' ? 'Закрыть' : 'Close'}><span>{lang === 'ru' ? 'Закрыть' : 'Close'}</span><X size={20}/></button>
        <button type="button" ref={enlarged} className="image-viewer-media" onClick={close} aria-label={lang === 'ru' ? 'Закрыть изображение' : 'Close image'}>
          <Image src={src} alt={alt} width={dimensions.width} height={dimensions.height} sizes="94vw"/>
        </button>
      </dialog>
    </>
  );
}

function CaseIndex({ lang }) {
  const [active, setActive] = useState('context');
  const ru = lang === 'ru';
  const chapters = [['context', ru ? 'Контекст' : 'Context'], ['decisions', ru ? 'Решения' : 'Decisions'], ['outcome', ru ? 'Итог' : 'Outcome'], ['screens', ru ? 'Экраны' : 'Screens']];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach(entry => setActive(entry.target.id));
    }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
    ['context','decisions','outcome','screens'].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <aside className="case-index"><nav aria-label={ru ? 'Содержание кейса' : 'Case contents'}>
      <p>{ru ? 'ВНУТРИ КЕЙСА' : 'IN THIS CASE'}</p>
      {chapters.map(([id,label],i) => <a key={id} href={`#${id}`} onClick={() => setActive(id)}
        aria-current={active === id ? 'location' : undefined}><span>0{i+1}</span>{label}</a>)}
    </nav></aside>
  );
}

export default function EditorialCase({ project, next, lang }) {
  const ru = lang === 'ru';
  const t = value => localize(value,lang);
  const coverDimensions = imageDimensions[project.cover] || { width: 1600, height: 1000 };
  return (
    <div className={`folio folio-case case-${project.slug}`} id="top">
      <PortfolioMotion>
        <a className="folio-skip" href="#context">{ru ? 'К содержанию кейса' : 'Skip to case content'}</a>
        <PortfolioNav lang={lang} project={project.slug}/>
        <main>
          <header className="case-hero folio-container">
            <RevealBlock>
              <div className="case-kicker"><span>{project.name}</span><p>{project.category}{/^\d/.test(project.year) && ` / ${project.year}`}</p></div>
              <h1>{t(project.headline)}</h1>
              <p className="case-deck">{t(project.summary)}</p>
            </RevealBlock>
          </header>
          <div className="case-cover folio-container"><Image src={project.cover} alt={project.name}
            priority width={coverDimensions.width} height={coverDimensions.height} sizes="94vw"/></div>
          <dl className="folio-container case-meta">
            {[[ru ? 'Моя роль' : 'My role',project.role], [ru ? 'Платформа' : 'Platform',project.platform], [ru ? 'Статус' : 'Status',t(project.type)]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <div className="folio-container case-layout">
            <CaseIndex lang={lang}/>
            <div className="case-body">
              <section id="context" className="case-context">
                <p className="eyebrow">01 / {ru ? 'КОНТЕКСТ' : 'CONTEXT'}</p>
                <RevealBlock><h2>{ru ? 'Что нужно было решить' : 'The challenge'}</h2><p className="case-lead">{t(project.challenge)}</p></RevealBlock>
                <div className="case-contribution"><span>{ru ? 'МОЙ ВКЛАД' : 'MY CONTRIBUTION'}</span><p>{t(project.contribution)}</p></div>
                {project.research && (
                  <div className="case-research">
                    <h3>{t(project.research.title)}</h3><p>{t(project.research.body)}</p>
                    <ul>{project.research.points.map((point,i) => <li key={i}>{t(point)}</li>)}</ul>
                    {project.research.image && <CaseImage src={project.research.image} alt={t(project.research.title)} lang={lang}/>}
                  </div>
                )}
              </section>
              <section id="decisions" className="case-decisions">
                <div className="case-section-heading"><p className="eyebrow">02 / {ru ? 'РЕШЕНИЯ' : 'DECISIONS'}</p><h2>{ru ? 'Логика за интерфейсом' : 'The thinking behind the interface'}</h2></div>
                {project.decisions.map((item,i) => (
                  <figure className="case-decision" key={item.image}>
                    <RevealBlock><figcaption className="case-decision-caption"><div><span className="decision-number">0{i+1}</span><h3>{t(item.title)}</h3></div><p>{t(item.text)}</p></figcaption></RevealBlock>
                    <RevealBlock><CaseImage src={item.image} alt={t(item.title)} lang={lang}/></RevealBlock>
                  </figure>
                ))}
              </section>
              <section id="outcome" className="case-outcome">
                <p className="eyebrow">03 / {ru ? 'ИТОГ' : 'OUTCOME'}</p><RevealBlock><h2>{ru ? 'Что получилось' : 'The outcome'}</h2><p>{t(project.outcome)}</p></RevealBlock>
              </section>
              <section id="screens" className="case-screens">
                <div className="case-section-heading"><p className="eyebrow">04 / {ru ? 'ДЕТАЛИ' : 'DETAILS'}</p><h2>{ru ? 'Ближе к продукту' : 'A closer look'}</h2></div>
                <div className="case-gallery">{project.gallery.map((src,i) => (
                  <RevealBlock key={src}><figure><CaseImage src={src} alt={`${project.name} — ${ru ? 'экран' : 'screen'} ${i+1}`} lang={lang} sizes="(max-width: 760px) 90vw, 38vw"/><figcaption>{String(i+1).padStart(2,'0')} / {project.name}</figcaption></figure></RevealBlock>
                ))}</div>
              </section>
            </div>
          </div>
          <section className="folio-container case-next">
            <Link href={`/${lang}/project/${next.slug}`} className="case-next-link">
              <div><p className="eyebrow">{ru ? 'СЛЕДУЮЩАЯ ИСТОРИЯ' : 'NEXT STORY'}</p><h2>{next.name}<ArrowUpRight strokeWidth={1.2}/></h2><p className="case-next-summary">{t(next.summary)}</p></div>
              <Image src={next.cover} alt={next.name} width={640} height={420} sizes="(max-width: 760px) 90vw, 30vw"/>
            </Link>
          </section>
        </main>
        <Contact lang={lang}/>
      </PortfolioMotion>
    </div>
  );
}
