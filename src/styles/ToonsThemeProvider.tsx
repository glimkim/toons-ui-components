import React from 'react';
// eslint-disable-next-line import/named
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';

interface ThemeProviderProps {
  theme: DefaultTheme;
  children: React.ReactNode;
}

function ToonsThemeProvider({ theme, children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ToonsThemeProvider;
