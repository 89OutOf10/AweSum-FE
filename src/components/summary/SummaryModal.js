import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalFrame from '../common/ModalFrame';
import palette from '../../styles/palette.js';
import axios from 'axios';
import { Oval, MutatingDots } from 'react-loader-spinner';
import { USER_SERVER } from '../../config.js';

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
const SummaryModal = ({ _handleModal, videoID, length }) => {
  useEffect(() => {
    request();
  }, []);

  const [loading, setLoading] = useState(true);

  // 비디오 ID 이용해서 response 받기
  const [summary, setSummary] = useState('');
  const request = () => {
    console.log('requesting summary');
    length === 2 &&
      axios
        .get(`${USER_SERVER}/summaries/long?id=${videoID}`)
        .then(function (response) {
          setSummary(response.data[0].body);
          console.log(response.data[0].body);
          console.log('long summary generated');
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });

    length === 1 &&
      axios
        .get(`${USER_SERVER}/summaries/medium?id=${videoID}`)
        .then(function (response) {
          setSummary(response.data[0].body);
          console.log('medium summary generated');
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
  };
  if (loading)
    return (
      <ModalFrame _handleModal={_handleModal}>
        <h1>Summary</h1>
        <Textbox>
          <MutatingDots color="purple" />
        </Textbox>
      </ModalFrame>
    );

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
