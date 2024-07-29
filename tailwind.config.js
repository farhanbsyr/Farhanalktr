/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      screens: {
        sm: "500px",
        lg: "912px",
      },
    },
  },
  plugins: [],
};
