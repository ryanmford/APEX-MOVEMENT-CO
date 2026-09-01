import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Play, Users, TrendingUp, ShieldCheck, Award, Medal, Zap } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { CONFIG } from '../data';

export default function Coach() {
  const { theme } = useAppContext();

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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Oct 3 Cohort Application Open
          </div>
          <div className="text-sm font-bold tracking-widest uppercase mb-8 text-zinc-500">
            For coaches with 1,000+ followers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black lowercase tracking-tighter mb-8 leading-[1.1]">
            turn your movement expertise into a <span className="text-amber-500">scalable digital business.</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-12 lowercase font-medium max-w-3xl mx-auto leading-relaxed ${themeClasses.muted}`}>
            an exclusive, intimate cohort helping elite parkour athletes and coaches monetize their audience, package their knowledge, and build a high-leverage brand.
          </p>
          
          <a 
            href="https://calendly.com/apexmovement/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[13px] transition-all hover:scale-105 active:scale-95 ${themeClasses.accentBg} shadow-[0_0_40px_-10px_rgba(251,191,36,0.4)]`}
          >
            Apply to the program <ArrowRight className="w-5 h-5" />
          </a>

          {/* VSL Placeholder */}
          <div className={`mt-20 aspect-video w-full rounded-2xl border-2 ${themeClasses.border} overflow-hidden relative group cursor-pointer`}>
            <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center z-10 transition-colors group-hover:bg-zinc-900/60">
              <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center pl-2 shadow-[0_0_40px_-10px_rgba(251,191,36,0.8)] transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-zinc-950" />
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover grayscale opacity-50"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Logo Cloud */}
      <section className={`py-12 border-y ${themeClasses.border} bg-black/5`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className={`text-center text-sm font-bold tracking-widest uppercase mb-8 ${themeClasses.muted}`}>
            we've helped parkour athletes & coaches scale their skills, brands, & income since 2011:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center items-center">
            <div>
              <div className="text-2xl font-black lowercase mb-1">Bob Reese</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2014 Cohort</div>
              <a href="https://www.youtube.com/@bob_reese" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>10.4M YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Taylor Carpenter</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2018 Cohort</div>
              <a href="https://www.instagram.com/tlynncarpenter" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>633k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Rafe Kelley</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.instagram.com/evolve.move.play" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>58.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Melissa McQueen</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2023 Cohort</div>
              <a href="https://www.instagram.com/mel2toes" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>68.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Max Henry</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Apr 2019 Cohort</div>
              <a href="https://www.instagram.com/maxhenryparkour" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>19.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Darryl Stingley</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Aug 2016 Cohort</div>
              <a href="https://www.instagram.com/iamwavezilla" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>310k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Paul Darnell</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Jul 2013 Cohort</div>
              <a href="https://www.instagram.com/pauljdarnell" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>21.5k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Koh Chen Pin</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Oct 2017 Cohort</div>
              <a href="https://www.instagram.com/deeenester" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>42.1k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Renae Dambly</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2012 Cohort</div>
              <a href="https://www.instagram.com/renaedambly" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>26.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Masa Suzuki</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Mar 2017 Cohort</div>
              <a href="https://www.instagram.com/shinobi_mover/" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>39.1k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Jimmy Davidson</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Apr 2019 Cohort</div>
              <a href="https://www.youtube.com/@FiMParkourGym" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>12.1k YouTube</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Dylan Baker</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2013 Cohort</div>
              <a href="https://www.instagram.com/dylanwellsbaker" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>12.7k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Erica Madrid</div>
              <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${themeClasses.muted}`}>Nov 2011 Cohort</div>
              <a href="https://www.instagram.com/auraiyamadrid" target="_blank" rel="noopener noreferrer" className={`block text-sm font-medium hover:opacity-80 transition-opacity ${themeClasses.accent}`}>23.5k Instagram</a>
            </div>
            <div>
              <div className="text-2xl font-black lowercase mb-1">Amos Rendao</div>
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
              <h2 className="text-3xl font-black lowercase tracking-tighter mb-6">you have the attention, but not the system.</h2>
              <p className={`text-lg leading-relaxed font-medium mb-6 ${themeClasses.muted}`}>
                building an audience as a parkour coach is incredibly difficult. you've bled for your skills, filmed thousands of hours, and finally built a platform.
              </p>
              <p className={`text-lg leading-relaxed font-medium ${themeClasses.muted}`}>
                but likes don't pay the rent. brand deals are inconsistent. and coaching 1-on-1 burns you out. you're working harder than ever, but your income isn't scaling with your reach.
              </p>
            </div>
            <div className={`p-8 rounded-2xl border-2 ${themeClasses.card}`}>
              <h3 className="text-2xl font-black lowercase tracking-tighter mb-6">the apex model.</h3>
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
                    <span className="font-medium lowercase text-lg">{item}</span>
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale contrast-125">
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                  alt="Founder coaching" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-2xl border-2 ${themeClasses.card} w-64`}>
                <div className="text-sm font-bold tracking-widest uppercase mb-2">My Mission</div>
                <div className="font-medium lowercase text-sm">to elevate the profession of parkour coaching worldwide.</div>
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black lowercase tracking-tighter mb-8">from athlete to educator to empire.</h2>
              <div className={`space-y-6 text-lg leading-relaxed font-medium ${themeClasses.muted} lowercase`}>
                <p>
                  i know the struggle because i lived it. when i started apex, parkour was a fringe internet phenomenon. there was no blueprint for turning jumps into a legitimate career.
                </p>
                <p>
                  i spent years grinding on concrete, building communities, and figuring out how to teach movement safely at scale. we built the world's leading parkour curriculum, opened massive facilities, and certified thousands of coaches.
                </p>
                <p>
                  but the landscape has changed. the modern athlete doesn't just need a gym—they need a digital infrastructure.
                </p>
                <p className={`text-xl font-bold ${themeClasses.text}`}>
                  i took everything i learned scaling a physical movement empire and adapted it for the digital creator. this is the exact system i wish i had 15 years ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black lowercase tracking-tighter mb-6">inside the program.</h2>
          <p className={`text-xl mb-16 font-medium lowercase max-w-2xl mx-auto ${themeClasses.muted}`}>
            we don't just give you courses. we build your business infrastructure alongside you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-8">
            {[
              {
                icon: <Users className="w-8 h-8 mb-4 text-amber-500" />,
                title: "offer architecture",
                desc: "design a high-ticket coaching offer or digital product suite that perfectly aligns with your specific audience and movement style."
              },
              {
                icon: <TrendingUp className="w-8 h-8 mb-4 text-amber-500" />,
                title: "content conversion",
                desc: "stop making content just for views. we'll implement funnels that seamlessly convert your millions of impressions into paying clients."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 mb-4 text-amber-500" />,
                title: "operational scale",
                desc: "templates, automations, and team-building strategies so your business can run and grow without you being on your phone 24/7."
              }
            ].map((feature, i) => (
              <div key={i} className={`p-8 rounded-2xl border-2 ${themeClasses.card}`}>
                {feature.icon}
                <h3 className="text-2xl font-black lowercase mb-4">{feature.title}</h3>
                <p className={`font-medium lowercase leading-relaxed ${themeClasses.muted}`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Award className="w-8 h-8 mb-4 text-amber-500" />,
                title: "apex L1 parkour",
                desc: "our newly redesigned fundamental coaching certification for parkour coaches. the industry standard for safe, effective instruction."
              },
              {
                icon: <Medal className="w-8 h-8 mb-4 text-amber-500" />,
                title: "apex L2 parkour",
                desc: "publicly available for the first time. advanced programming, skill progression, and coaching methodology for elite practitioners."
              },
              {
                icon: <Zap className="w-8 h-8 mb-4 text-amber-500" />,
                title: "apex mini-certs",
                desc: "for the first time, mini certifications to demonstrate expertise in specific styles of parkour training: strength, speed, and skill."
              }
            ].map((feature, i) => (
              <div key={i + 3} className={`p-8 rounded-2xl border-2 ${themeClasses.card}`}>
                {feature.icon}
                <h3 className="text-2xl font-black lowercase mb-4">{feature.title}</h3>
                <p className={`font-medium lowercase leading-relaxed ${themeClasses.muted}`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-32 px-6 text-center border-t ${themeClasses.border}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black lowercase tracking-tighter mb-6">secure your spot for october 3rd.</h2>
          <p className={`text-xl mb-12 font-medium lowercase ${themeClasses.muted}`}>
            we only accept a small group of coaches who have the drive to execute. let's build your empire.
          </p>
          <a 
            href="https://calendly.com/apexmovement/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-10 py-6 font-black uppercase tracking-[0.2em] text-[13px] md:text-[14px] ${themeClasses.accentBg} hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(251,191,36,0.4)]`}
          >
            Submit your application <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
