'use client';

import Marquee from 'react-fast-marquee';

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
  return (
    <div className="w-full bg-black py-4">
      <Marquee
        speed={60}         // kecepatan tetap
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
