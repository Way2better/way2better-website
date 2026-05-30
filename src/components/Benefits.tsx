import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary-300" />,
    title: "Placement Readiness",
    description: "Colleges adopting our AI Agents see massive improvements in student employability, driven by hyper-targeted industry skills.",
    metric: "40%",
    metricLabel: "Higher Placement Rate"
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-300" />,
    title: "Time Optimization",
    description: "Students stop wasting time guessing what to study. Our AI pinpoints exactly what they need to master the AI era.",
    metric: "50%",
    metricLabel: "Faster Learning"
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-300" />,
    title: "Virtual Internship",
    description: "Students graduate not just with a degree, but with certified, practical experience they can put directly on their resumes.",
    metric: "3 Mo.",
    metricLabel: "Certified Experience"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-300" />,
    title: "Future-Proof Campus",
    description: "Institutions stay ahead of rapid industry shifts. Way2Better updates curriculums in real-time based on corporate demand.",
    metric: "98%",
    metricLabel: "Institutional Satisfaction"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 relative bg-[#050805]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-emerald-400">ROI</span> of Way2Better
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Measurable impact for ambitious college students and forward-thinking educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:bg-white/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-900/40 border border-primary-500/20 flex items-center justify-center">
                  {benefit.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  
                  <div className="flex items-end gap-3 pt-4 border-t border-white/10">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-emerald-400">
                      {benefit.metric}
                    </span>
                    <span className="text-sm font-medium text-slate-300 mb-1 uppercase tracking-wider">
                      {benefit.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
