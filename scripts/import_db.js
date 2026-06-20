const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function run() {
  const fileContent = fs.readFileSync('db_dump.json', 'utf8');
  const data = JSON.parse(fileContent);

  // Clear existing data (if any)
  await prisma.recommendation.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.instagramReel.deleteMany();
  await prisma.settings.deleteMany();

  // Insert data
  if (data.settings && data.settings.length > 0) {
    await prisma.settings.createMany({ data: data.settings });
  }
  if (data.instagramReel && data.instagramReel.length > 0) {
    await prisma.instagramReel.createMany({ data: data.instagramReel });
  }
  if (data.project && data.project.length > 0) {
    await prisma.project.createMany({ data: data.project });
  }
  if (data.experience && data.experience.length > 0) {
    await prisma.experience.createMany({ data: data.experience });
  }
  if (data.skillCategory && data.skillCategory.length > 0) {
    await prisma.skillCategory.createMany({ data: data.skillCategory });
  }
  if (data.recommendation && data.recommendation.length > 0) {
    await prisma.recommendation.createMany({ data: data.recommendation });
  }

  console.log('Database imported successfully into SQLite');
}

run()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
