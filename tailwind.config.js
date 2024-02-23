import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自定义扩展类名
      colors: { primary: colors.rose[400] }
    }
  },
  plugins: []
}
