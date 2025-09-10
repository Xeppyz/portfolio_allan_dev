module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#18181b",
        foreground: "#fafafa",
        primary: "#6366f1",
        'primary-foreground': "#fff",
        card: "#23232a",
        border: "#2d2d34",
        muted: "#3f3f46",
        'muted-foreground': "#a1a1aa",
      },
    },
  },
  plugins: [],
}
