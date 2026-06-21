import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SkiboCaseStudy from '@/components/case-studies/SkiboCaseStudy';
import KaspiCaseStudy from '@/components/case-studies/KaspiCaseStudy';
import BaoCaseStudy from '@/components/case-studies/BaoCaseStudy';
import TazaCaseStudy from '@/components/case-studies/TazaCaseStudy';

import IdolCaseStudy from '@/components/case-studies/IdolCaseStudy';

// Modules are now fetched during sync and stored in project.content
export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }) {
  const { lang, slug } = await params;
  
  let currentSlug = slug;
  if (slug === 'skibo') currentSlug = 'cmqjeakgy0000vxltp4qj7ks1';
  else if (slug === 'kaspi') currentSlug = 'cmqjeakqk0001vxltptpxytw5';
  else if (slug === 'bao') currentSlug = 'cmqjeakvd0002vxltgwlxjlo9';
  else if (slug === 'taza') currentSlug = 'cmqjeal510004vxlt8hmvmcr6';
  else if (slug === 'idol') currentSlug = 'cmqjeal060003vxlt80svpske';
  const allProjects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  const otherProjects = allProjects.filter(p => {
    if (p.id === currentSlug || p.id === slug) return false;
    if (p.title.toLowerCase().includes(slug.toLowerCase())) return false;
    return true;
  }).slice(0, 4);

  if (slug === 'skibo' || slug === 'cmqjeakgy0000vxltp4qj7ks1') {
    return <SkiboCaseStudy lang={lang} otherProjects={otherProjects} />;
  }
  
  if (slug === 'kaspi' || slug === 'cmqjeakqk0001vxltptpxytw5') {
    return <KaspiCaseStudy lang={lang} otherProjects={otherProjects} />;
  }
  
  if (slug === 'bao' || slug === 'cmqjeakvd0002vxltgwlxjlo9') {
    return <BaoCaseStudy lang={lang} otherProjects={otherProjects} />;
  }
  
  if (slug === 'taza' || slug === 'cmqjeal510004vxlt8hmvmcr6') {
    return <TazaCaseStudy lang={lang} otherProjects={otherProjects} />;
  }
  
  if (slug === 'idol' || slug === 'cmqjeal060003vxlt80svpske') {
    return <IdolCaseStudy lang={lang} otherProjects={otherProjects} />;
  }
  
  const project = await prisma.project.findUnique({
    where: { id: slug }
  });
  
  if (!project) {
    notFound();
  }
  
  let modules = [];
  try {
    modules = JSON.parse(project.content || '[]');
  } catch (e) {
    modules = [];
  }
  
  if (!modules || modules.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl text-white mb-4">Error loading project data</h1>
        <Link href={`/${lang}`} className="text-blue-500 hover:underline">
          Return to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 font-sans pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 sticky top-4 z-50">
          <Link href={`/${lang}`} className="nav-loadable inline-flex items-center px-4 py-2 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all shadow-lg group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {project.id === 'cmqjeakgy0000vxltp4qj7ks1' ? 'Skibo Mobile App & Admin Panel' : 
             project.id === 'cmqjeakqk0001vxltptpxytw5' ? (lang === 'ru' ? 'Kaspi Cinema Booking UX: Билет за пару кликов' : 'Kaspi Cinema Booking UX: Ticket in a few clicks') :
             project.id === 'cmqjeal510004vxlt8hmvmcr6' ? 'Taza B2B Store' :
             project.title}
          </h1>
          {project.tags && (
            <div className="flex flex-wrap gap-2">
              {project.tags.split(',').map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="w-full bg-black rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl leading-[0]">
          {modules.map((mod, index) => {
            let hiddenModules = [];
            try { hiddenModules = JSON.parse(project.hiddenModules || '[]'); } catch(e) {}
            if (hiddenModules.includes(mod.id)) return null;

            if (mod.__typename === 'ImageModule' || mod.type === 'image') {
              // Get the highest resolution image available
              let imgUrl = mod.src;
              if (mod.imageSizes?.allAvailable && mod.imageSizes.allAvailable.length > 0) {
                // Find highest resolution WEBP or PNG/JPG
                const sorted = [...mod.imageSizes.allAvailable].sort((a, b) => (b.width || 0) - (a.width || 0));
                imgUrl = sorted[0].url;
              } else {
                imgUrl = mod.imageSizes?.size_original?.url || mod.imageSizes?.size_max_1920?.url || mod.imageSizes?.size_1400?.url || mod.imageSizes?.size_max_1200?.url || mod.src;
              }
              if (!imgUrl) return null;
              
              return (
                <img 
                  key={mod.id || index}
                  src={imgUrl} 
                  referrerPolicy="no-referrer"
                  alt={mod.altText || project.title}
                  className="w-full h-auto object-cover block"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                />
              );
            } else if (mod.__typename === 'TextModule' || mod.type === 'text') {
              const content = (mod.text || mod.text_plain || '').trim();
              // Ignore empty text modules to prevent unwanted padding gaps
              if (!content || content === '' || content === '<p></p>' || content === '<div></div>') return null;
              
              return (
                <div 
                  key={mod.id || index} 
                  className="text-white p-8 md:p-16 prose prose-invert max-w-none text-lg leading-relaxed normal-line-height"
                  dangerouslySetInnerHTML={{ __html: content }}
                  style={{ lineHeight: '1.625' }}
                />
              );
            }
            return null;
          })}
        </div>
        
      </div>
    </div>
  );
}
