const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Ajuste este caminho conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      colors: {
        'gray-200': '#f7f8f9',  // Sua cor personalizada
        'green-300': '#7ed957',  // Sua cor personalizada
        lime: colors.lime,
        'custom-blue': '#5271ff',  // Sua cor personalizada
      },
    },
  },
  plugins: [],
};
