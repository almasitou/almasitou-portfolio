import Image from 'next/image';
import { Check } from 'lucide-react';
import '@/app/odunsi-rrs-motion.css';

const dishes = [
  ['drink', 'Pepsi 0.5', 'Pepsi 0.5', '2 × 1,00 €'],
  ['soup', 'Итальянский суп', 'Italian soup', '20,00 €'],
  ['cutlets', 'Котлеты', 'Cutlets', '35,70 €'],
  ['bread', 'Хлеб', 'Basket of bread', '3,50 €'],
];

function Tray({ prompt, scanLabel }) {
  return (
    <div className="od-rrs-tray">
      <div className="od-rrs-tray-art">
        <Image src="/odunsi/layers/rrs-tray.webp" alt="" width={960} height={520} loading="eager" unoptimized />
        {scanLabel && (
          <div className="od-rrs-scan-window">
            <div className="od-rrs-scan-beam od-motion-layer" />
          </div>
        )}
      </div>
      <div className="od-rrs-tray-caption od-motion-layer">
        <div className={scanLabel ? 'od-rrs-tray-line od-rrs-tray-prompt od-motion-layer' : 'od-rrs-tray-line'}>
          {prompt}
        </div>
        {scanLabel && (
          <div className="od-rrs-tray-line od-rrs-scan-caption od-motion-layer">
            {scanLabel}
            <span className="od-rrs-scan-progress">
              {[0, 1, 2].map(index => (
                <span className="od-rrs-scan-dot od-motion-layer" key={index} style={{ '--scan-step': `${index * 145}ms` }} />
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RrsMotion({ lang }) {
  const ru = lang === 'ru';
  const prompt = ru ? 'Распознать блюда' : 'Tap to recognize';
  return (
    <div className="od-rrs-motion">
      <div className="od-rrs-scenes">
        <div className="od-rrs-scene od-rrs-scene--start od-motion-layer">
          <Tray prompt={prompt} scanLabel={ru ? 'Камера распознаёт блюда' : 'Recognizing dishes'} />
        </div>
        <div className="od-rrs-scene od-rrs-scene--order od-motion-layer">
          <div className="od-rrs-order">
            {dishes.map(([photo, nameRu, nameEn, price], index) => (
              <div className="od-rrs-dish od-motion-layer" key={photo} style={{ '--dish-stagger': `${index * 55}ms` }}>
                <Image src={`/odunsi/layers/rrs-${photo}.webp`} alt="" width={224} height={229}
                  loading="eager" unoptimized />
                <strong className="od-rrs-dish-label od-motion-layer">{ru ? nameRu : nameEn}</strong>
                <span className="od-rrs-dish-label od-motion-layer">{price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="od-rrs-scene od-rrs-scene--payment od-motion-layer">
          <div className="od-rrs-checkout">
            <div className="od-rrs-content-window">
              <div className="od-rrs-amount od-rrs-before-payment od-motion-layer">
                <div className="od-rrs-subtotal"><span>{ru ? 'Сумма без скидки' : 'Total without discount'}</span><span>60,20 €</span></div>
                <div className="od-rrs-subtotal"><span>{ru ? 'Скидка' : 'Discount'}</span><span>−20,00 €</span></div>
                <div className="od-rrs-total"><span>{ru ? 'К оплате' : 'To pay'}</span><strong>40,20 €</strong></div>
              </div>
              <div className="od-rrs-confirm od-rrs-after-payment od-motion-layer">
                <Image src="/odunsi/layers/rrs-paid.webp" alt="" width={160} height={124}
                  loading="eager" unoptimized />
                <strong>{ru ? 'Приятного аппетита!' : 'Enjoy your meal!'}</strong>
              </div>
            </div>
            <div className="od-rrs-action od-motion-layer">
              <span className="od-rrs-before-payment od-motion-layer">{ru ? 'Оплатить 40,20 €' : 'Pay 40,20 €'}</span>
              <span className="od-rrs-after-payment od-motion-layer"><Check />{ru ? 'Оплата прошла' : 'Payment successful'}</span>
            </div>
          </div>
        </div>
        <div className="od-rrs-scene od-rrs-result od-motion-layer">
          <div className="od-rrs-metric">
            <div className="od-rrs-metric-row">
              <strong className="od-rrs-metric-reveal od-motion-layer">{ru ? '10–15 секунд' : '10–15 seconds'}</strong>
            </div>
            <div className="od-rrs-metric-row">
              <span className="od-rrs-metric-reveal od-motion-layer">{ru ? '45–60 секунд с кассиром' : '45–60 seconds with a cashier'}</span>
            </div>
            <div className="od-rrs-metric-row od-rrs-metric-detail">
              <small className="od-rrs-metric-reveal od-motion-layer">{ru ? 'Подписка в 3–4 раза дешевле зарплаты кассира' : 'Subscription at ¼–⅓ of a cashier’s salary'}</small>
            </div>
          </div>
        </div>
        <div className="od-rrs-scene od-rrs-scene--return od-motion-layer"><Tray prompt={prompt} /></div>
      </div>
    </div>
  );
}
