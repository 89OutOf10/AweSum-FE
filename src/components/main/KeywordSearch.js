import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Input from './Input.js';
import Button from '../../components/common/Button.js';
import TimeFrame from './TimeFrame.js';

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
  height: 96%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
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
  margin-bottom: 20px;
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

const KeywordSearch = () => {
  const [inputs, setInputs] = useState('');
  const onChange = (e) => {
    const value = e.target.value;
    setInputs(value);
    console.log(value);
  };

  return (
    <>
      <Col>
        <Board>
          <TimeFrame
            style={{ marginTop: '5%', marginLeft: '5%', marginBottom: '4%' }}
          />
          <Grid>
            <Time>12:30</Time>
            <Sentence>
              And all I am is a man I want the world in my hands I hate the
              beach But I stand in California with my toes in the sand Use the
              sleeves of my sweater Let's have an adventure Head in the clouds
              but my gravity centered
            </Sentence>
            <Time>20:42</Time>
            <Sentence>
              And if I may just take your breath away I don't mind if there's
              not much to say Sometimes the silence guides a mind To move to a
              place so far away The goosebumps start to raise The minute that my
              left hand meets your waist And then I watch your face Put my
              finger on your tongue 'cause you love to taste, yeah These hearts
              adore, everyone the other beats hardest for Inside this place is
              warm Outside it starts to pour
            </Sentence>
            <Time>28:17</Time>
            <Sentence>learning because now we only have access</Sentence>
            <Time>33:06</Time>
            <Sentence>
              And all I am is a man I want the world in my hands I hate the
              beach but I stand In California with my toes in the sand Use the
              sleeves of my sweater Let's have an adventure Head in the clouds
              but my gravity's centered Touch my neck and I'll touch yours
            </Sentence>
            <Time>51:29</Time>
            <Sentence>
              She knows what I think about And what I think about One love, two
              mouths One love, one house No shirt, no blouse Just us, you find
              out Nothing that I wouldn't wanna tell you about, no
            </Sentence>
          </Grid>
        </Board>
        <Row>
          <Input
            value={inputs}
            onChange={onChange}
            placeholder={' Keyword Search '}
          />
          <Button>ENTER</Button>
        </Row>
      </Col>
    </>
  );
};

export default KeywordSearch;
