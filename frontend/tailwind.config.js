/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#d4af35",
                "background-dark": "rgb(var(--bg-main) / <alpha-value>)",
                "surface-dark": "rgb(var(--bg-surface) / <alpha-value>)",
                "border-muted": "rgb(var(--border-color) / <alpha-value>)",
                "slate-100": "rgb(var(--text-primary) / <alpha-value>)",
                "slate-200": "rgb(var(--text-primary) / <alpha-value>)",
                "slate-300": "rgb(var(--text-secondary) / <alpha-value>)",
                "slate-400": "rgb(var(--text-secondary) / <alpha-value>)",
                "slate-500": "rgb(var(--text-muted) / <alpha-value>)",
            },
            fontFamily: {
                "display": ["Public Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "9999px"
            },
            keyframes: {
                shine: {
                    "0%": { transform: "translateX(-150%) skewX(-45deg)" },
                    "100%": { transform: "translateX(150%) skewX(-45deg)" }
                },
                gradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" }
                }
            },
            animation: {
                shine: "shine 1.5s ease-in-out infinite",
                gradient: "gradient 3s ease infinite"
            }
        },
    },
    plugins: [],
}
