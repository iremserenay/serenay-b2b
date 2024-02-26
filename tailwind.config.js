/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#002d72",
        customLightBlue: "#0059e4",
        customBgLightBlue: "#cce0ff",
        customDarkRed: "#af3375",
        customGrey: "#33435b",
        productSize: "#6f7e8f",
        customProduct: "#e1e1e1",
        productButtons: "#ffe501",
        productButtonPiece: "#f6de06",
        productButtonPieceBorder: "#e2cc04",
        categoryBg: "#ecf0f4",
      },
    },
  },
};
