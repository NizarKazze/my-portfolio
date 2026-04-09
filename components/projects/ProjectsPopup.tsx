import React from "react";
import { GridItem } from "./projectsData";
import Ballpit from "./3dBallsComponent";
import { X, ExternalLink, Monitor } from "lucide-react";
import { useTheme } from '@/context/ThemeContext';

type PopupProps = {
  item: GridItem;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  const { tokens } = useTheme();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Overlay - Desenfoque sutil para centrar la atención */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity bg-zinc-900/80"
      />

      {/* Contenedor principal */}
      <div className="relative w-full max-w-8xl h-[95vh] rounded-[40px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 bg-[#080a0f] backdrop-blur-2xl overflow-hidden flex flex-col">
        
        {/* Fondo animado con opacidad reducida para no distraer */}
        <div className="absolute inset-0 z-0 opacity-70">
          <Ballpit
            count={50}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            images={item.tecnologias.map(t => t.icon)}
          />
        </div>

        {/* Botón de Cierre Superior Derecho */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full z-30 transition-all border border-white/5"
        >
          <X size={24} />
        </button>

        {/* Header con Efecto Cristal */}
        <div className="relative z-10 w-full pt-12 px-8 flex justify-center">
          <div className="flex items-center gap-3 py-2 px-6 bg-white/5 border border-white/10 rounded-full">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: tokens.heroTextMuted }}>
              {item.title}
            </h2>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-20 text-center">
          
          <p className="max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed mb-12 font-medium">
            {item.description}
          </p>

          {/* Grupo de Botones */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            {/* Botón Principal (Live) */}
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg font-bold px-8 py-4 bg-white text-black rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Visitar Sitio</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Botón Secundario (GitHub) */}
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg font-semibold px-8 py-4 bg-zinc-800/50 border border-white/10 text-white rounded-2xl hover:bg-zinc-700/50 transition-all duration-300"
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