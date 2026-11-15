import Image from 'next/image';
import { ODUNSI_SCREEN_ASSETS } from '@/lib/odunsi-portfolio';

const artwork = {
  'rrs-hero': { src: '/uploads/chaickout/cover-hero.jpg', width: 1024, height: 571 },
  'skibo-hero': { src: '/presentation/hero-skibo.png', width: 1373, height: 2799 },
  'skibo-line': { src: '/uploads/skibo/line.jpeg', width: 2048, height: 2048 },
  'bao-hero': { src: '/bao-cover.jpg', width: 1024, height: 571 },
};

function Crop({ asset, className = '', x = 0.5, y = 0.5, zoom = 1, eager = false }) {
  const image = artwork[asset] || ODUNSI_SCREEN_ASSETS[asset];
  const style = {
    '--od-source-ratio': image.width / image.height,
    '--od-focal-x': x,
    '--od-focal-y': y,
    '--od-zoom': zoom,
  };

  return (
    <span className={`od-art-crop ${className}`} style={style}>
      <span className="od-art-crop-image">
        <Image src={image.src} alt="" fill sizes="(max-width: 700px) 700px, 1000px" loading={eager ? 'eager' : 'lazy'} />
      </span>
    </span>
  );
}

const ridge = [[-6, 89], [8, 67], [17, 70], [35, 44], [45, 51], [65, 30], [78, 36], [99, 17], [109, 20]];
const route = [[7.5, 79], [18, 70], [30, 76], [39, 60], [52, 53], [59, 44]];

function trace(points, yOffset, thickness) {
  const top = points.map(([x, y]) => `${x}% ${y + yOffset}%`);
  const bottom = [...points].reverse().map(([x, y]) => `${x}% ${y + yOffset + thickness}%`);
  return `polygon(${[...top, ...bottom].join(', ')})`;
}

function Rrs({ ru, caseCover }) {
  if (!caseCover) return <Crop asset="rrs-hero" className="od-art-full" x={0.49} y={0.52} eager />;

  return <>
    <span className="od-art-rrs-metric">10–15</span>
    <span className="od-art-rrs-caption">{ru ? 'секунд на заказ' : 'seconds to check out'}</span>
    <span className="od-art-rrs-hardware" />
    <Crop asset="rrs-a" className="od-art-rrs-screen" y={0.41} zoom={1.03} eager />
  </>;
}

function Avrora({ ru, caseCover }) {
  if (!caseCover) return <>
    <span className="od-art-avrora-title">{ru ? <>План<br />выпуска</> : <>Production<br />plan</>}</span>
    <span className="od-art-avrora-line" />
    <span className="od-art-avrora-list">{ru ? <>Заказы<br />Сырьё<br />Производство</> : <>Orders<br />Materials<br />Manufacturing</>}</span>
    <span className="od-art-avrora-board" />
    <Crop asset="avrora-a" className="od-art-avrora-dashboard" x={0.55} y={0.52} zoom={1.16} eager />
  </>;

  return <Image className="od-art-avrora-case-screen" {...ODUNSI_SCREEN_ASSETS['avrora-b']} alt="" sizes="(max-width: 759px) 85vw, 600px" />;
}


function Merchant({ ru, caseCover }) {
  if (!caseCover) return <>
    <span className="od-art-merchant-rules" />
    <span className="od-art-merchant-xml">XML</span>
    <span className="od-art-merchant-paper" />
    <Crop asset="merchant-c" className="od-art-merchant-list" x={0.82} y={0.6} zoom={2.2} />
    <span className="od-art-merchant-edge" />
  </>;

  return <div className="od-art-merchant-pair">
    <div><span>{ru ? 'Ассортимент' : 'Catalog'}</span><Crop asset="merchant-b" x={0.58} y={0.55} zoom={1.1} eager /></div>
    <div><span>{ru ? 'Загрузка прайса' : 'Price list import'}</span><Crop asset="merchant-c" x={0.82} y={0.6} zoom={1.4} eager /></div>
  </div>;
}

function Buyer({ ru, caseCover }) {
  if (!caseCover) return <>
    <span className="od-art-buyer-title">{ru ? 'Корзина' : 'Cart'}</span>
    <span className="od-art-buyer-line" />
    <Crop asset="b2c-a" className="od-art-buyer-items" x={0.262} y={0.271} zoom={3.05} />
    <span className="od-art-buyer-paper" />
    <Crop asset="b2c-a" className="od-art-buyer-summary" x={0.733} y={0.285} zoom={2.9} />
  </>;

  return <>
    <span className="od-art-buyer-case-paper" />
    <Crop asset="b2c-a" className="od-art-buyer-case-items" x={0.335} y={0.252} zoom={2.15} eager />
    <span className="od-art-buyer-divider" />
    <Crop asset="b2c-a" className="od-art-buyer-case-total" x={0.735} y={0.285} zoom={2.37} eager />
  </>;
}

function Skibo({ ru, caseCover }) {
  if (!caseCover) return <>
    {Array.from({ length: 7 }, (_, index) => (
      <span className="od-art-skibo-contour" key={index} style={{ clipPath: trace(ridge, index * 4.3, 0.35) }} />
    ))}
    <span className="od-art-skibo-route" style={{ clipPath: trace(route, 0, 0.65) }} />
    <span className="od-art-skibo-pin" />
    <span className="od-art-skibo-title">{ru ? <>Готов к<br />склону</> : <>Ready to<br />ride</>}</span>
    <span className="od-art-skibo-phone">
      <Image src={artwork['skibo-hero'].src} alt="" fill sizes="240px" />
    </span>
  </>;

  return <>
    <Crop asset="skibo-line" className="od-art-skibo-queue" x={0.52} y={0.56} zoom={1.02} eager />
    <span className="od-art-skibo-case-label">{ru ? <>Аренда<br />до поездки</> : <>Book before<br />you go</>}</span>
  </>;
}

function Bao({ ru, caseCover }) {
  if (!caseCover) return <>
    <span className="od-art-bao-rim" />
    <Crop asset="bao-hero" className="od-art-bao-dish" x={0.235} y={0.872} zoom={2.65} />
    <span className="od-art-bao-title">{ru ? <>WOK<br />лапша</> : <>Wok<br />noodles</>}</span>
    <span className="od-art-bao-line" />
    <span className="od-art-bao-caption">{ru ? 'Меню BAO' : 'BAO menu'}</span>
  </>;

  return <>
    <Crop asset="bao-hero" className="od-art-bao-restaurant" x={0.15} y={0.44} zoom={2.2} eager />
    <span className="od-art-bao-case-label">{ru ? <>От меню<br />до заказа</> : <>From menu<br />to order</>}</span>
    <span className="od-art-bao-case-line" />
  </>;
}

function Kaspi({ ru, caseCover }) {
  if (!caseCover) return <>
    <span className="od-art-film" />
    <span className="od-art-film-holes od-art-film-holes-top" />
    <span className="od-art-film-holes od-art-film-holes-bottom" />
    <Crop asset="kaspi-a" className="od-art-film-frame od-art-film-first" x={0.263} y={0.646} zoom={2.55} />
    <Crop asset="kaspi-a" className="od-art-film-frame od-art-film-middle" x={0.505} y={0.237} zoom={2.15} />
    <Crop asset="kaspi-a" className="od-art-film-frame od-art-film-last" x={0.732} y={0.646} zoom={2.55} />
  </>;

  return <div className="od-art-kaspi-ticket">
    <span>{ru ? <>Билеты<br />в кино</> : <>Cinema<br />tickets</>}</span>
    <Crop asset="kaspi-b" x={0.49} y={0.58} zoom={1.45} eager />
  </div>;
}

const covers = { rrs: Rrs, avrora: Avrora, merchant: Merchant, b2c: Buyer, skibo: Skibo, bao: Bao, kaspi: Kaspi };

export default function CoverArt({ slug, lang, variant = 'gallery' }) {
  const Artwork = covers[slug];

  return (
    <div className={`od-art od-art-${slug} od-art-${variant}`} aria-hidden="true">
      <Artwork ru={lang === 'ru'} caseCover={variant === 'case'} />
    </div>
  );
}
