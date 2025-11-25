/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Catch-all
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components2/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/preview/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greedy: "#00a3e4ff",
        primarylw: "#173eff",
      },

      screens: {
        "max-1400px": { max: "1400px" }, // Defines a new breakpoint that applies styles UP TO 1400px
        // You might also define a min-width for larger screens if needed:
        // '1400px': '1400px', // Example for a min-width breakpoint at 1400px
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    require("lightswind/plugin"),

    function ({ addBase, addComponents }) {
      addBase({
        ".border": {
          "@apply border-gray-200 dark:border-[#1a1b1b]": {},
        },
      });
      addComponents({
        ".dark .bg-card": {
          backgroundColor: "#1d1c1cff", // dark override
        },
      });
    },
  ],
};

export {};
