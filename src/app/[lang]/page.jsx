import PortfolioHome from '@/components/odunsi/PortfolioHome';
import { getOdunsiProfile, getOdunsiProjects } from '@/lib/odunsi-portfolio';

export default async function Home({ params }) {
  const { lang } = await params;

  return (
    <PortfolioHome
      lang={lang}
      profile={getOdunsiProfile(lang)}
      projects={getOdunsiProjects(lang)}
    />
  );
}
