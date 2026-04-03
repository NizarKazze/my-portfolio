"use client"

import Galaxy from '../components/hero/Galaxy';
import { useTyperWriter } from '@/hooks/TypeWriter';
import WaveCarousel from '@/components/skills/Skills';
import { memo } from "react";
import NavBar from '@/components/NavBar';
import { Raleway } from 'next/font/google';
import Aboutme from '@/components/Aboutme';
import Projects from '@/components/projects/Projects';
import ContactSection from '@/components/ContactForm';
import InteractivePhone from '@/components/Phone';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
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
    <div id="hero-content" className="w-full p-2">
      <main
        id="galaxy-background"
        className="relative flex w-full flex-col bg-white dark:bg-black"
      >
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

          <div className="absolute pointer-events-none inset-0">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hero-title flex flex-col items-center gap-4 max-w-md text-center">

                <div className='w-full'>
                  <p className='text-5xl text-gray-200 font-semibold'>Hi I'm</p>
                  <h1 className='text-5xl font-semibold'>Nizar Kazze</h1>
                </div>

                <div className="text-xl leading-tight w-full">
                  {text}
                </div>

                <div className='btn-group flex gap-4'>
                  <button className="bg-white mt-4 text-black px-6 py-3 text-sm rounded-3xl">
                    View Projects
                  </button>
                  
                  <button className="bg-white mt-4 text-black px-6 py-3 text-sm rounded-3xl">
                    Download CV
                  </button>
                </div>

                {/* 👇 NUEVA FILA DE DATOS */}
                <div className="mt-6 text-sm text-gray-300 flex items-center gap-3">
                  <span>Frontend</span>
                  <span className="opacity-50">|</span>
                  <span>Backend</span>
                  <span className="opacity-50">|</span>
                  <span>Cloud</span>
                </div>

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

    <div id='home-content' className={`${raleway.className} bg-white`}>
      <NavBar></NavBar>
      <Hero></Hero>
      <div>
        <Aboutme></Aboutme>
      </div>
      <div className='skills'>

        <WaveCarousel></WaveCarousel>
        <Projects></Projects>
                <InteractivePhone></InteractivePhone>

        <ContactSection></ContactSection>

      </div>
    </div>
  );
}
