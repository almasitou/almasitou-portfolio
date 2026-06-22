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
          htmlElementsData={[
            { id: 'USA', name: 'USA', lat: 38, lng: -97 },
            { id: 'FRA', name: 'France', lat: 46, lng: 2 },
            { id: 'ITA', name: 'Italy', lat: 41.8, lng: 12.5 },
            { id: 'PRT', name: 'Portugal', lat: 39.3, lng: -8 },
            { id: 'BEL', name: 'Belgium', lat: 50.5, lng: 4.4 }
          ]}
          htmlElement={d => {
            const el = document.createElement('div');
            el.innerHTML = `
              <div style="display:flex; flex-direction:column; align-items:center; pointer-events:none; font-family:sans-serif;">
                <div style="padding: 4px 10px; background: rgba(9, 9, 11, 0.9); border: 1px solid rgba(59, 130, 246, 0.5); color: #60a5fa; font-size: 13px; border-radius: 6px; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2); backdrop-filter: blur(4px); white-space: nowrap; font-weight: 600;">
                  ${d.name}
                </div>
                <div style="width: 2px; height: 24px; background: linear-gradient(to bottom, rgba(59, 130, 246, 0.8), transparent);"></div>
              </div>
            `;
            el.style.transform = 'translate(-50%, -100%)';
            return el;
          }}
        />
      )}
    </div>
  );
}
