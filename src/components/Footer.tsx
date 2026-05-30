import { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const subscriberInfo = {
      email: email,
      subscribedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'direct',
      currentUser: currentUser,
    };

    const existing = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    existing.push(subscriberInfo);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(existing));

    console.log('Newsletter subscription successful. Captured info:', subscriberInfo);
    setIsSubscribed(true);
  };

  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Enterprise', href: '#enterprise' },
      { label: 'Security', href: '#security' },
      { label: 'Changelog', href: '#changelog' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Press', href: '#press' },
      { label: 'Partners', href: '#partners' },
    ],
    resources: [
      { label: 'Community', href: '#community' },
      { label: 'Help Center', href: '#help' },
      { label: 'Guides & Tutorials', href: '#guides' },
      { label: 'API Documentation', href: '#api' },
      { label: 'System Status', href: '#status' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Data Processing', href: '#dpa' },
      { label: 'Acceptable Use', href: '#aup' },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-[#020402] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center group mb-6 cursor-pointer transition-opacity">
              <img
                src="/logo.png"
                className="w-10 h-10 object-contain transform group-hover:scale-105 transition duration-300"
                alt="W Logo"
              />
              <span className="text-2xl pt-1 -ml-1 text-gradient-premium font-black tracking-tight">ay2Better</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 pr-4">
              AI-powered career intelligence for ambitious professionals and forward-thinking enterprises. Navigate the future of work with confidence.
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h4>
              {isSubscribed ? (
                <div className="bg-primary-950/30 border border-primary-500/30 rounded-2xl p-4 text-center">
                  <p className="text-sm font-medium text-primary-400 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-ping" />
                    Thank you! You are subscribed.
                  </p>
                </div>
              ) : (
                <form className="flex gap-3 items-center" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 h-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#65a30d] hover:bg-[#54870a] text-white rounded-2xl w-12 h-12 flex items-center justify-center transition-all shrink-0 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(101,163,13,0.15)]"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </form>
              )}
              <p className="text-xs text-slate-500 mt-2">Get the latest career insights and platform updates.</p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-primary-300 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-primary-300 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-primary-300 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-primary-300 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10 mb-8">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <MapPin className="w-5 h-5 text-primary-400/70" />
            <span>116, 4th Floor, Kasi Aracade, Thiyagaraya Nagar<br />Chennai, Tamilnadu, India-600017</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Mail className="w-5 h-5 text-primary-400/70" />
            <a href="mailto:info@way2better.com" className="hover:text-primary-300 transition-colors">info@way2better.com</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Phone className="w-5 h-5 text-primary-400/70" />
            <a href="tel:+917869868867" className="hover:text-primary-300 transition-colors">Ph:+91-78698 68867</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Way2Better Technologies, Inc. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#twitter" className="text-slate-500 hover:text-primary-300 transition-colors duration-200" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#linkedin" className="text-slate-500 hover:text-primary-300 transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#github" className="text-slate-500 hover:text-primary-300 transition-colors duration-200" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
