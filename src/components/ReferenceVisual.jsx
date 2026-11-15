'use client';

import {useId} from 'react';
import Image from 'next/image';
import imageSizes from '@/lib/portfolio-images.json';
import {getReferenceStyle} from '@/lib/reference-content';
import '@/app/reference-visual.css';

const shapePaths = {
  intro: 'M60 0H420A60 60 0 0 1 480 60A60 60 0 0 1 540 0H900A60 60 0 0 1 960 60V679A60 60 0 0 1 900 739H540A60 60 0 0 1 480 679A60 60 0 0 1 420 739H60A60 60 0 0 1 0 679V60A60 60 0 0 1 60 0Z',
  project: 'M60 0H420A60 60 0 0 1 480 60A60 60 0 0 1 540 0H900A60 60 0 0 1 960 60V679A60 60 0 0 1 900 739H60A60 60 0 0 1 0 679V429.5A60 60 0 0 1 60 369.5A60 60 0 0 1 0 309.5V60A60 60 0 0 1 60 0Z',
  round: 'M60 0H900A60 60 0 0 1 960 60V679A60 60 0 0 1 900 739H60A60 60 0 0 1 0 679V60A60 60 0 0 1 60 0Z',
  case: 'M60 0H420A60 60 0 0 1 480 60A60 60 0 0 1 540 0H900A60 60 0 0 1 960 60V309.5A60 60 0 0 1 900 369.5A60 60 0 0 1 960 429.5V679A60 60 0 0 1 900 739H540A60 60 0 0 1 480 679A60 60 0 0 1 420 739H60A60 60 0 0 1 0 679V429.5A60 60 0 0 1 60 369.5A60 60 0 0 1 0 309.5V60A60 60 0 0 1 60 0Z',
};

export function ReferenceShape({kind = 'intro', color = '#2c2c32', className = ''}) {
  const id = useId().replace(/:/g, '');
  const shape = shapePaths[kind] || shapePaths.intro;
  const textured = !['#2c2c32', '#1e1e24'].includes(color.toLowerCase());
  const textureSeed = [...color].reduce((seed, character) => (seed * 31 + character.charCodeAt(0)) % 97, 17);
  const contourFlip = textureSeed % 2 === 0 ? 'translate(960 0) scale(-1 1)' : undefined;
  return <svg className={`rf-shape rf-shape--${kind} ${className}`} viewBox="0 0 960 739" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id={`${id}-clip`}><path d={shape}/></clipPath>
      {textured && <>
        <linearGradient id={`${id}-light`} x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#ffffff" stopOpacity=".13"/>
          <stop offset=".48" stopColor="#ffffff" stopOpacity="0"/>
          <stop offset="1" stopColor="#20180e" stopOpacity=".055"/>
        </linearGradient>
        <radialGradient id={`${id}-contour-fade`} cx=".48" cy=".26" r=".9">
          <stop stopColor="#fff" stopOpacity="0"/>
          <stop offset=".42" stopColor="#fff" stopOpacity=".2"/>
          <stop offset="1" stopColor="#fff"/>
        </radialGradient>
        <mask id={`${id}-contour-mask`}><rect width="960" height="739" fill={`url(#${id}-contour-fade)`}/></mask>
        <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed={textureSeed} stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
      </>}
    </defs>
    <g clipPath={`url(#${id}-clip)`}>
      <path d={shape} fill={color}/>
      {textured && <>
        <rect width="960" height="739" fill={`url(#${id}-light)`}/>
        <g className="rf-shape-contours" mask={`url(#${id}-contour-mask)`}>
          <g transform={contourFlip}>
            {Array.from({length:16}, (_, index) => {
              const spread = index * 29;
              return <path key={index} d={`M ${-280 + spread} 780 C ${-120 + spread} 555, ${-205 + spread} 383, ${-60 + spread} 240 S ${140 + spread} 75, ${190 + spread} -85`}/>;
            })}
          </g>
        </g>
        <rect className="rf-shape-grain" width="960" height="739" filter={`url(#${id}-grain)`} opacity=".12"/>
      </>}
    </g>
  </svg>;
}

function ScreenImage({src, alt, priority = false, className = '', mobile = false}) {
  const dimensions = imageSizes[src] || (mobile ? {width: 750, height: 1624} : {width: 1600, height: 1000});
  return <Image className={className} src={src} alt={alt} width={dimensions.width} height={dimensions.height}
    sizes={mobile ? '(max-width: 768px) 46vw, 440px' : '(max-width: 768px) 100vw, 1100px'}
    preload={priority} unoptimized={src.startsWith('http')}/>;
}

export function ReferenceMockup({project, className = '', priority = false}) {
  const style = getReferenceStyle(project);
  const name = project?.name || project?.title || 'Проект';
  const images = style.images;
  if (!images.length) return <div className={`rf-project-mockup rf-project-mockup--empty ${className}`} aria-hidden="true"/>;
  const phones = style.mediaKind === 'phones';
  const nativeBezel = project?.slug === 'skibo';
  return <div className={`rf-project-mockup rf-project-mockup--${style.mediaKind} rf-project-mockup--${project?.slug || 'additional'} ${className}`}>
    {phones ? images.slice(0, 2).map((src, index) => <div key={src}
      className={`rf-phone rf-phone--${index ? 'second' : 'first'} ${nativeBezel ? 'rf-phone--native' : 'rf-phone--framed'}`}>
      <ScreenImage src={src} alt={`${name} — экран ${index + 1}`} priority={priority} mobile/>
    </div>) : style.mediaKind === 'cover' ? <div className="rf-cover-art">
      <ScreenImage src={images[0]} alt={name} priority={priority}/>
    </div> : <div className={`rf-computer ${project?.slug === 'taza' ? 'rf-computer--portrait-source' : ''}`}>
      <div className="rf-computer-display">
        <div className="rf-computer-camera" aria-hidden="true"/>
        <div className="rf-computer-chrome" aria-hidden="true"><i/><i/><i/><span>{name}</span></div>
        <div className="rf-computer-screen"><ScreenImage src={images[0]} alt={`${name} — интерфейс продукта`} priority={priority}/></div>
      </div>
      <div className="rf-computer-base" aria-hidden="true"><span/></div>
    </div>}
  </div>;
}
