/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#FAFAF7',
        'brand-bg-alt': '#F7F8F4',
        'brand-dark': '#18242A',
        'brand-muted': '#6D7A7D',
        'brand-teal': {
          DEFAULT: '#397B77',
          light: '#4C8C86',
          dark: '#234F4D',
          veryLight: '#EDF4EF'
        },
        'brand-coral': {
          DEFAULT: '#E97567',
          light: '#EA7668',
          hover: '#D96254',
          soft: '#FDF1EF'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Inter"', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 4px 20px rgba(24, 36, 42, 0.04)',
        'soft-md': '0 8px 30px rgba(24, 36, 42, 0.06)',
        'soft-lg': '0 16px 45px rgba(24, 36, 42, 0.08)',
        'coral-glow': '0 8px 25px rgba(233, 117, 103, 0.35)',
        'teal-glow': '0 8px 25px rgba(57, 123, 119, 0.25)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.75rem',
      }
    },
  },
  plugins: [],
}

