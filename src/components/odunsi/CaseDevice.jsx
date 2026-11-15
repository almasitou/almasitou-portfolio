import Image from 'next/image';

const shells = {
  phone: { src: '/odunsi/case-devices/iphone-18-pro.webp', width: 389, height: 800 },
  laptop: { src: '/odunsi/case-devices/macbook-air-m5.webp', width: 800, height: 485 },
};

export function caseDeviceType(screen) {
  return screen.width / screen.height < 0.85 ? 'phone' : 'laptop';
}

export default function CaseDevice({ screen, sizes, loading }) {
  const type = caseDeviceType(screen);
  const shell = shells[type];

  return (
    <span className={`od-case-device od-case-device--${type}${screen.hasDeviceFrame ? ' od-case-device--framed-source' : ''}`}>
      <span className="od-case-device-display">
        <Image className="od-case-device-capture" src={screen.src} width={screen.width} height={screen.height}
          alt="" sizes={sizes} quality={90} loading={loading} />
      </span>
      <Image className="od-case-device-shell" src={shell.src} width={shell.width} height={shell.height}
        alt="" unoptimized loading={loading} />
    </span>
  );
}
