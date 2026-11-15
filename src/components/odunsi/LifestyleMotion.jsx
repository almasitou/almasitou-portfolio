import { SkiboTeaserPhone } from './SkiboPreviewScreens';
import '@/app/odunsi-skibo-screens.css';

const skiboCopy = {
  ru: [
    [['Прокат', 'без очереди'], 'Забронируй экипировку заранее и забери её в выбранное время.'],
    [['Собери', 'комплект'], 'Выбери размер и время аренды заранее.'],
    [['Оформи', 'в приложении'], 'Подпиши договор и оплати до поездки.'],
    [['На склон.'], 'Прокат видит заказ до твоего приезда.'],
  ],
  en: [
    [['Skip the', 'rental line'], 'Book your gear in advance and pick it up at your chosen time.'],
    [['Pick your', 'gear'], 'Choose your size and rental time in advance.'],
    [['Book in', 'the app'], 'Sign the agreement and pay before the trip.'],
    [['Hit the slopes.'], 'The shop gets your order before you arrive.'],
  ],
};

const skiboBeats = ['queue', 'gear', 'booking', 'finish'];

function SkiboBeat({ beat, lines, detail }) {
  let wordIndex = 0;

  return (
    <div className={`od-ski-copy od-ski-copy--${beat} od-motion-layer`}>
      <p className="od-ski-headline">
        {lines.map(line => (
          <span className="od-ski-headline-line" key={line}>
            {line.split(' ').map((word, index) => (
              <span className="od-ski-word" key={index}>
                <span className="od-ski-word-reveal od-motion-layer" style={{ '--word-index': wordIndex++ }}>{word}</span>
              </span>
            ))}
          </span>
        ))}
      </p>
      <p className="od-ski-detail">{detail}</p>
    </div>
  );
}

export function SkiboMotion({ lang }) {
  const copy = skiboCopy[lang] ?? skiboCopy.en;

  return (
    <div className="od-ski">
      <SkiboTeaserPhone />
      {copy.map(([lines, detail], index) => (
        <SkiboBeat key={skiboBeats[index]} beat={skiboBeats[index]} lines={lines} detail={detail} />
      ))}
    </div>
  );
}

