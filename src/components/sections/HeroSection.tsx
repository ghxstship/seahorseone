'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { colors } from '@/lib/constants';
import SonarPing from '@/components/ui/SonarPing';
import BioluminescentField from '@/components/ui/BioluminescentField';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, 
          ${colors.surfaceAzure} 0%, 
          ${colors.twilightIndigo} 30%, 
          ${colors.midnightAbyss} 60%, 
          ${colors.hadalVoid} 100%)`
      }}
    >
      <BioluminescentField 
        density={60} 
        colors={[colors.biolumeTeal, colors.phosphorCyan, colors.abyssalOrange, colors.depthViolet]} 
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className={`flex justify-center transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SonarPing color={colors.biolumeTeal} size={100} />
        </div>
        
        <div className={`mt-8 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p 
            className="text-[10px] tracking-[0.5em] mb-4 font-mono"
            style={{ color: colors.biolumeTeal }}
          >
            <span className="hidden sm:inline">EXPERIENTIAL DESIGN · IMMERSIVE PRODUCTION · CREATIVE MULTIMEDIA</span>
            <span className="sm:hidden">EXPERIENTIAL · IMMERSIVE · CREATIVE</span>
          </p>
        </div>
        
        <h1 
          className={`text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] font-light leading-none mb-4 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ color: colors.coralBone }}
        >
          FVTHOM
        </h1>
        
        <p 
          className={`text-xl md:text-3xl lg:text-4xl tracking-[0.22em] mb-2 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: colors.biolumeTeal }}
        >
          PRODUCTION STUDIOS
        </p>
        
        <p 
          className={`text-sm tracking-[0.15em] mb-12 transition-all duration-1000 delay-800 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: colors.coralBone, opacity: 0.5 }}
        >
          To fathom: to understand · to measure depth · to comprehend the incomprehensible
        </p>
        
        <div className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-900 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="h-px w-40 mx-auto mb-8"
            style={{ background: `linear-gradient(to right, transparent, ${colors.biolumeTeal}, transparent)` }}
          />
          <p 
            className="text-lg md:text-xl font-light leading-relaxed"
            style={{ color: colors.coralBone, opacity: 0.7 }}
          >
            Experience deeper impact.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => onNavigate('work')}
            className="px-8 py-4 text-sm tracking-[0.2em] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,212,170,0.3)]"
            style={{ 
              backgroundColor: colors.biolumeTeal, 
              color: colors.hadalVoid
            }}
          >
            EXPLORE OUR WORK
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className="px-8 py-4 text-sm tracking-[0.2em] border border-[#E8DED040] text-[#E8DED0] transition-all duration-200 hover:border-[#00D4AA] hover:text-[#00D4AA] hover:bg-[#00D4AA10]"
          >
            DISCOVER SERVICES
          </button>
        </div>
        
        {/* Stats */}
        <div className={`mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto transition-all duration-1000 delay-1200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { value: '150+', label: 'Projects' },
            { value: '13+', label: 'Years' },
            { value: '30+', label: 'Global Team' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p 
                className="text-3xl md:text-4xl font-light"
                style={{ color: colors.biolumeTeal }}
              >
                {stat.value}
              </p>
              <p 
                className="text-[10px] tracking-[0.2em] mt-1 font-mono opacity-50"
                style={{ color: colors.coralBone }}
              >
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
