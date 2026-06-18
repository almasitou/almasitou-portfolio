'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function login(formData) {
  const password = formData.get('password');
  
  const settings = await prisma.settings.findFirst();
  if (!settings || !settings.adminPasswordHash) {
    return { error: 'Admin setup incomplete.' };
  }

  const isMatch = await bcrypt.compare(password, settings.adminPasswordHash);
  if (isMatch) {
    const cookieStore = await cookies();
    cookieStore.set('admin_token', 'authenticated', { secure: true, httpOnly: true });
    redirect('/admin');
  } else {
    return { error: 'Invalid password' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  redirect('/');
}

export async function saveSettings(formData) {
  const title = formData.get('title');
  const bio = formData.get('bio');
  const titleRu = formData.get('titleRu');
  const bioRu = formData.get('bioRu');
  
  const settings = await prisma.settings.findFirst();
  if (settings) {
    await prisma.settings.update({
      where: { id: settings.id },
      data: { title, bio, titleRu, bioRu }
    });
  }
  return { success: true };
}

import { revalidatePath } from 'next/cache';

export async function triggerBehanceSync() {
  try {
    const settings = await prisma.settings.findFirst();
    const behanceUrl = settings?.behanceUrl || 'https://www.behance.net/almasitou';

    // Fetch the Behance profile HTML directly
    const response = await fetch(behanceUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
      },
      cache: 'no-store'
    });
    const html = await response.text();

    // Extract JSON state from the new Behance script tag
    const scriptMatch = html.match(/<script type="application\/json" id="beconfig-store_state">(.*?)<\/script>/s);
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

    // Helper to fetch individual project modules
    async function fetchProjectModules(url) {
      try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, cache: 'no-store' });
        const html = await res.text();
        const scriptMatch = html.match(/<script type="application\/json" id="beconfig-store_state">(.*?)<\/script>/s);
        if (!scriptMatch) return '[]';
        const data = JSON.parse(scriptMatch[1]);
        const modules = data.project?.project?.modules || data.project?.modules || [];
        return JSON.stringify(modules);
      } catch (e) {
        return '[]';
      }
    }

    // Save to Database
    let addedCount = 0;
    for (const proj of projects) {
      proj.content = await fetchProjectModules(proj.behanceUrl);
      
      const exists = await prisma.project.findFirst({
        where: { behanceUrl: proj.behanceUrl }
      });
      
      if (!exists) {
        await prisma.project.create({ data: proj });
        addedCount++;
      } else {
        // Optionally update existing ones to ensure latest cover images and content
        const updateData = { coverImage: proj.coverImage, title: proj.title };
        if (proj.content !== '[]') {
            updateData.content = proj.content;
        }
        await prisma.project.updateMany({
            where: { behanceUrl: proj.behanceUrl },
            data: updateData
        });
      }
    }

    // Force Next.js to re-render all pages so the changes show up immediately!
    revalidatePath('/', 'layout');

    return { success: true, count: projects.length, added: addedCount };
  } catch (err) {
    console.error("Sync Action Error:", err);
    return { error: err.message };
  }
}



export async function updateProjectOrder(updates) {
  try {
    const transaction = updates.map(update => 
      prisma.project.update({
        where: { id: update.id },
        data: { orderIndex: update.orderIndex }
      })
    );
    await prisma.$transaction(transaction);
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
}

export async function saveInstagramReels(formData) {
  try {
    await prisma.instagramReel.deleteMany({});
    
    const urls = [
      formData.get('reel_0'),
      formData.get('reel_1'),
      formData.get('reel_2')
    ];

    for (let i = 0; i < urls.length; i++) {
      if (urls[i] && urls[i].trim() !== '') {
        await prisma.instagramReel.create({
          data: {
            url: urls[i].trim(),
            orderIndex: i
          }
        });
      }
    }
    
    revalidatePath('/', 'layout');
    revalidatePath('/admin/instagram', 'layout');
    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
}
