import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0e1a',
        surface: '#12172a',
        'surface-alt': '#1a2036',
        border: '#252b45',
        foreground: '#eef1fa',
        muted: '#8b93ab',
        accent: {
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
          cyan: '#22d3ee',
          'cyan-light': '#67e8f9',
          pink: '#ec4899',
        },
        tier: {
          splus: '#f43f5e',
          s: '#f59e0b',
          a: '#8b5cf6',
          b: '#22d3ee',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
