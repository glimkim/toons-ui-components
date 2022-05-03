import Dark from './dark';
import Default from './default';
export interface Theme {
  name: string;
  colors: {
    primary: string;
  };
  borderRadius: string;
}

export { Dark, Default };
