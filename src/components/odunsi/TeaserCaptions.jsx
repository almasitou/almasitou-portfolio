export function coverTime(start, end) {
  return {
    '--beat-in': start + '%',
    '--beat-ready': (start + 2.6) + '%',
    '--beat-out': (end - 2.6) + '%',
    '--beat-end': end + '%',
  };
}

export default function TeaserCaptions({ beats, lang, layout = 'top' }) {
  return (
    <div className={`od-teaser-captions od-teaser-captions--${layout}`}>
      {beats.map(({ start, end, ru, en }) => {
        const [title, detail] = lang === 'ru' ? ru : en;

        return (
          <div className="od-teaser-caption od-motion-layer" key={start} style={coverTime(start, end)}>
            <p className="od-teaser-title">{title}</p>
            {detail && <p className="od-teaser-detail">{detail}</p>}
          </div>
        );
      })}
    </div>
  );
}
