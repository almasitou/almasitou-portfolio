import { Archivo, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../globals.css';

const archivo = Archivo({
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-archivo',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isRu = lang === 'ru';
  
  return {
    title: isRu ? 'Алмас Кажымуратулы | Product Designer' : 'Almas Qajymuratuly | Product Designer',
    description: isRu 
      ? 'Портфолио Алмаса Кажымуратулы, Product Designer. Проектирование Fintech, EdTech и AI-продуктов. UX/UI дизайн мирового уровня.'
      : 'Portfolio of Almas Qajymuratuly, Product Designer specializing in Fintech, EdTech, and AI-driven products. World-class UX/UI design.',
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
  return (
    <div lang={lang} className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth antialiased bg-black text-white selection:bg-blue-600 min-h-screen`}>
      {children}
      <Analytics />
    </div>
  );
}
