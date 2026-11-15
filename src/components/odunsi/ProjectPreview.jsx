import { BuyerMotion, KaspiMotion } from './CommerceMotion';
import { SkiboMotion } from './LifestyleMotion';
import BaoMotion from './BaoMotion';
import { AvroraMotion, MerchantMotion } from './OperationsMotion';
import RrsMotion from './RrsMotion';
import QalanMotion from './QalanMotion';
import '@/app/odunsi-preview.css';
import '@/app/odunsi-teaser.css';

const scenes = {
  rrs: RrsMotion,
  avrora: AvroraMotion,
  merchant: MerchantMotion,
  b2c: BuyerMotion,
  skibo: SkiboMotion,
  bao: BaoMotion,
  kaspi: KaspiMotion,
  'qalan-english': QalanMotion,
};

export default function ProjectPreview({ slug, lang }) {
  const Scene = scenes[slug];

  return (
    <div className={`od-preview od-preview--${slug}`} aria-hidden="true">
      <Scene lang={lang} />
    </div>
  );
}
