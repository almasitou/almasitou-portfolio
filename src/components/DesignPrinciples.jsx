"use client";

import React from 'react';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';

const PRINCIPLE_ICONS = [
  // 01: Metrics / Chart
  (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  // 02: Lightning / Fast Prototype
  (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  // 03: Code / Engineering Empathy
  (
    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  // 04: Eye / Field Research
  (
    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
];

export default function DesignPrinciples({ t }) {
  const p = t.principles;
  if (!p) return null;

  return (
    <section id="principles" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="flex flex-col items-start mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-zinc-700/50 text-xs font-medium text-zinc-300 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {p.tag}
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {p.title}
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {p.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {p.items.map((item, idx) => (
            <Reveal key={item.num} delay={0.15 * (idx + 1)}>
              <SpotlightCard
                className="group relative bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-8 lg:p-10 shadow-xl hover:border-zinc-700/90 transition-all duration-500 h-full flex flex-col justify-between"
                spotlightColor="rgba(59, 130, 246, 0.12)"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                      {PRINCIPLE_ICONS[idx]}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900/90 border border-zinc-800 text-zinc-300 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
                        {item.badge}
                      </span>
                      <span className="font-heading font-bold text-2xl text-zinc-700 group-hover:text-zinc-500 transition-colors">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base font-normal">
                    {item.desc}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
