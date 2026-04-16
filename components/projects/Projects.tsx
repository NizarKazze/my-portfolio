import React, { useState } from "react";
import projectitems, { GridItem } from "./projectsData";
import Popup from "./ProjectsPopup";
import { useTheme } from "@/context/ThemeContext";

const Grid: React.FC = () => {
  const [selected, setSelected] = useState<GridItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-10 gap-4 auto-rows-[200px] md:auto-rows-fr md:h-[900px]">
        {projectitems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.01] ${item.mobileClassName} ${item.className}`}
          >
            {/* Imagen con Overlay */}
            <img
              src={`${item.img}?auto=format&fit=crop&w=800`}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Texto con gradiente para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end">
              <h2 className="text-white p-6 font-bold text-lg md:text-xl drop-shadow-md">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selected && (
        <Popup item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

const Projects = () => {
    const { tokens } = useTheme();
  
  return (
    <div id="projects-content" className="px-4 sm:px-10 mt-24 mb-24">
      <h2 className="text-3xl md:text-5xl mb-16" style={{ color: tokens.titleColor }}>My Projects</h2>
      <div id="grid-container">
        <Grid />
      </div>
    </div>
  );
};

export default Projects;