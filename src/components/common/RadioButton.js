import React from 'react';
import styled from 'styled-components';
import radiobuttonTrue from '../../assets/main/button_checked.png';
import radiobuttonFalse from '../../assets/main/button_unchecked.png';

const RadioButton = ({ checked, onClick }) => {
  return (
    <>
      {checked ? (
        <img
          onClick={onClick}
          src={radiobuttonTrue}
          alt="radiobuttonTrue"
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          onClick={onClick}
          src={radiobuttonFalse}
          alt="radiobuttonFalse"
          style={{ cursor: 'pointer' }}
        />
      )}
    </>
  );
};

export default RadioButton;
