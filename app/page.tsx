"use client"

import Galaxy from '../components/hero/Galaxy';
import { useTyperWriter } from '@/hooks/TypeWriter';
import WaveCarousel from '@/components/skills/Skills';
import { memo } from "react";

const MemoGalaxy = memo(Galaxy);

const Hero = () => {
  const text = useTyperWriter({
    words: [
      "Bienvenido a mi portafolio",
      "Construyo experiencias web modernas",
      "React + TypeScript 🚀",
    ],
  });
  return (
    <div id='hero-content' className='w-full p-2'>
      <main id='galaxy-background' className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <MemoGalaxy 
            mouseRepulsion={false}
            mouseInteraction
            density={3}
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
        </div>
        <div>
          <div className='hero-title'>
            {text}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function Home() {
  return (

    <div id='home-content' className='bg-white'>
      <Hero></Hero>
      <div className='skills'>
        <h2>Skills</h2>
        <WaveCarousel></WaveCarousel>
      </div>
    </div>
  );
}
