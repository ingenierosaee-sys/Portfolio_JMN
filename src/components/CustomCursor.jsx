import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const frameRef = useRef(null);
  const currentRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const syncEnabled = () => setEnabled(media.matches);

    syncEnabled();
    media.addEventListener('change', syncEnabled);

    return () => media.removeEventListener('change', syncEnabled);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('has-custom-cursor', enabled);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return undefined;

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.22;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.22;
      setPos({ ...currentRef.current });
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const move = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const over = (e) => setActive(Boolean(e.target.closest('a, button, .interactive')));

    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <span className={`custom-cursor ${active ? 'active' : ''}`} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }} />;
}
