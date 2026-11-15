'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import MerchantDashboardScreen from './MerchantDashboardScreen';
import CaseText from './CaseText';
import CaseDevice, { caseDeviceType } from './CaseDevice';

const viewerLabels = {
  ru: {
    open: 'Увеличить', close: 'Закрыть', image: 'Увеличенный экран',
    scroll: 'Прокручиваемый экран',
  },
  en: {
    open: 'Enlarge', close: 'Close', image: 'Enlarged screen',
    scroll: 'Scrollable screen',
  },
};

function screenSizes(screen, layout) {
  if (screen.kind === 'artwork' && layout === 'joined-wide') {
    return '(min-width: 1240px) 840px, (min-width: 950px) calc(70vw - 28px), calc(100vw - 40px)';
  }
  if (screen.kind === 'artwork' && (layout === 'stacked' || layout === 'merchant-products-stacked')) {
    return '(min-width: 1240px) 1200px, calc(100vw - 40px)';
  }
  if (screen.kind === 'artwork' && (layout === 'quad' || layout === 'stacked-split' || layout === 'stacked-pair' || layout === 'kaspi-group-bento' || layout === 'skibo-bento' || layout === 'qalan-bento' || layout === 'qalan-context-joined' || layout === 'qalan-practice-joined' || layout === 'merchant-contracts-glued')) {
    return '(min-width: 1240px) 780px, (min-width: 680px) 66vw, calc(100vw - 40px)';
  }
  if (screen.kind === 'artwork' && layout === 'kaspi-seat-bento') {
    return '(min-width: 1240px) 450px, (min-width: 680px) 35vw, calc(100vw - 40px)';
  }
  if (screen.kind === 'artwork') return '(max-width: 949px) calc(100vw - 40px), (max-width: 1240px) 67vw, 820px';
  if (screen.kind === 'detail') return '(max-width: 680px) 82vw, 720px';
  if (caseDeviceType(screen) === 'phone') return '(max-width: 680px) 85vw, 470px';
  if (layout === 'feature') return '(max-width: 680px) 86vw, 1070px';
  return '(max-width: 680px) 86vw, 720px';
}

export default function CaseScreens({ sections = [], lang, opening = false }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const labels = viewerLabels[lang] || viewerLabels.en;
  const fullScreen = selected?.fullScreen || selected;
  const desktop = selected && selected.kind !== 'artwork' && caseDeviceType(selected) === 'laptop';
  const fixedNavigation = Boolean(selected?.fixedNavigation && selected?.fullScreen);
  const viewerSizes = desktop
    ? 'min(94vw, 1440px, calc((100dvh - 116px) * 16 / 9))'
    : fullScreen && `min(94vw, calc((100dvh - 116px) * ${fullScreen.width / fullScreen.height}))`;

  useEffect(() => {
    if (selected && !dialog.current.open) dialog.current.showModal();
  }, [selected]);

  function openScreen(event, screen) {
    trigger.current = event.currentTarget;
    setSelected(screen);
  }

  function clearScreen() {
    setSelected(null);
    trigger.current?.focus({ preventScroll: true });
    trigger.current = null;
  }

  return (
    <>
      {sections.map(({ title, body, images, composition, mediaFirst }) => {
        const layout = composition || (images.length === 1 ? 'feature' : 'pair');
        const heading = title && (
          <div className="od-case-evidence-heading od-case-copy-card">
            <h3>{title}</h3>
            <p><CaseText>{body}</CaseText></p>
          </div>
        );

        return (
          <div className={`od-case-evidence od-case-evidence--${layout}${opening ? ' od-case-evidence--opening' : ''}`} key={title}>
            {!mediaFirst && heading}

            {images.length > 0 && (
              <div className={`od-case-media-row od-case-media-row--${layout}`}>
                {images.map(screen => {
                  const kind = screen.kind || caseDeviceType(screen);
                  const framed = kind === 'laptop' || kind === 'phone';
                  const sizes = screenSizes(screen, layout);
                  const interactive = layout !== 'quad' && (screen.interactive ?? kind !== 'artwork');

                  const imageContent = framed ? (
                    <CaseDevice screen={screen} sizes={sizes} />
                  ) : (
                    <Image src={screen.src} width={screen.width} height={screen.height} alt=""
                      unoptimized={!interactive} quality={interactive ? 90 : 100} sizes={sizes}
                      style={screen.cropAspectRatio ? { aspectRatio: screen.cropAspectRatio, objectFit: 'cover' } : undefined} />
                  );

                  return (
                    <figure className={`od-case-figure od-case-figure--${kind}${screen.surface === 'light' ? ' od-case-figure--light-detail' : ''}`}
                      data-preview={screen.preview}
                      key={`${screen.src}:${screen.title}`}>
                      {interactive ? (
                        <button type="button" className="od-case-screen" onClick={event => openScreen(event, screen)}
                          aria-label={`${labels.open} — ${screen.title}`} aria-haspopup="dialog">
                          {imageContent}
                        </button>
                      ) : (
                        <div className="od-case-screen od-case-screen--static">
                          {imageContent}
                        </div>
                      )}
                    </figure>
                  );
                })}
              </div>
            )}
            {mediaFirst && heading}
          </div>
        );
      })}

      <dialog
        className="od-case-viewer"
        ref={dialog}
        aria-label={labels.image}
        onClose={clearScreen}
        onClick={event => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        <button className="od-case-viewer-close" type="button" aria-label={labels.close}
          onClick={() => dialog.current.close()} autoFocus>
          <X size={22} aria-hidden="true" />
        </button>
        {fullScreen && (
          <div
            key={selected.src}
            className={`od-case-viewer-media${desktop ? ' od-case-viewer-media--desktop' : ''}${fixedNavigation ? ' od-case-viewer-media--dashboard' : selected.fullScreen ? ' od-case-viewer-media--scroll' : ''}${selected.surface === 'light' ? ' od-case-viewer-media--light-detail' : ''}`}
            tabIndex={selected.fullScreen && !fixedNavigation ? 0 : undefined}
            aria-label={selected.fullScreen && !fixedNavigation ? labels.scroll : undefined}
          >
            {fixedNavigation ? (
              <MerchantDashboardScreen screen={fullScreen} sizes={viewerSizes} scrollLabel={labels.scroll} />
            ) : (
              <Image src={fullScreen.src} width={fullScreen.width} height={fullScreen.height} alt=""
                sizes={viewerSizes} quality={90} loading="eager" />
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
