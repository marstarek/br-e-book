/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
   daisyui: {
     themes: [
       {
         dark: {
           "primary": "#55e748",
           "secondary": "#040404",
           "accent": "#F8F1E8",
           "neutral": "#e43b2e",
           "base-200": "#0a0a0a",
           "base-300": "#59636d",
           "base-400": "#040404",
           "base-500": "#ffffff",
          }
       }, {
         light: {
           "primary": "#55e748",
           "secondary": "#e43b2e",
         "accent": "#212529",
           "neutral": "#040404",
           "base-200": "#0a0a0a",
           "base-300": "white",
           "base-400": "#e43b2e",
           "base-500": "#ffffff",
       }
       }],
  },
}

