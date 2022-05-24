import Dark from './dark';
import Default from './default';
interface IPalette {
  main: string;
  contrast: string;
}
export interface Theme {
  name: string;
  colors: {
    primary: IPalette;
    secondary: IPalette;
    fontColor: string;
  };
  borderRadius: string;
}

export { Dark, Default };
