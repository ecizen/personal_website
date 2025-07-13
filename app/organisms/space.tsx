'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

export default function SpaceScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scrollY = useMotionValue(0);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  const [isMounted, setIsMounted] = useState(false);

  // Layer speeds for parallax effect
  const speeds = useMemo(() => [0.1, 0.3, 0.5, 0.8, 1.2], []);

  // Star colors palette subtle & soothing
  const starColors = ['#ffffff', '#dbefff', '#c2dfff', '#a0c4ff'];

  // Generate motion transforms based on mouse position & layer speed
  const parallaxTransforms = speeds.map((speed) => ({
    speed,
    x: useTransform(mouseX, [0, dimensions.width], [-15 * speed, 15 * speed]),
    y: useTransform(mouseY, [0, dimensions.height], [-15 * speed, 15 * speed]),
  }));

  // Scroll-based subtle vertical parallax and scale
 const scrollParallax = useTransform(scrollY, [0, 600], [0, -15], { clamp: true });
const scrollScale = useTransform(scrollY, [0, 600], [1, 1.05], { clamp: true });

  // Generate stars once
  const stars = useMemo(() => {
    return Array.from({ length: 280 }).map((_, i) => {
      const size = Math.random() > 0.92 ? 2 + Math.random() * 2 : 0.6 + Math.random();
      const speedOptions = speeds;
      const speed = speedOptions[Math.floor(Math.random() * speedOptions.length)];
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.3 + Math.random() * 0.6,
        speed,
        color,
        isTwinkling: Math.random() > 0.7,
      };
    });
  }, [speeds, starColors]);

  // Helper to get closest parallax motion values for star speed
  const getParallax = (speed: number) => {
    const closest = parallaxTransforms.reduce((prev, curr) =>
      Math.abs(curr.speed - speed) < Math.abs(prev.speed - speed) ? curr : prev
    );
    return { x: closest.x, y: closest.y };
  };

  useEffect(() => {
    setIsMounted(true);

    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();

    const handleResize = () => requestAnimationFrame(updateDimensions);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY, scrollY]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black z-[-1] overflow-hidden"
    >
      {/* Stars */}
      {/* Stars tanpa scroll effect */}
{stars.map((star) => {
  const parallax = getParallax(star.speed);
  return (
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
        ...parallax,
        willChange: 'transform, opacity',
      }}
      animate={{ /* twinkle anim */ }}
      transition={{ /* ... */ }}
    />
  );
})}

{/* Nebula glow dengan scroll effect */}
<motion.div
  className="absolute top-[20%] left-[12%] w-[220px] h-[220px] rounded-full bg-indigo-900/10 blur-[50px] pointer-events-none"
  animate={{
    x: [0, 28, 0],
    y: [0, 18, 0],
    opacity: [0.05, 0.12, 0.05],
  }}
  style={{ y: scrollParallax, scale: scrollScale, willChange: 'transform, opacity' }}
  transition={{
    duration: 45,
    repeat: Infinity,
    repeatType: 'reverse',
  }}
/>


      {/* Shooting Stars */}
      {Array.from({ length: 3 }).map((_, i) => {
        const startY = Math.random() * 45 + 10; // from top-ish area
        const rotateAngle = 45;

        return (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none rounded-sm"
            style={{ width: 120 }}
            initial={{
              x: '-12%',
              y: `${startY}%`,
              opacity: 0,
              rotate: rotateAngle,
            }}
            animate={{
              x: ['-12%', '110%'],
              y: [`${startY}%`, `${startY + 30}%`],
              opacity: [0, 1, 0],
              width: ['120px', '25px', '0px'],
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

      {/* Milky Way subtle band */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 600px 100px at center, rgba(200, 180, 255, 0.07) 0%, transparent 70%)',
          transform: 'rotate(15deg) scaleY(0.15)',
          ...getParallax(0.1),
          y: scrollParallax,
          willChange: 'transform, opacity',
        }}
      />

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
        style={{ y: scrollParallax, willChange: 'transform, opacity' }}
      />

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
              ...getParallax(0.06),
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

      {/* Planet subtle glow */}
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
