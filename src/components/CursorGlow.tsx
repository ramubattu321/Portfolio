import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 transition-opacity duration-300 hidden lg:block"
      style={{
        opacity: visible ? 1 : 0,
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[80px]" />
    </div>
  );
}
