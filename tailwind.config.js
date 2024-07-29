/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue : "#232F3E",
        amazon_menu_dark_blue: "#131921",
        amazon_product_text: "#0F798C",
        amazon_backtoTop: "#37475A",
        amazon_backtoTop_onClick: "#485769"
      },
    },
  },
  plugins: [],
}
