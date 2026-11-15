import Image from 'next/image';
import TeaserCaptions from './TeaserCaptions';
import '@/app/showcase-operations-motion.css';

const screens = [
  { file: 'gantt', focus: ['66%', '41%'], ru: ['График выпуска'], en: ['Production schedule'] },
  { file: 'plan', focus: ['27%', '31%'], ru: ['План производства'], en: ['Production plan'] },
  { file: 'raw', focus: ['64%', '57%'], ru: ['Потребность в сырье'], en: ['Material requirements'] },
  { file: 'status', focus: ['38%', '31%'], ru: ['Статусы заказов'], en: ['Order statuses'] },
].map((screen, index, deck) => ({
  ...screen,
  start: 100 * index / deck.length,
  end: 100 * (index + 1) / deck.length,
}));

export default function AvroraMotion({ lang }) {
  return (
    <div className="od-avrora">
      <TeaserCaptions beats={screens} lang={lang} />
      <div className="od-avrora-deck">
        {screens.map(({ file, focus }, index) => (
          <div
            className="od-avrora-sheet od-motion-layer"
            key={file}
            style={{
              '--sheet-phase': index === 0 ? '0s' : (index - screens.length) * 2.5 + 's',
              '--focus-x': focus[0],
              '--focus-y': focus[1],
            }}
          >
            <div className="od-avrora-screen">
              <Image
                src={'/showcase/avrora-motion/' + file + '.webp'}
                alt=""
                fill
                quality={90}
                loading="eager"
                sizes="(min-width: 1440px) 287px, (min-width: 1024px) 25vw, 80vw"
              />
              <span className="od-avrora-focus od-motion-layer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
