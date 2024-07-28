/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #1e0030, #380052, #620094)',
      },
    },
  },
  plugins: [],
}

