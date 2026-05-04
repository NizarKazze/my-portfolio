import React, { useEffect, useRef } from "react";
import { GridItem } from "./projectsData";
import Ballpit from "./3dBallsComponent";
import { X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type PopupProps = {
  item: GridItem;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  const { tokens } = useTheme();

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[95%] h-[95%] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #0a0e1a 60%, #080b14 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 120px -40px rgba(99,102,241,0.15)",
          maxHeight: "90vh",
        }}
      >

        {/* Glow accent top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.3), transparent)" }}
        />

        {/* ── TOP SECTION: Ballpit ── */}
        <div className="relative h-[40%] sm:h-[60%] overflow-hidden flex-shrink-0">

          <div className="absolute inset-0 opacity-80" style={{ pointerEvents: "none" }}>
            <Ballpit
              count={28}
              gravity={0}
              friction={0.9975}
              wallBounce={0.92}
              followCursor={false}
              images={item.tecnologias.map((t) => t.texture)}
            />
          </div>

          {/* Fade to bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,17,23,0.1) 0%, rgba(13,17,23,0.0) 40%, rgba(13,17,23,0.95) 85%, rgba(13,17,23,1) 100%)",
            }}
          />

          {/* Close button — explicit pointer-events:auto so it's always tappable */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              pointerEvents: "auto",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgb(255, 255, 255)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── BOTTOM SECTION: scrollable content ── */}
        <div
          className="relative z-10 px-4 sm:px-8 pb-8 pt-2 flex flex-col gap-6 overflow-y-auto "
          style={{ WebkitOverflowScrolling: "touch" }}
        >

          {/* Title */}
          <div
            className="text-[#8b7db7] text-lg sm:text-2xl"
            style={{ letterSpacing: "0.15em" }}
          >
            {item.title}
          </div>

          {/* ── TWO-COLUMN LAYOUT on md+ ── */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* Left col: Description */}
            <div className="md:w-1/2 flex flex-col gap-3">
              <h3
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                Descripción
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ lineHeight: "1.8" }}
              >
                {item.description}
              </p>
            </div>

            {/* Divider (vertical on desktop, horizontal on mobile) */}
            <div
              className="md:w-px md:self-stretch w-full h-px md:h-auto flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />

            {/* Right col: Technologies */}
            <div className="md:w-1/2 flex flex-col gap-3">
              <h3
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                Tecnologías
              </h3>
              <div className="flex flex-col gap-2.5">
                {item.tecnologias.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3">

                    {/* Icon */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 object-contain flex-shrink-0"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />

                    {/* Name */}
                    <span
                      className="text-xs font-medium w-16 flex-shrink-0"
                      style={{ color: "rgba(203,213,225,0.75)" }}
                    >
                      {tech.name}
                    </span>

                    {/* Progress bar */}
                    <div
                      className="flex-1 rounded-full overflow-hidden"
                      style={{ height: "5px", background: "rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${tech.percentage}%`,
                          background: "linear-gradient(90deg, rgba(99,102,241,0.9), rgba(168,85,247,0.9))",
                          transition: "width 0.6s ease",
                          boxShadow: "0 0 8px rgba(99,102,241,0.5)",
                        }}
                      />
                    </div>

                    {/* Percentage */}
                    <span className="text-xs font-semibold w-8 text-right flex-shrink-0">
                      {tech.percentage}%
                    </span>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center sm:items-end justify-center sm:justify-start gap-3 pt-4">
            {/* Primary */}
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.95)",
                color: "#0a0e1a",
                boxShadow: "0 0 30px rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 40px rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.95)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <span>Visitar Sitio</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Secondary */}
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(203,213,225,0.8)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(203,213,225,0.8)";
              }}
            >
              <span>Ver Código</span>
            </a>
          </div>
        </div>

        {/* Glow accent bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent)" }}
        />
      </div>
    </div>
  );
};

export default Popup;