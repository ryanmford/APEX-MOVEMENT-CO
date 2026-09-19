import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { CONFIG } from '../data';

export function Footer() {
  const { theme } = useAppContext();
  return (
    <div id="footer" className="snap-start snap-always">
      <footer className={`${theme === 'dark' ? 'bg-neutral-50 text-black' : 'bg-zinc-950 text-white'} py-20 px-6 relative z-20 transition-colors duration-200`}>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <div className="flex gap-12">
            {CONFIG.socials.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-all opacity-40 text-current hover:scale-125">{s.icon}</a>
            ))}
          </div>
          <div className="flex flex-row justify-center gap-3 sm:gap-6 md:gap-10 text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-60 w-full whitespace-nowrap overflow-hidden">
            <Link to="/coach" className="hover:opacity-100 transition-opacity">Coach</Link>
            <a href={CONFIG.blogLink} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Blog</a>
            <a href={CONFIG.merchLink} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Merch</a>
          </div>
          <div className="opacity-40 text-[10px] font-black uppercase tracking-[0.7em] text-center leading-loose">
              © 2026 Apex Movement CO
          </div>
        </div>
      </footer>
    </div>
  );
}
