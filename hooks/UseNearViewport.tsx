import { useEffect, useRef, useState, RefObject, MutableRefObject } from "react";

interface UseNearViewportOptions {
  /** px antes de entrar al viewport para MONTAR el componente (default: 300) */
  mountMargin?: number;
  /** px después de salir del viewport para DESMONTAR el componente (default: 600) */
  unmountMargin?: number;
}

/**
 * Detecta si un elemento está cerca del viewport.
 * Monta cuando está a `mountMargin`px de aparecer,
 * desmonta cuando está a `unmountMargin`px de haber desaparecido.
 * Devuelve [ref, isNear].
 */

export function useNearViewport<T extends HTMLElement>(
  options: UseNearViewportOptions = {}
): [MutableRefObject<T | null>, boolean] {
  const { mountMargin = 300, unmountMargin = 600 } = options;

  const ref = useRef<T | null>(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const buildObserver = (near: boolean) =>
      new IntersectionObserver(
        ([entry]) => {
          if (!near && entry.isIntersecting) {
            setIsNear(true);
          } else if (near && !entry.isIntersecting) {
            setIsNear(false);
          }
        },
        {
          rootMargin: near
            ? `${unmountMargin}px 0px ${unmountMargin}px 0px`
            : `${mountMargin}px 0px ${mountMargin}px 0px`,
        }
      );

    const observer = buildObserver(isNear);
    observer.observe(el);

    return () => observer.disconnect();
  }, [isNear, mountMargin, unmountMargin]);

  return [ref, isNear];
}