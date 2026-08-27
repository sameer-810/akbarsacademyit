/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d8',
          300: '#8ca7c4',
          400: '#668ab0',
          500: '#406d9c',  // Deep Navy
          600: '#0F172A',  // Primary Navy
          700: '#0d1425',
          800: '#0a0f1a',
          900: '#070a0f',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffecc4',
          300: '#ffe1a1',
          400: '#ffd47f',
          500: '#f59e0b',  // Primary Gold
          600: '#D97706',  // Secondary Gold
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0F172A 0%, #1a2744 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #D97706 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.3)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
      },
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    // Custom plugin for line clamping
    require('@tailwindcss/line-clamp'),
  ],
}
