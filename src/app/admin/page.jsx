import { prisma } from '@/lib/prisma';
import { saveSettings, triggerBehanceSync, logout } from '@/app/actions';
import Link from 'next/link';
import SortableProjects from './SortableProjects';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const settings = await prisma.settings.findFirst();
  const projectsCount = await prisma.project.count();
  const projects = await prisma.project.findMany({ orderBy: { orderIndex: 'asc' } });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-zinc-400 mt-1">Manage your portfolio content</p>
        </div>
        <form action={logout}>
          <button type="submit" className="text-zinc-400 hover:text-white transition-colors">
            Sign out
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Settings Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Profile Info</h2>
          <form action={saveSettings} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Tagline (EN)</label>
                <input 
                  type="text" 
                  name="title" 
                  defaultValue={settings?.title}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Tagline (RU)</label>
                <input 
                  type="text" 
                  name="titleRu" 
                  defaultValue={settings?.titleRu}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Bio (EN)</label>
              <textarea 
                name="bio" 
                defaultValue={settings?.bio}
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Bio (RU)</label>
              <textarea 
                name="bioRu" 
                defaultValue={settings?.bioRu}
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              type="submit"
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Sync Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
          <h2 className="text-xl font-semibold text-white mb-4">Behance Sync</h2>
          <p className="text-zinc-400 mb-6 flex-1">
            Currently tracking <strong>{projectsCount}</strong> projects. Click below to launch the scraper and fetch your latest work from Behance.
          </p>
          <form action={triggerBehanceSync}>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Sync Now
            </button>
          </form>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Instagram Reels</h2>
            <p className="text-zinc-400 mb-6 text-sm">
              Manage your Instagram Reels displayed on the main page. Update the video links manually to avoid API blocking.
            </p>
            <Link 
              href="/admin/instagram"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Manage Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Manage Projects</h2>
        <SortableProjects initialProjects={projects} />
      </div>
    </div>
  );
}
