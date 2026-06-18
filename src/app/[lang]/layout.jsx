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

export const metadata = {
  title: 'Almas Qajymuratuly | Product Designer',
  description: 'Portfolio of Almas Qajymuratuly, Senior Product Designer specializing in Fintech, EdTech, and AI-driven products.',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased bg-black text-white selection:bg-blue-600">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
