import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../components/common/Button';
import palette from '../styles/palette';
import Input from '../components/main/Input';
import Summary from '../components/summary/Summary';
import Quiz from '../components/quiz/Quiz';
import ReactPlayer from 'react-player/youtube';
import KeywordSearch from '../components/main/KeywordSearch';
import { USER_SERVER } from '../config.js';

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
  height: 850px;
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

const MainPage = () => {
  // URL + Video_ID
  const [videoID, setVideoId] = useState(13);
  const [inputs, setInputs] = useState('');
  const onChange = (e) => {
    const value = e.target.value;
    setInputs(value);
  };

  const [URL, setURL] = useState('https://www.youtube.com/watch?v=hmyjdCfeXUo');
  const _handleClick = () => {
    const value = inputs;
    setURL(value);
    axios
      .post(`${USER_SERVER}/videos/save/`, {
        url: value,
      })
      .then(function (response) {
        setVideoId(response.data.id);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <Board
            style={{
              borderRadius: '28px',
              height: '90%',
              justifyContent: 'space-around',
            }}
          >
            <KeywordSearch videoID={videoID} />
          </Board>
        </SubSection2>
      </Block1>
      <Block2>
        <SubSection3>
          <Header>SUMMARY</Header>
          <Board style={{ height: '75%' }}>
            <Summary videoID={videoID} />
          </Board>
        </SubSection3>
      </Block2>
      <Block1>
        <SubSection3>
          <Quiz videoID={videoID} />
        </SubSection3>
      </Block1>
    </>
  );
};

export default MainPage;
