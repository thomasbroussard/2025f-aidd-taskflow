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
        "primary-fixed-dim": "#b9c3ff",
        "inverse-on-surface": "#eef0ff",
        "outline-variant": "#c5c5d4",
        "on-secondary": "#ffffff",
        "on-background": "#131b2e",
        "surface-container-high": "#e2e7ff",
        "surface-variant": "#dae2fd",
        "primary-fixed": "#dee1ff",
        "tertiary-fixed-dim": "#ffb3b0",
        "surface-container-low": "#f2f3ff",
        "secondary": "#515f74",
        "on-tertiary-container": "#ffc4c1",
        "surface-bright": "#faf8ff",
        "primary": "#2b3c8c",
        "surface-tint": "#4858a9",
        "on-primary-fixed": "#001258",
        "background": "#faf8ff",
        "on-primary-fixed-variant": "#2f4090",
        "on-secondary-container": "#57657a",
        "surface": "#faf8ff",
        "on-primary-container": "#c9d0ff",
        "surface-container-highest": "#dae2fd",
        "tertiary": "#87101c",
        "on-tertiary-fixed": "#410006",
        "on-secondary-fixed": "#0d1c2e",
        "on-secondary-fixed-variant": "#3a485b",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "surface-dim": "#d2d9f4",
        "tertiary-container": "#a82b31",
        "on-surface": "#131b2e",
        "error-container": "#ffdad6",
        "surface-container": "#eaedff",
        "inverse-surface": "#283044",
        "secondary-fixed": "#d5e3fc",
        "outline": "#757684",
        "on-error-container": "#93000a",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#d5e3fc",
        "primary-container": "#4454a5",
        "inverse-primary": "#b9c3ff",
        "on-tertiary-fixed-variant": "#8c1520",
        "secondary-fixed-dim": "#b9c7df",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdad8",
        "on-error": "#ffffff",
        "on-surface-variant": "#454652"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)", "sans-serif"],
        "body": ["var(--font-inter)", "sans-serif"],
        "label": ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;
