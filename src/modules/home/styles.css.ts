import { style } from '@vanilla-extract/css';

export const main = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const container = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '5rem',
  width: '100%',
});

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const navList = style({
  color: '#D5A021',
  display: 'flex',
  listStyle: 'none',
});

export const navItem = style({
  display: 'flex',
  selectors: {
    '&:not(:last-child)::after': {
      content: '|',
      color: 'inherit',
      padding: '0 0.5rem',
    },
  },
});

export const heading = style({
  fontSize: '2rem',
  padding: '5rem 0 0.5rem',
});
