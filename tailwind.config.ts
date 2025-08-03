import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{ts,tsx,html}'],
  themes: {
    light: {
      extend: {
        colors: {
          background: 'pink',
          foreground: '#1f2937',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Playfair Display', 'serif'],
        },
        spacing: {
          layout: '1rem',
        },
        borderRadius: {
          component: '0.5rem',
        },
      },
    },
    dark: {
      extend: {
        colors: {
          background: '#0f172a',
          foreground: '#f8fafc',
        },
        fontFamily: {
          sans: ['Fira Code', 'monospace'],
          display: ['Orbitron', 'sans-serif'],
        },
        spacing: {
          layout: '2rem',
        },
        borderRadius: {
          component: '1rem',
        },
      },
    },
    retro: {
      extend: {
        colors: {
          background: '#fffbe6',
          foreground: '#222',
        },
        fontFamily: {
          sans: ['Courier New', 'monospace'],
          display: ['Comic Sans MS', 'cursive'],
        },
        spacing: {
          layout: '1.25rem',
        },
        borderRadius: {
          component: '0.25rem',
        },
      },
    },
  },
  darkMode: 'class',
});
