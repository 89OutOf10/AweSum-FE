import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../components/common/Button';
import palette from '../styles/palette';
import Input from '../components/main/Input';
import TimeFrame from '../components/main/TimeFrame';
import Summary from '../components/main/Summary';
import QuizModal from '../components/main/QuizModal';
import VideoPlayer from '../components/main/VideoPlayer';
import ReactPlayer from 'react-player/youtube';

const Block1 = styled.div`
  background: ${palette.pink[2]};
  height: 50rem;
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
  width: 99%;
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

const MainPage = () => {
  // URL
  const [inputs, setInputs] = useState('');
  const onChange = (e) => {
    const value = e.target.value;
    setInputs(value);
  };

  const [URL, setURL] = useState('https://www.youtube.com/watch?v=hmyjdCfeXUo');
  const _handleClick = async () => {
    const value = inputs;
    setURL(value);

    axios
      .post('http://54.167.81.218/videos/save/', {
        url: 'https://www.youtube.com/watch?v=8rXD5-xhemo&list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const _handleModal = () => {
    setOpenModal(!openModal);
    // console.log('changed visibility');
  };
  /* 인자값 받아오기 (medium / long 뭐 선택했는지) */
  const onClick = (e) => {
    _handleModal();
  };

  return (
    <>
      <Block1>
        <SubSection1>
          <Board>
            <Header
              style={{
                marginLeft: '20px',
                marginBottom: '10px',
                marginTop: '20px',
              }}
            >
              VIDEO
            </Header>
            <ReactPlayer
              controls={true}
              url={URL}
              width={'100%'}
              height={'70%'}
            />
          </Board>
          <Wrapper>
            <Input
              value={inputs}
              onChange={onChange}
              placeholder={' Enter URL'}
            />
            <Button onClick={_handleClick} style={{ marginLeft: '10px' }}>
              {' '}
              ENTER{' '}
            </Button>
          </Wrapper>
        </SubSection1>
        <SubSection2>
          <Board style={{ borderRadius: '28px', height: '90%' }}>
            <TimeFrame style={{ marginLeft: '20px', marginTop: '8%' }} />
          </Board>
        </SubSection2>
      </Block1>
      <Block2>
        <SubSection3>
          <Header>SUMMARY</Header>
          <Board style={{ height: '75%' }}>
            <Summary />
          </Board>
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
            <Button onClick={onClick} style={{ marginBottom: '10px' }}>
              시작하기
            </Button>
            {openModal && <QuizModal _handleModal={_handleModal} />}
          </QuizBoard>
        </SubSection3>
      </Block1>
    </>
  );
};

export default MainPage;
