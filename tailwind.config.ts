import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core depths
        'surface-azure': '#0A4D68',
        'twilight-indigo': '#0D2137',
        'midnight-abyss': '#080B12',
        'hadal-void': '#030508',
        // Bioluminescence
        'biolume-teal': '#00D4AA',
        'phosphor-cyan': '#7FEFEF',
        // Accent organisms
        'coral-bone': '#E8DED0',
        'abyssal-orange': '#FF6B35',
        'kelp-gold': '#C9A227',
        'depth-violet': '#6B5B95',
        'squid-pink': '#E8A0BF',
        'sturgeon-silver': '#8FA3AD',
        // Functional
        'pressure-blue': '#1E3A5F',
        'manta-slate': '#2D3E4A',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'bubble': 'bubble 2s ease-in-out infinite',
        'sonar-ping': 'sonarPing 3s ease-out infinite',
        'fade-slide-up': 'fadeSlideUp 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-30px) translateX(10px)' },
          '50%': { transform: 'translateY(-15px) translateX(-15px)' },
          '75%': { transform: 'translateY(-40px) translateX(5px)' },
        },
        bubble: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(-10px)', opacity: '1' },
        },
        sonarPing: {
          '0%': { transform: 'scale(0.5)', opacity: '0.5' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
