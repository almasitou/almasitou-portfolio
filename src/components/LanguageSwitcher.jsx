'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="text-zinc-400 hover:text-white transition-colors font-medium text-sm flex items-center gap-1.5 uppercase"
    >
      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      {currentLang === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
