/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, BookOpen, GraduationCap, Award, Compass, HelpCircle, MessageSquare
} from 'lucide-react';
import { CLASS_MODULES, BRAND_PROFILES, UI_TRANSLATIONS, CurricularClass } from './data';
import BrandOverview from './components/BrandOverview';
import CampaignSelector from './components/CampaignSelector';
import CreativeCard from './components/CreativeCard';
import PomelliSandbox from './components/PomelliSandbox';

export default function App() {
  const [lang, setLang] = useState<'en' | 'my'>('en');
  const t = UI_TRANSLATIONS[lang];
  const profile = BRAND_PROFILES[lang];
  const classes = CLASS_MODULES[lang];

  const [activeCampaignId, setActiveCampaignId] = useState<string>('all');
  const [selectedCreative, setSelectedCreative] = useState<CurricularClass | null>(null);

  // Physics Simulator Live State
  const [angle, setAngle] = useState(30); // in degrees
  const [friction, setFriction] = useState(0.15); // coefficient of friction
  const [mass, setMass] = useState(5); // in kg
  const [gravity, setGravity] = useState(9.8); // in m/s^2

  // Calculated forces for the conceptual dashboard
  const angleRad = (angle * Math.PI) / 180;
  const forceGravity = mass * gravity;
  const forceNormal = forceGravity * Math.cos(angleRad);
  const maxFriction = friction * forceNormal;
  const forceParallel = forceGravity * Math.sin(angleRad);
  
  // Net accelerating force (if positive, it slides)
  const netForce = Math.max(0, forceParallel - maxFriction);
  const acceleration = netForce / mass;

  // Filter courses based on campaign category (which represents class ID key)
  const filteredClasses = activeCampaignId === 'all' 
    ? classes 
    : classes.filter((c) => c.id === activeCampaignId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden pb-24">
      
      {/* Immersive glowing radial background spots */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-5 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />

      {/* 1. Global Navigation bar */}
      <header id="main-header" className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/85">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-900/35">
              <Atom className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <span className="font-display font-semibold tracking-tight text-white block text-sm">
                {profile.name}
              </span>
              <span className="text-[10px] font-mono text-blue-400 block tracking-widest leading-none">
                {lang === 'en' ? 'SPECIALIST MENTORSHIP' : 'အဆင့်မြင့် အထူးပြုသင်တန်း'}
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs font-mono text-slate-400 font-bold">
            <a href="#brand-overview-section" className="hover:text-white transition-colors">{t.aboutTitle}</a>
            <a href="#classes-explorer" className="hover:text-white transition-colors">{t.classesTitle}</a>
            <a href="#physics-playground" className="hover:text-white transition-colors">{t.newtonianSimulatorTitle}</a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Bilingual Switcher Toggle with Flags */}
            <div className="flex items-center gap-0.5 bg-slate-900/80 border border-slate-800/80 p-1 rounded-xl shadow-inner relative">
              <button
                onClick={() => setLang('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider transition-all duration-200 z-10 ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow shadow-blue-900/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>🇬🇧</span>
                <span className="hidden select-none sm:inline">ENG</span>
              </button>
              <button
                onClick={() => setLang('my')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-sans font-bold tracking-wider transition-all duration-200 z-10 ${
                  lang === 'my'
                    ? 'bg-blue-600 text-white shadow shadow-blue-900/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>🇲🇲</span>
                <span className="hidden select-none sm:inline">မြန်မာ</span>
              </button>
            </div>

            <span className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded-full uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              {t.interactiveLabOnline}
            </span>

            <a
              href={profile.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-3 md:px-4 bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white rounded-xl text-xs font-medium transition-all shrink-0"
            >
              {lang === 'en' ? 'Moe Ko Tun Profile' : 'တရားဝင်ဆိုက်'}
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Interactive Title Zone */}
      <section id="hero-banner" className="relative w-full max-w-7xl mx-auto pt-16 pb-12 px-4 md:px-8 text-center">
        
        {/* Floating Abstract STEM Graphics */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 mb-6 backdrop-blur-sm shadow-md animate-fade-in text-left">
          <Award className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-mono font-medium text-emerald-300 leading-tight">
            {t.cambridgeHonors}
          </span>
        </div>

        {/* Dynamic Glowing Title */}
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          {t.adaptiveBrandTitle}{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            {t.interactiveStemLab}
          </span>
        </h1>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-2xl mx-auto mb-8 font-sans">
          {t.heroDesc}
        </p>

        {/* Hero Quick CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#classes-explorer"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:translate-y-[-1px] shadow-lg shadow-blue-900/30"
          >
            {t.heroQuickCTA}
          </a>
          <a
            href="#physics-playground"
            className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all"
          >
            {t.heroPlaygroundCTA}
          </a>
        </div>
      </section>

      {/* 3. Render Brand Biography / Chronology Section */}
      <BrandOverview lang={lang} />

      {/* 4. Render Active Courses Selector bar */}
      <CampaignSelector 
        activeCampaignId={activeCampaignId} 
        setActiveCampaignId={setActiveCampaignId} 
        lang={lang}
        classes={classes}
      />

      {/* 5. Course Catalog Bento Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredClasses.map((clsItem) => (
            <CreativeCard 
              key={clsItem.id} 
              cls={clsItem} 
              lang={lang}
              onSelect={(item) => setSelectedCreative(item)} 
            />
          ))}
        </motion.div>
      </div>

      {/* 6. Interactive Physics inclined physics vector simulator sandbox */}
      <section id="physics-playground" className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-900 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'en' ? 'Interactive Pedagogical Lab' : 'အပြန်အလှန်တုံ့ပြန်မှုဆိုင်ရာ ပညာရည်လေ့လာရေးစနစ်'}</span>
          </div>

          <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2">
            {t.newtonianSimulatorTitle}
          </h3>
          <p className="text-sm text-slate-400 font-sans mb-8 max-w-3xl">
            {t.newtonianSimulatorDesc}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Simulation Canvas Side */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-900 relative h-[380px] flex items-center justify-center overflow-hidden shadow-inner">
              <div className="absolute top-3 left-4 font-mono text-[10px] text-slate-500 tracking-wide">
                {t.modelStatus} <span className="text-blue-400 font-bold">{acceleration > 0 ? t.statusAccelerating : t.statusEquilibrium}</span>
              </div>

              {/* Dynamic SVG Drawing */}
              <svg viewBox="0 0 400 300" className="w-full h-full max-w-[360px] opacity-90">
                {/* Horizontal ground line */}
                <line x1="20" y1="240" x2="380" y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                
                {/* Inclined triangle slope */}
                {(() => {
                  const xStart = 80;
                  const xEnd = 340;
                  const length = xEnd - xStart;
                  const height = length * Math.tan(angleRad);
                  const displayHeight = Math.min(130, height);
                  const displayXStart = xEnd - displayHeight / Math.tan(angleRad);

                  return (
                    <g>
                      {/* Triangle Slope */}
                      <polygon
                        points={`${displayXStart},240 340,${240 - displayHeight} 340,240`}
                        fill="rgba(59, 130, 246, 0.05)"
                        stroke="rgba(59, 130, 246, 0.4)"
                        strokeWidth="1.5"
                      />

                      {/* Math angle label arc */}
                      <path
                        d={`M 260,240 Q 257,232 265,225`}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1"
                      />
                      <text x="272" y="235" className="font-mono text-[9px]" fill="#f59e0b">θ = {angle}°</text>

                      {/* Sliding Box block */}
                      {(() => {
                        const midX = (displayXStart + 340) / 2;
                        const midY = (240 + (240 - displayHeight)) / 2;
                        // rotate with ramp angle (negative direction because the incline goes up from left to right)
                        const rotAngleDeg = -angle;

                        return (
                          <g transform={`translate(${midX}, ${midY}) rotate(${rotAngleDeg})`}>
                            {/* Block outline */}
                            <rect x="-18" y="-18" width="36" height="36" rx="4" fill="rgba(15, 23, 42, 0.95)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="0" y="4" className="font-mono text-[9px] font-bold text-[#3b82f6]" textAnchor="middle">{mass} kg</text>

                            {/* FORCE VECTORS ARROWS */}
                            {/* Gravity Force */}
                            <g transform={`rotate(${-rotAngleDeg})`}>
                              <line x1="0" y1="0" x2="0" y2={40 + forceGravity * 0.4} stroke="#ec4899" strokeWidth="2.5" />
                              <polygon points="-3.5,35 3.5,35 0,42" fill="#ec4899" transform={`translate(0, ${forceGravity * 0.4})`} />
                              <text x="6" y={40 + forceGravity * 0.4} className="font-mono text-[8px]" fill="#ec4899">F_g = {forceGravity.toFixed(1)} N</text>
                            </g>

                            {/* Normal Reaction Force */}
                            <line x1="0" y1="0" x2="0" y2={-(30 + forceNormal * 0.4)} stroke="#10b981" strokeWidth="2" />
                            <polygon points="-3,-26 3,-26 0,-33" fill="#10b981" transform={`translate(0, ${-forceNormal * 0.4})`} />
                            <text x="6" y={-(25 + forceNormal * 0.4)} className="font-mono text-[8px]" fill="#10b981">N = {forceNormal.toFixed(1)} N</text>

                            {/* Friction Force */}
                            <line x1="0" y1="0" x2={-(20 + maxFriction * 0.5)} y2="0" stroke="#f43f5e" strokeWidth="1.5" />
                            <polygon points="-5,-3 -5,3 -12,0" fill="#f43f5e" transform={`translate(${-maxFriction * 0.5}, 0)`} />
                            <text x={-(35 + maxFriction * 0.5)} y="-6" className="font-mono text-[8px]" fill="#f43f5e">f_max = {maxFriction.toFixed(1)} N</text>

                            {/* Net accelerating Force arrow */}
                            {acceleration > 0 && (
                              <g>
                                <line x1="18" y1="0" x2={25 + netForce * 1.2} y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 1" />
                                <polygon points="5,-3 5,3 12,0" fill="#f59e0b" transform={`translate(${18 + netForce * 1.2}, 0)`} />
                                <text x="25" y="14" className="font-mono text-[8px] font-bold" fill="#f59e0b">F_net = {netForce.toFixed(1)} N</text>
                              </g>
                            )}
                          </g>
                        );
                      })()}
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Parameter adjust sliders and stats */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-[10px] text-slate-500 font-mono block mb-1">{t.inclinationDegrees}</span>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={angle}
                      onChange={(e) => setAngle(Number(e.target.value))}
                      className="flex-1 accent-blue-500 bg-slate-850 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="font-mono text-sm text-white font-bold w-12 text-right">{angle}°</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-[10px] text-slate-500 font-mono block mb-1">{t.coefficientFriction}</span>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0.0"
                      max="0.8"
                      step="0.05"
                      value={friction}
                      onChange={(e) => setFriction(Number(e.target.value))}
                      className="flex-1 accent-emerald-500 bg-slate-850 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="font-mono text-sm text-white font-bold w-12 text-right">{friction.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-[10px] text-slate-500 font-mono block mb-1">{t.massKg}</span>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="2"
                      max="15"
                      value={mass}
                      onChange={(e) => setMass(Number(e.target.value))}
                      className="flex-1 accent-indigo-500 bg-slate-850 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="font-mono text-sm text-white font-bold w-12 text-right">{mass} kg</span>
                  </div>
                </div>
              </div>

              {/* Physics Output Analytics Panel */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-dashed border-slate-900">
                <h4 className="font-mono text-xs text-blue-400 font-bold uppercase mb-3">{t.mathSolutions}</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[9px] text-slate-500 font-mono">{t.parallelGravity}</div>
                    <div className="text-sm font-mono font-semibold text-white">
                      {forceParallel.toFixed(2)} N
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-mono">{t.resistiveFriction}</div>
                    <div className="text-sm font-mono font-semibold text-white">
                      {maxFriction.toFixed(2)} N
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-mono">{t.acceleration}</div>
                    <div className="text-sm font-mono font-semibold text-emerald-400">
                      {acceleration.toFixed(2)} m/s²
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-mono">{t.slidingEquation}</div>
                    <div className="text-[10px] font-mono text-slate-400 font-bold leading-normal">
                      {acceleration > 0 
                        ? "a = g·sin(θ) - μ·g·cos(θ)" 
                        : (lang === 'en' ? "Static: Parallel ≤ f_max" : "ငြိမ်နေသည် - ဆွဲအား ≤ f_max")}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. Footer details and qualifications */}
      <footer id="main-footer-section" className="border-t border-slate-900 bg-slate-950 pt-16 pb-12 text-slate-500 text-xs text-center relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 mb-8 border-b border-slate-900 pb-8 text-left">
            <div>
              <p className="font-bold text-slate-300">{t.premiumHub}</p>
              <p className="text-slate-400 mt-1 max-w-md leading-relaxed">
                {t.footerDesc}
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 py-1.5 px-3 rounded-lg">
                {t.emailLabel}
              </span>
              <a
                href={profile.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 py-1.5 px-3 rounded-lg hover:bg-blue-500/20 transition-all font-semibold"
              >
                {t.officialProfile}
              </a>
            </div>
          </div>
          
          <p>© {new Date().getFullYear()} {profile.name}. {t.poweredBy}</p>
        </div>
      </footer>

      {/* Interactive Consultation and Syllabus Modal */}
      <AnimatePresence>
        {selectedCreative && (
          <PomelliSandbox 
            creative={selectedCreative} 
            lang={lang}
            onClose={() => setSelectedCreative(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
