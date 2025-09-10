/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-gray-900': '#191E24',
        'custom-gray-800': '#323232',
        'custom-gray-700': '#40464B',
        'custom-gray-600': '#586067',
        'custom-gray-500': '#6F7A83',
        'custom-gray-400': '#B9C8D7',
        'custom-gray-400': '#E1E6EB',
        'custom-gray-300': '#F0F5FA',
        'custom-yellow-700': '#EA392B',
        'custom-yellow-600': '#FF5900',
        'custom-yellow-500': '#FF8800',
        'custom-yellow-400': '#FFAE00',
        'custom-yellow-400': '#FFC64C',
        'custom-yellow-300': '#FFE09D',
        'custom-yellow-200': '#FFF2D7',
        'custom-green-700': '#6B8F24',
        'custom-green-600': '#7AA329',
        'custom-green-500': '#8AB82E',
        'custom-green-400': '#99CC33',
        'custom-green-400': '#ADD65C',
        'custom-green-300': '#C2E085',
        'custom-green-200': '#D6EAAE',
        // Puedes agregar más colores personalizados aquí
      },
    },
  },
  plugins: [],
}

