'use client';

import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

const words = [
  'Frontend Engineer',
  'Creative Coder',
  'Pixel Perfect UI',
  'React Enthusiast',
  'Next.js & Tailwind Lover',
  'Open Source Contributor',
  'Web3 Explorer',
  'Let’s Build Something Cool 🚀',
];

const MarqueeWithTurboScroll = () => {
  const [speed, setSpeed] = useState(60); // base speed

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      const deltaY = Math.abs(currentScrollY - lastScrollY);
      const deltaTime = currentTime - lastTime;

      // velocity = distance / time (ms)
      const velocity = deltaY / deltaTime;

      // map velocity to speed (60 to 150)
      const mappedSpeed = Math.min(150, Math.max(60, velocity * 100));

      setSpeed(mappedSpeed);

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-black py-4">
      <Marquee
        speed={speed}
        pauseOnHover
        gradient={false}
        className="text-white text-xl md:text-2xl font-semibold tracking-wider whitespace-nowrap"
      >
        {words.map((word, index) => (
          <span key={index} className="mx-6 glow-text">
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeWithTurboScroll;
