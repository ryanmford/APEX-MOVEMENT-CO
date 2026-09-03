import React from 'react';
import { motion } from 'motion/react';
import { Activity, ShieldCheck, Medal } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function TheApexMethodSection() {
  const { theme } = useAppContext();
  
  return (
    <section id="method" className={`py-16 md:py-24 px-4 md:px-6 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-500 text-sm font-bold tracking-widest uppercase mb-6">
              The 2-Tier Coaching Model
            </div>
            <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 md:mb-6`}>break the hourly class trap</h2>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 leading-relaxed font-medium`}>
              Burnout happens when your income is capped by the number of group classes you can teach. The Apex Method is a two-tier operating system that feeds high-ticket individualized programming from your group class pipeline.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Activity className="w-5 h-5 text-amber-500" />, title: 'Tier 1: The Group Pipeline', desc: 'Use high-energy group classes to build community, teach fundamentals, and generate a massive volume of leads.' },
                { icon: <ShieldCheck className="w-5 h-5 text-amber-500" />, title: 'Tier 2: Individualized Programming', desc: 'Transition dedicated athletes into high-ticket, individualized programming to break past plateaus and increase LTV.' },
                { icon: <Medal className="w-5 h-5 text-amber-500" />, title: 'Scalable $10k+ MRR', desc: 'The exact business and programming structure used by our mentors to build scalable, sustainable careers without burnout.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-none border-2 flex items-center justify-center shrink-0 ${theme === 'dark' ? 'bg-zinc-900 border-white/10' : 'bg-neutral-100 border-black/10'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-black tracking-tight mb-1`}>{item.title}</h4>
                    <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed text-sm font-medium`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden aspect-square md:aspect-[4/5] border-4 ${theme === 'dark' ? 'bg-zinc-900 border-white/10' : 'bg-neutral-100 border-black/10'}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop" 
              alt="Action" 
              className="w-full h-full object-cover opacity-80 grayscale mix-blend-luminosity"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-zinc-950 via-zinc-950/20' : 'from-white via-white/20'} to-transparent`} />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-2 md:mb-4">
                <div className={`${theme === 'dark' ? 'bg-zinc-950/80 border-white/10' : 'bg-white/80 border-black/10'} backdrop-blur-md px-4 py-2 md:px-5 md:py-3 border-2 flex-1 sm:flex-none`}>
                  <div className="text-amber-500 font-black text-xl md:text-2xl mb-0.5 md:mb-1">20+</div>
                  <div className={`text-[10px] md:text-[11px] ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} uppercase tracking-widest font-black`}>Years Coaching</div>
                </div>
                <div className={`${theme === 'dark' ? 'bg-zinc-950/80 border-white/10' : 'bg-white/80 border-black/10'} backdrop-blur-md px-4 py-2 md:px-5 md:py-3 border-2 flex-1 sm:flex-none`}>
                  <div className="text-amber-500 font-black text-xl md:text-2xl mb-0.5 md:mb-1">50k+</div>
                  <div className={`text-[10px] md:text-[11px] ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} uppercase tracking-widest font-black`}>Athletes Trained</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
