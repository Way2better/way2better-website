import {
  GraduationCap,
  Map,
  Briefcase,
  Award,
  Building2,
  LineChart,
  Laptop,
  Users
} from 'lucide-react';
import { Section } from './Section';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: GraduationCap,
    title: 'AI-Tutor Agent Knott',
    description: '1-on-1 personalized tutoring for all college subjects to ensure academic mastery.',
  },
  {
    icon: Map,
    title: 'AI-Trainer Roadmap',
    description: 'Industry-standard career roadmaps that turn students into professionals.',
  },
  {
    icon: Laptop,
    title: 'Virtual Internships',
    description: 'Learn through real-world projects simulating a 3-month corporate internship.',
  },
  {
    icon: Award,
    title: 'Professional Certification',
    description: 'Earn certificates validating job readiness and practical internship experience.',
  },
  {
    icon: Building2,
    title: 'Institution Dashboard',
    description: 'Allow colleges to track student progress and showcase placement readiness.',
  },
  {
    icon: LineChart,
    title: 'Demand Skill Tracking',
    description: 'Real-time alignment with the skills top employers need in the AI era.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Portfolio Builder',
    description: 'Showcase real-world projects and internship certificates to recruiters.',
  },
  {
    icon: Users,
    title: 'Interview Preparation',
    description: 'AI-driven mock interviews using real-time corporate scenarios and examples.',
  },
];

export function Features() {
  return (
    <Section className="relative overflow-hidden bg-[#F4F9F6] py-24">
      <div className="text-center mb-16 animate-fade-in-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A1A14] tracking-tight">
          Powerful AI Agents for <span className="text-gradient-premium">Students & Institutions</span>
        </h2>
        <p className="text-lg text-[#4A635B] max-w-2xl mx-auto font-medium">
          The all-in-one career platform designed to build professional readiness during college days.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="animate-slide-up-scroll"
            style={{ animationDelay: `${(index % 4) * 0.1}s` }}
          >
            <FeatureCard {...feature} isLight={true} />
          </div>
        ))}
      </div>
    </Section>
  );
}
