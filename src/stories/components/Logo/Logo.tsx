import React from 'react';
import { ReactComponent as BasicLogo } from '../../assets/logo_basic.svg';
import { ReactComponent as LightLogo } from '../../assets/logo_light.svg';
import { ReactComponent as DarkLogo } from '../../assets/logo_dark.svg';
import styled, { css } from 'styled-components';

type LogoStyle = 'DARK' | 'LIGHT' | 'BASIC';

interface LogoProps {
  style: LogoStyle;
  width?: string;
  height?: string;
}

function Logo({ style = 'BASIC', width, height }: LogoProps) {
  const toonsLogo: { [key in LogoStyle]: React.ReactElement } = {
    BASIC: <BasicLogo />,
    LIGHT: <LightLogo />,
    DARK: <DarkLogo />,
  };

  return (
    <LogoIcon width={width} height={height}>
      {toonsLogo[style]}
    </LogoIcon>
  );
}

const LogoIcon = styled.figure<{ width?: string; height?: string }>`
  ${({ width, height }) => {
    return css`
      width: ${width || '135px'};
      height: ${height || 'auto'};
    `;
  }}
  & > svg {
    width: 100%;
  }
`;

export default Logo;
