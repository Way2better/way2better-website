import { Section } from './Section';

export function ProductPreview() {
  return (
    <Section className="relative overflow-hidden py-24 md:py-32 bg-[#E6EFEA]">
      <div className="text-center mb-16 animate-fade-in-scroll z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          See the Power of <span className="text-primary-300 drop-shadow-[0_0_8px_rgba(190,242,100,0.5)]">Way2Better</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Our intelligent platform puts everything you need to succeed at your fingertips.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10 mt-10">
        <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-[#0B100C] border-t-[8px] border-t-primary-500 border-x-2 border-b-2 border-white/10 group hover:shadow-[0_40px_100px_rgba(190,242,100,0.2)] transition-shadow duration-700 relative">
          
          {/* Ambient dashboard backglow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-400/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
          
          <img 
             src="/dashboard.jpg" 
             alt="Way2Better Dashboard Core UI" 
             className="w-full h-auto block scale-100 group-hover:scale-[1.02] transition-transform duration-700 relative z-10"
          />
        </div>

        {/* Ambient background glows for the light wrapper */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-200/50 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/2 pointer-events-none" />
      </div>
    </Section>
  );
}
