"use client";

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function InteractiveGlobe() {
  const globeRef = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setSize({
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const highlightedCountries = ['USA', 'FRA', 'ITA', 'PRT', 'BEL'];

  useEffect(() => {
    if (globeRef.current && countries.features.length) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.8;
      globeRef.current.controls().enableZoom = false;
      
      // Try to focus near Europe/USA
      setTimeout(() => {
        if (globeRef.current) {
          globeRef.current.pointOfView({ lat: 40, lng: -20, altitude: 2 }, 1000);
        }
      }, 500);
    }
  }, [globeRef.current, countries]);

  return (
    <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
      {size.width > 0 && (
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={true}
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.15}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          polygonsData={countries.features}
          polygonAltitude={d => (highlightedCountries.includes(d.properties.ISO_A3) ? 0.03 : 0.01)}
          polygonCapColor={d => (highlightedCountries.includes(d.properties.ISO_A3) ? '#3b82f6' : 'rgba(39, 39, 42, 0.4)')}
          polygonSideColor={() => 'rgba(0,0,0,0.1)'}
          polygonStrokeColor={() => '#18181b'}
          polygonLabel={({ properties: d }) => `
            <div class="bg-zinc-900 border border-zinc-700 text-white px-3 py-1.5 rounded-lg text-sm shadow-xl font-sans">
              ${d.ADMIN}
            </div>
          `}
        />
      )}
    </div>
  );
}
