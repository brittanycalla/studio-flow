/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
              opacity: '0'
          },
          '50%': {
            opacity: '.5'
          },
          '100%': {
              opacity: '1'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in .5s linear'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          info: "#7C3AED",
        },
      },
    ],
  },
}
