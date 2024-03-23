import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

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
  '@media': {
    'screen and (max-width: 37.5rem)': {
      paddingBottom: '2.5rem',
    },
  },
});

export const heading = style({
  fontSize: '2rem',
  padding: '5rem 0 0.5rem',
  '@media': {
    'screen and (max-width: 37.5rem)': {
      padding: '2.5rem 0 0',
    },
  },
});

export const recentPostsContainer = style({
  maxWidth: '48rem',
  padding: '1rem',
  width: '100%',
  '@media': {
    'screen and (max-width: 37.5rem)': {
      padding: '0',
    },
  },
});

export const recentPostsHeading = style({
  fontSize: '1.75rem',
  fontWeight: 'bold',
});

export const recentPostBox = style({
  border: `1px solid ${vars.color.white}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  margin: '1rem 0',
  padding: '0.5rem',
  width: '100%',
});

export const recentPostTitleContainer = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 37.5rem)': {
      flexDirection: 'column',
      alignItems: 'start',
    },
  },
});

export const recentPostTitle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
});

export const recentPostDate = style({
  color: vars.color.grey,
  fontSize: '0.875rem',
});

export const recentPostUpdateDate = style([
  recentPostDate,
  {
    '@media': {
      'screen and (max-width: 37.5rem)': {
        display: 'none',
      },
    },
  },
]);

export const recentPostTagsContainer = style({
  display: 'flex',
  gap: '0.75rem',
});

export const recentPostDescription = style({
  textWrap: 'pretty',
});

export const recentPostReadMoreLink = style({
  selectors: {
    '&::after': {
      content: '\u2192',
      paddingLeft: '0.25rem',
    },
  },
});
