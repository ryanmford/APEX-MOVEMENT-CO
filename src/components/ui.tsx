import React, { useState, memo, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { motion, useSpring, useTransform } from 'motion/react';

export const Badge = memo(({ children, className = "", theme = 'light' }: { children: React.ReactNode, className?: string, theme?: string }) => (
  <div className={`px-2.5 py-1 border text-[9px] font-black uppercase tracking-[0.3em] inline-flex items-center gap-2 opacity-70 ${theme === 'dark' ? 'subtractive-border-dark' : 'subtractive-border-light'} ${className}`}>
    {children}
  </div>
));

export const Button = memo(({ children, primary = true, className = "", onClick, theme = 'light', type = "button", ...props }: { children: React.ReactNode, primary?: boolean, className?: string, onClick?: () => void, theme?: string, type?: "button" | "submit" | "reset" } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Magnetic spring physics
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Gradient track
    buttonRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    buttonRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
    
    // Magnetic pull
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = "relative overflow-hidden px-6 md:px-10 py-4 md:py-5 font-black transition-colors duration-300 border-[1px] text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.25em] flex items-center justify-center cursor-pointer rounded-none text-center whitespace-normal break-words min-h-[44px]";
  let colors = "";
  if (theme === 'dark') {
    colors = primary 
      ? "bg-white text-black border-transparent hover:bg-zinc-200" 
      : "bg-transparent text-white subtractive-border-dark hover:bg-white/5";
  } else {
    colors = primary 
      ? "bg-black text-white border-transparent hover:bg-zinc-800" 
      : "bg-transparent text-black subtractive-border-light hover:bg-black/5";
  }
  
  return (
    <motion.button 
      ref={buttonRef} 
      type={type} 
      onClick={onClick} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      style={{ x, y }}
      className={`${base} ${colors} ${className} group`} 
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3 w-full h-full">{children}</span>
      {primary && (
        <span 
          className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: theme === 'dark' 
              ? 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.2) 0%, transparent 60%)' 
              : 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0,0,0,0.15) 0%, transparent 60%)'
          }}
        />
      )}
    </motion.button>
  );
});

export const Heading = memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h1 className={`fluid-h1 font-black uppercase break-words ${className}`}>
    {children}
  </h1>
));

export const Image = memo(({ src, alt, className = "", coloredOnHover = false, forceColor = false, containerClass = "", blurColor }: { src: string, alt: string, className?: string, coloredOnHover?: boolean, forceColor?: boolean, containerClass?: string, blurColor?: string }) => {
  const [loaded, setLoaded] = useState(false);
  
  // Custom cursor context mapping isn't directly available here without hooks. We'll rely on the parent component implementing the cursor change if it's a link, but we can do it here too if we import context.
  // Actually let's import the context directly if we need to. Let's just do blurColor here.
  return (
    <div 
      className={`relative w-full h-full bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center overflow-hidden ${containerClass} ${loaded ? '' : 'animate-pulse'}`}
      style={!loaded && blurColor ? { backgroundColor: blurColor } : undefined}
    >
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${forceColor ? 'grayscale-0' : (coloredOnHover ? 'grayscale group-hover:grayscale-0 group-hover:scale-105' : 'grayscale-0')} ${className}`}
        loading="lazy"
      />
      <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 mix-blend-overlay z-10"></div>
      {!loaded && !blurColor && (
         <div className="absolute inset-0 flex items-center justify-center bg-inherit z-0">
           <Loader2 className="w-8 h-8 animate-spin opacity-20" />
         </div>
      )}
    </div>
  );
});

export const SectionHeader = memo(({ badge, title, description, theme = 'light' }: { badge: string, title: string, description: string, theme?: string }) => (
  <div className="space-y-4 md:space-y-6">
    <Badge theme={theme}>{badge}</Badge>
    <h2 className="fluid-h2 font-black uppercase">{title}</h2>
    <p className="text-base md:text-xl opacity-70 italic font-medium leading-tight max-w-md">
      {description}
    </p>
  </div>
));

export const ExpandButton = memo(({ expanded, onExpand, onCollapse, expandText = "view more", collapseText = "collapse" }: { expanded: boolean, onExpand: () => void, onCollapse: () => void, expandText?: string, collapseText?: string }) => (
  <button 
    onClick={expanded ? onCollapse : onExpand} 
    className="mt-12 md:mt-20 mx-auto flex items-center justify-center min-h-[44px] gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-70 hover:opacity-100 active:scale-95 cursor-pointer p-6 md:p-8 transition-all group border-none bg-transparent"
  >
    <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
    {expanded ? collapseText : expandText}
    <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
  </button>
));
