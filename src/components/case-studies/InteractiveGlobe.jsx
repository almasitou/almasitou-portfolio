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
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (!globeRef.current || !countries.features.length) return;

    globeRef.current.controls().enableZoom = false;
    
    if (userInteracted) {
      globeRef.current.controls().autoRotate = false;
      return;
    }

    globeRef.current.controls().autoRotate = false;

    let isUsa = false;
    let timeoutId;
    
    // Initial view (middle of Atlantic)
    globeRef.current.pointOfView({ lat: 40, lng: -20, altitude: 2 }, 1000);

    const animate = () => {
      if (userInteracted || !globeRef.current) return;
      
      const targetLng = isUsa ? -90 : 10; // -90 for USA, 10 for Europe
      isUsa = !isUsa;
      
      globeRef.current.pointOfView({ lat: 40, lng: targetLng, altitude: 2 }, 3000);
      timeoutId = setTimeout(animate, 5000); // 3s travel + 2s pause
    };

    timeoutId = setTimeout(animate, 2000); // Start after 2s
    
    return () => clearTimeout(timeoutId);
  }, [globeRef.current, countries, userInteracted]);

  return (
    <div 
      ref={containerRef} 
      onPointerDown={() => setUserInteracted(true)}
      onTouchStart={() => setUserInteracted(true)}
      onWheel={() => setUserInteracted(true)}
      className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center min-h-[300px] lg:min-h-[500px]"
    >
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
          polygonAltitude={d => ((highlightedCountries.includes(d.properties.ISO_A3) || highlightedCountries.includes(d.properties.ADM0_A3)) ? 0.03 : 0.01)}
          polygonCapColor={d => ((highlightedCountries.includes(d.properties.ISO_A3) || highlightedCountries.includes(d.properties.ADM0_A3)) ? '#3b82f6' : 'rgba(39, 39, 42, 0.4)')}
          polygonSideColor={() => 'rgba(0,0,0,0.1)'}
          polygonStrokeColor={() => '#18181b'}
          labelsData={[
            { id: 'USA', name: 'USA', lat: 39.5, lng: -98.5 },
            { id: 'FRA', name: 'France', lat: 46.2, lng: 2.2 },
            { id: 'ITA', name: 'Italy', lat: 41.8, lng: 12.5 },
            { id: 'PRT', name: 'Portugal', lat: 39.3, lng: -8 },
            { id: 'BEL', name: 'Belgium', lat: 50.5, lng: 4.4 }
          ]}
          labelLat={d => d.lat}
          labelLng={d => d.lng}
          labelText={d => d.name}
          labelSize={2}
          labelDotRadius={0.4}
          labelColor={() => '#ffffff'}
          labelResolution={2}
          labelAltitude={0.05}
        />
      )}
    </div>
  );
}
