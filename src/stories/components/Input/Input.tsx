import React from 'react';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled from 'styled-components';

interface InputProps {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
  errorText?: string;
  fullWidth?: boolean;
}

function Input({ id, onChange, label, type = 'text', placeholder, errorText, fullWidth = true }: InputProps) {
  return (
    <ToonsThemeProvider>
      <InputContainer fullWidth={fullWidth} hasError={!!errorText}>
        {label && <label htmlFor={id}>{label}</label>}
        <div className="inputWrapper">
          <input id={id} type={type} onChange={onChange} placeholder={placeholder} />
          {errorText && <span className="errorText">{errorText}</span>}
        </div>
      </InputContainer>
    </ToonsThemeProvider>
  );
}

const InputContainer = styled.div<{ fullWidth: boolean; hasError: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  label {
    display: block;
    margin-bottom: 0.36rem;
    font-size: 1rem;
    color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.gray00 : theme.colors.gray50)};
  }

  input {
    width: 100%;
    height: 2.67rem;
    line-height: 2.67rem;
    padding: 0 0.7rem;
    border: none;
    border-radius: 0.7rem;
    box-shadow: 1px 2px 5px ${({ theme, hasError }) => (hasError ? theme.colors.red + '50' : '#00000015')};
    background-color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.gray00 : '#fff')};
    color: ${({ theme }) => theme.colors.gray50};
    transition: 0.3s ease-in-out;

    &:focus {
      box-shadow: 1px 2px 5px ${({ theme, hasError }) => (hasError ? theme.colors.red + '50' : theme.colors.main + 50)};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray20};
      font-weight: bold;
    }
  }

  span.errorText {
    display: block;
    padding-top: 0.2rem;
    color: ${({ theme: { colors } }) => colors.red};
    font-size: 0.875rem;
  }
`;

export default Input;
