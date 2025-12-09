'use client';

import { useState, useEffect, useRef } from 'react';
import { Fingerprint, Globe, Camera, Box, Hammer, Lightbulb } from 'lucide-react';
import { colors, services } from '@/lib/constants';
import BioluminescentField from '@/components/ui/BioluminescentField';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Fingerprint,
  Globe,
  Camera,
  Box,
  Hammer,
  Lightbulb
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={ref}
      id="services"
      className="relative py-32 px-6"
      style={{ backgroundColor: colors.midnightAbyss }}
    >
      <BioluminescentField density={25} colors={[colors.biolumeTeal, colors.phosphorCyan, colors.depthViolet]} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p 
            className={`text-[10px] tracking-[0.5em] mb-4 font-mono transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: colors.biolumeTeal }}
          >
            — CAPABILITIES —
          </p>
          <h2 
            className={`text-4xl md:text-5xl font-light mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: colors.coralBone }}
          >
            Full-Service Production
          </h2>
          <p 
            className={`text-lg max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: colors.coralBone, opacity: 0.6 }}
          >
            From concept to completion, we handle every layer of experiential production.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon];
            const isActive = activeService === service.id;
            
            return (
              <div
                key={service.id}
                className={`group relative transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div 
                  className="relative p-6 border transition-all duration-500 h-full"
                  style={{ 
                    borderColor: isActive ? service.color : `${colors.biolumeTeal}20`,
                    backgroundColor: isActive ? `${service.color}08` : `${colors.pressureBlue}05`
                  }}
                >
                  {/* Depth indicator */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                    style={{ 
                      backgroundColor: service.color,
                      opacity: isActive ? 1 : 0.3
                    }}
                  />
                  
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: `${service.color}20`,
                        boxShadow: isActive ? `0 0 30px ${service.color}30` : 'none'
                      }}
                    >
                      {IconComponent && (
                        <IconComponent size={24} style={{ color: service.color }} />
                      )}
                    </div>
                    <div>
                      <span 
                        className="text-[8px] tracking-wider font-mono block mb-1"
                        style={{ color: service.color }}
                      >
                        {service.depth.toUpperCase()}
                      </span>
                      <h3 
                        className="text-lg font-light tracking-wider"
                        style={{ color: colors.coralBone }}
                      >
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p 
                    className="text-sm mb-4"
                    style={{ color: colors.coralBone, opacity: 0.6 }}
                  >
                    {service.description}
                  </p>
                  
                  <p 
                    className="text-base italic mb-4"
                    style={{ color: service.color }}
                  >
                    "{service.tagline}"
                  </p>
                  
                  {/* Capabilities - show on hover */}
                  <div 
                    className={`space-y-1 transition-all duration-300 overflow-hidden ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {service.capabilities.slice(0, 3).map((cap, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div 
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        <span 
                          className="text-[11px]"
                          style={{ color: colors.coralBone, opacity: 0.7 }}
                        >
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p 
            className="text-lg mb-6"
            style={{ color: colors.coralBone, opacity: 0.7 }}
          >
            Every vision is unique. Every solution goes deeper.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 text-sm tracking-[0.2em] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,212,170,0.3)]"
            style={{ 
              backgroundColor: colors.biolumeTeal, 
              color: colors.hadalVoid
            }}
          >
            START THE CONVERSATION
          </a>
        </div>
      </div>
    </section>
  );
}
