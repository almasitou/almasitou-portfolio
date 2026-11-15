import Image from 'next/image';
import IPhoneFrame from './IPhoneFrame';
import TeaserCaptions from './TeaserCaptions';
import '@/app/showcase-bao-motion.css';

const beats = [
  { start: 0, end: 22,
    ru: ['Доставка напрямую', 'Любимые блюда можно заказать у самого BAO.'],
    en: ['Direct from BAO', 'Order your favourite dishes in the app.'] },
  { start: 22, end: 46,
    ru: ['Найди любимое', 'Категории и поиск помогают выбрать блюдо.'],
    en: ['Find a favourite', 'Browse by category or search for a dish.'] },
  { start: 46, end: 78,
    ru: ['Проверь сумму', 'Доставка, скидка и итог видны до оплаты.'],
    en: ['Check the total', 'See delivery, discounts and the total before paying.'] },
  { start: 78, end: 100,
    ru: ['Заказ оформлен', 'Его статус можно проверить в профиле.'],
    en: ['Order placed', 'Check the order status from your profile.'] },
];

export default function BaoMotion({ lang }) {
  return (
    <div className="od-bao-teaser">
      <TeaserCaptions beats={beats} lang={lang} layout="side" />
      <div className="od-bao-tray od-motion-layer">
        <Image src="/showcase/bao-motion/dish.webp" alt="" fill sizes="min(54vw, 170px)" quality={90} loading="eager" />
      </div>
      <IPhoneFrame className="od-bao-phone od-motion-layer">
        {['menu', 'cart', 'delivery', 'paid'].map(step => (
          <div className="od-bao-shot od-motion-layer" data-step={step} key={step}>
            <Image src={`/showcase/bao-motion/${step}.webp`} alt="" fill sizes="(min-width: 1024px) 186px, 42vw" loading="eager" />
          </div>
        ))}
      </IPhoneFrame>
    </div>
  );
}
