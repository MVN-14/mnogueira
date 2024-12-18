import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      black: "#1e1e1e",
      white: "#fefefe",
      grey: "#a7a7a0",
      spotifyGreen: "#1DB954",
      red: "#ff0033"
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    extend: {}
  },

  plugins: [forms]
} as Config;
