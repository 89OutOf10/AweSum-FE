import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuizModal from './QuizModal.js';
import Button from '../common/Button';
import axios from 'axios';
import { USER_SERVER } from '../../config.js';

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.725rem;
  line-height: 35px;
  text-align: center;
`;

const QuizBoard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 80px;
  margin-left: 10px;
`;

const Quiz = ({ videoID }) => {
  const [openModal, setOpenModal] = useState(false);

  const _handleModal = () => {
    setOpenModal(!openModal);
  };

  const onClick = (e) => {
    _handleModal();
  };

  return (
    <QuizBoard>
      <Header>OX QUIZ</Header>
      <Text>
        이번 강의의 핵심 문장들로 출제된 OX QUIZ를 통해 <br /> 강의를 얼마나
        이해했는지 확인해보세요!
      </Text>
      <Button onClick={onClick} style={{ marginBottom: '20px' }}>
        시작하기
      </Button>
      {openModal && <QuizModal videoID={videoID} _handleModal={_handleModal} />}
    </QuizBoard>
  );
};

export default Quiz;
