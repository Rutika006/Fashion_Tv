/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ['Inter', 'sans-serif'], // custom class if needed
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // ✅ sets default font for body/text
    },
  },
  plugins: [],
}
