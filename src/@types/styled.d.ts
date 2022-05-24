import { Theme } from './../../src/themes/index';
import 'styled-components';

interface IPalette {
  main: string;
  contrast: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
