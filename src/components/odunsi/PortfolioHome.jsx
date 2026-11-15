import Image from 'next/image';
import Link from 'next/link';
import { Blocks, Download, ScanSearch, Workflow } from 'lucide-react';
import { siInstagram, siTelegram, siWhatsapp } from 'simple-icons';
import HomeCoverGallery from './HomeCoverGallery';
import LanguageSwitch from './LanguageSwitch';
import LinkedInIcon from './LinkedInIcon';
import ProjectPreview from './ProjectPreview';
import '../../app/odunsi-home.css';

const COPY = {
  ru: {
    name: 'Алмас Кажымуратулы',
    language: 'Язык сайта',
    telegram: 'Написать в Telegram',
    whatsapp: 'Написать в WhatsApp',
    linkedin: 'Профиль в LinkedIn',
    instagram: 'Профиль в Instagram',
    resume: 'Скачать резюме',
    profile: 'Профиль дизайнера',
    work: 'Избранные работы',
    skip: 'Перейти к работам',
    experience: 'Опыт работы',
    about: 'О себе',
    approach: 'Как я работаю',
  },
  en: {
    name: 'Almas Qajymuratuly',
    language: 'Site language',
    telegram: 'Message on Telegram',
    whatsapp: 'Message on WhatsApp',
    linkedin: 'LinkedIn profile',
    instagram: 'Instagram profile',
    resume: 'Download résumé',
    profile: 'Designer profile',
    work: 'Selected work',
    skip: 'Skip to work',
    experience: 'Experience',
    about: 'About me',
    approach: 'How I work',
  },
};

const APPROACH_ICONS = [ScanSearch, Workflow, Blocks];

const COLUMN_WIDTHS = [520, 444];
const TOTAL_COLUMN_WIDTH = COLUMN_WIDTHS[0] + COLUMN_WIDTHS[1];
const COVER_HEIGHTS = { rrs: 354, avrora: 245, merchant: 270, b2c: 315, skibo: 372, bao: 342, 'qalan-english': 525 };

function stackPosition(column, { previousCovers, previousCards }) {
  return {
    '--od-home-column': column + 1,
    '--od-home-cover-offset': previousCovers / TOTAL_COLUMN_WIDTH,
    '--od-home-cards-before': previousCards,
  };
}

const COMPANY_LOGOS = {
  'Retail Robotics Solutions': 'rrs.svg',
  'Qalan.kz': 'qalan.svg',
  'Avrora Holdings': 'aurora.svg',
  'Europharma Tech': 'europharma-icon.png',
  'КБТУ / ИНИИТ': 'kbtu-icon.png',
  'KBTU / IINIT': 'kbtu-icon.png',
  'Hickmet Travel': 'hickmet-white.png',
  inLab: 'inlab.svg',
};

function ContactActions({ copy, lang, profile }) {
  return (
    <div className="od-home-actions">
      <a className="od-home-button od-home-telegram" href={profile.contact}
        target="_blank" rel="noreferrer" aria-label={copy.telegram} title={copy.telegram}>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d={siTelegram.path} /></svg>
      </a>
      <a className="od-home-button od-home-whatsapp" href={profile.whatsapp}
        target="_blank" rel="noreferrer" aria-label={copy.whatsapp} title={copy.whatsapp}>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d={siWhatsapp.path} /></svg>
      </a>
      <a className="od-home-button od-home-linkedin" href={profile.linkedin}
        target="_blank" rel="noreferrer" aria-label={copy.linkedin} title={copy.linkedin}>
        <LinkedInIcon />
      </a>
      <a className="od-home-button od-home-instagram" href={profile.instagram}
        target="_blank" rel="noreferrer" aria-label={copy.instagram} title={copy.instagram}>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d={siInstagram.path} /></svg>
      </a>
      <a className="od-home-button od-home-resume" href={`/resume_${lang}.pdf`} download aria-label={`CV · ${copy.resume}`}>
        <Download size={17} strokeWidth={1.8} aria-hidden="true" />
        <span lang="en">CV</span>
      </a>
    </div>
  );
}

function Profile({ copy, lang, profile }) {
  return (
    <header className="od-home-profile">
      <div className="od-home-portrait">
        <Image
          src="/profile.jpg"
          alt=""
          fill
          sizes="(min-width: 1440px) 396px, (min-width: 1110px) calc(28.889vw - 20px), (min-width: 1024px) 300px, calc(100vw - 40px)"
          preload
        />
        <LanguageSwitch lang={lang} label={copy.language} />
        <div className="od-home-profile-copy">
          <h1>{copy.name}</h1>
          <p className="od-home-role" lang="en">Product Designer</p>
          <p className="od-home-intro">{profile.intro}</p>
        </div>
      </div>
      <ContactActions copy={copy} lang={lang} profile={profile} />
    </header>
  );
}

function ProfileDetails({ copy, profile }) {
  return (
    <>
      <section className="od-home-detail-card od-home-about">
        <h2>{copy.about}</h2>
        <p>{profile.about}</p>
      </section>
      <section className="od-home-detail-card od-home-approach">
        <h2>{copy.approach}</h2>
        <ol className="od-home-approach-list" role="list">
          {profile.approach.map(([title, description], index) => {
            const Icon = APPROACH_ICONS[index] ?? Workflow;

            return (
              <li className="od-home-approach-step" key={title}>
                <span className="od-home-approach-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="od-home-experience">
        <h2 className="od-home-detail-card od-home-section-title">{copy.experience}</h2>
        <ul className="od-home-experience-list" role="list">
          {profile.experience.map(([company, role, period, task]) => (
            <li key={`${company}-${period}`} className="od-home-detail-card od-home-experience-item">
              <div className="od-home-experience-heading">
                {COMPANY_LOGOS[company] && (
                  <span className="od-home-company-logo" aria-hidden="true">
                    <Image src={`/uploads/companies/${COMPANY_LOGOS[company]}`} alt="" fill sizes="52px" />
                  </span>
                )}
                <div className="od-home-experience-title">
                  <h3>{company}</h3>
                  <div className="od-home-experience-meta">
                    <p className="od-home-experience-role" lang="en">{role}</p>
                    <p className="od-home-period">{period}</p>
                  </div>
                </div>
              </div>
              <p className="od-home-experience-task">{task}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function Gallery({ copy, lang, projects, profile }) {
  const columns = COLUMN_WIDTHS.map(() => ({ previousCovers: 0, previousCards: 0 }));

  return (
    <section className="od-home-gallery" id="work" aria-labelledby="od-home-work-title" tabIndex={0}>
      <h2 id="od-home-work-title" className="sr-only">{copy.work}</h2>
      <HomeCoverGallery>
        {projects.map((project, index) => {
          const column = index % columns.length;
          const isKaspi = project.slug === 'kaspi';
          const coverHeight = isKaspi ? Math.round(COLUMN_WIDTHS[column] * .83) : (COVER_HEIGHTS[project.slug] ?? 320);
          const style = {
            ...stackPosition(column, columns[column]),
            '--od-home-cover-aspect': `${COLUMN_WIDTHS[column]} / ${coverHeight}`,
          };
          columns[column].previousCovers += coverHeight;
          columns[column].previousCards += 1;

          return (
            <Link
              key={project.slug}
              href={`/${lang}/project/${project.slug}`}
              className={isKaspi || project.slug === 'qalan-english' ? 'od-home-card od-home-card--custom-aspect' : 'od-home-card'}
              style={style}
              aria-label={project.name}
              aria-description={project.headline}
            >
              <div className="od-home-card-art" aria-hidden="true">
                <ProjectPreview slug={project.slug} lang={lang} />
              </div>
            </Link>
          );
        })}
      </HomeCoverGallery>
      <div className="od-home-details-mobile">
        <ProfileDetails copy={copy} profile={profile} />
      </div>
    </section>
  );
}

export default function PortfolioHome({ lang, projects, profile }) {
  const copy = COPY[lang] ?? COPY.en;

  return (
    <main className="od-home">
      <a className="od-home-skip" href="#work">{copy.skip}</a>
      <section className="od-home-rail" aria-label={copy.profile} tabIndex={0}>
        <Profile copy={copy} lang={lang} profile={profile} />
        <div className="od-home-details-desktop">
          <ProfileDetails copy={copy} profile={profile} />
        </div>
      </section>
      <Gallery copy={copy} lang={lang} projects={projects} profile={profile} />
    </main>
  );
}
