import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function BlogSection() {
  const { theme } = useAppContext();
  
  const scrollToNext = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className={`relative min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-20 md:pt-48 md:pb-32 px-6 text-center border-y-2 overflow-hidden transition-colors duration-200 ${theme === 'dark' ? 'bg-zinc-950 text-white border-white/5' : 'bg-neutral-50 text-black border-black/5'}`}>
      <div className="max-w-3xl mx-auto flex flex-col items-center mt-8 md:mt-0">
        <h2 className={`text-[clamp(1.8rem,7vw,3.75rem)] md:text-6xl font-black tracking-tighter mb-4 md:mb-6 lowercase transition-colors duration-200 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          get our field notes
        </h2>
        <p className={`text-base md:text-xl font-medium mb-8 md:mb-12 max-w-2xl leading-relaxed transition-colors duration-200 ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'}`}>
          join our substack for the latest parkour athlete/coach education
        </p>
        <a 
          href="https://apexmovement.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 w-full sm:w-auto font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]'}`}
        >
          SUBSCRIBE <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <button 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-4" 
        onClick={scrollToNext}
        aria-label="Scroll to footer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </section>
  );
}
