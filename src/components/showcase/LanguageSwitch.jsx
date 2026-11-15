import Link from 'next/link';
import '@/app/showcase-language-switch.css';

const languages = [
  { locale: 'ru', label: 'Русский', short: 'RU' },
  { locale: 'en', label: 'English', short: 'EN' },
];

export default function LanguageSwitch({ lang, slug, label }) {
  const path = slug ? `/project/${slug}` : '';

  return (
    <nav className="od-language-switch" aria-label={label}>
      {languages.map(({ locale, label: languageName, short }) => (
        <Link
          key={locale}
          href={`/${locale}${path}`}
          hrefLang={locale}
          lang={locale}
          aria-label={languageName}
          aria-current={locale === lang ? 'page' : undefined}
        >
          {short}
        </Link>
      ))}
    </nav>
  );
}
