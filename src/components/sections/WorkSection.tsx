'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { colors, projects } from '@/lib/constants';

interface WorkSectionProps {
  onNavigate: (id: string) => void;
}

export default function WorkSection({ onNavigate }: WorkSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.filter(p => p.featured);
  
  return (
    <section 
      ref={ref}
      id="work"
      className="relative py-32 px-6"
      style={{ backgroundColor: colors.hadalVoid }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p 
              className={`text-[10px] tracking-[0.5em] mb-4 font-mono transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ color: colors.biolumeTeal }}
            >
              — SELECTED WORK —
            </p>
            <h2 
              className={`text-4xl md:text-5xl font-light transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ color: colors.coralBone }}
            >
              Featured Projects
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className={`text-sm tracking-[0.15em] flex items-center gap-2 transition-all duration-700 delay-300 hover:gap-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: colors.biolumeTeal }}
          >
            SEE THE FULL CATALOG
            <ArrowUpRight size={16} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 400}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="relative aspect-[4/3] overflow-hidden border transition-all duration-500"
                style={{ 
                  borderColor: hoveredProject === project.id ? project.color : `${colors.biolumeTeal}20`,
                  backgroundColor: `${colors.pressureBlue}10`
                }}
              >
                {/* Placeholder for project image */}
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}20 0%, ${colors.hadalVoid} 100%)`,
                    opacity: hoveredProject === project.id ? 0.8 : 0.4
                  }}
                />
                
                {/* Project number */}
                <div 
                  className="absolute top-4 left-4 text-6xl font-mono opacity-10"
                  style={{ color: project.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="text-[9px] tracking-wider font-mono px-2 py-1"
                      style={{ backgroundColor: `${project.color}30`, color: project.color }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                    <span 
                      className="text-[9px] tracking-wider font-mono opacity-50"
                      style={{ color: colors.coralBone }}
                    >
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-2xl md:text-3xl font-light mb-2 transition-all duration-300 group-hover:translate-x-2"
                    style={{ color: colors.coralBone }}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-sm opacity-60 mb-4"
                    style={{ color: colors.coralBone }}
                  >
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span 
                        key={service}
                        className="text-[8px] tracking-wider font-mono px-2 py-1 border"
                        style={{ borderColor: `${colors.biolumeTeal}30`, color: colors.biolumeTeal }}
                      >
                        {service.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover arrow */}
                <div 
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  style={{ backgroundColor: project.color }}
                >
                  <ArrowUpRight size={20} style={{ color: colors.hadalVoid }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p 
            className="text-lg italic mb-6"
            style={{ color: colors.biolumeTeal }}
          >
            "Every project is a new world waiting to be built."
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 text-sm tracking-[0.2em] border border-[#00D4AA40] text-[#00D4AA] transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA10]"
          >
            BEGIN YOUR PROJECT
          </button>
        </div>
      </div>
    </section>
  );
}
