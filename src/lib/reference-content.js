// Presentation data derived from the portfolio's own case-study material.
const text = (ru, en) => ({ru, en});

const presentation = {
  rrs: {
    color: '#f3b58f',
    mediaKind: 'computer',
    images: ['/uploads/chaickout/my-order.png'],
    shortTitle: text('AI-касса\nдля ресторанов', 'AI checkout\nfor restaurants'),
    tagline: text('От распознавания блюд до оплаты — в одном понятном сценарии.', 'From recognizing meals to payment, in one clear flow.'),
  },
  skibo: {
    color: '#dce8e8',
    mediaKind: 'phones',
    images: ['/uploads/skibo/main_page.png', '/uploads/skibo/combo_page.png'],
    shortTitle: text('Аренда экипировки\nдо приезда на склон', 'Book your gear\nbefore reaching the slopes'),
    tagline: text('Приложение для райдеров и CRM проката: подбор, бронирование и выдача.', 'A rider app and rental CRM: selection, booking, and pickup.'),
  },
  avrora: {
    color: '#dfd2bc',
    mediaKind: 'computer',
    images: ['/uploads/avrora/production_plan_1.png'],
    shortTitle: text('Единая система\nдля производства', 'One connected\nmanufacturing system'),
    tagline: text('Планирование, статусы заказов и запасы вместо разрозненных таблиц.', 'Planning, order statuses, and inventory instead of scattered spreadsheets.'),
  },
  idol: {
    color: '#dbaba6',
    mediaKind: 'computer',
    images: ['/uploads/idol/Dashboard.png'],
    shortTitle: text('AI-пространство\nдля креаторов', 'An AI workspace\nfor creators'),
    tagline: text('Концепция платформы для создания контента, работы со знаниями и планирования публикаций.', 'A platform concept for content creation, knowledge, and publication planning.'),
  },
  kaspi: {
    color: '#f2ce7a',
    mediaKind: 'phones',
    images: ['/uploads/kaspi/Main page of Afisha.png', '/uploads/kaspi/Choose place.png'],
    shortTitle: text('Билет в кино\nвнутри Kaspi', 'Movie tickets\ninside Kaspi'),
    tagline: text('Тестовый концепт: афиша, выбор мест и привычный сценарий оплаты.', 'A design assignment: discovery, seat selection, and familiar payments.'),
  },
  bao: {
    color: '#e4af86',
    mediaKind: 'phones',
    images: ['/uploads/bao/main.png', '/uploads/bao/cart.png'],
    shortTitle: text('Доставка напрямую\nиз BAO', 'Delivery directly\nfrom BAO'),
    tagline: text('В приложении BAO гости выбирают блюда, заказывают доставку и следят за статусом заказа.', 'In the BAO app, guests can browse the menu, order delivery, and check their order status.'),
  },
  taza: {
    color: '#c7ccc1',
    mediaKind: 'phones',
    images: ['/uploads/taza/Главная.png', '/uploads/taza/Страница заказа.png'],
    shortTitle: text('Оптовые закупки\nв одном интерфейсе', 'Wholesale purchasing\nin one interface'),
    tagline: text('B2B-каталог, аукционы, счета и оформление заказов.', 'A B2B catalog, auctions, invoices, and ordering.'),
  },
};

function translated(value, fallback = '') {
  if (value && typeof value === 'object') {
    return {ru: value.ru || value.en || fallback, en: value.en || value.ru || fallback};
  }
  return text(value || fallback, value || fallback);
}

export function getReferenceStyle(project) {
  const style = presentation[project?.slug];
  if (style) return style;
  return {
    color: '#d1c4b2',
    mediaKind: 'cover',
    images: [project?.cover || project?.coverImage].filter(Boolean),
    shortTitle: translated(project?.headline || project?.name || project?.title, 'Проект'),
    tagline: translated(project?.summary || project?.description),
  };
}
