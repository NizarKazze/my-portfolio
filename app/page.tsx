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
import { useTheme } from '@/context/ThemeContext';
import TimelineStepper from '@/components/timeLine/TimeLine';
import { TIMELINE_POINTS } from '@/components/timeLine/TimeLineData';
import { useNearViewport } from '@/hooks/UseNearViewport';

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
      "Full Stack Developer crafting scalable web applications from concept to deployment",
      "I build modern, responsive, and user-focused digital experiences across front-end and back-end",
    ],
  });

  // Montar Galaxy 300px antes de que el hero entre en pantalla,
  // desmontarla cuando esté 600px fuera (para no cortar bruscamente al volver).
  const [heroRef, isGalaxyVisible] = useNearViewport<HTMLDivElement>({
    mountMargin: 300,
    unmountMargin: 600,
  });

  return (
    <div id="hero-content" className="w-full">
      <main id="galaxy-background" className="relative flex w-full flex-col">
        <div
          ref={heroRef}
          style={{ width: '100%', height: '90vh', position: 'relative', display: 'flex', flexDirection: 'column' }}
        >
          {isGalaxyVisible && (
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
          )}

          {/* Texto alineado a la izquierda */}
          <div className="absolute pointer-events-none inset-0 flex flex-col justify-between p-2">
            <NavBar />
            <div className="flex flex-col items-start gap-4 p-4 sm:px-16 pt-24">

              <div>
                <p
                  className="text-lg sm:text-xl font-medium tracking-widest uppercase"
                  style={{ color: tokens.heroTextMuted }}
                >
                  Hi, I'm
                </p>
                <h1
                  className="text-4xl sm:text-5xl font-semibold"
                  style={{ color: tokens.heroText }}
                >
                  Nizar Kazze
                </h1>
              </div>

              <div
                className="text-sm sm:text-lg leading-relaxed max-w-md"
                style={{ color: tokens.heroTextMuted }}
              >
                {text}
              </div>

              <div className="btn-group flex gap-4">
                <button
                  className="mt-2 px-6 py-3 text-sm rounded-3xl transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    color: 'white',
                    border: `1px solid rgba(255,255,255,0.18)`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  View Projects
                </button>

                <button
                  className="mt-2 px-6 py-3 text-sm rounded-3xl transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: tokens.btnBg,
                    color: tokens.btnText,
                    border: `1px solid ${tokens.btnBorder}`,
                  }}
                >
                  Download CV
                </button>
              </div>
            </div>

            {/* Stats bar al fondo */}
            <div
              className="grid w-full grid-cols-2 md:grid-cols-3"
              style={{ borderTop: `1px solid rgba(255,255,255,0.07)` }}
            >
              {[
                { label: 'Projects', value: 11 },
                { label: 'Technologies', value: 19 },
                { label: 'Experience', value: 2 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 px-4 sm:px-8 py-5 md:px-16"
                >
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: tokens.heroTextMuted }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-4xl md:text-5xl font-medium"
                    style={{ color: tokens.heroText }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
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
      <Hero />
      <div style={{ backgroundColor: tokens.bg }}>
        <Aboutme />
      </div>
      <TimelineStepper points={TIMELINE_POINTS} />
      <div className="skills" style={{ backgroundColor: tokens.bg }}>
        <WaveCarousel />
        <Projects />
        <ContactSection />
      </div>
    </div>
  );
}