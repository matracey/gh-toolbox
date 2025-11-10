import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      dropShadow: {
        vite: "0 0 2em #646cffaa",
        preact: "0 0 2em #673ab8aa",
      },
    },
  },
} satisfies Config;
