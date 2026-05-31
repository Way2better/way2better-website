import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, CalendarDays, LineChart, Target, Briefcase, FileText } from 'lucide-react';
import { GradientBackground } from './GradientBackground';
import { ParticleBackground } from './ParticleBackground';
import { CONFIG } from '../config/urls';

export function Hero() {
  const { scrollY } = useScroll();
  const yWave1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const yWave2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const yContent = useTransform(scrollY, [0, 800], [0, 100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className="relative min-h-[100vh] md:min-h-[120vh] bg-[#050805] text-white font-sans overflow-hidden selection:bg-primary-300 selection:text-black pb-32">
      <GradientBackground />
      <ParticleBackground />

      {/* Dynamic Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-[650px] h-[650px] bg-primary-300/15 rounded-full blur-[100px] z-10 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100, mass: 0.5 }}
      />

      {/* Huge Laser Waves with Parallax */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: yWave1 }}
          className="absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 w-[250%] md:w-[150%] h-[1200px] rounded-[100%] border-t-[3px] border-primary-300/80 shadow-[0_-10px_40px_rgba(190,242,100,0.4)] blur-[1px]"
        />
        <motion.div
          style={{ y: yWave2 }}
          className="absolute top-[48%] md:top-[55%] left-1/2 -translate-x-1/2 w-[200%] md:w-[120%] h-[1200px] rounded-[100%] border-t-[2px] border-emerald-400/50 shadow-[0_-5px_30px_rgba(52,211,153,0.3)] blur-[2px]"
        />
      </div>



      {/* Hero Content - Centered */}
      <motion.div
        style={{ y: yContent }}
        className="relative pt-32 pb-0 md:pt-40 px-4 z-20 flex flex-col items-center text-center"
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8 relative rounded-full p-[1px] inline-flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(190,242,100,0.15)] group"
        >
          {/* Spinning Conic Gradient for Border Lighting */}
          <div className="absolute w-[400%] h-[400%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#050805_0%,#BEF264_50%,#050805_100%)] opacity-80" />

          <span className="relative text-sm font-bold text-primary-300 uppercase tracking-widest bg-[#050805] px-6 py-2 rounded-full">
            Introducing Agents Knott & Roadmap
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-bold leading-[1.05] tracking-tight mb-6 drop-shadow-2xl flex flex-col items-center gap-1"
        >
          <span className="text-4xl md:text-[3.2rem] text-white">AI-Powered</span>
          <span className="text-5xl md:text-[5.2rem] bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Career Intelligence Platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 text-lg md:text-xl text-slate-400 max-w-4xl font-medium leading-relaxed px-4"
        >
          Empowering college students and institutions with AI Agents to bridge the gap <br />
          between academic education and real-world job readiness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="relative p-[1.5px] rounded-full overflow-hidden group/btn">
            {/* Animated Glow Border */}
            <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#BEF264_25%,transparent_50%,#BEF264_75%,transparent_100%)] opacity-30 group-hover/btn:opacity-100 group-hover/btn:animate-[spin_2s_linear_infinite] transition-all" />

            <a href={CONFIG.REGISTER_URL} className="group relative z-10 flex items-center gap-3 bg-white text-slate-950 pl-4 pr-2 py-1.5 rounded-full font-bold hover:bg-slate-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Start Your Journey
              <div className="bg-primary-300 text-slate-950 p-2 rounded-full group-hover:bg-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4 animate-bounce-x" />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 text-sm text-slate-500 font-medium uppercase tracking-widest"
        >
          Explore Way2Better Modules
        </motion.p>

        {/* Way2Better Modules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
          className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl relative z-40 mx-auto"
        >
          {[
            { name: "Agent Knott", icon: Bot },
            { name: "Agent Roadmap", icon: Target },
            { name: "Virtual Internship", icon: Briefcase },
            { name: "Certifications", icon: FileText },
            { name: "Institution Panel", icon: LineChart },
            { name: "Skill Tracking", icon: CalendarDays }
          ].map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={i} className="px-4 py-5 w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-primary-300/30 transition-all group cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(190,242,100,0.15)] hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl bg-primary-300/10 border border-primary-300/20 flex items-center justify-center text-primary-300 group-hover:scale-110 group-hover:bg-primary-300/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-center font-bold text-sm text-slate-300 group-hover:text-white transition-colors leading-tight">
                  {product.name}
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
