import { ArrowRight, Sparkles } from 'lucide-react';
import { Section } from './Section';
import { CONFIG } from '../config/urls';

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden py-20 md:py-32 bg-[#F4F9F6]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-200/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-[#16382D]/10 backdrop-blur-md shadow-sm">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <span className="text-sm font-bold tracking-wide uppercase text-gradient-premium">Start Your Journey</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#0A1A14] leading-[1.1] tracking-tight">
          Ready for the <br className="hidden md:block"/>
          <span className="text-gradient-premium">Agentic AI Era?</span>
        </h2>

        <p className="text-xl md:text-2xl text-[#4A635B] mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Join thousands of professionals who've already transformed their careers with Way2Better.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <div className="relative p-[1.5px] rounded-full overflow-hidden group/btn">
            {/* Animated Glow Border */}
            <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#059669_25%,transparent_50%,#059669_75%,transparent_100%)] opacity-30 group-hover/btn:opacity-100 group-hover/btn:animate-[spin_2s_linear_infinite] transition-all" />

            <a href={CONFIG.REGISTER_URL} className="group relative z-10 flex items-center justify-center gap-3 bg-[#16382D] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0A1A14] shadow-lg transition-all">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <a href="/pricing.html" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-white border border-[#16382D]/20 text-[#16382D] hover:bg-[#E6EFEA] transition-all shadow-sm">
            View Pricing
          </a>
        </div>

        <div className="inline-flex items-center gap-4 px-6 py-4 bg-white border border-[#16382D]/10 rounded-full text-sm text-[#4A635B] shadow-sm">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 40}`}
                alt="User AVATAR"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="font-medium text-base">
            Join <span className="font-bold text-[#0A1A14]">5,000+</span> verified users today
          </span>
        </div>
      </div>
    </Section>
  );
}
