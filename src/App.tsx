import { lazy, Suspense } from 'react';
import { Header, Hero } from './components';

// Lazy loaded below-the-fold components
const Problem = lazy(() => import('./components/Problem').then(m => ({ default: m.Problem })));
const Solution = lazy(() => import('./components/Solution').then(m => ({ default: m.Solution })));
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const WhoItFor = lazy(() => import('./components/WhoItFor').then(m => ({ default: m.WhoItFor })));
const Outcomes = lazy(() => import('./components/Outcomes').then(m => ({ default: m.Outcomes })));
const Trust = lazy(() => import('./components/Trust').then(m => ({ default: m.Trust })));
const Benefits = lazy(() => import('./components/Benefits').then(m => ({ default: m.Benefits })));
const Philosophy = lazy(() => import('./components/Philosophy').then(m => ({ default: m.Philosophy })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function App() {
  return (
    <div className="w-full bg-[#050805] text-slate-200 relative overflow-x-hidden selection:bg-primary-300 selection:text-black">
      {/* Global Ambient Background Glows to maintain rhythm */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/15 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[50%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary-900/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[80%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-emerald-800/15 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="relative z-10 w-full">
        <Header />
        <Hero />
        <Suspense fallback={<div className="min-h-[100px] flex items-center justify-center text-slate-500/30">Loading...</div>}>
          <Problem />
          <Solution />
          <Features />
          <HowItWorks />
          <WhoItFor />
          <Outcomes />
          <Trust />
          <Benefits />
          <Philosophy />
          <FAQ />
          <FinalCTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
