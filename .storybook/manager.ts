import { addons } from '@storybook/addons';
import favicon from './favicon.ico';
import theme from './theme';

// Set favicon
const link = document.createElement('link');
link.setAttribute('rel', 'icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

// Set config
addons.setConfig({
  theme,
});
