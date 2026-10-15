/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#101219',
          soft: '#1B1F2A',
          line: '#2A3040',
        },
        paper: {
          DEFAULT: '#F7F8FA',
          card: '#FFFFFF',
          line: '#E4E7EE',
        },
        brand: {
          green: '#22C55E',
          aqua: '#46E8D1',
        },
        cream: '#F3F1EA',
        night: '#171923',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,18,25,.04), 0 8px 24px -12px rgba(16,18,25,.18)',
        lift: '0 12px 40px -16px rgba(16,18,25,.35)',
        glow: '0 0 0 1px rgba(70,232,209,.35), 0 12px 40px -14px rgba(34,197,94,.45)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        riseIn: 'riseIn .6s cubic-bezier(.16,1,.3,1) both',
        shimmer: 'shimmer 1.4s infinite',
      },
    },
  },
  plugins: [],
};
