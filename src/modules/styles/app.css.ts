import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  backgroundColor: '#0E0D10',
  color: '#F1F0EA',
  fontFamily: "'Fira Mono', sans-serif;",
  padding: '0.5rem',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: '1rem',
  fontWeight: 400,
});

globalStyle('a', {
  color: '#D5A021',
  textDecoration: 'none',
});
