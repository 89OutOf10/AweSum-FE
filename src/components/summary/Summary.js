import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import RadioButton from '../common/RadioButton';
import SummaryModal from './SummaryModal';
import axios from 'axios';
import { USER_SERVER } from '../../config.js';

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

const Summary = ({ videoID }) => {
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
    request();
    _handleModal();
  };

  // 비디오 ID 이용해서 response 받기
  // http://ec2-13-209-76-72.ap-northeast-2.compute.amazonaws.com/summaries/long?id=13
  const [summary, setSummary] = useState('');
  const request = () => {
    console.log('im requesting');
    length === 2 &&
      axios
        .get(`${USER_SERVER}/summaries/long?id=${videoID}`)
        .then(function (response) {
          setSummary(response.data[0].body);
          // console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    length === 1 &&
      axios
        .get(`${USER_SERVER}/summaries/medium?id=${videoID}`)
        .then(function (response) {
          setSummary(response.data[0].body);
          // console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
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
      {openModal && (
        <SummaryModal _handleModal={_handleModal} summary={summary} />
      )}
    </Wrapper>
  );
};

export default Summary;
