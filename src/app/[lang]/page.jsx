import PortfolioHome from '@/components/showcase/PortfolioHome';
import { getShowcaseProfile, getShowcaseProjects } from '@/lib/showcase-portfolio';

export default async function Home({ params }) {
  const { lang } = await params;

  return (
    <PortfolioHome
      lang={lang}
      profile={getShowcaseProfile(lang)}
      projects={getShowcaseProjects(lang)}
    />
  );
}
