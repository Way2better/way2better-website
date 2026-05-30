import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description, isLight }: FeatureCardProps & { isLight?: boolean }) {
  const cardBg = isLight 
    ? "bg-slate-900 border border-white/5 border-white/10 hover:border-primary-500/30 hover:bg-white/5 shadow-sm hover:shadow-[0_10px_40px_rgba(190,242,100,0.2)]" 
    : "bg-[#0B100C]/80 border-white/5 backdrop-blur-md hover:bg-slate-900 border border-white/5/5 hover:border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(190,242,100,0.1)]";
  
  const iconBg = isLight 
    ? "bg-primary-300/10 border-primary-100 group-hover:bg-primary-300/10 group-hover:shadow-[0_0_20px_rgba(190,242,100,0.3)]" 
    : "bg-slate-900 border border-white/5/5 border-white/10 group-hover:bg-primary-300/10";
  
  const iconColor = isLight ? "text-primary-300" : "text-primary-300";
  const titleColor = isLight ? "text-white group-hover:text-gradient-premium" : "text-white group-hover:text-gradient-premium";
  const descColor = isLight ? "text-slate-400" : "text-slate-400";
  const exploreColor = "text-gradient-premium";

  return (
    <div className={`group h-full p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${cardBg}`}>
      <div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border group-hover:scale-110 transition-all duration-300 relative overflow-hidden ${iconBg}`}>
          <Icon className={`w-6 h-6 relative z-10 ${iconColor}`} />
          {!isLight && <div className="absolute inset-0 bg-primary-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />}
        </div>
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 tracking-tight ${titleColor}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed font-medium ${descColor}`}>
          {description}
        </p>
      </div>
      <div className={`mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${exploreColor}`}>
         <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
         <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}
