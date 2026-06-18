import { prisma } from '@/lib/prisma';
import { saveSettings, triggerBehanceSync, logout } from '@/app/actions';
import Link from 'next/link';

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
        </div>
      </div>

      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Manage Projects</h2>
        <div className="flex flex-col gap-4">
          {projects.map(proj => (
            <div key={proj.id} className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
              <span className="text-white font-medium">{proj.title}</span>
              <Link 
                href={`/admin/project/${proj.id}`}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Edit Images
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
