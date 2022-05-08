import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import RadioButton from '../common/RadioButton';
import SummaryModal from './SummaryModal';

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
  font-weight: bold;
  line-height: 25px;
  font-size: 25px;
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
  // button
  const [checkedMedium, setCheckedMedium] = useState(true);
  const onClick = (e) => {
    setCheckedMedium(!checkedMedium);
    setCheckedLong(!checkedLong);
  };

  const [checkedLong, setCheckedLong] = useState(false);
  const onClick2 = (e) => {
    setCheckedLong(!checkedLong);
    setCheckedMedium(!checkedMedium);
  };

  // modal
  const [openModal, setOpenModal] = useState(false);

  const _handleModal = () => {
    setOpenModal(!openModal);
    // console.log('changed visibility');
  };

  // 인자값 받아오기 (medium / long 뭐 선택했는지) - 연결시
  const onClick3 = (e) => {
    _handleModal();
  };

  return (
    <Wrapper>
      <Text style={{ marginBottom: '60px', fontWeight: 'bolder' }}>
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
      <Button onClick={onClick3} style={{ marginTop: '60px' }}>
        GENERATE
      </Button>
      {openModal && <SummaryModal _handleModal={_handleModal} />}
    </Wrapper>
  );
};

export default Summary;
