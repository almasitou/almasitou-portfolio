'use client';

import React from 'react';
import { 
  SearchCheck, 
  LineChart, 
  Layers, 
  Layout, 
  UserCheck, 
  Network, 
  Database, 
  MonitorSmartphone 
} from 'lucide-react';

const FigmaLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
  </svg>
);

const FigJamLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm4.5 14.5l6-6-1.41-1.41-4.59 4.58-1.59-1.58L7.5 13.5l3.5 3.5z" />
  </svg>
);

const HTMLLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
  </svg>
);

const JSLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

const FlutterLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
  </svg>
);

const MiroLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z" />
  </svg>
);

const JiraLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
  </svg>
);

const NotionLogo = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
  </svg>
);

const items = [
  { label: 'Figma', icon: FigmaLogo },
  { label: 'FigJam', icon: FigJamLogo },
  { label: 'HTML / CSS', icon: HTMLLogo },
  { label: 'JavaScript', icon: JSLogo },
  { label: 'Flutter', icon: FlutterLogo },
  { label: 'UX Research', icon: SearchCheck },
  { label: 'Product Analytics', icon: LineChart },
  { label: 'Design Systems', icon: Layers },
  { label: 'Wireframing & Prototyping', icon: Layout },
  { label: 'User Testing', icon: UserCheck },
  { label: 'Information Architecture', icon: Network },
  { label: 'Data-Driven Design', icon: Database },
  { label: 'Mobile & Web UX', icon: MonitorSmartphone },
  { label: 'Miro', icon: MiroLogo },
  { label: 'Jira', icon: JiraLogo },
  { label: 'Notion', icon: NotionLogo },
];

export default function TechMarquee() {
  return (
    <div className="w-full mt-24 mb-12 pt-12 border-t border-zinc-900 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 px-6">
            {items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300 group cursor-default"
                >
                  <span className="text-zinc-300 group-hover:text-white transition-colors flex items-center justify-center">
                    <IconComp className="w-5 h-5 min-w-[20px] min-h-[20px]" />
                  </span>
                  <span className="text-lg md:text-xl font-bold font-heading text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
