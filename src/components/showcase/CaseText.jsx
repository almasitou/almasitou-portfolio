export default function CaseText({ children }) {
  if (typeof children !== 'string') return children;
  const tail = children.match(/(?:\S+\s+){2}\S+$/u);
  if (!tail || tail.index === 0) return children;
  return <>{children.slice(0, tail.index)}<span className="od-case-text-tail">{tail[0]}</span></>;
}
