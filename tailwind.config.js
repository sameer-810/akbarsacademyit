/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette taken from the academy seal: navy ink, seal blue, ribbon red.
        ink: {
          DEFAULT: '#14213D',
          700: '#1B2B50',
          900: '#0C1428',
        },
        brand: {
          DEFAULT: '#1F4FD8',
          600: '#1A43B8',
          50: '#EEF3FF',
          100: '#DCE6FF',
        },
        signal: {
          DEFAULT: '#D7263D',
          600: '#B81F33',
          50: '#FDECEF',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          2: '#F3F5F9',
        },
        rule: '#D6DBE4',
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
