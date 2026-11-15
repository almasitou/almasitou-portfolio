import EclubMotion from './EclubMotion';

export { default as AvroraMotion } from './AvroraMotion';

export function MerchantMotion({ lang }) {
  return <EclubMotion mode="merchant" lang={lang} />;
}
