import content from './odunsi-content.json';
import screenAssets from './odunsi-assets.json';

export const ODUNSI_SCREEN_ASSETS = screenAssets;

function localizeCaseSections(sections, locale) {
  return sections.map(section => ({
    ...section[locale],
    composition: section.composition,
    mediaFirst: section.mediaFirst,
    images: section.images.map(image => ({
      ...screenAssets[image.asset],
      ...image[locale],
      preview: image.preview,
    })),
  }));
}

export function getOdunsiProjects(lang) {
  const locale = lang === 'ru' ? 'ru' : 'en';

  return content.projects.map(project => ({
    slug: project.slug,
    ...project[locale],
    storeLinks: project.storeLinks,
    cover: project.cover.map(key => screenAssets[key]),
    research: project[locale].research && {
      ...project[locale].research,
      image: screenAssets[project[locale].research.image],
    },
    sections: localizeCaseSections(project.sections, locale),
    admin: project.admin && {
      title: project.admin[locale],
      sections: localizeCaseSections(project.admin.sections, locale),
    },
  }));
}

export function getOdunsiProfile(lang) {
  const { contact, whatsapp, linkedin, instagram, email, ru, en } = content.profile;
  return { ...(lang === 'ru' ? ru : en), contact, whatsapp, linkedin: linkedin || 'https://www.linkedin.com/in/almasitou', instagram, email };
}
