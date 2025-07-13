'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles'; // ✅ pakai 'tsparticles'

export const ParticleHoverEffect = () => {
const particlesInit = useCallback(async (engine: any) => {
  await loadFull(engine);
}, []);


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 0 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            outModes: 'destroy',
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'trail' },
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                size: { value: { min: 1, max: 5 } },
                move: { speed: 3 },
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
