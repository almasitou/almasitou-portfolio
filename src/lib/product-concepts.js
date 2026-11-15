import {caseStudies} from './portfolio';

export const productConcepts = [
  {id:'6', number:'01', key:'folio', name:'Product folio', tag:'СЕТКА КЕЙСОВ', background:'#f8f9fb',
    description:'Короткое знакомство, два крупных проекта на строку и понятная задача вместо абстрактного названия.',
    strength:'Быстро показывает специализацию и качество интерфейсов.',
    tradeoff:'Спокойная структура; характер создают сами работы и точная типографика.',
    reference:'Sergey Mikhailiuk', href:'https://sergeydesing.framer.website'},
  {id:'7', number:'02', key:'personal', name:'Личный контакт', tag:'ЛИЧНОСТЬ + РАБОТЫ', background:'#f5f7fb',
    description:'Личное вступление, фотография в строке заголовка, живые детали и три равных превью проектов.',
    strength:'Знакомит с человеком и быстро переводит внимание на работы.',
    tradeoff:'Для подробного разбора нужно перейти в кейс.',
    reference:'Ivan Kalkaev', href:'https://ivankalkaev.com'},
  {id:'8', number:'03', key:'journal', name:'Журнал проектов', tag:'КОНТЕКСТ И ВКЛАД', background:'#fcfcfa',
    description:'Профиль слева и последовательные истории справа: задача, роль, интерфейс и ключевое решение.',
    strength:'Опыт читается через конкретную работу, а не через список навыков.',
    tradeoff:'Большая история требует больше прокрутки.',
    reference:'Bogdan Goncharenko', href:'https://www.bogdan.vision/ru'},
  {id:'9', number:'04', key:'workbench', name:'Внутри продукта', tag:'ИНТЕРАКТИВНЫЙ РАЗБОР', background:'#111318',
    description:'Выберите проект и посмотрите его задачу, реальный интерфейс и решения в одном рабочем пространстве.',
    strength:'Позволяет сравнить подход к разным продуктам без переходов между страницами.',
    tradeoff:'Одновременно подробно показана одна работа; на телефоне проекты выбираются в строке.',
    reference:'Isaev Design', href:'https://isaevdesign.framer.website'},
  {id:'10', number:'05', key:'chapters', name:'От задачи к решению', tag:'ПОСЛЕДОВАТЕЛЬНЫЕ ГЛАВЫ', background:'#ffffff',
    description:'Каждому проекту — одинаковый разворот: контекст слева, реальный интерфейс справа.',
    strength:'Главная уже объясняет ход работы и даёт основание открыть подробный кейс.',
    tradeoff:'Меньше проектов помещается на одном экране.',
    reference:'Shalvi Sharma', href:'https://www.shalvisharma.com'},
];

export const findProductConcept = id => productConcepts.find(c => c.id === id);
export const selectedProjects = ['rrs','skibo','avrora','idol','kaspi','bao','taza'].map(slug => caseStudies.find(p => p.slug === slug));
const t = (ru,en) => ({ru,en});
export const projectPresentation = {
  rrs:{title:t('Самообслуживание с распознаванием блюд','Self-checkout with meal recognition'),short:t('AI-касса для ресторанов','AI checkout for restaurants'),scope:t('Сценарии · Touch UI · Система состояний','Flows · Touch UI · Interface states'),status:t('Коммерческий продукт','Commercial product'),logo:'/uploads/companies/rrs.svg',images:['/uploads/chaickout/my-order.png','/uploads/chaickout/specify-dish.png']},
  skibo:{title:t('Аренда экипировки до приезда на склон','Book your gear before reaching the slopes'),short:t('Приложение райдера + CRM','Rider app + rental CRM'),scope:t('Исследование · UX · Mobile + CRM','Research · UX · Mobile + CRM'),status:t('Проверено в прототипе · До разработки','Prototype validated · Pre-development'),images:['/uploads/skibo/main_page.png','/uploads/skibo/combo_page.png']},
  avrora:{title:t('Производство без разрозненных таблиц','Manufacturing beyond scattered spreadsheets'),short:t('Единая платформа производства','A connected manufacturing platform'),scope:t('Полевое исследование · Архитектура · Web','Field research · Architecture · Web'),status:t('Коммерческий продукт','Commercial product'),logo:'/uploads/companies/aurora.svg',images:['/uploads/avrora/production_plan_1.png','/uploads/avrora/status_tracking.png']},
  idol:{title:t('От идеи до публикации в одной системе','From an idea to publication in one system'),short:t('Рабочее пространство креатора','The creator workspace'),scope:t('Концепция · Архитектура · UI','Concept · Architecture · UI'),status:t('Продуктовый концепт','Product concept'),images:['/uploads/idol/Dashboard.png','/uploads/idol/content_planner.png']},
  kaspi:{title:t('Покупка билетов внутри суперприложения','Movie tickets inside a super-app'),short:t('Афиша, места и оплата','Discover, choose a seat, pay'),scope:t('Продуктовая концепция · Mobile UI','Product concept · Mobile UI'),status:t('Тестовое задание · Концепт','Design assignment · Concept'),logo:'/uploads/kaspi/kaspi_logo.svg',images:['/uploads/kaspi/Main page of Afisha.png','/uploads/kaspi/Choose place.png']},
  bao:{title:t('Заказ из BAO за несколько шагов','Order from BAO in a few steps'),short:t('Мобильный сервис доставки','Mobile food delivery'),scope:t('Пользовательский путь · Mobile UI','User journey · Mobile UI'),status:t('Коммерческий продукт','Commercial product'),images:['/uploads/bao/main.png','/uploads/bao/cart.png']},
  taza:{title:t('Оптовая закупка в понятном интерфейсе','Wholesale purchasing, made clear'),short:t('Каталог, аукционы и заказы','Catalog, auctions, and orders'),scope:t('Архитектура · E-commerce · UX/UI','Architecture · E-commerce · UX/UI'),status:t('Коммерческий продукт','Commercial product'),images:['/uploads/taza/Главная.png','/uploads/taza/Страница заказа.png']},
};

export const portfolioResearch = [
  {name:'Nielsen Norman Group',href:'https://www.nngroup.com/articles/ux-design-portfolios/',point:'Показывать задачу, личную роль, ограничения, решения и результат. Кейс должен легко просматриваться по диагонали.'},
  {name:'BestPortfolio',href:'https://bestportfolio.in/',point:'Подборка стала отправной точкой для поиска сайтов опытных продуктовых дизайнеров. Включение в каталог само по себе не доказывает эффективность найма.'},
  {name:'Framer Gallery / Katie Boss',href:'https://www.framer.com/community/gallery/kb-design-portfolio/',point:'Личный характер может сочетаться с подробными кейсами и ясной навигацией.'},
];
