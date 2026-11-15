import {notFound} from 'next/navigation';
import ConceptHome from '@/components/concepts/ConceptHome';
import ProductConcepts from '@/components/concepts/ProductConcepts';
import {findProductConcept} from '@/lib/product-concepts';
import {findHomeConcept} from '@/lib/home-concepts';
import '../concepts.css';
import '../product-concepts.css';
export async function generateMetadata({params}) {
  const {variant} = await params;
  const concept = findProductConcept(variant) || findHomeConcept(variant);
  return {title:concept ? `${concept.name} — Almas / Направление ${variant}`:'Направление не найдено',robots:{index:false,follow:false}};
}
export default async function ConceptPage({params,searchParams}) {
  const {lang,variant} = await params;
  const query = await searchParams;
  if (findProductConcept(variant)) return <ProductConcepts variant={variant} lang={lang} clean={query.clean==='1'}/>;
  if (!findHomeConcept(variant)) notFound();
  return <ConceptHome variant={variant} lang={lang} clean={query.clean==='1'}/>;
}
