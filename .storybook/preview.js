import { withThemesProvider } from 'themeprovider-storybook';
import { Dark, Default } from '../src/themes/index.ts';
import CustomComponentWrapper from './decorators/CustomComponentWrapper';
import { themes as storybookThemes } from '@storybook/theming';

const themes = [Default, Dark];
export const decorators = [withThemesProvider(themes), CustomComponentWrapper];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: storybookThemes.dark,
  },
};
