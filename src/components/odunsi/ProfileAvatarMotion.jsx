'use client';

import { useEffect, useRef } from 'react';

const clip = '/odunsi/avatar/portrait-turn.mp4';

export default function ProfileAvatarMotion() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;

    function sync() {
      if (motion.matches || document.hidden || !visible) {
        video.pause();
        if (motion.matches) video.removeAttribute('data-playing');
        return;
      }

      if (!video.hasAttribute('src')) video.src = clip;
      video.play().catch(() => {});
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(video.parentElement);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      loop
      preload="none"
      disablePictureInPicture
      onPlaying={(event) => event.currentTarget.setAttribute('data-playing', '')}
    />
  );
}
