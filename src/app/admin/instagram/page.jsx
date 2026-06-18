import { prisma } from '@/lib/prisma';
import { saveInstagramReels } from '@/app/actions';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function InstagramAdmin() {
  const reels = await prisma.instagramReel.findMany({ orderBy: { orderIndex: 'asc' } });
  
  // Create an array of 3 reels (empty strings if not present)
  const defaultReels = [
    reels[0]?.url || '',
    reels[1]?.url || '',
    reels[2]?.url || ''
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Instagram Reels</h1>
          <p className="text-zinc-400 mt-1">Manage your design content on the site</p>
        </div>
        <Link href="/admin" className="text-zinc-400 hover:text-white transition-colors">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 mb-8">
        <h3 className="text-blue-400 font-semibold mb-2">Об автоматической синхронизации</h3>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Instagram очень жестко блокирует попытки автоматического парсинга со сторонних серверов (Cloudflare, экраны входа). Официальное API требует подтвержденного приложения Facebook (что долго и сложно). 
          <br/><br/>
          Поэтому я сделал удобный интерфейс ручной синхронизации. Каждый раз, когда выходит новый крутой Reels, просто вставь ссылку на него сюда и нажми <strong>«Сохранить и Синхронизировать»</strong>, и он моментально обновится на сайте!
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Ваши Reels (3 видео)</h2>
        <form action={saveInstagramReels} className="space-y-6">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Reel {i + 1} URL</label>
              <input 
                type="text" 
                name={`reel_${i}`}
                defaultValue={defaultReels[i]}
                placeholder="https://www.instagram.com/reel/..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          ))}
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Сохранить и Синхронизировать
          </button>
        </form>
      </div>
    </div>
  );
}
