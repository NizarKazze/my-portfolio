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
import TechVisualizer from '@/components/projects/3dBallsComponent';
import { useTheme } from '@/context/ThemeContext';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
});

const MemoGalaxy = memo(Galaxy);

const Hero = () => {
  const { tokens } = useTheme();
  const text = useTyperWriter({
    words: [
      "Hi, I'm a Full Stack Developer. Welcome to my portfolio",
      "Full Stack Developer crafting scalable web applications from concept to deployment",
      "I build modern, responsive, and user-focused digital experiences across front-end and back-end",
    ],
  });

  return (
    <div id="hero-content" className="w-full p-2">
      <main id="galaxy-background" className="relative flex w-full flex-col">
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

                <div className="w-full">
                  <p
                    className="text-5xl font-semibold"
                    style={{ color: tokens.heroTextMuted }}
                  >
                    HI I'M
                  </p>
                  <h1
                    className="text-5xl font-semibold"
                    style={{ color: tokens.heroText }}
                  >
                    Nizar Kazze
                  </h1>
                </div>

                <div
                  className="text-xl leading-tight w-full"
                  style={{ color: tokens.heroText }}
                >
                  {text}
                </div>

                <div className="btn-group flex gap-4">
                  <button
                    className="mt-4 px-6 py-3 text-sm rounded-3xl transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: tokens.btnBg,
                      color: tokens.btnText,
                      border: `1px solid ${tokens.btnBorder}`,
                    }}
                  >
                    View Projects
                  </button>

                  <button
                    className="mt-4 px-6 py-3 text-sm rounded-3xl transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: tokens.btnBg,
                      color: tokens.btnText,
                      border: `1px solid ${tokens.btnBorder}`,
                    }}
                  >
                    Download CV
                  </button>
                </div>

                <div
                  className="mt-6 text-sm flex items-center gap-3"
                  style={{ color: tokens.heroTextMuted }}
                >
                  <div className="flex flex-col items-center">
                    <h4 className="text-2xl" style={{ color: tokens.heroTextMuted }}>Projects</h4>
                    <p className="text-4xl" style={{ color: tokens.heroTextMuted }}>11</p>
                  </div>
                  <span style={{ opacity: 0.4 }}>|</span>
                  <div className="flex flex-col items-center">
                    <h4 className="text-2xl" style={{ color: tokens.heroTextMuted }}>Technologies</h4>
                    <p className="text-4xl" style={{ color: tokens.heroTextMuted }}>19</p>
                  </div>
                  <span style={{ opacity: 0.4 }}>|</span>
                  <div className="flex flex-col items-center">
                    <h4 className="text-2xl" style={{ color: tokens.heroTextMuted }}>Experience</h4>
                    <p className="text-4xl" style={{ color: tokens.heroTextMuted }}>2</p>
                  </div>
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
  const { tokens } = useTheme();

  return (
    <div
      id="home-content"
      className={raleway.className}
      style={{
        backgroundColor: tokens.bg,
        color: tokens.textPrimary,
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <NavBar />
      <Hero />
      <div style={{ backgroundColor: tokens.bg }}>
        <Aboutme />
      </div>
      <div
        className="skills"
        style={{ backgroundColor: tokens.bg }}
      >
        <WaveCarousel />
        <Projects />
        <ContactSection />
      </div>
    </div>
  );
}