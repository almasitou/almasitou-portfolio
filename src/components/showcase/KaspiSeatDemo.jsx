'use client';

import { useState } from 'react';
import IPhoneFrame from './IPhoneFrame';
import { BookingAmount, KaspiNativeImage, TicketDetails } from './KaspiNativePreview';

import '@/app/showcase-commerce-motion.css';

const kaspiDirections = 'https://www.google.com/maps/dir/?api=1&destination=Cinemax+Dostyk+Plaza+Almaty';
const calendarFile = 'data:text/calendar;charset=utf-8,' + encodeURIComponent([
  'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Almas Portfolio//Kaspi Demo//EN', 'BEGIN:VEVENT',
  'UID:kaspi-afisha-demo-20260415-125000@almasitou', 'DTSTAMP:20260415T000000Z', 'DTSTART:20260415T125000Z',
  'SUMMARY:Spider-Man: No Way Home (demo)', 'LOCATION:Cinemax Dostyk Plaza', 'END:VEVENT', 'END:VCALENDAR', '',
].join('\r\n'));

const labels = {
  ru: { session: 'Выбрать сеанс в 17:50', seat: (row, seat) => `Ряд ${row}, место ${seat}`,
    adult: 'Взрослый', child: 'Детский', student: 'Студенческий', pay: 'Оплатить', back: 'Назад',
    ticket: 'Открыть билет', home: 'Вернуться к событию', calendar: 'Добавить в календарь', directions: 'Построить маршрут', qr: 'Показать QR-код', edit: 'Изменить тариф места', remove: 'Убрать место' },
  en: { session: 'Pick the 17:50 screening', seat: (row, seat) => `Row ${row}, seat ${seat}`,
    adult: 'Adult', child: 'Child', student: 'Student', pay: 'Pay', back: 'Back',
    ticket: 'Open ticket', home: 'Return to the event', calendar: 'Add to calendar', directions: 'Get directions', qr: 'Show QR code', edit: 'Edit the seat fare', remove: 'Remove seat' },
};

const prices = { adult: 2000, child: 1500, student: 1700 };
const selectedMap = [
  ['100000000', 403], ['000000001', 514], ['100000000', 625],
  ['110110100', 735], ['010111001', 846],
];
const fareButtons = [['adult', 429, 83], ['child', 526, 82], ['student', 622, 96]];
const money = amount => amount.toLocaleString('ru-RU');
const screenBox = ([x, y, w, h]) => ({
  left: x / 7.5 + '%', top: y / 16.24 + '%', width: w / 7.5 + '%', height: h / 16.24 + '%',
});

function Action({ rect, label, onClick, pressed }) {
  return <button className="od-kaspi-native-hit" type="button" aria-label={label} aria-pressed={pressed}
    onClick={onClick} style={screenBox(rect)} />;
}

function FareRow({ selected, changeFare, labels }) {
  const values = Object.values(selected);
  const active = values.every(fare => fare === values[0]) ? values[0] : '';
  return fareButtons.map(([fare, x, width], index) => (
    <div className="od-kaspi-native-demo-fare" style={screenBox([x, 1130, width, 54])} key={fare}>
      <button type="button" aria-label={labels[fare]} aria-pressed={active === fare} onClick={() => changeFare(fare)}>
        {['Взр', 'Дет', 'Студ'][index]}
      </button>
    </div>
  ));
}

function Seats({ selection, labels, pick }) {
  return selectedMap.flatMap(([row, y], rowIndex) => [...row].flatMap((available, column) => {
    if (available !== '1') return [];
    const rowNumber = rowIndex + 3;
    const seatNumber = column + 5;
    const id = `${rowNumber}-${seatNumber}`;
    const x = Math.max(0, -5 + column * 85);
    const width = Math.min(73, 750 - x);
    const isSelected = Boolean(selection[id]);
    return (
      <button key={id} className="od-kaspi-native-hit od-kaspi-native-demo-seat" type="button"
        style={screenBox([x, y, width, 61])} aria-label={labels.seat(rowNumber, seatNumber)}
        aria-pressed={isSelected} onClick={() => pick(id)} />
    );
  }));
}

export default function KaspiSeatDemo({ lang }) {
  const t = labels[lang] ?? labels.en;
  const [selection, setSelection] = useState({});
  const [step, setStep] = useState('event');
  const [editing, setEditing] = useState(null);
  const picks = Object.entries(selection);
  const total = picks.reduce((amount, [, fare]) => amount + prices[fare], 0);

  function pick(id) {
    const next = { ...selection };
    if (next[id]) delete next[id];
    else next[id] = 'adult';
    setSelection(next);
    setStep('seats');
  }

  function changeFare(fare) {
    setSelection(current => Object.fromEntries(Object.keys(current).map(id => [id, fare])));
  }

  function back() {
    setStep(picks.length ? 'seats' : 'hall');
  }

  function restart() {
    setStep('event');
    setSelection({});
  }

  function editFare(fare) {
    setSelection(current => ({ ...current, [editing]: fare }));
    setEditing(null);
    setStep('seats');
  }

  const rows = [...new Set(picks.map(([id]) => id.split('-')[0]))].sort((a, b) => Number(a) - Number(b));
  const rowLabel = rows.length > 1 ? `${rows.join(', ')} ряды` : `${rows[0]} ряд`;
  const countByFare = Object.keys(prices).flatMap(fare => {
    const count = picks.filter(([, value]) => value === fare).length;
    return count ? [[labels.ru[fare], count]] : [];
  });
  const details = { rows: rowLabel, count: picks.length, total, fares: countByFare };
  const showTickets = step === 'ticket' || step === 'qr';

  return (
    <IPhoneFrame className="od-kaspi-native-demo">
      <div className="od-kaspi-native-demo-page" data-step={step} key={step}>
        <KaspiNativeImage frame={step} />
        {step === 'event' && <Action rect={[24, 1450, 701, 151]} label={t.session} onClick={() => setStep('hall')} />}
        {step === 'hall' && (
          <>
            <Action rect={[0, 63, 120, 86]} label={t.back} onClick={restart} />
            <Action rect={[20, 380, 710, 823]} label={lang === 'ru' ? 'Увеличить схему зала' : 'Zoom into the seat map'} onClick={() => setStep('seats')} />
          </>
        )}
        {step === 'seats' && (
          <>
            <Action rect={[0, 63, 120, 86]} label={t.back} onClick={restart} />
            <Seats selection={selection} labels={t} pick={pick} />
          </>
        )}
        {step === 'seats' && (
          <>
            <FareRow selected={selection} changeFare={changeFare} labels={t} />
            <div className="od-kaspi-native-demo-tickets" style={screenBox([30, 1222, 720, 178])}>
              {picks.map(([id, fare]) => (
                <div className="od-kaspi-native-demo-selected" key={id}>
                  <strong>{labels.ru.seat(...id.split('-'))}</strong>
                  <small>{labels.ru[fare] + ' · ' + money(prices[fare]) + ' ₸'}</small>
                  <button className="od-kaspi-native-demo-remove" type="button" onClick={() => pick(id)} aria-label={t.remove}>×</button>
                  <button className="od-kaspi-native-demo-edit" type="button" onClick={() => { setEditing(id); setStep('edit'); }}
                    aria-label={t.edit}>Изменить</button>
                </div>
              ))}
            </div>
            <button className="od-kaspi-native-total" type="button" disabled={!picks.length} onClick={() => setStep('checkout')}>
              {picks.length ? 'Оплатить ' + money(total) + '₸' : 'Выберите место'}
            </button>
          </>
        )}
        {step === 'edit' && (
          <>
            <span className="od-kaspi-native-demo-sheet-title" style={screenBox([31, 1173, 500, 60])}>
              {labels.ru.seat(...editing.split('-'))}
            </span>
            <Action rect={[650, 1152, 93, 96]} label={t.back} onClick={() => setStep('seats')} />
            {['adult', 'student', 'child'].map((fare, index) => (
              <Action key={fare} rect={[32, 1267 + index * 98, 684, 85]} label={t[fare]} onClick={() => editFare(fare)} />
            ))}
          </>
        )}
        {(step === 'checkout' || step === 'success') && (
          <BookingAmount frame={step} total={total} rows={rowLabel + ' · ' + picks.length + ' мест'} />
        )}
        {step === 'checkout' && (
          <>
            <Action rect={[0, 65, 125, 84]} label={t.back} onClick={back} />
            <Action rect={[30, 1425, 690, 95]} label={t.pay + ' ' + money(total)} onClick={() => setStep('success')} />
          </>
        )}
        {step === 'success' && (
          <>
            <Action rect={[24, 1340, 702, 101]} label={t.home} onClick={restart} />
            <Action rect={[170, 1450, 410, 86]} label={t.ticket} onClick={() => setStep('ticket')} />
          </>
        )}
        {showTickets && (
          <>
            <TicketDetails {...details} barcode={step === 'qr'} />
            <Action rect={[0, 65, 125, 85]} label={t.back} onClick={() => setStep(step === 'qr' ? 'ticket' : 'success')} />
            <a className="od-kaspi-native-hit" style={screenBox([391, step === 'qr' ? 186 : 789, 302, 47])}
              href={calendarFile} download="kaspi-demo-showtime.ics" aria-label={t.calendar} />
            <a className="od-kaspi-native-hit" style={screenBox([401, step === 'qr' ? 340 : 950, 290, 46])}
              href={kaspiDirections} target="_blank" rel="noreferrer" aria-label={t.directions} />
            {step === 'ticket' && <Action rect={[35, 1488, 680, 69]} label={t.qr} onClick={() => setStep('qr')} />}
          </>
        )}
      </div>
    </IPhoneFrame>
  );
}
