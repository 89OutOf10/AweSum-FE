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
            style={{ marginTop: '5%', marginLeft: '5%', marginBottom: '2%' }}
          />
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
