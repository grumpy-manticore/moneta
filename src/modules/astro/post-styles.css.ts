import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const postWrapper = style({
  maxWidth: '48rem',
  padding: '2rem 0.5rem 0.5rem',
});

globalStyle(`${postWrapper} > h1`, {
  fontSize: '2rem',
  marginBottom: '1rem',
});

globalStyle(`${postWrapper} > h2`, {
  borderBottom: `1px solid ${vars.color.white}`,
  fontSize: '1.5rem',
  marginBottom: '1rem',
});

globalStyle(`${postWrapper} > p + h2`, {
  paddingTop: '0.5rem',
});

globalStyle(`${postWrapper} > p`, {
  fontSize: '1rem',
  marginBottom: '0.75rem',
});
