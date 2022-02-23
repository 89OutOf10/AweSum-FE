import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const StyledButton = styled.button`
  border-radius: 4px;
  border-color: ${palette.purple[0]};
  height: 3rem;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: ${palette.purple[0]};
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 900;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  background: ${palette.white[0]};

  &:hover {
    background: ${palette.purple[0]};
    color: ${palette.white[0]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
