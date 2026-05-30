import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const problems = [
  "Degrees no longer guarantee job readiness",
  "Students lack real-world internship experience",
  "College curriculum often lags behind the AI era",
  "Institutions struggle to provide 1-on-1 career training",
  "Job scarcity makes early professional readiness critical",
  "Theoretical learning doesn't translate to industry skills"
];

export function Problem() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#F4F9F6] text-[#0A1A14] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 border border-[#16382D]/20 px-4 py-1.5 rounded-full text-sm font-semibold text-[#16382D]"
        >
          The Problem
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center leading-tight tracking-tight text-[#0A1A14] mb-6"
        >
          The College-to-Career Gap <br />
          equals <span className="text-gradient-premium">Unemployment</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#4A635B] text-center max-w-3xl mb-16 text-lg"
        >
          The traditional educational model leaves students unprepared for the modern workforce. In the AI era, theoretical knowledge isn't enough—students need real-world experience, and institutions need scalable ways to deliver professional readiness to combat job scarcity.
        </motion.p>

        {/* Layout Grid */}
        <div className="w-full grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl bg-[#E6EFEA]">
          
          {/* Left Dark Image Side (The Reality Example) */}
          <div className="relative bg-[#050805] p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="absolute -left-[30%] w-[120%] h-[150%] bg-emerald-900/30 rounded-[100%] blur-xl opacity-40 mix-blend-screen" />
              <div className="absolute -right-[30%] w-[120%] h-[150%] bg-rose-900/20 rounded-[100%] blur-xl opacity-40 mix-blend-screen" />
            </div>

            {/* Mock Job Application UI */}
            <div className="relative z-10 w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Job Application</div>
                  <div className="text-lg font-bold text-white">Entry Level Engineer</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-400 font-bold">IT</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Requirement:</span>
                  <span className="text-rose-400 font-semibold">2+ Years Experience</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Your Profile:</span>
                  <span className="text-slate-200">Recent Graduate (0 Yrs)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Practical Skills:</span>
                  <span className="text-amber-400">Theory Only</span>
                </div>
              </div>

              <div className="mt-2 pt-4 border-t border-slate-800">
                <div className="w-full bg-rose-500/10 border border-rose-500/20 text-rose-400 py-2.5 rounded-lg text-center font-bold text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Auto-Rejected: Experience Required
                </div>
              </div>
            </div>

            {/* Floating connecting elements */}
            <div className="relative z-10 mt-6 flex flex-col items-center gap-2">
              <div className="h-8 w-px bg-gradient-to-b from-slate-700 to-transparent"></div>
              <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full text-xs text-slate-300 font-medium shadow-lg backdrop-blur-sm">
                The Catch-22: Need experience to get a job, need a job to get experience.
              </div>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#0A1A14] mb-10 tracking-tight">Today's Challenges</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {problems.map((problem, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary-300 mt-0.5 shrink-0 stroke-[3]" />
                  <span className="text-[#16382D] font-semibold text-sm leading-relaxed">{problem}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-[#16382D] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0A1A14] transition-colors flex items-center gap-2">
                See Our AI Agents
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
