'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { TimelinePoint } from './TimeLineData';
// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface TimelineStepperProps {
  points: TimelinePoint[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function TimelineStepper({ points }: TimelineStepperProps) {
  const [current, setCurrent] = useState(0);
  const { tokens } = useTheme();

  if (!points || points.length === 0) return null;

  const currentPoint = points[current];

  return (
    <div className="max-w-7xl mx-auto p-6 rounded-2xl shadow-sm mt-24">

      {/* ── MOBILE: Stepper vertical ── */}
      <div className="flex flex-col sm:hidden mb-6">
        {points.map((point, i) => {
          const isActive = i === current;
          const isPast   = i < current;
          const isLast   = i === points.length - 1;

          return (
            <div key={i} className="flex items-start gap-3">
              {/* Columna izquierda: círculo + línea vertical */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCurrent(i)}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2
                    transition-all duration-200 font-bold text-sm shrink-0
                    ${isActive
                      ? 'bg-[#b19eef] border-[#0c2461] text-gray shadow-md'
                      : 'border-[#b19eef] text-gray-400 hover:border-[#0c2461] hover:text-[#0c2461]'
                    }
                  `}
                >
                  {i + 1}
                </button>
                {!isLast && (
                  <div
                    className={`w-[2px] flex-1 min-h-[28px] my-1 transition-colors ${
                      isPast ? 'bg-[#0c2461]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>

              {/* Columna derecha: texto del paso */}
              <button
                onClick={() => setCurrent(i)}
                className={`
                  text-left pb-6 pt-1 text-sm leading-snug transition-colors
                  ${isActive ? 'text-white font-semibold' : 'text-gray-400'}
                  ${isLast ? 'pb-0' : ''}
                `}
              >
                {(point.startDate || point.endDate) && (
                  <span className="block text-xs uppercase tracking-wide text-gray-400 mb-0.5">
                    {point.startDate && `Inicio: ${point.startDate}`}
                    {point.startDate && point.endDate && ' • '}
                    {point.endDate && `Fin: ${point.endDate}`}
                  </span>
                )}
                <span className="line-clamp-2">{point.text}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP: Stepper horizontal (original) ── */}
      <div className="hidden sm:flex items-center overflow-x-auto pb-4 mb-6">
        {points.map((_, i) => {
          const isActive = i === current;

          return (
            <div key={i} className="flex items-center flex-1 min-w-0">
              <button
                onClick={() => setCurrent(i)}
                className="flex flex-col items-center gap-2 flex-1 min-w-[56px]"
              >
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center border-2
                    transition-all duration-200 relative z-10 font-bold text-lg
                    ${isActive
                      ? 'bg-[#b19eef] border-[#0c2461] text-gray shadow-md'
                      : 'border-[#b19eef] text-gray-400 hover:border-[#0c2461] hover:text-[#0c2461]'
                    }
                  `}
                >
                  {i + 1}
                </div>
              </button>

              {i < points.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-1 transition-colors ${
                    i < current ? 'bg-[#0c2461]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Detalle del punto seleccionado (compartido) ── */}
      <div className="p-5 min-h-[120px]">
        <div className="flex flex-col gap-2">
          {(currentPoint.startDate || currentPoint.endDate) && (
            <div
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider"
              style={{ color: tokens.textMuted }}
            >
              {currentPoint.startDate && (
                <span>
                  Inicio:{' '}
                  <span style={{ color: tokens.titleColor }}>{currentPoint.startDate}</span>
                </span>
              )}
              {currentPoint.startDate && currentPoint.endDate && <span>•</span>}
              {currentPoint.endDate && (
                <span>
                  Fin:{' '}
                  <span style={{ color: tokens.titleColor }}>{currentPoint.endDate}</span>
                </span>
              )}
            </div>
          )}

          <p className="text-base mt-2">{currentPoint.text}</p>
        </div>
      </div>

    </div>
  );
}