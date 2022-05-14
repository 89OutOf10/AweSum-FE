import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;
  text-align: center;
  color: ${palette.purple[0]};
  border: 2px solid ${palette.purple[0]};
  border-radius: 4px;
  width: 160px;
`;

const TimeFrame = ({ ...props }) => {
  return (
    <>
      <Text {...props}>KEY-WORD SEARCH</Text>
    </>
  );
};

export default TimeFrame;
