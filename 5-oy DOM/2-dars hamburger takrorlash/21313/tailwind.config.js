/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      laptop: "1202px"
    },
    container: {
      center: true,
      padding: "1rem",
    },
    boxShadow: {
      'primary': '0px 0px 23px 0px #9494942B',
    },
    colors: {
      'primary': "#000",
      "secondary": "red",
      "secondary-bg": "#00093C",
    },
    extend: {

    },
  },
  plugins: [],
}