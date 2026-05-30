import { Brain, GraduationCap, Briefcase } from 'lucide-react';
import { Section } from './Section';

const solutions = [
  {
    icon: GraduationCap,
    title: 'AI-Tutor Agent: Knott',
    description:
      'Master your college subjects from start to finish. Knott provides personalized 1-on-1 tutoring, ensuring you grasp core concepts fundamentally.',
  },
  {
    icon: Brain,
    title: 'AI-Trainer Agent: Roadmap',
    description:
      'Generate an industry-standard career roadmap. Learn with real-time examples and become a strong professional during your college days.',
  },
  {
    icon: Briefcase,
    title: 'Virtual 3-Month Internship',
    description:
      'Complete the roadmap to earn a certification equivalent to a 3-month online internship, proving your professional readiness to employers.',
  },
];

export function Solution() {
  return (
    <Section className="relative overflow-hidden">
      <div className="text-center mb-16 animate-fade-in-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          How Way2Better <span className="text-gradient-premium">Bridges the Gap</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Our powerful AI agents transform students into industry-ready professionals, equipping institutions with the ultimate career platform for the AI era.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-[#0B100C] border border-white/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] hover:border-primary-300/30 hover:bg-slate-900 border border-white/5/5 hover:shadow-[0_0_30px_rgba(190,242,100,0.15)] hover:-translate-y-2 transition-all duration-300 animate-slide-up-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary-300/10 border border-primary-300/20 group-hover:bg-primary-300/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(190,242,100,0.1)]">
                <Icon className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{solution.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{solution.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
