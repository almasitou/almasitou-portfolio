import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ImageToggle from './ImageToggle';

// Helper to fetch Behance modules
async function getBehanceModules(behanceUrl) {
  try {
    const response = await fetch(behanceUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      next: { revalidate: 60 }
    });
    if (!response.ok) return [];
    const html = await response.text();
    const scriptMatch = html.match(/<script type="application\/json" id="beconfig-store_state">(.*?)<\/script>/s);
    if (!scriptMatch) return [];
    const data = JSON.parse(scriptMatch[1]);
    return data.project?.project?.modules || data.project?.modules || [];
  } catch (error) {
    return [];
  }
}

export default async function AdminProjectImages({ params }) {
  const { id } = await params;
  
  const project = await prisma.project.findUnique({
    where: { id }
  });
  
  if (!project) notFound();
  
  const modules = await getBehanceModules(project.behanceUrl);
  let hiddenModules = [];
  try {
    hiddenModules = JSON.parse(project.hiddenModules || '[]');
  } catch(e) {}

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin" className="text-zinc-400 hover:text-white">
          ← Back to Admin
        </Link>
        <h1 className="text-2xl font-bold text-white">Edit Images: {project.title}</h1>
      </div>
      
      <p className="text-zinc-400 mb-8">
        Click the eye icon on any image to hide it from the public portfolio case page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, index) => {
          if (mod.__typename === 'ImageModule' || mod.type === 'image') {
            const imgUrl = mod.src || mod.imageSizes?.size_max_1200?.url || mod.imageSizes?.size_disp?.url || mod.imageSizes?.allAvailable?.[0]?.url;
            if (!imgUrl) return null;
            
            const isHidden = hiddenModules.includes(mod.id);
            
            return (
              <ImageToggle 
                key={mod.id || index}
                projectId={project.id}
                moduleId={mod.id}
                imgUrl={imgUrl}
                initialHidden={isHidden}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
