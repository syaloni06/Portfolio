/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      boxShadow: {
        'b': '0 0 20px 1px rgba(0,0,0,0.1)',
        '3xl': '0 0 40px 3px rgba(0,0,0,0.3)',
        't': '0px -12px 20px -5px rgba(0,0,0,0.3)',
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s infinite',
        'fromBottom': 'fromBottom 150ms ease-out',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'none', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'fromBottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      animation: ['hover'],
    },
  },
  plugins: [],
}

