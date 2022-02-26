import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const InputLine = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  height: 45px;
  border-radius: 8px;
  background: ${palette.white};
  outline: none;
  border-color: ${palette.purple[0]};
  color: ${palette.gray[6]};
  width: 76%;
`;

const Input = ({ placeholder }) => {
  const [url, setURL] = useState('');
  const onChangeURL = (e) => {
    setURL(e.target.value);
  };

  return (
    <>
      <InputLine value={url} onChange={onChangeURL} placeholder={placeholder} />
    </>
  );
};

export default Input;
