import Dark from './dark';
import Default from './default';

interface CommonColors {
  main: string;
  white: string;
  gray00: string;
  gray10: string;
  gray20: string;
  gray30: string;
  gray40: string;
  gray50: string;
}

interface ThemeColors extends CommonColors {
  red: string;
}
export interface Theme {
  name: string;
  colors: ThemeColors;
  borderRadius: string;
}

export { Dark, Default };
