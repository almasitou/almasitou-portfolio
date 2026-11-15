import Image from 'next/image';
import assets from '@/lib/showcase-assets.json';
import IPhoneFrame from './IPhoneFrame';
import TeaserCaptions from './TeaserCaptions';
import '@/app/showcase-qalan-motion.css';

const sequence = [
  { asset: 'qalan-reels', start: 0, end: 32,
    ru: ['Английский через мультфильмы', 'Знакомая сцена даёт контекст новой фразе.'],
    en: ['English through cartoons', 'A familiar scene gives a new phrase context.'] },
  { asset: 'qalan-translation', start: 32, end: 64,
    ru: ['Пойми, что сказали', 'Перевод на казахский доступен рядом с репликой.'],
    en: ['Understand the line', 'The Kazakh translation sits next to the dialogue.'] },
  { asset: 'qalan-exercise', start: 64, end: 100,
    ru: ['Попробуй сам', 'Собери услышанную фразу или произнеси её вслух.'],
    en: ['Give it a try', 'Rebuild the line you heard or say it out loud.'] },
];

export default function QalanMotion({ lang }) {
  return (
    <div className="od-qalan-preview">
      <TeaserCaptions beats={sequence} lang={lang} />
      <div className="od-qalan-turntable">
        {sequence.map(({ asset }, index) => (
          <IPhoneFrame key={asset} className={`od-qalan-phone od-motion-layer od-qalan-phone--${index + 1}`}>
            <div className="od-qalan-screen">
              <Image src={assets[asset].src} alt="" fill sizes="(min-width: 1024px) 168px, 35vw" quality={90} loading="eager" />
            </div>
          </IPhoneFrame>
        ))}
      </div>
    </div>
  );
}
