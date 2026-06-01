/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, GraduationCap, ChevronRight } from 'lucide-react';
import STEMVisuals from './STEMVisuals';
import { UI_TRANSLATIONS } from '../data';
import { CurricularClass } from '../data';

interface CreativeCardProps {
  key?: React.Key | string;
  cls: CurricularClass;
  lang: 'en' | 'my';
  onSelect: (cls: CurricularClass) => void;
}

export default function CreativeCard({ cls, lang, onSelect }: CreativeCardProps) {
  // Map specific high-quality physical learning backdrop photos
  const photoUrl = {
    geometry: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=700&h=900&q=80",
    equations_tablet: "https://images.unsplash.com/photo-1453733190148-c44698c26578?auto=format&fit=crop&w=700&h=900&q=80",
    library: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&h=900&q=80",
    library_student: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&h=900&q=80"
  }[cls.imageKey] || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=700&h=900&q=80";

  const t = UI_TRANSLATIONS[lang];

  return (
    <motion.div
      id={`class-card-${cls.id}`}
      layoutId={`card-container-${cls.id}`}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onSelect(cls)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-950/80 border border-slate-900 hover:border-[#3b82f6]/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer h-[460px] w-full"
    >
      
      {/* Background Underlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Real life background photo representing educational atmosphere */}
        <img
          src={photoUrl}
          alt={cls.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 group-hover:scale-105 group-hover:opacity-20 transition-all duration-500"
        />
        
        {/* Living SVG STEM Vector underlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-6 bg-gradient-to-b from-transparent to-slate-950/95 mix-blend-screen opacity-100">
          <STEMVisuals imageKey={cls.imageKey} themeId="slate_technical" animate={true} />
        </div>

        {/* Dynamic Dark Gradients to ensure text readability */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 z-12 border-x border-dashed border-white/5 pointer-events-none mx-8" />
      <div className="absolute inset-x-0 h-full z-12 border-y border-dashed border-white/5 pointer-events-none my-8" />

      {/* Card Header (Target Target Level Badge) */}
      <div className="relative z-20 p-6 flex items-start justify-between">
        <span className="px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-900 border border-slate-800 text-blue-400">
          {cls.level}
        </span>
        <div className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          <Compass className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
      </div>

      {/* Card Body Info */}
      <div className="relative z-20 p-6 pt-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
        <div className="text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase mb-1 flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5" />
          {cls.duration}
        </div>
        
        <h4 className="text-lg md:text-xl font-display font-bold text-white tracking-tight leading-snug mb-2 group-hover:text-blue-300 transition-colors">
          {cls.title}
        </h4>
        
        <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2 scale-100 group-hover:text-slate-300 transition-colors mb-4">
          {cls.description}
        </p>

        {/* Action Link Indicator */}
        <div className="mt-2 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-[#3b82f6] transition-colors">
          <span>{t.syllabusOutline}</span>
          <span className="flex items-center gap-1 font-semibold">
            {t.learnMoreBtn} 
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ChevronRight className="w-3.5 h-3.5 inline" />
            </motion.span>
          </span>
        </div>
      </div>

    </motion.div>
  );
}
