/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    ["./src/**/*.tsx",
      "./index.html"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    screens: {
      'n7': '50px',
      'n6': '360px',
      'n5': '464px',
      'n4': '564px',
      'n3': '664px',
      'n2': '800px',
      'n1': '950px',
      'n0': '1100px',
    },

    backgroundSize: {
      "icons": "1px"
    },
    textColor: {
      'T1': '#55396285',
      'T2': '#ffffff85',
      'T3': '#030303',
      'T4': '#4829575b',
    },
    animation: {
      'contentShow': '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
    extend: {
      backgroundColor: {
        "BG": "#030303",
        'BH': '#000000f8',
        'BGH': '#0c0c0cf8',
        'BGB': '#55396285',
        'Bhover': '#22212185'
      },
      transitionTimingFunction: {
        'in-menu': 'cubic-bezier(0.16, 1, 0.3, 1)',

      }
    },
  },
  plugins: []
}
