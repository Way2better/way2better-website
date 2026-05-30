import { ArrowRight } from 'lucide-react';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-20 relative bg-[#F4F9F6]">
      {/* Background divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#16382D]/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center">
        {/* Founder Belief */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-serif italic text-[#0A1A14] leading-tight mb-8">
            "We built Way2Better to ensure no one wastes years guessing their career path."
          </h2>
          <a href="/about.html" className="inline-flex items-center gap-3 text-primary-500 font-bold text-lg group hover:gap-5 transition-all duration-300">
            Read Founder’s Note <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Vision */}
        <div className="max-w-4xl mx-auto pt-24 border-t border-[#16382D]/10">
          <p className="text-xl md:text-2xl text-[#4A635B] leading-relaxed mb-10">
            Way2Better is building the world’s most practical career intelligence system — where ambition meets structured execution.
          </p>
          <a href="/about.html" className="text-primary-600 font-bold text-lg hover:text-[#0A1A14] transition-colors duration-300 px-8 py-3 rounded-full hover:bg-[#E6EFEA] inline-block border border-[#16382D]/20">
            Our Vision & Mission
          </a>
        </div>
      </div>
    </section>
  );
}
