import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  colorPrimary: '#0d0c3c',
  colorSecondary: '#4a48c6',

  brandTitle: 'BlueshiftUI',
  brandUrl: '/',
  brandImage: '',
  brandTarget: '_self',

  // UI
  appBg: '#f9f8f7',
  appContentBg: '#fff',
  appBorderColor: '#efeeea',
  appBorderRadius: 4,

  // Text colors
  textColor: '#0d0c3c',
  textInverseColor: '#efeeea',

  // Toolbar default and active colors
  barTextColor: '#6e6d8a',
  barSelectedColor: '#0d0c3c',
  barBg: '#efeeea',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#efeeea',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});

export default theme;