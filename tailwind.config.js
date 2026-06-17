/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#4cd7f6",
        "on-secondary-container": "#00311f",
        "on-surface-variant": "#bcc9cd",
        "primary-fixed-dim": "#4cd7f6",
        "surface-container-highest": "#313540",
        "on-error": "#690005",
        "inverse-surface": "#dfe2f1",
        "error-container": "#93000a",
        "on-tertiary-container": "#4900ae",
        "surface-container-high": "#262a35",
        "tertiary-fixed": "#e9ddff",
        "surface-container-lowest": "#0a0e18",
        "on-background": "#dfe2f1",
        "on-surface": "#dfe2f1",
        "on-tertiary-fixed": "#23005c",
        "secondary-fixed-dim": "#4edea3",
        "primary": "#4cd7f6",
        "surface-deep": "#0B0F19",
        "primary-container": "#06b6d4",
        "secondary-container": "#00a572",
        "background": "#0f131d",
        "on-primary-container": "#00424f",
        "on-primary": "#003640",
        "on-secondary-fixed-variant": "#005236",
        "on-secondary-fixed": "#002113",
        "glow-cyan": "rgba(6, 182, 212, 0.4)",
        "outline-variant": "#3d494c",
        "tertiary-container": "#b395ff",
        "surface": "#0f131d",
        "surface-slate": "#0F172A",
        "on-primary-fixed-variant": "#004e5c",
        "border-glass": "rgba(255, 255, 255, 0.1)",
        "outline": "#869397",
        "on-error-container": "#ffdad6",
        "surface-variant": "#313540",
        "inverse-primary": "#00687a",
        "surface-container-low": "#171b26",
        "surface-container": "#1c1f2a",
        "secondary-fixed": "#6ffbbe",
        "text-muted": "#94A3B8",
        "secondary": "#4edea3",
        "on-tertiary": "#3c0091",
        "inverse-on-surface": "#2c303b",
        "on-tertiary-fixed-variant": "#5516be",
        "surface-bright": "#353944",
        "primary-fixed": "#acedff",
        "on-secondary": "#003824",
        "surface-dim": "#0f131d",
        "error": "#ffb4ab",
        "on-primary-fixed": "#001f26",
        "tertiary": "#d0bcff",
        "tertiary-fixed-dim": "#d0bcff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "stack-md": "1.5rem",
        "container-max": "1280px",
        "stack-sm": "0.5rem",
        "gutter": "2rem",
        "section-gap": "8rem",
        "margin-page": "5vw"
      },
      fontFamily: {
        "label-md": ["Geist", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Geist", "sans-serif"],
        "headline-xl": ["Geist", "sans-serif"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "headline-lg": ["Geist", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "label-md": [
          "14px",
          {
            lineHeight: "1",
            letterSpacing: "0.05em",
            fontWeight: "600"
          }
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "400"
          }
        ],
        "headline-md": [
          "30px",
          {
            lineHeight: "1.3",
            fontWeight: "600"
          }
        ],
        "headline-xl": [
          "60px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.04em",
            fontWeight: "800"
          }
        ],
        "headline-lg-mobile": [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],
        "headline-lg": [
          "48px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.6",
            fontWeight: "400"
          }
        ]
      }
    },
  },
  plugins: [],
};
