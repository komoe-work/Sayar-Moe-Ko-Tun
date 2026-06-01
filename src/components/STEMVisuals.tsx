/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface STEMVisualsProps {
  imageKey: string;
  themeId?: string;
  animate?: boolean;
}

export default function STEMVisuals({ imageKey, themeId = 'slate_technical', animate = true }: STEMVisualsProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let animId: number;
    const start = Date.now();
    
    const update = () => {
      setTime((Date.now() - start) / 1000);
      animId = requestAnimationFrame(update);
    };
    
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [animate]);

  // Color mapping based on theme
  const getColors = () => {
    switch (themeId) {
      case 'obsidian_cyber':
        return { primary: '#06b6d4', secondary: '#8b5cf6', accent: '#ec4899', bgGlow: 'rgba(6, 182, 212, 0.15)' };
      case 'cambridge_emerald':
        return { primary: '#10b981', secondary: '#059669', accent: '#f59e0b', bgGlow: 'rgba(16, 185, 129, 0.15)' };
      case 'prussian_blue':
        return { primary: '#38bdf8', secondary: '#2563eb', accent: '#60a5fa', bgGlow: 'rgba(56, 189, 248, 0.15)' };
      default: // slate_technical
        return { primary: '#3b82f6', secondary: '#6366f1', accent: '#a855f7', bgGlow: 'rgba(59, 130, 246, 0.15)' };
    }
  };

  const colors = getColors();

  // 1. Geometry (Circle Proof)
  const renderGeometry = () => {
    const angle = (time * 0.4) % (Math.PI * 2);
    const px = 150 + Math.cos(angle) * 70;
    const py = 150 + Math.sin(angle) * 70;
    
    // Triangle inscribed in circle (angle at center is double angle at circumference)
    const bx = 150 + Math.cos(angle + 2) * 70;
    const by = 150 + Math.sin(angle + 2) * 70;
    const cx = 150 + Math.cos(angle - 1.5) * 70;
    const cy = 150 + Math.sin(angle - 1.5) * 70;

    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-75">
        {/* Grids */}
        <defs>
          <pattern id="grid-geo" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-geo)" />
        
        {/* Unit Circle */}
        <circle cx="150" cy="150" r="70" fill="none" stroke={colors.primary} strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="150" cy="150" r="4" fill={colors.accent} />
        
        {/* Dynamic Triangle chords */}
        <polygon points={`150,150 ${px},${py} ${bx},${by}`} fill="none" stroke={`${colors.secondary}80`} strokeWidth="1" />
        <polygon points={`${bx},${by} ${cx},${cy} ${px},${py}`} fill="none" stroke={colors.primary} strokeWidth="1.5" />
        
        {/* Vector Arrows */}
        <line x1="150" y1="150" x2={px} y2={py} stroke={colors.accent} strokeWidth="2" />
        <circle cx={px} cy={py} r="5" fill={colors.accent} />
        
        {/* Labels in fontMono */}
        <g className="font-mono text-[9px]" fill="#cbd5e1" opacity="0.8">
          <text x="155" y="145">O (0,0)</text>
          <text x={px + 8} y={py}>P(r, θ)</text>
          <text x={bx - 20} y={by - 5}>A</text>
          <text x={cx + 5} y={cy + 10}>B</text>
          <text x="20" y="270">Circle Theorem: ∠APB = 1/2 ∠AOB</text>
          <text x="20" y="285" fill={colors.primary}>r = 7.00 cm | θ = {((angle * 180) / Math.PI).toFixed(0)}°</text>
        </g>
      </svg>
    );
  };

  // 2. Formula Integration Blackboard
  const renderFormula = () => {
    const waveOffset = time * 20;
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-70">
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1="0" y1={50 + i * 40} x2="300" y2={50 + i * 40} />
          ))}
        </g>
        
        {/* Oscillating Function Curve */}
        <path
          d={Array.from({ length: 300 })
            .map((_, x) => {
              const y = 150 + Math.sin(x * 0.05 + time) * 40 + Math.cos(x * 0.02 - time) * 15;
              return `${x === 0 ? 'M' : 'L'} ${x} ${y}`;
            })
            .join(' ')}
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
        />

        {/* Integration strips */}
        {Array.from({ length: 12 }).map((_, idx) => {
          const x = 50 + idx * 18;
          const y = 150 + Math.sin(x * 0.05 + time) * 40 + Math.cos(x * 0.02 - time) * 15;
          return (
            <rect
              key={idx}
              x={x}
              y={y > 150 ? 150 : y}
              width="12"
              height={Math.abs(y - 150)}
              fill={`${colors.secondary}20`}
              stroke={colors.secondary}
              strokeWidth="0.5"
            />
          );
        })}

        <g className="font-mono text-[9px]" fill="#94a3b8">
          <text x="30" y="55" fill={colors.accent}>∫ f(x) dx ≃ ∑ f(x_i) Δx</text>
          <text x="30" y="75">lim (Δx → 0) | S = [{colors.primary === '#10b981' ? 'Cambridge' : 'SAT Math'}]</text>
          <text x="30" y="270">dΨ/dt = Η̂Ψ (Schrödinger Derivative)</text>
          <text x="30" y="285" fill={colors.primary}>Δx = 18px | Area = { (112.4 + Math.sin(time)*5).toFixed(2) }</text>
        </g>
      </svg>
    );
  };

  // 3. Elegant Library Study Plan Matrix
  const renderLibrary = () => {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-60">
        <defs>
          <linearGradient id="g-lib" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        
        {/* Perspectives lines */}
        {[30, 90, 150, 210, 270].map((cx, i) => (
          <line key={i} x1={cx} y1="0" x2="150" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        ))}
        {[30, 90, 150, 210, 270].map((cx, i) => (
          <line key={i} x1={cx} y1="300" x2="150" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
        ))}

        {/* Concentric diamond tunnels */}
        {Array.from({ length: 4 }).map((_, i) => {
          const sf = 150 * Math.pow(0.65, i + (time * 0.2 % 1));
          return (
            <polygon
              key={i}
              points={`150,${150 - sf} ${150 + sf * 1.3},150 150,${150 + sf} ${150 - sf * 1.3},150`}
              fill="none"
              stroke={colors.primary}
              strokeOpacity={1 - (i * 0.25)}
              strokeWidth="1"
            />
          );
        })}

        <circle cx="150" cy="150" r="10" fill={colors.accent} className="animate-pulse" />
        
        <g className="font-mono text-[9px]" fill="#94a3b8" opacity="0.8">
          <text x="20" y="30">Depth Linear Matrix 2.0</text>
          <text x="20" y="270">Principle 2: Structural Law of Limits</text>
        </g>
      </svg>
    );
  };

  // 4. Analytics Diagnostic Dashboard
  const renderDiagnostics = () => {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-75">
        <rect x="25" y="40" width="250" height="220" rx="10" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        
        {/* Simulated Bar Charts with animation */}
        {Array.from({ length: 7 }).map((_, index) => {
          const baseHeight = 40 + index * 18;
          const animH = baseHeight + Math.sin(time * 3 + index) * 15;
          return (
            <g key={index}>
              <rect
                x={50 + index * 28}
                y={220 - animH}
                width="14"
                height={animH}
                fill={index === 5 ? colors.accent : colors.primary}
                rx="3"
                opacity="0.85"
              />
              <text x={50 + index * 28} y={240} className="font-mono text-[8px]" fill="#94a3b8">Q{index+1}</text>
            </g>
          );
        })}

        {/* Floating line tracker */}
        <polyline
          points={Array.from({ length: 8 }).map((_, i) => {
            const x = 57 + i * 28;
            const y = 140 + Math.cos(time * 2 + i) * 20;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke={colors.accent}
          strokeWidth="1.5"
        />

        <g className="font-mono text-[9px]" fill="#cbd5e1">
          <text x="35" y="60" fill={colors.primary}>DIAGNOSTIC SAT SKILLSETS</text>
          <text x="35" y="75" className="text-slate-400">Score Tracker: +12.4% vs Baseline</text>
        </g>
      </svg>
    );
  };

  // 5. Clean Workspace Canvas
  const renderWorkspace = () => {
    const angle = time * 0.1;
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-65">
        <defs>
          <pattern id="dot-pat" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="1.5" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pat)" />
        
        {/* Drawing blueprints of stacks */}
        <g stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="1">
          <rect x="50" y="80" width="160" height="100" rx="4" />
          <line x1="50" y1="120" x2="210" y2="120" />
          <rect x="180" y="100" width="80" height="120" rx="4" transform={`rotate(5, 220, 160)`} />
        </g>

        {/* Spectacles vector blueprint */}
        <g stroke={colors.primary} fill="none" strokeWidth="1.5">
          <circle cx="110" cy="180" r="18" />
          <circle cx="155" cy="180" r="18" />
          <path d="M 128 175 Q 132.5 170 137 175" />
          <path d="M 92 180 Q 80 170 65 175" />
          <path d="M 173 180 Q 185 170 200 175" />
        </g>

        <g className="font-mono text-[9px]" fill="#94a3b8">
          <text x="50" y="250">Vite Config Vector Layer</text>
          <text x="50" y="265" fill={colors.accent}>Study Stacks Accelerator</text>
        </g>
      </svg>
    );
  };

  // 6. Equations tablet screen
  const renderEquationsTablet = () => {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-80">
        <rect x="30" y="30" width="240" height="240" rx="12" fill="#020617" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        
        <circle cx="150" cy="150" r="60" fill="none" stroke={`${colors.primary}30`} strokeWidth="1" />
        <line x1="80" y1="150" x2="220" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <line x1="150" y1="80" x2="150" y2="220" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

        {/* Circular vectors rotating */}
        {Array.from({ length: 4 }).map((_, i) => {
          const lTime = time * 0.5 + i * (Math.PI / 2);
          const cx = 150 + Math.cos(lTime) * 60;
          const cy = 150 + Math.sin(lTime) * 60;
          return (
            <g key={i}>
              <line x1="150" y1="150" x2={cx} y2={cy} stroke={colors.primary} strokeWidth="1" />
              <circle cx={cx} cy={cy} r="4" fill={i === 0 ? colors.accent : colors.secondary} />
            </g>
          );
        })}

        <g className="font-mono text-[9px]" fill="#cbd5e1" opacity="0.9">
          <text x="50" y="60" fill={colors.accent}>Stop Guessing, Start Solving</text>
          <text x="50" y="80">F_net = m·a | ds/dt = v</text>
          <text x="50" y="240">θ_phase = {(time * 28.6).toFixed(1)} rad/s</text>
          <text x="50" y="255" fill={colors.primary}>IGCSE Habits ⟹ Conceptual A-Level</text>
        </g>
      </svg>
    );
  };

  // 7. Video whiteboarding
  const renderOnlineCoaching = () => {
    const scale = 1 + Math.sin(time * 2) * 0.05;
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-70">
        <rect x="20" y="40" width="170" height="220" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        
        {/* Dynamic geometric diagrams resembling blackboard tutoring */}
        <g stroke={colors.primary} strokeWidth="1.5" fill="none">
          <circle cx="100" cy="130" r="35" />
          <polygon points="100,130 130,110 80,100" />
          <line x1="100" y1="130" x2="100" y2="210" stroke={colors.accent} strokeDasharray="3 2" />
        </g>

        {/* Live teacher camera window mockup */}
        <g transform="translate(195, 70)">
          <rect width="85" height="110" rx="6" fill="#0f172a" stroke={colors.secondary} strokeWidth="1.5" />
          {/* Schematic human silhouette smiling */}
          <circle cx="42.5" cy="45" r="14" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <path d="M 22.5 90 C 22.5 75, 62.5 75, 62.5 90 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <span className="animate-ping absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
          <polygon points="10,20 18,15 18,25" fill="#ef4444" className="animate-pulse" />
          <rect x="6" y="94" width="73" height="10" rx="2" fill="rgba(255,255,255,0.05)" />
          <text x="12" y="101" className="font-mono text-[6.5px]" fill="#94a3b8">U Moe Ko Tun</text>
        </g>

        <g className="font-mono text-[9px]" fill="#cbd5e1">
          <text x="30" y="235">Cambridge Proof Solver</text>
          <text x="30" y="250" fill={colors.accent}>EXPERT MENTORSHIP</text>
        </g>
      </svg>
    );
  };

  // 8. Financial holographic line chart
  const renderBalconyChart = () => {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-75">
        {/* Holographic graph chart */}
        <path
          d={Array.from({ length: 8 })
            .map((_, i) => {
              const x = 40 + i * 32;
              const y = 220 - (10 + i * 18 + Math.sin(time * 3 + i) * 16);
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            })
            .join(' ')}
          fill="none"
          stroke={colors.accent}
          strokeWidth="3"
        />
        
        {/* Underlay area */}
        <path
          d={`${Array.from({ length: 8 })
            .map((_, i) => {
              const x = 40 + i * 32;
              const y = 220 - (10 + i * 18 + Math.sin(time * 3 + i) * 16);
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            })
            .join(' ')} L 264 240 L 40 240 Z`}
          fill={`url(#area-bg)`}
          opacity="0.2"
        />
        
        <defs>
          <linearGradient id="area-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.accent} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Intersection nodes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 40 + i * 32;
          const y = 220 - (10 + i * 18 + Math.sin(time * 3 + i) * 16);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill="#ffffff" stroke={colors.primary} strokeWidth="1.5" />
              <line x1={x} y1={y} x2={x} y2="240" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3"/>
            </g>
          );
        })}

        <g className="font-mono text-[9px]" fill="#ebd5e1">
          <text x="40" y="50" fill={colors.primary}>SECURE YOUR ELITE RESULTS</text>
          <text x="40" y="65">Accelerate +250 points on Diagnostic Benchmarks</text>
        </g>
      </svg>
    );
  };

  // 9. Polyhedra 3D Rotating Mesh
  const renderRealityLaptop = () => {
    const rate = time * 0.7;
    // Core vertices for a simplified 3D Octahedron projected in 2D
    const r = 55;
    const vertices = [
      { x: 150, y: 150 - r * Math.sin(rate) }, // Top
      { x: 150 + r * Math.cos(rate), y: 150 }, // Right
      { x: 150, y: 150 + r * Math.sin(rate) }, // Bottom
      { x: 150 - r * Math.cos(rate), y: 150 }, // Left
      { x: 150 - r * 0.4 * Math.sin(rate), y: 150 - r * 0.4 * Math.cos(rate) }, // Back depth
      { x: 150 + r * 0.4 * Math.sin(rate), y: 150 + r * 0.4 * Math.cos(rate) }  // Front depth
    ];

    const dLine = (v1: number, v2: number, color = colors.primary, w = 1.5) => (
      <line
        x1={vertices[v1].x}
        y1={vertices[v1].y}
        x2={vertices[v2].x}
        y2={vertices[v2].y}
        stroke={color}
        strokeWidth={w}
        opacity={v1 === 4 || v2 === 4 ? 0.35 : 0.8}
      />
    );

    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-80">
        <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(255,255,255,0.04)" strokeDasharray="1 5" />
        
        {/* Draw octahedron edges */}
        {dLine(0, 1)}
        {dLine(1, 2)}
        {dLine(2, 3)}
        {dLine(3, 0)}
        
        {/* In-depth lines */}
        {dLine(4, 0, colors.secondary, 1)}
        {dLine(4, 1, colors.secondary, 1)}
        {dLine(4, 2, colors.secondary, 1)}
        {dLine(4, 3, colors.secondary, 1)}
        
        {/* Front lines */}
        {dLine(5, 0, colors.accent, 1.5)}
        {dLine(5, 1, colors.accent, 1.5)}
        {dLine(5, 2, colors.accent, 1.5)}
        {dLine(5, 3, colors.accent, 1.5)}

        <g className="font-mono text-[9px]" fill="#cbd5e1">
          <text x="35" y="45" fill={colors.accent}>Principle: Spatial Octahedron Model</text>
          <text x="35" y="270" fill={colors.primary}>STEM Reality Check: Visualizing Core Space</text>
        </g>
      </svg>
    );
  };

  // 10. Isometric steps bars chart representing Summer Slide
  const renderSlideChart = () => {
    // Drawn as four columns that outline progress loss or cliff transitions
    const drawColumn = (x: number, y: number, w: number, h: number, isHigh = false) => {
      const colColor = isHigh ? colors.accent : 'rgba(148, 163, 184, 0.25)';
      const topColor = isHigh ? '#ffffff' : 'rgba(203, 213, 225, 0.4)';
      const sideColor = isHigh ? colors.secondary : 'rgba(100, 116, 139, 0.15)';

      return (
        <g key={x}>
          {/* Front face */}
          <rect x={x} y={y} width={w} height={h} fill={colColor} stroke="rgba(255,255,255,0.06)" />
          {/* Top face */}
          <polygon
            points={`${x},${y} ${x + w},${y} ${x + w + 10},${y - 8} ${x + 10},${y - 8}`}
            fill={topColor}
            stroke="rgba(255,255,255,0.06)"
          />
          {/* Side face */}
          <polygon
            points={`${x + w},${y} ${x + w + 10},${y - 8} ${x + w + 10},${y + h - 8} ${x + w},${y + h}`}
            fill={sideColor}
            stroke="rgba(255,255,255,0.06)"
          />
        </g>
      );
    };

    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-80">
        <defs>
          <linearGradient id="cloud-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="rgba(0,0,0,0.2)" />
        <line x1="20" y1="220" x2="280" y2="220" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* The 4 isometric steps */}
        {drawColumn(50, 185, 25, 35)}
        {drawColumn(95, 165, 25, 55)}
        {drawColumn(140, 145, 25, 75)}
        {/* Step 4 is giant transition step with float offset */}
        {drawColumn(185, 95 + Math.sin(time * 2.5) * 6, 25, 125, true)}

        {/* Danger zone indicator lines */}
        <g stroke="#ef4444" strokeWidth="1.2" fill="none" strokeDasharray="3 3">
          <line x1="50" y1="185" x2="185" y2="95" />
          <path d={`M 175,120 Q 210,130 195,150`} stroke={colors.accent} strokeWidth="2" strokeDasharray="none" />
        </g>

        <g className="font-mono text-[9px]" fill="#cbd5e1" opacity="0.9">
          <text x="35" y="45" fill={colors.accent}>MIND THE SUMMER SLIDE</text>
          <text x="35" y="270">Summer Break Decline: -2.3 Grade Equivalents</text>
          <text x="35" y="285" fill={colors.primary}>Bridge Retention Program = Retention of Peak Logic</text>
        </g>
      </svg>
    );
  };

  // 11. Physics vector diagram (accelerator on incline plane)
  const renderPhysicsStylus = () => {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-70">
        <line x1="30" y1="220" x2="270" y2="220" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
        
        {/* Inclined plane */}
        <polygon points="40,220 230,120 230,220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        
        {/* Sliding box */}
        <g transform="translate(135,160) rotate(-29)">
          <rect x="-16" y="-16" width="32" height="32" fill="none" stroke={colors.primary} strokeWidth="2" />
          
          {/* Gravitational vector arrow */}
          <line x1="0" y1="0" x2="0" y2="40" stroke={colors.accent} strokeWidth="2" />
          <polygon points="-3,37 3,37 0,43" fill={colors.accent} />
          
          {/* Normal Force Arrow */}
          <line x1="0" y1="0" x2="0" y2="-32" stroke={colors.secondary} strokeWidth="1.5" />
          <polygon points="-2.5,-29 2.5,-29 0,-35" fill={colors.secondary} />

          {/* Friction vector */}
          <line x1="0" y1="0" x2="-28" y2="0" stroke="#f43f5e" strokeWidth="1" />

          <text x="18" y="4" className="font-mono text-[7px]" fill="#94a3b8">m</text>
        </g>
        
        <g className="font-mono text-[9px]" fill="#cbd5e1">
          <text x="40" y="55" fill={colors.accent}>Precision Newton mechanics</text>
          <text x="40" y="70" className="text-slate-400">Angle θ = 29.3° | μ_f = 0.12</text>
          <text x="40" y="270">Solve: F_net = m·g·sin(θ) - F_friction</text>
        </g>
      </svg>
    );
  };

  // 12. Celestial orbit math layout
  const renderLibraryStudent = () => {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-75">
        <circle cx="150" cy="150" r="85" fill="none" stroke="rgba(255,255,255,0.06)" />
        <ellipse cx="150" cy="150" rx="95" ry="40" fill="none" stroke={`${colors.primary}15`} transform="rotate(35, 150, 150)" />
        <ellipse cx="150" cy="150" rx="95" ry="40" fill="none" stroke={`${colors.secondary}15`} transform="rotate(-35, 150, 150)" />
        
        {/* Core glowing sun center */}
        <circle cx="150" cy="150" r="16" fill={`url(#core-g)`} stroke={colors.accent} strokeWidth="0.5" />
        <circle cx="150" cy="150" r="4" fill="#ffffff" />

        <defs>
          <radialGradient id="core-g">
            <stop offset="0%" stopColor={colors.accent} stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Floating orbiting particles representing study categories */}
        {['Calculus', 'Vectors', 'Mechanics', 'Waves'].map((sub, i) => {
          const angle = time * 0.4 + i * (Math.PI / 2);
          const px = 150 + Math.cos(angle) * 85;
          const py = 150 + Math.sin(angle) * 85;
          return (
            <g key={i}>
              <circle cx={px} cy={py} r="18" fill="rgba(15,23,42,0.9)" stroke={colors.primary} strokeWidth="1" />
              <text x={px} y={py + 3} className="font-mono text-[7px]" fill="#f8fafc" textAnchor="middle">{sub}</text>
            </g>
          );
        })}

        <g className="font-mono text-[10px]" fill="#94a3b8">
          <text x="30" y="35" fill={colors.accent} className="font-bold">SECURE YOUR ACADEMIC FUTURE</text>
          <text x="30" y="275">Cambridge Curriculum Integration matrix</text>
        </g>
      </svg>
    );
  };

  // Resolve which rendering function to execute
  switch (imageKey) {
    case 'geometry': return renderGeometry();
    case 'formula': return renderFormula();
    case 'library': return renderLibrary();
    case 'diagnostics': return renderDiagnostics();
    case 'workspace': return renderWorkspace();
    case 'equations_tablet': return renderEquationsTablet();
    case 'online_coaching': return renderOnlineCoaching();
    case 'balcony_chart': return renderBalconyChart();
    case 'reality_laptop': return renderRealityLaptop();
    case 'slide_chart': return renderSlideChart();
    case 'physics_stylus': return renderPhysicsStylus();
    case 'library_student': return renderLibraryStudent();
    default:
      return (
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs">
          Visual: {imageKey}
        </div>
      );
  }
}
