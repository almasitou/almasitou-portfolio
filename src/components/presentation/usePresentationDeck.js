'use client';

import {useEffect,useRef,useState} from 'react';
import {useReferenceViewport} from '@/components/ReferenceShared';

export default function usePresentationDeck(ids,documentKey) {
 const {width,height}=useReferenceViewport();
 const mobile=width<=900;
 const track=useRef(null),current=useRef(0),initialized=useRef(null),lastWheel=useRef(0);
 const [trackHeight,setTrackHeight]=useState(0);
 const availableHeight=trackHeight||height;
 const scale=Math.min(width/1920,availableHeight/1080);
 const signature=ids.join('|');
 const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 function go(index) {
  const target=Math.max(0,Math.min(ids.length-1,index));
  current.current=target;
  if(mobile){
   document.getElementById(ids[target])?.scrollIntoView({block:'start',behavior:reduced()?'instant':'smooth'});
  }else track.current?.scrollTo({left:target*track.current.clientWidth,behavior:reduced()?'instant':'smooth'});
  window.history.replaceState(null,'',`#${ids[target]}`);
 }

 useEffect(()=>{
  const node=track.current;
  if(!node||mobile)return;
  const observer=new ResizeObserver(()=>setTrackHeight(node.clientHeight));
  observer.observe(node);
  return()=>observer.disconnect();
 },[mobile]);

 useEffect(()=>{
  if(width!==window.innerWidth||height!==window.innerHeight)return;
  const node=track.current;
  if(!node)return;
  if(initialized.current!==documentKey){
   initialized.current=documentKey;
   const index=signature.split('|').indexOf(location.hash.slice(1));
   current.current=Math.max(0,index);
   if(mobile&&current.current>0)document.getElementById(signature.split('|')[current.current])?.scrollIntoView();
  }
  if(!mobile)node.scrollLeft=current.current*node.clientWidth;
 },[width,height,mobile,signature,documentKey]);

 useEffect(()=>{
  const node=track.current;
  if(!node||mobile)return;
  let sum=0,last=0;
  function wheel(event){
   if(event.ctrlKey||document.querySelector('dialog[open]')||event.target.closest('[data-horizontal-scroll]'))return;
   event.preventDefault();
   const now=performance.now();
   if(now-last>180)sum=0;
   last=now;
   if(now-lastWheel.current<700)return;
   sum+=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
   if(Math.abs(sum)<30)return;
   const next=Math.max(0,Math.min(signature.split('|').length-1,current.current+Math.sign(sum)));
   lastWheel.current=now;sum=0;
   node.scrollTo({left:next*node.clientWidth,behavior:reduced()?'instant':'smooth'});
  }
  node.addEventListener('wheel',wheel,{passive:false});
  return()=>node.removeEventListener('wheel',wheel);
 },[mobile,signature]);

 function onScroll(){
  if(mobile||!track.current)return;
  const index=Math.max(0,Math.min(ids.length-1,Math.round(track.current.scrollLeft/track.current.clientWidth)));
  current.current=index;
 }
 function onKeyDown(event){
  if(mobile||event.target.closest('a,button,input,textarea,select,[data-horizontal-scroll]')||document.querySelector('dialog[open]'))return;
  let index;
  if(['ArrowRight','PageDown',' '].includes(event.key))index=current.current+1;
  else if(['ArrowLeft','PageUp'].includes(event.key))index=current.current-1;
  else if(event.key==='Home')index=0;
  else if(event.key==='End')index=ids.length-1;
  else return;
  event.preventDefault();go(index);
 }
 return {track,go,onScroll,onKeyDown,style:{'--pd-scale':scale,'--pd-offset-y':`${Math.max(0,(availableHeight-1080*scale)/2)}px`}};
}
