/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#475569', // slate-600
      'secondary': '#cbd5e1', // slate-300
      'title': '#1e293b', // slate-800 - title
      'text': '#334155', // slate-700 - text
      'input-bg': '#e2e8f0', // slate-200 - input bg
      'border': '#cbd5e1', // slate-300 - border
      'primarySelection': '#673AB7',
      'secondarySelection': '#FFC107',
      'primaryHighlight': '#673AB7',
      'secondaryHighlight': '#FFC107', 
      'customBeige': '#F5F5F5',
      'white': '#ffffff',
      'black': '#000000',
      'green': {
        700: '#15803d'
      },
      'red': {
        700: '#b91c1c'
      },
      'blue': {
        500: '#3b82f6'
      },

    }
  },
  plugins: [],
}