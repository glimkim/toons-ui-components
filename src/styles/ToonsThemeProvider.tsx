import React from 'react';
import { Theme } from 'src/themes';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ToonsThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ToonsThemeProvider;
