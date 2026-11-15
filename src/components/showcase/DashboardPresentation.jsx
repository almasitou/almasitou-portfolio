import assets from '@/lib/showcase-assets.json';
import MerchantDashboardScreen from './MerchantDashboardScreen';
import '@/app/showcase-dashboard.css';

export default function DashboardPresentation({ lang }) {
  const preview = assets['merchant-dashboard-full'];
  const screen = preview.fullScreen ?? preview;

  return (
    <div className="od-dashboard-presentation">
      <span className="od-dashboard-title">{lang === 'ru' ? 'Дашборд' : 'Dashboard'}</span>
      <div className="od-dashboard-laptop">
        <div className="od-dashboard-lid">
          <div className="od-dashboard-screen">
            <MerchantDashboardScreen screen={screen} sizes="(max-width: 700px) 54vw, 620px" panClass="od-dashboard-scroll" />
          </div>
        </div>
        <div className="od-dashboard-base" />
      </div>
    </div>
  );
}
