'use client';

import { useEffect, useRef } from 'react';

export default function HomeCoverGallery({ children }) {
  const grid = useRef(null);

  useEffect(() => {
    const gallery = grid.current;
    const cards = gallery.querySelectorAll('.od-home-card');
    const threshold = .2;
    const observer = new IntersectionObserver(entries => {
      for (const { target, intersectionRatio } of entries) {
        target.toggleAttribute('data-cover-visible', intersectionRatio >= threshold);
      }
    }, { threshold });

    function updateVisibility() {
      gallery.toggleAttribute('data-document-hidden', document.hidden);
    }

    cards.forEach(card => observer.observe(card));
    document.addEventListener('visibilitychange', updateVisibility);
    updateVisibility();
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  return (
    <div className="od-home-grid" ref={grid}>
      {children}
    </div>
  );
}
