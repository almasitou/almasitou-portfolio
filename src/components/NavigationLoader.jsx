"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // Whenever pathname changes, clear any existing loading classes
    document.querySelectorAll('.is-loading-nav').forEach(el => {
      el.classList.remove('is-loading-nav');
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      let target = e.target.closest('.nav-loadable');
      if (target) {
        target.classList.add('is-loading-nav');
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
