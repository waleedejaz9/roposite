module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0451a3",
        ropocardview: "#112234",
        bgSection: "#4c8fba",
        textColor: "#c3c3c3",
        menuTextColor: "#4c798e",
        underLineColor: "#cad3d0",
      },
      minHeight: {
        300: "300px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      cursor: ["hover", "focus"],
    },
  },
};
