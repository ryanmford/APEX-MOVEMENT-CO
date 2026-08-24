import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { submitApplication } from '../lib/googleSheets';

type StepType = 'contact' | 'question' | 'submitting' | 'disqualified' | 'calendly';

export default function Apply() {
  const { theme } = useAppContext();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepType, setStepType] = useState<StepType>('contact');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const questions = [
    {
      id: 'years',
      title: 'How many years have you been coaching?',
      options: [
        { label: '0-1 years', next: 'next' },
        { label: '2-4 years', next: 'next' },
        { label: '5+ years', next: 'next' },
      ],
    },
    {
      id: 'capped',
      title: 'Are you currently capped by the number of hours you can physically teach?',
      options: [
        { label: 'Yes, I feel stuck trading time for money.', next: 'next' },
        { label: 'No, I have plenty of capacity.', next: 'next' },
      ],
    },
    {
      id: 'plateau',
      title: 'Do your serious athletes plateau because group classes aren\'t enough?',
      options: [
        { label: 'Yes, they need more individualized programming.', next: 'next' },
        { label: 'No, group classes are sufficient.', next: 'next' },
      ],
    },
    {
      id: 'investment',
      title: 'This is a 90-day intensive requiring a $1,000/mo investment. Are you prepared for this?',
      options: [
        { label: 'Yes, I am ready to invest in my career.', next: 'qualified' },
        { label: 'No, I don\'t have the funds right now.', next: 'disqualified' },
      ],
    }
  ];

  const currentQuestion = questions[currentStepIndex];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInfo.name && contactInfo.email) {
      setStepType('question');
    }
  };

  const handleOptionClick = async (optionLabel: string, nextAction: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: optionLabel };
    setAnswers(updatedAnswers);

    if (nextAction === 'next') {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (nextAction === 'qualified') {
      setStepType('submitting');
      await submitApplication({ ...contactInfo, ...updatedAnswers });
      setStepType('calendly');
    } else if (nextAction === 'disqualified') {
      setStepType('disqualified');
    }
  };

  const handleGoBack = () => {
    if (stepType === 'question') {
      if (currentStepIndex > 0) {
        setCurrentStepIndex((prev) => prev - 1);
      } else {
        setStepType('contact');
      }
    }
  };

  return (
    <div className={`min-h-[100svh] flex flex-col ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-black'}`}>
      {/* Minimal Header */}
      <div className="w-full p-6 flex justify-center">
        <Link to="/" className="text-xl font-black tracking-tighter uppercase">
          Apex Movement
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {stepType === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col"
            >
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                  Step 1 of {questions.length + 1}
                </div>
                <h1 className="text-3xl md:text-5xl font-black lowercase tracking-tighter leading-tight mb-4">
                  who are we speaking with?
                </h1>
                <p className={`text-lg font-medium lowercase ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Enter your details to begin the application process.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
                <input 
                  type="text" 
                  required
                  placeholder="Full Name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className={`w-full p-5 border-2 text-lg font-bold outline-none transition-colors
                    ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800 focus:border-zinc-500 placeholder-zinc-600' : 'bg-white border-zinc-200 focus:border-zinc-400 placeholder-zinc-400'}`}
                />
                <input 
                  type="email" 
                  required
                  placeholder="Email Address"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className={`w-full p-5 border-2 text-lg font-bold outline-none transition-colors
                    ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800 focus:border-zinc-500 placeholder-zinc-600' : 'bg-white border-zinc-200 focus:border-zinc-400 placeholder-zinc-400'}`}
                />
                <button 
                  type="submit"
                  className={`mt-4 w-full p-5 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-transform active:scale-[0.98]
                    ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}
                >
                  Start Application <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          )}

          {stepType === 'question' && (
            <motion.div
              key={`question-${currentStepIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col"
            >
              <div className="mb-8">
                <div className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-4">
                  Step {currentStepIndex + 2} of {questions.length + 1}
                </div>
                <h1 className="text-3xl md:text-5xl font-black lowercase tracking-tighter leading-tight">
                  {currentQuestion.title}
                </h1>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.label, option.next)}
                    className={`w-full text-left p-6 border-2 transition-all duration-200 active:scale-[0.98]
                      ${theme === 'dark' 
                        ? 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600' 
                        : 'border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-400'
                      }`}
                  >
                    <span className="text-lg md:text-xl font-bold lowercase">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              <button 
                onClick={handleGoBack}
                className="mt-8 flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity font-bold uppercase tracking-widest text-sm self-start"
              >
                <ArrowLeft size={16} /> Back
              </button>
            </motion.div>
          )}

          {stepType === 'submitting' && (
            <motion.div
              key="submitting"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center justify-center text-center py-20"
            >
              <Loader2 className="w-12 h-12 animate-spin text-amber-500 mb-6" />
              <h2 className="text-2xl font-black tracking-tighter lowercase">saving application...</h2>
            </motion.div>
          )}


          {stepType === 'disqualified' && (
            <motion.div
              key="disqualified"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                <XCircle className="w-8 h-8 text-zinc-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black lowercase tracking-tighter mb-4">
                Not quite ready yet.
              </h1>
              <p className={`text-lg mb-8 max-w-md ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} lowercase font-medium`}>
                It looks like you aren't ready for the $3k intensive right now. That's okay. We recommend joining our community to level up your skills first.
              </p>
              <a 
                href="https://www.skool.com/apexmovement"
                className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white hover:bg-black shadow-xl'}`}
              >
                Join Skool Community
              </a>
            </motion.div>
          )}

          {stepType === 'calendly' && (
            <motion.div
              key="calendly"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center text-center max-w-4xl"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black lowercase tracking-tighter mb-4">
                Application Accepted.
              </h1>
              <p className={`text-lg mb-8 max-w-md ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} lowercase font-medium`}>
                You qualify for the cohort. Book your strategy session below to secure your spot before they fill up.
              </p>
              
              <div className={`w-full aspect-square md:aspect-video rounded-xl overflow-hidden border-2 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
                <iframe 
                  src="https://calendly.com/coloradoparkour/strategy-session" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Calendly Strategy Session"
                ></iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
