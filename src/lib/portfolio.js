// Summaries adapted from the original case studies; no new research or metrics.
const p = (ru, en) => ({ ru, en });
export const localize = (v, lang) => typeof v === 'object' && v !== null ? v[lang] || v.en : v;
export const caseStudies = [
  {
    slug: 'rrs', ids: ['rrs'], name: 'RRS терминал', year: '2022–2025', category: 'AI · FoodTech', kind: 'product',
    type: p('Коммерческий продукт', 'Commercial product'), role: 'Lead Product Designer', platform: 'Touch kiosk · Web', color: '#c5dcf3', cover: '/uploads/chaickout/cover-hero.jpg',
    headline: p('Касса, которая понимает человека', 'Self-checkout that understands people'),
    summary: p('AI-касса для ресторанов: от распознавания блюд до оплаты — в одном понятном сценарии.', 'AI checkout for restaurants: from recognizing a meal to payment, in one clear flow.'),
    challenge: p('В обеденный час скорость кассы определяет длину очереди. AI убирает ручной ввод, но интерфейс должен оставаться понятным даже при ошибках распознавания.', 'At lunchtime, checkout speed determines the queue. AI removes manual entry, but the interface needs to remain clear even when recognition fails.'),
    contribution: p('Проектировал сенсорный интерфейс и сценарии самообслуживания: от первого действия у терминала до проверки заказа, оплаты и восстановления после ошибок.', 'Designed touch interfaces and self-service flows, from the first interaction to order review, payment, and error recovery.'),
    decisions: [
      { title: p('Один экран — одно действие', 'One screen, one action'), text: p('Разделил процесс на понятные шаги: поставить поднос, проверить заказ, оплатить, забрать чек. Крупные элементы управления рассчитаны на сенсорный экран.', 'Split checkout into clear steps: place the tray, review, pay, and collect the receipt. Large controls suit a touch screen.'), image: '/uploads/chaickout/tap-to-recognize.png' },
      { title: p('Ошибку можно исправить', 'Recognition is recoverable'), text: p('Предусмотрел ручной выбор и уточнение блюда, поиск в меню и ситуации с перекрывающимися тарелками. Заказ можно продолжить, даже если AI не справился.', 'Added manual dish selection, search, and recovery for overlapping plates. Customers can continue even when recognition fails.'), image: '/uploads/chaickout/specify-dish.png' },
      { title: p('Понятный финал покупки', 'A clear finish'), text: p('Отдельные состояния оплаты и успеха показывают, что происходит сейчас и что делать дальше. Это важно для человека, который впервые видит терминал.', 'Dedicated payment and success states explain what is happening and what to do next, especially for first-time visitors.'), image: '/uploads/chaickout/bring-card.png' },
    ],
    outcome: p('Система интерфейсов охватывает основной заказ и нестандартные ситуации: от пустого подноса до нераспознанного блюда. Ключевой принцип — сохранять контроль у человека на каждом шаге.', 'The interface system covers checkout and exceptions, from an empty tray to an unrecognized dish. The central principle is keeping the customer in control.'),
    gallery: ['/uploads/chaickout/my-order.png', '/uploads/chaickout/menu-search.png', '/uploads/chaickout/empty-tray.png', '/uploads/chaickout/success.png'],
  },
  {
    slug: 'skibo', ids: ['cmqjeakgy0000vxltp4qj7ks1'], name: 'Skibo', year: '2025', category: 'B2C · Ecosystem', kind: 'product', type: p('Коммерческий продукт', 'Commercial product'), role: 'Product Designer', platform: 'iOS · Android · CRM', color: '#d8d0ef', cover: '/uploads/skibo/cover-main.png',
    headline: p('Больше времени на склоне. Меньше — в очереди.', 'More time on the slopes. Less time in line.'),
    summary: p('Приложение для райдеров и CRM проката. Единая система от подбора экипировки до выдачи.', 'A rider app and rental CRM. One system, from choosing gear to picking it up.'),
    challenge: p('В сезон клиенты приезжали одновременно, сотрудники подбирали инвентарь и оформляли бумаги на месте. До приезда нельзя было узнать, есть ли нужная модель и размер.', 'During peak season, customers arrived at once while staff selected equipment and processed paperwork. Riders could not check model or size availability beforehand.'),
    contribution: p('Работал над исследованием, сценариями, прототипами и UI двух сторон сервиса: приложения клиента и рабочего инструмента сотрудника.', 'Worked on research, user flows, prototypes, and UI for both sides: the customer app and the staff workspace.'),
    decisions: [
      { title: p('Подбор до приезда', 'Find the right gear beforehand'), text: p('Рост, вес и уровень подготовки помогают подобрать комплект заранее. Доступность становится частью выбора, а не сюрпризом на точке выдачи.', 'Height, weight, and experience guide gear selection in advance. Availability becomes part of the decision rather than a surprise at pickup.'), image: '/uploads/skibo/combo_page.png' },
      { title: p('Всё оформление в приложении', 'Complete the booking in the app'), text: p('Объединил выбор дат, комплект, договор и оплату в последовательный сценарий. На точке проката остаётся получить забронированную экипировку.', 'Connected dates, equipment, contracts, and payment in a sequential flow. Riders then collect their booking at the rental point.'), image: '/uploads/skibo/booking.png' },
      { title: p('Вторая сторона сервиса', 'The other side of the service'), text: p('CRM связывает заказ с доступным инвентарём. Статусы и состав комплекта помогают понять, что готово к выдаче и чего не хватает.', 'The CRM links orders with available inventory. Statuses and equipment lists show what is ready for pickup and what is missing.'), image: '/uploads/skibo/admin_orders.png' },
    ],
    outcome: p('Спроектирована связанная экосистема приложения и CRM. Бронирование, документы и оплата перенесены в цифровой сценарий, а сотрудник видит заказ и инвентарь в одном пространстве.', 'Designed a connected app and CRM ecosystem. Booking, documents, and payment move into a digital flow, while staff see orders and inventory in one workspace.'),
    gallery: ['/uploads/skibo/main_page.png', '/uploads/skibo/cart.png', '/uploads/skibo/admin_items_manage_page.png', '/uploads/skibo/payment_success.png'],
  },
  {
    slug: 'avrora', ids: ['avrora', 'aurora'], name: 'Avrora Holdings', year: 'Enterprise', category: 'B2B · Enterprise', kind: 'product', type: p('Коммерческий продукт', 'Commercial product'), role: 'Lead Product Designer', platform: 'Web · ERP', color: '#d4e1d9', cover: '/uploads/avrora/avrora_cover.png',
    headline: p('Производство. Вся картина в одном месте.', 'Manufacturing. The whole picture in one place.'),
    summary: p('Платформа для производства, запасов и поставок вместо разрозненных таблиц и переписок.', 'A platform for manufacturing, inventory, and supply instead of scattered spreadsheets and messages.'),
    challenge: p('Данные о производстве, сырье и заказах распределены между переписками, почтой и Excel. Чтобы узнать статус, приходилось собирать картину из нескольких источников.', 'Manufacturing, raw materials, and order data were spread across messages, email, and Excel. Understanding a status meant piecing together several sources.'),
    contribution: p('Проектировал внутреннюю платформу: архитектуру, производственное планирование, статусы заказов, запасы и управление пользователями.', 'Designed the internal platform: architecture, production planning, order tracking, inventory, and user management.'),
    decisions: [
      { title: p('От процесса к структуре', 'Structure follows the process'), text: p('Разделил пространство по реальным задачам: план производства, сырьё, движение запасов и пользователи. Каждая область сохраняет общий контекст.', 'Organized the workspace around real tasks: production plans, raw materials, inventory movement, and users. Each area retains shared context.'), image: '/uploads/avrora/production_plan_1.png' },
      { title: p('Статус без лишних вопросов', 'Status without a follow-up'), text: p('Сделал этапы выполнения заказа видимыми. Трекинг помогает понять текущее состояние и следующий шаг без поиска в переписке.', 'Made order stages visible. Tracking communicates the current state and next step without searching through messages.'), image: '/uploads/avrora/status_tracking.png' },
      { title: p('Плотность с приоритетами', 'Density with priorities'), text: p('В рабочих таблицах важны сравнение строк и быстрый поиск значений. Иерархия и группировка сохраняют обзор при большом объёме данных.', 'Operational tables need row comparison and fast access to values. Hierarchy and grouping preserve an overview across large datasets.'), image: '/uploads/avrora/raw_materials.png' },
    ],
    outcome: p('Создана единая структура для ключевых производственных процессов. План, статусы, запасы и пользователи объединены в согласованный интерфейс.', 'Created one structure for core manufacturing processes. Planning, statuses, inventory, and users come together in a consistent interface.'),
    gallery: ['/uploads/avrora/turnover_1.png', '/uploads/avrora/users_1.png', '/uploads/avrora/turnover_2.png'],
  },
  {
    slug: 'kaspi', ids: ['cmqjeakqk0001vxltptpxytw5'], name: 'Kaspi / Cinema', year: '2026', category: 'Fintech · Concept', kind: 'concept', type: p('Тестовое задание · концепт', 'Design assignment · concept'), role: 'Product Designer', platform: 'Mobile', color: '#efc8bd', cover: '/uploads/kaspi/cover-main.jpg',
    headline: p('Билет в кино — внутри привычного приложения', 'Movie tickets in an app you already know'),
    summary: p('Концепция билетного сервиса для Kaspi: афиша, выбор мест и знакомая оплата.', 'A ticketing concept for Kaspi: discovery, seat selection, and familiar payments.'),
    challenge: p('Как добавить билетный сервис в суперприложение, сохранив знакомые паттерны? Архитектура должна учитывать и другие форматы мероприятий.', 'How can ticketing fit into a super-app while keeping familiar patterns? The architecture also needs to accommodate events beyond cinema.'),
    contribution: p('Разработал продуктовую концепцию, архитектуру и интерфейс: от каталога мероприятий до выбора сеанса, мест и электронного билета.', 'Developed the product concept, architecture, and interface, from event discovery to showtimes, seat selection, and digital tickets.'),
    decisions: [
      { title: p('Единый вход в мероприятия', 'One entry point for events'), text: p('Афиша объединяет форматы в общей структуре. Один принцип навигации создаёт основу для кино, театра, концертов и спорта.', 'The event listing brings formats into a common structure. One navigation model provides a foundation for cinema, theatre, concerts, and sports.'), image: '/uploads/kaspi/Main page of Afisha.png' },
      { title: p('Наглядный выбор места', 'Visual seat selection'), text: p('Схема зала связывает выбор мест с покупкой. Пользователь видит доступность и сохраняет контекст выбранного сеанса.', 'The seating plan connects seat choice with purchase. Customers see availability while keeping the selected showtime in context.'), image: '/uploads/kaspi/Choose place.png' },
      { title: p('Билет остаётся под рукой', 'The ticket stays within reach'), text: p('После покупки билет доступен в личном разделе. Важная информация собрана в одном месте для входа на мероприятие.', 'After purchase, the digital ticket remains in a personal section. Key entry information is gathered in one place.'), image: '/uploads/kaspi/My ticket.png' },
    ],
    outcome: p('Проработан концепт сервиса мероприятий внутри Kaspi. Это тестовое задание: экраны не означают запуск сервиса или коммерческое сотрудничество с Kaspi.', 'Developed an event-service concept within Kaspi. This is a design assignment; the screens do not represent a launched service or a commercial engagement with Kaspi.'),
    gallery: ['/uploads/kaspi/Search in main page.png', '/uploads/kaspi/Buy.png', '/uploads/kaspi/My tickets.png'],
  },
  {
    slug: 'idol', ids: ['cmqjeal060003vxlt80svpske'], name: 'IDOL', year: '2026', category: 'AI · SaaS concept', kind: 'concept', type: p('Продуктовая инициатива · концепт', 'Product initiative · concept'), role: 'Product Designer', platform: 'Web · SaaS', color: '#c5c6ec', cover: '/uploads/idol/cover-main.png',
    headline: p('Рабочее пространство для создания и планирования контента', 'A workspace for creating and scheduling content'),
    summary: p('Концепция AI-платформы: создание контента, библиотека знаний и планирование публикаций.', 'An AI platform concept for content creation, a knowledge library, and publication planning.'),
    challenge: p('Контент создаётся в генераторах, заметках, календарях и соцсетях. При переходе между ними теряются контекст проекта и история решений.', 'Content creation is spread across generators, notes, calendars, and social platforms. Switching tools breaks project context and decision history.'),
    contribution: p('Сформировал продуктовую концепцию и спроектировал архитектуру: AI-студию, библиотеку промптов, планировщик и пространство взаимодействия креаторов.', 'Defined the product concept and designed the architecture: an AI studio, prompt library, planner, and creator collaboration space.'),
    decisions: [
      { title: p('Контекст вместо отдельных запросов', 'Context beyond individual prompts'), text: p('Объединил инструменты вокруг проекта. Рабочее пространство связывает материалы, задачи и историю работы в единую систему.', 'Organized tools around projects. The workspace connects assets, tasks, and work history within one system.'), image: '/uploads/idol/Dashboard.png' },
      { title: p('От генерации до публикации', 'From generation to publication'), text: p('Планировщик продолжает сценарий создания контента. Подготовка и расписание публикаций находятся в одном продуктовом контуре.', 'The planner extends content creation into scheduling. Preparation and publication planning share the same product context.'), image: '/uploads/idol/content_planner.png' },
      { title: p('Пространство для сотрудничества', 'A space for collaboration'), text: p('Маркетплейс дополняет инструменты производства возможностью взаимодействия между авторами и заказчиками.', 'The marketplace adds collaboration between creators and clients to the production toolkit.'), image: '/uploads/idol/creator_marketplace.png' },
    ],
    outcome: p('В концепте объединил материалы, промпты, историю и план публикаций внутри одного проекта.', 'In the concept, I brought assets, prompts, work history, and the publishing schedule together within each project.'),
    gallery: ['/uploads/idol/Studio -_ Explore.png', '/uploads/idol/Talent Roster.png'],
  },
  {
    slug: 'bao', ids: ['cmqjeakvd0002vxltgwlxjlo9'], name: 'BAO', year: '2023', category: 'B2C · Food delivery', kind: 'product', type: p('Коммерческий продукт', 'Commercial product'), role: 'Product Designer', platform: 'Mobile', color: '#f1c995', cover: '/uploads/bao/cover-main.jpg',
    headline: p('Доставка напрямую из BAO', 'Delivery directly from BAO'),
    summary: p('В приложении BAO гости выбирают блюда, заказывают доставку и следят за статусом заказа.', 'In the BAO app, guests can browse the menu, order delivery, and check their order status.'),
    challenge: p('Заказ должен быть удобным и для знакомства с меню, и для возвращения за любимым блюдом. Каталог, корзина и доставка должны работать как единый сценарий.', 'Ordering needs to work for discovering the menu and returning for a favourite dish. The catalog, cart, and delivery should form one flow.'),
    contribution: p('Спроектировал приложение: каталог и поиск, карточку блюда, корзину, доставку, профиль и историю заказов.', 'Designed the app: catalog and search, dish details, cart, delivery, profile, and order history.'),
    decisions: [
      { title: p('Меню с визуальным приоритетом', 'A visual-first menu'), text: p('Фотографии блюд и категории помогают ориентироваться. Детали открываются по мере выбора, сохраняя компактность каталога.', 'Food photography and categories help customers navigate. Details appear as they choose, keeping the catalog compact.'), image: '/uploads/bao/main.png' },
      { title: p('Заказ с понятным составом', 'An order you can review'), text: p('Корзина отделяет просмотр меню от оформления. Можно проверить позиции и количество до перехода к доставке.', 'The cart separates browsing from checkout. Customers can review items and quantities before arranging delivery.'), image: '/uploads/bao/cart.png' },
      { title: p('Удобно вернуться', 'Easy to come back'), text: p('История заказов, сохранённые адреса и профиль поддерживают повторное использование сервиса.', 'Order history, saved addresses, and a profile support returning customers.'), image: '/uploads/bao/orders.png' },
    ],
    outcome: p('Создан связанный мобильный сценарий от выбора блюд до доставки. Визуальная система поддерживает характер бренда и ежедневные задачи пользователя.', 'Created a connected mobile journey from menu selection to delivery checkout. The visual system supports the brand and everyday customer tasks.'),
    gallery: ['/uploads/bao/foods page.png', '/uploads/bao/check out - delivery.png', '/uploads/bao/profile.png'],
  },
  {
    slug: 'taza', ids: ['cmqjeal510004vxlt8hmvmcr6'], name: 'Taza Store', year: '2022', category: 'B2B · Commerce', kind: 'product', type: p('Коммерческий продукт', 'Commercial product'), role: 'Product Designer', platform: 'Mobile · B2B', color: '#dbe8c9', cover: '/uploads/taza/cover-main.png',
    headline: p('Закупка расходных материалов, счета и статус поставки', 'Purchasing supplies, managing invoices, and tracking deliveries'),
    summary: p('B2B-сервис для закупки расходных материалов: каталог, счета и прозрачный статус поставки.', 'A B2B purchasing service for consumables: catalog, invoices, and clear delivery status.'),
    challenge: p('Для бизнеса закупка — повторяющаяся рабочая задача. Важны скорость оформления, документы и прозрачность заказа, а не механики импульсной покупки.', 'For businesses, procurement is a recurring job. Fast checkout, documentation, and order visibility matter more than impulse purchases.'),
    contribution: p('Проектировал мобильный B2B-сервис: структуру каталога, оформление заказа, счета, отслеживание и личный кабинет.', 'Designed the mobile B2B service: catalog structure, checkout, invoices, tracking, and the customer account.'),
    decisions: [
      { title: p('Каталог для рабочих закупок', 'A catalog for business purchasing'), text: p('Собрал выбор товаров в структуру с карточками и корзиной. Сценарий ориентирован на регулярную задачу снабжения.', 'Structured product selection around clear listings and a cart, supporting recurring procurement.'), image: '/uploads/taza/Главная.png' },
      { title: p('Документы рядом с заказом', 'Documents alongside orders'), text: p('Выделил счета в отдельный раздел. К финансовой части закупки можно вернуться без поиска в переписках.', 'Gave invoices a dedicated section. Customers can return to purchasing documents without searching messages.'), image: '/uploads/taza/Мои счета.png' },
      { title: p('Поставка остаётся видимой', 'Keep the delivery visible'), text: p('Экран заказа показывает состав и состояние. Он сохраняет контекст после оформления и помогает следить за выполнением.', 'The order screen shows contents and status. It retains context after checkout and helps track progress.'), image: '/uploads/taza/Страница заказа.png' },
    ],
    outcome: p('Спроектировал путь закупщика от каталога до отслеживания поставки. После оформления счета доступны в отдельном разделе, а состав и статус поставки видны в карточке заказа.', 'I designed the purchasing flow from browsing the catalog to tracking delivery. After checkout, buyers can find invoices in a dedicated section and see what they ordered and its delivery status on the order page.'),
    gallery: ['/uploads/taza/Корзина.png', '/uploads/taza/Оформление заказа.png', '/uploads/taza/Профиль.png'],
  },
];
export const findCase = (slug) => caseStudies.find(item => item.slug === slug || item.ids.includes(slug));

// Research and validation already documented in the original case components.
Object.assign(caseStudies.find(item => item.slug === 'skibo'), {
  type: p('Коммерческий проект · до разработки', 'Commercial project · pre-development'),
  research: {
    title: p('Проверить сценарий до разработки', 'Validate the journey before development'),
    body: p('Изучил сервисы аренды и маркетплейсы с похожей логикой. Затем проверили интерактивный прототип с потенциальными клиентами: могут ли они самостоятельно выбрать экипировку и завершить бронирование?', 'Analyzed rental services and marketplaces with similar logic. We then tested the interactive prototype with potential customers: could they choose gear and complete a booking independently?'),
    points: [p('Наличие нужного размера важно понимать заранее.', 'Size availability needs to be clear in advance.'), p('Документы и оплата на месте увеличивают время обслуживания.', 'On-site paperwork and payment add to service time.'), p('Обратная связь помогла уточнить структуру экранов и шаги аренды.', 'Feedback informed screen structure and individual rental steps.')],
    image: '/uploads/skibo/ux_test.jpeg',
  },
  outcome: p('Спроектирован полный сценарий аренды: от подбора экипировки до договора и оплаты, а также CRM для сотрудников. Проект не был запущен в разработку, поэтому количественных результатов после релиза нет. Основной результат этой работы — связанная и проверенная в прототипе логика сервиса.', 'Designed the complete rental journey, from equipment selection to contracts and payment, plus a staff CRM. The project did not enter development, so there are no post-launch quantitative results. The outcome is a connected service flow explored and validated through a prototype.'),
});
Object.assign(caseStudies.find(item => item.slug === 'avrora'), {
  research: {
    title: p('Сначала — реальное производство', 'Start with the actual factory'),
    body: p('До проектирования команда работала непосредственно на предприятии: наблюдала за сотрудниками, изучала процессы и проводила интервью. Это помогло увидеть, где между отделами теряются время и данные.', 'Before designing, the team worked on site: observing employees, studying processes, and conducting interviews. This helped identify where time and information were lost between departments.'),
    points: [p('Наблюдение за работой и интервью с сотрудниками.', 'Workplace observation and employee interviews.'), p('Карта взаимодействий между отделами.', 'Mapping interactions between departments.'), p('Ключевые сценарии проверялись совместно с директором предприятия.', 'Key scenarios were validated together with the enterprise director.')],
  },
});
caseStudies.find(item => item.slug === 'taza').role = 'UX/UI Designer';
