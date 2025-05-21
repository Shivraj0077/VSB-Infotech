module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gohausdesignblack: "var(--gohausdesignblack)",
        "gohausdesignblack-10": "var(--gohausdesignblack-10)",
        "gohausdesigncod-gray": "var(--gohausdesigncod-gray)",
        "gohausdesignguardsman-red": "var(--gohausdesignguardsman-red)",
        gohausdesignheliotrope: "var(--gohausdesignheliotrope)",
        gohausdesignmartinique: "var(--gohausdesignmartinique)",
        "gohausdesignpapaya-whip": "var(--gohausdesignpapaya-whip)",
        "gohausdesignpapaya-whip-10": "var(--gohausdesignpapaya-whip-10)",
        gohausdesignperfume: "var(--gohausdesignperfume)",
        "gohausdesignrangoon-green": "var(--gohausdesignrangoon-green)",
        "gohausdesignsilver-chalice-16": "var(--gohausdesignsilver-chalice-16)",
        "gohausdesignsilver-sand": "var(--gohausdesignsilver-sand)",
        gohausdesignwhite: "var(--gohausdesignwhite)",
        "gohausdesignwhite-10": "var(--gohausdesignwhite-10)",
        "gohausdesignwhite-15": "var(--gohausdesignwhite-15)",
        "gohausdesignwhite-5": "var(--gohausdesignwhite-5)",
        "gohausdesignwhite-50": "var(--gohausdesignwhite-50)",
        "gohausdesignwhite-90": "var(--gohausdesignwhite-90)",
        "gohausdesignwhite-black-black": "var(--gohausdesignwhite-black-black)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "gohaus-design-lexend-extralight":
          "var(--gohaus-design-lexend-extralight-font-family)",
        "gohaus-design-lexend-light":
          "var(--gohaus-design-lexend-light-font-family)",
        "gohaus-design-lexend-regular":
          "var(--gohaus-design-lexend-regular-font-family)",
        "gohaus-design-merriweather-light":
          "var(--gohaus-design-merriweather-light-font-family)",
        "gohaus-design-merriweather-light-italic":
          "var(--gohaus-design-merriweather-light-italic-font-family)",
        "gohaus-design-semantic-heading-1":
          "var(--gohaus-design-semantic-heading-1-font-family)",
        "gohaus-design-semantic-heading-2":
          "var(--gohaus-design-semantic-heading-2-font-family)",
        "gohaus-design-semantic-heading-3":
          "var(--gohaus-design-semantic-heading-3-font-family)",
        "gohaus-design-semantic-heading-4":
          "var(--gohaus-design-semantic-heading-4-font-family)",
        "gohaus-design-semantic-link":
          "var(--gohaus-design-semantic-link-font-family)",
        "gohaus-design-urbanist-regular":
          "var(--gohaus-design-urbanist-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
