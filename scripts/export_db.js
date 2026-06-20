const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function run() {
  const data = {
    settings: await prisma.settings.findMany(),
    instagramReel: await prisma.instagramReel.findMany(),
    project: await prisma.project.findMany(),
    experience: await prisma.experience.findMany(),
    skillCategory: await prisma.skillCategory.findMany(),
    recommendation: await prisma.recommendation.findMany(),
  };

  fs.writeFileSync('db_dump.json', JSON.stringify(data, null, 2));
  console.log('Database dumped to db_dump.json');
}

run()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
