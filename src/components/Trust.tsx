import { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'User count', target: 500 },
  { label: 'Resumes created', target: 2000 },
  { label: 'Careers mapped', target: 1500 },
  { label: 'Learning hours', target: 100000 },
  { label: 'Institutions Trusted', target: 5 },
];

export function Trust() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 5000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounts(stats.map(stat => {
        const val = Math.ceil(stat.target * progress);
        return val > stat.target ? stat.target : val;
      }));

      if (frame >= totalFrames) clearInterval(timer);
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="trust" className="py-24 px-6 md:px-20 relative overflow-hidden bg-[#F4F9F6]">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center mb-16 px-6 py-2 rounded-full bg-white border border-[#16382D]/20 text-[#16382D] font-bold text-xs uppercase tracking-widest shadow-sm">
          Trusted by Early Adopters
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="group bg-white backdrop-blur-md border border-[#16382D]/10 rounded-[32px] p-8 hover:bg-[#E6EFEA] hover:border-primary-500/30 hover:-translate-y-2 transition-all duration-500 shadow-sm overflow-hidden">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#0A1A14] mb-3 break-words group-hover:text-primary-600 transition-colors">
                {counts[i].toLocaleString()}{stat.target >= 1 ? '+' : ''}
              </div>
              <div className="text-[10px] md:text-sm text-[#4A635B] font-bold uppercase tracking-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {[
            'Built by industry professionals',
            'Designed with hiring insights',
            'Continuously evolving platform'
          ].map((text, i) => (
            <span key={i} className="flex items-center gap-2.5 text-[#16382D] font-medium tracking-tight">
              <CheckCircle2 className="text-primary-500 w-5 h-5" /> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
