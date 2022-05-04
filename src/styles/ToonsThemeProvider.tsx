import React from 'react';
// eslint-disable-next-line import/named
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import DarkTheme from '../themes/dark';
import Theme from '../themes/default';

type ThemeType = 'DEFAULT' | 'DARK';
interface ThemeProviderProps {
  themeType: ThemeType;
  children: React.ReactNode;
}

function ToonsThemeProvider({ themeType, children }: ThemeProviderProps) {
  const themes: {
    [key in ThemeType]: DefaultTheme;
  } = {
    DARK: DarkTheme,
    DEFAULT: Theme,
  };
  const theme: DefaultTheme = themes[themeType];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ToonsThemeProvider;
