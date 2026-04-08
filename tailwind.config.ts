import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "var(--accent)",
          muted: "var(--accent-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundColor: {
        background: "var(--bg)",
        surface: "var(--surface)",
      },
      textColor: {
        foreground: "var(--text)",
        muted: "var(--muted)",
      },
      borderColor: {
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};

export default config;
