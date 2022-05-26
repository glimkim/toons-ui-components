import React from 'react';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonTheme = 'primary' | 'secondary';

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  buttonTheme?: ButtonTheme;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, size = 'medium', buttonTheme = 'primary', fullWidth = false, ...props }: ButtonProps) => {
  return (
    <ToonsThemeProvider>
      <ButtonComponent type="button" size={size} fullWidth={fullWidth} buttonTheme={buttonTheme} {...props}>
        {children}
      </ButtonComponent>
    </ToonsThemeProvider>
  );
};

const ButtonComponent = styled.button<{ size: ButtonSize; fullWidth: boolean; buttonTheme: ButtonTheme }>`
  display: block;
  padding: ${(props) => (props.size === 'medium' ? '0 1rem' : props.size === 'large' ? '0 1.43rem' : '0 0.7rem')};
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  height: ${(props) => (props.size === 'medium' ? '3rem' : props.size === 'large' ? '3.14rem' : '2.57rem')};
  line-height: ${(props) => (props.size === 'medium' ? '3rem' : props.size === 'large' ? '3.14rem' : '2.57rem')};
  background-color: ${(props) =>
    props.buttonTheme === 'primary' ? props.theme.colors.main : props.theme.colors.gray40};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  font-size: 1rem;
  color: ${(props) => (props.buttonTheme === 'primary' ? props.theme.colors.gray50 : props.theme.colors.main)};
  font-weight: bold;
  box-shadow: 1.5px 1.5px 5px rgb(43, 43, 43, 0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.main + '75'};
  }
`;

export default Button;
