import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';
import { GIF_POOL } from '../../data';

const slides = [
  {
    id: 'skool',
    heading: (
      <>
        move better<br />in the real world.
      </>
    ),
    description: "Join our free Skool community. Access our foundational curriculum, connect with global athletes, and start your path to mastery.",
    primaryButton: {
      text: "Join Skool App",
      href: "https://www.skool.com/apexmovement",
      external: true
    },
    secondaryButton: null
  },
  {
    id: 'coach',
    heading: (
      <>
        make parkour coaching<br />a sustainable career.
      </>
    ),
    description: "Book a call to see if our 3-month program is a good fit. 12 spots per cohort. Enrollment closes September 29.",
    primaryButton: {
      text: "Apply for Oct 3 Cohort",
      href: "https://calendly.com/apexmovement/strategy",
      external: true
    },
    secondaryButton: {
      text: "Learn More",
      href: "/coach",
      external: false
    }
  },
  {
    id: 'athlete',
    heading: (
      <>
        train like an athlete.<br />move like a human.
      </>
    ),
    description: "Whether you're starting your parkour journey or pushing past plateaus, our curriculum is designed to help you master the art of movement.",
    primaryButton: {
      text: "Learn More",
      href: "/train",
      external: false
    },
    secondaryButton: null
  }
];

export function NewHeroSection() {
  const { theme } = useAppContext();
  
  return (
    <div className="flex flex-col w-full">
      {slides.map((slide, idx) => {
        const currentBg = GIF_POOL[idx % GIF_POOL.length];
        
        return (
          <section 
            key={slide.id}
            className={`relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-neutral-50'}`}
          >
            <div className="absolute inset-0 z-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'} z-10 transition-colors duration-1000`} />
              
              <img 
                src={currentBg} 
                alt="Parkour Background" 
                fetchPriority={idx === 0 ? "high" : "auto"}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`w-full h-full object-cover absolute inset-0 z-20 ${theme === 'dark' ? 'grayscale opacity-30 mix-blend-overlay' : 'grayscale-0 opacity-20'}`}
              />
              
              <div className={`absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t ${theme === 'dark' ? 'from-zinc-950' : 'from-neutral-50'} to-transparent z-30 transition-colors duration-1000`} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl flex flex-col items-start text-left"
              >
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-6 md:mb-8`}>
                  {slide.heading}
                </h1>
                
                <p className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium`}>
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  {slide.primaryButton.external ? (
                    <a 
                      href={slide.primaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white hover:bg-black shadow-xl'}`}
                    >
                      {slide.primaryButton.text} <ArrowRight className="w-5 h-5" />
                    </a>
                  ) : (
                    <Link 
                      to={slide.primaryButton.href}
                      className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white hover:bg-black shadow-xl'}`}
                    >
                      {slide.primaryButton.text} <ArrowRight className="w-5 h-5" />
                    </Link>
                  )}

                  {slide.secondaryButton && (
                    slide.secondaryButton.external ? (
                      <a 
                        href={slide.secondaryButton.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 border-2 ${theme === 'dark' ? 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white' : 'border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900'}`}
                      >
                        {slide.secondaryButton.text}
                      </a>
                    ) : (
                      <Link 
                        to={slide.secondaryButton.href}
                        className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 border-2 ${theme === 'dark' ? 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white' : 'border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900'}`}
                      >
                        {slide.secondaryButton.text}
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            <div 
              className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity" 
              onClick={(e) => {
                const currentSection = e.currentTarget.closest('section');
                const nextSection = currentSection?.nextElementSibling;
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  const parentContainer = currentSection?.parentElement;
                  const nextMainSection = parentContainer?.nextElementSibling;
                  if (nextMainSection) {
                    nextMainSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                  }
                }
              }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </section>
        );
      })}
    </div>
  );
}
