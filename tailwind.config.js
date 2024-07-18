/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./App.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hirejob-purple": {
          normal: "#5E50A1",
          dark: "#453a78",
        },
        "hirejob-yellow": {
          normal: "#FBB017",
          dark: "#c68b14",
        },
        "hirejob-black": "#000000",
        "hirejob-dark": "#1F2A36",
        "hirejob-slate": "#46505C",
        "hirejob-gray": "#9EA0A5",
        "hirejob-frost": "#E2E5ED",
        "hirejob-ice": "#F0F5F9",
        "hirejob-light": "#F6F7F8",
        "hirejob-white": "#FFFFFF",
        "hirejob-danger": {
          normal: "#F32013",
          dark: "#CA0B00",
        },
        "hirejob-success": {
          normal: "	#5cb85c",
          dark: "#408140",
        },
      },
    },
  },
  plugins: [],
};
