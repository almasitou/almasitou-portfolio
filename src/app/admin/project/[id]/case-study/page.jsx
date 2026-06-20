import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CaseStudyBuilder from './CaseStudyBuilder';

export const dynamic = 'force-dynamic';

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  
  const project = await prisma.project.findUnique({
    where: { id }
  });
  
  if (!project) notFound();
  
  let customData = { blocks: [] };
  try {
    if (project.customData) {
      customData = JSON.parse(project.customData);
    }
  } catch (e) {
    console.error("Failed to parse customData", e);
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin" className="text-zinc-400 hover:text-white">
          ← Back to Admin
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">Case Study Builder</h1>
      <p className="text-zinc-400 mb-8">Editing layout for: <strong>{project.title}</strong></p>
      
      <CaseStudyBuilder projectId={id} initialData={customData} />
    </div>
  );
}
