import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  width: 80%;
`;

const About_us = () => {
  return (
    <>
      <Text>
        AweSUM은 딥러닝을 이용한 영어 강의 요약 및 부가적인 기능을 제공하여{' '}
        <br />
        비대면 학습 상황에서 학습 능률을 오르게 도와주는 서비스입니다.
      </Text>
      <br />
      <Text>
        가장 핵심적으로 동영상으로부터 음성을 추출하여 텍스트화하고 <br /> 이를
        요약한 텍스트를 제공합니다
      </Text>
      <br />
      <Text>
        또한 키워드 검색이 가능합니다. <br />
        찾고자하는 단어가 영상 내에서 등장한 시각과 해당 키워드를 포함하고 있는
        문장들을 찾아서 보여줍니다.
      </Text>
      <br />
      <Text>
        마지막으로 OX 퀴즈 자동생성 기능을 통해 앞 단계에서 도출해냈던 요약본을
        기반으로 <br />
        영상의 핵심 내용을 담은 참/거짓 명제를 생성하여 문제와 정답을 제공합니다
      </Text>
    </>
  );
};

export default About_us;
