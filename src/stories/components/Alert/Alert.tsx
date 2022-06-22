import React, { HTMLAttributes } from 'react';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled, { css } from 'styled-components';


interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

function Alert({ open }: AlertProps) {
  return (
    <ToonsThemeProvider>
      <AlertContainer></AlertContainer>
    </ToonsThemeProvider>
  );
}

const AlertContainer = styled.div``;

export default Alert;
