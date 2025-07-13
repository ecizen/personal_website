'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function SpaceScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.95 ? 2 + Math.random() * 2 : 0.5 + Math.random(),
      opacity: 0.3 + Math.random() * 0.5,
      color: ['#ffffff', '#dbefff', '#a0c4ff'][Math.floor(Math.random() * 3)],
    }));
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden touch-none min-h-screen bg-gradient-to-b from-black via-[#0b0b1a] to-black"
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
            backgroundColor: star.color,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Nebula Glow */}
      <motion.div
        className="absolute w-[180px] h-[180px] bg-indigo-900/20 rounded-full blur-[60px] pointer-events-none"
        style={{ top: '15%', left: '10%' }}
        animate={{ x: [0, 20, 0], y: [0, 10, 0], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 60, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* Shooting Stars */}
      {[...Array(2)].map((_, i) => {
        const startY = Math.random() * 60 + 10;
        return (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-[1.5px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent rounded-sm pointer-events-none"
            style={{ top: `${startY}%`, left: '-10%' }}
            initial={{ opacity: 0 }}
            animate={{
              left: ['-10%', '110%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 6 + i * 4,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Light Flares */}
      {[{ top: '10%', left: '70%' }, { top: '50%', left: '30%' }, { top: '40%', left: '80%' }].map(
        (pos, i) => (
          <motion.div
            key={`flare-${i}`}
            className="absolute w-[180px] h-[180px] rounded-full bg-white/5 blur-[80px] pointer-events-none"
            style={{ top: pos.top, left: pos.left }}
            animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
            transition={{ duration: 25 + i * 5, repeat: Infinity, repeatType: 'mirror' }}
          />
        )
      )}

      {/* Planet Glow */}
      <motion.div
        className="absolute bottom-10 right-8 w-[130px] h-[130px] rounded-full bg-purple-700/30 blur-[60px] pointer-events-none"
        animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
