import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do Agents Knott and Roadmap differ from normal college courses?",
    answer: "They don't replace your courses; they enhance them. AI-Tutor Knott acts as a 1-on-1 personalized guide to help you master academic subjects, while AI-Trainer Roadmap provides an industry-standard track to apply that knowledge practically and become job-ready."
  },
  {
    question: "Does the certification actually count as an internship?",
    answer: "Yes. Our Virtual 3-Month Internship subjects students to rigorous, real-world corporate projects. Top employers recognize this certification as equivalent to practical, on-the-job experience, bridging the resume gap for fresh graduates."
  },
  {
    question: "Can institutions integrate Way2Better into their campus portals?",
    answer: "Absolutely. We offer enterprise APIs and institution-wide dashboards for colleges to seamlessly provide Way2Better to their entire student body and track placement readiness at scale."
  },
  {
    question: "Is the platform only for IT or engineering students?",
    answer: "No, our AI models are trained across numerous sectors. Whether a student is pursuing finance, healthcare, design, or marketing, Agent Roadmap dynamically generates a path specific to their target industry."
  },
  {
    question: "What kind of ROI do colleges see?",
    answer: "Institutions using Way2Better report up to a 40% increase in campus placement rates within the first academic year of implementation, alongside significantly higher student satisfaction scores."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#050805]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-[#050805] to-[#050805] opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-emerald-400">Questions</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about how Way2Better empowers students and transforms institutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-500/30"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
