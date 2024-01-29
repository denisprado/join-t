/* eslint-disable prettier/prettier */
import type { Config } from "tailwindcss";

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
        yellow: {
          "50": "#fff2cc",
          "100": "#ffe8a8",
          "200": "#ffd56b",
          "300": "#ffc02e",
          "400": "#ffaf1a",
          "500": "#FFA500",
          "600": "#e36b02",
          "700": "#bc4906",
          "800": "#97360c",
          "900": "#7d2d0d",
          "950": "#4a1702",
        },

        neutral: "rgb(var(--neutral))",
        rose: "rgb(var(--accent))",
        primary: "rgb(var(--yellow))",
        secondary: "rgb(var(--neutral))",
        accent: "rgb(var(--accent))",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        joinT: {
          primary: "#eab308",
          secondary: "#0E0E0E",
          accent: "#E81C31",
          neutral: "#0E0E0E",
          "base-100": "#262626",
          "--navbar-padding": "1rem",
        },
      },
      "cyberpunk",
    ],
  },
};
export default config;
