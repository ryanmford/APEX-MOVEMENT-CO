import React, { useState, useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useAppContext } from '../contexts/AppContext';
import { GlobalModals } from '../components/GlobalModals';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function RootLayout() {
  const { theme, dominantColor } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const currentOutlet = useOutlet();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      // If there's a hash, we let the browser handle it, or we could handle it here.
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <div className={`min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-200 selection:bg-amber-400 selection:text-black ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Matte Grain Overlay */}
      <div className={`fixed inset-0 pointer-events-none z-[1000] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${theme === 'dark' ? 'opacity-[0.03] mix-blend-screen' : 'opacity-[0.04] mix-blend-multiply'}`}></div>

      {/* Dominant Color Bleed */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-colors duration-200"
        style={{
          background: dominantColor ? `radial-gradient(circle at 50% 50%, ${dominantColor}15 0%, transparent 60%)` : 'transparent',
          opacity: dominantColor ? 1 : 0
        }}
      />

      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <GlobalModals />
      <main className="relative z-10">
        <AnimatePresence>
          <motion.div
            key={pathname || 'empty'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", stiffness: 400, damping: 30 }
            }}
          >
            {currentOutlet}
          </motion.div>
        </AnimatePresence>
      </main>

      {pathname !== '/coach' && <Footer />}
    </div>
  );
}
