import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ArrowDown } from 'lucide-react';
import { productConcepts,portfolioResearch } from '@/lib/product-concepts';
import './concepts.css';
export const metadata = { title:'Новые пять концепций — Almas', robots:{index:false,follow:false} };
export default async function Concepts({params}) {
  const {lang} = await params;
  return <main className="concept-showroom concept-showroom-v2">
    <header className="showroom-top"><Link href={`/${lang}`}><ArrowLeft size={15}/> Портфолио</Link><span>АЛМАС / PRODUCT DESIGNER</span></header>
    <div className="showroom-intro"><p>НОВАЯ ПОДБОРКА · 01 — 05</p><h1>Пять новых концепций.</h1><div><p>Реальные интерфейсы, контекст проектов и личный вклад. Откройте страницу, чтобы оценить композицию и взаимодействия.</p><a className="showroom-research-link" href="#research">На чём основаны варианты <ArrowDown size={13}/></a></div></div>
    <div className="showroom-grid">{productConcepts.map(c=><article key={c.id} className={`showroom-card showroom-${c.key}`}>
      <Link href={`/${lang}/concepts/${c.id}`} className="showroom-preview" style={{background:c.background}}><Image src={`/concept-previews/${c.id}.png`} alt={`Главная: ${c.name}`} width={1280} height={800} sizes="(max-width:760px) 90vw, 45vw" unoptimized/><span className="showroom-open"><ArrowUpRight size={20}/></span></Link>
      <div className="showroom-title"><span>{c.number}</span><h2><Link href={`/${lang}/concepts/${c.id}`}>{c.name}</Link></h2><small>{c.tag}</small></div>
      <p>{c.description}</p><details><summary>Логика варианта <span>+</span></summary><p><b>Сильная сторона.</b> {c.strength}</p><p><b>Компромисс.</b> {c.tradeoff}</p><p>Референс: <a href={c.href} target="_blank" rel="noreferrer">{c.reference} ↗</a>. Использован принцип подачи; чужие интерфейсы и материалы в портфолио не переносились.</p></details>
    </article>)}</div>
    <section className="showroom-research" id="research"><div><span>ПРИНЦИПЫ ПОРТФОЛИО</span><h2>Что изменилось<br/>после разбора примеров</h2><p>За первым впечатлением должен быть понятен сам дизайнер: с какими задачами он работает, что сделал лично и как пришёл к решению.</p></div><div><ol><li><b>Работы — ближе к началу.</b> Короткое знакомство не превращается в отдельный плакат.</li><li><b>Заголовок объясняет задачу.</b> Не только название продукта или отрасль.</li><li><b>Вклад виден до открытия кейса.</b> Роль, фокус работы и стадия проекта подписаны.</li><li><b>Реальные экраны вместо декораций.</b> Интерфейсы сохраняют пропорции, карточки — единый размер.</li><li><b>Движение помогает смотреть.</b> Фокус, смена проекта, мягкое движение макетов; обычная прокрутка остаётся доступной.</li></ol><div className="showroom-sources">{portfolioResearch.map(s=><p key={s.href}><a href={s.href} target="_blank" rel="noreferrer">{s.name} ↗</a><span>{s.point}</span></p>)}</div></div></section>
    <footer className="showroom-bottom">Это пять альтернатив главной страницы. Содержимое кейсов доступно из каждой концепции.</footer>
  </main>;
}
