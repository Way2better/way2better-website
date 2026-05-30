import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-emerald-900/40 rounded-full blur-[120px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-primary-400/10 rounded-full blur-[100px] mix-blend-screen"
      />
      
      {/* Curved laser line element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-300/30 to-transparent blur-[2px]" />
      <div className="absolute top-[51%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-300/10 to-transparent blur-[10px]" />
    </div>
  );
}
