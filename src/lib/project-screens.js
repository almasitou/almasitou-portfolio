// Product screens from the original case assets. Covers, photos, illustrations,
// and byte-identical Avrora exports are deliberately excluded.
const files = {
  rrs: ['chaickout', [
    'tap-to-recognize.png', 'my-order.png', 'bring-card.png', 'success.png',
    'empty-tray.png', 'specify-dish.png', 'dishes-overlapped.png',
    'alcoholic-drink.png', 'menu-fallback.png', 'menu-search.png',
    'specify-soup-search.png', 'specify-soup.png',
  ]],
  skibo: ['skibo', [
    'main_page.png', 'combo_page.png', 'combo_page_selecting_size.png',
    'cart.png', 'pre_booking.png', 'booking.png', 'payment.png',
    'payment_success.png', 'my_orders.png', 'admin_orders.png',
    'admin_order_info_able_to_give.png', 'admin_order_info_no_items_to_give.png',
    'admin_items_manage_page.png', 'admin_chat_with_clients.png', 'admin_profile_page.png',
  ]],
  avrora: ['avrora', [
    'production_plan_1.png', 'status_tracking.png', 'raw_materials.png',
    'turnover_1.png', 'turnover_2.png', 'turnover_3.png', 'users_1.png', 'users_2.png',
  ]],
  kaspi: ['kaspi', [
    'Main page of Afisha.png', "Movie's page_ tickets_ sort time.png", 'Choose place.png',
    'Buy.png', 'My ticket.png', 'My tickets.png', 'Services.png', 'Search in main page.png',
    'Loader.png', 'Search results.png', "Movie's page_ tickets_ sort time-1.png",
    "Movie's page_ feadback.png", 'Choose place-1.png', 'Choose place-2.png',
    'Success.png', 'My ticket-1.png',
  ]],
  idol: ['idol', [
    'Dashboard.png', 'Studio -_ Explore.png', 'Talent Roster.png',
    'Studio -_ Explore -_ Image -_ AI Chat.png', 'Studio -_ Explore -_ Image.png',
  ]],
  bao: ['bao', [
    'main.png', 'search.png', 'foods page.png', 'order modal.png',
    'cart.png', 'check out - delivery.png', 'seccsess.png', 'orders.png',
    'profile.png', 'profile edit.png', 'my addresses.png', 'adsresses.png',
    'My cards.png', 'enter number.png', 'enter code.png', 'code is entered.png', 'enter name.png',
  ]],
  taza: ['taza', [
    'Главная.png', 'Главная — Ауцион.png', 'Корзина.png', 'Оформление заказа.png',
    'Страница заказа.png', 'Профиль.png',
    'onboard.png', 'onboard-1.png', 'onboard-2.png', 'onboard-3.png',
    'Главная — Ауцион модалка.png', 'Главная — Ауцион модалка аукцион завершен.png',
    'Страница заказа модалка заказа.png', 'Мои аукционы.png', 'Отложанные товары.png',
    'Мои счета.png', 'Модалка товара.png',
  ]],
};

export const projectScreens = Object.fromEntries(Object.entries(files).map(([slug, [directory, names]]) => [
  slug, names.map(name => `/uploads/${directory}/${name}`),
]));

export function getProjectScreens(project) {
  return projectScreens[project.slug] || [...new Set(project.gallery || [])];
}
