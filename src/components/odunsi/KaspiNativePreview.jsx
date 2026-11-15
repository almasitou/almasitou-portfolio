import Image from 'next/image';
import { Trash2 } from 'lucide-react';

const seats = [
  { x: 335, y: 846, row: 7, number: 9 },
  { x: 420, y: 846, row: 7, number: 10 },
  { x: 250, y: 846, row: 7, number: 8 },
  { x: 335, y: 735, row: 6, number: 9 },
  { x: 250, y: 735, row: 6, number: 8 },
  { x: 165, y: 403, row: 3, number: 7 },
  { x: 590, y: 403, row: 3, number: 12 },
  { x: 675, y: 514, row: 4, number: 13 },
  { x: 80, y: 735, row: 6, number: 6 },
  { x: 505, y: 735, row: 6, number: 11 },
];
const bookingRows = '3, 4, 6 и 7 ряды';

// Milliseconds from the start of the cover. The seat taps and captions share this clock.
export const kaspiCoverTiming = {
  duration: 16500,
  hall: [2000, 2460],
  seats: [3560, 4040],
  firstPick: 4120,
  pickInterval: 215,
  groupFare: 6750,
  checkout: [8400, 8880],
  success: [10430, 10910],
  ticket: [12120, 12620],
  qr: [14350, 14780],
  restart: [16050, 16470],
};

export function kaspiCoverPercent(milliseconds) {
  return milliseconds * 100 / kaspiCoverTiming.duration;
}

const frameSteps = ['event', 'hall', 'seats', 'checkout', 'success', 'ticket', 'qr', 'restart'];
const picks = seats.map((seat, index) => ({
  ...seat,
  start: kaspiCoverTiming.firstPick + index * kaspiCoverTiming.pickInterval,
}));

function screenTime([start, end], next) {
  const length = end - start;
  return {
    '--kaspi-frame-in': kaspiCoverPercent(start) + '%',
    '--kaspi-frame-move': kaspiCoverPercent(start + length * .25) + '%',
    '--kaspi-frame-slow': kaspiCoverPercent(start + length * .65) + '%',
    '--kaspi-frame-ready': kaspiCoverPercent(end) + '%',
    '--kaspi-frame-exit': kaspiCoverPercent(next?.[0] ?? kaspiCoverTiming.duration) + '%',
    '--kaspi-frame-exited': kaspiCoverPercent(next?.[1] ?? kaspiCoverTiming.duration) + '%',
  };
}

export function KaspiNativeImage({ frame }) {
  return <Image src={`/odunsi/kaspi-native/${frame}.webp`} fill alt="" loading="eager" unoptimized />;
}

export function BookingAmount({ frame, total = 17000, rows = bookingRows + ' · 10 мест' }) {
  const amount = total.toLocaleString('ru-RU');
  return (
    <>
      <span className="od-kaspi-native-details">{rows}</span>
      <span className="od-kaspi-native-amount">{amount} ₸</span>
      {frame === 'checkout' && <span className="od-kaspi-native-total">Оплатить {amount}₸</span>}
    </>
  );
}

export function TicketDetails({ barcode, rows = bookingRows, count = 10, total = 17000, fares = [['Студенческий', 10]] }) {
  return (
    <div className={`od-kaspi-native-ticket-details${barcode ? ' od-kaspi-native-ticket-details--barcode' : ''}`}>
      <span>Места</span>
      <p className="od-kaspi-native-ticket-row"><b>{rows}</b><b>{count}</b></p>
      <span>Детали</span>
      {fares.map(([label, quantity]) => <p className="od-kaspi-native-ticket-row" key={label}><b>{label}</b><b>{quantity}</b></p>)}
      <p className="od-kaspi-native-ticket-row"><b>Итого</b><b>{total.toLocaleString('ru-RU')} ₸</b></p>
    </div>
  );
}

function SelectedTickets() {
  const laterPicks = picks.slice(2);
  const railStops = laterPicks.flatMap(({ start }, index) => [
    `${index / laterPicks.length} ${kaspiCoverPercent(start)}%`,
    `${(index + 1) / laterPicks.length} ${kaspiCoverPercent(start + 190)}%`,
  ]);

  return (
    <div className="od-kaspi-cover-tickets">
      <div className="od-kaspi-cover-ticket-rail od-motion-layer" style={{
        '--kaspi-rail-stops': railStops.join(', '),
        '--kaspi-rail-distance': laterPicks.length * -56.6 + 'cqw',
      }}>
        {picks.map(({ row, number, start }) => (
          <div className="od-kaspi-cover-ticket od-motion-layer" key={row + '-' + number} style={{
            '--kaspi-pick-start': kaspiCoverPercent(start) + '%',
            '--kaspi-ticket-ready': kaspiCoverPercent(start + 175) + '%',
          }}>
            <strong>{row} ряд, {number} место</strong>
            <Trash2 size="1em" aria-hidden="true" />
            <span className="od-kaspi-cover-ticket-fare">
              <span>Взр · 2 000₸</span>
              <span className="od-kaspi-cover-ticket-student od-motion-layer">Студ · 1 700₸</span>
            </span>
            <span className="od-kaspi-cover-ticket-edit">Изменить</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectionMotion() {
  const { firstPick, groupFare } = kaspiCoverTiming;

  return (
    <>
      {picks.map(({ x, y, start }) => (
        <span className="od-kaspi-native-seat od-motion-layer" style={{
          left: x / 7.5 + '%', top: y / 16.24 + '%',
          '--kaspi-pick-start': kaspiCoverPercent(start) + '%',
          '--kaspi-pick-ready': kaspiCoverPercent(start + 85) + '%',
        }} key={x + '-' + y} />
      ))}
      <span className="od-kaspi-native-adult od-kaspi-native-tag od-motion-layer">Взр</span>
      <span className="od-kaspi-native-group od-kaspi-native-tag od-motion-layer">Студ</span>
      <SelectedTickets />
      <span className="od-kaspi-native-total od-kaspi-cover-empty od-motion-layer"
        style={{ '--kaspi-first-pick': kaspiCoverPercent(firstPick) + '%' }}>Выберите место</span>
      {picks.map(({ start }, index) => (
        <span className="od-kaspi-native-total od-kaspi-native-total--count od-motion-layer"
          style={{
            '--count-start': kaspiCoverPercent(start) + '%',
            '--count-end': kaspiCoverPercent(picks[index + 1]?.start ?? groupFare) + '%',
          }} key={index}>
          Оплатить {((index + 1) * 2000).toLocaleString('ru-RU')}₸
        </span>
      ))}
      <span className="od-kaspi-native-total od-kaspi-native-total--changed od-motion-layer">Оплатить 17 000₸</span>
    </>
  );
}

export default function KaspiNativePreview() {
  return (
    <div className="od-kaspi-phone od-motion-layer">
      <div className="od-kaspi-phone-screen">
        {frameSteps.map((step, index) => (
          <div className="od-kaspi-preview-page od-motion-layer" data-step={step} key={step}
            style={screenTime(kaspiCoverTiming[step] ?? [0, 0], kaspiCoverTiming[frameSteps[index + 1]])}>
            <KaspiNativeImage frame={step === 'restart' ? 'event' : step} />
            {step === 'seats' && <SelectionMotion />}
            {(step === 'checkout' || step === 'success') && <BookingAmount frame={step} />}
            {(step === 'ticket' || step === 'qr') && <TicketDetails barcode={step === 'qr'} />}
          </div>
        ))}
      </div>
      <Image className="od-kaspi-phone-shell" src="/odunsi/kaspi-native/iphone-shell.webp"
        alt="" fill loading="eager" unoptimized />
    </div>
  );
}
