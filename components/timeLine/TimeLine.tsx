'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export interface TimelinePoint {
  startDate?: string;
  endDate?: string;
  text: string;
}

interface TimelineStepperProps {
  points: TimelinePoint[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Mock Data (Array de prueba)
// ─────────────────────────────────────────────────────────────────────────────
export const MOCK_POINTS: TimelinePoint[] = [
  { 
    startDate: '10 Oct 2023', 
    endDate: '12 Oct 2023', 
    text: 'Análisis y toma de requerimientos iniciales con el cliente.' 
  },
  { 
    startDate: '13 Oct 2023', 
    text: 'Diseño de la arquitectura y mockups de la interfaz.' 
  },
  { 
    text: 'Desarrollo activo de los componentes principales (sin fechas especificadas).' 
  },
  { 
    endDate: '30 Oct 2023', 
    text: 'Fase de pruebas (QA) y pase final a producción.' 
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function TimelineStepper({ points = MOCK_POINTS }: TimelineStepperProps) {
  const [current, setCurrent] = useState(0);
      const { tokens } = useTheme();

  if (!points || points.length === 0) return null;

  const currentPoint = points[current];

  return (
    <div className="max-w-7xl mx-auto p-6 rounded-2xl shadow-sm mt-24">
      
      {/* 1. Navegador de Puntos (Línea de tiempo) */}
      <div className="flex items-center overflow-x-auto pb-4 mb-6">
        {points.map((_, i) => {
          const isActive = i === current;
          
          return (
            <div key={i} className="flex items-center flex-1 min-w-0">
              {/* Botón / Punto */}
              <button
                onClick={() => setCurrent(i)}
                className="flex flex-col items-center gap-2 flex-1 min-w-[56px]"
              >
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-200 relative z-10 font-bold text-lg
                    ${isActive 
                      ? 'bg-[#b19eef] border-[#0c2461] text-gray shadow-md' 
                      : 'border-[#b19eef] text-gray-400 hover:border-[#0c2461] hover:text-[#0c2461]'
                    }
                  `}
                >
                  {i + 1}
                </div>
              </button>

              {/* Línea conectora (no se renderiza en el último elemento) */}
              {i < points.length - 1 && (
                <div className={`flex-1 h-[2px] mx-1 transition-colors ${i < current ? 'bg-[#0c2461]' : 'bg-gray-200'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Detalle del Punto Seleccionado */}
      <div className="p-5 min-h-[120px]">
        <div className="flex flex-col gap-2">
          {/* Fechas */}
          {(currentPoint.startDate || currentPoint.endDate) && (
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider" style={{ color: tokens.textMuted }}>
              {currentPoint.startDate && (
                <span>Inicio: <span style={{ color: tokens.titleColor }}>{currentPoint.startDate}</span></span>
              )}
              {currentPoint.startDate && currentPoint.endDate && <span>•</span>}
              {currentPoint.endDate && (
                <span>Fin: <span style={{ color: tokens.titleColor }}>{currentPoint.endDate}</span></span>
              )}
            </div>
          )}
          
          {/* Texto descriptivo */}
          <p className="text-base mt-2">
            {currentPoint.text}
          </p>
        </div>
      </div>

    </div>
  );
}