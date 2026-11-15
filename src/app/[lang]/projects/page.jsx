import {caseStudies} from '@/lib/portfolio';
import PresentationProjects from '@/components/presentation/PresentationProjects';

export async function generateMetadata({params}) {
 const {lang}=await params;
 return {title:lang==='ru'?'Проекты — Алмас Кажымуратулы':'Selected work — Almas Qajymuratuly'};
}

export default async function ProjectsPage({params}) {
 const {lang}=await params;
 const order=['rrs','avrora','skibo','kaspi','idol','bao','taza'];
 return <PresentationProjects lang={lang} projects={order.map(slug=>caseStudies.find(project=>project.slug===slug))}/>;
}
