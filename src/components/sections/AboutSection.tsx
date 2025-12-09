'use client';

import { useState, useEffect, useRef } from 'react';
import { colors } from '@/lib/constants';
import BioluminescentField from '@/components/ui/BioluminescentField';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Depth Over Surface',
      description: 'We go beyond aesthetics to create experiences that resonate on a deeper level.'
    },
    {
      title: 'Craft & Precision',
      description: 'Every detail matters. We obsess over the elements others overlook.'
    },
    {
      title: 'Collaborative Spirit',
      description: 'The best work happens when creative minds come together with shared purpose.'
    },
    {
      title: 'Fearless Innovation',
      description: 'We push boundaries and embrace the unknown to create the extraordinary.'
    }
  ];
  
  return (
    <section 
      ref={ref}
      id="about"
      className="relative py-32 px-6"
      style={{ backgroundColor: colors.hadalVoid }}
    >
      <BioluminescentField density={20} colors={[colors.biolumeTeal, colors.phosphorCyan]} />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Story */}
          <div>
            <p 
              className={`text-[10px] tracking-[0.5em] mb-4 font-mono transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ color: colors.biolumeTeal }}
            >
              — ABOUT US —
            </p>
            
            <h2 
              className={`text-4xl md:text-5xl font-light mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ color: colors.coralBone }}
            >
              We Build Worlds
            </h2>
            
            <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: colors.coralBone, opacity: 0.8 }}
              >
                Fathom Production Studios is an experiential design and production house 
                specializing in <span style={{ color: colors.biolumeTeal }}>immersive entertainment</span>, 
                experiential marketing, and creative multimedia.
              </p>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ color: colors.coralBone, opacity: 0.7 }}
              >
                Founded on the belief that the most powerful experiences exist where 
                creativity meets technical excellence, we bring together artists, 
                designers, engineers, and storytellers to create moments that transform.
              </p>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ color: colors.coralBone, opacity: 0.7 }}
              >
                From brand activations to large-scale installations, festival stages 
                to permanent exhibits—we don't just build sets. We build worlds.
              </p>
            </div>
            
            <div 
              className={`mt-10 pt-10 border-t transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ borderColor: `${colors.biolumeTeal}20` }}
            >
              <p 
                className="text-2xl italic"
                style={{ color: colors.biolumeTeal }}
              >
                "To fathom is to understand the depth of something—to truly comprehend it."
              </p>
            </div>
          </div>
          
          {/* Right column - Values */}
          <div>
            <div 
              className={`p-8 border transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ 
                borderColor: `${colors.biolumeTeal}20`,
                backgroundColor: `${colors.pressureBlue}08`
              }}
            >
              <p 
                className="text-[10px] tracking-[0.3em] mb-8 font-mono"
                style={{ color: colors.biolumeTeal }}
              >
                OUR VALUES
              </p>
              
              <div className="space-y-6">
                {values.map((value, i) => (
                  <div 
                    key={i}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${i * 100 + 500}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{ backgroundColor: `${colors.biolumeTeal}20` }}
                      >
                        <span 
                          className="text-sm font-mono"
                          style={{ color: colors.biolumeTeal }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h4 
                          className="text-lg font-light mb-1"
                          style={{ color: colors.coralBone }}
                        >
                          {value.title}
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ color: colors.coralBone, opacity: 0.6 }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div 
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {[
                { value: '150+', label: 'Projects Completed' },
                { value: '13+', label: 'Years Experience' },
                { value: '30+', label: 'Global Team Members' }
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="p-4 border text-center"
                  style={{ borderColor: `${colors.biolumeTeal}15` }}
                >
                  <p 
                    className="text-2xl font-light"
                    style={{ color: colors.biolumeTeal }}
                  >
                    {stat.value}
                  </p>
                  <p 
                    className="text-[9px] tracking-wider mt-1 font-mono"
                    style={{ color: colors.coralBone, opacity: 0.5 }}
                  >
                    {stat.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
