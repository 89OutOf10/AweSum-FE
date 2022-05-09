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
  const [length, setLength] = useState(2);
  const _onClick = (id) => {
    setLength(id);
  };

  // modal
  const [openModal, setOpenModal] = useState(false);
  const _handleModal = () => {
    setOpenModal(!openModal);
  };
  // 인자값 받아오기 (medium / long 뭐 선택했는지) - 연결시 (long: 2, medium: 1)
  const onGenerate = (e) => {
    _handleModal();
  };

  return (
    <Wrapper>
      <Text style={{ marginBottom: '60px', fontWeight: 'bolder' }}>
        CHOOSE SUMMARY LENGTH
      </Text>
      <SubWrapper>
        <RadioButton
          onClick={() => {
            _onClick(2);
          }}
          checked={length === 2}
        />
        <Text>LONG</Text>
      </SubWrapper>
      <SubWrapper>
        <RadioButton
          onClick={() => {
            _onClick(1);
          }}
          checked={length === 1}
        />
        <Text>MEDIUM</Text>
      </SubWrapper>
      <Button onClick={onGenerate} style={{ marginTop: '60px' }}>
        GENERATE
      </Button>
      {openModal && <SummaryModal _handleModal={_handleModal} />}
    </Wrapper>
  );
};

export default Summary;
