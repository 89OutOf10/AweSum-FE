import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import About_us from '../components/about/About_us';

//icons
import seo from '../assets/about/icon_seojeong.png';
import se from '../assets/about/icon_seyoung.png';
import som from '../assets/about/icon_somin.png';
import yun from '../assets/about/icon_yuna.png';

const AboutBlock = styled.div`
  background: ${palette.pink[2]};
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 2rem;
`;

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 80px;
`;

const Board = styled.div`
  background: ${palette.pink[1]};
  border-radius: 16px;
  height: 45%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <>
      <AboutBlock>
        <Header>ABOUT</Header>
        <Board>
          <About_us />
        </Board>
        <Wrapper>
          <SubWrapper>
            <img src={seo} style={{ height: '150px' }} />
            <Text>NAME: SEOJEONG KIM </Text>
            <Text>POSITION: DL, BACKEND</Text>
          </SubWrapper>
          <SubWrapper>
            <img src={se} style={{ height: '150px' }} />
            <Text>NAME: SEYOUNG JEONG </Text>
            <Text>POSITION: DL, FRONTEND</Text>
          </SubWrapper>
          <SubWrapper>
            <img src={som} style={{ height: '150px' }} />
            <Text>NAME: SOMIN KIM </Text>
            <Text>POSITION: DL, FRONTEND</Text>
          </SubWrapper>
          <SubWrapper>
            <img src={yun} style={{ height: '150px' }} />
            <Text>NAME: YUNA KIM </Text>
            <Text>POSITION: DL, BACKEND</Text>
          </SubWrapper>
        </Wrapper>
      </AboutBlock>
    </>
  );
};

export default AboutPage;
