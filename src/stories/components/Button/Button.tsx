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
  padding: ${(props) => (props.size === 'medium' ? '0 1.43rem' : props.size === 'large' ? '0 1.86rem' : '0 1rem')};
  height: ${(props) => (props.size === 'medium' ? '3.43rem' : props.size === 'large' ? '3.43rem' : '2.57rem')};
  line-height: ${(props) => (props.size === 'medium' ? '3.43rem' : props.size === 'large' ? '3.43rem' : '2.57rem')};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  font-size: 1rem;
`;

export default Button;
