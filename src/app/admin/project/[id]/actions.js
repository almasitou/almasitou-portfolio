'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function toggleHiddenModule(projectId, moduleId, isHidden) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId }
    });
    
    if (!project) throw new Error("Project not found");
    
    let hiddenModules = [];
    try {
      hiddenModules = JSON.parse(project.hiddenModules || '[]');
    } catch (e) {
      hiddenModules = [];
    }
    
    if (isHidden) {
      if (!hiddenModules.includes(moduleId)) {
        hiddenModules.push(moduleId);
      }
    } else {
      hiddenModules = hiddenModules.filter(id => id !== moduleId);
    }
    
    await prisma.project.update({
      where: { id: projectId },
      data: { hiddenModules: JSON.stringify(hiddenModules) }
    });
    
    revalidatePath(`/project/${projectId}`, 'page');
    revalidatePath(`/admin/project/${projectId}`, 'page');
    
    return { success: true };
  } catch (error) {
    console.error("Toggle error:", error);
    return { error: error.message };
  }
}
