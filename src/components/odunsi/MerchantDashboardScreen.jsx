import Image from 'next/image';
import '@/app/odunsi-merchant-dashboard.css';

export default function MerchantDashboardScreen({ screen, sizes, panClass = '', scrollLabel }) {
  const image = { src: screen.src, width: screen.width, height: screen.height, sizes, quality: 90, loading: 'eager' };

  return (
    <div className="od-merchant-dashboard-screen">
      <div className="od-merchant-dashboard-header"><Image {...image} alt="" /></div>
      <div className="od-merchant-dashboard-sidebar"><Image {...image} alt="" /></div>
      <div
        className={scrollLabel ? 'od-merchant-dashboard-content od-merchant-dashboard-content--interactive' : 'od-merchant-dashboard-content'}
        tabIndex={scrollLabel ? 0 : undefined}
        aria-label={scrollLabel}
        role={scrollLabel ? 'region' : undefined}
      >
        <div className={`od-merchant-dashboard-image ${panClass}`}>
          <Image {...image} alt="" />
        </div>
      </div>
    </div>
  );
}
