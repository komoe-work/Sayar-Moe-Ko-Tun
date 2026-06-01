/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  X, Sparkles, Send, RefreshCw, CheckCircle, HelpCircle, 
  BookOpen, Clock, GraduationCap, AlertCircle, MessageSquare 
} from 'lucide-react';
import { CurricularClass, FAQ_SAMPLES } from '../data';
import { UI_TRANSLATIONS, BRAND_PROFILES } from '../data';
import STEMVisuals from './STEMVisuals';

interface PomelliSandboxProps {
  creative: CurricularClass; // mapped as class detail
  lang: 'en' | 'my';
  onClose: () => void;
}

export default function PomelliSandbox({ creative: cls, lang, onClose }: PomelliSandboxProps) {
  const t = UI_TRANSLATIONS[lang];
  const profile = BRAND_PROFILES[lang];
  const faqSamples = FAQ_SAMPLES[lang];
  
  // Custom Consult State
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'parent' | 'educator'; text: string }>>([]);
  const [isConsulting, setIsConsulting] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  // Auto-populate introductory advice based on selected syllabus
  useEffect(() => {
    const welcomeMsg = lang === 'en' 
      ? `Hello! I am Sayar Moe Ko Tun's Academic Counselor. Ask me anything about how our "${cls.title}" program develops conceptual mastery, class schedules, or transition planning.`
      : `မင်္ဂလာပါ! ကျွန်တော်က ဆရာဦးမိုးကိုထွန်း၏ သင်ကြားရေးနှင့် ပတ်သက်ပြီး အကြံပေးဆွေးနွေးပေးမည့် ဆော့ဖ်ဝဲလ်ဖြစ်ပါသည်။ "${cls.title}" အတန်းနှင့်ပတ်သက်သော သင်ရိုးမာတိကာများ၊ အတန်းအချိန်ဇယားများနှင့် ပေါင်းကူးသင်ကြားရေးဒဿနများကို မေးမြန်းနိုင်ပါသည်။`;
    setChatHistory([{ sender: 'educator', text: welcomeMsg }]);
    setQuestion("");
    setErrorText(null);
  }, [cls, lang]);

  // Handle standard FAQ item click
  const handleFaqClick = (faqText: string) => {
    setQuestion(faqText);
  };

  // Consult Sayar Moe Ko Tun AI API Call
  const handleConsultSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!question.trim() || isConsulting) return;

    const userMsg = question;
    setChatHistory(prev => [...prev, { sender: 'parent', text: userMsg }]);
    setQuestion("");
    setIsConsulting(true);
    setErrorText(null);

    try {
      // Re-use current refiner API on the backend with instructions transformed for consultation dialogue
      const consultPrompt = `You are the elite Cambridge-certified Academic Specialist "U Moe Ko Tun". 
Write your consultation response written beautifully in the requested language. 
The user is a parent or student looking for guidance about your course: "${cls.title}".
Parent Question: "${userMsg}"
Provide a warm, premium, highly authoritative educational response reassuring them of your 16+ years experience in international curriculums. Avoid generic marketing jargon. Use standard Myanmar academic terminology if responding in Myanmar. Keep it to 2-3 structured sentences, warm and directly addressing their question.`;

      const response = await fetch('/api/refine-copy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: cls.title,
          subtitle: cls.level,
          headline: userMsg,
          category: cls.level,
          aiInstructions: consultPrompt,
          lang,
          brandProfile: {
            name: profile.name,
            overview: profile.overview
          }
        })
      });

      if (!response.ok) {
        throw new Error("Triggering fallback reasoning");
      }

      const result = await response.json();
      if (result.success && result.data && result.data.headline) {
        setChatHistory(prev => [...prev, { sender: 'educator', text: result.data.headline }]);
      } else {
        throw new Error("Generative error fallback requested.");
      }

    } catch (err) {
      console.warn("API Consultation failed, executing native pedagogical fallback:", err);
      
      // Highly crafted pedagogical fallback responses based on language and keywords
      setTimeout(() => {
        let answer = "";
        const qLower = userMsg.toLowerCase();

        if (lang === 'en') {
          if (qLower.includes('transition') || qLower.includes('igcse') || qLower.includes('a-level')) {
            answer = `The jump from IGCSE to A-Level is steep because A-Level demands algebraic derivations and spatial vector visualization. In our "${cls.title}" program, we start 4 weeks early with physical component models to ensure students don't experience the typical 'term-one slide'.` ;
          } else if (qLower.includes('struggle') || qLower.includes('math') || qLower.includes('algebra')) {
            answer = `Algebra is the grammar of physics. For students struggling in foundational maths, we provide targeted worksheets bridging coordinate geometry to vector mechanics. I invite you to join our next consultation to test student spatial logic.`;
          } else if (qLower.includes('schedule') || qLower.includes('time') || qLower.includes('register')) {
            answer = `Our advanced cohorts meet twice weekly online with intensive paper-solving sessions. Registration for the summer batches is currently open, but seats are limited to maintain close student-to-teacher mentoring. Please reach out to komoe.work@gmail.com for placement slots.`;
          } else {
            answer = `At Moe Ko Tun Academic Labs, we ensure that every concept in our "${cls.title}" is taught from first principles. Rather than providing formulas for memorization, we solve high-stakes Cambridge exercises together until mechanical logic becomes intuitive.`;
          }
        } else {
          // Myanmar Fallbacks
          if (qLower.includes('ပြောင်း') || qLower.includes('ကူး') || qLower.includes('igcse') || qLower.includes('a-level')) {
            answer = `IGCSE မှ A-Level သို့ ကူးပြောင်းရာတွင် တွက်ချက်ရသည့် ပုံသေနည်းရိုးရိုးမှ နက်နက်ရှိုင်းရှိုင်း တွေးခေါ်ရသည့် အဆင့်မြင့်ဗက်တာများဆီသို့ တက်လှမ်းရခြင်း ဖြစ်သည်။ ကျွန်ုပ်တို့၏ "${cls.title}" တွင် ၄ ပတ်စောကာ အခြေခံအုပ်မြစ်ကို စနစ်တကျ ပြင်ဆင်ပေးမည်ဖြစ်သောကြောင့် ကျောင်းသားများ စာမေးပွဲတွင် ရုန်းကန်ရခြင်း မရှိစေရပါ။`;
          } else if (qLower.includes('အားနည်း') || qLower.includes('သင်္ချာ') || qLower.includes('မရ')) {
            answer = `အက္ခရာသင်္ချာသည် ရူပဗေဒ၏ သော့ချက်ဖြစ်ပါသည်။ သင်္ချာပိုင်းအားနည်းသော ကျောင်းသားများအတွက် ဆရာကိုယ်တိုင် လက်စွဲတွက်ချက်ပုံများ၊ သီးသန့်လေ့ကျင့်ခန်းဝါးခတ်မှုများနှင့် ပံ့ပိုးပေးပြီးမှ သင်ခန်းစာကို စတင်တွက်ချက်စေပါသည်။`;
          } else if (qLower.includes('အချိန်') || qLower.includes('အပ်') || qLower.includes('တန်း') || qLower.includes('ဘယ်တော့')) {
            answer = `ကျွန်ုပ်တို့၏ အဆင့်မြင့်အတန်းများကို တစ်ပတ်လျှင် ၂ ကြိမ် အွန်လိုင်းစနစ်ဖြင့် စာသင်ခုံအကန့်အသတ်ထားရှိကာ သင်ကြားပါသည်။ လက်ရှိ နွေရာသီ ပေါင်းကူးသင်တန်းများအတွက် နေရာစတင်အပ်နှံနိုင်ပြီဖြစ်ပြီး အသေးစိတ်ကို komoe.work@gmail.com သို့ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။`;
          } else {
            answer = `ဆရာမိုးကိုထွန်း အကယ်ဒမစ်ခန်းတွင် "${cls.title}" ၏ အင်္ဂါရပ်အားလုံးကို ရိုးရိုးရှင်းရှင်း အလွတ်ကျက်စရာမလိုဘဲ၊ သဘာဝတရား၏ အခြေခံနိယာမများမှ စတင်တွက်ချက် လမ်းညွှန်ပေးပါသည်။ ကျောင်းသားတစ်ဦးချင်းစီ ပုစ္ဆာပဟေဠိများကို ကျွမ်းကျင်သည်အထိ သင်ကြားပြသပါသည်။`;
          }
        }

        setChatHistory(prev => [...prev, { sender: 'educator', text: answer }]);
      }, 700);
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div id="syllabus-modal" className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-slate-950/95 backdrop-blur-md overflow-hidden animate-fade-in">
      
      {/* Mesh grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* Main Board Container */}
      <div className="relative z-10 w-full max-w-7xl h-full md:h-[90vh] bg-slate-900 border border-slate-900 md:rounded-3xl shadow-3xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900 bg-slate-950/40 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              {t.askEducatorTitle} // {cls.title}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 bg-slate-800/40 border border-slate-700/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Course Syllabus Left & Educator Consultation Right */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Panel: Syllabus & Interactive Vector View */}
          <div className="flex-1 bg-slate-950 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-900 relative overflow-y-auto select-none">
            
            {/* Visual Vector Canvas background */}
            <div className="absolute top-4 right-6 w-32 h-32 opacity-15 pointer-events-none">
              <STEMVisuals imageKey={cls.imageKey} themeId="slate_technical" animate={true} />
            </div>

            <div className="flex-1">
              {/* TARGET LEVEL */}
              <div className="mb-4">
                <span className="px-3.5 py-1.5 rounded-xl text-[10px] font-mono font-bold tracking-widest text-[#3b82f6] bg-blue-500/10 border border-blue-500/20 uppercase">
                  {cls.level}
                </span>
              </div>

              {/* COURSE TITLE & STATS */}
              <h2 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight lead-snug mb-5">
                {cls.title}
              </h2>

              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl">
                {cls.description}
              </p>

              {/* STAT LABELS */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-900 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">{t.durationLabel}</span>
                    <span className="text-xs text-slate-200 font-bold">{cls.duration}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-900 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">{t.levelLabel}</span>
                    <span className="text-xs text-sky-200 font-bold">{lang === 'en' ? 'Cambridge Curricula' : 'ကင်းဘရစ်ချ် သင်ရိုး'}</span>
                  </div>
                </div>
              </div>

              {/* SYLLABUS CORE MODULES */}
              <div>
                <h4 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {t.syllabusOutline}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cls.syllabus.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-900/50">
                      <div className="w-5 h-5 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono text-[9px] font-bold">
                        {index + 1}
                      </div>
                      <span className="text-xs font-semibold text-slate-200">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>SPECIALIST INSTRUCTOR: U MOE KO TUN</span>
              <span className="text-slate-400 font-semibold">{t.webProfile}</span>
            </div>

          </div>

          {/* Right Panel: Conversation chatbot consulting widget */}
          <div className="w-full lg:w-[480px] bg-slate-900 p-6 md:p-8 flex flex-col justify-between overflow-hidden border-t lg:border-t-0 border-slate-900">
            
            <div className="flex flex-col overflow-hidden h-full">
              
              {/* Parent Consultation Description */}
              <div className="mb-4">
                <h3 className="text-lg font-display font-bold text-white tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  {t.askEducatorTitle}
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                  {t.askEducatorDesc}
                </p>
              </div>

              {/* Conversation Area */}
              <div className="flex-1 bg-slate-950/40 p-4 rounded-2xl border border-slate-900 overflow-y-auto mb-4 space-y-3 relative">
                
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'parent' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs font-sans leading-relaxed ${
                      msg.sender === 'parent' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isConsulting && (
                  <div className="flex justify-start">
                    <div className="bg-slate-900 text-slate-300 border border-slate-800 px-4 py-3 rounded-2xl rounded-tl-none text-xs font-mono font-bold flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-400" />
                      <span>{t.askBtnLoading}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Recommended Quick-Consult Q&As */}
              <div className="mb-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">{lang === 'en' ? 'Quick Parental Inquiries:' : 'မိဘများအများဆုံး သိလိုသည့်အချက်များ -'}</span>
                <div className="flex flex-wrap gap-1.5">
                  {faqSamples.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleFaqClick(faq.question)}
                      className="px-2.5 py-1.5 text-[10px] font-sans font-semibold rounded-lg bg-slate-950/60 border border-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-800 transition-all text-left"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ask Question Form Container */}
              <form onSubmit={handleConsultSubmit} className="flex gap-2 relative">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={t.askPlaceholder}
                  className="flex-1 bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none focus:border-blue-500/50 font-sans"
                />
                <button
                  type="submit"
                  disabled={isConsulting || !question.trim()}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-900 disabled:text-slate-600 border border-transparent disabled:border-slate-800/80 rounded-xl text-white transition-colors flex items-center justify-center shrink-0 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>

            {/* Warn Label */}
            <p className="text-[10px] text-slate-500 font-mono text-center mt-4">
              🛡️ {t.chatWarning}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
