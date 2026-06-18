'use client'

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { updateProjectOrder } from '@/app/actions';

export default function SortableProjects({ initialProjects }) {
  const [projects, setProjects] = useState(initialProjects);
  const [isPending, startTransition] = useTransition();

  const moveUp = (index) => {
    if (index === 0) return;
    const newProjects = [...projects];
    const temp = newProjects[index];
    newProjects[index] = newProjects[index - 1];
    newProjects[index - 1] = temp;
    saveOrder(newProjects);
  };

  const moveDown = (index) => {
    if (index === projects.length - 1) return;
    const newProjects = [...projects];
    const temp = newProjects[index];
    newProjects[index] = newProjects[index + 1];
    newProjects[index + 1] = temp;
    saveOrder(newProjects);
  };

  const saveOrder = (newProjects) => {
    setProjects(newProjects);
    startTransition(async () => {
      const updates = newProjects.map((p, i) => ({ id: p.id, orderIndex: i }));
      await updateProjectOrder(updates);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {projects.map((proj, i) => (
        <div key={proj.id} className={`flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-xl transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <button 
                onClick={() => moveUp(i)} 
                disabled={i === 0 || isPending}
                className="text-zinc-500 hover:text-white disabled:opacity-30 p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              </button>
              <button 
                onClick={() => moveDown(i)} 
                disabled={i === projects.length - 1 || isPending}
                className="text-zinc-500 hover:text-white disabled:opacity-30 p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <img src={proj.coverImage} className="w-16 h-12 object-cover rounded-md border border-zinc-800" />
            <span className="text-white font-medium ml-2">{proj.title}</span>
          </div>
          <Link 
            href={`/admin/project/${proj.id}`}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Edit Images
          </Link>
        </div>
      ))}
    </div>
  );
}
