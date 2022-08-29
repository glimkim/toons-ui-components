import Dark from './dark';
import Default from './default';
export interface Theme {
  name: string;
  colors: {
    main: string;
    mainPale: string;
    white: string;
    gray00: string;
    gray10: string;
    gray20: string;
    gray30: string;
    gray40: string;
    gray50: string;
    red: string;
  };
  borderRadius: string;
}

export { Dark, Default };
