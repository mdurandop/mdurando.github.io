/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: '#030509',
      primary: '#99B3E6',
      secondary: '#1A428C',
      accent: '#3371E5',
      card: '#0B0E14',
      text: '#fff'
    }
  },
  plugins: [],
}

