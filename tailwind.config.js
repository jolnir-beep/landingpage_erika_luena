/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#DFE5DC',
        'brand-bg-alt': '#D3DBD0',
        'brand-dark': '#18242A',
        'brand-muted': '#384649',
        'brand-teal': {
          DEFAULT: '#397B77',
          light: '#4C8C86',
          dark: '#234F4D',
          veryLight: '#CADBD1'
        },
        'brand-coral': {
          DEFAULT: '#E97567',
          light: '#EA7668',
          hover: '#D96254',
          soft: '#F4CEC7'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Inter"', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft-xs': '0 1px 3px rgba(24, 36, 42, 0.05), 0 1px 2px rgba(24, 36, 42, 0.03)',
        'soft-sm': '0 2px 8px rgba(24, 36, 42, 0.06), 0 1px 2px rgba(24, 36, 42, 0.04)',
        'soft-md': '0 8px 24px rgba(24, 36, 42, 0.07), 0 2px 6px rgba(24, 36, 42, 0.04)',
        'soft-lg': '0 14px 36px rgba(24, 36, 42, 0.09), 0 4px 12px rgba(24, 36, 42, 0.05)',
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

