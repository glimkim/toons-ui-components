import { color } from '@storybook/theming';
import React, { HTMLAttributes } from 'react';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled, { css } from 'styled-components';

type LoaderTheme = 'white' | 'mix' | 'main';
interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  isPartial?: boolean;
  theme?: LoaderTheme;
}

function Loader({ isPartial = false, theme = 'white' }: LoaderProps) {
  return (
    <ToonsThemeProvider>
      <ToonsLoader isPartial={isPartial} loaderTheme={theme}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ToonsLoader>
    </ToonsThemeProvider>
  );
}

const ToonsLoader = styled.div<{ isPartial: boolean; loaderTheme: LoaderTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isPartial }) => {
    return isPartial
      ? css`
          width: 100%;
          height: 100%;
          .lds-ellipsis {
            width: 5.2rem;
            height: 0.7rem;
          }
          .lds-ellipsis div {
            width: 0.7rem;
            height: 0.7rem;
          }
        `
      : css`
          position: fixed;
          z-index: 1010;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #00000070;
          .lds-ellipsis {
            width: 6rem;
            height: 1rem;
          }
          .lds-ellipsis div {
            width: 1rem;
            height: 1rem;
          }
        `;
  }}

  .lds-ellipsis {
    display: inline-block;
    position: relative;
  }
  .lds-ellipsis div {
    position: absolute;
    border-radius: 50%;
    background: ${({ loaderTheme, theme: { colors } }) => (loaderTheme === 'main' ? colors.main : '#fff')};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    transition: 0.3s;
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
    background: ${({ loaderTheme, theme: { colors } }) => (loaderTheme === 'white' ? '#fff' : colors.main)};
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default Loader;
