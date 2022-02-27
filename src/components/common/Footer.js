import React, { useState } from 'react';
import Responsive from './Responsive';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

const FooterBlock = styled.div`
  width: 100%;
  height: 45px;
  background: ${palette.pink[0]};
`;

/* Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */
const Wrapper = styled(Responsive)`
  height: 2rem;
  display: flex;
  justify-content: end;

  @media (max-width: 767px) {
    //padding: 1rem;
  }
`;

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  // letter-spacing: 0.04em;

  color: ${palette.purple[0]};
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-right: 0px;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Wrapper>
        <Text>CONTACT: nearlyten@gmail.com </Text>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
