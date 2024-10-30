import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      black: "#1e1e1e",
      white: "#fefefe"
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    extend: {}
  },

  plugins: [forms]
} as Config;
