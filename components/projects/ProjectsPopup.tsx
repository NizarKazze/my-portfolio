import { GridItem } from "./projectsData";
import InteractivePhone from "../Phone";

type PopupProps = {
  item: GridItem;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay glass */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* Contenedor */}
      <div className="relative w-[90%] h-[85%] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 grid grid-cols-2 overflow-hidden">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="p-8 text-white overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

          <p className="text-white/80 mb-6">
            {item.description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-4">
            {item.tecnologias.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg"
              >
                <img src={tech.icon} className="w-5 h-5" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="relative">
            
        </div>

        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 px-3 py-1 rounded-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Popup;