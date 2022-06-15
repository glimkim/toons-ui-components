import styled from 'styled-components';
import React, { useState, useCallback, HTMLAttributes } from 'react';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';

interface CheckboxProps extends Omit<HTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  defaultValue?: boolean;
}

function Checkbox({ id, onChange, defaultValue = false }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);

  const onCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => !prev);
      onChange && onChange(e);
    },
    [onChange],
  );

  return (
    <ToonsThemeProvider>
      <CheckboxContainer>
        <input type="checkbox" id={id} onChange={onCheckboxChange} checked={isChecked} />
        <CustomCheckbox htmlFor={id} isChecked={isChecked} />
      </CheckboxContainer>
    </ToonsThemeProvider>
  );
}

const CheckboxContainer = styled.div`
  input {
    position: absolute;
    left: -999em;
  }
`;

const CustomCheckbox = styled.label<{ isChecked: boolean }>`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 0.36rem;
  background-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.main : 'transparent')};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.main + 90};
  }
  &::before {
    position: absolute;
    z-index: 10;
    display: block;
    width: 12px;
    height: 4px;
    border-radius: 0.2rem;
    background-color: ${({ isChecked }) => (isChecked ? '#fff' : 'transparent')};
    transform-origin: left top;
    transform: translate(3.5px, 5px) rotate(60deg) ${({ isChecked }) => (isChecked ? 'scaleX(1)' : 'scaleX(0)')};
    content: '';
    transition: 0.2s;
  }
  &::after {
    position: absolute;
    z-index: 10;
    width: 16px;
    height: 4px;
    border-radius: 0.2rem;
    transform-origin: left bottom;
    transform: translate(9px, 12.5px) rotate(-50deg) ${({ isChecked }) => (isChecked ? 'scaleX(1)' : 'scaleX(0)')};
    background-color: ${({ isChecked }) => (isChecked ? '#fff' : 'transparent')};
    content: '';
    transition: ${({ isChecked }) => (isChecked ? ' 0.2s' : '')};
    transition-delay: ${({ isChecked }) => (isChecked ? ' 0.2s' : '')};
  }
`;

export default Checkbox;
