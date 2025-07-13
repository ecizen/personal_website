import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type AsteroidProps = {
  size: number;
  initialX: number; // dalam % dari lebar container
  initialY: number; // dalam % dari tinggi container
  duration?: number; // lama animasi gerak bolak-balik
};

export default function Asteroid({ size, initialX, initialY, duration = 8 }: AsteroidProps) {
  // Animasi melayang bolak-balik horizontal + rotasi lambat
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: `${initialY}%`,
        left: `${initialX}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #7e7e7e, #3a3a3a)',
        boxShadow: 'inset -4px -4px 8px #555, inset 3px 3px 6px #888',
        cursor: 'default',
        userSelect: 'none',
      }}
      animate={{
        x: ['0%', '10%', '0%'], // gerak horizontal ringan
        rotate: [0, 15, 0],      // rotasi bolak-balik
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  );
}
