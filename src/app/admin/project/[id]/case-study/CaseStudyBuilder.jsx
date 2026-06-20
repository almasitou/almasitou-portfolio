'use client'

import { useState, useTransition } from 'react';
import { saveCaseStudyData, translateTextToEnglish, uploadImage } from '@/app/actions';

const BLOCK_TYPES = [
  { id: 'hero', name: 'Hero / Intro' },
  { id: 'overview', name: 'Project Overview (Role, Time, etc)' },
  { id: 'problem_solution', name: 'Problem & Solution' },
  { id: 'features', name: 'Features / Bento Grid' },
  { id: 'image_gallery', name: 'Image Gallery' }
];

export default function CaseStudyBuilder({ projectId, initialData }) {
  const [blocks, setBlocks] = useState(initialData.blocks || []);
  const [isPending, startTransition] = useTransition();
  const [translatingId, setTranslatingId] = useState(null);
  
  const addBlock = (type) => {
    setBlocks([...blocks, {
      id: crypto.randomUUID(),
      type,
      title_ru: '', title_en: '',
      text_ru: '', text_en: '',
      imageUrls: []
    }]);
  };

  const removeBlock = (id) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const moveBlock = (index, dir) => {
    if (index + dir < 0 || index + dir >= blocks.length) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index + dir];
    newBlocks[index + dir] = temp;
    setBlocks(newBlocks);
  };

  const updateBlock = (id, field, value) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const addImageUrl = (id) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, imageUrls: [...b.imageUrls, ''] } : b));
  };

  const updateImageUrl = (id, imgIndex, url) => {
    setBlocks(blocks.map(b => {
      if (b.id !== id) return b;
      const newUrls = [...b.imageUrls];
      newUrls[imgIndex] = url;
      return { ...b, imageUrls: newUrls };
    }));
  };

  const handleTranslate = async (id, fieldPrefix) => {
    const block = blocks.find(b => b.id === id);
    const textToTranslate = block[`${fieldPrefix}_ru`];
    if (!textToTranslate) return;

    setTranslatingId(`${id}_${fieldPrefix}`);
    const res = await translateTextToEnglish(textToTranslate);
    setTranslatingId(null);

    if (res.success) {
      updateBlock(id, `${fieldPrefix}_en`, res.text);
    } else {
      alert("Translation failed: " + res.error);
    }
  };

  const handleUploadImage = async (e, blockId) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    
    const res = await uploadImage(formData);
    if (res.success) {
      const block = blocks.find(b => b.id === blockId);
      updateBlock(blockId, 'imageUrls', [...block.imageUrls, res.url]);
    } else {
      alert("Upload failed: " + res.error);
    }
    // clear the input
    e.target.value = null;
  };

  const handleSave = () => {
    startTransition(async () => {
      const res = await saveCaseStudyData(projectId, { blocks });
      if (res.success) {
        alert("Saved successfully!");
      } else {
        alert("Failed to save: " + res.error);
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Blocks List */}
      <div className="space-y-6">
        {blocks.map((block, index) => (
          <div key={block.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative">
            
            <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded text-sm font-medium uppercase">
                  {block.type.replace('_', ' ')}
                </span>
                <span className="text-zinc-500 text-sm">#{index + 1}</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => moveBlock(index, -1)} disabled={index === 0} className="p-2 text-zinc-500 hover:text-white disabled:opacity-30">↑</button>
                <button onClick={() => moveBlock(index, 1)} disabled={index === blocks.length - 1} className="p-2 text-zinc-500 hover:text-white disabled:opacity-30">↓</button>
                <button onClick={() => removeBlock(block.id)} className="ml-4 p-2 text-red-500 hover:bg-red-500/10 rounded">Delete</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Russian Column */}
              <div className="space-y-4">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-xs">RU</span>
                  Russian Content
                </h3>
                
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Title (RU)</label>
                  <input 
                    type="text" value={block.title_ru} onChange={e => updateBlock(block.id, 'title_ru', e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white"
                  />
                  <button 
                    onClick={() => handleTranslate(block.id, 'title')}
                    disabled={translatingId === `${block.id}_title` || !block.title_ru}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 disabled:opacity-50"
                  >
                    ✨ Magic Translate Title
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Text (RU)</label>
                  <textarea 
                    value={block.text_ru} onChange={e => updateBlock(block.id, 'text_ru', e.target.value)} rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white"
                  />
                  <button 
                    onClick={() => handleTranslate(block.id, 'text')}
                    disabled={translatingId === `${block.id}_text` || !block.text_ru}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 disabled:opacity-50"
                  >
                    ✨ Magic Translate Text
                  </button>
                </div>
              </div>

              {/* English Column */}
              <div className="space-y-4">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-xs">EN</span>
                  English Content
                </h3>
                
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Title (EN)</label>
                  <input 
                    type="text" value={block.title_en} onChange={e => updateBlock(block.id, 'title_en', e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Text (EN)</label>
                  <textarea 
                    value={block.text_en} onChange={e => updateBlock(block.id, 'text_en', e.target.value)} rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">Images / Screenshots</h3>
                <div className="flex gap-2">
                  <button onClick={() => addImageUrl(block.id)} className="text-sm border border-zinc-700 text-white px-3 py-1 rounded hover:bg-zinc-800 transition-colors">
                    + Link URL
                  </button>
                  <label className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer transition-colors">
                    + Upload File
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUploadImage(e, block.id)} />
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                {block.imageUrls?.map((url, imgIndex) => (
                  <div key={imgIndex} className="flex gap-3">
                    <input 
                      type="text" value={url} onChange={e => updateImageUrl(block.id, imgIndex, e.target.value)}
                      placeholder="https://...image.png"
                      className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white text-sm"
                    />
                    <button 
                      onClick={() => setBlocks(blocks.map(b => b.id === block.id ? { ...b, imageUrls: b.imageUrls.filter((_, i) => i !== imgIndex) } : b))}
                      className="px-3 text-red-500 hover:bg-red-500/10 rounded"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}

        {blocks.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-zinc-800 rounded-2xl">
            <p className="text-zinc-500">No blocks added yet. Start building your case study below.</p>
          </div>
        )}
      </div>

      {/* Add New Block Bar */}
      <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl flex items-center gap-4 flex-wrap">
        <span className="text-zinc-400 font-medium">Add Block:</span>
        {BLOCK_TYPES.map(bt => (
          <button 
            key={bt.id} 
            onClick={() => addBlock(bt.id)}
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            + {bt.name}
          </button>
        ))}
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-950/80 backdrop-blur border-t border-zinc-800 flex justify-center z-50">
        <button 
          onClick={handleSave} 
          disabled={isPending}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg transition-colors flex items-center gap-2"
        >
          {isPending ? 'Saving...' : 'Save Case Study'}
        </button>
      </div>
    </div>
  );
}
