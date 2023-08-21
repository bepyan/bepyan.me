/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard Variable', 'sans'],
      serif: ['AritaBuri', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      fg: 'var(--fg)',
      bg: 'var(--bg)',
      tx: 'var(--text-color)',
      alpha: 'var(--alpha)',
      shadow: 'var(--shadow-color)',
      white: '#fff',
      indigo: 'var(--indigo)',
      'gray-1': 'var(--gray1)',
      'gray-2': 'var(--gray2)',
      'gray-3': 'var(--gray3)',
      'gray-4': 'var(--gray4)',
      'gray-5': 'var(--gray5)',
      'gray-6': 'var(--gray6)',
      'gray-7': 'var(--gray7)',
      'gray-8': 'var(--gray8)',
      'gray-9': 'var(--gray9)',
      'gray-10': 'var(--gray10)',
      'gray-11': 'var(--gray11)',
      'gray-12': 'var(--gray12)',
      black: '#000',
      'black-A1': 'var(--blackA1)',
      'black-A2': 'var(--blackA2)',
      'black-A3': 'var(--blackA3)',
      'black-A4': 'var(--blackA4)',
      'black-A5': 'var(--blackA5)',
      'black-A6': 'var(--blackA6)',
      'black-A7': 'var(--blackA7)',
      'black-A8': 'var(--blackA8)',
      'black-A9': 'var(--blackA9)',
      'black-A10': 'var(--blackA10)',
      'black-A11': 'var(--blackA11)',
      'black-A12': 'var(--blackA12)',
    },
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        main: 'auto 640px auto',
      },
      maxWidth: {
        page: 1072,
        content: 640,
      },
      width: {
        page: 1072,
        content: 640,
      },
      transitionDuration: {
        instant: '0ms',
        fastest: '80ms',
        fast: '100ms',
        med: '160ms',
        xx: '240ms',
        xxl: '320ms',
        long: '480ms',
        slow: '1200ms',
      },
      spacing: {
        page: 'var(--page-top)',
      },
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({});
    },
  ],
};
