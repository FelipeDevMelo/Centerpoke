import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import { Josefin_Sans, Karla } from "next/font/google";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin_Sans: ['var(--font-josefin)', 'sans-serif'],
        exo2: ['var(--font-exo2)', 'sans-serif'],
        Karla: ['var(--font-karla)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
