import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const noDecorationList = style({
  listStyle: 'none',
});

export const title = style({
  fontSize: '2rem',
});

export const maxWidthContainer = style({
  maxWidth: vars.size.max,
  width: vars.size.full,
});
