import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3781C2",
          blueDark: "#1F3249",
          gold: "#d4af37",
        },
      },
    },
  },
  plugins: [],
};

export default config;
