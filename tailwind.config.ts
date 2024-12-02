import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(0, 50, 50)",
        text: "rgba(200, 200, 200, 1)",
        muted: "rgba(200, 200, 200, 0.5)",
        stack: "rgba(255, 255, 255, 0.1)",
        background: "rgba(10, 10, 10, 1)",
      },
      fontFamily: {
        regular: ["Inter-Regular", "Arial"],
        bold: ["Inter-Bold", "Arial"],
        italic: ["Inter-Italic", "Arial"],
      },
    },
  },
  plugins: [],
} satisfies Config;
