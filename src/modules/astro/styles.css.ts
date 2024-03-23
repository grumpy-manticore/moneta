import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const main = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '@media': {
    'screen and (max-width: 37.5rem)': {
      flexDirection: 'column',
      gap: '0.5rem',
    },
  },
});

export const navList = style({
  color: vars.color.gold,
  display: 'flex',
  listStyle: 'none',

  '@media': {
    'screen and (max-width: 37.5rem)': {
      display: 'grid',
      gap: '0.5rem',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr));',
    },
  },
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
  '@media': {
    'screen and (max-width: 37.5rem)': {
      justifyContent: 'center',
      selectors: {
        '&:not(:last-child)::after': {
          content: '',
        },
      },
    },
  },
});

export const navLink = style({
  selectors: {
    '&[data-active]': {
      borderBottomColor: vars.color.gold,
    },
  },
});

export const tagLink = style({
  border: `1px solid ${vars.color.blue[100]}`,
  borderRadius: '999999px',
  color: vars.color.blue[100],
  backgroundColor: vars.color.blue[40],
  display: 'block',
  fontSize: '0.75rem',
  padding: '0.25rem 0.375rem',
  width: 'fit-content',
  selectors: {
    '&:hover': {
      borderColor: vars.color.lightBlue,
      color: vars.color.lightBlue,
    },
  },
});
