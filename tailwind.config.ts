import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto-sans)"],
        serif: ["var(--font-roboto-slab)"],
        mono: ["var(--font-roboto-serif)"],
      },
      colors: {
        yellow: "rgb(var(--yellow))",
        neutral: "rgb(var(--neutral))",
        rose: "rgb(var(--accent))",
        primary: "rgb(var(--yellow))",
        secondary: "rgb(var(--neutral))",
        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [  
      {
        joinT: {
          primary: "#eab308",
          secondary: "#0E0E0E",
          accent: "#E81C31",
          neutral: "#0E0E0E",
          "base-100": "#262626",
          '--navbar-padding': "1rem",
          },
      },
    ],
  },
};
export default config;
