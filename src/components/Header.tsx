import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [navDarkText, setNavDarkText] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the deepest section underneath the nav by checking elements at the top center
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
      const section = elements?.find(el => el.tagName.toLowerCase() === 'section' || el.tagName.toLowerCase() === 'div');

      // If the closest structural parent has light backgrounds, we invert the font color!
      if (section && (section.className.includes('bg-[#F4F9F6]') || section.className.includes('bg-[#E6EFEA]') || section.className.includes('bg-slate-50'))) {
        setNavDarkText(true);
      } else {
        setNavDarkText(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {/* Navigation - Transparent Glassmorphic floating nav */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl px-6 py-4 backdrop-blur-xl rounded-full flex items-center justify-between shadow-lg transition-colors duration-500 border ${navDarkText ? 'bg-white/60 border-slate-900/10' : 'bg-white/5 border-white/10'}`}>
        <a href="/" className={`relative z-10 flex items-center font-black tracking-tight text-2xl cursor-pointer transition-colors duration-500 group ${navDarkText ? 'text-slate-900' : 'text-white'}`}>
          <img
            src="/logo.png"
            className="w-10 h-10 object-contain transform group-hover:scale-105 transition duration-300"
            alt="W Logo"
          />
          <span className="text-2xl pt-1 -ml-1 text-gradient-premium">ay2Better</span>
        </a>

        <div className={`relative z-10 hidden md:flex items-center gap-8 text-sm font-bold transition-colors duration-500 ${navDarkText ? 'text-slate-700' : 'text-slate-300'}`}>
          <a href="/" className={`group relative py-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(190,242,100,0.4)] ${navDarkText ? 'text-primary-600 font-black' : 'text-primary-300 font-black'}`}>
            Home
            <span className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-200 ease-out tracking-tighter rounded-full ${navDarkText ? 'bg-primary-600' : 'bg-primary-300'}`}></span>
          </a>
          <a href="/products.html" className={`group relative py-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(190,242,100,0.4)] ${navDarkText ? 'hover:text-primary-600' : 'hover:text-white'}`}>
            Products
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 ease-out group-hover:w-full tracking-tighter rounded-full ${navDarkText ? 'bg-primary-600' : 'bg-primary-300'}`}></span>
          </a>
          <a href="/pricing.html" className={`group relative py-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(190,242,100,0.4)] ${navDarkText ? 'hover:text-primary-600' : 'hover:text-white'}`}>
            Pricing
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 ease-out group-hover:w-full tracking-tighter rounded-full ${navDarkText ? 'bg-primary-600' : 'bg-primary-300'}`}></span>
          </a>
          <a href="/about.html" className={`group relative py-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(190,242,100,0.4)] ${navDarkText ? 'hover:text-primary-600' : 'hover:text-white'}`}>
            About Us
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 ease-out group-hover:w-full tracking-tighter rounded-full ${navDarkText ? 'bg-primary-600' : 'bg-primary-300'}`}></span>
          </a>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:gap-4">
          <button className={`hidden md:block text-sm font-bold transition-colors duration-500 ${navDarkText ? 'text-slate-700 hover:text-primary-600' : 'text-slate-300 hover:text-white'}`}>
            Log in
          </button>
          <button className="hidden md:flex bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all items-center gap-2 shadow-sm">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${navDarkText ? 'text-slate-900 hover:bg-slate-900/5' : 'text-white hover:bg-white/10'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[280px] border-l border-white/10 z-[110] p-8 flex flex-col md:hidden backdrop-blur-2xl bg-black/80 shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-black text-gradient-premium">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-lg font-bold">
              {[
                { name: "Home", href: "/", active: true },
                { name: "Products", href: "/products.html" },
                { name: "Pricing", href: "/pricing.html" },
                { name: "About Us", href: "/about.html" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${link.active ? 'text-primary-300 underline underline-offset-8 decoration-2' : 'text-slate-300 hover:text-primary-300'}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <a
                href="/signup.html"
                className="flex items-center justify-center gap-2 w-full bg-white text-slate-950 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
