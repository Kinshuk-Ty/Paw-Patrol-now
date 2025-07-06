module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'pink-500': '#ec4899', // Ensure your pink color exists
        'gray-50': '#f9fafb',  // Ensure background color exists
      },
    },
  },
  plugins: [],
}
