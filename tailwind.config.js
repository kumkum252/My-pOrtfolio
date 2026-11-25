/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#080B0F',
        'dark-card': '#0F141B',
        'cyan-neon': '#00EEFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(0, 238, 255, 0.35), 0 0 60px rgba(59, 130, 246, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 45px rgba(0, 238, 255, 0.55), 0 0 85px rgba(59, 130, 246, 0.35)',
          },
        },
      },
      animation: {
        glow: 'glowPulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
