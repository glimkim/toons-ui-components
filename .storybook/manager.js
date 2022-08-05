import { addons } from '@storybook/addons';
import toonsTheme from './customStorybookTheme/ToonsTheme';
import favicon from '../public/favicon.png';

addons.setConfig({
  theme: toonsTheme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
