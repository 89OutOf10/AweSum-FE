import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalFrame from '../common/ModalFrame';
import palette from '../../styles/palette.js';
import axios from 'axios';

const Textbox = styled.div`
  background: ${palette.pink[0]};
  border-radius: 16px;
  height: 85%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  text-align: center;
  height: 520px;
  width: 90%;
  overflow: auto;
`;

//length, videoID 받아옴
const SummaryModal = ({ summary, _handleModal }) => {
  return (
    <ModalFrame _handleModal={_handleModal}>
      <h1>Summary</h1>
      <Textbox>
        <Text>{summary}</Text>
      </Textbox>
    </ModalFrame>
  );
};

export default SummaryModal;
