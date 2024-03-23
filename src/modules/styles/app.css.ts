import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  backgroundColor: vars.color.black,
  color: vars.color.white,
  fontFamily: "'Fira Mono', sans-serif;",
  padding: '0.5rem',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: '1rem',
  fontWeight: 400,
});

globalStyle('p, li', {
  lineHeight: '1.35',
});

globalStyle('a', {
  color: vars.color.gold,
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'all 0.3s ease-in-out',
  width: 'fit-content',
});

globalStyle(`a:hover`, {
  borderBottomColor: vars.color.gold,
});

globalStyle('ul, ol', {
  listStylePosition: 'inside',
});
