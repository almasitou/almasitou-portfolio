import EclubMotion from './EclubMotion';
import KaspiNativePreview, { kaspiCoverPercent, kaspiCoverTiming } from './KaspiNativePreview';
import TeaserCaptions from './TeaserCaptions';
import '@/app/odunsi-commerce-motion.css';

export function BuyerMotion({ lang }) {
  return <EclubMotion mode="buyer" lang={lang} />;
}

const kaspiBeats = [
  { start: 0,
    ru: ['Выберите событие', 'Один заказ даже для большой компании.'],
    en: ['Choose an event', 'Book the whole group in one order.'] },
  { start: 2200,
    ru: ['10 мест за 10 нажатий', 'Взрослый тариф выбран по умолчанию.'],
    en: ['10 seats in 10 taps', 'An adult fare is selected by default.'] },
  { start: kaspiCoverTiming.groupFare - 220,
    ru: ['Один тариф для всех', 'Смените тариф для всей группы разом.'],
    en: ['One fare for everyone', 'Change the fare for the whole group in one go.'] },
  { start: kaspiCoverTiming.checkout[0] + 150,
    ru: ['Оплата в Kaspi', 'Доступны Kaspi Gold, Red и рассрочка.'],
    en: ['Pay in Kaspi', 'Pay with Kaspi Gold, Red, or instalments.'] },
  { start: kaspiCoverTiming.ticket[0] + 230,
    ru: ['Билет под рукой', 'Добавьте сеанс в календарь или постройте маршрут.'],
    en: ['Ticket at hand', 'Add the event to your calendar or get directions.'] },
].map((beat, index, beats) => ({
  ...beat,
  start: kaspiCoverPercent(beat.start),
  end: kaspiCoverPercent(beats[index + 1]?.start ?? kaspiCoverTiming.restart[0]),
}));

export function KaspiMotion({ lang }) {
  return (
    <div className="od-kaspi-scene" style={{
      '--od-time': kaspiCoverTiming.duration + 'ms',
      '--kaspi-group-fare': kaspiCoverPercent(kaspiCoverTiming.groupFare) + '%',
    }}>
      <div className="od-kaspi-stage">
        <KaspiNativePreview />
      </div>
      <TeaserCaptions beats={kaspiBeats} lang={lang} layout="side" />
    </div>
  );
}
