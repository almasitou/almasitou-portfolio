import { siApple, siGoogleplay } from 'simple-icons';

const icons = { 'App Store': siApple.path, 'Google Play': siGoogleplay.path };

export default function CaseStoreLinks({ links }) {
  if (!links?.length) return null;

  return (
    <ul className="od-case-stores" role="list">
      {links.map(({ label, href }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
              <path d={icons[label]} />
            </svg>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
