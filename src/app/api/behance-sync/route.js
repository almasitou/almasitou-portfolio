import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
  try {
    const { secret } = await request.json();
    if (secret !== 'admin123') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.settings.findFirst();
    const behanceUrl = settings?.behanceUrl || 'https://www.behance.net/almasitou';

    // Fetch the Behance profile HTML directly
    const response = await fetch(behanceUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
      }
    });
    const html = await response.text();

    // Extract INITIAL_STATE from the HTML
    const scriptMatch = html.match(/INITIAL_STATE\s*=\s*({.+?});\s*<\/script>/);
    if (!scriptMatch) {
      throw new Error('Could not find Behance state in HTML. Behance may have changed their layout.');
    }

    const data = JSON.parse(scriptMatch[1]);
    const rawProjects = data?.profile?.activeSection?.work?.profileProjects || [];

    const projects = rawProjects.map((p, index) => {
      // Find the best cover image (preferably WEBP 808px width)
      const covers = p.covers?.allAvailable || [];
      const bestCover = covers.find(c => c.width === 808 && c.type === 'WEBP') || covers[0];

      return {
        title: p.name || 'Untitled Project',
        behanceUrl: p.url,
        coverImage: bestCover ? bestCover.url : 'https://mir-s3-cdn-cf.behance.net/projects/404/10411a208867543.Y3JvcCwxMDcyLDgzOSwyMTYsMA.png',
        description: 'Design Project',
        tags: 'UI/UX, Product Design',
        orderIndex: index
      };
    });

    // Save to Database
    let addedCount = 0;
    for (const proj of projects) {
      const exists = await prisma.project.findFirst({
        where: { behanceUrl: proj.behanceUrl }
      });
      
      if (!exists) {
        await prisma.project.create({ data: proj });
        addedCount++;
      }
    }

    return NextResponse.json({ success: true, count: projects.length, added: addedCount, projects });
  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
