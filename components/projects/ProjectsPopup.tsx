import React, { useEffect, useCallback } from "react";
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const stopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Overlay */}
      <div
        onClick={onClose}
        onTouchEnd={(e) => {
          e.preventDefault();
          onClose();
        }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        style={{ touchAction: "none" }}
      />

      {/* MODAL: Hemos quitado onTouchStart/End de aquí para permitir que el scroll fluya */}
      <div
        onClick={stopPropagation}
        className="relative w-full max-w-[100%] h-[100%] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #0a0e1a 60%, #080b14 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)",
          maxHeight: "90vh",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px" 
             style={{ background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.3), transparent)" }} />

        {/* ── SECCIÓN SUPERIOR: Ballpit ── */}
        <div className="relative h-[40%] sm:h-[60%] overflow-hidden flex-shrink-0">
          
          {/* FIX: pointer-events-none hace que el Ballpit sea visible pero "transparente" al tacto */}
          <div className="absolute inset-0 opacity-80 pointer-events-none">
            <Ballpit
              count={60}
              gravity={0}
              friction={0.9975}
              wallBounce={0.92}
              followCursor={false}
              images={item.tecnologias.map((t) => t.texture)}
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(13,17,23,0.1) 0%, rgba(13,17,23,1) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* BOTÓN CIERRE: Restaurado con pointer-events-auto para que sí sea clickable */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); onClose(); }}
            className="absolute top-4 right-4 z-30 p-2 rounded-full transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              minWidth: "44px",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              pointerEvents: "auto", // Importante: ignora el 'none' del padre
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── SECCIÓN INFERIOR: Contenido ── */}
        <div
          className="relative z-10 px-4 sm:px-8 pb-8 pt-2 flex flex-col gap-6 overflow-y-auto flex-1 min-h-0"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y", // Permite el scroll vertical nativo
          }}
        >
          <div className="text-[#8b7db7] text-lg sm:text-2xl" style={{ letterSpacing: "0.15em" }}>
            {item.title}
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 flex flex-col gap-3">
              <h3 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(148,163,184,0.5)" }}>
                Descripción
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ lineHeight: "1.8" }}>
                {item.description}
              </p>
            </div>

            <div className="md:w-px w-full h-px md:h-auto flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />

            <div className="md:w-1/2 flex flex-col gap-3">
              <h3 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(148,163,184,0.5)" }}>
                Tecnologías
              </h3>
              <div className="flex flex-col gap-2.5">
                {item.tecnologias.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain flex-shrink-0" />
                    <span className="text-xs font-medium w-16 flex-shrink-0" style={{ color: "rgba(203,213,225,0.75)" }}>
                      {tech.name}
                    </span>
                    <div className="flex-1 rounded-full overflow-hidden" style={{ height: "5px", background: "rgba(255,255,255,0.07)" }}>
                      <div className="h-full rounded-full" style={{ width: `${tech.percentage}%`, background: "linear-gradient(90deg, #6366f1, #a855f7)", transition: "width 0.6s ease" }} />
                    </div>
                    <span className="text-xs font-semibold w-8 text-right">{tech.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex flex-row items-center justify-center sm:justify-start gap-3 pt-4">
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "#ffffff", color: "#0a0e1a", minHeight: "44px" }}
            >
              <span>Visitar Sitio</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(203,213,225,0.8)", minHeight: "44px" }}
            >
              <span>Ver Código</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;