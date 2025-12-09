'use client';

import { Instagram, Linkedin, Play } from 'lucide-react';
import { colors, services, companyInfo } from '@/lib/constants';
import SonarPing from '@/components/ui/SonarPing';

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: colors.hadalVoid }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <p 
              className="text-2xl tracking-[0.15em] font-light"
              style={{ color: colors.biolumeTeal }}
            >
              FATHOM
            </p>
            <p 
              className="text-[8px] tracking-[0.22em] opacity-50"
              style={{ color: colors.coralBone }}
            >
              PRODUCTION STUDIOS
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {['Work', 'Services', 'About', 'Contact'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm tracking-wider transition-opacity hover:opacity-100 opacity-50"
                style={{ color: colors.coralBone }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div 
          className="hidden md:flex justify-center gap-6 py-8 border-t border-b flex-wrap"
          style={{ borderColor: `${colors.biolumeTeal}10` }}
        >
          {services.map((s) => (
            <div 
              key={s.id} 
              className="opacity-30 hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2"
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span 
                className="text-[10px] tracking-wider"
                style={{ color: colors.coralBone }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <div className="text-center md:text-left">
            <p 
              className="text-lg italic mb-2"
              style={{ color: colors.biolumeTeal }}
            >
              "We don't just build brands. We build worlds."
            </p>
            <p 
              className="text-[9px] tracking-[0.3em] opacity-30 font-mono"
              style={{ color: colors.coralBone }}
            >
              EXPERIENTIAL DESIGN · IMMERSIVE PRODUCTION · CREATIVE MULTIMEDIA
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA10]"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-[#00D4AA]" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA10]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-[#00D4AA]" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA10]"
              aria-label="Vimeo"
            >
              <Play size={18} className="text-[#00D4AA]" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p 
            className="text-[10px] tracking-wider opacity-30"
            style={{ color: colors.coralBone }}
          >
            © {new Date().getFullYear()} Fathom Production Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
