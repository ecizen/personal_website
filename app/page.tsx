// app/page.tsx atau pages/index.tsx
'use client'
import SpaceScene from '@/app/organisms/space';
import Navbar from './organisms/navbar';
// import ParticleBackground from './organisms/particle';
// import ParticleStars from './organisms/particals-star';
import HeroSection from './organisms/hero';
import RunningText from './organisms/text';
import SkillGrid from './organisms/skill';
import "./globals.css";
import AboutMe from './organisms/about';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-0 p-0">
        <div className="w-full min-h-screen">
          <SpaceScene />
          <HeroSection />
        </div>
        <div>
          <SpaceScene />
          <RunningText />
        </div>
        <div>
          <AboutMe />
          <SpaceScene />
        </div>
        <div className="lg:min-h-screen flex items-center justify-center">
          <SkillGrid />
          <SpaceScene />
        </div>
      </main>
    </>
  );
}
