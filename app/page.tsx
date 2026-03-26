"use client"

import Galaxy from '../components/hero/Galaxy';
import { useTyperWriter } from '@/hooks/TypeWriter';
import WaveCarousel from '@/components/skills/Skills';
import { memo } from "react";
import NavBar from '@/components/NavBar';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const MemoGalaxy = memo(Galaxy);

const Hero = () => {
  const text = useTyperWriter({
    words: [
      "Hi, I’m a Full Stack Developer. Welcome to my portfolio",
      "Full Stack Developer crafting scalable web applications from concept to deployment",
      "I build modern, responsive, and user-focused digital experiences across front-end and back-end",
    ],
  });

  return (
    <div id="hero-content" className="w-full">
      <main
        id="galaxy-background"
        className="relative flex w-full flex-col bg-white dark:bg-black"
      >
        {/* GALAXY BACKGROUND */}
        <div style={{ width: '100%', height: '700px', position: 'relative' }}>
          <MemoGalaxy
            mouseRepulsion
            mouseInteraction
            density={0.9}
            glowIntensity={0.2}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />

          {/* TEXTO CENTRADO SOBRE EL GALAXY */}
          <div className="absolute pointer-events-none inset-0">

            {/* NAVBAR */}
            <div className="absolute top-10 left-0 pointer-events-auto w-full flex items-center justify-center">
              <NavBar />
            </div>

            {/* HERO CENTER */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hero-title flex flex-col items-center gap-4 max-w-md">

                <div className='w-full'>
                  <p className='text-3xl text-gray-200'>Hi I'm</p>
                  <h1 className='text-4xl font-semibold '>Nizar Kazze</h1>
                </div>

                <div className="text-xl leading-tight w-full text-left">
                  {text}
                </div>

                <button className="bg-white mt-4 text-black px-6 py-3 text-sm rounded-3xl">
                  Download CV
                </button>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default function Home() {
  return (

    <div id='home-content' className={`${montserrat.className} bg-white`}>
      <Hero></Hero>
      <div className='skills'>
        <h2>Skills</h2>
        <WaveCarousel></WaveCarousel>
      </div>
    </div>
  );
}
