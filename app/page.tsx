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
import Projects from './organisms/project';
import Certificate from './organisms/certificates';
export default function Home() {
  return (
    <>
      <Navbar />
        <SpaceScene />
      <main className="relative z-0 p-0">
        <div className="">
          <HeroSection />
        </div>
        <div>
          <RunningText />
        </div>
        <div id='about'>
          <AboutMe />
        </div>
        <div id='skills' className="lg:min-h-screen flex items-center justify-center">
          <SkillGrid />
        </div>
        <div>
          <Projects/>
        </div>
        <div>
          <Certificate/>
        </div>
      </main>
    </>
  );
}
