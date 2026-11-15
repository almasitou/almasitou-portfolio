import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { findCase, localize } from '@/lib/portfolio';
import PresentationCase from '@/components/presentation/PresentationCase';
import PortfolioCase from '@/components/showcase/PortfolioCase';
import CaseTopbar from '@/components/showcase/CaseTopbar';
import CaseProjectFooter from '@/components/showcase/CaseProjectFooter';
import { getShowcaseProjects } from '@/lib/showcase-portfolio';
import { PortfolioMotion, Contact } from '@/components/Portfolio';
export const dynamic = 'force-dynamic';

const tazaStoreLinks = [
  { label: 'App Store', href: 'https://apps.apple.com/kz/app/taza-b2b/id6502633786' },
  { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.daladev.tazab2b' },
];

function getCaseSelection(lang, slug) {
  const projects = getShowcaseProjects(lang);
  const legacy = findCase(slug);
  const index = projects.findIndex(project => project.slug === slug || (slug === 'b2b' && project.slug === 'b2c') || project.slug === legacy?.slug);

  return {
    legacy,
    project: projects[index],
    relatedProjects: index < 0 ? projects : [...projects.slice(index + 1), ...projects.slice(0, index)],
  };
}
export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const { project, legacy } = getCaseSelection(lang, slug);
  const current = project || legacy;
  if (!current) return {};

  const title = current.name + (lang === 'ru' ? ' — Алмас Кажымуратулы' : ' — Almas Qajymuratuly');
  const description = project?.intro || localize(legacy.summary, lang);
  const url = 'https://almasitou-portfolio.vercel.app/' + lang + '/project/' + current.slug;
  const cover = legacy?.cover || project?.sections[0]?.images[0]?.src;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: cover ? [cover] : [] },
  };
}

export default async function ProjectPage({ params }) {
  const { lang, slug } = await params;
  const { project: selected, relatedProjects, legacy: editorial } = getCaseSelection(lang, slug);

  if (selected) {
    return <PortfolioCase project={selected} relatedProjects={relatedProjects} lang={lang} />;
  }

  if (editorial) {
    const storeLinks = editorial.slug === 'taza' ? tazaStoreLinks : undefined;
    return (
      <PresentationCase project={editorial} lang={lang} storeLinks={storeLinks}
        projectFooter={<CaseProjectFooter projects={relatedProjects} lang={lang} />} />
    );
  }
  const project = await prisma.project.findUnique({ where: { id: slug } });
  if (!project) notFound();
  let modules = [], hidden = [];
  try { modules = JSON.parse(project.content || '[]'); } catch { /* Invalid imported content has an explicit recovery state below. */ }
  try { hidden = JSON.parse(project.hiddenModules || '[]'); } catch { /* No hidden modules by default. */ }
  const ru = lang==='ru';
  return <div className="folio" id="top"><PortfolioMotion><CaseTopbar lang={lang} slug={slug} className="folio-container"/><main className="folio-container"><header className="case-hero"><p className="eyebrow">{project.tags}</p><h1>{ru && project.titleRu ? project.titleRu : project.title}</h1><div className="case-hero-bottom"><p>{ru && project.descriptionRu ? project.descriptionRu : project.description}</p></div></header><div className="imported-case">
    {modules.length ? modules.filter(mod=>!hidden.includes(mod.id)).map((mod,index)=>{
      if (mod.__typename==='ImageModule' || mod.type==='image') {
        const variants = [...(mod.imageSizes?.allAvailable || [])].sort((a,b)=>(b.width || 0)-(a.width || 0));
        const src = variants[0]?.url || mod.imageSizes?.size_original?.url || mod.imageSizes?.size_max_1920?.url || mod.imageSizes?.size_1400?.url || mod.src;
        return src ? <img key={mod.id || index} src={src} alt={mod.altText || project.title} loading="lazy" referrerPolicy="no-referrer"/> : null;
      }
      if (mod.__typename==='TextModule' || mod.type==='text') return <div className="imported-case-text" key={mod.id || index} dangerouslySetInnerHTML={{__html:mod.text || mod.text_plain || ''}}/>;
      return null;
    }) : <p>{ru ? 'Описание проекта обновляется.' : 'The project description is being updated.'}</p>}
  </div></main><Contact lang={lang}/></PortfolioMotion></div>;
}
