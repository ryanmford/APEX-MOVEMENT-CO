import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { WhatsInsideSection } from '../components/sections/WhatsInsideSection';
import { LibrarySection } from '../components/sections/LibrarySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { CONFIG } from '../data';

export default function Certification() {
  const { theme } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Coaching Certification | {CONFIG.brand}</title>
      </Helmet>

      {/* Authority Hero */}
      <section className={`pt-40 pb-20 px-6 ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-white text-black'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 text-amber-500 text-sm font-bold tracking-widest uppercase mb-8">
            Fall 2026 Cohort
          </div>
          <h1 className="text-5xl md:text-7xl font-black lowercase tracking-tighter mb-8">
            become an elite<br />parkour coach.
          </h1>
          <p className={`text-xl md:text-2xl mb-12 lowercase font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Level 1 & 2 Certification. A 90-day intensive to master the science of movement, eliminate burnout, and build a $10k+ MRR coaching career.
          </p>
          <a 
            href="https://calendly.com/apexmovement/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white hover:bg-black shadow-xl'}`}
          >
            Apply Now (20 Spots) <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Economics / ROI Section */}
      <section className={`py-20 px-6 border-t-2 ${theme === 'dark' ? 'bg-zinc-900 border-white/10 text-white' : 'bg-neutral-50 border-black/10 text-black'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black lowercase tracking-tighter mb-6">the ROI of mastery.</h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed lowercase font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Being a great coach pays for itself. When you deliver elite, individualized programming, you can charge premium rates, retain athletes for years instead of months, and break free from the hourly group class trap.
          </p>
        </div>
      </section>

      {/* Repurposed Components */}
      <WhatsInsideSection 
        title={<>the business operating <span className="text-amber-500 inline-block border-b-4 border-amber-500">system.</span></>}
        description="We give you the exact curriculum, programming templates, and community tools used by 300+ certified coaches."
      />
      <LibrarySection 
        badge="Coaching Resources"
        title="the vault."
        description="Full access to Level 1 & Level 2 coaching breakdowns, progressions, and biomechanics analysis."
      />
      <TestimonialsSection />
      
      {/* Specific Scarcity CTA */}
      <section className={`py-32 px-6 border-t-2 text-center ${theme === 'dark' ? 'bg-zinc-950 border-white/10' : 'bg-white border-black/10'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black lowercase tracking-tighter mb-6">ready to scale?</h2>
          <p className={`text-xl mb-12 font-medium lowercase ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Cohort begins September. Only 20 spots available. Applications close soon.
          </p>
          <a 
            href="https://calendly.com/apexmovement/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] md:text-[14px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)]' : 'bg-amber-500 text-white hover:bg-amber-600 shadow-xl'}`}
          >
            Apply for Sep 19 Cohort <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
