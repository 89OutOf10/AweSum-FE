import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const Wrapper = styled.div`
  margin-top: 15%;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 25px;
  text-align: center;
`;

const SubWrapper = styled.div`
  margin-top: 10px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Summary = ({ ...props }) => {
  return (
    <Wrapper>
      <Text style={{ marginBottom: '80px' }}>CHOOSE SUMMARY LENGTH</Text>
      <SubWrapper>
        <Text>MEDIUM</Text>
      </SubWrapper>
      <SubWrapper>
        <Text>LONG</Text>
      </SubWrapper>
      <Button style={{ marginTop: '100px' }}>GENERATE</Button>
    </Wrapper>
  );
};

export default Summary;
