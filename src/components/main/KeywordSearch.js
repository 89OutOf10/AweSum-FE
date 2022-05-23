import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input.js';
import Button from '../../components/common/Button.js';
import TimeFrame from './TimeFrame.js';
import axios from 'axios';
import { USER_SERVER } from '../../config.js';

const Board = styled.div`
  border-radius: 16px;
  border: 2px solid #8b8b8b;
  height: 90%;
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-betweeen;
  align-items: flex-start;
  overflow: auto;
`;

const Col = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grit-auto-rows: minmax(100px, auto);
  row-gap: 30px;
  column-gap: 20px;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Time = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
`;

const Sentence = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  overflow: auto;
`;

function KeywordList({ keyword }) {
  return (
    <Grid>
      <Time>{keyword.time}</Time>
      <Sentence>{keyword.text}</Sentence>
    </Grid>
  );
}

//videoID 랑 keyword 인자로 받음
const KeywordSearch = ({ videoID }) => {
  const [inputs, setInputs] = useState('');
  const onChange = (e) => {
    const value = e.target.value;
    setInputs(value);
  };

  // handle click
  const onClick = () => {
    request();
  };

  // 서버 연결
  const [keywords, setKeyword] = useState();
  const [loading, setLoading] = useState(true);

  const request = () => {
    console.log('im requesting keyword search');
    axios
      .get(`${USER_SERVER}/videos/find?id=${videoID}&q=${inputs}`)
      .then(function (response) {
        setKeyword(response.data);
        setLoading(false);
        console.log('complete');
        console.log(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (loading)
    return (
      <>
        <TimeFrame style={{ marginLeft: '10px', marginTop: '20px' }} />
        <Col>
          <Board />
          <Row>
            <Input
              value={inputs}
              onChange={onChange}
              placeholder={' Enter Key-Word '}
            />
            <Button onClick={onClick}>ENTER</Button>
          </Row>
        </Col>
      </>
    );
  return (
    <>
      <TimeFrame style={{ marginLeft: '10px', marginTop: '20px' }} />
      <Col>
        <Board>
          {keywords.map((keyword) => (
            <KeywordList keyword={keyword} key={keyword.sub_num} />
          ))}
        </Board>
        <Row>
          <Input
            value={inputs}
            onChange={onChange}
            placeholder={' Enter Key-Word '}
          />
          <Button onClick={onClick}>ENTER</Button>
        </Row>
      </Col>
    </>
  );
};

export default KeywordSearch;
