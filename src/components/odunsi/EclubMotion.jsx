import Image from 'next/image';
import { MousePointer2 } from 'lucide-react';
import assets from '@/lib/odunsi-assets.json';
import MerchantDashboardScreen from './MerchantDashboardScreen';
import TeaserCaptions from './TeaserCaptions';
import '@/app/odunsi-eclub-motion.css';

const merchant = [
  { start: 0, end: 45, asset: 'merchant-dashboard-full', action: [5, 44],
    ru: ['Состояние магазина', 'Выручка и заказы на одном дашборде.'],
    en: ['Store at a glance', 'Revenue and orders on one dashboard.'] },
  { start: 45, end: 72, asset: 'merchant-products-full', action: [5, 26],
    ru: ['Товары и остатки', 'Видно, что в продаже и что на проверке.'],
    en: ['Products and stock', 'See what’s live and what’s under review.'] },
  { start: 72, end: 100, asset: 'merchant-orders-full', action: [89.8, 46], actionAt: 91,
    ru: ['Как выдать заказ?', 'Срок и способ вручения видны в строке.'],
    en: ['Ready to fulfil?', 'See the deadline and delivery method in each row.'] },
];

const buyer = [
  { start: 0, end: 23, asset: 'b2c-search-full', action: [41, 43],
    ru: ['Один товар, разные продавцы', 'Начни с поиска и сравни предложения.'],
    en: ['One product, many sellers', 'Search and compare the available offers.'] },
  { start: 23, end: 47, asset: 'b2c-product-full', action: [76, 41],
    ru: ['Сравни условия', 'Комплектация и цена видны до покупки.'],
    en: ['Check the details', 'See the specs and price before buying.'] },
  { start: 47, end: 68, asset: 'b2c-cart-full', action: [73, 44],
    ru: ['Сверь корзину', 'Количество и итог меняются на одном экране.'],
    en: ['Review your cart', 'Quantity and total stay together.'] },
  { start: 68, end: 84, asset: 'b2c-card-full', action: [70, 37],
    ru: ['Оплати заказ', 'Состав заказа остаётся рядом с оплатой.'],
    en: ['Pay for your order', 'Keep the order summary in view while paying.'] },
  { start: 84, end: 100, asset: 'b2c-success-full',
    ru: ['Покупка оформлена', 'Подтверждение сразу после оплаты.'],
    en: ['Order placed', 'Confirmation appears as soon as you pay.'] },
];

function DesktopScreen({ scene }) {
  const { asset, start, end, action, actionAt = end } = scene;
  const viewport = assets[asset];
  const dashboard = asset === 'merchant-dashboard-full';
  const sizes = '(min-width: 1024px) 460px, 86vw';

  return (
    <div className="od-eclub-frame od-motion-layer" data-screen={asset} style={{
      '--screen-in': start + '%',
      '--screen-ready': (start + 1.6) + '%',
      '--screen-hold': (end === 100 ? 98.4 : end + 1.6) + '%',
      '--screen-out': Math.min(100, end + 1.6) + '%',
    }}>
      {dashboard ? (
        <MerchantDashboardScreen screen={viewport.fullScreen} sizes={sizes} panClass="od-eclub-dashboard-pan od-motion-layer" />
      ) : (
        <Image src={viewport.src} alt="" fill sizes={sizes} quality={90} loading="eager" />
      )}
      {action && (
        <MousePointer2 className="od-eclub-pointer od-motion-layer" style={{
          left: action[0] + '%',
          top: action[1] + '%',
          '--pointer-in': (actionAt - 8.5) + '%',
          '--pointer-arrive': (actionAt - 3.2) + '%',
          '--pointer-press': (actionAt - 1.1) + '%',
          '--pointer-out': actionAt + '%',
        }} />
      )}
    </div>
  );
}

export default function EclubMotion({ mode, lang }) {
  const hardware = mode === 'merchant';
  const sequence = hardware ? merchant : buyer;

  return (
    <div className={`od-eclub-preview od-eclub-preview--${mode}`}>
      <TeaserCaptions beats={sequence} lang={lang} layout={hardware ? 'side' : 'top'} />
      <div className="od-eclub-device od-motion-layer">
        <div className="od-eclub-display">
          {sequence.map(scene => <DesktopScreen key={scene.asset} scene={scene} />)}
        </div>
        {hardware && <div className="od-eclub-laptop-base" />}
      </div>
    </div>
  );
}
