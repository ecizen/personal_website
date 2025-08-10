'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const glowVariants: any = {
  flicker1: {
    textShadow: '0 0 2px rgba(255,255,255,0.2), 0 0 8px rgba(255,255,255,0.4)',
  },
  flicker2: {
    textShadow: '0 0 4px rgba(255,255,255,0.3), 0 0 12px rgba(255,255,255,0.6)',
  },
  flicker3: {
    textShadow: '0 0 3px rgba(255,255,255,0.25), 0 0 10px rgba(255,255,255,0.5)',
  },
};

const glowTransition: any = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: 'loop',
  ease: 'easeInOut',
};

const HeroSection = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    // Animasi dropIn lalu lanjut ke flicker
    controls1.start({
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 10, duration: 0.8 },
    }).then(() => {
      controls1.start({
        ...glowVariants.flicker1,
        transition: glowTransition,
      });
    });

    controls2.start({
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 10, delay: 0.15 },
    }).then(() => {
      controls2.start({
        ...glowVariants.flicker3,
        transition: glowTransition,
      });
    });
  }, []);

  return (
    <section className="w-full h-screen py-12 flex flex-col items-center justify-center bg-transparent px-4 text-center overflow-hidden">
      
      {/* Judul pertama */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-white uppercase"
        initial={{ y: -100, opacity: 0, scale: 1.05 }}
        animate={controls1}
      >
        Transform
      </motion.h1>

      {/* Judul kedua */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-white"
        initial={{ y: -120, opacity: 0 }}
        animate={controls2}
      >
        FE DEVELOPER
      </motion.h1>

      {/* Paragraf */}
      <motion.p
        className="text-sm md:text-md mt-3 text-white max-w-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.3 },
        }}
      >
        Crafting seamless and beautiful user experiences with passion and precision.
      </motion.p>

      {/* Tombol */}
      <motion.button
        className="
          text-sm md:text-xs mt-6 px-5 py-2 md:px-6 md:py-2.5
          bg-gradient-to-r from-gray-900 via-black to-gray-900
          text-white font-semibold rounded-lg
          border border-white/20
          shadow-[0_0_10px_rgba(255,255,255,0.15),inset_0_0_8px_rgba(255,255,255,0.1)]
          backdrop-blur-sm
          relative overflow-hidden
        "
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.45 },
        }}
        variants={{
          hover: {
            scale: 1.07,
            boxShadow: '0 0 15px 4px rgba(255, 255, 255, 0.3), inset 0 0 15px rgba(255,255,255,0.2)',
            transition: { duration: 0.35, ease: 'easeInOut' },
          },
          tap: {
            scale: 0.96,
            transition: { duration: 0.15 },
          },
        }}
        whileHover="hover"
        whileTap="tap"
        onClick={() => window.location.href = 'mailto:hardiek@example.com'}
      >
        Let's Explore
        <motion.span
          className="absolute inset-0 rounded-xl bg-white opacity-10 blur-[12px]"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </section>
  );
};

export default HeroSection;
