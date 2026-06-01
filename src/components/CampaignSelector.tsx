/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FolderOpen } from 'lucide-react';
import { CurricularClass } from '../data';
import { UI_TRANSLATIONS } from '../data';

interface CampaignSelectorProps {
  activeCampaignId: string;
  setActiveCampaignId: (id: string) => void;
  lang: 'en' | 'my';
  classes: CurricularClass[];
}

export default function CampaignSelector({ activeCampaignId, setActiveCampaignId, lang, classes }: CampaignSelectorProps) {
  const t = UI_TRANSLATIONS[lang];

  return (
    <div id="classes-explorer" className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-900 pb-6">
        
        <div>
          <div className="flex items-center gap-2 text-[#3b82f6] font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>{t.contactTitle}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight">
            {t.classesTitle}
          </h3>
          <p className="text-sm text-slate-400 font-sans mt-2 max-w-xl">
            {t.classesDesc}
          </p>
        </div>

        {/* Navigation Filters */}
        <div className="flex flex-wrap gap-1.5 bg-slate-900/40 p-1 rounded-2xl border border-slate-905 backdrop-blur-md">
          <button
            onClick={() => setActiveCampaignId('all')}
            className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all uppercase ${
              activeCampaignId === 'all' 
                ? 'text-white' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeCampaignId === 'all' && (
              <motion.div
                layoutId="activeClassIndicator"
                className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-xl"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5" />
              {lang === 'en' ? 'ALL COURSES' : 'သင်တန်းအားလုံး'}
            </span>
          </button>

          {classes.map((cls) => {
            const isActive = cls.id === activeCampaignId;
            return (
              <button
                key={cls.id}
                onClick={() => setActiveCampaignId(cls.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all uppercase ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeClassIndicator"
                    className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {cls.id === 'class_1' ? (lang === 'en' ? 'IGCSE' : 'IGCSE') :
                   cls.id === 'class_2' ? (lang === 'en' ? 'A-Level Physics' : 'A-Level ရူပဗေဒ') :
                   cls.id === 'class_3' ? (lang === 'en' ? 'A-Level Math' : 'A-Level သင်္ချာ') :
                   (lang === 'en' ? 'Digital SAT' : 'Digital SAT')}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
