import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import palette from '../styles/palette';
import Input from '../components/main/Input';

const Block1 = styled.div`
  background: ${palette.pink[2]};
  height: 48rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SubSection1 = styled.div`
  width: 55%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

const SubSection2 = styled.div`
  width: 38%;
  height: 48em;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SubSection3 = styled.div`
  width: 90%;
  height: 48em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Block2 = styled.div`
  background: ${palette.pink[1]};
  height: 48rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Board = styled.div`
  background: #ffffff;
  border-radius: 16px;
  height: 85%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-betweeen;
  align-items: flex-start;
`;

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

const mainPage = () => {
  return (
    <>
      <Block1>
        <SubSection1>
          <Board>
            <Header style={{ marginLeft: '20px' }}>VIDEO</Header>
          </Board>
          <Wrapper>
            <Input placeholder={'Type in the URL'} />
            <Button style={{ marginLeft: '10px' }}> ENTER </Button>
          </Wrapper>
        </SubSection1>
        <SubSection2>
          <Board style={{ borderRadius: '28px', height: '90%' }}></Board>
        </SubSection2>
      </Block1>
      <Block2>
        <SubSection3>
          <Header>SUMMARY</Header>
          <Board style={{ height: '75%' }}></Board>
        </SubSection3>
      </Block2>
      <Block1>
        <SubSection3>
          <QuizBoard>
            <Header>OX QUIZ</Header>
            <Text>
              이번 강의의 핵심 문장들로 출제된 OX QUIZ를 통해 <br /> 강의를
              얼마나 이해했는지 확인해보세요!
            </Text>
            <Button style={{ marginBottom: '10px' }}>시작하기</Button>
          </QuizBoard>
        </SubSection3>
      </Block1>
    </>
  );
};

export default mainPage;
