import Image from 'next/image';
import { BatteryFull, Signal, Wifi } from 'lucide-react';
import IPhoneFrame from './IPhoneFrame';

const steps = ['gear', 'agreement', 'checkout', 'paid'];
const screenWidths = '(min-width: 1200px) 200px, (min-width: 1024px) 16vw, 44vw';

export function SkiboTeaserPhone() {
  return (
    <IPhoneFrame className="od-ski-phone od-motion-layer">
      <div className="od-ski-app od-motion-layer">
        <div className="od-ski-status">
          <b>9:41</b>
          <span><Signal /><Wifi /><BatteryFull /></span>
        </div>
        <div className="od-ski-screen">
          {steps.map(step => (
            <div className={`od-ski-screen-state od-ski-screen-state--${step} od-motion-layer`} key={step}>
              <Image src={`/showcase/skibo-motion/${step}.webp`} alt="" fill sizes={screenWidths} loading="eager" />
              {step === 'checkout' && (
                <>
                  <span className="od-ski-payment-method od-motion-layer" />
                  <span className="od-ski-payment-button od-motion-layer">Оплатить</span>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="od-ski-shade od-motion-layer" />
        <div className="od-ski-sheet od-motion-layer">
          <Image src="/showcase/skibo-motion/sizes.webp" alt="" fill sizes={screenWidths} loading="eager" />
        </div>
        <span className="od-ski-tap od-motion-layer" />
        <span className="od-ski-home-indicator" />
      </div>
    </IPhoneFrame>
  );
}
