import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

/**
 * Lighter custom cursor: a compact dot with a subtle ring and a quick scale pulse on hover.
 * It keeps the desktop-only behavior without the heavier spring animation that was causing lag.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 260, damping: 26, mass: 0.3 });
  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const t = e.target as HTMLElement | null;
      const tagged = t?.closest<HTMLElement>('[data-cursor]');
      setMode(tagged?.dataset.cursor ?? null);
      setHoverLink(!tagged && !!t?.closest('a,button,[role="button"]'));
    };

    const leave = () => setVisible(false);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const active = !!mode || hoverLink;
  const size = mode ? 32 : hoverLink ? 26 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200]"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: down ? 0.9 : 1,
      }}
      transition={{ duration: 0.12, ease: 'linear' }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full border border-white/50 bg-white"
        animate={{
          width: size + 14,
          height: size + 14,
          opacity: active ? 0.9 : 0.35,
          x: '-50%',
          y: '-50%',
        }}
        transition={{ duration: 0.12 }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full bg-[#f5e9e1]"
        animate={{
          width: size,
          height: size,
          opacity: active ? 1 : 0.9,
          backgroundColor: mode ? 'rgba(229,19,43,0.95)' : 'rgba(245,233,225,1)',
          x: '-50%',
          y: '-50%',
        }}
        transition={{ duration: 0.12 }}
      />
    </motion.div>
  );
}
