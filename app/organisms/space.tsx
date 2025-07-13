'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function SpaceScene() {
  const [isMounted, setIsMounted] = useState(false);

  const starColors = ['#ffffff', '#dbefff', '#c2dfff', '#a0c4ff'];

  const stars = useMemo(() => {
    return Array.from({ length: 280 }).map((_, i) => {
      const size = Math.random() > 0.92 ? 2 + Math.random() * 2 : 0.6 + Math.random();
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.3 + Math.random() * 0.6,
        color,
      };
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="
        absolute inset-0 z-[-1] overflow-hidden touch-none
        bg-gradient-to-b from-black via-[#0a0a1a] to-black
      "
      style={{
        contain: 'strict',
        clipPath: 'inset(0% 0% 0% 0%)',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            background: `radial-gradient(circle, ${star.color} 40%, transparent 80%)`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Nebula glow */}
      <motion.div
        className="absolute top-[20%] left-[12%] w-[220px] h-[220px] rounded-full bg-indigo-900/10 blur-[50px] pointer-events-none"
        animate={{
          x: [0, 28, 0],
          y: [0, 18, 0],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Shooting Stars */}
      {Array.from({ length: 3 }).map((_, i) => {
        const startY = Math.random() * 40 + 10;
        return (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none rounded-sm"
            style={{ width: 100 }}
            initial={{
              x: '-12%',
              y: `${startY}%`,
              opacity: 0,
              rotate: 45,
            }}
            animate={{
              x: ['-12%', '110%'],
              y: [`${startY}%`, `${Math.min(startY + 10, 90)}%`],
              opacity: [0, 1, 0],
              width: ['100px', '30px', '0px'],
            }}
            transition={{
              duration: 2.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 5 + i * 3 + Math.random() * 5,
            }}
          />
        );
      })}

      {/* Light flares */}
      {[{ top: '12%', left: '68%' }, { top: '58%', left: '32%' }, { top: '42%', left: '78%' }].map(
        (pos, i) => (
          <motion.div
            key={`flare-${i}`}
            className="absolute w-[230px] h-[230px] rounded-full bg-white/6 blur-[75px] pointer-events-none"
            style={{
              top: pos.top,
              left: pos.left,
              opacity: 0.07,
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 28 + i * 6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        )
      )}

      {/* Planet glow */}
      <motion.div
        className="absolute bottom-12 right-12 w-[140px] h-[140px] rounded-full bg-purple-700/25 blur-[65px] pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
