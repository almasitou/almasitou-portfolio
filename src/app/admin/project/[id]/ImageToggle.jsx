'use client';

import { useState } from 'react';
import { toggleHiddenModule } from './actions';

export default function ImageToggle({ projectId, moduleId, imgUrl, initialHidden }) {
  const [isHidden, setIsHidden] = useState(initialHidden);
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    setLoading(true);
    const newHiddenState = !isHidden;
    const res = await toggleHiddenModule(projectId, moduleId, newHiddenState);
    if (res.success) {
      setIsHidden(newHiddenState);
    } else {
      alert("Error: " + res.error);
    }
    setLoading(false);
  }

  return (
    <div className={`relative group rounded-xl overflow-hidden border-2 transition-all ${isHidden ? 'border-red-500/50 opacity-50' : 'border-zinc-800'}`}>
      <img src={`/api/proxy?url=${encodeURIComponent(imgUrl)}`} alt="Module" className="w-full h-48 object-cover" />
      
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={handleToggle}
          disabled={loading}
          className={`px-4 py-2 rounded-full font-bold flex items-center gap-2 ${isHidden ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}
        >
          {loading ? "..." : isHidden ? "Show Image" : "Hide Image"}
        </button>
      </div>
      
      {isHidden && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
          HIDDEN
        </div>
      )}
    </div>
  );
}
