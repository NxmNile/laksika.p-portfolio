// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './public/**/*.html',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', 'sans-serif'],
        },
      },
    },
    plugins: [
      require("daisyui")
    ],
    daisyui: {
      themes: ["light", "dark", "cupcake", "synthwave"], 
      darkTheme: "dark",
      base: true,
      styled: true,
      utils: true,
      prefix: "",
      logs: false,
      themeRoot: ":root",
    },
  };