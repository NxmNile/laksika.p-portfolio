// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        // ส่วนขยาย theme เดิมของคุณ
      },
    },
    plugins: [
      require("daisyui") // <--- บรรทัดนี้สำคัญมาก!
    ],
    daisyui: {
      themes: ["light", "dark", "cupcake", "synthwave"], // เลือกธีมที่คุณต้องการ
      darkTheme: "dark",
      base: true,
      styled: true,
      utils: true,
      prefix: "",
      logs: true,
      themeRoot: ":root",
    },
  };