/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        'large': '10px',
      },
      colors: {
      'primary': '#9A48D6'
    },
    },
  },
  plugins: [],
}

