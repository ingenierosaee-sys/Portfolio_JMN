import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => setActive(Boolean(e.target.closest('a, button, .interactive')));
    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return <span className={`custom-cursor ${active ? 'active' : ''}`} style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} />;
}
