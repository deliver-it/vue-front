/** @type {import('tailwindcss').Config} */ module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'RedHat': ['Red Hat Display', 'sans-serif']
      },
      colors: {
        'color-primary': "#355C7D",
        'color-secondary': "#6C5B7B",
        'color-primary-opacity': '#F8B195',
        'color-secondary-opacity': "#F67280",
        'color-primary-focus': "#C06C84"
      },
      fontSize: {
      'mov-lg': '57px',
      'mov-md': '45px',
      'mov-sm': '33px',
      'mov-headline-lg': '32px',
      'mov-headline-md': '28px',
      'mov-headline-sm': '24px',
      'mov-body-lg': '22px',
      'mov-body-md': '16px',
      'mov-body-sm': '14px',
      'mov-label-lg': '14px',
      'mov-label-md': '12px',
      'mov-label-sm': '11px',
    }
    },
  },
  plugins: [],
};
