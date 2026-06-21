"use client";

import { useEffect } from 'react';

export default function MobileHoverFix() {
  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!isTouchDevice) return;

    let touchedElements = new Set();

    const handleTouchStart = (e) => {
      let target = e.target;
      // Traverse up to find elements that might have hover effects
      while (target && target !== document.body) {
        if (target.className && typeof target.className === 'string') {
          if (target.className.includes('hover:') || target.className.includes('group')) {
            target.classList.add('is-active');
            touchedElements.add(target);
          }
        }
        target = target.parentNode;
      }
    };

    const handleTouchEnd = () => {
      if (touchedElements.size === 0) return;
      
      // Wait for the full animation cycle (assuming max 500ms transition)
      setTimeout(() => {
        touchedElements.forEach(el => {
          if (el && document.body.contains(el)) {
            el.classList.remove('is-active');
            
            // Trick to clear sticky hover state on mobile
            const originalPointerEvents = el.style.pointerEvents;
            el.style.pointerEvents = 'none';
            
            // Force browser repaint/reflow
            void el.offsetHeight;
            
            setTimeout(() => {
                el.style.pointerEvents = originalPointerEvents;
            }, 50);
          }
        });
        touchedElements.clear();
      }, 600); // 600ms delay to allow the hover animation to fully play
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return null;
}
