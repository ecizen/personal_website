'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images from '../assets/data';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="..." />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="..." />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="..." />
      </svg>
    ),
  },
];

const AboutMe = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden  flex items-center justify-center px-6 py-24">

      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-purple-400/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] bg-cyan-400/10 blur-[100px] rounded-full" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_40px_#00000044]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side: Image */}
        <div className="flex-shrink-0">
          <Image
            src={images.profile}
            alt="Profile"
            width={220}
            height={220}
            className="rounded-2xl border-2 border-white/20 shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Hardiek Tatendra
          </h1>
         <p className="text-white/80 text-lg leading-relaxed mb-6">
  I'm an undergraduate Informatics student at Telkom University Purwokerto, driven by a strong passion for software development and modern web technologies. As a Full Stack Developer, I enjoy working across the entire development stack — from designing sleek, responsive frontends to building robust, scalable backends. I’m constantly exploring how to create seamless digital experiences that combine clean code architecture with thoughtful UI design. Lately, I’ve also been diving into areas like cloud deployment, API integrations, and AI-enhanced applications to push my skills further and build future-ready products.
</p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-white/70 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
