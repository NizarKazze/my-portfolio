import React, { useState, useRef, useEffect, useCallback } from "react";
import projectitems, { GridItem } from "./projectsData";
import Popup from "./ProjectsPopup";
import { useTheme } from "@/context/ThemeContext";

// ─── Infinite Auto-Scroll Carousel (mobile only) ────────────────────────────

const InfiniteCarousel: React.FC<{ onSelect: (item: GridItem) => void }> = ({
  onSelect,
}) => {
  const ITEMS = [...projectitems, ...projectitems];
  const CARD_WIDTH = 300;
  const GAP = 8;
  const STEP = CARD_WIDTH + GAP;
  const SPEED = 0.6; // px per frame
  const ORIGINAL_WIDTH = projectitems.length * STEP;

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);

  const animate = useCallback(() => {
    if (!isPausedRef.current && !isDraggingRef.current) {
      offsetRef.current += SPEED;
      if (offsetRef.current >= ORIGINAL_WIDTH) {
        offsetRef.current -= ORIGINAL_WIDTH;
      }
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [ORIGINAL_WIDTH]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  // Hover pause
  const handleMouseEnter = () => { isPausedRef.current = true; };
  const handleMouseLeave = () => {
    if (!isDraggingRef.current) isPausedRef.current = false;
  };

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const delta = startXRef.current - e.clientX;
    let next = startOffsetRef.current + delta;
    next = ((next % ORIGINAL_WIDTH) + ORIGINAL_WIDTH) % ORIGINAL_WIDTH;
    offsetRef.current = next;
  }, [ORIGINAL_WIDTH]);

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Touch drag
  const handleTouchStart = (e: React.TouchEvent) => {
    isPausedRef.current = true;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    startOffsetRef.current = offsetRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const delta = startXRef.current - e.touches[0].clientX;
    let next = startOffsetRef.current + delta;
    next = ((next % ORIGINAL_WIDTH) + ORIGINAL_WIDTH) % ORIGINAL_WIDTH;
    offsetRef.current = next;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false;
  };

  return (
    <div
      style={{ overflow: "hidden", position: "relative", width: "100%" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          width: "max-content",
          cursor: "grab",
          userSelect: "none",
          paddingBlock: "12px",
        }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            onClick={() => {
              if (Math.abs(startXRef.current) === 0 || !isDraggingRef.current) {
                onSelect(item);
              }
            }}
            style={{
              width: `${CARD_WIDTH}px`,
              height: "200px",
              borderRadius: "1rem",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={`${item.img}?auto=format&fit=crop&w=600`}
              alt={item.title}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
              display: "flex",
              alignItems: "flex-end",
            }}>
              <h2 style={{
                color: "#fff",
                padding: "0.9rem 1rem",
                fontWeight: 700,
                fontSize: "0.9rem",
                textShadow: "0 1px 6px rgba(0,0,0,0.7)",
                margin: 0,
              }}>
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Bento Grid (desktop only) ───────────────────────────────────────────────

const BentoGrid: React.FC<{ onSelect: (item: GridItem) => void }> = ({ onSelect }) => (
  <div className="grid grid-cols-6 grid-rows-10 gap-4 h-[120vh]">
    {projectitems.map((item) => (
      <div
        key={item.id}
        onClick={() => onSelect(item)}
        className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.01] ${item.className}`}
      >
        <img
          src={`${item.img}?auto=format&fit=crop&w=800`}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end">
          <h2 className="text-white p-6 font-bold text-xl drop-shadow-md">
            {item.title}
          </h2>
        </div>
      </div>
    ))}
  </div>
);

// ─── Root ────────────────────────────────────────────────────────────────────

const Grid: React.FC = () => {
  const [selected, setSelected] = useState<GridItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      {isMobile ? (
        <InfiniteCarousel onSelect={setSelected} />
      ) : (
        <BentoGrid onSelect={setSelected} />
      )}
      {selected && <Popup item={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

const Projects = () => {
  const { tokens } = useTheme();

  return (
    <div id="projects-content" className="sm:px-4 sm:px-10 mt-24 mb-24">
      <h2
        className="text-3xl md:text-5xl mb-16 px-4 sm:px-0"
        style={{ color: tokens.titleColor }}
      >
        My Projects
      </h2>
      <div id="grid-container">
        <Grid />
      </div>
    </div>
  );
};

export default Projects;