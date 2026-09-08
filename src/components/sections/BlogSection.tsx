import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function BlogSection() {
  const { theme } = useAppContext();
  
  return (
    <section className={`py-32 md:py-48 px-6 text-center border-y-2 ${theme === 'dark' ? 'bg-zinc-950 border-white/10' : 'bg-neutral-50 border-black/5'} transition-colors duration-1000`}>
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-[clamp(1.8rem,7vw,3.75rem)] md:text-6xl font-black tracking-tighter mb-6 lowercase whitespace-nowrap">
          get our field notes
        </h2>
        <p className={`text-lg md:text-xl font-medium mb-12 max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
          join our substack for the latest on parkour athlete/coach education
        </p>
        <a 
          href="https://apexmovement.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] transition-all hover:scale-105 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]'}`}
        >
          SUBSCRIBE NOW <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
