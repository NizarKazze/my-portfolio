import React, { useState } from "react";
import projectitems, { GridItem } from "./projectsData";
import Popup from "./ProjectsPopup";

const Grid: React.FC = () => {
  const [selected, setSelected] = useState<GridItem | null>(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-6 grid-rows-10 gap-3 h-screen">
        {projectitems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className={`relative cursor-pointer overflow-hidden rounded-xl ${item.className}`}
          >
            <img
              src={`${item.img}?auto=format&fit=crop&w=800`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex items-end">
              <h2 className="text-white p-4 font-semibold">
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
    return (
        <div id="projects-content" className="px-10 mt-24">
            <h2 className="text-3xl">My Projects</h2>
            <div id="grid-container" className="mt-16">
                <Grid></Grid>
            </div>
        </div>
    )
}

export default Projects;