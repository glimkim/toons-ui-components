import React from 'react';
import styled from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button = ({ children, size = 'medium', ...props }: ButtonProps) => {
  return (
    <ButtonComponent type="button" size={size} {...props}>
      {children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button<{ size: ButtonSize }>`
  display: block;
  padding: ${(props) => (props.size === 'medium' ? '0 1rem' : props.size === 'large' ? '0 1.43rem' : '0 0.7rem')};
  height: ${(props) => (props.size === 'medium' ? '3.14rem' : props.size === 'large' ? '3.14rem' : '2.57rem')};
  line-height: ${(props) => (props.size === 'medium' ? '3.14rem' : props.size === 'large' ? '3.14rem' : '2.57rem')};
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary.contrast};
  font-weight: bold;
`;

export default Button;
