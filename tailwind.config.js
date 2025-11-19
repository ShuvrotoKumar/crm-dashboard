/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "crm-bg": "#050309",
        "crm-gold": "#f6c453",
        "crm-gold-soft": "#f7d58a",
        "crm-card": "rgba(12, 10, 24, 0.85)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        "crm-soft": "0 18px 45px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "crm-gradient":
          "radial-gradient(circle at top left, rgba(246,196,83,0.36), transparent 55%), radial-gradient(circle at bottom right, rgba(140,82,255,0.32), transparent 55%)",
        "crm-gold":
          "linear-gradient(135deg, #f6c453, #f7d58a, #f0b13b)",
        "crm-card-gradient":
          "linear-gradient(145deg, rgba(15,15,30,0.95), rgba(8,5,20,0.9))",
      },
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
};


