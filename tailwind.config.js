/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },

      colors: {
        white: '#FFFFFF',

        gray: {
          100: '#E1E1E6',
          300: '#C4C4CC',
          800: '#202024',
          900: '#121214',
        },

        green: {
          300: '#00875F',
          500: '#00B37E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
