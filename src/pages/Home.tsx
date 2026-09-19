import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BlogSection } from '../components/sections';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GIF_POOL, CONFIG } from '../data';
import { motion } from 'motion/react';
import { useAppContext } from '../contexts/AppContext';

function SkoolHero() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[0 % GIF_POOL.length];
  
  const scrollToNext = () => {
    document.getElementById('asr')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skool" className={`relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8 transition-colors duration-200 ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-black'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-200 z-10 ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'}`} />
        
        <img 
          src={bgImage} 
          alt="Parkour Background" 
          fetchPriority="high"
          loading="eager"
          className={`w-full h-full object-cover absolute inset-0 z-20 mix-blend-overlay ${theme === 'dark' ? 'grayscale opacity-40' : 'grayscale-0 opacity-30'}`}
        />
        
        <div className={`absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t to-transparent z-30 transition-colors duration-200 ${theme === 'dark' ? 'from-zinc-950' : 'from-neutral-50'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-start text-left mt-8 md:mt-0"
        >
          <h1 className="text-[clamp(2.1rem,10.2vw,4.5rem)] sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-4 md:mb-8">
            <span className="block whitespace-nowrap">move better</span>
            <span className="block whitespace-nowrap">in the real world</span>
          </h1>
          
          <p className={`text-[clamp(0.8rem,3.8vw,1.25rem)] md:text-2xl mb-6 md:mb-12 max-w-2xl leading-relaxed font-medium transition-colors duration-200 ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'}`}>
            <span className="block whitespace-nowrap">Learn parkour with our worldwide community</span>
            <span className="block whitespace-nowrap">for parkour athletes, artists, & coaches 🌎 🌍 🌏</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.skool.com/apexmovement/about?ref=ceaa23f64b494958924a0fe4b69e4be1"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]'}`}
            >
              Join Parkour Skool <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <button 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-4" 
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </section>
  );
}

function CoachSection() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[2 % GIF_POOL.length];
  
  const scrollToNext = () => {
    document.getElementById('denver')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="coach" className={`relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden transition-colors duration-200 ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-black'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-200 z-10 ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'}`} />
        <img 
          src={bgImage} 
          alt="Coach Background" 
          className={`w-full h-full object-cover absolute inset-0 z-20 mix-blend-overlay ${theme === 'dark' ? 'grayscale opacity-40' : 'grayscale-0 opacity-30'}`}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-40 flex flex-col items-start text-left mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full mb-4 lg:mb-10 max-w-4xl"
        >
          <h2 className="text-[clamp(2rem,10vw,7.5rem)] sm:text-[clamp(3.5rem,7vw,7.5rem)] font-black tracking-tighter leading-[0.9]">
            make parkour<br/>coaching a<br/>sustainable<br/>career
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-base md:text-2xl font-medium leading-relaxed mb-6 lg:mb-12 max-w-2xl transition-colors duration-200 ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'}`}
        >
          Book a call to see if our 3-month program is a good fit. {CONFIG.cohort.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <a 
            href="https://calendly.com/apexmovement/coach"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]'}`}
          >
            APPLY NOW <ArrowRight className="w-5 h-5" />
          </a>
          <Link 
            to="/coach"
            className={`inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] border transition-all active:scale-95 ${theme === 'dark' ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white hover:bg-zinc-900' : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-black hover:bg-zinc-100'}`}
          >
            Learn More
          </Link>
        </motion.div>
      </div>
      
      <button 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-4" 
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </section>
  );
}

function AthleteSection() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[4 % GIF_POOL.length];
  
  const scrollToNext = () => {
    document.getElementById('asr')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="athlete" className={`relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden transition-colors duration-200 ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-black'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-200 z-10 ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'}`} />
        <img 
          src={bgImage} 
          alt="Athlete Background" 
          className={`w-full h-full object-cover absolute inset-0 z-20 mix-blend-overlay ${theme === 'dark' ? 'grayscale opacity-40' : 'grayscale-0 opacity-30'}`}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-40 flex flex-col items-start text-left mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full mb-4 lg:mb-10 max-w-4xl"
        >
          <h2 className="text-[clamp(2rem,10vw,7.5rem)] sm:text-[clamp(3.5rem,7vw,7.5rem)] font-black tracking-tighter leading-[0.9] uppercase">
            train like an athlete.<br/>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-colors duration-200 ${theme === 'dark' ? 'from-white to-zinc-500' : 'from-black to-zinc-400'}`}>
              move like a human.
            </span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-base md:text-2xl font-medium leading-relaxed mb-6 lg:mb-12 max-w-2xl transition-colors duration-200 ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'}`}
        >
          Whether you're starting your parkour journey or pushing past plateaus, our curriculum is designed to help you master the art of movement.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-auto"
        >
          <Link 
            to="/train"
            className={`inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]'}`}
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <button 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-4" 
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </section>
  );
}

function ApexSpeedRunSection() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[1 % GIF_POOL.length];

  const scrollToNext = () => {
    document.getElementById('coach')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="asr" className={`relative min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-20 md:pt-48 overflow-hidden border-y transition-colors duration-200 ${theme === 'dark' ? 'bg-neutral-100 text-black border-neutral-200' : 'bg-zinc-950 text-white border-white/10'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-200 z-10 ${theme === 'dark' ? 'from-white/95 via-white/80 to-white/95' : 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95'}`} />
        <img src={bgImage} alt="Speed Run" className={`absolute inset-0 w-full h-full object-cover z-20 ${theme === 'dark' ? 'opacity-30 grayscale-0' : 'opacity-40 grayscale mix-blend-overlay'}`} />
        {theme !== 'dark' && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-30 pointer-events-none" />}
      </div>
      
      <div className="relative z-40 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-8 md:mt-0">
        <h2 className="text-[clamp(2rem,10vw,10rem)] sm:text-[clamp(3rem,8vw,10rem)] font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">APEX SPEED RUN</h2>
        <p className={`text-[clamp(1rem,4.5vw,1.875rem)] md:text-3xl font-medium mb-8 md:mb-10 lowercase transition-colors duration-200 ${theme === 'dark' ? 'text-zinc-900' : 'text-zinc-200'}`}>finding the fastest humans <span className="uppercase">IRL</span> 🔥</p>
        <a 
          href="https://apexspeedrun.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] w-full sm:w-auto transition-all active:scale-95 ${theme === 'dark' ? 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]' : 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]'}`}
        >
          PLAY ASR <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      <button 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-4" 
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </section>
  );
}

function ApexDenverSection() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[3 % GIF_POOL.length];

  const scrollToNext = () => {
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="denver" className={`relative z-10 min-h-[100svh] flex flex-col items-center justify-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-200 ${theme === 'dark' ? 'bg-white text-black' : 'bg-zinc-950 text-white'}`}>
      <div className={`absolute inset-0 bg-gradient-to-b z-10 transition-colors duration-200 ${theme === 'dark' ? 'from-white/90 to-white/50' : 'from-zinc-950/90 to-zinc-950/50'}`} />
      <img src={bgImage} alt="Apex Denver" className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-30' : 'opacity-40 mix-blend-overlay'}`} />
      {theme !== 'dark' && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-30 pointer-events-none" />}
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-28 pb-20 md:pt-48 md:pb-32 mt-8 md:mt-0">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2rem,12vw,10rem)] sm:text-[clamp(3rem,8vw,10rem)] font-black uppercase tracking-tighter leading-none mb-4 md:mb-6"
        >
          Apex Denver
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-base md:text-3xl font-medium mb-8 md:mb-10 lowercase transition-colors duration-200 ${theme === 'dark' ? 'text-zinc-900' : 'text-zinc-200'}`}
        >
          the original Apex parkour gym, est. 2009 🏔️
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-auto"
        >
          <a 
            href="https://apexdenver.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] w-full sm:w-auto transition-all active:scale-95 ${theme === 'dark' ? 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]' : 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]'}`}
          >
            Visit IRL <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <button 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-4" 
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Note: We intentionally removed the scrollSnapType global style
    // to allow for varied scrolling rhythms (sticky, parallax, asymmetric grids).
    document.documentElement.style.scrollSnapType = '';
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      <SEO />
      <SkoolHero />
      <ApexSpeedRunSection />
      <CoachSection />
      <ApexDenverSection />
      <div className="relative z-20 bg-neutral-100">
        <BlogSection />
      </div>
    </div>
  );
}

