import React from 'react';
import { motion } from 'motion/react';
import { Activity, ShieldCheck, Medal } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

import { KineticBarChart } from '../KineticBarChart';

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
                  <div className={`w-12 h-12 rounded-none border-[1px] flex items-center justify-center shrink-0 ${theme === 'dark' ? 'bg-zinc-900 subtractive-border-dark' : 'bg-neutral-100 subtractive-border-light'}`}>
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
            className={`relative overflow-hidden aspect-square md:aspect-[4/5] border-[1px] flex flex-col ${theme === 'dark' ? 'bg-zinc-900 subtractive-border-dark' : 'bg-neutral-100 subtractive-border-light'}`}
          >
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-sm md:text-base font-black uppercase tracking-widest mb-1 opacity-70">Athlete Progression</h3>
              <p className="text-xs md:text-sm font-medium italic opacity-50 mb-8">Kinetic trajectory modeling.</p>
              
              <div className="flex-1 w-full relative">
                <KineticBarChart />
              </div>
            </div>
            
            <div className={`border-t-[1px] ${theme === 'dark' ? 'subtractive-border-dark bg-zinc-950/50' : 'subtractive-border-light bg-white/50'} backdrop-blur-md p-4 md:p-6 grid grid-cols-2 gap-4`}>
              <div className="text-center">
                <div className="text-amber-500 font-black text-2xl md:text-3xl mb-1">20+</div>
                <div className={`text-[10px] md:text-[11px] ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} uppercase tracking-widest font-black`}>Years Coaching</div>
              </div>
              <div className="text-center">
                <div className="text-amber-500 font-black text-2xl md:text-3xl mb-1">50k+</div>
                <div className={`text-[10px] md:text-[11px] ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} uppercase tracking-widest font-black`}>Athletes Trained</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
