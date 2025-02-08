import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#ECE6E8",
        accent: "#FF5A00",
        main_accent: "#F9F7F8",
        tile_cream: "#FFEBE0",
        tile_green: "#E6FAE3",
        tile_blue: "#D3E5F0",
        tile_purple: "#E9D9FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
