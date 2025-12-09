'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { colors, services, companyInfo } from '@/lib/constants';
import SonarPing from '@/components/ui/SonarPing';
import BioluminescentField from '@/components/ui/BioluminescentField';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };
  
  return (
    <section 
      ref={ref}
      id="contact"
      className="relative py-32 px-6"
      style={{ backgroundColor: colors.midnightAbyss }}
    >
      <BioluminescentField density={15} colors={[colors.biolumeTeal]} />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column - Info */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <SonarPing color={colors.biolumeTeal} size={50} />
              </div>
              
              <p 
                className="text-[10px] tracking-[0.5em] mb-4 font-mono"
                style={{ color: colors.biolumeTeal }}
              >
                — GET IN TOUCH —
              </p>
              
              <h2 
                className="text-3xl md:text-4xl font-light mb-6"
                style={{ color: colors.coralBone }}
              >
                Start Your Project
              </h2>
              
              <p 
                className="text-base mb-8"
                style={{ color: colors.coralBone, opacity: 0.7 }}
              >
                Ready to create something extraordinary? Tell us about your vision 
                and let's explore the possibilities together.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div 
                    className="w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center transition-all duration-200 group-hover:border-[#00D4AA] group-hover:bg-[#00D4AA10]"
                  >
                    <Mail size={18} className="text-[#00D4AA]" />
                  </div>
                  <span 
                    className="text-sm text-[#E8DED0] transition-all duration-200 group-hover:text-[#00D4AA]"
                  >
                    {companyInfo.email}
                  </span>
                </a>
                
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center"
                  >
                    <Phone size={18} className="text-[#00D4AA]" />
                  </div>
                  <span 
                    className="text-sm text-[#E8DED0] opacity-70"
                  >
                    {companyInfo.phone}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full border border-[#00D4AA40] flex items-center justify-center"
                  >
                    <MapPin size={18} className="text-[#00D4AA]" />
                  </div>
                  <span 
                    className="text-sm text-[#E8DED0] opacity-70"
                  >
                    {companyInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="lg:col-span-3">
            <div 
              className={`relative p-6 sm:p-8 border transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                borderColor: `${colors.biolumeTeal}25`,
                backgroundColor: `${colors.pressureBlue}05`
              }}
            >
              {/* Corner markers */}
              {[
                'top-0 left-0 border-t-2 border-l-2',
                'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2',
                'bottom-0 right-0 border-b-2 border-r-2'
              ].map((classes, i) => (
                <div 
                  key={i} 
                  className={`absolute w-4 h-4 ${classes}`}
                  style={{ borderColor: colors.biolumeTeal }}
                />
              ))}
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-[9px] tracking-[0.25em] mb-2 font-mono"
                      style={{ color: colors.biolumeTeal }}
                    >
                      YOUR NAME
                    </label>
                    <input 
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-transparent border transition-all duration-300"
                      style={{ 
                        borderColor: `${colors.biolumeTeal}30`,
                        color: colors.coralBone
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-[9px] tracking-[0.25em] mb-2 font-mono"
                      style={{ color: colors.biolumeTeal }}
                    >
                      COMPANY
                    </label>
                    <input 
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-transparent border transition-all duration-300"
                      style={{ 
                        borderColor: `${colors.biolumeTeal}30`,
                        color: colors.coralBone
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-[9px] tracking-[0.25em] mb-2 font-mono"
                    style={{ color: colors.biolumeTeal }}
                  >
                    EMAIL
                  </label>
                  <input 
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-transparent border transition-all duration-300"
                    style={{ 
                      borderColor: `${colors.biolumeTeal}30`,
                      color: colors.coralBone
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-[9px] tracking-[0.25em] mb-3 font-mono"
                    style={{ color: colors.biolumeTeal }}
                  >
                    SERVICES NEEDED
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className="p-3 border text-left transition-all duration-300"
                        style={{ 
                          borderColor: selectedServices.includes(service.id) 
                            ? service.color 
                            : `${colors.biolumeTeal}20`,
                          backgroundColor: selectedServices.includes(service.id)
                            ? `${service.color}15`
                            : 'transparent'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              backgroundColor: selectedServices.includes(service.id)
                                ? service.color
                                : `${colors.biolumeTeal}40`
                            }}
                          />
                          <span 
                            className="text-[10px] tracking-wider"
                            style={{ 
                              color: selectedServices.includes(service.id)
                                ? service.color
                                : colors.coralBone,
                              opacity: selectedServices.includes(service.id) ? 1 : 0.6
                            }}
                          >
                            {service.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-[9px] tracking-[0.25em] mb-2 font-mono"
                    style={{ color: colors.biolumeTeal }}
                  >
                    PROJECT DETAILS
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your vision, timeline, and budget..."
                    className="w-full px-4 py-3 bg-transparent border transition-all duration-300 resize-none"
                    style={{ 
                      borderColor: `${colors.biolumeTeal}30`,
                      color: colors.coralBone
                    }}
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 text-sm tracking-[0.2em] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,212,170,0.3)]"
                  style={{ 
                    backgroundColor: colors.biolumeTeal,
                    color: colors.hadalVoid
                  }}
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
