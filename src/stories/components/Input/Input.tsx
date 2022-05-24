import React from 'react';
import styled from 'styled-components';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  errorText?: string;
}

function Input({ onChange, label, placeholder, errorText }: InputProps) {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <div className="inputWrapper">
        <input type="text" onChange={onChange} />
        {errorText && <span className="errorText">{errorText}</span>}
      </div>
    </InputContainer>
  );
}

const InputContainer = styled.div``;

export default Input;
