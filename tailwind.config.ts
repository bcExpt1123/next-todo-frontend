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
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "success": "var(--success)",
        "primary-dark": "var(--primary-dark)",
        "secondary-dark": "var(--secondary-dark)",
        "primary-gray": "var(--primary-gray)",
        "secondary-gray": "var(--secondary-gray)",
        "primary-light": "var(--primary-light)",
        "secondary-light": "var(--secondary-light)",
        "disabled-light": "var(--disabled-light)",
        "app-red": "var(--app-red)",
        "app-orange": "var(--app-orange)",
        "app-yellow": "var(--app-yellow)",
        "app-green": "var(--app-green)",
        "app-blue": "var(--app-blue)",
        "app-indigo": "var(--app-indigo)",
        "app-purple": "var(--app-purple)",
        "app-pink": "var(--app-pink)",
        "app-brown": "var(--app-brown)",
      },
      width: {
        "container": "var(--w-content)",
      },
      maxWidth: {
        "container": "var(--w-content)",
      }
    },
  },
  plugins: [],
} satisfies Config;
