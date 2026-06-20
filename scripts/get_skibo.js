const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const project = await prisma.project.findFirst({
    where: { title: { contains: 'Skibo', mode: 'insensitive' } }
  });
  if (project) {
    console.log(JSON.stringify(JSON.parse(project.content || '[]'), null, 2));
    
    // Auto-populate the customData with default blocks if empty
    if (!project.customData || project.customData === '{}' || project.customData === '[]') {
      const content = {
        title: "Skibo",
        subtitle: "Экосистема аренды спортивной экипировки",
        subtitle_en: "Sports Equipment Rental Ecosystem",
        problemText: "Главная проблема бизнеса заключалась в маленьком физическом помещении, куда клиенты приходили лично арендовать спортивную экипировку. Это создавало сильные неудобства: длинные очереди, теснота для посетителей и полный хаос в учете инвентаря для персонала.",
        problemText_en: "The business faced a critical bottleneck: a small physical space where customers had to rent sports equipment in person. This created severe inconvenience for both customers (long wait times, crowded space) and staff (chaos, hard to track inventory).",
        solutionText: "Мы разработали комплексную экосистему: мобильное приложение для клиентов и мощную админ-панель для бизнеса. Клиенты больше не стоят в очередях — они делают всё в смартфоне.",
        solutionText_en: "We designed a comprehensive ecosystem consisting of a Mobile App for customers and a powerful Admin Panel for the business. Customers no longer wait in lines — they do everything on their smartphones.",
        feature1Title: "Мобильное приложение",
        feature1Title_en: "Mobile App for Customers",
        feature1Text: "Пользователи могут смотреть ассортимент, бронировать нужную экипировку, сразу подписывать договор и оплачивать онлайн. Им остается лишь прийти в назначенное время и забрать свои вещи.",
        feature1Text_en: "Users can browse inventory, book equipment, sign contracts, and complete payments seamlessly. They simply arrive at the designated time to pick up their gear.",
        feature2Title: "Умная Админ-панель",
        feature2Title_en: "Smart Admin Panel",
        feature2Text: "Панель для бизнеса автоматически рассчитывает остаток экипировки на каждый день при совершении брони. Менеджеры сразу видят, хватит ли инвентаря на всех.",
        feature2Text_en: "The dashboard automatically calculates daily equipment availability whenever a booking is made. Managers can instantly see if there is enough inventory for everyone.",
        feature3Title: "Управление персоналом",
        feature3Title_en: "Staff Management",
        feature3Text: "Система позволяет следить за персоналом, отслеживая, в каком филиале какой работник вышел на смену, и контролировать эффективность.",
        feature3Text_en: "The system allows tracking staff attendance across different branches, monitoring which employee is on shift where, and managing overall efficiency."
      };
      
      const images = JSON.parse(project.content || '[]').filter(m => m.type === 'image' || m.__typename === 'ImageModule').map(m => m.src);

      const customData = {
        blocks: [
          {
            id: 'b1', type: 'hero',
            title_ru: content.title, title_en: content.title,
            text_ru: content.subtitle, text_en: content.subtitle_en,
            imageUrls: images.length > 0 ? [images[0]] : []
          },
          {
            id: 'b2', type: 'overview',
            title_ru: 'Lead Product Designer', title_en: 'Lead Product Designer',
            text_ru: '3 Месяца', text_en: '3 Months',
            imageUrls: ['iOS, Android, Web'] // Hack for platforms
          },
          {
            id: 'b3', type: 'problem_solution',
            title_ru: 'Проблема', title_en: 'The Challenge',
            text_ru: content.problemText, text_en: content.problemText_en,
            imageUrls: []
          },
          {
            id: 'b4', type: 'problem_solution',
            title_ru: 'Решение', title_en: 'The Solution',
            text_ru: content.solutionText, text_en: content.solutionText_en,
            imageUrls: images.length > 1 ? [images[1]] : []
          },
          {
            id: 'b5', type: 'features',
            title_ru: content.feature1Title, title_en: content.feature1Title_en,
            text_ru: content.feature1Text, text_en: content.feature1Text_en,
            imageUrls: images.length > 2 ? [images[2]] : []
          },
          {
            id: 'b6', type: 'bento_grid',
            title_ru: content.feature2Title, title_en: content.feature2Title_en,
            text_ru: content.feature2Text, text_en: content.feature2Text_en,
            imageUrls: images.length > 3 ? [images[3]] : []
          },
          {
            id: 'b7', type: 'image_gallery',
            title_ru: 'Дизайн экраны', title_en: 'Design Screens',
            text_ru: '', text_en: '',
            imageUrls: images.slice(4) // The rest of the images
          }
        ]
      };
      
      await prisma.project.update({
        where: { id: project.id },
        data: { customData: JSON.stringify(customData) }
      });
      console.log("Updated customData successfully");
    }

  } else {
    console.log("Not found");
  }
}
run();
