import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { NewHeroSection, BlogSection } from '../components/sections';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { GIF_POOL } from '../data';

function HeroAd({ title, subtitle, buttons, bgImage, imageOpacity = "opacity-40" }: any) {
  const { theme } = useAppContext();
  
  return (
    <section className={`relative min-h-[100svh] md:min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8 snap-start snap-always ${theme === 'dark' ? 'bg-zinc-950' : 'bg-neutral-50'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'} z-10 transition-colors duration-1000`} />
        
        <img 
          src={bgImage} 
          alt={title.replace(/<[^>]+>/g, '')} 
          className={`w-full h-full object-cover absolute inset-0 z-20 transition-opacity duration-1000 ${theme === 'dark' ? `grayscale ${imageOpacity} mix-blend-overlay` : `grayscale-0 ${imageOpacity}`}`}
        />
        
        <div className={`absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b ${theme === 'dark' ? 'from-zinc-950' : 'from-neutral-50'} to-transparent z-30 transition-colors duration-1000`} />
        <div className={`absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t ${theme === 'dark' ? 'from-zinc-950' : 'from-neutral-50'} to-transparent z-30 transition-colors duration-1000`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col">
        <div className="max-w-4xl flex flex-col items-start text-left">
          <h2 
            className="font-black tracking-tighter leading-[0.85] mb-6 md:mb-8 whitespace-nowrap"
            style={{ 
              fontSize: `clamp(2rem, calc(125vw / ${Math.max(10, title.replace(/<[^>]+>/g, '').length)}), 7rem)` 
            }}
            dangerouslySetInnerHTML={{ __html: title }} 
          />
          
          <p 
            className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {buttons.map((btn: any, idx: number) => {
              const className = `inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${
                btn.primary 
                  ? theme === 'dark' 
                    ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' 
                    : 'bg-zinc-900 text-white hover:bg-black shadow-xl'
                  : `border-2 ${theme === 'dark' ? 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white' : 'border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900'}`
              }`;

              if (btn.external) {
                return (
                  <a 
                    key={idx}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {btn.text} {btn.icon && <btn.icon className="w-5 h-5" />}
                  </a>
                );
              }

              return (
                <Link 
                  key={idx}
                  to={btn.link}
                  className={className}
                >
                  {btn.text} {btn.icon && <btn.icon className="w-5 h-5" />}
                </Link>
              );
            })}
          </div>
        </div>
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

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Add snap scrolling to HTML element for the feed effect
    document.documentElement.style.scrollSnapType = 'y mandatory';
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
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
    <div className="flex flex-col w-full">
      <SEO />
      
      <div className="snap-start snap-always w-full">
        <NewHeroSection />
      </div>

      <HeroAd 
        title="Apex Speed Run"
        subtitle='finding the fastest humans <span class="uppercase">IRL</span> 🌎 🌍 🌏'
        bgImage={GIF_POOL[1 % GIF_POOL.length]}
        imageOpacity="opacity-50"
        buttons={[
          {
            text: "Explore ASR",
            link: "https://apexspeedrun.com",
            external: true,
            primary: true,
            icon: ExternalLink
          }
        ]}
      />

      <HeroAd 
        title="Apex Denver"
        subtitle="the original Apex parkour gym, est. 2009"
        bgImage={GIF_POOL[2 % GIF_POOL.length]}
        imageOpacity="opacity-30"
        buttons={[
          {
            text: "Visit IRL",
            link: "https://apexdenver.com",
            external: true,
            primary: true,
            icon: ArrowRight
          }
        ]}
      />

      <div className="snap-start snap-always w-full">
        <BlogSection />
      </div>
    </div>
  );
}
