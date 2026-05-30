import { Target, Zap, Map, BookOpen, TrendingUp } from 'lucide-react';
import { Section } from './Section';

const steps = [
  {
    icon: Target,
    number: 1,
    title: 'Set College-to-Career Goals',
    description: 'Start by defining your target role and the industry you want to join after college.',
  },
  {
    icon: BookOpen,
    number: 2,
    title: 'Learn with AI-Tutor Knott',
    description: 'Master your college subjects from start to finish with personalized 1-on-1 AI tutoring.',
  },
  {
    icon: Map,
    number: 3,
    title: 'Generate Industry Roadmap',
    description: 'Our AI creates a step-by-step career roadmap to build professional readiness during your studies.',
  },
  {
    icon: Zap,
    number: 4,
    title: 'Complete Virtual Internship',
    description: 'Work on real-time projects and examples that simulate a 3-month corporate internship.',
  },
  {
    icon: TrendingUp,
    number: 5,
    title: 'Get Certified & Placed',
    description: 'Earn a certification validating your practical experience to stand out to top employers.',
  },
];

export function HowItWorks() {
  return (
    <Section className="relative overflow-hidden pt-24 pb-32">
      <div className="text-center mb-20 animate-fade-in-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          How Our AI Agents <span className="text-gradient-premium">Work</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Five simple steps to transform students from theoretical learners to industry-ready professionals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-900 border border-white/5/5 border border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] hover:bg-slate-900 border border-white/5/10 hover:border-primary-300/30 hover:shadow-[0_0_30px_rgba(190,242,100,0.15)] hover:-translate-y-1 transition-all duration-300 animate-slide-up-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity"
                   style={{
                     background: 'radial-gradient(circle at 50% 0%, rgba(190,242,100,0.2) 0%, transparent 60%)',
                     zIndex: -1
                   }}
              ></div>
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5/5 border border-white/10 flex items-center justify-center text-primary-300 font-bold text-2xl mb-8 group-hover:scale-110 group-hover:bg-primary-300/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="w-8 h-8 text-primary-300 relative z-10" />
              </div>
              
              <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-primary-300/10 transition-colors pointer-events-none">
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
