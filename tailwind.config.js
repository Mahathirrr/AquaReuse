/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Semua file dalam src
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin tambahan
  ],
};

