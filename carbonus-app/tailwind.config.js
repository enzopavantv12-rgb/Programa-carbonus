/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue:   '#0655ed',
        cyan:   '#06caed',
        neon:   '#1bf717',
        navy:   '#121a35',
        gold:   '#d29905',
        cream:  '#f1f2ea',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grad-neon': 'linear-gradient(100deg,#1bf717,#06caed,#0655ed)',
        'grad-dark': 'linear-gradient(160deg,#0c2b34 0%,#0b1020 60%,#121a35 100%)',
      },
    },
  },
  plugins: [],
}
