import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Users, TrendingUp, ShieldCheck, Award, Medal, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../contexts/AppContext';
import { CONFIG } from '../data';

export default function Coach() {
  const { theme } = useAppContext();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-zinc-950' : 'bg-white',
    text: theme === 'dark' ? 'text-white' : 'text-zinc-900',
    muted: theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600',
    border: theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200',
    card: theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200',
    accent: 'text-amber-500',
    accentBg: 'bg-amber-500 text-zinc-950',
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
      <Helmet>
        <title>The Educational Parkour Coach | {CONFIG.brand}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[40px] leading-[1.1] sm:text-6xl md:text-7xl font-black tracking-tighter mb-5 md:mb-8">
            turn your parkour skills into scalable coaching <br className="hidden sm:block" /><span className="text-amber-500">systems, brands, & income</span>
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl mb-10 md:mb-12 font-medium max-w-3xl mx-auto leading-relaxed ${themeClasses.muted}`}>            
            Apply and book a call to see if our 3-month Apex Method Mentorship is a good fit. Only 9 of 12 spots left in the next cohort starting Oct 3. Enrollment closes Sep 29.
          </p>
          
          <a 
            href="https://calendly.com/apexmovement/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[13px] transition-all hover:scale-105 active:scale-95 ${themeClasses.accentBg} shadow-[0_0_40px_-10px_rgba(251,191,36,0.4)]`}
          >
            Apply now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Social Proof Logo Cloud */}
      <section className={`py-12 border-y ${themeClasses.border} bg-black/5`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className={`text-center text-sm font-bold tracking-widest uppercase mb-8 ${themeClasses.muted}`}>
            we've helped 350+ parkour coaches, gym owners, leaders, teachers, parents, & educational creators scale their skills, brands, & income:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center items-center">
            <div>
              <div className="text-2xl font-black mb-1">Bob Reese</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2014 Cohort</div>
              <a href="https://www.youtube.com/@bob_reese" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>10.4M YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Taylor Carpenter</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2018 Cohort</div>
              <a href="https://www.instagram.com/tlynncarpenter" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>633k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Rafe Kelley</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.instagram.com/evolve.move.play" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>58.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Olof Wood</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Aug 2016 Cohort</div>
              <a href="https://www.instagram.com/olofwood" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>4.8k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Rob Schihl</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>May 2012 Cohort</div>
              <a href="https://www.instagram.com/apexdenver" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>6.4k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Mel McQueen</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2023 Cohort</div>
              <a href="https://www.instagram.com/mel2toes" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>68.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Jonathan & Thomas Tapp</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>May 2012 Cohort</div>
              <a href="https://www.youtube.com/@TappBrothers" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>1.2M YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Paul Darnell</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2013 Cohort</div>
              <a href="https://www.instagram.com/pauljdarnell" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>21.5k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Koh Chen Pin</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Oct 2017 Cohort</div>
              <a href="https://www.instagram.com/deeenester" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>42.1k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Renae Dambly</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2012 Cohort</div>
              <a href="https://www.instagram.com/renaedambly" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>26.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Darryl Stingley</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Aug 2016 Cohort</div>
              <a href="https://www.instagram.com/iamwavezilla" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>310k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Masa Suzuki</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2017 Cohort</div>
              <a href="https://www.instagram.com/shinobi_mover" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>39.1k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Ken Kao</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.instagram.com/doctorkenpoleninja" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>25.4k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Brandon Douglass</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>May 2012 Cohort</div>
              <a href="https://www.instagram.com/brandondouglass" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>9.1k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Max Henry</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Apr 2019 Cohort</div>
              <a href="https://www.instagram.com/maxhenryparkour" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>19.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Julie Angel</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Oct 2017 Cohort</div>
              <a href="https://www.instagram.com/julie_angel_phd_movementsnacks" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>77.6k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Kent Johns</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.youtube.com/@UnparalleledMovement" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>32.6k YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Kristine Dietrich</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Feb 2013 Cohort</div>
              <a href="https://www.instagram.com/kristinehnry" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>4.4k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Ross Allen</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Aug 2017 Cohort</div>
              <a href="https://www.instagram.com/rossallenpk" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>11.8k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Jimmy Davidson</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Apr 2019 Cohort</div>
              <a href="https://www.youtube.com/@FiMParkourGym" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>12.1k YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Alan Connealy</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Dec 2011 Cohort</div>
              <a href="https://www.instagram.com/alanconnealy" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>6.8k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Marlo Fisken</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="hhttps://www.instagram.com/marlofisken/" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>125k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Dylan Baker</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.instagram.com/dylanwellsbaker" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>12.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Megan McQueen</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2023 Cohort</div>
              <a href="https://www.instagram.com/meganmcqueen_" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>7.6k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Erica Madrid</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2011 Cohort</div>
              <a href="https://www.instagram.com/auraiyamadrid" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>23.5k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Vinnie Coryell</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.instagram.com/vinniecoryell" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>7.95k YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Brandee Laird</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2015 Cohort</div>
              <a href="https://www.instagram.com/monkeemoves" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>2.8k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Jamie Rahn</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2012 Cohort</div>
              <a href="https://www.instagram.com/jamierahn" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>52.1k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Dante Grazioli</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2013 Cohort</div>
              <a href="https://www.youtube.com/@grazida0276" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>10k YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Cory Storm Hollingsworth</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2013 Cohort</div>
              <a href="https://www.instagram.com/coryjumps" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>4.5k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Travis Lee</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2013 Cohort</div>
              <a href="https://www.instagram.com/travisgrantlee" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>10.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black mb-1">Amos Rendao</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Dec 2011 Cohort</div>
              <a href="https://www.youtube.com/@amosrendao" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>10.8k YouTube</a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-6">you have the skills, but not the systems</h2>
              <p className={`text-lg leading-relaxed font-medium mb-6 ${themeClasses.muted}`}>
                building an audience in parkour education is incredibly difficult. you've bled for your craft, struggled for thousands of hours, and you finally built something.
              </p>
              <p className={`text-lg leading-relaxed font-medium ${themeClasses.muted}`}>
                but Internet likes and high fives don't pay the rent. coaching too many hours is burning you out. you're working harder than ever, but your income isn't scaling with your effort.
              </p>
            </div>
            <div className={`p-8 rounded-2xl border-2 ${themeClasses.card}`}>
              <h3 className="text-2xl font-black tracking-tighter mb-6">The Apex Method</h3>
              <ul className="space-y-4">
                {[
                  "decouple your time from your income",
                  "package your unique movement philosophy",
                  "build a scalable digital curriculum",
                  "launch your high-ticket coaching offer",
                  "turn passive followers into dedicated students"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${themeClasses.accent}`} />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className={`py-32 px-6 border-y ${themeClasses.border} ${themeClasses.bg === 'bg-zinc-950' ? 'bg-zinc-900/30' : 'bg-neutral-50/50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="/ryan.jpg" 
                  alt="Ryan Ford, Founder & Head Coach" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-2xl border-2 ${themeClasses.card} w-64`}>
                <div className="text-sm font-bold tracking-widest uppercase mb-2">Ryan Ford</div>
                <div className="font-medium text-sm">Apex founder & head coach</div>
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">from athlete to coach to OG parkour gym owner</h2>
              <div className={`space-y-6 text-lg leading-relaxed font-medium ${themeClasses.muted}`}>
                <p>
                  I know the struggle because I lived it. when I started Apex, parkour was a fringe internet phenomenon. there was no blueprint for turning jumps into a legitimate career.
                </p>
                <p>
                  I spent years grinding on concrete, building communities, and figuring out how to teach movement safely at scale. we built the world's leading parkour curriculum, opened massive facilities, and certified thousands of coaches.
                </p>
                <p>
                  but the landscape has changed. the modern athlete doesn't just need a gym—they need a digital infrastructure.
                </p>
                <p className={`text-xl font-bold ${themeClasses.text}`}>
                  I took everything I learned scaling a physical parkour gym, as well as scaling a YouTube channel to 100k subs, and adapted it for the modern parkour coaches and creators working online and IRL.
                </p>
                <p className={`text-xl font-bold ${themeClasses.text}`}>
                  this is the exact system I wish I had when I started coaching parkour in 2006, when I opened my first gym in 2009, and when I started coaching online in 2016.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Coaching Team */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 md:text-right">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">assistant coaches</h2>
            <p className={`text-xl font-medium ${themeClasses.muted}`}>
              the team helping you upgrade your skills, brand, and income.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`rounded-2xl border-2 ${themeClasses.card} overflow-hidden flex flex-col`}>
              <div className="aspect-square w-full overflow-hidden">
                <img src="/taylor-carpenter.JPG" alt="Taylor Carpenter" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-black tracking-tighter mb-1">taylor carpenter</h3>
                <p className={`text-sm font-medium mb-4 ${themeClasses.muted}`}>pro athlete & creator</p>
                <div className="font-bold text-xs tracking-widest uppercase text-amber-500 mt-auto pt-2">coaching, content, branding</div>
              </div>
            </div>
            
            <div className={`rounded-2xl border-2 ${themeClasses.card} overflow-hidden flex flex-col`}>
              <div className="aspect-square w-full overflow-hidden">
                <img src="/rob.png" alt="Rob Schihl" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-black tracking-tighter mb-1">rob schihl</h3>
                <p className={`text-sm font-medium mb-4 ${themeClasses.muted}`}>Apex Denver owner & World Champion</p>
                <div className="font-bold text-xs tracking-widest uppercase text-amber-500 mt-auto pt-2">coaching, community, & culture</div>
              </div>
            </div>

            <div className={`rounded-2xl border-2 ${themeClasses.card} overflow-hidden flex flex-col`}>
              <div className="aspect-square w-full overflow-hidden">
                <img src="/autumn.jpg" alt="Autumn Goodridge" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-black tracking-tighter mb-1">autumn goodridge</h3>
                <p className={`text-sm font-medium mb-4 ${themeClasses.muted}`}>Apex Denver owner</p>
                <div className="font-bold text-xs tracking-widest uppercase text-amber-500 mt-auto pt-2">leadership, business, & sales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className={`py-32 px-6 border-y ${themeClasses.border} ${themeClasses.bg === 'bg-zinc-950' ? 'bg-zinc-900/30' : 'bg-neutral-50/50'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">inside the program</h2>
          <p className={`text-xl mb-16 font-medium max-w-2xl mx-auto ${themeClasses.muted}`}>
            we don't just give you courses. we build your business infrastructure alongside you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-amber-500" />,
                title: "Apex L1 parkour coaching certification",
                desc: "our fundamental coaching certification for parkour coaches, accredited by the United States Parkour Association. the industry standard for safe, effective instruction.",
                timeline: "month 1"
              },
              {
                icon: <Medal className="w-8 h-8 text-amber-500" />,
                title: "Apex L2 parkour coaching certification",
                desc: "publicly available for the first time. individualized programming, curriculum, game design, content, branding, online coaching tech.",
                timeline: "month 2"
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-500" />,
                title: "Apex parkour specialist certifications",
                desc: "for the first time, specialized certifications to demonstrate expertise in specific styles of parkour training.",
                timeline: "month 3"
              }
            ].map((feature, i) => (
              <div key={i} className={`p-8 rounded-2xl border-2 ${themeClasses.card}`}>
                <div className="flex justify-between items-start mb-4">
                  {feature.icon}
                  <div className="text-xs font-bold tracking-widest uppercase text-amber-500/70">{feature.timeline}</div>
                </div>
                <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                <p className={`font-medium leading-relaxed ${themeClasses.muted}`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Users className="w-8 h-8 text-amber-500" />,
                title: "offer architecture",
                desc: "design a high-ticket coaching offer or digital product suite that perfectly aligns with your specific audience and movement style.",
                timeline: "months 1-3"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
                title: "content conversion",
                desc: "stop making content just for views. we'll implement funnels that seamlessly convert your millions of impressions into paying clients.",
                timeline: "months 1-3"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
                title: "operational scale",
                desc: "templates, automations, and team-building strategies so your business can run and grow without you being on your phone 24/7.",
                timeline: "months 1-3"
              }
            ].map((feature, i) => (
              <div key={i + 3} className={`p-8 rounded-2xl border-2 ${themeClasses.card}`}>
                <div className="flex justify-between items-start mb-4">
                  {feature.icon}
                  <div className="text-xs font-bold tracking-widest uppercase text-amber-500/70">{feature.timeline}</div>
                </div>
                <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                <p className={`font-medium leading-relaxed ${themeClasses.muted}`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-32 px-6 border-t ${themeClasses.border} ${themeClasses.bg === 'bg-zinc-950' ? 'bg-zinc-900/30' : 'bg-neutral-50/50'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">frequently asked questions</h2>
            <p className={`text-lg font-medium ${themeClasses.muted}`}>Everything you need to know about the Apex Method cohort.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "I'm already making good money as a coach. Why do I need the Apex Method?",
                a: "Even successful coaches often hit income and lifestyle ceilings. The Apex Method helps you break through to premium pricing while working fewer hours. Our most successful graduates were already good coaches who wanted to master the methodology that sets industry leaders apart."
              },
              {
                q: "How is the Apex Method different from other parkour certifications?",
                a: "Most certifications teach you information. Our program teaches you the complete Apex Method through implementation. You'll build your entire practice inside our ecosystem during the cohort, with direct feedback from the founders. You graduate with a functioning premium practice using proven methodology, not just a certificate."
              },
              {
                q: "What exactly is the Apex Method?",
                a: "It's our comprehensive system for delivering truly personalized movement coaching. The Apex Method teaches you to assess each athlete systematically, design programs based on their unique needs that also include longevity and lifestyle considerations, and deliver ongoing coaching that creates lasting results. It's the methodology that separates premium coaches from the crowd."
              },
              {
                q: "Can I complete this while coaching part-time or full time?",
                a: "Yes. The Apex Method is designed for working coaches. Live sessions are scheduled to accommodate most work schedules, and all content is recorded for flexibility. The Apex Method is built to integrate into any coaching practice."
              },
              {
                q: "What if I've never used online coaching platforms before?",
                a: "Perfect! We include guided setup. The Apex Method is designed to work seamlessly with modern coaching tools - most coaches master the tech within 2-3 weeks. Our support team ensures you're confident with the technology."
              },
              {
                q: "Is this only for parkour coaches?",
                a: "No. The Apex Method works for any coach wanting to deliver personalized service: online coaches, gym owners, strength coaches, freerunning coaches, and movement practitioners. The methodology adapts to any coaching environment."
              },
              {
                q: "What ongoing support do I get after graduation?",
                a: "You'll get access to ongoing Apex Method education, a lifetime alumni community, monthly alumni calls, and opportunities for advanced business mentorship. Plus, the Apex Method gives you frameworks you'll use for your entire career."
              },
              {
                q: "How quickly will I see results from implementing the Apex Method?",
                a: "Most coaches start implementing premium pricing strategies by week 4 of the cohort. Full methodology mastery and practice transformation typically occurs within 3-6 months post-graduation, with income increases continuing as you refine your application of the Apex Method."
              },
              {
                q: "What if I don't have clients to practice the Apex Method on?",
                a: "We provide case studies and can connect you with volunteer clients if needed. Many coaches use this program and the Apex Method to attract their first premium clients through the professional systems and methodology they master during the program."
              },
              {
                q: "Can I coach online or in-person?",
                a: "The Apex Method works for both. Our systems seamlessly support remote coaching, in-person coaching, or hybrid approaches."
              }
            ].map((faq, i) => (
              <div key={i} className={`border-4 overflow-hidden ${theme === 'dark' ? 'bg-zinc-950 border-white/10' : 'bg-white border-black/10'}`}>
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <h3 className="text-lg md:text-2xl font-black tracking-tight leading-tight pr-4">{faq.q}</h3>
                  <div className={`shrink-0 w-8 h-8 rounded-none border-2 ${theme === 'dark' ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'} flex items-center justify-center transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-amber-500" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`px-6 pb-6 md:px-8 md:pb-8 pt-0 leading-relaxed text-sm md:text-base font-medium ${themeClasses.muted}`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-32 px-6 text-center border-t ${themeClasses.border}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">secure your spot for october 3rd</h2>
          <p className={`text-xl mb-12 font-medium ${themeClasses.muted}`}>
            we only accept a small group of coaches who have the drive to execute. let's build together.
          </p>
          <a 
            href="https://calendly.com/apexmovement/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] md:text-[14px] ${themeClasses.accentBg} hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(251,191,36,0.4)]`}
          >
            Apply now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
