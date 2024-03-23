import { createTheme, type StyleRule } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    black: '#0E0D10',
    blue: {
      40: '#089DD928',
      100: '#089DD9',
    },
    gold: '#D5A021',
    grey: '#666B6A',
    lightBlue: '#26BCF7',
    white: '#F1F0EA',
  },
  size: {
    full: '100%',
    max: '48rem',
  },
});
