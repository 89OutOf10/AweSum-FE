import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const AboutBlock = styled.div`
  background: ${palette.pink[2]};
  height: 100rem;
`;

const aboutPage = () => {
  return (
    <>
      <AboutBlock>
        {/*임의로 내가 자리 잡을려고 만든것 -> styled components로 이거 지우고 다시 만들면 돼!*/}
        <h1 style={{ marginTop: '0px', marginLeft: '40rem' }}>ABOUT</h1>
      </AboutBlock>
    </>
  );
};

export default aboutPage;
