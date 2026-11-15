'use client';

import { useEffect, useRef, useState } from 'react';

export default function CasePreviewArtwork({ slug, children }) {
  const artwork = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '280px' });
    observer.observe(artwork.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="od-case-project-art" data-preview-project={slug} ref={artwork} aria-hidden="true">
      {ready && children}
    </div>
  );
}
