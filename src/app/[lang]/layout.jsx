import { notFound } from 'next/navigation';
import '../portfolio.css';
import '../reference.css';
import '../odunsi-art.css';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isRu = lang === 'ru';
  
  return {
    title: isRu ? 'Алмас Кажымуратулы | Product Designer' : 'Almas Qajymuratuly | Product Designer',
    description: isRu 
      ? 'Портфолио Алмаса Кажымуратулы, Product Designer. Проектирование Fintech, EdTech и AI-продуктов. Исследования, пользовательские сценарии и дизайн-системы.'
      : 'Portfolio of Almas Qajymuratuly, Product Designer specializing in Fintech, EdTech, and AI-driven products. Research, interaction design, and design systems.',
    keywords: ['Product Designer', 'UX/UI', 'Fintech Design', 'EdTech', 'AI Interface', 'Алмас Кажымуратулы', 'Дизайнер интерфейсов'],
    openGraph: {
      title: isRu ? 'Алмас Кажымуратулы | Product Designer' : 'Almas Qajymuratuly | Product Designer',
      description: isRu ? 'Создаю красивые и интуитивно понятные цифровые продукты.' : 'Crafting beautiful and intuitive digital experiences.',
      url: `https://almasitou-portfolio.vercel.app/${lang}`,
      siteName: 'Almas Qajymuratuly Portfolio',
      locale: isRu ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://almasitou-portfolio.vercel.app/${lang}`,
      languages: {
        'en': 'https://almasitou-portfolio.vercel.app/en',
        'ru': 'https://almasitou-portfolio.vercel.app/ru',
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!['ru', 'en'].includes(lang)) notFound();
  return (
    <div lang={lang} className="scroll-smooth antialiased min-h-screen">
      {children}

    </div>
  );
}
