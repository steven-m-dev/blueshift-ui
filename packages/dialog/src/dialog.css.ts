import { globalStyle, style } from '@vanilla-extract/css';

const titleContainer = style({
  alignItems: 'center',
  display: 'flex',
});

const titleWithCloseButton = style({});

globalStyle(`${titleWithCloseButton}.MuiDialogTitle-root`, {
  justifyContent: 'space-between',
});

export { titleContainer, titleWithCloseButton };
