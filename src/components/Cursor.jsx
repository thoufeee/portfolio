import { useEffect, useRef, useState } from 'react';

/** Violet ring that follows the pointer and grows over links/buttons (mouse only). */
export default function Cursor() {
  const ref = useRef(null);
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    const over = (e) => setHot(Boolean(e.target.closest?.('a, button')));
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor pointer-events-none fixed left-0 top-0 z-[200] hidden rounded-full pointer-fine:block ${hot ? 'hot' : ''}`}
    />
  );
}
