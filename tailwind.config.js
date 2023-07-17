/** @type {import('tailwindcss').Config} */
export const content = [
  './src/app/**/*.{js,ts,jsx,tsx}',
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'icon-primary': '#C40A5F',
      'icon-secondary': '#00FFFF',
      'color-1': '#00BFBF',
      'color-2': '#008080',
      'color-3': '#8ECC14',
      'color-4': '#FF6B40',
      'color-5': '#F74725',
      'primary-text': '#232935',
      'secondary-text': '#83838B',
      'disabled-text': '#ABB1BB',
      'disabled-button': '#E7EAF0',
      'screen-bg': '#F9FBFF',
      'border-color': '#00000014',
    },
    borderRadius: {
      sm: '8px',
      lg: '100px',
    },
    zIndex: {
      9: '99999',
      top: '9999999',
    },
    boxShadow: {
      card: '0 1px 4px 0px rgba(2, 2, 19, 0.1)',
    },
  },
};
export const plugins = [];
