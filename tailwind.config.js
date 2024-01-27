/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryblue: "#083358",
      primarywhite: "#F6F6F6",
      primaryred: "#FC3C3C",
      secondaryblue: "#0F4471",
    },
  },
  plugins: [],
};
