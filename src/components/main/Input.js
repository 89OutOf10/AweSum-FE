import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const InputLine = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  height: 45px;
  border-radius: 8px;
  background: ${palette.white};
  outline: none;
  border: 1.25px solid ${palette.purple[0]};
  color: ${palette.gray[6]};
  width: 76%;
`;

const Input = ({ value, onChange, placeholder }) => {
  return (
    <>
      <InputLine value={value} onChange={onChange} placeholder={placeholder} />
    </>
  );
};

export default Input;
