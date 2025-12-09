'use client';

import { colors } from '@/lib/constants';

interface SonarPingProps {
  color?: string;
  size?: number;
}

export default function SonarPing({ color = colors.biolumeTeal, size = 100 }: SonarPingProps) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <div 
        className="absolute inset-0 rounded-full border opacity-30"
        style={{ 
          borderColor: color, 
          animation: 'sonarPing 3s ease-out infinite' 
        }}
      />
      <div 
        className="absolute inset-0 rounded-full border opacity-30"
        style={{ 
          borderColor: color, 
          animation: 'sonarPing 3s ease-out infinite 1s' 
        }}
      />
      <div 
        className="absolute inset-0 rounded-full border opacity-30"
        style={{ 
          borderColor: color, 
          animation: 'sonarPing 3s ease-out infinite 2s' 
        }}
      />
      <div 
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
