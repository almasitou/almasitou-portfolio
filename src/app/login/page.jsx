import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { login } from '@/app/actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        <form action={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
