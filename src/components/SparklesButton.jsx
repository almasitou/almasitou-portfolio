"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sparkle = ({ size, color, style }) => {
  return (
    <motion.svg
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1, 0], 
        rotate: [0, 180], 
        opacity: [0, 1, 0] 
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        ...style
      }}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 0L13.8824 9.11765L23 11L13.8824 12.8824L12 22L10.1176 12.8824L1 11L10.1176 9.11765L12 0Z"
        fill={color}
        className="drop-shadow-[0_0_10px_rgba(96,165,250,1)]"
      />
    </motion.svg>
  );
};

export default function SparklesButton({ children, href, className, target }) {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      const sparkle = {
        id: String(Math.random()),
        size: Math.random() * 15 + 10, // 10px to 25px
        color: ['#60A5FA', '#93C5FD', '#BFDBFE', '#3B82F6'][Math.floor(Math.random() * 4)],
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      };
      
      setSparkles(s => [...s, sparkle]);

      setTimeout(() => {
        setSparkles(s => s.filter(sp => sp.id !== sparkle.id));
      }, 800);
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <a 
      href={href} 
      target={target}
      className={`relative overflow-hidden group/sparkles ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setSparkles([]); }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence>
          {sparkles.map(sp => (
            <Sparkle 
              key={sp.id} 
              size={sp.size} 
              color={sp.color} 
              style={{ top: sp.top, left: sp.left, transform: 'translate(-50%, -50%)' }} 
            />
          ))}
        </AnimatePresence>
      </div>
      <span className="relative z-10 flex items-center gap-1 md:gap-2 whitespace-nowrap w-full justify-center">
        {children}
      </span>
    </a>
  );
}
