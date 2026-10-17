/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        naranja: { DEFAULT: '#F4500A', hondo: '#C23F06' },
        negro: { DEFAULT: '#121110', tela: '#1C1A18' },
        blanco: '#FFFFFF',
        tinta: { DEFAULT: '#121110', suave: '#4F4A45' },
      },
      fontFamily: {
        dorsal: ['"Big Shoulders Display Variable"', '"Arial Narrow"', 'sans-serif'],
        texto: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        camiseta: '78rem',
      },
    },
  },
  plugins: [],
};
