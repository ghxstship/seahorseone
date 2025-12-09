'use client';

import { useState, useEffect } from 'react';

interface BioluminescentFieldProps {
  density?: number;
  colors: string[];
}

interface Particle {
  id: number;
  width: number;
  color: string;
  opacity: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function BioluminescentField({ density = 40, colors }: BioluminescentFieldProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Only generate particles on client-side to avoid hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: density }, (_, i) => ({
        id: i,
        width: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 20 + Math.random() * 30,
        delay: Math.random() * 15
      }))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.width}px`,
            height: `${particle.width}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
}
