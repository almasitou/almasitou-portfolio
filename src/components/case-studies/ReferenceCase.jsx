'use client';

import {useEffect,useRef} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import {ReferenceNav} from '@/components/ReferenceShared';
import {ReferenceShape,ReferenceMockup} from '@/components/ReferenceVisual';
import ReferenceContact from '@/components/ReferenceContact';
import ReferenceProjectRail from '@/components/ReferenceProjectRail';
import ReferenceScreens from '@/components/case-studies/ReferenceScreens';
import {CaseImage} from '@/components/case-studies/EditorialCase';
import {localize} from '@/lib/portfolio';
import imageDimensions from '@/lib/portfolio-images.json';
import {getReferenceStyle} from '@/lib/reference-content';
import '@/app/reference-case.css';

const bilingual=(ru,en)=>({ru,en});
const qualitativeOutcomes={
  rrs:[
    [bilingual('Весь сценарий','The complete journey'),bilingual('От распознавания блюд до проверки заказа и оплаты.','From meal recognition to order review and payment.')],
    [bilingual('Контроль у человека','Customer control'),bilingual('Ручной выбор и уточнение блюда при ошибке AI.','Manual selection and dish clarification when AI is uncertain.')],
    [bilingual('Система состояний','Interface states'),bilingual('Основной заказ и нестандартные ситуации связаны в одну логику.','Checkout and exceptions form one connected interface system.')],
  ],
  skibo:[
    [bilingual('Приложение + CRM','App + CRM'),bilingual('Обе стороны аренды спроектированы в связанном сценарии.','Both sides of the rental service share a connected journey.')],
    [bilingual('Проверка прототипа','Prototype validation'),bilingual('Сценарий выбора и бронирования проверен с потенциальными клиентами.','Selection and booking were explored with potential customers.')],
    [bilingual('До разработки','Pre-development'),bilingual('Результат — проработанная логика сервиса; метрик после релиза нет.','The result is a developed service flow; no post-launch metrics are claimed.')],
  ],
  avrora:[
    [bilingual('Общая структура','One shared structure'),bilingual('Планирование, сырьё, запасы и пользователи объединены в платформе.','Planning, raw materials, inventory, and users share one platform.')],
    [bilingual('Видимый статус','Visible status'),bilingual('Этапы заказа и следующий шаг доступны в интерфейсе.','Order stages and the next step are visible in the interface.')],
    [bilingual('Проверка сценариев','Scenario validation'),bilingual('Ключевые решения проверялись вместе с директором предприятия.','Key decisions were validated with the enterprise director.')],
  ],
  kaspi:[
    [bilingual('Общая афиша','A shared event listing'),bilingual('Концепция объединяет разные форматы мероприятий.','The concept brings different event formats into one structure.')],
    [bilingual('Места и оплата','Seats and payment'),bilingual('Сценарий соединяет выбор сеанса, места и покупку.','The flow connects showtime and seat selection with purchase.')],
    [bilingual('Электронный билет','A digital ticket'),bilingual('В концепте билет сохраняется в личном разделе.','In the concept, purchased tickets remain in a personal section.')],
  ],
  idol:[
    [bilingual('Единый контекст','One project context'),bilingual('Материалы, задачи и история работы собраны вокруг проекта.','Assets, tasks, and work history are organized around projects.')],
    [bilingual('Инструменты AI','AI tools'),bilingual('Спроектированы студия и библиотека для работы с контентом.','The concept includes a content studio and knowledge library.')],
    [bilingual('Планирование','Publication planning'),bilingual('Планировщик продолжает сценарий от подготовки до публикации.','The planner extends content preparation into publication scheduling.')],
  ],
  bao:[
    [bilingual('Визуальное меню','A visual menu'),bilingual('Фотографии и категории помогают ориентироваться в каталоге.','Food photography and categories support browsing.')],
    [bilingual('Связанный заказ','A connected order'),bilingual('Блюда, корзина и оформление доставки собраны в один путь.','Dishes, cart review, and delivery checkout form one journey.')],
    [bilingual('Повторное использование','Returning customers'),bilingual('История заказов и сохранённые адреса поддерживают возвращение.','Order history and saved addresses support returning customers.')],
  ],
  taza:[
    [bilingual('Рабочий каталог','A business catalog'),bilingual('Выбор товаров и оформление поддерживают регулярные закупки.','Selection and checkout support recurring procurement.')],
    [bilingual('Счета и документы','Invoices and documents'),bilingual('Финансовая часть закупки доступна в отдельном разделе.','Purchasing documents are accessible in a dedicated section.')],
    [bilingual('Статус поставки','Delivery status'),bilingual('Состав и состояние заказа остаются доступны после оформления.','Order contents and status remain visible after checkout.')],
  ],
};

function isPortrait(src) {
  const dimensions=imageDimensions[src];
  return dimensions ? dimensions.height>dimensions.width*1.25 : false;
}

function Block({children,className='',as='section',...props}) {
  const reduced=useReducedMotion();
  const Component=as==='div'?motion.div:motion.section;
  return <Component className={`rc-block rc-shaped ${className}`} initial={false}
    whileInView={{y:reduced?0:[16,0]}} viewport={{once:true,amount:.08}}
    transition={{duration:.7,ease:[.22,1,.36,1]}} {...props}>{children}</Component>;
}

function StoryBlock({label,title,children,image,project,lang,id}) {
  const portrait=image && isPortrait(image);
  return <Block className={`rc-story ${image?'rc-story--illustrated':'rc-story--text'} ${portrait?'rc-story--portrait':''}`} id={id}>
    <div className="rc-story-copy"><p className="rc-story-label">{label}</p>{title && <h2>{title}</h2>}{children}</div>
    {image && <div className="rc-story-visual"><CaseImage src={image} alt={`${project.name} — ${title || label}`} lang={lang} sizes={portrait?'(max-width:768px) 45vw, 22vw':'(max-width:768px) 76vw, 40vw'}/></div>}
  </Block>;
}

function ProjectHero({project}) {
  const container=useRef(null);
  const style=getReferenceStyle(project);
  useEffect(()=>{
    const node=container.current;
    const update=()=>node.style.setProperty('--rc-art-scale',String(node.clientWidth/1400));
    update();
    const observer=new ResizeObserver(update);
    observer.observe(node);
    return()=>observer.disconnect();
  },[]);
  return <div ref={container} className={`rc-project-art rc-shaped ${style.mediaKind==='phones'?'rc-art-mobile':'rc-art-desktop'}`}
    style={{'--rc-project-color':style.color}}>
    <ReferenceShape kind="case" color={style.color} className="rc-hero-shape"/>
    <div className="rc-art-heading"><p className="rc-display-title">{project.name}</p><span>{project.platform}</span></div>
    <div className="rc-mockup-stage"><ReferenceMockup project={project} className="rc-native-mockup" priority/></div>
  </div>;
}

export default function ReferenceCase({project,lang,projects}) {
  const ru=lang==='ru';
  const t=value=>localize(value,lang);
  return <div className={`reference-case rc-project-${project.slug}`} id="top">
    <a className="rc-skip" href="#case-introduction">{ru?'Перейти к описанию проекта':'Skip to project overview'}</a>
    <ReferenceNav lang={lang} project/>
    <main className="rc-shell">
      <ProjectHero project={project}/>
      <section className="rc-introduction" id="case-introduction">
        <Block as="div" className="rc-introduction-heading"><span>{project.category}</span><h1>{t(project.headline)}</h1></Block>
        <Block as="div" className="rc-introduction-context"><span>{ru?'Контекст':'Context'}</span><p>{t(project.summary)}</p></Block>
      </section>
      <Block className="rc-metadata" as="div"><dl>
        <div><dt>{ru?'Моя роль':'My role'}</dt><dd>{project.role}</dd></div>
        <div><dt>{ru?'Платформа':'Platform'}</dt><dd>{project.platform}</dd></div>
        <div><dt>{ru?'Статус проекта':'Project stage'}</dt><dd>{t(project.type)}</dd></div>
      </dl></Block>
      <div className="rc-brief-pair">
        <Block className="rc-brief" id="challenge"><h2>{ru?'Задача':'The challenge'}</h2><p>{t(project.challenge)}</p></Block>
        <Block className="rc-brief" id="contribution"><h2>{ru?'Мой вклад':'My contribution'}</h2><p>{t(project.contribution)}</p></Block>
      </div>
      {project.research && <StoryBlock label={ru?'Исследование':'Research'} title={t(project.research.title)} id="research" image={project.research.image} project={project} lang={lang}>
          <p>{t(project.research.body)}</p><ul>{project.research.points.map((point,index)=><li key={index}>{t(point)}</li>)}</ul>
        </StoryBlock>}
      {project.decisions.map((decision,index)=><StoryBlock key={decision.image} label={`${ru?'Решение':'Decision'} ${String(index+1).padStart(2,'0')}`} title={t(decision.title)} id={`decision-${index+1}`} image={decision.image} project={project} lang={lang}>
          <p>{t(decision.text)}</p>
        </StoryBlock>)}
      <section className="rc-outcome" id="outcome">
        <StoryBlock label={ru?'Результат':'The outcome'} title={ru?'Что получилось':'What came together'}><p>{t(project.outcome)}</p></StoryBlock>
        {qualitativeOutcomes[project.slug] && <div className="rc-outcome-grid">{qualitativeOutcomes[project.slug].map(([value,detail],index)=><Block as="div" className="rc-outcome-card" key={index}>
          <span>0{index+1}</span><h3>{t(value)}</h3><p>{t(detail)}</p>
        </Block>)}</div>}
      </section>
      <ReferenceScreens key={project.slug} project={project} lang={lang}/>
      <ReferenceProjectRail projects={projects} lang={lang} currentSlug={project.slug}/>
    </main>
    <ReferenceContact lang={lang}/>
  </div>;
}
