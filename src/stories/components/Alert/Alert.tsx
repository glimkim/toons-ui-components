import React, { HTMLAttributes } from 'react';
import { CSSTransition } from 'react-transition-group';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled, { css } from 'styled-components';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  alertContents: React.ReactNode;
}

function Alert({ open, alertContents }: AlertProps) {
  return (
    <ToonsThemeProvider>
      <CSSTransition in={open} timeout={300} unmountOnExit>
        <AlertContainer>
          <span>{alertContents}</span>
        </AlertContainer>
      </CSSTransition>
    </ToonsThemeProvider>
  );
}

const AlertContainer = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  background-color: #8aec8a;
`;

export default Alert;
