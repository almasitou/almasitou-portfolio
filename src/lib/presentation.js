import experiences from './presentation-experience.json';
import cases from './presentation-cases.json';
import {localize} from './portfolio';

export const presentationContacts={email:'almaskazhymuratuly@gmail.com',telegram:'https://t.me/almasitou',instagram:'https://www.instagram.com/almasitou.design/',whatsapp:'https://wa.me/77772212434'};
export const presentationExperience=experiences;
const enContexts=['FOODTECH · FRANCE · B2B / B2C','EDTECH · ALMATY · WEB','B2B · DATA · ANALYTICS','RETAIL · MARKETPLACE · WEB','ENTERPRISE · INTERNAL SYSTEMS','TRAVEL · WEBSITE · CRM','AGENCY · WEB · COMMUNICATIONS'];
const enExperience=[
 ['AI self-checkout and web products for restaurants.',['Recognition, clarification, and payment flows','Kiosk and web design systems','B2B onboarding, dashboards, and communications'],'Product checkout: ~1 min → 10–15 sec'],
 ['A learning platform with clear lessons and a coherent student journey.',['Redesigned the core learning interface','Simplified education workflows','Created a scalable design system'],'A coherent learning platform'],
 ['A corporate platform for data verification and large information sets.',['Complex B2B platform architecture','Verification and data-entry flows','Dashboards for business users'],'Clear data for better decisions'],
 ['Internal pharmacy services and a new marketplace.',['Developed internal IT products','Designed a marketplace MVP','Built custom administration interfaces'],'A marketplace MVP designed from scratch'],
 ['Corporate KazMunayGas software in the KBTU team.',['Designed system interfaces','Supported existing workflows','Improved interaction usability'],'Experience with enterprise products'],
 ['A customer website and internal travel CRM.',['Designed the travel service website','Created employee CRM interfaces','Connected customer and internal UI'],'Two interfaces for one company'],
 ['Websites, presentations, and visuals for client projects.',['Website structure and design','Client presentations','Visual communication materials'],'A foundation in interfaces and visual design'],
];
export function getPresentationExperience(index,lang){const item=experiences[index];if(lang==='ru')return item;const [summary,points,contribution]=enExperience[index];return {...item,context:enContexts[index],company:index===4?'KBTU / INIIT':item.company,rolePeriod:item.rolePeriod.replace('проектная работа','project work'),summary,points,contribution,full:[summary,...points]};}

export function getPresentationCase(project,lang){
 const designed=cases[project.slug];
 if(designed){const copy=designed[lang==='ru'?'ru':'en'];return {...designed,...copy,category:lang==='en'&&project.slug==='skibo'?'MOBILE / EQUIPMENT RENTAL / UX & UI':copy.category,solutions:copy.solutions.map(([title,text],i)=>({title,text,image:designed.solutionImages[i]}))};}
 return {slug:project.slug,name:project.name,category:project.category,headline:[localize(project.headline,lang)],summary:localize(project.summary,lang),role:project.role,scope:localize(project.contribution,lang),stage:localize(project.type,lang),challenge:localize(project.challenge,lang),images:[project.cover],solutions:project.decisions.map(d=>({title:localize(d.title,lang),text:localize(d.text,lang),image:d.image})),outcomeTitle:lang==='ru'?'Связанный сценарий продукта':'A connected product journey',outcome:localize(project.outcome,lang)};
}

export const featuredCards=[
 {slug:'rrs',image:'/presentation/card-rrs.png',mobile:'/presentation/mobile-card-rrs.png',title:'Retail Robotics Solutions',category:'FoodTech · AI checkout · Кейс',en:'FoodTech · AI checkout · Case study'},
 {slug:'avrora',image:'/presentation/card-aurora.png',mobile:'/presentation/mobile-card-aurora.png',title:'Aurora BPM',category:'B2B · Производство · Кейс',en:'B2B · Manufacturing · Case study'},
 {slug:'skibo',image:'/presentation/card-skibo.png',mobile:'/presentation/mobile-card-skibo.png',title:'Skibo',category:'Mobile · Аренда снаряжения · Кейс',en:'Mobile · Equipment rental · Case study'},
 {slug:'rrs',image:'/presentation/detail-rrs.png',title:'Когда ИИ не уверен',titleEn:'When AI is uncertain',category:'RRS · Уточнение распознавания',en:'RRS · Recognition clarification',anchor:'decisions'},
 {slug:'skibo',image:'/presentation/detail-skibo.png',title:'Бронирование без очередей',titleEn:'Booking without queues',category:'Skibo · Выбор и предзаказ',en:'Skibo · Selection and pre-order',anchor:'decisions'},
 {slug:'avrora',image:'/presentation/detail-aurora.png',title:'Производство под контролем',titleEn:'Manufacturing under control',category:'BPM · Планирование и статусы',en:'BPM · Planning and statuses',anchor:'decisions'},
];

export const presentationSteps=[
 {title:['Разбираюсь','Understand'],question:['Что мешает пользователю и бизнесу?','What stands in the way of users and the business?'],body:['Изучаю контекст, ограничения и текущий опыт. Проверяю, какую задачу действительно нужно решить.','Study the context, constraints, and current experience. Identify the problem that needs solving.'],tools:['Контекст · интервью · гипотезы','Context · interviews · hypotheses']},
 {title:['Проектирую','Design'],question:['Как должен работать сценарий?','How should the journey work?'],body:['Собираю пользовательские пути, структуру и прототип. Продумываю ошибки и нестандартные состояния.','Build journeys, structure, and prototypes. Account for errors and less common states.'],tools:['User flow · прототип · состояния','User flow · prototype · states']},
 {title:['Проверяю','Validate'],question:['Понятно ли решение человеку?','Does the solution make sense to people?'],body:['Проверяю сценарии на пользователях, собираю обратную связь и дорабатываю слабые места.','Test flows with users, gather feedback, and improve weak points.'],tools:['Тестирование · обратная связь','Testing · feedback']},
 {title:['Довожу до запуска','Deliver'],question:['Можно ли это реализовать и развивать?','Can we build and evolve it?'],body:['Готовлю дизайн-систему и макеты, обсуждаю реализацию с командой и проверяю результат.','Prepare a design system and layouts, discuss implementation with the team, and review the result.'],tools:['UI kit · handoff · дизайн-ревью','UI kit · handoff · design review']},
];
