import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function AdminLayout({ children }) {
  const cookieStore = cookies();
  const auth = cookieStore.get('admin_token');
  
  if (!auth || auth.value !== 'authenticated') {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-zinc-950 font-sans">
      <nav className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AQ</span>
              </div>
              <span className="text-white font-semibold">Admin Panel</span>
            </div>
            <a href="/" className="text-sm text-zinc-400 hover:text-white transition-colors" target="_blank">
              View Site ↗
            </a>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>
    </div>
  );
}
