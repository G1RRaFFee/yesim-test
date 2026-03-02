'use client';

import { type PointerEvent, useRef, type WheelEvent } from 'react';

interface UseDragScrollOptions {
  speed?: number;
}

export function useDragScroll<T extends HTMLElement>({ speed = 1.5 }: UseDragScrollOptions = {}) {
  const ref = useRef<T | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e: PointerEvent<T>) => {
    const container = ref.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = container.scrollLeft;

    container.style.cursor = 'grabbing';
    container.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<T>) => {
    if (!isDragging.current) return;

    const container = ref.current;
    if (!container) return;

    const delta = (e.clientX - startX.current) * speed;
    container.scrollLeft = scrollLeft.current - delta;
  };

  const onPointerUp = (e: PointerEvent<T>) => {
    const container = ref.current;
    if (!container) return;

    isDragging.current = false;
    container.style.cursor = 'grab';
    container.releasePointerCapture(e.pointerId);
  };

  const onWheel = (e: WheelEvent<T>) => {
    const container = ref.current;
    if (!container) return;

    if (e.shiftKey) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  return {
    ref,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerLeave: onPointerUp,
    onWheel,
  };
}
