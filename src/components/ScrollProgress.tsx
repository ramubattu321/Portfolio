import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400"
      style={{ scaleX: progress }}
    />
  );
}
