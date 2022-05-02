import { withThemesProvider } from "themeprovider-storybook";
import { Dark, Default } from "../src/themes/index.ts";

const themes = [Dark, Default];
export const decorators = [withThemesProvider(themes)];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}