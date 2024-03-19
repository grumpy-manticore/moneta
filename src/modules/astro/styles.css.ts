import { style } from '@vanilla-extract/css';

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

export const navLink = style({
  borderBottom: '1px solid transparent',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    borderBottomColor: '#D5A021',
  },
  selectors: {
    '&[data-active]': {
      borderBottomColor: '#D5A021',
    },
  },
});
