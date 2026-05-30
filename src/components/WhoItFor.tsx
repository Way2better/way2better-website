import { GraduationCap, Building2, Users, Search } from 'lucide-react';
import { Section } from './Section';

const audiences = [
  {
    icon: GraduationCap,
    audience: 'College Students',
    from: 'Theory',
    to: 'Practical',
    description:
      'Gain real-world experience during your college days with virtual internships and 1-on-1 AI tutoring.',
  },
  {
    icon: Building2,
    audience: 'Colleges & Institutions',
    from: 'Stagnation',
    to: 'Placement',
    description:
      'Empower your campus with scalable AI tools to drastically improve student placement rates.',
  },
  {
    icon: Users,
    audience: 'Career Counselors',
    from: 'Manual',
    to: 'AI-Driven',
    description: 'Track student progress across thousands of candidates effortlessly with our analytics dashboard.',
  },
  {
    icon: Search,
    audience: 'Recruiters',
    from: 'Guesswork',
    to: 'Verified',
    description:
      'Hire candidates who already possess verified skills and a certified 3-month online internship.',
  },
];

export function WhoItFor() {
  return (
    <Section className="relative overflow-hidden py-24 bg-[#F4F9F6]">
      <div className="text-center mb-16 animate-fade-in-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A1A14]">
          Who It's <span className="text-gradient-premium">For</span>
        </h2>
        <p className="text-lg text-[#4A635B] max-w-2xl mx-auto">
          Way2Better bridges the gap between ambitious students and the institutions that support them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {audiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-[#16382D]/10 shadow-sm hover:shadow-[0_10px_40px_rgba(190,242,100,0.2)] hover:-translate-y-1 transition-all duration-300 animate-slide-up-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-[#F4F9F6] border border-[#16382D]/10 group-hover:bg-primary-300/10 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-primary-400" />
              </div>

              <h3 className="text-xl font-bold text-[#0A1A14] mb-4">{item.audience}</h3>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-[#4A635B] group-hover:text-[#0A1A14] transition-colors">{item.from}</span>
                <div className="flex-1 h-[2px] bg-[#F4F9F6] border border-[#16382D]/10 relative">
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-primary-300/50 to-primary-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm font-bold text-gradient-premium uppercase tracking-tighter">{item.to}</span>
              </div>

              <p className="text-[#4A635B] text-sm leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
