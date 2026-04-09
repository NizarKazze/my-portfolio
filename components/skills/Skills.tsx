import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const IMAGES = [
  "/html5.png",
  "/javascript.png",
  "/mysql.png",
  "/nextjs.png",
  "/python.png",
  "/react.png",
  "/sass.png",
  "/tailwind-css.png",
  "/typescript.png",
  "/unity.png",
  "/vite.png",
  "/wordpress.png"
];

const CARD_SIZE = 100;
const CARD_GAP = 20;
const CARD_STEP = CARD_SIZE + CARD_GAP;

const AMPLITUDE = 48;
const WAVE_CARDS = 9;

const AMP2 = 16;
const WAVE_CARDS2 = 13;

const TREMOR_AMP = 3;
const TREMOR_SPEED = 0.0018;

const SCROLL_SPEED = 0.7;

const COPIES = 5;
const ITEMS = Array.from(
  { length: COPIES * IMAGES.length },
  (_, i) => IMAGES[i % IMAGES.length]
);
const LOOP_W = IMAGES.length * CARD_STEP;

function WaveCarousel() {
  const { isDark } = useTheme();
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(LOOP_W);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transform = `translateX(-${offsetRef.current}px)`;

    const animate = (ts: number) => {
      offsetRef.current += SCROLL_SPEED;

      if (offsetRef.current >= LOOP_W * (COPIES - 1)) {
        offsetRef.current -= LOOP_W;
      }

      track.style.transform = `translateX(-${offsetRef.current}px)`;

      const cards = track.querySelectorAll<HTMLElement>(".wc-card");
      cards.forEach((card, i) => {
        const wavePos = (i * CARD_STEP - offsetRef.current) / CARD_STEP;

        const r1 = wavePos * ((2 * Math.PI) / WAVE_CARDS);
        const r2 = wavePos * ((2 * Math.PI) / WAVE_CARDS2);

        const wave = Math.sin(r1) * AMPLITUDE + Math.sin(r2) * AMP2;
        const tremor = Math.sin(ts * TREMOR_SPEED + i * 1.3) * TREMOR_AMP;
        const y = wave + tremor;

        const t = (Math.sin(r1) + 1) / 2;
        const scale = 0.82 + 0.18 * t;
        const opacity = 0.45 + 0.55 * t;

        card.style.transform = `translateY(${y}px) scale(${scale})`;
        card.style.opacity = opacity.toFixed(3);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Estilos de la card según tema
  const cardStyle = isDark
    ? {
        background: "rgba(177, 158, 239, 0.06)",
        border: "1px solid rgba(177, 158, 239, 0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(177, 158, 239, 0.08), inset 0 1px 0 rgba(177, 158, 239, 0.12)",
      }
    : {
        background: "#f3f4f6",
        border: "1px solid transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      };

  // Fades laterales según tema
  const fadeLeft = isDark
    ? "linear-gradient(to right, #080a0f 0%, transparent 100%)"
    : "linear-gradient(to right, #ffffff 0%, transparent 100%)";

  const fadeRight = isDark
    ? "linear-gradient(to left, #080a0f 0%, transparent 100%)"
    : "linear-gradient(to left, #ffffff 0%, transparent 100%)";

  return (
    <div
      className="w-full overflow-hidden relative box-border"
      style={{
        paddingTop: AMPLITUDE + AMP2 + TREMOR_AMP + 24,
        paddingBottom: AMPLITUDE + AMP2 + TREMOR_AMP + 24,
      }}
    >
      {/* Fade izquierdo */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[120px] pointer-events-none z-10"
        style={{ background: fadeLeft }}
      />

      {/* Fade derecho */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[120px] pointer-events-none z-10"
        style={{ background: fadeRight }}
      />

      {/* Track */}
      <div
        ref={trackRef}
        className="flex will-change-transform w-max"
        style={{ gap: `${CARD_GAP}px` }}
      >
        {ITEMS.map((src, i) => (
          <div
            key={i}
            className="wc-card shrink-0 rounded-full overflow-hidden will-change-transform p-6 transition-colors duration-300"
            style={{
              width: CARD_SIZE,
              height: CARD_SIZE,
              ...cardStyle,
            }}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              className="w-full h-full object-contain block pointer-events-none select-none"
              style={isDark ? { filter: "brightness(0.9) saturate(0.85)" } : {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const { tokens } = useTheme();

  return (
    <div id="skills-container" className="mt-16">
      <h2
        className="text-center text-5xl"
        style={{ color: tokens.titleColor }}
      >
        Skills
      </h2>
      <WaveCarousel />
    </div>
  );
};

export default SkillsSection;