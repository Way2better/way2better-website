import { CheckCircle2 } from 'lucide-react';
import { Section } from './Section';

const outcomes = [
  {
    title: 'Job-Ready Graduates',
    description: 'Students graduate fully equipped with the practical skills employers demand in the AI era.',
  },
  {
    title: '3-Month Internship Edge',
    description: 'Candidates secure a massive advantage through certified virtual internship experiences.',
  },
  {
    title: 'Higher Placement Rates',
    description: 'Institutions see a significant boost in campus placements and student employability scores.',
  },
  {
    title: 'Industry-Demanded Skills',
    description: 'Track and acquire the exact tools and technologies top corporate recruiters are seeking.',
  },
];

export function Outcomes() {
  return (
    <Section className="relative overflow-hidden py-24 bg-[#050805]">
      <div className="text-center mb-16 animate-fade-in-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          The Results You'll <span className="text-primary-300 drop-shadow-[0_0_8px_rgba(190,242,100,0.5)]">Achieve</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Measurable success for both the students and the institutions supporting them.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-3xl bg-slate-900 border border-white/5 border border-white/10 shadow-sm hover:shadow-[0_10px_40px_rgba(190,242,100,0.2)] hover:border-primary-400/30 transition-all duration-300 animate-slide-up-scroll hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-6 inline-flex p-3 rounded-2xl bg-primary-300/10 border border-primary-300/20 group-hover:bg-primary-300/20 group-hover:shadow-[0_0_20px_rgba(190,242,100,0.3)] group-hover:scale-110 transition-all duration-300">
              <CheckCircle2 className="w-8 h-8 text-primary-300" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{outcome.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">{outcome.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
