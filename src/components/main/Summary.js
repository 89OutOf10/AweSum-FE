import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';
import RadioButton from '../common/RadioButton';

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
  font-size: 30px;
  line-height: 25px;
  text-align: center;
`;

const SubWrapper = styled.div`
  margin-top: 10px;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Summary = ({ ...props }) => {
  const [checkedMedium, setCheckedMedium] = useState(false);
  const onClick = (e) => {
    setCheckedMedium(!checkedMedium);
  };

  const [checkedLong, setCheckedLong] = useState(false);
  const onClick2 = (e) => {
    setCheckedLong(!checkedLong);
  };

  return (
    <Wrapper>
      <Text style={{ marginBottom: '80px', fontWeight: 'bolder' }}>
        CHOOSE SUMMARY LENGTH
      </Text>
      <SubWrapper>
        <RadioButton onClick={onClick} checked={checkedMedium} />
        <Text>MEDIUM</Text>
      </SubWrapper>
      <SubWrapper>
        <RadioButton onClick={onClick2} checked={checkedLong} />
        <Text>LONG</Text>
      </SubWrapper>
      <Button style={{ marginTop: '60px' }}>GENERATE</Button>
    </Wrapper>
  );
};

export default Summary;
