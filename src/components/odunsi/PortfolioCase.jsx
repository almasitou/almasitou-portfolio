import Image from 'next/image';
import CaseTopbar from './CaseTopbar';
import CaseScreens from './CaseScreens';
import CaseText from './CaseText';
import CaseDevice from './CaseDevice';
import CaseProjectFooter from './CaseProjectFooter';
import CaseStoreLinks from './CaseStoreLinks';
import DashboardPresentation from './DashboardPresentation';
import '@/app/odunsi-case.css';

const labels = {
  ru: {
    role: 'Моя роль', audience: 'Для кого', stage: 'Формат проекта',
    brief: 'Задача', context: 'Исходная задача', constraints: 'Что усложняло задачу',
    contribution: 'Мой вклад', approach: 'Подход', decisions: 'Ключевые решения', outcome: 'Результат',
  },
  en: {
    role: 'My role', audience: 'Audience', stage: 'Project format',
    brief: 'The challenge', context: 'The problem', constraints: 'What made it harder',
    contribution: 'My contribution', approach: 'Approach', decisions: 'Key decisions', outcome: 'Outcome',
  },
};

function CaseCover({ images, slug }) {
  if (slug === 'rrs') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/rrs-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'avrora') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/avrora-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'kaspi') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/kaspi-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'skibo') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/skibo-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'qalan-english') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/qalan-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'bao') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/bao-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'merchant') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/merchant-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }
  if (slug === 'b2c' || slug === 'b2b') {
    return (
      <Image className="od-case-cover-image" src="/odunsi/b2b-case-cover-titled.webp" alt=""
        width={2400} height={1250} sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
        unoptimized loading="eager" fetchPriority="high" />
    );
  }

  const phones = images.length > 1;
  const laptop = slug === 'avrora'
    ? { src: '/presentation-v2/imgMacBook16Pro.png', width: 795, height: 974 }
    : { src: '/presentation-v2/imgMacBook16Pro1.png', width: 948, height: 576 };

  return (
    <div className={`od-case-cover od-case-cover--${phones ? 'phones' : 'laptop'}`} aria-hidden="true">
      {images.map(image => (
        <div key={image.src} className="od-case-cover-device">
          {phones ? (
            <CaseDevice screen={image} loading="eager" sizes="(max-width: 680px) 37vw, 320px" />
          ) : (
            <>
              <Image {...laptop} alt="" className="od-case-laptop-photo" sizes="(max-width: 680px) 82vw, 850px" loading="eager" />
              <div className="od-case-cover-display">
                <Image src={image.src} width={image.width} height={image.height} alt="" quality={90} loading="eager"
                  sizes="(max-width: 680px) 68vw, 720px" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PortfolioCase({ lang, project, relatedProjects }) {
  const t = labels[lang] || labels.en;
  const cover = <CaseCover images={project.cover} slug={project.slug} />;
  const [opening, ...decisions] = project.sections;
  return (
    <main className="od-case" data-project={project.slug}>
      <article className="od-case-inner">
        <CaseTopbar lang={lang} slug={project.slug} />
        <header className="od-case-hero">
          {cover}
          <div className="od-case-hero-copy">
            <div className="od-case-copy-card od-case-summary">
              <p className="od-case-name">{project.name} <span>{project.tag}</span></p>
              <h1>{project.headline}</h1>
              <p className="od-case-intro"><CaseText>{project.intro}</CaseText></p>
            </div>
            <dl className="od-case-copy-card od-case-facts">
              {[[t.role, project.role], [t.audience, project.audience], [t.stage, project.stage]].map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
        </header>

        <CaseScreens sections={opening ? [opening] : []} lang={lang} opening />

        <section className="od-case-chapter" id="brief" aria-labelledby="brief-title">
          <h2 className="sr-only" id="brief-title">{t.brief}</h2>
          <div className="od-case-overview">
            {[[t.context, project.problem], [t.constraints, project.difficulty], [t.contribution, project.contribution]].map(([label, text]) => (
              <div className="od-case-copy-card" key={label}><h3>{label}</h3><p><CaseText>{text}</CaseText></p></div>
            ))}
          </div>
        </section>

        <section className={`od-case-chapter od-case-approach${project.research?.image ? ' od-case-approach--illustrated' : ''}`} id="approach" aria-labelledby="approach-title">
          <div className="od-case-copy-card">
            <h2 id="approach-title">{t.approach}</h2>
            <div className="od-case-prose">
              {project.research && <p><CaseText>{project.research.body}</CaseText></p>}
              <p><CaseText>{project.tradeoff}</CaseText></p>
            </div>
          </div>
          {project.research?.image && (
            <figure className="od-case-research">
              <Image {...project.research.image} alt={project.research.alt} sizes="(max-width: 680px) 90vw, 800px" />
            </figure>
          )}
        </section>

        <section className="od-case-chapter" id="decisions" aria-labelledby="decisions-title">
          <h2 className="sr-only" id="decisions-title">
            {project.clientSectionTitle || t.decisions}
          </h2>
          <CaseScreens sections={decisions} lang={lang} />
        </section>

        {project.admin && (
          <section className="od-case-chapter" id="admin-panel" aria-labelledby="admin-panel-title">
            <h2 className="sr-only" id="admin-panel-title">{project.admin.title}</h2>
            <CaseScreens sections={project.admin.sections} lang={lang} />
          </section>
        )}

        <section className="od-case-chapter od-case-outcome od-case-copy-card" id="outcome" aria-labelledby="outcome-title">
          <h2 id="outcome-title">{t.outcome}</h2>
          {project.metrics && (
            <dl className="od-case-metrics">
              {project.metrics.map(([value, description]) => (
                <div key={value}><dt>{value}</dt><dd>{description}</dd></div>
              ))}
            </dl>
          )}
          <p className="od-case-prose"><CaseText>{project.outcome}</CaseText></p>
          <CaseStoreLinks links={project.storeLinks} />
        </section>

        <CaseProjectFooter projects={relatedProjects} lang={lang} />
      </article>
    </main>
  );
}
