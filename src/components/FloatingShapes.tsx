import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function FloatingShapes() {
  const { scrollY } = useScroll();
  
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 300]), { stiffness: 400, damping: 90 });
  const y2 = useSpring(useTransform(scrollY, [0, 1000], [0, 200]), { stiffness: 400, damping: 90 });
  const y3 = useSpring(useTransform(scrollY, [0, 1000], [0, 400]), { stiffness: 400, damping: 90 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-200/20 to-blue-200/20 rounded-full blur-3xl"
        style={{ y: y1 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br from-accent-200/20 to-emerald-200/20 rounded-full blur-3xl"
        style={{ y: y2 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-200/15 to-primary-200/15 rounded-full blur-3xl"
        style={{ y: y3 }}
        aria-hidden="true"
      />
    </div>
  );
}
