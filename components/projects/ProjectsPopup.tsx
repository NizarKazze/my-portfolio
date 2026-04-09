import React, { useEffect, useRef } from "react";
import { GridItem } from "./projectsData";
import Ballpit from "./3dBallsComponent";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type PopupProps = {
  item: GridItem;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  const { tokens } = useTheme();

  // Cerrar con Escape
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
        className="relative w-full max-w-8xl h-[95%] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #0a0e1a 60%, #080b14 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 120px -40px rgba(99,102,241,0.15)",
          maxHeight: "90vh",
        }}
      >

        {/* Glow accent top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.3), transparent)" }}
        />

        {/* — SECCIÓN SUPERIOR: Ballpit lateral pequeño — */}
        <div className="relative h-[60%] overflow-hidden flex-shrink-0">
          {/* Ballpit contenido solo en la franja superior */}
          <div className="absolute inset-0 opacity-80">
            <Ballpit
              count={28}
              gravity={0}
              friction={0.9975}
              wallBounce={0.92}
              followCursor={false}
              images={item.tecnologias.map((t) => t.icon)}
            />
          </div>

          {/* Gradiente que desvanece hacia abajo para transición suave */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,17,23,0.1) 0%, rgba(13,17,23,0.0) 40%, rgba(13,17,23,0.95) 85%, rgba(13,17,23,1) 100%)",
            }}
          />

          {/* Título flotando sobre el ballpit */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div
              className="px-5 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(148,163,184,0.9)",
                backdropFilter: "blur(8px)",
                letterSpacing: "0.15em",
              }}
            >
              {item.title}
            </div>
          </div>

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* — SECCIÓN INFERIOR: Contenido — */}
        <div className="relative z-10 px-8 pb-8 pt-2 flex flex-col gap-6">

          {/* Línea divisoria sutil */}
          <div
            className="w-12 h-px mx-auto"
            style={{ background: "rgba(99,102,241,0.4)" }}
          />

          {/* Descripción */}
          <p
            className="text-center text-base leading-relaxed"
            style={{ color: "rgba(148,163,184,0.85)", lineHeight: "1.8" }}
          >
            {item.description}
          </p>

          {/* Tags de tecnologías */}
          <div className="flex flex-wrap gap-2 justify-center">
            {item.tecnologias.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(203,213,225,0.7)",
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center pt-2">
            
            {/* Botón primario */}
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
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

            {/* Botón secundario */}
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
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