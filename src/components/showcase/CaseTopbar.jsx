import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import '@/app/showcase-case-topbar.css';

const labels = {
  ru: { back: 'Все проекты', language: 'Язык кейса' },
  en: { back: 'All projects', language: 'Case study language' },
};

export default function CaseTopbar({ lang, slug, presentation = false, className = '' }) {
  const t = labels[lang] || labels.en;

  return (
    <header className={['od-case-topbar', className].filter(Boolean).join(' ')}>
      <Link className="od-case-back" href={presentation ? `/${lang}/projects` : `/${lang}#work`}>
        <ArrowLeft size={17} aria-hidden="true" />
        {t.back}
      </Link>

      <LanguageSwitch lang={lang} slug={slug} label={t.language} />
    </header>
  );
}
