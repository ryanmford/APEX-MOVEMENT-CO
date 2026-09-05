import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BlogSection } from '../components/sections';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { GIF_POOL } from '../data';
import { motion } from 'motion/react';

function SkoolHero() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[0 % GIF_POOL.length];
  
  return (
    <section className={`relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-neutral-50'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'} z-10 transition-colors duration-1000`} />
        
        <img 
          src={bgImage} 
          alt="Parkour Background" 
          fetchPriority="high"
          loading="eager"
          className={`w-full h-full object-cover absolute inset-0 z-20 ${theme === 'dark' ? 'grayscale opacity-30 mix-blend-overlay' : 'grayscale-0 opacity-20'}`}
        />
        
        <div className={`absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t ${theme === 'dark' ? 'from-zinc-950' : 'from-neutral-50'} to-transparent z-30 transition-colors duration-1000`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-start text-left"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-6 md:mb-8">
            move better<br />in the real world.
          </h1>
          
          <p className={`text-lg md:text-2xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-10 md:mb-12 max-w-2xl leading-relaxed font-medium`}>
            Join our free Skool community. Access our foundational curriculum, connect with global athletes, and start your path to mastery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.skool.com/apexmovement"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white hover:bg-black shadow-xl'}`}
            >
              Join Skool App <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity" 
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">more</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
}

function CoachStickySection() {
  const { theme } = useAppContext();
  const bgImage = GIF_POOL[1 % GIF_POOL.length];
  
  return (
    <section className="py-32 md:py-48 px-6 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full mb-16 md:mb-24"
        >
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter leading-[0.85]">
            make parkour<br/>coaching a<br/>sustainable<br/>career.
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
           <div className="md:w-1/4 hidden md:block">
             <div className="w-full aspect-[3/4] border-[1px] subtractive-border-dark overflow-hidden bg-zinc-900 shadow-2xl">
                <img src={bgImage} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Coach" />
             </div>
           </div>
           <div className="md:w-3/4 max-w-3xl">
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl md:text-4xl text-zinc-400 font-medium leading-relaxed mb-12"
             >
               Book a call to see if our 3-month program is a good fit. 12 spots per cohort. Enrollment closes September 29.
             </motion.p>
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://calendly.com/apexmovement/strategy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] bg-white text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  Apply for Oct 3 Cohort <ArrowRight className="w-5 h-5" />
                </a>
                <Link 
                  to="/coach"
                  className="inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] border-[1px] subtractive-border-dark text-zinc-300 hover:border-white hover:text-white transition-all active:scale-95"
                >
                  Learn More
                </Link>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}

function AthleteAsymmetricSection() {
  return (
    <section className="py-32 md:py-64 px-6 bg-neutral-100 text-black border-y border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[85%] mb-16 md:mb-32"
        >
          <h2 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">
            train like an athlete.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-400">
              move like a human.
            </span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
           <div className="md:w-1/4 hidden md:block">
             <div className="w-full aspect-square bg-black mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)]" />
           </div>
           <div className="md:w-3/4 max-w-3xl">
             <p className="text-2xl md:text-4xl text-zinc-600 font-medium leading-relaxed mb-12">
               Whether you're starting your parkour journey or pushing past plateaus, our curriculum is designed to help you master the art of movement.
             </p>
             <Link 
                to="/train"
                className="inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] bg-black text-white hover:bg-zinc-800 transition-all shadow-xl active:scale-95"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
}

function LayeredAdsSection() {
  const bgImage1 = GIF_POOL[2 % GIF_POOL.length];
  const bgImage2 = GIF_POOL[3 % GIF_POOL.length];

  return (
    <div className="relative">
      {/* Apex Speed Run - Sticky Background */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center bg-zinc-950 text-white z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-10" />
        <img src={bgImage1} alt="Speed Run" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-overlay" />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-[clamp(3rem,8vw,10rem)] font-black uppercase tracking-tighter leading-none mb-6">Apex Speed Run</h2>
          <p className="text-xl md:text-3xl text-zinc-400 font-medium mb-10 lowercase">finding the fastest humans <span className="uppercase">IRL</span> 🌎</p>
          <a 
            href="https://apexspeedrun.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] bg-white text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Explore ASR <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Apex Denver - Scrolls over the sticky section */}
      <div className="relative z-10 min-h-[100svh] bg-white text-black flex flex-col items-center justify-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/50 z-10" />
        <img src={bgImage2} alt="Apex Denver" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center py-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,8vw,10rem)] font-black uppercase tracking-tighter leading-none mb-6"
          >
            Apex Denver
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-3xl text-zinc-600 font-medium mb-10 lowercase"
          >
            the original Apex parkour gym, est. 2009
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="https://apexdenver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] bg-black text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-xl"
            >
              Visit IRL <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
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
      <CoachStickySection />
      <AthleteAsymmetricSection />
      <LayeredAdsSection />
      <div className="relative z-20 bg-zinc-950">
        <BlogSection />
      </div>
    </div>
  );
}

