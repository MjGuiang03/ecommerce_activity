/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F4F4F5',
          300: '#E4E4E7',
          400: '#D4D4D8',
        },
        primary: {
          light: '#F4F4F5',
          DEFAULT: '#18181B',
          dark: '#09090B',
        },
        brown: {
          light: '#71717A',
          DEFAULT: '#18181B',
        },
        success: {
          light: '#E4E4E7',
          DEFAULT: '#18181B',
          dark: '#27272A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

