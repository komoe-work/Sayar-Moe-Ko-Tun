/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Atom, Clock, GraduationCap, Briefcase } from 'lucide-react';
import { BRAND_PROFILES, BIOGRAPHY_MILESTONES, UI_TRANSLATIONS } from '../data';

interface BrandOverviewProps {
  lang: 'en' | 'my';
}

export default function BrandOverview({ lang }: BrandOverviewProps) {
  const profile = BRAND_PROFILES[lang];
  const milestones = BIOGRAPHY_MILESTONES[lang];
  const t = UI_TRANSLATIONS[lang];

  // Localized Fallback Translation Strings for Biography Stats Column
  const labelYearsExp = lang === 'en' ? '16+ Years' : '၁၆ နှစ်ကျော်';
  const labelTeachingExperience = lang === 'en' ? 'Teaching Experience' : 'စာသင်ကြားမှု အတွေ့အကြုံ';
  const labelCertTutor = lang === 'en' ? 'Cambridge Certified' : 'ကင်းဘရစ်ချ် အသိအမှတ်ပြု';
  const labelAdvModules = lang === 'en' ? 'Advanced STEM' : 'အဆင့်မြင့် STEM အတန်းများ';
  const labelIdentityGuidelines = lang === 'en' ? 'Academic Core Guidelines' : 'ပညာရေး အမှတ်တံဆိပ် လမ်းညွှန်ချက်များ';
  const labelVisualAesthetics = lang === 'en' ? 'Visual Style' : 'ပုံရိပ်ယောင် ပုံစံ';
  const labelToneOfVoice = lang === 'en' ? 'Tone of Voice' : 'ပြောဆိုမှုလေသံ';

  return (
    <div id="brand-overview-section" className="w-full max-w-7xl mx-auto mb-20 px-4 md:px-8">
      
      {/* Top Split Layout: Bio Card & Core Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Span: Biography Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-900 shadow-xl relative overflow-hidden backdrop-blur-md flex flex-col justify-between"
        >
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-[#3b82f6] bg-blue-500/10 border border-blue-500/20 rounded-full uppercase">
                {t.cambridgeHonors}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                {t.interactiveLabOnline}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mb-6 leading-tight">
              {profile.name}
            </h2>

            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-8 font-sans">
              {profile.overview}
            </p>
          </div>

          {/* Quick Stat Counter Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-900">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 mt-0.5 shadow-inner">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-2xl font-display font-extrabold text-white tracking-tight">{labelYearsExp}</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5 leading-normal">{labelTeachingExperience}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 mt-0.5 shadow-inner">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-extrabold text-white tracking-tight">
                  {lang === 'en' ? 'Cambridge' : 'ကင်းဘရစ်ချ်'}
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5 leading-normal">{labelCertTutor}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 mt-0.5 shadow-inner">
                <Atom className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-extrabold text-white tracking-tight">
                  {lang === 'en' ? 'STEM Labs' : 'STEM တန်းများ'}
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5 leading-normal">{labelAdvModules}</div>
              </div>
            </div>
          </div>
          
        </motion.div>

        {/* Right Span: Values & Core Guidelines */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          {/* Values Panel */}
          <div className="flex-1 p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-900 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2.5 mb-5 text-white">
              <Award className="w-5 h-5 text-blue-400" />
              <h3 className="font-display font-bold text-base uppercase tracking-tight text-white">{t.methodsBriefcase}</h3>
            </div>
            
            <div className="flex flex-col gap-3">
              {profile.brandValues.map((value, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/40 border border-slate-900/50">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200 font-sans tracking-wide">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personality Guidelines Badge Board */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-900 shadow-xl backdrop-blur-md">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">{labelIdentityGuidelines}</h4>
            
            <div className="mb-4">
              <div className="text-[10px] text-blue-400 font-mono tracking-widest uppercase mb-2">{labelVisualAesthetics}</div>
              <div className="flex flex-wrap gap-2">
                {profile.visualAesthetics.map((style, idx) => (
                  <span key={idx} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono">
                    {style}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-indigo-400 font-mono tracking-widest uppercase mb-2">{labelToneOfVoice}</div>
              <div className="flex flex-wrap gap-2">
                {profile.toneOfVoice.map((tone, idx) => (
                  <span key={idx} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono">
                    {tone}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Experience Milestones Chronology Board */}
      <div className="mt-12">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
          <Briefcase className="w-4 h-4" />
          <span>{t.experienceMilestone}</span>
        </div>
        <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-8">
          {t.experienceTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-900/80 hover:border-slate-800 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-[#3b82f6] bg-blue-500/10 border border-blue-500/15 rounded-lg mb-4">
                  {milestone.period}
                </span>
                <h4 className="text-md font-display font-bold text-white leading-snug mb-1">
                  {milestone.role}
                </h4>
                <p className="text-xs font-mono text-slate-500 mb-3">
                  {milestone.institution}
                </p>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {milestone.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
