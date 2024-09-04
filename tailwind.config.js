/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
            keyframes: {
              bounceLeft: {
                '0%, 100%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(-4rem)' },
              },
            },
            animation: {
              bounceLeft: 'bounceLeft 1s ease-in-out infinite',
            },
      },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      'light', 
      'dark',
      'cupcake',
      'coffee',
    ],
  },
}
