import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxWrapperProps {
  children?: ReactNode;
  speed?: number;
  className?: string;
  from?: number;
  to?: number;
}

export function ParallaxWrapper({ children, speed = 0.5, className = '', from = 0, to = 1000 }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position into a Y offset based on speed.
  const rawY = useTransform(scrollY, [from, to], [0, speed * (to - from)]);
  const y = useSpring(rawY, { stiffness: 400, damping: 90 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
