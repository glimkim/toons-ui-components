import Dark from './dark';
import Default from './default';

export interface Theme {
  [key: string]: string | Theme;
}

export { Dark, Default };
