module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // * Config for the custom font
      fontFamily: {
        inter: "Inter",
      },
      // * Config for the custom colors
      colors: {
        primaryClrOrange: "#FF9F00",
        secondaryClr: "#FF6860",
        tertiaryClr: "#689EF8",
        bgCenterDimmed: "#F5F6FC",
        bgSideBar: "#343951",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
