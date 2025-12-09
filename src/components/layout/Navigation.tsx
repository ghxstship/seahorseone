'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { colors, navItems, services } from '@/lib/constants';
import SonarPing from '@/components/ui/SonarPing';
import BioluminescentField from '@/components/ui/BioluminescentField';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    onNavigate(id);
    setMenuOpen(false);
  };
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${scrolled ? 'backdrop-blur-md' : ''}`}
        style={{ backgroundColor: scrolled ? `${colors.hadalVoid}ee` : 'transparent' }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <button 
            onClick={() => onNavigate('hero')}
            className="group text-left"
          >
            <span 
              className="text-2xl tracking-[0.15em] font-light block"
              style={{ color: colors.biolumeTeal }}
            >
              FVTHOM
            </span>
            <span 
              className="text-[8px] tracking-[0.22em] opacity-50 block"
              style={{ color: colors.coralBone }}
            >
              PRODUCTION STUDIOS
            </span>
          </button>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs tracking-[0.2em] text-[#E8DED0] opacity-60 transition-all duration-200 hover:opacity-100 hover:text-[#00D4AA]"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA10]"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={24} className="text-[#00D4AA]" />
              ) : (
                <Menu size={24} className="text-[#00D4AA]" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Full-screen menu */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ 
          backgroundColor: colors.hadalVoid,
          backgroundImage: `radial-gradient(ellipse at 30% 30%, ${colors.pressureBlue}30 0%, transparent 50%)`
        }}
      >
        <BioluminescentField density={30} colors={[colors.biolumeTeal, colors.phosphorCyan, colors.depthViolet]} />
        
        <div className="h-full flex items-center justify-center px-4 sm:px-6 pt-24 pb-8 overflow-y-auto">
          <div className="text-center max-w-5xl">
            <p 
              className="text-[10px] tracking-[0.5em] mb-8 font-mono"
              style={{ color: colors.biolumeTeal, opacity: 0.5 }}
            >
              — SERVICES · EXPERIENTIAL DESIGN & PRODUCTION —
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-12">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { onNavigate(s.id); setMenuOpen(false); }}
                  className="group p-4 border transition-all duration-500 hover:border-opacity-60 text-left"
                  style={{ 
                    borderColor: `${colors.biolumeTeal}20`,
                    backgroundColor: `${colors.pressureBlue}10`,
                    animation: menuOpen ? `fadeSlideUp 0.5s ease forwards ${i * 0.05}s` : 'none',
                    opacity: 0
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${s.color}20` }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="text-[8px] tracking-wider font-mono px-1.5 py-0.5"
                          style={{ backgroundColor: `${s.color}30`, color: s.color }}
                        >
                          {s.depth.toUpperCase()}
                        </span>
                      </div>
                      <span 
                        className="text-sm font-light tracking-wider block"
                        style={{ color: colors.coralBone }}
                      >
                        {s.name}
                      </span>
                      <span 
                        className="text-[9px] opacity-50 block truncate"
                        style={{ color: colors.coralBone }}
                      >
                        {s.description}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-6 py-2 border border-[#00D4AA40] text-[#00D4AA] text-sm tracking-[0.15em] transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA10]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
